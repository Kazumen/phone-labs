import { Component, OnDestroy, AfterViewInit, ViewChild, ElementRef, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip } from 'chart.js';
import { mongoConfig, MONGO_BASE_URL } from '../../../mongo.config';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip);

interface PulseRecord { ts: number; bpm: number; zone: string; }

const ZONES = [
  { name: 'Відпочинок',    min: 0,   max: 60,  color: '#64748b' },
  { name: 'Аеробна',       min: 60,  max: 100, color: '#22c55e' },
  { name: 'Кардіо',        min: 100, max: 140, color: '#f59e0b' },
  { name: 'Анаеробна',     min: 140, max: 170, color: '#f97316' },
  { name: 'Максимальна',   min: 170, max: Infinity, color: '#ef4444' },
];

const COLLECTION = 'pulse_records';

function getZone(bpm: number) {
  return ZONES.find(z => bpm >= z.min && bpm < z.max)!;
}

@Component({
  selector: 'app-lab4',
  imports: [CommonModule],
  templateUrl: './lab4.component.html',
  styleUrl: './lab4.component.scss',
})
export class Lab4Component implements AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  private http = inject(HttpClient);

  recording = signal(false);
  bpm = signal(0);
  currentZone = signal(ZONES[0]);
  records = signal<PulseRecord[]>([]);
  range = signal<'hour' | 'day' | 'week'>('hour');
  zones = ZONES;
  dbStatus = signal<'idle' | 'loading' | 'ok' | 'error' | 'no-config'>('idle');

  /** Записи, що накопичились під час поточного сеансу (ще не збережені в БД) */
  private sessionBuffer: PulseRecord[] = [];
  private chart?: Chart;
  private timer?: ReturnType<typeof setInterval>;
  private phase = 0;
  private baseHR = 72;

  private get headers(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json', 'api-key': mongoConfig.apiKey });
  }

  private get configReady(): boolean {
    return mongoConfig.apiKey !== 'YOUR_API_KEY_HERE' && mongoConfig.appId !== 'YOUR_APP_ID_HERE';
  }

  get filtered(): PulseRecord[] {
    const now = Date.now();
    const cutoffs = { hour: 3600000, day: 86400000, week: 604800000 };
    return this.records().filter(r => now - r.ts < cutoffs[this.range()]);
  }
  get avg()   { const f = this.filtered; return f.length ? Math.round(f.reduce((s,r) => s+r.bpm,0)/f.length) : 0; }
  get max()   { const f = this.filtered; return f.length ? Math.max(...f.map(r => r.bpm)) : 0; }
  get min()   { const f = this.filtered; return f.length ? Math.min(...f.map(r => r.bpm)) : 0; }
  get count() { return this.filtered.length; }

  ngAfterViewInit() {
    this.loadFromMongo();
    this.buildChart();
  }

  startStop() {
    if (this.recording()) {
      clearInterval(this.timer);
      this.recording.set(false);
      // Save accumulated session records to MongoDB
      if (this.sessionBuffer.length) {
        this.saveToMongo(this.sessionBuffer);
        this.sessionBuffer = [];
      }
    } else {
      this.sessionBuffer = [];
      this.recording.set(true);
      this.timer = setInterval(() => this.tick(), 1000);
    }
  }

  setRange(r: 'hour' | 'day' | 'week') {
    this.range.set(r);
    this.updateChart();
  }

  clearHistory() {
    this.records.set([]);
    this.sessionBuffer = [];
    this.updateChart();
    this.deleteFromMongo();
  }

  private tick() {
    this.phase += 0.1;
    const variation = Math.sin(this.phase) * 25 + Math.sin(this.phase * 2.3) * 10;
    const noise = (Math.random() - 0.5) * 8;
    const bpm = Math.round(Math.max(55, Math.min(180, this.baseHR + variation + noise)));
    const zone = getZone(bpm);
    this.bpm.set(bpm);
    this.currentZone.set(zone);
    const rec: PulseRecord = { ts: Date.now(), bpm, zone: zone.name };
    this.records.update(rs => [...rs, rec]);
    this.sessionBuffer.push(rec);
    this.updateChart();
  }

  // ── MongoDB Atlas Data API calls ──────────────────────────────────────────

  private mongoBody(extra: object) {
    return {
      dataSource: mongoConfig.dataSource,
      database: mongoConfig.database,
      collection: COLLECTION,
      ...extra,
    };
  }

  private loadFromMongo() {
    if (!this.configReady) { this.dbStatus.set('no-config'); return; }
    this.dbStatus.set('loading');
    const now = Date.now();
    const weekAgo = now - 604800000;
    this.http
      .post<{ documents: PulseRecord[] }>(
        `${MONGO_BASE_URL}/find`,
        this.mongoBody({ filter: { ts: { $gte: weekAgo } }, sort: { ts: 1 }, limit: 2000 }),
        { headers: this.headers }
      )
      .subscribe({
        next: res => {
          this.records.set(res.documents ?? []);
          this.dbStatus.set('ok');
          this.updateChart();
        },
        error: () => this.dbStatus.set('error'),
      });
  }

  private saveToMongo(docs: PulseRecord[]) {
    if (!this.configReady) return;
    this.dbStatus.set('loading');
    this.http
      .post(`${MONGO_BASE_URL}/insertMany`, this.mongoBody({ documents: docs }), { headers: this.headers })
      .subscribe({
        next: () => this.dbStatus.set('ok'),
        error: () => this.dbStatus.set('error'),
      });
  }

  private deleteFromMongo() {
    if (!this.configReady) return;
    this.http
      .post(`${MONGO_BASE_URL}/deleteMany`, this.mongoBody({ filter: {} }), { headers: this.headers })
      .subscribe();
  }

  // ── Chart ─────────────────────────────────────────────────────────────────

  private buildChart() {
    const ctx = this.chartCanvas.nativeElement.getContext('2d')!;
    const data = this.filtered;
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(r => new Date(r.ts).toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit', second: '2-digit' })),
        datasets: [{
          data: data.map(r => r.bpm),
          borderColor: '#06b6d4',
          backgroundColor: 'rgba(6,182,212,.1)',
          borderWidth: 2,
          fill: true,
          pointRadius: data.length > 50 ? 0 : 3,
          tension: 0.4,
        }],
      },
      options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: true } },
        scales: {
          x: { ticks: { color: '#64748b', maxTicksLimit: 6, font: { size: 10 } }, grid: { color: 'rgba(51,65,85,.5)' } },
          y: { min: 40, max: 200, ticks: { color: '#64748b', font: { size: 11 } }, grid: { color: 'rgba(51,65,85,.5)' } },
        },
      },
    });
  }

  private updateChart() {
    if (!this.chart) return;
    const data = this.filtered;
    this.chart.data.labels = data.map(r =>
      new Date(r.ts).toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    this.chart.data.datasets[0].data = data.map(r => r.bpm);
    (this.chart.data.datasets[0] as any).pointRadius = data.length > 80 ? 0 : 3;
    this.chart.update('none');
  }

  ngOnDestroy() { clearInterval(this.timer); this.chart?.destroy(); }
}
