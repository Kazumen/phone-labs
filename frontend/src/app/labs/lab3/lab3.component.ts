import { Component, OnDestroy, signal, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactEvent {
  id: number;
  time: number;
  peakCm: number;   // max displacement from origin during "away" event, in cm
  duration: number;
}

@Component({
  selector: 'app-lab3',
  imports: [CommonModule],
  templateUrl: './lab3.component.html',
  styleUrl: './lab3.component.scss',
})
export class Lab3Component implements OnDestroy {
  /**
   * Contact fires when phone RETURNS within this distance from starting point.
   * Dead-reckoning approach: double-integrate DeviceMotionEvent.acceleration
   * with Zero-Velocity Update (ZUPT) to estimate 3-D displacement.
   */
  readonly CONTACT_CM = 30;
  readonly ENDPOINT   = 'https://jsonplaceholder.typicode.com/posts';

  monitoring   = signal(false);
  displacement = signal(0);   // 3-D distance from origin, cm
  speed        = signal(0);   // movement speed, cm/s
  accelMag     = signal(0);   // raw linear acceleration magnitude, m/s²
  contacts     = signal<ContactEvent[]>([]);
  syncStatus   = signal<'idle' | 'syncing' | 'ok' | 'error'>('idle');
  uploadCount  = signal(0);
  error        = signal('');
  nextId = 1;

  // ── Dead-reckoning state ────────────────────────────────────────────────
  private vx = 0; private vy = 0; private vz = 0;   // velocity  (m/s)
  private px = 0; private py = 0; private pz = 0;   // position  (m)
  private lastTs = 0;
  private histMag: number[] = [];                    // ZUPT sliding window
  private readonly ZUPT_WIN = 20;    // window size (samples)
  private readonly ZUPT_THR = 0.40;  // m/s² — below → stationary → decay v
  // ── Contact-event state ────────────────────────────────────────────────
  private awayStart: number | null = null;
  private peakCm = 0;
  private handler = (e: DeviceMotionEvent) => this.handleMotion(e);

  get isClose()       { return this.displacement() <= this.CONTACT_CM; }
  get totalContacts() { return this.contacts().length; }
  get avgDuration() {
    const c = this.contacts();
    return c.length ? c.reduce((s, e) => s + e.duration, 0) / c.length : 0;
  }
  get maxPeakCm() {
    const c = this.contacts();
    return c.length ? Math.max(...c.map(e => e.peakCm)) : 0;
  }
  /** Displacement capped at 200 cm for sonar radius mapping */
  get dispForSonar() { return Math.min(this.displacement(), 200); }

  constructor(private zone: NgZone) {}

  startMonitoring() {
    this.error.set('');
    const DME = DeviceMotionEvent as any;
    if (typeof DME.requestPermission === 'function') {
      // iOS 13+ — must call synchronously in user gesture
      DME.requestPermission()
        .then((state: string) => {
          if (state === 'granted') {
            this.attachListener();
          } else {
            this.zone.run(() =>
              this.error.set('Доступ до сенсора заборонено. Увімкніть у Safari → Налаштування → Сенсори руху.')
            );
          }
        })
        .catch((e: any) => {
          this.zone.run(() => this.error.set('Помилка: ' + (e?.message ?? e)));
        });
    } else {
      this.attachListener();
    }
  }

  private attachListener() {
    this.resetOrigin();
    window.addEventListener('devicemotion', this.handler, true);
    this.zone.run(() => this.monitoring.set(true));
  }

  stopMonitoring() {
    window.removeEventListener('devicemotion', this.handler, true);
    this.monitoring.set(false);
  }

  /** Reset the dead-reckoning origin — place phone near object, then press this */
  resetOrigin() {
    this.vx = this.vy = this.vz = 0;
    this.px = this.py = this.pz = 0;
    this.lastTs   = 0;
    this.histMag  = [];
    this.awayStart = null;
    this.peakCm   = 0;
    this.zone.run(() => { this.displacement.set(0); this.speed.set(0); });
  }

  private handleMotion(e: DeviceMotionEvent) {
    // DeviceMotionEvent.acceleration gives gravity-free linear acceleration
    const a  = e.acceleration;
    const ax = a?.x ?? 0, ay = a?.y ?? 0, az = a?.z ?? 0;
    const mag = Math.sqrt(ax * ax + ay * ay + az * az);

    // dt in seconds; capped to avoid jumps after resume/pause
    const now = e.timeStamp;
    const dt  = this.lastTs > 0 ? Math.min((now - this.lastTs) / 1000, 0.05) : 0;
    this.lastTs = now;

    // ── Zero-Velocity Update (ZUPT) ────────────────────────────────────────
    // Maintain a sliding window of recent magnitudes.
    // If the average is below threshold the phone is stationary →
    // exponentially decay velocity to prevent drift accumulation.
    this.histMag.push(mag);
    if (this.histMag.length > this.ZUPT_WIN) this.histMag.shift();
    const avgMag = this.histMag.reduce((s, v) => s + v, 0) / this.histMag.length;

    if (avgMag < this.ZUPT_THR) {
      this.vx *= 0.75; this.vy *= 0.75; this.vz *= 0.75;  // decay
    } else if (dt > 0) {
      // Integrate acceleration → velocity (Euler)
      this.vx += ax * dt;
      this.vy += ay * dt;
      this.vz += az * dt;
    }

    // Integrate velocity → position
    if (dt > 0) {
      this.px += this.vx * dt;
      this.py += this.vy * dt;
      this.pz += this.vz * dt;
    }

    const disp = Math.sqrt(this.px * this.px + this.py * this.py + this.pz * this.pz);
    const spd  = Math.sqrt(this.vx * this.vx + this.vy * this.vy + this.vz * this.vz);

    this.zone.run(() => {
      this.displacement.set(Math.round(disp * 100));
      this.speed.set(Math.round(spd * 100));
      this.accelMag.set(+mag.toFixed(2));

      const dispCm = this.displacement();
      if (dispCm > this.CONTACT_CM) {
        if (dispCm > this.peakCm)         this.peakCm = dispCm;
        if (this.awayStart === null)       this.awayStart = Date.now();
      } else if (this.awayStart !== null) {
        // Returned to origin — fire contact event
        const dur = Math.max(1, Math.round((Date.now() - this.awayStart) / 1000));
        const ev: ContactEvent = {
          id: this.nextId++, time: this.awayStart,
          peakCm: this.peakCm, duration: dur,
        };
        this.contacts.update(c => [ev, ...c]);
        this.awayStart = null;
        this.peakCm    = 0;
        this.uploadEvent(ev);
      }
    });
  }

  private async uploadEvent(ev: ContactEvent) {
    this.syncStatus.set('syncing');
    try {
      const res = await fetch(this.ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'proximity_event', body: JSON.stringify(ev), userId: 1 }),
      });
      this.syncStatus.set(res.ok ? 'ok' : 'error');
      if (res.ok) this.uploadCount.update(n => n + 1);
    } catch {
      this.syncStatus.set('error');
    }
    setTimeout(() => this.zone.run(() => this.syncStatus.set('idle')), 2500);
  }

  formatTime(ts: number) { return new Date(ts).toLocaleTimeString('uk-UA'); }
  clearHistory() { this.contacts.set([]); this.uploadCount.set(0); }
  ngOnDestroy() { this.stopMonitoring(); }
}


