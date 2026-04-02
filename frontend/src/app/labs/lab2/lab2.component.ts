import { Component, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Measurement {
  timestamp: number;
  current: number;
  power: number;
}

@Component({
  selector: 'app-lab2',
  imports: [CommonModule],
  templateUrl: './lab2.component.html',
  styleUrl: './lab2.component.scss',
})
export class Lab2Component implements OnDestroy {
  readonly VOLTAGE = 220;
  readonly INTERVAL = 2000;

  connected = signal(false);
  connecting = signal(false);
  history = signal<Measurement[]>([]);
  current = signal(0);
  power = signal(0);
  status = signal('Відключено');

  private timer?: ReturnType<typeof setInterval>;
  private phase = 0;

  get avgCurrent() {
    const h = this.history();
    if (!h.length) return 0;
    return h.slice(-10).reduce((s, m) => s + m.current, 0) / Math.min(h.length, 10);
  }
  get maxCurrent() {
    const h = this.history();
    return h.length ? Math.max(...h.map(m => m.current)) : 0;
  }
  get minCurrent() {
    const h = this.history();
    return h.length ? Math.min(...h.map(m => m.current)) : 0;
  }
  get trend(): '↗' | '↘' | '→' {
    const h = this.history();
    if (h.length < 4) return '→';
    const last = h.slice(-4);
    const diff = last[last.length - 1].current - last[0].current;
    if (diff > 0.15) return '↗';
    if (diff < -0.15) return '↘';
    return '→';
  }
  get trendClass(): string {
    return { '↗': 'red', '↘': 'blue', '→': 'yellow' }[this.trend];
  }

  async connect() {
    this.connecting.set(true);
    this.status.set('Пошук ESP32-ACS712...');
    await new Promise(r => setTimeout(r, 1500));
    this.status.set("Підключення до 'ESP32_CURRENT_SENSOR'...");
    await new Promise(r => setTimeout(r, 1000));
    this.connected.set(true);
    this.connecting.set(false);
    this.status.set("Підключено до 'ESP32_CURRENT_SENSOR'");
    this.startStream();
  }

  disconnect() {
    clearInterval(this.timer);
    this.connected.set(false);
    this.status.set('Відключено');
    this.history.set([]);
    this.phase = 0;
  }

  private startStream() {
    this.timer = setInterval(() => {
      this.phase += 0.15;
      const base = 2.5 + Math.sin(this.phase) * 1.8;
      const noise = (Math.random() - 0.5) * 0.3;
      const c = Math.max(0, Math.min(5, base + noise));
      const p = +(c * this.VOLTAGE).toFixed(1);
      this.current.set(+c.toFixed(3));
      this.power.set(p);
      this.history.update(h => [
        ...h.slice(-49),
        { timestamp: Date.now(), current: +c.toFixed(3), power: p },
      ]);
    }, this.INTERVAL);
  }

  csvSnippet(m: Measurement) {
    return `${m.timestamp},${m.current.toFixed(3)},${m.power.toFixed(1)}`;
  }

  formatTime(ts: number) {
    return new Date(ts).toLocaleTimeString('uk-UA');
  }

  currentBadge() {
    const c = this.current();
    if (c < 1) return 'blue';
    if (c < 3) return 'yellow';
    return 'red';
  }

  ngOnDestroy() { clearInterval(this.timer); }
}
