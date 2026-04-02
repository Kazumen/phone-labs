import { Component, OnDestroy, AfterViewInit, ViewChild, ElementRef, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DevCountPipe } from './dev-count.pipe';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend } from 'chart.js';
import { mongoConfig, MONGO_BASE_URL } from '../../../mongo.config';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend);

interface MongoUser { email: string; name: string; passHash: string; }
interface HRRecord  { ts: number; bpm: number; deviceId: string; deviceName: string; userEmail: string; }

const DEVICES = [
  { id: 'dev-iphone',  name: 'iPhone 14',   color: '#06b6d4' },
  { id: 'dev-samsung', name: 'Samsung S24',  color: '#a78bfa' },
  { id: 'dev-pixel',   name: 'Pixel 8',      color: '#22c55e' },
];

const USERS_COL   = 'users';
const RECORDS_COL = 'hr_records';

/** Simple non-crypto hash (good enough for a student lab demo) */
function simpleHash(s: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = (h * 0x01000193) >>> 0; }
  return h.toString(16);
}

@Component({
  selector: 'app-lab6',
  imports: [CommonModule, FormsModule, DevCountPipe],
  templateUrl: './lab6.component.html',
  styleUrl: './lab6.component.scss',
})
export class Lab6Component implements AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  private http = inject(HttpClient);

  mode        = signal<'login' | 'register' | 'app'>('login');
  user        = signal<{ email: string; name: string } | null>(null);
  error       = signal('');
  dbStatus    = signal<'idle' | 'loading' | 'ok' | 'error' | 'no-config'>('idle');
  recording   = signal(false);
  records     = signal<HRRecord[]>([]);
  visibleDevices = signal<Set<string>>(new Set(DEVICES.map(d => d.id)));
  devices = DEVICES;

  loginEmail = '';
  loginPass  = '';
  regEmail   = '';
  regPass    = '';
  regName    = '';

  private chart?: Chart;
  private timer?: ReturnType<typeof setInterval>;
  private phase = 0;
  private activeDevice = 0;
  private sessionBuffer: HRRecord[] = [];

  private get headers(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json', 'api-key': mongoConfig.apiKey });
  }

  private get configReady(): boolean {
    return mongoConfig.apiKey !== 'YOUR_API_KEY_HERE' && mongoConfig.appId !== 'YOUR_APP_ID_HERE';
  }

  private mongoBody(collection: string, extra: object) {
    return { dataSource: mongoConfig.dataSource, database: mongoConfig.database, collection, ...extra };
  }

  get filteredRecords() {
    const vis = this.visibleDevices();
    return this.records().filter(r => vis.has(r.deviceId));
  }

  ngAfterViewInit() {
    if (!this.configReady) this.dbStatus.set('no-config');
  }

  // â”€â”€ Auth â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  register() {
    if (!this.regEmail || !this.regPass || !this.regName) { this.error.set("Ð—Ð°Ð¿Ð¾Ð²Ð½Ñ–Ñ‚ÑŒ Ð²ÑÑ– Ð¿Ð¾Ð»Ñ"); return; }
    if (this.regPass.length < 6) { this.error.set("ÐŸÐ°Ñ€Ð¾Ð»ÑŒ Ð¼Ñ–Ð½Ñ–Ð¼ÑƒÐ¼ 6 ÑÐ¸Ð¼Ð²Ð¾Ð»Ñ–Ð²"); return; }
    if (!this.configReady) { this.error.set("MongoDB Ð½Ðµ Ð½Ð°Ð»Ð°ÑˆÑ‚Ð¾Ð²Ð°Ð½Ð¾"); return; }
    this.dbStatus.set('loading');
    this.http
      .post<{ documents: MongoUser[] }>(
        `${MONGO_BASE_URL}/find`,
        this.mongoBody(USERS_COL, { filter: { email: this.regEmail } }),
        { headers: this.headers }
      )
      .subscribe({
        next: res => {
          if (res.documents?.length) { this.error.set('ÐšÐ¾Ñ€Ð¸ÑÑ‚ÑƒÐ²Ð°Ñ‡ Ð²Ð¶Ðµ Ñ–ÑÐ½ÑƒÑ”'); this.dbStatus.set('ok'); return; }
          const newUser: MongoUser = { email: this.regEmail, name: this.regName, passHash: simpleHash(this.regPass) };
          this.http
            .post(`${MONGO_BASE_URL}/insertOne`, this.mongoBody(USERS_COL, { document: newUser }), { headers: this.headers })
            .subscribe({
              next: () => { this.dbStatus.set('ok'); this.setUser({ email: this.regEmail, name: this.regName }); },
              error: () => { this.error.set('ÐŸÐ¾Ð¼Ð¸Ð»ÐºÐ° Ñ€ÐµÑ”ÑÑ‚Ñ€Ð°Ñ†Ñ–Ñ—'); this.dbStatus.set('error'); },
            });
        },
        error: () => { this.error.set('ÐŸÐ¾Ð¼Ð¸Ð»ÐºÐ° Ð·\'Ñ”Ð´Ð½Ð°Ð½Ð½Ñ Ð· MongoDB'); this.dbStatus.set('error'); },
      });
  }

  login() {
    if (!this.loginEmail || !this.loginPass) { this.error.set('Ð’Ð²ÐµÐ´Ñ–Ñ‚ÑŒ email Ñ‚Ð° Ð¿Ð°Ñ€Ð¾Ð»ÑŒ'); return; }
    if (!this.configReady) { this.error.set('MongoDB Ð½Ðµ Ð½Ð°Ð»Ð°ÑˆÑ‚Ð¾Ð²Ð°Ð½Ð¾'); return; }
    this.dbStatus.set('loading');
    this.http
      .post<{ document: MongoUser | null }>(
        `${MONGO_BASE_URL}/findOne`,
        this.mongoBody(USERS_COL, { filter: { email: this.loginEmail, passHash: simpleHash(this.loginPass) } }),
        { headers: this.headers }
      )
      .subscribe({
        next: res => {
          if (!res.document) { this.error.set('ÐÐµÐ²Ñ–Ñ€Ð½Ð¸Ð¹ email Ð°Ð±Ð¾ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ'); this.dbStatus.set('ok'); return; }
          this.dbStatus.set('ok');
          this.setUser({ email: res.document.email, name: res.document.name });
        },
        error: () => { this.error.set('ÐŸÐ¾Ð¼Ð¸Ð»ÐºÐ° Ð·\'Ñ”Ð´Ð½Ð°Ð½Ð½Ñ Ð· MongoDB'); this.dbStatus.set('error'); },
      });
  }

  logout() {
    clearInterval(this.timer);
    this.recording.set(false);
    this.user.set(null);
    this.records.set([]);
    this.mode.set('login');
    this.chart?.destroy();
    this.chart = undefined;
  }

  private setUser(u: { email: string; name: string }) {
    this.user.set(u);
    this.mode.set('app');
    this.error.set('');
    this.loadRecords();
    setTimeout(() => this.buildChart(), 50);
  }

  // â”€â”€ Recording â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  startStop() {
    if (this.recording()) {
      clearInterval(this.timer);
      this.recording.set(false);
      if (this.sessionBuffer.length) {
        this.saveRecords(this.sessionBuffer);
        this.sessionBuffer = [];
      }
    } else {
      this.sessionBuffer = [];
      this.recording.set(true);
      this.timer = setInterval(() => this.tick(), 1000);
    }
  }

  toggleDevice(id: string) {
    this.visibleDevices.update(s => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
    this.updateChart();
  }

  clearHistory() {
    this.records.set([]);
    this.sessionBuffer = [];
    this.updateChart();
    const email = this.user()?.email;
    if (email && this.configReady) {
      this.http
        .post(`${MONGO_BASE_URL}/deleteMany`, this.mongoBody(RECORDS_COL, { filter: { userEmail: email } }), { headers: this.headers })
        .subscribe();
    }
  }

  private tick() {
    this.phase += 0.12;
    this.activeDevice = Math.floor(this.phase / 10) % DEVICES.length;
    const dev = DEVICES[this.activeDevice];
    const bpm = Math.round(75 + Math.sin(this.phase) * 30 + (Math.random() - .5) * 8);
    const rec: HRRecord = { ts: Date.now(), bpm, deviceId: dev.id, deviceName: dev.name, userEmail: this.user()!.email };
    this.records.update(rs => [...rs.slice(-299), rec]);
    this.sessionBuffer.push(rec);
    this.updateChart();
  }

  // â”€â”€ MongoDB calls â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  private loadRecords() {
    if (!this.configReady) return;
    const email = this.user()?.email;
    if (!email) return;
    this.dbStatus.set('loading');
    this.http
      .post<{ documents: HRRecord[] }>(
        `${MONGO_BASE_URL}/find`,
        this.mongoBody(RECORDS_COL, { filter: { userEmail: email }, sort: { ts: 1 }, limit: 500 }),
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

  private saveRecords(docs: HRRecord[]) {
    if (!this.configReady) return;
    this.dbStatus.set('loading');
    this.http
      .post(`${MONGO_BASE_URL}/insertMany`, this.mongoBody(RECORDS_COL, { documents: docs }), { headers: this.headers })
      .subscribe({ next: () => this.dbStatus.set('ok'), error: () => this.dbStatus.set('error') });
  }

  // â”€â”€ Chart â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  private buildChart() {
    if (!this.chartCanvas) return;
    const ctx = this.chartCanvas.nativeElement.getContext('2d')!;
    const datasets = DEVICES.map(dev => ({
      label: dev.name,
      data: [] as number[],
      borderColor: dev.color,
      backgroundColor: dev.color + '18',
      borderWidth: 2,
      fill: false,
      pointRadius: 0,
      tension: 0.4,
    }));
    this.chart = new Chart(ctx, {
      type: 'line',
      data: { labels: [], datasets },
      options: {
        animation: false, responsive: true, maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#94a3b8', font: { size: 11 } } } },
        scales: {
          x: { ticks: { color: '#64748b', maxTicksLimit: 5, font: { size: 10 } }, grid: { color: 'rgba(51,65,85,.5)' } },
          y: { min: 40, max: 200, ticks: { color: '#64748b' }, grid: { color: 'rgba(51,65,85,.5)' } },
        },
      },
    });
    this.updateChart();
  }

  private updateChart() {
    if (!this.chart) return;
    const all = this.records().slice(-100);
    this.chart.data.labels = all.map(r =>
      new Date(r.ts).toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    const vis = this.visibleDevices();
    DEVICES.forEach((dev, i) => {
      this.chart!.data.datasets[i].data = all.map(r => r.deviceId === dev.id && vis.has(dev.id) ? r.bpm : NaN);
    });
    this.chart.update('none');
  }

  syncBadgeClass() {
    const map: Record<string, string> = { idle: 'blue', loading: 'yellow', ok: 'green', error: 'red', 'no-config': 'red' };
    return map[this.dbStatus()] ?? 'blue';
  }
  syncBadgeLabel() {
    const map: Record<string, string> = {
      idle: 'â˜ Ð¥Ð¼Ð°Ñ€Ð°', loading: 'â†‘ Ð¡Ð¸Ð½Ñ…Ñ€Ð¾Ð½Ñ–Ð·Ð°Ñ†Ñ–Ñ...', ok: 'âœ“ MongoDB', error: 'âœ— ÐŸÐ¾Ð¼Ð¸Ð»ÐºÐ°', 'no-config': 'âš  ÐÐµ Ð½Ð°Ð»Ð°ÑˆÑ‚Ð¾Ð²Ð°Ð½Ð¾',
    };
    return map[this.dbStatus()] ?? 'â˜';
  }

  ngOnDestroy() { clearInterval(this.timer); this.chart?.destroy(); }
}


