import {
  CommonModule,
  Component,
  NgZone,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XP2XXPPR.js";

// src/app/labs/lab3/lab3.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function Lab3Component_Conditional_15_Template(rf, ctx) {
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
function Lab3Component_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 10);
    \u0275\u0275text(1, "\u2191 \u0412\u0456\u0434\u043F\u0440\u0430\u0432\u043A\u0430");
    \u0275\u0275domElementEnd();
  }
}
function Lab3Component_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 6);
    \u0275\u0275text(1, "\u2713 \u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E");
    \u0275\u0275domElementEnd();
  }
}
function Lab3Component_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 11);
    \u0275\u0275text(1, "\u2717 \u041F\u043E\u043C\u0438\u043B\u043A\u0430");
    \u0275\u0275domElementEnd();
  }
}
function Lab3Component_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 21);
    \u0275\u0275domListener("click", function Lab3Component_Conditional_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startMonitoring());
    });
    \u0275\u0275text(1, "\u25B6 \u041F\u043E\u0447\u0430\u0442\u0438");
    \u0275\u0275domElementEnd();
  }
}
function Lab3Component_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 22);
    \u0275\u0275domListener("click", function Lab3Component_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.stopMonitoring());
    });
    \u0275\u0275text(1, "\u25A0 \u0417\u0443\u043F\u0438\u043D\u0438\u0442\u0438");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "button", 15);
    \u0275\u0275domListener("click", function Lab3Component_Conditional_27_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetOrigin());
    });
    \u0275\u0275text(3, "\u27F3 \u0421\u043A\u0438\u043D\u0443\u0442\u0438");
    \u0275\u0275domElementEnd();
  }
}
function Lab3Component_Conditional_30_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 \u041F\u043E\u0440\u044F\u0434 \u0437 \u043E\u0431'\u0454\u043A\u0442\u043E\u043C (\u2264 ", ctx_r0.CONTACT_CM, " \u0441\u043C)");
  }
}
function Lab3Component_Conditional_30_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2192 \u0412\u0456\u0434\u0434\u0430\u043B\u0435\u043D\u043D\u044F ", ctx_r0.displacement(), " \u0441\u043C");
  }
}
function Lab3Component_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275text(2, "\u041F\u0435\u0440\u0435\u043C\u0456\u0449\u0435\u043D\u043D\u044F \u0432\u0456\u0434 \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u043E\u0457 \u0442\u043E\u0447\u043A\u0438");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 25);
    \u0275\u0275text(4);
    \u0275\u0275domElementStart(5, "span", 26);
    \u0275\u0275text(6, " \u0441\u043C");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 27);
    \u0275\u0275conditionalCreate(8, Lab3Component_Conditional_30_Conditional_8_Template, 2, 1, "span", 6)(9, Lab3Component_Conditional_30_Conditional_9_Template, 2, 1, "span", 10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(11, "svg", 29);
    \u0275\u0275domElement(12, "circle", 30)(13, "circle", 31)(14, "circle", 32)(15, "circle", 33);
    \u0275\u0275domElementStart(16, "text", 34);
    \u0275\u0275text(17, "200\u0441\u043C");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(18, "text", 35);
    \u0275\u0275text(19, "150\u0441\u043C");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "text", 36);
    \u0275\u0275text(21, "100\u0441\u043C");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "text", 37);
    \u0275\u0275text(23, "30\u0441\u043C \u25A3");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(24, "circle", 38)(25, "circle", 39);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(26, "div", 40);
    \u0275\u0275domElement(27, "div", 41);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("near", ctx_r0.isClose);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.displacement());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.isClose ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("near", ctx_r0.isClose);
    \u0275\u0275advance(14);
    \u0275\u0275classProp("sonar-near", ctx_r0.isClose);
    \u0275\u0275attribute("cy", 100 - ctx_r0.dispForSonar / 200 * 78);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.dispForSonar / 200 * 100, "%");
  }
}
function Lab3Component_Conditional_62_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 44)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ev_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ev_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatTime(ev_r4.time));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ev_r4.peakCm, " \u0441\u043C");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ev_r4.duration, " \u0441");
  }
}
function Lab3Component_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "h3");
    \u0275\u0275text(2, "\u0416\u0443\u0440\u043D\u0430\u043B \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0456\u0432");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 42)(4, "div", 43)(5, "span");
    \u0275\u0275text(6, "#");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span");
    \u0275\u0275text(8, "\u0427\u0430\u0441");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "span");
    \u0275\u0275text(10, "\u041C\u0430\u043A\u0441. \u0432\u0456\u0434\u0434.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "span");
    \u0275\u0275text(12, "\u0422\u0440\u0438\u0432");
    \u0275\u0275domElementEnd()();
    \u0275\u0275repeaterCreate(13, Lab3Component_Conditional_62_For_14_Template, 9, 4, "div", 44, _forTrack0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r0.contacts().slice(0, 8));
  }
}
var Lab3Component = class _Lab3Component {
  zone;
  /**
   * Contact fires when phone RETURNS within this distance from starting point.
   * Dead-reckoning approach: double-integrate DeviceMotionEvent.acceleration
   * with Zero-Velocity Update (ZUPT) to estimate 3-D displacement.
   */
  CONTACT_CM = 30;
  ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
  monitoring = signal(false, ...ngDevMode ? [{ debugName: "monitoring" }] : (
    /* istanbul ignore next */
    []
  ));
  displacement = signal(0, ...ngDevMode ? [{ debugName: "displacement" }] : (
    /* istanbul ignore next */
    []
  ));
  // 3-D distance from origin, cm
  speed = signal(0, ...ngDevMode ? [{ debugName: "speed" }] : (
    /* istanbul ignore next */
    []
  ));
  // movement speed, cm/s
  accelMag = signal(0, ...ngDevMode ? [{ debugName: "accelMag" }] : (
    /* istanbul ignore next */
    []
  ));
  // raw linear acceleration magnitude, m/s²
  contacts = signal([], ...ngDevMode ? [{ debugName: "contacts" }] : (
    /* istanbul ignore next */
    []
  ));
  syncStatus = signal("idle", ...ngDevMode ? [{ debugName: "syncStatus" }] : (
    /* istanbul ignore next */
    []
  ));
  uploadCount = signal(0, ...ngDevMode ? [{ debugName: "uploadCount" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  nextId = 1;
  // ── Dead-reckoning state ────────────────────────────────────────────────
  vx = 0;
  vy = 0;
  vz = 0;
  // velocity  (m/s)
  px = 0;
  py = 0;
  pz = 0;
  // position  (m)
  lastTs = 0;
  histMag = [];
  // ZUPT sliding window
  ZUPT_WIN = 20;
  // window size (samples)
  ZUPT_THR = 0.4;
  // m/s² — below → stationary → decay v
  // ── Contact-event state ────────────────────────────────────────────────
  awayStart = null;
  peakCm = 0;
  handler = (e) => this.handleMotion(e);
  get isClose() {
    return this.displacement() <= this.CONTACT_CM;
  }
  get totalContacts() {
    return this.contacts().length;
  }
  get avgDuration() {
    const c = this.contacts();
    return c.length ? c.reduce((s, e) => s + e.duration, 0) / c.length : 0;
  }
  get maxPeakCm() {
    const c = this.contacts();
    return c.length ? Math.max(...c.map((e) => e.peakCm)) : 0;
  }
  /** Displacement capped at 200 cm for sonar radius mapping */
  get dispForSonar() {
    return Math.min(this.displacement(), 200);
  }
  constructor(zone) {
    this.zone = zone;
  }
  startMonitoring() {
    this.error.set("");
    const DME = DeviceMotionEvent;
    if (typeof DME.requestPermission === "function") {
      DME.requestPermission().then((state) => {
        if (state === "granted") {
          this.attachListener();
        } else {
          this.zone.run(() => this.error.set("\u0414\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0441\u0435\u043D\u0441\u043E\u0440\u0430 \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u043E. \u0423\u0432\u0456\u043C\u043A\u043D\u0456\u0442\u044C \u0443 Safari \u2192 \u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u2192 \u0421\u0435\u043D\u0441\u043E\u0440\u0438 \u0440\u0443\u0445\u0443."));
        }
      }).catch((e) => {
        this.zone.run(() => this.error.set("\u041F\u043E\u043C\u0438\u043B\u043A\u0430: " + (e?.message ?? e)));
      });
    } else {
      this.attachListener();
    }
  }
  attachListener() {
    this.resetOrigin();
    window.addEventListener("devicemotion", this.handler, true);
    this.zone.run(() => this.monitoring.set(true));
  }
  stopMonitoring() {
    window.removeEventListener("devicemotion", this.handler, true);
    this.monitoring.set(false);
  }
  /** Reset the dead-reckoning origin — place phone near object, then press this */
  resetOrigin() {
    this.vx = this.vy = this.vz = 0;
    this.px = this.py = this.pz = 0;
    this.lastTs = 0;
    this.histMag = [];
    this.awayStart = null;
    this.peakCm = 0;
    this.zone.run(() => {
      this.displacement.set(0);
      this.speed.set(0);
    });
  }
  handleMotion(e) {
    const a = e.acceleration;
    const ax = a?.x ?? 0, ay = a?.y ?? 0, az = a?.z ?? 0;
    const mag = Math.sqrt(ax * ax + ay * ay + az * az);
    const now = e.timeStamp;
    const dt = this.lastTs > 0 ? Math.min((now - this.lastTs) / 1e3, 0.05) : 0;
    this.lastTs = now;
    this.histMag.push(mag);
    if (this.histMag.length > this.ZUPT_WIN)
      this.histMag.shift();
    const avgMag = this.histMag.reduce((s, v) => s + v, 0) / this.histMag.length;
    if (avgMag < this.ZUPT_THR) {
      this.vx *= 0.75;
      this.vy *= 0.75;
      this.vz *= 0.75;
    } else if (dt > 0) {
      this.vx += ax * dt;
      this.vy += ay * dt;
      this.vz += az * dt;
    }
    if (dt > 0) {
      this.px += this.vx * dt;
      this.py += this.vy * dt;
      this.pz += this.vz * dt;
    }
    const disp = Math.sqrt(this.px * this.px + this.py * this.py + this.pz * this.pz);
    const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy + this.vz * this.vz);
    this.zone.run(() => {
      this.displacement.set(Math.round(disp * 100));
      this.speed.set(Math.round(spd * 100));
      this.accelMag.set(+mag.toFixed(2));
      const dispCm = this.displacement();
      if (dispCm > this.CONTACT_CM) {
        if (dispCm > this.peakCm)
          this.peakCm = dispCm;
        if (this.awayStart === null)
          this.awayStart = Date.now();
      } else if (this.awayStart !== null) {
        const dur = Math.max(1, Math.round((Date.now() - this.awayStart) / 1e3));
        const ev = {
          id: this.nextId++,
          time: this.awayStart,
          peakCm: this.peakCm,
          duration: dur
        };
        this.contacts.update((c) => [ev, ...c]);
        this.awayStart = null;
        this.peakCm = 0;
        this.uploadEvent(ev);
      }
    });
  }
  async uploadEvent(ev) {
    this.syncStatus.set("syncing");
    try {
      const res = await fetch(this.ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "proximity_event", body: JSON.stringify(ev), userId: 1 })
      });
      this.syncStatus.set(res.ok ? "ok" : "error");
      if (res.ok)
        this.uploadCount.update((n) => n + 1);
    } catch {
      this.syncStatus.set("error");
    }
    setTimeout(() => this.zone.run(() => this.syncStatus.set("idle")), 2500);
  }
  formatTime(ts) {
    return new Date(ts).toLocaleTimeString("uk-UA");
  }
  clearHistory() {
    this.contacts.set([]);
    this.uploadCount.set(0);
  }
  ngOnDestroy() {
    this.stopMonitoring();
  }
  static \u0275fac = function Lab3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Lab3Component)(\u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Lab3Component, selectors: [["app-lab3"]], decls: 63, vars: 11, consts: [[1, "lab-page"], [1, "lab-header", "card"], [1, "lab-num"], [1, "tag-row", 2, "margin-top", "10px"], [1, "badge", "blue"], [1, "badge", "purple"], [1, "badge", "green"], [1, "card", "error-card"], [1, "card"], [1, "section-header"], [1, "badge", "yellow"], [1, "badge", "red"], [1, "hint"], [1, "btn-row"], [1, "btn", "primary"], [1, "btn", "secondary", 3, "click"], [1, "card", "distance-card", 3, "near"], [1, "data-grid"], [1, "data-cell"], [1, "label"], [1, "value"], [1, "btn", "primary", 3, "click"], [1, "btn", "danger", 3, "click"], [1, "card", "distance-card"], [1, "dist-label"], [1, "dist-value"], [1, "unit"], [1, "dist-status"], [1, "sonar-wrap"], ["viewBox", "0 0 200 200", 1, "sonar-svg"], ["cx", "100", "cy", "100", "r", "78", 1, "sonar-ring"], ["cx", "100", "cy", "100", "r", "58", 1, "sonar-ring"], ["cx", "100", "cy", "100", "r", "39", 1, "sonar-ring"], ["cx", "100", "cy", "100", "r", "20", 1, "sonar-ring", "sonar-threshold"], ["x", "100", "y", "24", "text-anchor", "middle", 1, "sonar-lbl"], ["x", "100", "y", "44", "text-anchor", "middle", 1, "sonar-lbl"], ["x", "100", "y", "63", "text-anchor", "middle", 1, "sonar-lbl"], ["x", "100", "y", "82", "text-anchor", "middle", 1, "sonar-lbl", "sonar-threshold-lbl"], ["cx", "100", "cy", "100", "r", "4", 1, "sonar-origin"], ["cx", "100", "r", "6", 1, "sonar-dot"], [1, "dist-bar-bg"], [1, "dist-bar"], [1, "log-table"], [1, "log-header"], [1, "log-row"]], template: function Lab3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430 3 \xB7 \u0412\u0430\u0440\u0456\u0430\u043D\u0442 13");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h2");
      \u0275\u0275text(5, "\u{1F4E1} \u041C\u043E\u043D\u0456\u0442\u043E\u0440 \u043D\u0430\u0431\u043B\u0438\u0436\u0435\u043D\u043D\u044F \u043E\u0431'\u0454\u043A\u0442\u0430");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p");
      \u0275\u0275text(7, "\u0412\u0456\u0434\u0441\u0442\u0435\u0436\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u043C\u0456\u0449\u0435\u043D\u043D\u044F \u0432\u0456\u0434 \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u043E\u0457 \u043F\u043E\u0437\u0438\u0446\u0456\u0457. \u0410\u043B\u0433\u043E\u0440\u0438\u0442\u043C: \u0434\u0432\u0456\u0439\u043D\u0435 \u0456\u043D\u0442\u0435\u0433\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043A\u0441\u0435\u043B\u0435\u0440\u043E\u043C\u0435\u0442\u0440\u0430 (\u043C\u0435\u0442\u043E\u0434 dead reckoning + ZUPT). \u0410\u0432\u0442\u043E-\u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u043F\u043E\u0434\u0456\u0439 \u043D\u0430 REST API.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 3)(9, "span", 4);
      \u0275\u0275text(10, "Dead Reckoning");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "span", 5);
      \u0275\u0275text(12, "ZUPT");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "span", 6);
      \u0275\u0275text(14, "REST API");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(15, Lab3Component_Conditional_15_Template, 2, 1, "div", 7);
      \u0275\u0275domElementStart(16, "div", 8)(17, "div", 9)(18, "h3");
      \u0275\u0275text(19, "\u041C\u043E\u043D\u0456\u0442\u043E\u0440\u0438\u043D\u0433");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(20, Lab3Component_Conditional_20_Template, 2, 0, "span", 10)(21, Lab3Component_Conditional_21_Template, 2, 0, "span", 6)(22, Lab3Component_Conditional_22_Template, 2, 0, "span", 11);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "p", 12);
      \u0275\u0275text(24, "\uFFFD \u041F\u043E\u043A\u043B\u0430\u0434\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0431\u0456\u043B\u044F \u043E\u0431'\u0454\u043A\u0442\u0430 \u2192 \xAB\u041F\u043E\u0447\u0430\u0442\u0438\xBB. \u0412\u0456\u0434\u0445\u043E\u0434\u044C \u2192 displacement \u0437\u0440\u043E\u0441\u0442\u0430\u0454. \u041F\u043E\u0432\u0435\u0440\u043D\u0456\u0441\u044C \u2014 \u0441\u043F\u0440\u0430\u0446\u044C\u043E\u0432\u0443\u0454 \xAB\u043A\u043E\u043D\u0442\u0430\u043A\u0442\xBB. \u2018\xAB\u0421\u043A\u0438\u043D\u0443\u0442\u0438\xBB \u2014 \u0440\u0435\u0441\u0435\u0442 \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u043E\u0457 \u0442\u043E\u0447\u043A\u0438. iOS 13+ \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "div", 13);
      \u0275\u0275conditionalCreate(26, Lab3Component_Conditional_26_Template, 2, 0, "button", 14)(27, Lab3Component_Conditional_27_Template, 4, 0);
      \u0275\u0275domElementStart(28, "button", 15);
      \u0275\u0275domListener("click", function Lab3Component_Template_button_click_28_listener() {
        return ctx.clearHistory();
      });
      \u0275\u0275text(29, "\u{1F5D1}");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(30, Lab3Component_Conditional_30_Template, 28, 11, "div", 16);
      \u0275\u0275domElementStart(31, "div", 17)(32, "div", 18)(33, "div", 19);
      \u0275\u0275text(34, "\u041F\u0435\u0440\u0435\u043C\u0456\u0449.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(35, "div", 20);
      \u0275\u0275text(36);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(37, "div", 18)(38, "div", 19);
      \u0275\u0275text(39, "\u0428\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(40, "div", 20);
      \u0275\u0275text(41);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(42, "div", 18)(43, "div", 19);
      \u0275\u0275text(44, "\u041F\u0440\u0438\u0441\u043A\u043E\u0440.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "div", 20);
      \u0275\u0275text(46);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(47, "div", 18)(48, "div", 19);
      \u0275\u0275text(49, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0456\u0432");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(50, "div", 20);
      \u0275\u0275text(51);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(52, "div", 18)(53, "div", 19);
      \u0275\u0275text(54, "\u041C\u0430\u043A\u0441. \u0432\u0456\u0434\u0434.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(55, "div", 20);
      \u0275\u0275text(56);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(57, "div", 18)(58, "div", 19);
      \u0275\u0275text(59, "\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(60, "div", 20);
      \u0275\u0275text(61);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(62, Lab3Component_Conditional_62_Template, 15, 0, "div", 8);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.error() ? 15 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.syncStatus() === "syncing" ? 20 : ctx.syncStatus() === "ok" ? 21 : ctx.syncStatus() === "error" ? 22 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(!ctx.monitoring() ? 26 : 27);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.monitoring() ? 30 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.displacement(), " \u0441\u043C");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.speed(), " \u0441\u043C/\u0441");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.accelMag(), " m/s\xB2");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.totalContacts);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.maxPeakCm, " \u0441\u043C");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.uploadCount());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.contacts().length ? 62 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n.btn-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--muted);\n  margin: 0 0 12px;\n  line-height: 1.5;\n}\n.error-card[_ngcontent-%COMP%] {\n  color: var(--red);\n  font-size: 0.85rem;\n  border-color: var(--red);\n}\n.distance-card[_ngcontent-%COMP%] {\n  text-align: center;\n  transition: border-color 0.3s;\n}\n.distance-card.near[_ngcontent-%COMP%] {\n  border-color: var(--red);\n  background: rgba(239, 68, 68, 0.05);\n}\n.dist-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 6px;\n}\n.dist-value[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n  line-height: 1;\n  margin-bottom: 8px;\n}\n.dist-value[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: var(--muted);\n}\n.dist-status[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.dist-bar-bg[_ngcontent-%COMP%] {\n  background: var(--border);\n  border-radius: 4px;\n  height: 6px;\n  overflow: hidden;\n}\n.dist-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--green),\n      var(--yellow),\n      var(--red));\n  transition: width 0.4s ease;\n}\n.log-table[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n}\n.log-header[_ngcontent-%COMP%], \n.log-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 28px 1fr 80px 80px;\n  gap: 8px;\n  padding: 5px 0;\n}\n.log-header[_ngcontent-%COMP%] {\n  color: var(--accent);\n  border-bottom: 1px solid var(--border);\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.log-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(51, 65, 85, 0.5);\n  color: var(--muted);\n}\n.log-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: var(--text);\n  font-weight: 600;\n}\n.sonar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 14px 0 8px;\n}\n.sonar-svg[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  overflow: visible;\n}\n.sonar-svg[_ngcontent-%COMP%]   .sonar-ring[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--border);\n  stroke-width: 1;\n}\n.sonar-svg[_ngcontent-%COMP%]   .sonar-threshold[_ngcontent-%COMP%] {\n  stroke: var(--yellow);\n  stroke-dasharray: 4 3;\n  stroke-width: 1.5;\n}\n.sonar-svg[_ngcontent-%COMP%]   .sonar-lbl[_ngcontent-%COMP%] {\n  fill: var(--muted);\n  font-size: 9px;\n}\n.sonar-svg[_ngcontent-%COMP%]   .sonar-threshold-lbl[_ngcontent-%COMP%] {\n  fill: var(--yellow);\n  font-weight: 600;\n}\n.sonar-svg[_ngcontent-%COMP%]   .sonar-origin[_ngcontent-%COMP%] {\n  fill: var(--accent);\n}\n.sonar-svg[_ngcontent-%COMP%]   .sonar-dot[_ngcontent-%COMP%] {\n  fill: var(--green);\n  transition: fill 0.3s;\n}\n.sonar-svg[_ngcontent-%COMP%]   .sonar-near[_ngcontent-%COMP%] {\n  fill: var(--red) !important;\n  animation: _ngcontent-%COMP%_sonar-blink 0.5s ease-in-out infinite;\n}\n.sonar-svg.near[_ngcontent-%COMP%]   .sonar-threshold[_ngcontent-%COMP%] {\n  stroke: var(--red);\n}\n@keyframes _ngcontent-%COMP%_sonar-blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.25;\n  }\n}\n/*# sourceMappingURL=lab3.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Lab3Component, [{
    type: Component,
    args: [{ selector: "app-lab3", imports: [CommonModule], template: `<div class="lab-page">\r
  <div class="lab-header card">\r
    <div class="lab-num">\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430 3 \xB7 \u0412\u0430\u0440\u0456\u0430\u043D\u0442 13</div>\r
    <h2>\u{1F4E1} \u041C\u043E\u043D\u0456\u0442\u043E\u0440 \u043D\u0430\u0431\u043B\u0438\u0436\u0435\u043D\u043D\u044F \u043E\u0431'\u0454\u043A\u0442\u0430</h2>\r
    <p>\u0412\u0456\u0434\u0441\u0442\u0435\u0436\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u043C\u0456\u0449\u0435\u043D\u043D\u044F \u0432\u0456\u0434 \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u043E\u0457 \u043F\u043E\u0437\u0438\u0446\u0456\u0457. \u0410\u043B\u0433\u043E\u0440\u0438\u0442\u043C: \u0434\u0432\u0456\u0439\u043D\u0435 \u0456\u043D\u0442\u0435\u0433\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043A\u0441\u0435\u043B\u0435\u0440\u043E\u043C\u0435\u0442\u0440\u0430 (\u043C\u0435\u0442\u043E\u0434 dead reckoning + ZUPT). \u0410\u0432\u0442\u043E-\u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u043F\u043E\u0434\u0456\u0439 \u043D\u0430 REST API.</p>\r
    <div class="tag-row" style="margin-top:10px">\r
      <span class="badge blue">Dead Reckoning</span>\r
      <span class="badge purple">ZUPT</span>\r
      <span class="badge green">REST API</span>\r
    </div>\r
  </div>\r
\r
  <!-- Error -->\r
  @if (error()) {\r
    <div class="card error-card">\u26A0 {{ error() }}</div>\r
  }\r
\r
  <!-- Control -->\r
  <div class="card">\r
    <div class="section-header">\r
      <h3>\u041C\u043E\u043D\u0456\u0442\u043E\u0440\u0438\u043D\u0433</h3>\r
      @if (syncStatus() === 'syncing') {\r
        <span class="badge yellow">\u2191 \u0412\u0456\u0434\u043F\u0440\u0430\u0432\u043A\u0430</span>\r
      } @else if (syncStatus() === 'ok') {\r
        <span class="badge green">\u2713 \u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E</span>\r
      } @else if (syncStatus() === 'error') {\r
        <span class="badge red">\u2717 \u041F\u043E\u043C\u0438\u043B\u043A\u0430</span>\r
      }\r
    </div>\r
    <p class="hint">\uFFFD \u041F\u043E\u043A\u043B\u0430\u0434\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0431\u0456\u043B\u044F \u043E\u0431'\u0454\u043A\u0442\u0430 \u2192 \xAB\u041F\u043E\u0447\u0430\u0442\u0438\xBB. \u0412\u0456\u0434\u0445\u043E\u0434\u044C \u2192 displacement \u0437\u0440\u043E\u0441\u0442\u0430\u0454. \u041F\u043E\u0432\u0435\u0440\u043D\u0456\u0441\u044C \u2014 \u0441\u043F\u0440\u0430\u0446\u044C\u043E\u0432\u0443\u0454 \xAB\u043A\u043E\u043D\u0442\u0430\u043A\u0442\xBB. \u2018\xAB\u0421\u043A\u0438\u043D\u0443\u0442\u0438\xBB \u2014 \u0440\u0435\u0441\u0435\u0442 \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u043E\u0457 \u0442\u043E\u0447\u043A\u0438. iOS 13+ \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E.</p>\r
    <div class="btn-row">\r
      @if (!monitoring()) {\r
        <button class="btn primary" (click)="startMonitoring()">\u25B6 \u041F\u043E\u0447\u0430\u0442\u0438</button>\r
      } @else {\r
        <button class="btn danger" (click)="stopMonitoring()">\u25A0 \u0417\u0443\u043F\u0438\u043D\u0438\u0442\u0438</button>\r
        <button class="btn secondary" (click)="resetOrigin()">\u27F3 \u0421\u043A\u0438\u043D\u0443\u0442\u0438</button>\r
      }\r
      <button class="btn secondary" (click)="clearHistory()">\u{1F5D1}</button>\r
    </div>\r
  </div>\r
\r
  @if (monitoring()) {\r
    <!-- Accel / proximity display -->\r
    <div class="card distance-card" [class.near]="isClose">\r
      <div class="dist-label">\u041F\u0435\u0440\u0435\u043C\u0456\u0449\u0435\u043D\u043D\u044F \u0432\u0456\u0434 \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u043E\u0457 \u0442\u043E\u0447\u043A\u0438</div>\r
      <div class="dist-value">{{ displacement() }}<span class="unit"> \u0441\u043C</span></div>\r
      <div class="dist-status">\r
        @if (isClose) {\r
          <span class="badge green">\u2713 \u041F\u043E\u0440\u044F\u0434 \u0437 \u043E\u0431'\u0454\u043A\u0442\u043E\u043C (\u2264 {{ CONTACT_CM }} \u0441\u043C)</span>\r
        } @else {\r
          <span class="badge yellow">\u2192 \u0412\u0456\u0434\u0434\u0430\u043B\u0435\u043D\u043D\u044F {{ displacement() }} \u0441\u043C</span>\r
        }\r
      </div>\r
\r
      <!-- Sonar visual -->\r
      <div class="sonar-wrap">\r
        <svg viewBox="0 0 200 200" class="sonar-svg" [class.near]="isClose">\r
          <circle cx="100" cy="100" r="78" class="sonar-ring" />\r
          <circle cx="100" cy="100" r="58" class="sonar-ring" />\r
          <circle cx="100" cy="100" r="39" class="sonar-ring" />\r
          <circle cx="100" cy="100" r="20" class="sonar-ring sonar-threshold" />\r
          <text x="100" y="24"  text-anchor="middle" class="sonar-lbl">200\u0441\u043C</text>\r
          <text x="100" y="44"  text-anchor="middle" class="sonar-lbl">150\u0441\u043C</text>\r
          <text x="100" y="63"  text-anchor="middle" class="sonar-lbl">100\u0441\u043C</text>\r
          <text x="100" y="82"  text-anchor="middle" class="sonar-lbl sonar-threshold-lbl">30\u0441\u043C \u25A3</text>\r
          <circle cx="100" cy="100" r="4" class="sonar-origin" />\r
          <circle cx="100" [attr.cy]="100 - (dispForSonar / 200 * 78)" r="6"\r
                  class="sonar-dot" [class.sonar-near]="isClose" />\r
        </svg>\r
      </div>\r
\r
      <div class="dist-bar-bg">\r
        <div class="dist-bar" [style.width.%]="dispForSonar / 200 * 100"></div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Stats -->\r
  <div class="data-grid">\r
    <div class="data-cell">\r
      <div class="label">\u041F\u0435\u0440\u0435\u043C\u0456\u0449.</div>\r
      <div class="value">{{ displacement() }} \u0441\u043C</div>\r
    </div>\r
    <div class="data-cell">\r
      <div class="label">\u0428\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C</div>\r
      <div class="value">{{ speed() }} \u0441\u043C/\u0441</div>\r
    </div>\r
    <div class="data-cell">\r
      <div class="label">\u041F\u0440\u0438\u0441\u043A\u043E\u0440.</div>\r
      <div class="value">{{ accelMag() }} m/s\xB2</div>\r
    </div>\r
    <div class="data-cell">\r
      <div class="label">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0456\u0432</div>\r
      <div class="value">{{ totalContacts }}</div>\r
    </div>\r
    <div class="data-cell">\r
      <div class="label">\u041C\u0430\u043A\u0441. \u0432\u0456\u0434\u0434.</div>\r
      <div class="value">{{ maxPeakCm }} \u0441\u043C</div>\r
    </div>\r
    <div class="data-cell">\r
      <div class="label">\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E</div>\r
      <div class="value">{{ uploadCount() }}</div>\r
    </div>\r
  </div>\r
\r
  <!-- Event log -->\r
  @if (contacts().length) {\r
    <div class="card">\r
      <h3>\u0416\u0443\u0440\u043D\u0430\u043B \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0456\u0432</h3>\r
      <div class="log-table">\r
        <div class="log-header">\r
          <span>#</span><span>\u0427\u0430\u0441</span><span>\u041C\u0430\u043A\u0441. \u0432\u0456\u0434\u0434.</span><span>\u0422\u0440\u0438\u0432</span>\r
        </div>\r
        @for (ev of contacts().slice(0, 8); track ev.id) {\r
          <div class="log-row">\r
            <span>{{ ev.id }}</span>\r
            <span>{{ formatTime(ev.time) }}</span>\r
            <span>{{ ev.peakCm }} \u0441\u043C</span>\r
            <span>{{ ev.duration }} \u0441</span>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
  }\r
</div>\r
\r
\r
`, styles: ["/* src/app/labs/lab3/lab3.component.scss */\n.btn-row {\n  display: flex;\n  gap: 8px;\n}\n.hint {\n  font-size: 0.78rem;\n  color: var(--muted);\n  margin: 0 0 12px;\n  line-height: 1.5;\n}\n.error-card {\n  color: var(--red);\n  font-size: 0.85rem;\n  border-color: var(--red);\n}\n.distance-card {\n  text-align: center;\n  transition: border-color 0.3s;\n}\n.distance-card.near {\n  border-color: var(--red);\n  background: rgba(239, 68, 68, 0.05);\n}\n.dist-label {\n  font-size: 0.7rem;\n  color: var(--muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 6px;\n}\n.dist-value {\n  font-size: 3rem;\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n  line-height: 1;\n  margin-bottom: 8px;\n}\n.dist-value .unit {\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: var(--muted);\n}\n.dist-status {\n  margin-bottom: 14px;\n}\n.dist-bar-bg {\n  background: var(--border);\n  border-radius: 4px;\n  height: 6px;\n  overflow: hidden;\n}\n.dist-bar {\n  height: 100%;\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--green),\n      var(--yellow),\n      var(--red));\n  transition: width 0.4s ease;\n}\n.log-table {\n  font-size: 0.78rem;\n}\n.log-header,\n.log-row {\n  display: grid;\n  grid-template-columns: 28px 1fr 80px 80px;\n  gap: 8px;\n  padding: 5px 0;\n}\n.log-header {\n  color: var(--accent);\n  border-bottom: 1px solid var(--border);\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.log-row {\n  border-bottom: 1px solid rgba(51, 65, 85, 0.5);\n  color: var(--muted);\n}\n.log-row span:first-child {\n  color: var(--text);\n  font-weight: 600;\n}\n.sonar-wrap {\n  display: flex;\n  justify-content: center;\n  margin: 14px 0 8px;\n}\n.sonar-svg {\n  width: 180px;\n  height: 180px;\n  overflow: visible;\n}\n.sonar-svg .sonar-ring {\n  fill: none;\n  stroke: var(--border);\n  stroke-width: 1;\n}\n.sonar-svg .sonar-threshold {\n  stroke: var(--yellow);\n  stroke-dasharray: 4 3;\n  stroke-width: 1.5;\n}\n.sonar-svg .sonar-lbl {\n  fill: var(--muted);\n  font-size: 9px;\n}\n.sonar-svg .sonar-threshold-lbl {\n  fill: var(--yellow);\n  font-weight: 600;\n}\n.sonar-svg .sonar-origin {\n  fill: var(--accent);\n}\n.sonar-svg .sonar-dot {\n  fill: var(--green);\n  transition: fill 0.3s;\n}\n.sonar-svg .sonar-near {\n  fill: var(--red) !important;\n  animation: sonar-blink 0.5s ease-in-out infinite;\n}\n.sonar-svg.near .sonar-threshold {\n  stroke: var(--red);\n}\n@keyframes sonar-blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.25;\n  }\n}\n/*# sourceMappingURL=lab3.component.css.map */\n"] }]
  }], () => [{ type: NgZone }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Lab3Component, { className: "Lab3Component", filePath: "src/app/labs/lab3/lab3.component.ts", lineNumber: 17 });
})();
export {
  Lab3Component
};
//# sourceMappingURL=chunk-4GSVTZWR.js.map
