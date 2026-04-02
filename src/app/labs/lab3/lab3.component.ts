import { Component, OnDestroy, signal, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactEvent {
  id: number;
  time: number;
  distance: number; // 0-100 (brightness-based %)
  duration: number;
}

@Component({
  selector: 'app-lab3',
  imports: [CommonModule],
  templateUrl: './lab3.component.html',
  styleUrl: './lab3.component.scss',
})
export class Lab3Component implements OnDestroy {
  // Threshold: brightness below this % means "object close"
  readonly THRESHOLD_PCT = 30;
  // JSONBin.io free bin — stores events as JSON (no auth required for demo)
  readonly ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

  monitoring   = signal(false);
  /** 0–100: brightness percent. 0 = fully covered (dark), 100 = fully open */
  brightness   = signal(100);
  contacts     = signal<ContactEvent[]>([]);
  syncStatus   = signal<'idle' | 'syncing' | 'ok' | 'error'>('idle');
  uploadCount  = signal(0);
  error        = signal('');
  cameraActive = signal(false);
  nextId = 1;

  private proximateAt: number | null = null;
  private stream?: MediaStream;
  private video?: HTMLVideoElement;
  private canvas?: HTMLCanvasElement;
  private ctx?: CanvasRenderingContext2D;
  private rafId?: number;

  get isClose() { return this.brightness() < this.THRESHOLD_PCT; }
  get totalContacts() { return this.contacts().length; }
  get avgDuration() {
    const c = this.contacts();
    return c.length ? c.reduce((s, e) => s + e.duration, 0) / c.length : 0;
  }
  get minBrightness() {
    const c = this.contacts();
    return c.length ? Math.min(...c.map(e => e.distance)) : 0;
  }

  constructor(private zone: NgZone) {}

  async startMonitoring() {
    this.error.set('');
    try {
      // Request rear camera (environment facing) — best for covering with hand
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: 64, height: 64 }
      });

      this.video  = document.createElement('video');
      this.canvas = document.createElement('canvas');
      this.canvas.width = 16;
      this.canvas.height = 16;
      this.ctx = this.canvas.getContext('2d', { willReadFrequently: true })!;

      this.video.srcObject = this.stream;
      this.video.setAttribute('playsinline', 'true');
      await this.video.play();

      this.monitoring.set(true);
      this.cameraActive.set(true);
      this.loop();
    } catch (e: any) {
      this.error.set('Немає доступу до камери: ' + (e?.message ?? e));
    }
  }

  stopMonitoring() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.stream?.getTracks().forEach(t => t.stop());
    this.monitoring.set(false);
    this.cameraActive.set(false);
    this.proximateAt = null;
  }

  private loop() {
    if (!this.ctx || !this.video || !this.canvas) return;
    this.ctx.drawImage(this.video, 0, 0, 16, 16);
    const data = this.ctx.getImageData(0, 0, 16, 16).data;

    // Average luminance (0–255)
    let sum = 0;
    for (let i = 0; i < data.length; i += 4) {
      sum += 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    }
    const lum = sum / (16 * 16);
    const pct = Math.round((lum / 255) * 100);

    this.zone.run(() => {
      this.brightness.set(pct);
      this.detectProximity(pct);
    });

    this.rafId = requestAnimationFrame(() => this.loop());
  }

  private detectProximity(pct: number) {
    if (pct < this.THRESHOLD_PCT && this.proximateAt === null) {
      this.proximateAt = Date.now();
    } else if (pct >= this.THRESHOLD_PCT && this.proximateAt !== null) {
      const dur = Math.round((Date.now() - this.proximateAt) / 1000);
      const ev: ContactEvent = {
        id: this.nextId++,
        time: this.proximateAt,
        distance: pct,
        duration: dur,
      };
      this.contacts.update(c => [ev, ...c]);
      this.proximateAt = null;
      this.uploadEvent(ev);
    }
  }

  private async uploadEvent(ev: ContactEvent) {
    this.syncStatus.set('syncing');
    try {
      const res = await fetch(this.ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'proximity_event',
          body: JSON.stringify(ev),
          userId: 1,
        }),
      });
      if (res.ok) {
        this.syncStatus.set('ok');
        this.uploadCount.update(n => n + 1);
      } else {
        this.syncStatus.set('error');
      }
    } catch {
      this.syncStatus.set('error');
    }
    setTimeout(() => this.zone.run(() => this.syncStatus.set('idle')), 2500);
  }

  formatTime(ts: number) {
    return new Date(ts).toLocaleTimeString('uk-UA');
  }

  clearHistory() { this.contacts.set([]); this.uploadCount.set(0); }

  ngOnDestroy() { this.stopMonitoring(); }
}
