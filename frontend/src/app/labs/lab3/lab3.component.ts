import { Component, OnDestroy, signal, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactEvent {
  id: number;
  time: number;
  accel: number;   // peak acceleration m/s²
  duration: number;
}

@Component({
  selector: 'app-lab3',
  imports: [CommonModule],
  templateUrl: './lab3.component.html',
  styleUrl: './lab3.component.scss',
})
export class Lab3Component implements OnDestroy {
  /** Acceleration threshold for "contact" detection (m/s²) */
  readonly THRESHOLD = 15;
  readonly ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

  monitoring    = signal(false);
  /** Raw linear acceleration magnitude (m/s²) */
  accel         = signal(0);
  /** Mapped to 0-200cm for sonar display */
  distance      = signal(200);
  contacts      = signal<ContactEvent[]>([]);
  syncStatus    = signal<'idle' | 'syncing' | 'ok' | 'error'>('idle');
  uploadCount   = signal(0);
  error         = signal('');
  nextId = 1;

  private contactAt: number | null = null;
  private peakAccel = 0;
  private handler = (e: DeviceMotionEvent) => this.handleMotion(e);

  get isClose()        { return this.accel() >= this.THRESHOLD; }
  get totalContacts()  { return this.contacts().length; }
  get avgDuration() {
    const c = this.contacts();
    return c.length ? c.reduce((s, e) => s + e.duration, 0) / c.length : 0;
  }
  get maxAccel() {
    const c = this.contacts();
    return c.length ? Math.max(...c.map(e => e.accel)) : 0;
  }

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
    window.addEventListener('devicemotion', this.handler, true);
    this.zone.run(() => this.monitoring.set(true));
  }

  stopMonitoring() {
    window.removeEventListener('devicemotion', this.handler, true);
    this.monitoring.set(false);
    this.contactAt = null;
    this.peakAccel = 0;
  }

  private handleMotion(e: DeviceMotionEvent) {
    const a = e.acceleration ?? e.accelerationIncludingGravity;
    if (!a) return;
    const mag = Math.sqrt((a.x ?? 0) ** 2 + (a.y ?? 0) ** 2 + (a.z ?? 0) ** 2);
    // Map accel to "distance": 0 m/s² → 200cm, 20+ m/s² → 5cm
    const dist = Math.round(Math.max(5, 200 - mag * 9.75));

    this.zone.run(() => {
      this.accel.set(+mag.toFixed(2));
      this.distance.set(dist);

      if (mag >= this.THRESHOLD && this.contactAt === null) {
        this.contactAt = Date.now();
        this.peakAccel = mag;
      } else if (mag >= this.THRESHOLD) {
        if (mag > this.peakAccel) this.peakAccel = mag;
      } else if (mag < this.THRESHOLD * 0.5 && this.contactAt !== null) {
        const dur = Math.round((Date.now() - this.contactAt) / 1000);
        const ev: ContactEvent = {
          id: this.nextId++,
          time: this.contactAt,
          accel: +this.peakAccel.toFixed(2),
          duration: Math.max(1, dur),
        };
        this.contacts.update(c => [ev, ...c]);
        this.contactAt = null;
        this.peakAccel = 0;
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


