import { Component, OnDestroy, AfterViewInit, ViewChild, ElementRef, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend } from 'chart.js';
import { API_URL } from '../../../api.config';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend);

interface SensorReading { ts: number; lux: number; motion: number; visibility: number; }
interface AutoRule { id: string; label: string; enabled: boolean; threshold: number; unit: string; }

const CACHE_KEY = 'lab7_light_cache';
const SYNC_MS   = 30_000;
const TICK_MS   = 2000;

@Component({
  selector: 'app-lab7',
  imports: [CommonModule, FormsModule],
  templateUrl: './lab7.component.html',
  styleUrl: './lab7.component.scss',
})
export class Lab7Component implements AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private http = inject(HttpClient);

  // ── Live sensor signals ───────────────────────────────────────────────────
  running     = signal(false);
  lux         = signal(0);
  motion      = signal(0);
  visibility  = signal(100);

  // ── Device signals ────────────────────────────────────────────────────────
  ledBrightness = signal(0);
  fogLamps      = signal(false);

  // ── Rules ─────────────────────────────────────────────────────────────────
  rules = signal<AutoRule[]>([
    { id: 'low_lux_motion', label: 'Освітленість < X люкс і є рух → LED 100%', enabled: true, threshold: 10000, unit: 'lux' },
    { id: 'no_motion_dim',  label: 'Немає руху > X хв → LED 20%',              enabled: true, threshold: 20,    unit: 'хв'  },
    { id: 'low_visibility', label: 'Видимість < X% → туманні лампи вкл',       enabled: true, threshold: 30,    unit: '%'   },
  ]);

  // ── History & sync ────────────────────────────────────────────────────────
  records      = signal<SensorReading[]>([]);
  range        = signal<'hour' | 'day' | 'week'>('hour');
  syncStatus   = signal<'idle' | 'saving' | 'ok' | 'error' | 'loading'>('idle');
  offlineMode  = signal(false);
  pendingCount = signal(0);

  private chart?: Chart;
  private tickHandle?: ReturnType<typeof setInterval>;
  private syncHandle?: ReturnType<typeof setInterval>;
  private phase = 0;
  private lastMotionTs = Date.now();
  private pendingBuffer: SensorReading[] = [];

  // ── Computed stats ────────────────────────────────────────────────────────
  get filtered(): SensorReading[] {
    const now = Date.now();
    const cuts = { hour: 3_600_000, day: 86_400_000, week: 604_800_000 };
    return this.records().filter(r => now - r.ts < cuts[this.range()]);
  }
  get avgLux()    { const f = this.filtered; return f.length ? Math.round(f.reduce((s,r)=>s+r.lux,0)/f.length) : 0; }
  get avgVis()    { const f = this.filtered; return f.length ? +(f.reduce((s,r)=>s+r.visibility,0)/f.length).toFixed(1) : 0; }
  get medianLux() {
    const arr = [...this.filtered.map(r => r.lux)].sort((a,b)=>a-b);
    if (!arr.length) return 0;
    const m = Math.floor(arr.length / 2);
    return arr.length % 2 ? arr[m] : Math.round((arr[m-1]+arr[m])/2);
  }
  get trend(): 'rising' | 'falling' | 'stable' {
    const f = this.filtered;
    if (f.length < 4) return 'stable';
    const h = Math.floor(f.length / 2);
    const first = f.slice(0, h).reduce((s,r)=>s+r.lux, 0) / h;
    const last  = f.slice(h).reduce((s,r)=>s+r.lux, 0) / h;
    if (last - first > 2000) return 'rising';
    if (first - last > 2000) return 'falling';
    return 'stable';
  }

  constructor() { this.loadFromCache(); }

  ngAfterViewInit() {
    this.buildChart();
    this.loadFromBackend();
    this.syncHandle = setInterval(() => this.flushToBackend(), SYNC_MS);
  }

  // ── Control ───────────────────────────────────────────────────────────────
  startStop() {
    if (this.running()) {
      clearInterval(this.tickHandle);
      this.running.set(false);
      this.flushToBackend();
    } else {
      this.running.set(true);
      this.tickHandle = setInterval(() => this.tick(), TICK_MS);
    }
  }

  setRange(r: 'hour' | 'day' | 'week') { this.range.set(r); this.updateChart(); }

  setLed(val: number) { this.ledBrightness.set(val); this.pushDeviceState(); }

  toggleFog() { this.fogLamps.update(v => !v); this.pushDeviceState(); }

  updateRule(id: string, field: 'enabled' | 'threshold', value: boolean | number) {
    this.rules.update(rs => rs.map(r => r.id === id ? { ...r, [field]: value } : r));
  }

  clearHistory() {
    this.records.set([]);
    this.pendingBuffer = [];
    this.pendingCount.set(0);
    localStorage.removeItem(CACHE_KEY);
    this.updateChart();
    this.http.delete(`${API_URL}/lights/records`).subscribe();
  }

  syncNow() { this.flushToBackend(); }

  // ── Sensor simulation ─────────────────────────────────────────────────────
  private tick() {
    this.phase += 0.05;
    const hour = new Date().getHours() + new Date().getMinutes() / 60;

    // Illuminance: daylight curve + noise + occasional cloud shadow
    const sun   = Math.max(0, Math.sin((hour - 6) * Math.PI / 12));
    const cloud = Math.random() < 0.05 ? Math.random() * 0.6 : 1;
    const luxVal = Math.round(Math.max(0, sun * 95000 * cloud + (Math.random() - 0.5) * 3000));

    // Motion: higher during rush hours 7–9, 17–19
    const rush = (hour >= 7 && hour <= 9) || (hour >= 17 && hour <= 19);
    const motionVal = Math.random() < (rush ? 0.7 : 0.2) ? 1 : 0;

    // Visibility: slow drift + occasional foggy episodes
    let visVal = Math.max(0, Math.min(100,
      this.visibility() + (Math.random() - 0.5) * 3));
    if (Math.random() < 0.01) visVal = Math.max(10, visVal - 30); // sudden fog
    if (Math.random() < 0.02) visVal = Math.min(100, visVal + 20); // clears up
    visVal = Math.round(visVal);

    this.lux.set(luxVal);
    this.motion.set(motionVal);
    this.visibility.set(visVal);
    if (motionVal) this.lastMotionTs = Date.now();

    this.applyRules(luxVal, motionVal, visVal);

    const rec: SensorReading = { ts: Date.now(), lux: luxVal, motion: motionVal, visibility: visVal };
    this.records.update(rs => [...rs.slice(-999), rec]);
    this.pendingBuffer.push(rec);
    this.pendingCount.set(this.pendingBuffer.length);
    this.cacheLocally();
    this.updateChart();
  }

  private applyRules(luxVal: number, motionVal: number, visVal: number) {
    const rs  = this.rules();
    const r0  = rs.find(r => r.id === 'low_lux_motion');
    const r1  = rs.find(r => r.id === 'no_motion_dim');
    const r2  = rs.find(r => r.id === 'low_visibility');

    if (r0?.enabled && luxVal < r0.threshold && motionVal) {
      this.ledBrightness.set(100);
    } else if (r1?.enabled && (Date.now() - this.lastMotionTs) > r1.threshold * 60_000) {
      this.ledBrightness.set(20);
    }

    if (r2?.enabled && visVal < r2.threshold) {
      this.fogLamps.set(true);
    } else if (visVal >= (r2?.threshold ?? 30) + 5) {
      this.fogLamps.set(false);
    }
  }

  // ── Backend API ───────────────────────────────────────────────────────────
  private loadFromBackend() {
    this.syncStatus.set('loading');
    const since = Date.now() - 3_600_000;
    this.http.get<SensorReading[]>(`${API_URL}/lights/records?since=${since}`).subscribe({
      next: docs => {
        if (docs.length) this.records.set(docs);
        this.syncStatus.set('ok');
        this.offlineMode.set(false);
        this.updateChart();
        setTimeout(() => this.syncStatus.set('idle'), 2000);
      },
      error: () => {
        this.syncStatus.set('error');
        this.offlineMode.set(true);
        setTimeout(() => this.syncStatus.set('idle'), 2000);
      },
    });
    // Also load device state
    this.http.get<{ledBrightness: number; fogLamps: boolean}>(`${API_URL}/lights/devices`).subscribe({
      next: d => { this.ledBrightness.set(d.ledBrightness ?? 0); this.fogLamps.set(d.fogLamps ?? false); },
      error: () => {},
    });
  }

  private flushToBackend() {
    if (!this.pendingBuffer.length) return;
    const toSend = [...this.pendingBuffer];
    this.pendingBuffer = [];
    this.pendingCount.set(0);
    this.syncStatus.set('saving');
    this.http.post(`${API_URL}/lights/records/bulk`, toSend).subscribe({
      next: () => {
        this.syncStatus.set('ok');
        this.offlineMode.set(false);
        setTimeout(() => this.syncStatus.set('idle'), 2000);
      },
      error: () => {
        // put records back on failure
        this.pendingBuffer.unshift(...toSend);
        this.pendingCount.set(this.pendingBuffer.length);
        this.syncStatus.set('error');
        this.offlineMode.set(true);
        setTimeout(() => this.syncStatus.set('idle'), 2000);
      },
    });
  }

  private pushDeviceState() {
    this.http.put(`${API_URL}/lights/devices`, {
      ledBrightness: this.ledBrightness(),
      fogLamps: this.fogLamps(),
    }).subscribe();
  }

  // ── Local cache (offline support) ─────────────────────────────────────────
  private cacheLocally() {
    try { localStorage.setItem(CACHE_KEY, JSON.stringify(this.records().slice(-500))); } catch { /**/ }
  }
  private loadFromCache() {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (raw) this.records.set(JSON.parse(raw));
    } catch { /**/ }
  }

  // ── Chart ─────────────────────────────────────────────────────────────────
  private buildChart() {
    if (!this.chartCanvas) return;
    const ctx = this.chartCanvas.nativeElement.getContext('2d')!;
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Освітленість (клк)',
            data: [], borderColor: '#f59e0b', backgroundColor: 'rgba(245,158,11,.12)',
            borderWidth: 2, fill: true, pointRadius: 0, tension: 0.4, yAxisID: 'y',
          },
          {
            label: 'Видимість (%)',
            data: [], borderColor: '#06b6d4', backgroundColor: 'rgba(6,182,212,.08)',
            borderWidth: 2, fill: false, pointRadius: 0, tension: 0.4, yAxisID: 'y2',
          },
        ],
      },
      options: {
        animation: false, responsive: true, maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#94a3b8', font: { size: 11 } } } },
        scales: {
          x:  { ticks: { color: '#64748b', maxTicksLimit: 6, font: { size: 10 } }, grid: { color: 'rgba(51,65,85,.5)' } },
          y:  { position: 'left',  min: 0, ticks: { color: '#f59e0b', font: { size: 10 } }, grid: { color: 'rgba(51,65,85,.3)' },
                title: { display: true, text: 'клк', color: '#f59e0b', font: { size: 10 } } },
          y2: { position: 'right', min: 0, max: 100, ticks: { color: '#06b6d4', font: { size: 10 } }, grid: { display: false },
                title: { display: true, text: '%', color: '#06b6d4', font: { size: 10 } } },
        },
      },
    });
  }

  private updateChart() {
    if (!this.chart) return;
    const data = this.filtered;
    this.chart.data.labels = data.map(r =>
      new Date(r.ts).toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' }));
    this.chart.data.datasets[0].data = data.map(r => +(r.lux / 1000).toFixed(1));
    this.chart.data.datasets[1].data = data.map(r => r.visibility);
    (this.chart.data.datasets[0] as any).pointRadius = data.length > 100 ? 0 : 2;
    this.chart.update('none');
  }

  ngOnDestroy() {
    clearInterval(this.tickHandle);
    clearInterval(this.syncHandle);
    this.chart?.destroy();
  }
}