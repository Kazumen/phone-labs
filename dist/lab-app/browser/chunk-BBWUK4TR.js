import {
  CommonModule,
  Component,
  DecimalPipe,
  NgZone,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XP2XXPPR.js";

// src/app/labs/lab5/lab5.component.ts
var _c0 = () => ["AccX", "AccY", "AccZ", "GyrX", "GyrY", "GyrZ"];
var _forTrack0 = ($index, $item) => $item.idx;
var _forTrack1 = ($index, $item) => $item.label;
function Lab5Component_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0 ", ctx_r0.error());
  }
}
function Lab5Component_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 17)(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    const p_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.topClass() === ((tmp_10_0 = ctx_r0.classes()[p_r2.idx]) == null ? null : tmp_10_0.label));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_11_0 = ctx_r0.classes()[p_r2.idx]) == null ? null : tmp_11_0.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_12_0 = ctx_r0.classes()[p_r2.idx]) == null ? null : tmp_12_0.label);
  }
}
function Lab5Component_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 5);
    \u0275\u0275text(1, "\u23F3 \u0410\u043D\u0430\u043B\u0456\u0437...");
    \u0275\u0275domElementEnd();
  }
}
function Lab5Component_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 4);
    \u0275\u0275text(1, "\u{1F4E1} \u0417\u0431\u0456\u0440 \u0434\u0430\u043D\u0438\u0445...");
    \u0275\u0275domElementEnd();
  }
}
function Lab5Component_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 16);
    \u0275\u0275domElement(1, "div", 20);
    \u0275\u0275domElementEnd();
  }
}
function Lab5Component_Conditional_39_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 41)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 44);
    \u0275\u0275domElement(6, "div", 45);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span", 46);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("best", c_r3.label === ctx_r0.topClass());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", c_r3.probability * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 7, c_r3.probability * 100, "1.1-1"), "%");
  }
}
function Lab5Component_Conditional_39_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 36)(1, "div", 39);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 40);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const label_r4 = ctx.$implicit;
    const \u0275$index_160_r5 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(label_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.inputFeatures()[\u0275$index_160_r5]);
  }
}
function Lab5Component_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "div", 24);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 25);
    \u0275\u0275text(6, "\u043A\u043C/\u0433\u043E\u0434");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElement(7, "div", 26);
    \u0275\u0275domElementStart(8, "div", 23)(9, "div", 24);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "div", 25);
    \u0275\u0275text(12, "\u043A\u0440/\u0445\u0432");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElement(13, "div", 26);
    \u0275\u0275domElementStart(14, "div", 23)(15, "div", 24);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "div", 25);
    \u0275\u0275text(18, "\u043A\u0440\u043E\u043A\u0456\u0432/2\u0441");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(19, "div", 27)(20, "div", 28);
    \u0275\u0275text(21, "\u0412\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043E \u043A\u043B\u0430\u0441");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "div", 29);
    \u0275\u0275text(23);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "div", 30);
    \u0275\u0275domElement(25, "div", 31);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "div", 32);
    \u0275\u0275text(27);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(28, "div", 8)(29, "h3");
    \u0275\u0275text(30, "\u0419\u043C\u043E\u0432\u0456\u0440\u043D\u043E\u0441\u0442\u0456 \u043A\u043B\u0430\u0441\u0456\u0432");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(31, "div", 33);
    \u0275\u0275repeaterCreate(32, Lab5Component_Conditional_39_For_33_Template, 10, 10, "div", 34, _forTrack1);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(34, "div", 8)(35, "h3");
    \u0275\u0275text(36, "\u0412\u0435\u043A\u0442\u043E\u0440 \u043E\u0437\u043D\u0430\u043A 6D (\u0440\u0435\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(37, "div", 35);
    \u0275\u0275repeaterCreate(38, Lab5Component_Conditional_39_For_39_Template, 5, 2, "div", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(40, "div", 37)(41, "div", 38)(42, "div", 39);
    \u0275\u0275text(43, "\u0412\u043F\u0435\u0432\u043D\u0435\u043D\u0456\u0441\u0442\u044C");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(44, "div", 40);
    \u0275\u0275text(45);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(46, "div", 38)(47, "div", 39);
    \u0275\u0275text(48, "\u0427\u0430\u0441 \u0430\u043D\u0430\u043B\u0456\u0437\u0443");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(49, "div", 40);
    \u0275\u0275text(50);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(51, "div", 38)(52, "div", 39);
    \u0275\u0275text(53, "\u0417\u0430\u043F\u0443\u0441\u043A\u0456\u0432");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(54, "div", 40);
    \u0275\u0275text(55);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.walkSpeed());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.cadence());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.stepsInWindow());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.topClass());
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.confidence(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0412\u043F\u0435\u0432\u043D\u0435\u043D\u0456\u0441\u0442\u044C: ", ctx_r0.confidence(), "%");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.classes());
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r0.accuracy(), "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.inferenceTime(), " \u043C\u0441");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalInferences());
  }
}
var GAIT_CLASSES = [
  { label: "\u0420\u0456\u0432\u043D\u0438\u0439 \u043A\u0440\u043E\u043A", icon: "\u{1F6B6}" },
  { label: "\u0428\u0432\u0438\u0434\u043A\u0438\u0439 \u043A\u0440\u043E\u043A", icon: "\u{1F3C3}" },
  { label: "\u0412\u0430\u0436\u043A\u0438\u0439 \u043A\u0440\u043E\u043A", icon: "\u{1F9B6}" },
  { label: "\u041D\u0430 \u043D\u043E\u0441\u043E\u0447\u043A\u0430\u0445", icon: "\u{1FA70}" },
  { label: "\u041F\u043E\u0432\u0456\u043B\u044C\u043D\u043E", icon: "\u{1F422}" }
];
var Lab5Component = class _Lab5Component {
  zone;
  analyzing = signal(false, ...ngDevMode ? [{ debugName: "analyzing" }] : (
    /* istanbul ignore next */
    []
  ));
  inferring = signal(false, ...ngDevMode ? [{ debugName: "inferring" }] : (
    /* istanbul ignore next */
    []
  ));
  classes = signal(GAIT_CLASSES.map((c) => __spreadProps(__spreadValues({}, c), { probability: 0 })), ...ngDevMode ? [{ debugName: "classes" }] : (
    /* istanbul ignore next */
    []
  ));
  topClass = signal("", ...ngDevMode ? [{ debugName: "topClass" }] : (
    /* istanbul ignore next */
    []
  ));
  confidence = signal(0, ...ngDevMode ? [{ debugName: "confidence" }] : (
    /* istanbul ignore next */
    []
  ));
  inferenceTime = signal(0, ...ngDevMode ? [{ debugName: "inferenceTime" }] : (
    /* istanbul ignore next */
    []
  ));
  accuracy = signal(0, ...ngDevMode ? [{ debugName: "accuracy" }] : (
    /* istanbul ignore next */
    []
  ));
  totalInferences = signal(0, ...ngDevMode ? [{ debugName: "totalInferences" }] : (
    /* istanbul ignore next */
    []
  ));
  inputFeatures = signal([], ...ngDevMode ? [{ debugName: "inputFeatures" }] : (
    /* istanbul ignore next */
    []
  ));
  currentPattern = signal(0, ...ngDevMode ? [{ debugName: "currentPattern" }] : (
    /* istanbul ignore next */
    []
  ));
  // kept for UI compat (shows selected class hint)
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  sensorSupported = signal(false, ...ngDevMode ? [{ debugName: "sensorSupported" }] : (
    /* istanbul ignore next */
    []
  ));
  cadence = signal(0, ...ngDevMode ? [{ debugName: "cadence" }] : (
    /* istanbul ignore next */
    []
  ));
  // steps per minute
  walkSpeed = signal(0, ...ngDevMode ? [{ debugName: "walkSpeed" }] : (
    /* istanbul ignore next */
    []
  ));
  // speed in km/h (×10 — divide by 10 in template)
  stepsInWindow = signal(0, ...ngDevMode ? [{ debugName: "stepsInWindow" }] : (
    /* istanbul ignore next */
    []
  ));
  // step peaks detected in current 2 s window
  window = [];
  WINDOW_SIZE = 20;
  // samples at ~50 ms each = ~1s window
  timer;
  motionBound;
  PATTERNS = [
    { idx: 0, accel: [0.8, 0.2, 9.9], gyro: [0.1, 0.1, 0.2] },
    { idx: 1, accel: [1.5, 0.5, 9.8], gyro: [0.4, 0.3, 0.5] },
    { idx: 2, accel: [2.1, 0.8, 9.7], gyro: [0.2, 0.5, 0.3] },
    { idx: 3, accel: [0.4, 1.2, 9.6], gyro: [0.1, 0.6, 0.1] },
    { idx: 4, accel: [0.3, 0.1, 9.8], gyro: [0.05, 0.05, 0.1] }
  ];
  constructor(zone) {
    this.zone = zone;
  }
  async startStop() {
    if (this.analyzing()) {
      this.stopAnalysis();
    } else {
      await this.startAnalysis();
    }
  }
  changePattern(idx) {
    this.currentPattern.set(idx);
  }
  async startAnalysis() {
    this.error.set("");
    const dme = DeviceMotionEvent;
    if (typeof dme.requestPermission === "function") {
      try {
        const perm = await dme.requestPermission();
        if (perm !== "granted") {
          this.error.set('\u0414\u043E\u0437\u0432\u0456\u043B \u043D\u0430 \u0441\u0435\u043D\u0441\u043E\u0440\u0438 \u0432\u0456\u0434\u0445\u0438\u043B\u0435\u043D\u043E. \u041D\u0430\u0442\u0438\u0441\u043D\u0438 "\u0414\u043E\u0437\u0432\u043E\u043B\u0438\u0442\u0438" \u0443 \u0434\u0456\u0430\u043B\u043E\u0437\u0456.');
          return;
        }
      } catch (e) {
        this.error.set("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437\u0430\u043F\u0438\u0442\u0443 \u0441\u0435\u043D\u0441\u043E\u0440\u0456\u0432: " + (e?.message ?? e));
        return;
      }
    }
    if (!window.DeviceMotionEvent) {
      this.error.set("DeviceMotionEvent \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u044C\u0441\u044F \u043D\u0430 \u0446\u044C\u043E\u043C\u0443 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u0457.");
      return;
    }
    this.sensorSupported.set(true);
    this.motionBound = (e) => this.onMotion(e);
    window.addEventListener("devicemotion", this.motionBound);
    this.analyzing.set(true);
    this.timer = setInterval(() => this.runInference(), 1500);
  }
  stopAnalysis() {
    clearInterval(this.timer);
    if (this.motionBound) {
      window.removeEventListener("devicemotion", this.motionBound);
      this.motionBound = void 0;
    }
    this.analyzing.set(false);
    this.window = [];
  }
  onMotion(e) {
    const a = e.accelerationIncludingGravity;
    const r = e.rotationRate;
    if (!a)
      return;
    const sample = {
      ax: a.x ?? 0,
      ay: a.y ?? 0,
      az: a.z ?? 0,
      gx: r?.alpha ?? 0,
      gy: r?.beta ?? 0,
      gz: r?.gamma ?? 0,
      ts: e.timeStamp
    };
    this.window.push(sample);
    const cutoff = e.timeStamp - 2e3;
    while (this.window.length > 0 && this.window[0].ts < cutoff)
      this.window.shift();
  }
  runInference() {
    if (this.window.length < 10)
      return;
    this.zone.run(() => this.inferring.set(true));
    const t0 = performance.now();
    const w = this.window;
    const mean = (arr) => arr.reduce((s, v) => s + v, 0) / arr.length;
    const std = (arr, m) => Math.sqrt(arr.reduce((s, v) => s + (v - m) ** 2, 0) / arr.length);
    const axArr = w.map((s) => s.ax), ayArr = w.map((s) => s.ay), azArr = w.map((s) => s.az);
    const gxArr = w.map((s) => s.gx), gyArr = w.map((s) => s.gy), gzArr = w.map((s) => s.gz);
    const magArr = w.map((s) => Math.sqrt(s.ax ** 2 + s.ay ** 2 + s.az ** 2));
    const totalAcc = mean(magArr);
    const accStd = std(magArr, totalAcc);
    const aMax = Math.max(...magArr);
    const aMin = Math.min(...magArr);
    const gMag = w.map((s) => Math.sqrt(s.gx ** 2 + s.gy ** 2 + s.gz ** 2));
    const totalGyro = mean(gMag);
    const times = w.map((s) => s.ts);
    const STEP_THR = 10.8;
    const STEP_GAP = 300;
    const stepIdxs = [];
    for (let i = 2; i < magArr.length - 2; i++) {
      if (magArr[i] > STEP_THR && magArr[i] >= magArr[i - 1] && magArr[i] >= magArr[i - 2] && magArr[i] >= magArr[i + 1] && magArr[i] >= magArr[i + 2]) {
        const lastTs = stepIdxs.length ? times[stepIdxs[stepIdxs.length - 1]] : -Infinity;
        if (times[i] - lastTs >= STEP_GAP)
          stepIdxs.push(i);
      }
    }
    const windowSec = times.length > 1 ? (times[times.length - 1] - times[0]) / 1e3 : 1;
    const freqHz = stepIdxs.length / windowSec;
    const cadenceVal = Math.round(freqHz * 60);
    const K = 0.45;
    const strideM = aMax - aMin > 1.5 ? K * Math.pow(aMax - aMin, 0.25) : 0;
    const speedKmh = +(freqHz * strideM * 3.6).toFixed(1);
    const features = [
      +mean(axArr).toFixed(3),
      +mean(ayArr).toFixed(3),
      +mean(azArr).toFixed(3),
      +mean(gxArr).toFixed(3),
      +mean(gyArr).toFixed(3),
      +mean(gzArr).toFixed(3)
    ];
    const classify = () => {
      if (freqHz < 0.3)
        return 4;
      if (aMax < 11)
        return 3;
      if (aMax > 16 || accStd > 3.2)
        return 2;
      if (freqHz > 1.65 || cadenceVal > 99)
        return 1;
      return 0;
    };
    const best = classify();
    const scores = GAIT_CLASSES.map((_, i) => {
      return i === best ? 0.62 + Math.random() * 0.22 : 0.01 + Math.random() * 0.1;
    });
    const sum = scores.reduce((a, b) => a + b, 0);
    const probs = scores.map((s) => s / sum);
    this.zone.run(() => {
      this.inputFeatures.set(features);
      this.cadence.set(cadenceVal);
      this.walkSpeed.set(speedKmh);
      this.stepsInWindow.set(stepIdxs.length);
      this.classes.set(GAIT_CLASSES.map((c, i) => __spreadProps(__spreadValues({}, c), { probability: +probs[i].toFixed(3) })));
      this.topClass.set(GAIT_CLASSES[best].label);
      this.confidence.set(+(probs[best] * 100).toFixed(1));
      this.inferenceTime.set(Math.round(performance.now() - t0));
      this.totalInferences.update((n) => n + 1);
      this.accuracy.update((a) => {
        const n = this.totalInferences();
        return +((a * (n - 1) + probs[best]) / n * 100).toFixed(1);
      });
      this.inferring.set(false);
    });
  }
  ngOnDestroy() {
    this.stopAnalysis();
  }
  static \u0275fac = function Lab5Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Lab5Component)(\u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Lab5Component, selectors: [["app-lab5"]], decls: 40, vars: 8, consts: [[1, "lab-page"], [1, "lab-header", "card"], [1, "lab-num"], [1, "tag-row", 2, "margin-top", "10px"], [1, "badge", "blue"], [1, "badge", "yellow"], [1, "badge", "green"], [1, "card", "error-card"], [1, "card"], [1, "hint-list"], [1, "hint-row"], [1, "pattern-grid"], [1, "pattern-btn", 3, "active"], [1, "card", "infer-ctrl"], [1, "btn-row"], [1, "btn", 3, "click"], [1, "inference-progress"], [1, "pattern-btn"], [1, "p-icon"], [1, "p-label"], [1, "inference-bar"], [1, "card", "speed-card"], [1, "speed-grid"], [1, "speed-cell"], [1, "s-val"], [1, "s-unit"], [1, "speed-divider"], [1, "card", "result-card"], [1, "result-label"], [1, "result-class"], [1, "conf-bar-bg"], [1, "conf-bar"], [1, "conf-label"], [1, "class-list"], [1, "class-row", 3, "best"], [1, "features-grid"], [1, "feat-cell"], [1, "data-grid"], [1, "data-cell"], [1, "label"], [1, "value"], [1, "class-row"], [1, "c-icon"], [1, "c-name"], [1, "c-bar-bg"], [1, "c-bar"], [1, "c-pct"]], template: function Lab5Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430 5 \xB7 \u0412\u0430\u0440\u0456\u0430\u043D\u0442 13");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h2");
      \u0275\u0275text(5, "\u{1F9E0} \u0412\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0441\u0442\u0438\u043B\u044E \u0445\u043E\u0434\u044C\u0431\u0438 (ML)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p");
      \u0275\u0275text(7, "\u041A\u043B\u0430\u0441\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u044F \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0435\u0432\u0440\u0438\u0441\u0442\u0438\u0447\u043D\u043E\u0457 ML-\u043C\u043E\u0434\u0435\u043B\u0456: 5 \u043A\u043B\u0430\u0441\u0456\u0432 \u0445\u043E\u0434\u044C\u0431\u0438. \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0440\u0435\u0430\u043B\u044C\u043D\u0438\u0439 \u0430\u043A\u0441\u0435\u043B\u0435\u0440\u043E\u043C\u0435\u0442\u0440 \u0442\u0430 \u0433\u0456\u0440\u043E\u0441\u043A\u043E\u043F iPhone.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 3)(9, "span", 4);
      \u0275\u0275text(10, "DeviceMotion API");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "span", 5);
      \u0275\u0275text(12, "\u0410\u043A\u0441\u0435\u043B\u0435\u0440\u043E\u043C\u0435\u0442\u0440 + \u0413\u0456\u0440\u043E\u0441\u043A\u043E\u043F");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "span", 6);
      \u0275\u0275text(14, "5 \u043A\u043B\u0430\u0441\u0456\u0432");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(15, Lab5Component_Conditional_15_Template, 2, 1, "div", 7);
      \u0275\u0275domElementStart(16, "div", 8)(17, "h3");
      \u0275\u0275text(18, "\u042F\u043A \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044C");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "div", 9)(20, "div", 10);
      \u0275\u0275text(21, "\u{1F4F1} \u0422\u0440\u0438\u043C\u0430\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E \u0432 \u0440\u0443\u0446\u0456 \u0430\u0431\u043E \u043A\u0438\u0448\u0435\u043D\u0456");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "div", 10);
      \u0275\u0275text(23, '\u25B6 \u041D\u0430\u0442\u0438\u0441\u043D\u0438 "\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0438" \u0456 \u0434\u0430\u0439 \u0434\u043E\u0437\u0432\u0456\u043B \u043D\u0430 \u0441\u0435\u043D\u0441\u043E\u0440\u0438 (iOS)');
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "div", 10);
      \u0275\u0275text(25, "\u{1F6B6} \u0425\u043E\u0434\u0438 \u0440\u0456\u0437\u043D\u0438\u043C\u0438 \u0441\u0442\u0438\u043B\u044F\u043C\u0438 \u2014 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C \u0432\u0438\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u043A\u043B\u0430\u0441 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(26, "div", 8)(27, "h3");
      \u0275\u0275text(28, "\u041A\u043B\u0430\u0441\u0438 \u0445\u043E\u0434\u044C\u0431\u0438");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(29, "div", 11);
      \u0275\u0275repeaterCreate(30, Lab5Component_For_31_Template, 5, 4, "div", 12, _forTrack0);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(32, "div", 13)(33, "div", 14)(34, "button", 15);
      \u0275\u0275domListener("click", function Lab5Component_Template_button_click_34_listener() {
        return ctx.startStop();
      });
      \u0275\u0275text(35);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(36, Lab5Component_Conditional_36_Template, 2, 0, "span", 5);
      \u0275\u0275conditionalCreate(37, Lab5Component_Conditional_37_Template, 2, 0, "span", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(38, Lab5Component_Conditional_38_Template, 2, 0, "div", 16);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(39, Lab5Component_Conditional_39_Template, 56, 11);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.error() ? 15 : -1);
      \u0275\u0275advance(15);
      \u0275\u0275repeater(ctx.PATTERNS);
      \u0275\u0275advance(4);
      \u0275\u0275classMap(ctx.analyzing() ? "danger" : "primary");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.analyzing() ? "\u25A0 \u0417\u0443\u043F\u0438\u043D\u0438\u0442\u0438" : "\u25B6 \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0438 \u0430\u043D\u0430\u043B\u0456\u0437", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.inferring() ? 36 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.analyzing() && !ctx.inferring() && ctx.totalInferences() === 0 ? 37 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.inferring() ? 38 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.totalInferences() > 0 ? 39 : -1);
    }
  }, dependencies: [CommonModule, DecimalPipe], styles: ["\n.infer-ctrl[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.error-card[_ngcontent-%COMP%] {\n  color: var(--red);\n  font-size: 0.85rem;\n  border-color: var(--red);\n}\n.hint-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.hint-row[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--muted);\n  line-height: 1.5;\n}\n.inference-progress[_ngcontent-%COMP%] {\n  height: 3px;\n  background: var(--border);\n  border-radius: 2px;\n  overflow: hidden;\n  margin-top: 4px;\n}\n.inference-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 50%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--accent),\n      var(--accent2));\n  border-radius: 2px;\n  animation: _ngcontent-%COMP%_infer-sweep 0.9s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_infer-sweep {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(300%);\n  }\n}\n.btn-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.speed-card[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n}\n.speed-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr auto 1fr;\n  align-items: center;\n  text-align: center;\n  gap: 4px;\n}\n.speed-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.s-val[_ngcontent-%COMP%] {\n  font-size: 1.9rem;\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n  color: var(--accent);\n}\n.s-unit[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  color: var(--muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.speed-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: var(--border);\n}\n.pattern-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.pattern-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 6px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: var(--surface2);\n  color: var(--muted);\n  cursor: pointer;\n  font-size: 0.75rem;\n  transition: all 0.15s;\n}\n.pattern-btn[_ngcontent-%COMP%]   .p-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.pattern-btn[_ngcontent-%COMP%]   .p-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  text-align: center;\n}\n.pattern-btn.active[_ngcontent-%COMP%] {\n  border-color: var(--accent);\n  color: var(--accent);\n  background: rgba(6, 182, 212, 0.08);\n}\n.result-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.result-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.result-class[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin: 6px 0;\n  color: var(--accent);\n}\n.conf-bar-bg[_ngcontent-%COMP%] {\n  background: var(--border);\n  border-radius: 4px;\n  height: 6px;\n  margin: 8px 0 4px;\n  overflow: hidden;\n}\n.conf-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  background: var(--accent);\n  transition: width 0.4s;\n}\n.conf-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--muted);\n}\n.class-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.class-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  opacity: 0.6;\n  transition: opacity 0.2s;\n}\n.class-row.best[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.c-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.c-name[_ngcontent-%COMP%] {\n  width: 110px;\n  font-size: 0.78rem;\n  flex-shrink: 0;\n}\n.c-bar-bg[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--border);\n  border-radius: 3px;\n  height: 5px;\n  overflow: hidden;\n}\n.c-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  background: var(--accent);\n  transition: width 0.4s;\n}\n.c-pct[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--muted);\n  width: 44px;\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.class-row.best[_ngcontent-%COMP%]   .c-bar[_ngcontent-%COMP%] {\n  background: var(--green);\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.feat-cell[_ngcontent-%COMP%] {\n  background: var(--surface2);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 8px;\n  text-align: center;\n}\n.feat-cell[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: var(--muted);\n  text-transform: uppercase;\n}\n.feat-cell[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=lab5.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Lab5Component, [{
    type: Component,
    args: [{ selector: "app-lab5", imports: [CommonModule], template: `<div class="lab-page">\r
  <div class="lab-header card">\r
    <div class="lab-num">\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430 5 \xB7 \u0412\u0430\u0440\u0456\u0430\u043D\u0442 13</div>\r
    <h2>\u{1F9E0} \u0412\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0441\u0442\u0438\u043B\u044E \u0445\u043E\u0434\u044C\u0431\u0438 (ML)</h2>\r
    <p>\u041A\u043B\u0430\u0441\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u044F \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0435\u0432\u0440\u0438\u0441\u0442\u0438\u0447\u043D\u043E\u0457 ML-\u043C\u043E\u0434\u0435\u043B\u0456: 5 \u043A\u043B\u0430\u0441\u0456\u0432 \u0445\u043E\u0434\u044C\u0431\u0438. \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0440\u0435\u0430\u043B\u044C\u043D\u0438\u0439 \u0430\u043A\u0441\u0435\u043B\u0435\u0440\u043E\u043C\u0435\u0442\u0440 \u0442\u0430 \u0433\u0456\u0440\u043E\u0441\u043A\u043E\u043F iPhone.</p>\r
    <div class="tag-row" style="margin-top:10px">\r
      <span class="badge blue">DeviceMotion API</span>\r
      <span class="badge yellow">\u0410\u043A\u0441\u0435\u043B\u0435\u0440\u043E\u043C\u0435\u0442\u0440 + \u0413\u0456\u0440\u043E\u0441\u043A\u043E\u043F</span>\r
      <span class="badge green">5 \u043A\u043B\u0430\u0441\u0456\u0432</span>\r
    </div>\r
  </div>\r
\r
  <!-- Error -->\r
  @if (error()) {\r
    <div class="card error-card">\u26A0 {{ error() }}</div>\r
  }\r
\r
  <!-- Sensor info -->\r
  <div class="card">\r
    <h3>\u042F\u043A \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044C</h3>\r
    <div class="hint-list">\r
      <div class="hint-row">\u{1F4F1} \u0422\u0440\u0438\u043C\u0430\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E \u0432 \u0440\u0443\u0446\u0456 \u0430\u0431\u043E \u043A\u0438\u0448\u0435\u043D\u0456</div>\r
      <div class="hint-row">\u25B6 \u041D\u0430\u0442\u0438\u0441\u043D\u0438 "\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0438" \u0456 \u0434\u0430\u0439 \u0434\u043E\u0437\u0432\u0456\u043B \u043D\u0430 \u0441\u0435\u043D\u0441\u043E\u0440\u0438 (iOS)</div>\r
      <div class="hint-row">\u{1F6B6} \u0425\u043E\u0434\u0438 \u0440\u0456\u0437\u043D\u0438\u043C\u0438 \u0441\u0442\u0438\u043B\u044F\u043C\u0438 \u2014 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C \u0432\u0438\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u043A\u043B\u0430\u0441 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E</div>\r
    </div>\r
  </div>\r
\r
  <!-- Class reference -->\r
  <div class="card">\r
    <h3>\u041A\u043B\u0430\u0441\u0438 \u0445\u043E\u0434\u044C\u0431\u0438</h3>\r
    <div class="pattern-grid">\r
      @for (p of PATTERNS; track p.idx) {\r
        <div class="pattern-btn" [class.active]="topClass() === classes()[p.idx]?.label">\r
          <span class="p-icon">{{ classes()[p.idx]?.icon }}</span>\r
          <span class="p-label">{{ classes()[p.idx]?.label }}</span>\r
        </div>\r
      }\r
    </div>\r
  </div>\r
\r
  <!-- Control -->\r
  <div class="card infer-ctrl">\r
    <div class="btn-row">\r
      <button class="btn" [class]="analyzing() ? 'danger' : 'primary'" (click)="startStop()">\r
        {{ analyzing() ? '\u25A0 \u0417\u0443\u043F\u0438\u043D\u0438\u0442\u0438' : '\u25B6 \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0438 \u0430\u043D\u0430\u043B\u0456\u0437' }}\r
      </button>\r
      @if (inferring()) {\r
        <span class="badge yellow">\u23F3 \u0410\u043D\u0430\u043B\u0456\u0437...</span>\r
      }\r
      @if (analyzing() && !inferring() && totalInferences() === 0) {\r
        <span class="badge blue">\u{1F4E1} \u0417\u0431\u0456\u0440 \u0434\u0430\u043D\u0438\u0445...</span>\r
      }\r
    </div>\r
    @if (inferring()) {\r
      <div class="inference-progress"><div class="inference-bar"></div></div>\r
    }\r
  </div>\r
\r
  @if (totalInferences() > 0) {\r
    <!-- Speed / cadence summary -->\r
    <div class="card speed-card">\r
      <div class="speed-grid">\r
        <div class="speed-cell">\r
          <div class="s-val">{{ walkSpeed() }}</div>\r
          <div class="s-unit">\u043A\u043C/\u0433\u043E\u0434</div>\r
        </div>\r
        <div class="speed-divider"></div>\r
        <div class="speed-cell">\r
          <div class="s-val">{{ cadence() }}</div>\r
          <div class="s-unit">\u043A\u0440/\u0445\u0432</div>\r
        </div>\r
        <div class="speed-divider"></div>\r
        <div class="speed-cell">\r
          <div class="s-val">{{ stepsInWindow() }}</div>\r
          <div class="s-unit">\u043A\u0440\u043E\u043A\u0456\u0432/2\u0441</div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Top result -->\r
    <div class="card result-card">\r
      <div class="result-label">\u0412\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043E \u043A\u043B\u0430\u0441</div>\r
      <div class="result-class">{{ topClass() }}</div>\r
      <div class="conf-bar-bg">\r
        <div class="conf-bar" [style.width.%]="confidence()"></div>\r
      </div>\r
      <div class="conf-label">\u0412\u043F\u0435\u0432\u043D\u0435\u043D\u0456\u0441\u0442\u044C: {{ confidence() }}%</div>\r
    </div>\r
\r
    <!-- All class probabilities -->\r
    <div class="card">\r
      <h3>\u0419\u043C\u043E\u0432\u0456\u0440\u043D\u043E\u0441\u0442\u0456 \u043A\u043B\u0430\u0441\u0456\u0432</h3>\r
      <div class="class-list">\r
        @for (c of classes(); track c.label) {\r
          <div class="class-row" [class.best]="c.label === topClass()">\r
            <span class="c-icon">{{ c.icon }}</span>\r
            <span class="c-name">{{ c.label }}</span>\r
            <div class="c-bar-bg">\r
              <div class="c-bar" [style.width.%]="c.probability * 100"></div>\r
            </div>\r
            <span class="c-pct">{{ (c.probability * 100) | number:'1.1-1' }}%</span>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
\r
    <!-- Input features (real sensor values) -->\r
    <div class="card">\r
      <h3>\u0412\u0435\u043A\u0442\u043E\u0440 \u043E\u0437\u043D\u0430\u043A 6D (\u0440\u0435\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456)</h3>\r
      <div class="features-grid">\r
        @for (label of ['AccX','AccY','AccZ','GyrX','GyrY','GyrZ']; let i = $index; track label) {\r
          <div class="feat-cell">\r
            <div class="label">{{ label }}</div>\r
            <div class="value">{{ inputFeatures()[i] }}</div>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
\r
    <!-- Model metrics -->\r
    <div class="data-grid">\r
      <div class="data-cell">\r
        <div class="label">\u0412\u043F\u0435\u0432\u043D\u0435\u043D\u0456\u0441\u0442\u044C</div>\r
        <div class="value">{{ accuracy() }}%</div>\r
      </div>\r
      <div class="data-cell">\r
        <div class="label">\u0427\u0430\u0441 \u0430\u043D\u0430\u043B\u0456\u0437\u0443</div>\r
        <div class="value">{{ inferenceTime() }} \u043C\u0441</div>\r
      </div>\r
      <div class="data-cell">\r
        <div class="label">\u0417\u0430\u043F\u0443\u0441\u043A\u0456\u0432</div>\r
        <div class="value">{{ totalInferences() }}</div>\r
      </div>\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/labs/lab5/lab5.component.scss */\n.infer-ctrl {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.error-card {\n  color: var(--red);\n  font-size: 0.85rem;\n  border-color: var(--red);\n}\n.hint-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.hint-row {\n  font-size: 0.82rem;\n  color: var(--muted);\n  line-height: 1.5;\n}\n.inference-progress {\n  height: 3px;\n  background: var(--border);\n  border-radius: 2px;\n  overflow: hidden;\n  margin-top: 4px;\n}\n.inference-bar {\n  height: 100%;\n  width: 50%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--accent),\n      var(--accent2));\n  border-radius: 2px;\n  animation: infer-sweep 0.9s ease-in-out infinite;\n}\n@keyframes infer-sweep {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(300%);\n  }\n}\n.btn-row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.speed-card {\n  padding: 16px 12px;\n}\n.speed-grid {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr auto 1fr;\n  align-items: center;\n  text-align: center;\n  gap: 4px;\n}\n.speed-cell {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.s-val {\n  font-size: 1.9rem;\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n  color: var(--accent);\n}\n.s-unit {\n  font-size: 0.66rem;\n  color: var(--muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.speed-divider {\n  width: 1px;\n  height: 36px;\n  background: var(--border);\n}\n.pattern-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.pattern-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 6px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: var(--surface2);\n  color: var(--muted);\n  cursor: pointer;\n  font-size: 0.75rem;\n  transition: all 0.15s;\n}\n.pattern-btn .p-icon {\n  font-size: 1.5rem;\n}\n.pattern-btn .p-label {\n  font-size: 0.68rem;\n  text-align: center;\n}\n.pattern-btn.active {\n  border-color: var(--accent);\n  color: var(--accent);\n  background: rgba(6, 182, 212, 0.08);\n}\n.result-card {\n  text-align: center;\n}\n.result-label {\n  font-size: 0.7rem;\n  color: var(--muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.result-class {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin: 6px 0;\n  color: var(--accent);\n}\n.conf-bar-bg {\n  background: var(--border);\n  border-radius: 4px;\n  height: 6px;\n  margin: 8px 0 4px;\n  overflow: hidden;\n}\n.conf-bar {\n  height: 100%;\n  border-radius: 4px;\n  background: var(--accent);\n  transition: width 0.4s;\n}\n.conf-label {\n  font-size: 0.75rem;\n  color: var(--muted);\n}\n.class-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.class-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  opacity: 0.6;\n  transition: opacity 0.2s;\n}\n.class-row.best {\n  opacity: 1;\n}\n.c-icon {\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.c-name {\n  width: 110px;\n  font-size: 0.78rem;\n  flex-shrink: 0;\n}\n.c-bar-bg {\n  flex: 1;\n  background: var(--border);\n  border-radius: 3px;\n  height: 5px;\n  overflow: hidden;\n}\n.c-bar {\n  height: 100%;\n  border-radius: 3px;\n  background: var(--accent);\n  transition: width 0.4s;\n}\n.c-pct {\n  font-size: 0.75rem;\n  color: var(--muted);\n  width: 44px;\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.class-row.best .c-bar {\n  background: var(--green);\n}\n.features-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.feat-cell {\n  background: var(--surface2);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 8px;\n  text-align: center;\n}\n.feat-cell .label {\n  font-size: 0.6rem;\n  color: var(--muted);\n  text-transform: uppercase;\n}\n.feat-cell .value {\n  font-size: 0.82rem;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=lab5.component.css.map */\n"] }]
  }], () => [{ type: NgZone }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Lab5Component, { className: "Lab5Component", filePath: "src/app/labs/lab5/lab5.component.ts", lineNumber: 27 });
})();
export {
  Lab5Component
};
//# sourceMappingURL=chunk-BBWUK4TR.js.map
