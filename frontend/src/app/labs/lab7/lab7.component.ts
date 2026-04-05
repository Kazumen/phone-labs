import { Component, OnDestroy, signal, NgZone, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { API_URL } from '../../../api.config';

interface Waypoint { lat: number; lng: number; ts: number; speed: number | null; accuracy: number; }

interface GeoTrack {
  _id?: string;
  name: string;
  points: Waypoint[];
  distanceM: number;
  durationSec: number;
  startTs: number;
  endTs: number;
}

function haversineM(a: Waypoint, b: Waypoint): number {
  const R = 6371000;
  const dLat = (b.lat - a.lat) * Math.PI / 180;
  const dLng = (b.lng - a.lng) * Math.PI / 180;
  const h = Math.sin(dLat / 2) ** 2 +
    Math.cos(a.lat * Math.PI / 180) * Math.cos(b.lat * Math.PI / 180) *
    Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

@Component({
  selector: 'app-lab7',
  imports: [CommonModule, FormsModule],
  templateUrl: './lab7.component.html',
  styleUrl: './lab7.component.scss',
})
export class Lab7Component implements OnDestroy {
  private http = inject(HttpClient);

  tracking    = signal(false);
  distanceM   = signal(0);
  speedKmh    = signal(0);
  accuracy    = signal(0);
  elapsed     = signal(0);
  pointCount  = signal(0);
  error       = signal('');
  syncStatus  = signal<'idle' | 'saving' | 'ok' | 'error'>('idle');
  savedTracks = signal<GeoTrack[]>([]);
  loadStatus  = signal<'idle' | 'loading' | 'ok' | 'error'>('idle');

  trackName = 'Маршрут';

  private waypoints: Waypoint[] = [];
  private watchId?: number;
  private timerHandle?: ReturnType<typeof setInterval>;
  private startTs = 0;

  get avgSpeedKmh(): number {
    const sec = this.elapsed();
    if (!sec || !this.distanceM()) return 0;
    return +(this.distanceM() / sec * 3.6).toFixed(1);
  }

  constructor(private zone: NgZone) {
    this.loadTracks();
  }

  startStop() {
    if (this.tracking()) {
      this.stopTracking();
    } else {
      this.startTracking();
    }
  }

  private startTracking() {
    this.error.set('');
    if (!navigator.geolocation) {
      this.error.set('Геолокація не підтримується на цьому пристрої.');
      return;
    }
    this.waypoints = [];
    this.startTs = Date.now();
    this.distanceM.set(0);
    this.speedKmh.set(0);
    this.accuracy.set(0);
    this.elapsed.set(0);
    this.pointCount.set(0);

    this.timerHandle = setInterval(() => {
      this.zone.run(() => this.elapsed.set(Math.floor((Date.now() - this.startTs) / 1000)));
    }, 1000);

    this.watchId = navigator.geolocation.watchPosition(
      pos => this.zone.run(() => this.onPosition(pos)),
      err => this.zone.run(() => this.error.set('GPS: ' + err.message)),
      { enableHighAccuracy: true, maximumAge: 2000, timeout: 15000 }
    );
    this.zone.run(() => this.tracking.set(true));
  }

  private stopTracking() {
    if (this.watchId !== undefined) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = undefined;
    }
    clearInterval(this.timerHandle);
    this.tracking.set(false);

    if (this.waypoints.length >= 2) {
      this.saveTrack();
    }
  }

  private onPosition(pos: GeolocationPosition) {
    const wp: Waypoint = {
      lat:      pos.coords.latitude,
      lng:      pos.coords.longitude,
      ts:       pos.timestamp,
      speed:    pos.coords.speed,
      accuracy: pos.coords.accuracy,
    };

    if (this.waypoints.length > 0) {
      const prev = this.waypoints[this.waypoints.length - 1];
      const d = haversineM(prev, wp);
      if (d > 1) {   // ignore jitter under 1 m
        this.distanceM.update(v => +(v + d).toFixed(1));
      }
    }

    this.waypoints.push(wp);
    this.pointCount.set(this.waypoints.length);

    const spd = pos.coords.speed;
    this.speedKmh.set(spd !== null ? +(spd * 3.6).toFixed(1) : 0);
    this.accuracy.set(Math.round(pos.coords.accuracy));
  }

  private saveTrack() {
    const endTs = Date.now();
    const track: GeoTrack = {
      name:        this.trackName || 'Маршрут',
      points:      this.waypoints,
      distanceM:   this.distanceM(),
      durationSec: this.elapsed(),
      startTs:     this.startTs,
      endTs,
    };
    this.syncStatus.set('saving');
    this.http.post<GeoTrack>(`${API_URL}/tracks`, track).subscribe({
      next: saved => {
        this.syncStatus.set('ok');
        this.savedTracks.update(t => [saved, ...t]);
        setTimeout(() => this.syncStatus.set('idle'), 2500);
      },
      error: () => {
        this.syncStatus.set('error');
        setTimeout(() => this.syncStatus.set('idle'), 2500);
      },
    });
  }

  private loadTracks() {
    this.loadStatus.set('loading');
    this.http.get<GeoTrack[]>(`${API_URL}/tracks`).subscribe({
      next: tracks => { this.savedTracks.set(tracks); this.loadStatus.set('ok'); },
      error: () => this.loadStatus.set('error'),
    });
  }

  deleteTrack(id: string) {
    this.http.delete(`${API_URL}/tracks/${id}`).subscribe({
      next: () => this.savedTracks.update(ts => ts.filter(t => t._id !== id)),
      error: () => {},
    });
  }

  formatDuration(sec: number): string {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  }

  formatDate(ts: number): string {
    return new Date(ts).toLocaleString('uk-UA', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  ngOnDestroy() {
    if (this.watchId !== undefined) navigator.geolocation.clearWatch(this.watchId);
    clearInterval(this.timerHandle);
  }
}
