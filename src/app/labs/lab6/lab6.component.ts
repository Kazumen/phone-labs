import { Component, OnDestroy, AfterViewInit, ViewChild, ElementRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DevCountPipe } from './dev-count.pipe';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend);

interface User  { email: string; name: string; }
interface Record { ts: number; bpm: number; deviceId: string; deviceName: string; }

const DEVICES = [
  { id: 'dev-iphone',  name: 'iPhone 14',    color: '#06b6d4' },
  { id: 'dev-samsung', name: 'Samsung S24',   color: '#a78bfa' },
  { id: 'dev-pixel',   name: 'Pixel 8',       color: '#22c55e' },
];

const USERS_KEY    = 'lab6_users';
const SESSION_KEY  = 'lab6_session';
const RECORDS_KEY  = 'lab6_records';

@Component({
  selector: 'app-lab6',
  imports: [CommonModule, FormsModule, DevCountPipe],
  templateUrl: './lab6.component.html',
  styleUrl: './lab6.component.scss',
})
export class Lab6Component implements AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  mode = signal<'login' | 'register' | 'app'>('login');
  user = signal<User | null>(null);
  error = signal('');
  syncStatus = signal<'idle' | 'syncing' | 'synced' | 'offline'>('idle');
  recording = signal(false);
  records = signal<Record[]>([]);
  visibleDevices = signal<Set<string>>(new Set(DEVICES.map(d => d.id)));
  devices = DEVICES;

  loginEmail = '';
  loginPass  = '';
  regEmail   = '';
  regPass    = '';
  regName    = '';

  private chart?: Chart;
  private timer?: ReturnType<typeof setInterval>;
  private syncTimer?: ReturnType<typeof setInterval>;
  private phase = 0;
  private activeDevice = 0;

  get filteredRecords() {
    const vis = this.visibleDevices();
    return this.records().filter(r => vis.has(r.deviceId));
  }

  ngAfterViewInit() {
    const session = localStorage.getItem(SESSION_KEY);
    if (session) {
      this.user.set(JSON.parse(session));
      this.mode.set('app');
      this.loadRecords();
      setTimeout(() => this.buildChart(), 50);
    }
  }

  register() {
    if (!this.regEmail || !this.regPass || !this.regName) { this.error.set('Заповніть всі поля'); return; }
    if (this.regPass.length < 6) { this.error.set('Пароль мінімум 6 символів'); return; }
    const usersRaw = localStorage.getItem(USERS_KEY);
    const users: any[] = usersRaw ? JSON.parse(usersRaw) : [];
    if (users.find(u => u.email === this.regEmail)) { this.error.set('Такий email вже існує'); return; }
    const u = { email: this.regEmail, pass: this.regPass, name: this.regName };
    users.push(u);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    this.setUser({ email: u.email, name: u.name });
    this.error.set('');
  }

  login() {
    if (!this.loginEmail || !this.loginPass) { this.error.set('Введіть email та пароль'); return; }
    const usersRaw = localStorage.getItem(USERS_KEY);
    const users: any[] = usersRaw ? JSON.parse(usersRaw) : [];
    const u = users.find(u => u.email === this.loginEmail && u.pass === this.loginPass);
    if (!u) { this.error.set('Невірний email або пароль'); return; }
    this.setUser({ email: u.email, name: u.name });
    this.error.set('');
  }

  logout() {
    localStorage.removeItem(SESSION_KEY);
    clearInterval(this.timer); clearInterval(this.syncTimer);
    this.recording.set(false);
    this.user.set(null);
    this.mode.set('login');
    this.chart?.destroy();
  }

  private setUser(u: User) {
    this.user.set(u);
    localStorage.setItem(SESSION_KEY, JSON.stringify(u));
    this.mode.set('app');
    this.loadRecords();
    setTimeout(() => this.buildChart(), 50);
    this.startSyncLoop();
  }

  startStop() {
    if (this.recording()) {
      clearInterval(this.timer);
      this.recording.set(false);
    } else {
      this.recording.set(true);
      this.timer = setInterval(() => this.tick(), 1000);
    }
  }

  toggleDevice(id: string) {
    this.visibleDevices.update(s => {
      const next = new Set(s);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
    this.updateChart();
  }

  clearHistory() {
    this.records.set([]);
    localStorage.removeItem(RECORDS_KEY);
    this.updateChart();
  }

  private tick() {
    this.phase += 0.12;
    this.activeDevice = Math.floor(this.phase / 10) % DEVICES.length;
    const dev = DEVICES[this.activeDevice];
    const bpm = Math.round(75 + Math.sin(this.phase) * 30 + (Math.random() - .5) * 8);
    const rec: Record = { ts: Date.now(), bpm, deviceId: dev.id, deviceName: dev.name };
    this.records.update(rs => [...rs.slice(-299), rec]);
    this.saveRecords();
    this.updateChart();
  }

  private startSyncLoop() {
    this.syncTimer = setInterval(async () => {
      this.syncStatus.set('syncing');
      await new Promise(r => setTimeout(r, 600));
      this.syncStatus.set(Math.random() > 0.05 ? 'synced' : 'offline');
    }, 10000);
  }

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
    const labels = all.map(r => new Date(r.ts).toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    this.chart.data.labels = labels;
    const vis = this.visibleDevices();
    DEVICES.forEach((dev, i) => {
      const ds = this.chart!.data.datasets[i];
      ds.data = all.map(r => r.deviceId === dev.id && vis.has(dev.id) ? r.bpm : NaN);
    });
    this.chart.update('none');
  }

  private saveRecords() {
    localStorage.setItem(RECORDS_KEY, JSON.stringify(this.records().slice(-500)));
  }
  private loadRecords() {
    try {
      const raw = localStorage.getItem(RECORDS_KEY);
      if (raw) this.records.set(JSON.parse(raw));
    } catch { /* ignore */ }
  }

  syncBadgeClass() {
    return { idle: 'blue', syncing: 'yellow', synced: 'green', offline: 'red' }[this.syncStatus()];
  }
  syncBadgeLabel() {
    return { idle: '☁ Хмара', syncing: '↑ Синхронізація...', synced: '✓ Синхронізовано', offline: '✗ Офлайн' }[this.syncStatus()];
  }

  ngOnDestroy() { clearInterval(this.timer); clearInterval(this.syncTimer); this.chart?.destroy(); }
}
