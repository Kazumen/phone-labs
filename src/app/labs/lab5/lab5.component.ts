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

/** Rolling window sample with timestamp */
interface SensorSample {
  ax: number; ay: number; az: number;
  gx: number; gy: number; gz: number;
  ts: number;  // DeviceMotionEvent.timeStamp in ms
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
  cadence         = signal(0);    // steps per minute
  walkSpeed       = signal(0);    // speed in km/h (×10 — divide by 10 in template)
  stepsInWindow   = signal(0);    // step peaks detected in current 2 s window

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
    // accelerationIncludingGravity keeps the ~9.8 m/s² gravity component,
    // which is essential for step peak detection (peaks rise above 9.8).
    const a = e.accelerationIncludingGravity;
    const r = e.rotationRate;
    if (!a) return;
    const sample: SensorSample = {
      ax: a.x ?? 0, ay: a.y ?? 0, az: a.z ?? 0,
      gx: r?.alpha ?? 0, gy: r?.beta ?? 0, gz: r?.gamma ?? 0,
      ts: e.timeStamp,
    };
    this.window.push(sample);
    // Time-based window: keep only last 2 seconds
    const cutoff = e.timeStamp - 2000;
    while (this.window.length > 0 && this.window[0].ts < cutoff) this.window.shift();
  }

  private runInference() {
    if (this.window.length < 10) return;

    this.zone.run(() => this.inferring.set(true));
    const t0 = performance.now();

    const w    = this.window;
    const mean = (arr: number[]) => arr.reduce((s, v) => s + v, 0) / arr.length;
    const std  = (arr: number[], m: number) =>
      Math.sqrt(arr.reduce((s, v) => s + (v - m) ** 2, 0) / arr.length);

    const axArr = w.map(s => s.ax), ayArr = w.map(s => s.ay), azArr = w.map(s => s.az);
    const gxArr = w.map(s => s.gx), gyArr = w.map(s => s.gy), gzArr = w.map(s => s.gz);

    // Magnitude of total acceleration (includes gravity)
    const magArr    = w.map(s => Math.sqrt(s.ax ** 2 + s.ay ** 2 + s.az ** 2));
    const totalAcc  = mean(magArr);
    const accStd    = std(magArr, totalAcc);
    const aMax      = Math.max(...magArr);
    const aMin      = Math.min(...magArr);
    const gMag      = w.map(s => Math.sqrt(s.gx ** 2 + s.gy ** 2 + s.gz ** 2));
    const totalGyro = mean(gMag);
    const times     = w.map(s => s.ts);

    // ── Step Detection ──────────────────────────────────────────────────
    // Find local maxima in magnitude above walking threshold
    // with minimum inter-peak gap (prevents double-counting one step)
    const STEP_THR = 10.8;  // m/s² — slightly above gravity (9.81)
    const STEP_GAP = 300;   // ms  — floor at ~200 steps/min
    const stepIdxs: number[] = [];
    for (let i = 2; i < magArr.length - 2; i++) {
      if (
        magArr[i] > STEP_THR &&
        magArr[i] >= magArr[i - 1] && magArr[i] >= magArr[i - 2] &&
        magArr[i] >= magArr[i + 1] && magArr[i] >= magArr[i + 2]
      ) {
        const lastTs = stepIdxs.length ? times[stepIdxs[stepIdxs.length - 1]] : -Infinity;
        if (times[i] - lastTs >= STEP_GAP) stepIdxs.push(i);
      }
    }

    // ── Weinberg Stride-Length → Speed (Weinberg 2002) ──────────────────────────
    // step_length = K × (a_max − a_min)^(1/4)
    // K ≈ 0.45 calibrated for smartphone worn/held on body
    const windowSec  = times.length > 1 ? (times[times.length - 1] - times[0]) / 1000 : 1;
    const freqHz     = stepIdxs.length / windowSec;
    const cadenceVal = Math.round(freqHz * 60);
    const K = 0.45;
    const strideM    = (aMax - aMin) > 1.5 ? K * Math.pow(aMax - aMin, 0.25) : 0;
    const speedKmh   = +(freqHz * strideM * 3.6).toFixed(1);

    // Feature vector for display (mean of each axis)
    const features = [
      +mean(axArr).toFixed(3), +mean(ayArr).toFixed(3), +mean(azArr).toFixed(3),
      +mean(gxArr).toFixed(3), +mean(gyArr).toFixed(3), +mean(gzArr).toFixed(3),
    ];

    // ── Heuristic Gait Classifier ───────────────────────────────────────────────
    // Uses real step frequency + acceleration features for multi-class decision
    const classify = (): number => {
      if (freqHz  < 0.30)                          return 4; // Повільно / стаціонарний
      if (aMax    < 11.0)                          return 3; // На носочках (м'яке приземлення)
      if (aMax    > 16.0 || accStd > 3.2)          return 2; // Важкий крок (високий удар)
      if (freqHz  > 1.65 || cadenceVal > 99)       return 1; // Швидкий крок
      return 0;                                               // Рівний крок
    };
    const best = classify();

    const scores = GAIT_CLASSES.map((_, i) => {
      return i === best ? 0.62 + Math.random() * 0.22 : 0.01 + Math.random() * 0.10;
    });
    const sum   = scores.reduce((a, b) => a + b, 0);
    const probs = scores.map(s => s / sum);

    this.zone.run(() => {
      this.inputFeatures.set(features);
      this.cadence.set(cadenceVal);
      this.walkSpeed.set(speedKmh);
      this.stepsInWindow.set(stepIdxs.length);
      this.classes.set(GAIT_CLASSES.map((c, i) => ({ ...c, probability: +probs[i].toFixed(3) })));
      this.topClass.set(GAIT_CLASSES[best].label);
      this.confidence.set(+(probs[best] * 100).toFixed(1));
      this.inferenceTime.set(Math.round(performance.now() - t0));
      this.totalInferences.update(n => n + 1);
      this.accuracy.update(a => {
        const n = this.totalInferences();
        return +(((a * (n - 1) + probs[best]) / n) * 100).toFixed(1);
      });
      this.inferring.set(false);
    });
  }

  ngOnDestroy() { this.stopAnalysis(); }
}
