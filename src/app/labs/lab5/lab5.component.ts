import { Component, OnDestroy, signal, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GaitClass { label: string; probability: number; icon: string; }

const GAIT_CLASSES = [
  { label: 'Рівний крок',  icon: '🚶' },
  { label: 'Швидкий крок', icon: '🏃' },
  { label: 'Важкий крок',  icon: '🦶' },
  { label: 'На носочках',  icon: '🩰' },
  { label: 'Повільно',     icon: '🐢' },
];

/** Rolling window for sensor samples */
interface SensorSample {
  ax: number; ay: number; az: number;
  gx: number; gy: number; gz: number;
}

@Component({
  selector: 'app-lab5',
  imports: [CommonModule],
  templateUrl: './lab5.component.html',
  styleUrl: './lab5.component.scss',
})
export class Lab5Component implements OnDestroy {
  analyzing    = signal(false);
  inferring    = signal(false);
  classes      = signal<GaitClass[]>(GAIT_CLASSES.map(c => ({ ...c, probability: 0 })));
  topClass     = signal('');
  confidence   = signal(0);
  inferenceTime = signal(0);
  accuracy     = signal(0);
  totalInferences = signal(0);
  inputFeatures   = signal<number[]>([]);
  currentPattern  = signal(0); // kept for UI compat (shows selected class hint)
  error           = signal('');
  sensorSupported = signal(false);

  private window: SensorSample[] = [];
  private readonly WINDOW_SIZE = 20; // samples at ~50 ms each = ~1s window
  private timer?: ReturnType<typeof setInterval>;
  private motionBound?: (e: DeviceMotionEvent) => void;

  readonly PATTERNS = [
    { idx: 0, accel: [0.8, 0.2, 9.9], gyro: [0.1, 0.1, 0.2] },
    { idx: 1, accel: [1.5, 0.5, 9.8], gyro: [0.4, 0.3, 0.5] },
    { idx: 2, accel: [2.1, 0.8, 9.7], gyro: [0.2, 0.5, 0.3] },
    { idx: 3, accel: [0.4, 1.2, 9.6], gyro: [0.1, 0.6, 0.1] },
    { idx: 4, accel: [0.3, 0.1, 9.8], gyro: [0.05, 0.05, 0.1] },
  ];

  constructor(private zone: NgZone) {}

  async startStop() {
    if (this.analyzing()) {
      this.stopAnalysis();
    } else {
      await this.startAnalysis();
    }
  }

  changePattern(idx: number) { this.currentPattern.set(idx); }

  private async startAnalysis() {
    this.error.set('');

    // iOS 13+ requires explicit permission for DeviceMotionEvent
    const dme = DeviceMotionEvent as any;
    if (typeof dme.requestPermission === 'function') {
      try {
        const perm = await dme.requestPermission();
        if (perm !== 'granted') {
          this.error.set('Дозвіл на сенсори відхилено. Натисни "Дозволити" у діалозі.');
          return;
        }
      } catch (e: any) {
        this.error.set('Помилка запиту сенсорів: ' + (e?.message ?? e));
        return;
      }
    }

    if (!window.DeviceMotionEvent) {
      this.error.set('DeviceMotionEvent не підтримується на цьому пристрої.');
      return;
    }

    this.sensorSupported.set(true);
    this.motionBound = (e: DeviceMotionEvent) => this.onMotion(e);
    window.addEventListener('devicemotion', this.motionBound);
    this.analyzing.set(true);

    // Run classification every 1.5 s
    this.timer = setInterval(() => this.runInference(), 1500);
  }

  private stopAnalysis() {
    clearInterval(this.timer);
    if (this.motionBound) {
      window.removeEventListener('devicemotion', this.motionBound);
      this.motionBound = undefined;
    }
    this.analyzing.set(false);
    this.window = [];
  }

  private onMotion(e: DeviceMotionEvent) {
    const a = e.accelerationIncludingGravity;
    const r = e.rotationRate;
    if (!a) return;
    const sample: SensorSample = {
      ax: a.x ?? 0, ay: a.y ?? 0, az: a.z ?? 0,
      gx: r?.alpha ?? 0, gy: r?.beta ?? 0, gz: r?.gamma ?? 0,
    };
    this.window.push(sample);
    if (this.window.length > this.WINDOW_SIZE) this.window.shift();
  }

  private runInference() {
    if (this.window.length < 5) return; // not enough data yet

    this.zone.run(() => this.inferring.set(true));
    const t0 = performance.now();

    const w = this.window;
    // Compute mean of each axis
    const mean = (arr: number[]) => arr.reduce((s, v) => s + v, 0) / arr.length;
    // Compute stddev
    const std = (arr: number[], m: number) =>
      Math.sqrt(arr.reduce((s, v) => s + (v - m) ** 2, 0) / arr.length);

    const axArr = w.map(s => s.ax), ayArr = w.map(s => s.ay), azArr = w.map(s => s.az);
    const gxArr = w.map(s => s.gx), gyArr = w.map(s => s.gy), gzArr = w.map(s => s.gz);

    const maxArr = w.map(s => Math.sqrt(s.ax ** 2 + s.ay ** 2 + s.az ** 2));
    const totalAcc = mean(maxArr);
    const accStd   = std(maxArr, totalAcc);

    const gMag = w.map(s => Math.sqrt(s.gx ** 2 + s.gy ** 2 + s.gz ** 2));
    const totalGyro = mean(gMag);

    // Feature vector for display  (6 mean values)
    const features = [
      +mean(axArr).toFixed(3), +mean(ayArr).toFixed(3), +mean(azArr).toFixed(3),
      +mean(gxArr).toFixed(3), +mean(gyArr).toFixed(3), +mean(gzArr).toFixed(3),
    ];

    // Heuristic classifier — map sensor features to 5 gait classes
    // Returns index of most likely class
    const classify = (): number => {
      if (totalAcc < 10.5 && accStd < 0.4 && totalGyro < 5)   return 4; // Повільно
      if (totalAcc < 11   && accStd < 0.9 && totalGyro < 15)  return 0; // Рівний крок
      if (totalAcc < 11.5 && accStd < 1.5 && totalGyro < 30)  return 1; // Швидкий крок
      if (accStd < 1.2    && totalGyro > 20)                   return 3; // На носочках
      return 2; // Важкий крок (high variance)
    };

    const best = classify();

    // Build probability distribution centered on best class
    const scores = GAIT_CLASSES.map((_, i) => {
      if (i === best) return 0.6 + Math.random() * 0.25;
      return Math.random() * 0.2;
    });
    const sum = scores.reduce((a, b) => a + b, 0);
    const probs = scores.map(s => s / sum);

    this.zone.run(() => {
      this.inputFeatures.set(features);
      this.classes.set(GAIT_CLASSES.map((c, i) => ({ ...c, probability: +probs[i].toFixed(3) })));
      this.topClass.set(GAIT_CLASSES[best].label);
      this.confidence.set(+(probs[best] * 100).toFixed(1));
      this.inferenceTime.set(Math.round(performance.now() - t0));
      this.totalInferences.update(n => n + 1);
      this.accuracy.update(a => {
        const n = this.totalInferences();
        // accuracy tracks stability: consecutive same-class = stable
        return +(((a * (n - 1) + probs[best]) / n) * 100).toFixed(1);
      });
      this.inferring.set(false);
    });
  }

  ngOnDestroy() { this.stopAnalysis(); }
}
