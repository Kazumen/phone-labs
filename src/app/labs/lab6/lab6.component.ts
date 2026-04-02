import { Component, OnDestroy, AfterViewInit, ViewChild, ElementRef, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DevCountPipe } from './dev-count.pipe';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend } from 'chart.js';
import { API_URL } from '../../../api.config';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend);

interface HRRecord { ts: number; bpm: number; deviceId: string; deviceName: string; userEmail?: string; }

const DEVICES = [
  { id: 'dev-iphone',  name: 'iPhone 14',   color: '#06b6d4' },
  { id: 'dev-samsung', name: 'Samsung S24',  color: '#a78bfa' },
  { id: 'dev-pixel',   name: 'Pixel 8',      color: '#22c55e' },
];

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
  dbStatus    = signal<'idle' | 'loading' | 'ok' | 'error'>('idle');
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
  private token = '';

  private get authHeaders(): HttpHeaders {
    return new HttpHeaders({ Authorization: `Bearer ${this.token}` });
  }

  get filteredRecords() {
    const vis = this.visibleDevices();
    return this.records().filter(r => vis.has(r.deviceId));
  }

  ngAfterViewInit() { /* chart built after login */ }

  // ── Auth ───────────────────────────────────────────────────────────────────

  register() {
    if (!this.regEmail || !this.regPass || !this.regName) { this.error.set('Заповніть всі поля'); return; }
    if (this.regPass.length < 6) { this.error.set('Пароль мінімум 6 символів'); return; }
    this.dbStatus.set('loading');
    this.http
      .post<{ token: string; user: { email: string; name: string } }>(
        `${API_URL}/auth/register`,
        { email: this.regEmail, name: this.regName, password: this.regPass }
      )
      .subscribe({
        next: res => { this.dbStatus.set('ok'); this.token = res.token; this.setUser(res.user); },
        error: err => { this.error.set(err.error?.error ?? 'Помилка реєстрації'); this.dbStatus.set('error'); },
      });
  }

  login() {
    if (!this.loginEmail || !this.loginPass) { this.error.set('Введіть email та пароль'); return; }
    this.dbStatus.set('loading');
    this.http
      .post<{ token: string; user: { email: string; name: string } }>(
        `${API_URL}/auth/login`,
        { email: this.loginEmail, password: this.loginPass }
      )
      .subscribe({
        next: res => { this.dbStatus.set('ok'); this.token = res.token; this.setUser(res.user); },
        error: err => { this.error.set(err.error?.error ?? 'Невірний email або пароль'); this.dbStatus.set('error'); },
      });
  }

  logout() {
    clearInterval(this.timer);
    this.recording.set(false);
    this.user.set(null);
    this.records.set([]);
    this.token = '';
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

  // ── Recording ──────────────────────────────────────────────────────────────

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
    this.http.delete(`${API_URL}/records`, { headers: this.authHeaders }).subscribe();
  }

  private tick() {
    this.phase += 0.12;
    this.activeDevice = Math.floor(this.phase / 10) % DEVICES.length;
    const dev = DEVICES[this.activeDevice];
    const bpm = Math.round(75 + Math.sin(this.phase) * 30 + (Math.random() - .5) * 8);
    const rec: HRRecord = { ts: Date.now(), bpm, deviceId: dev.id, deviceName: dev.name };
    this.records.update(rs => [...rs.slice(-299), rec]);
    this.sessionBuffer.push(rec);
    this.updateChart();
  }

  // ── Backend API calls ──────────────────────────────────────────────────────

  private loadRecords() {
    this.dbStatus.set('loading');
    this.http.get<HRRecord[]>(`${API_URL}/records`, { headers: this.authHeaders })
      .subscribe({
        next: docs => {
          this.records.set(docs ?? []);
          this.dbStatus.set('ok');
          this.updateChart();
        },
        error: () => this.dbStatus.set('error'),
      });
  }

  private saveRecords(docs: HRRecord[]) {
    this.dbStatus.set('loading');
    this.http.post(`${API_URL}/records/bulk`, docs, { headers: this.authHeaders })
      .subscribe({ next: () => this.dbStatus.set('ok'), error: () => this.dbStatus.set('error') });
  }

  // ── Chart ──────────────────────────────────────────────────────────────────

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
    const map: Record<string, string> = { idle: 'blue', loading: 'yellow', ok: 'green', error: 'red' };
    return map[this.dbStatus()] ?? 'blue';
  }
  syncBadgeLabel() {
    const map: Record<string, string> = {
      idle: '☁ Хмара', loading: '↑ Синхронізація...', ok: '✓ Backend', error: '✗ Помилка',
    };
    return map[this.dbStatus()] ?? '☁';
  }

  ngOnDestroy() { clearInterval(this.timer); this.chart?.destroy(); }
}

