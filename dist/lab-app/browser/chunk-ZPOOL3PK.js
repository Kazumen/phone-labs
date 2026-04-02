import {
  API_URL,
  CategoryScale,
  Chart,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  index,
  plugin_tooltip
} from "./chunk-G2MRKMGQ.js";
import {
  HttpClient
} from "./chunk-KAO7HPAD.js";
import {
  CommonModule,
  Component,
  ViewChild,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-XP2XXPPR.js";

// src/app/labs/lab4/lab4.component.ts
var _c0 = ["chartCanvas"];
var _forTrack0 = ($index, $item) => $item.name;
function Lab4Component_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8);
    \u0275\u0275text(1, "\u23F3 \u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u0437 \u0431\u0435\u043A\u0435\u043D\u0434\u043E\u043C\u2026");
    \u0275\u0275domElementEnd();
  }
}
function Lab4Component_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9);
    \u0275\u0275text(1, "\u2705 Backend: \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0456\u0437\u043E\u0432\u0430\u043D\u043E");
    \u0275\u0275domElementEnd();
  }
}
function Lab4Component_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10);
    \u0275\u0275text(1, "\u274C \u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437'\u0454\u0434\u043D\u0430\u043D\u043D\u044F \u0437 \u0431\u0435\u043A\u0435\u043D\u0434\u043E\u043C");
    \u0275\u0275domElementEnd();
  }
}
function Lab4Component_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30);
    \u0275\u0275domElement(1, "span", 31);
    \u0275\u0275domElementStart(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const z_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", z_r1.name === ctx_r1.currentZone().name);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", z_r1.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(z_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", z_r1.min, "\u2013", z_r1.max === 9007199254740991 ? "180+" : z_r1.max, " bpm ");
  }
}
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, index, plugin_tooltip);
var ZONES = [
  { name: "\u0412\u0456\u0434\u043F\u043E\u0447\u0438\u043D\u043E\u043A", min: 0, max: 60, color: "#64748b" },
  { name: "\u0410\u0435\u0440\u043E\u0431\u043D\u0430", min: 60, max: 100, color: "#22c55e" },
  { name: "\u041A\u0430\u0440\u0434\u0456\u043E", min: 100, max: 140, color: "#f59e0b" },
  { name: "\u0410\u043D\u0430\u0435\u0440\u043E\u0431\u043D\u0430", min: 140, max: 170, color: "#f97316" },
  { name: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430", min: 170, max: Infinity, color: "#ef4444" }
];
function getZone(bpm) {
  return ZONES.find((z) => bpm >= z.min && bpm < z.max);
}
var Lab4Component = class _Lab4Component {
  chartCanvas;
  http = inject(HttpClient);
  recording = signal(false, ...ngDevMode ? [{ debugName: "recording" }] : (
    /* istanbul ignore next */
    []
  ));
  bpm = signal(0, ...ngDevMode ? [{ debugName: "bpm" }] : (
    /* istanbul ignore next */
    []
  ));
  currentZone = signal(ZONES[0], ...ngDevMode ? [{ debugName: "currentZone" }] : (
    /* istanbul ignore next */
    []
  ));
  records = signal([], ...ngDevMode ? [{ debugName: "records" }] : (
    /* istanbul ignore next */
    []
  ));
  range = signal("hour", ...ngDevMode ? [{ debugName: "range" }] : (
    /* istanbul ignore next */
    []
  ));
  zones = ZONES;
  dbStatus = signal("idle", ...ngDevMode ? [{ debugName: "dbStatus" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Записи, що накопичились під час поточного сеансу (ще не збережені в БД) */
  sessionBuffer = [];
  chart;
  timer;
  phase = 0;
  baseHR = 72;
  get filtered() {
    const now = Date.now();
    const cutoffs = { hour: 36e5, day: 864e5, week: 6048e5 };
    return this.records().filter((r) => now - r.ts < cutoffs[this.range()]);
  }
  get avg() {
    const f = this.filtered;
    return f.length ? Math.round(f.reduce((s, r) => s + r.bpm, 0) / f.length) : 0;
  }
  get max() {
    const f = this.filtered;
    return f.length ? Math.max(...f.map((r) => r.bpm)) : 0;
  }
  get min() {
    const f = this.filtered;
    return f.length ? Math.min(...f.map((r) => r.bpm)) : 0;
  }
  get count() {
    return this.filtered.length;
  }
  ngAfterViewInit() {
    this.loadPulse();
    this.buildChart();
  }
  startStop() {
    if (this.recording()) {
      clearInterval(this.timer);
      this.recording.set(false);
      if (this.sessionBuffer.length) {
        this.savePulse(this.sessionBuffer);
        this.sessionBuffer = [];
      }
    } else {
      this.sessionBuffer = [];
      this.recording.set(true);
      this.timer = setInterval(() => this.tick(), 1e3);
    }
  }
  setRange(r) {
    this.range.set(r);
    this.updateChart();
  }
  clearHistory() {
    this.records.set([]);
    this.sessionBuffer = [];
    this.updateChart();
    this.deletePulse();
  }
  tick() {
    this.phase += 0.1;
    const variation = Math.sin(this.phase) * 25 + Math.sin(this.phase * 2.3) * 10;
    const noise = (Math.random() - 0.5) * 8;
    const bpm = Math.round(Math.max(55, Math.min(180, this.baseHR + variation + noise)));
    const zone = getZone(bpm);
    this.bpm.set(bpm);
    this.currentZone.set(zone);
    const rec = { ts: Date.now(), bpm, zone: zone.name };
    this.records.update((rs) => [...rs, rec]);
    this.sessionBuffer.push(rec);
    this.updateChart();
  }
  // ── Backend API calls ──────────────────────────────────────────────────────
  loadPulse() {
    this.dbStatus.set("loading");
    const weekAgo = Date.now() - 6048e5;
    this.http.get(`${API_URL}/pulse?since=${weekAgo}`).subscribe({
      next: (docs) => {
        this.records.set(docs ?? []);
        this.dbStatus.set("ok");
        this.updateChart();
      },
      error: () => this.dbStatus.set("error")
    });
  }
  savePulse(docs) {
    this.dbStatus.set("loading");
    this.http.post(`${API_URL}/pulse/bulk`, docs).subscribe({
      next: () => this.dbStatus.set("ok"),
      error: () => this.dbStatus.set("error")
    });
  }
  deletePulse() {
    this.http.delete(`${API_URL}/pulse`).subscribe();
  }
  // ── Chart ─────────────────────────────────────────────────────────────────
  buildChart() {
    const ctx = this.chartCanvas.nativeElement.getContext("2d");
    const data = this.filtered;
    this.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((r) => new Date(r.ts).toLocaleTimeString("uk-UA", { hour: "2-digit", minute: "2-digit", second: "2-digit" })),
        datasets: [{
          data: data.map((r) => r.bpm),
          borderColor: "#06b6d4",
          backgroundColor: "rgba(6,182,212,.1)",
          borderWidth: 2,
          fill: true,
          pointRadius: data.length > 50 ? 0 : 3,
          tension: 0.4
        }]
      },
      options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: true } },
        scales: {
          x: { ticks: { color: "#64748b", maxTicksLimit: 6, font: { size: 10 } }, grid: { color: "rgba(51,65,85,.5)" } },
          y: { min: 40, max: 200, ticks: { color: "#64748b", font: { size: 11 } }, grid: { color: "rgba(51,65,85,.5)" } }
        }
      }
    });
  }
  updateChart() {
    if (!this.chart)
      return;
    const data = this.filtered;
    this.chart.data.labels = data.map((r) => new Date(r.ts).toLocaleTimeString("uk-UA", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    this.chart.data.datasets[0].data = data.map((r) => r.bpm);
    this.chart.data.datasets[0].pointRadius = data.length > 80 ? 0 : 3;
    this.chart.update("none");
  }
  ngOnDestroy() {
    clearInterval(this.timer);
    this.chart?.destroy();
  }
  static \u0275fac = function Lab4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Lab4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Lab4Component, selectors: [["app-lab4"]], viewQuery: function Lab4Component_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartCanvas = _t.first);
    }
  }, decls: 71, vars: 28, consts: [["chartCanvas", ""], [1, "lab-page"], [1, "lab-header", "card"], [1, "lab-num"], [1, "tag-row", 2, "margin-top", "10px"], [1, "badge", "blue"], [1, "badge", "purple"], [1, "badge", "green"], [1, "db-info"], [1, "db-ok"], [1, "db-warn"], [1, "card", "bpm-card"], [1, "bpm-display"], [1, "bpm-unit"], [1, "zone-badge"], [1, "btn-row", 2, "justify-content", "center", "margin-top", "14px"], [1, "btn", 3, "click"], [1, "btn", "secondary", 3, "click"], [1, "card"], [1, "zones-list"], [1, "zone-row", 3, "active"], [1, "card", "chart-card"], [1, "section-header"], [1, "range-tabs"], [3, "click"], [1, "chart-wrap"], [1, "data-grid"], [1, "data-cell"], [1, "label"], [1, "value"], [1, "zone-row"], [1, "zone-dot"], [1, "zone-name"], [1, "zone-range"]], template: function Lab4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
      \u0275\u0275text(3, "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430 4 \xB7 \u0412\u0430\u0440\u0456\u0430\u043D\u0442 13");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h2");
      \u0275\u0275text(5, "\u2764\uFE0F \u041F\u0443\u043B\u044C\u0441\u043E\u043C\u0435\u0442\u0440 \u2014 \u0421\u0438\u043C\u0443\u043B\u044F\u0446\u0456\u044F + \u0413\u0440\u0430\u0444\u0456\u043A");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p");
      \u0275\u0275text(7, "\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0456\u044F \u0434\u0430\u043D\u0438\u0445 \u043F\u0443\u043B\u044C\u0441\u0443 (60\u2013180 bpm), \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0432 MongoDB Atlas, \u0433\u0440\u0430\u0444\u0456\u043A \u0437 \u0437\u043E\u043D\u0430\u043C\u0438 \u043D\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 4)(9, "span", 5);
      \u0275\u0275text(10, "Chart.js");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "span", 6);
      \u0275\u0275text(12, "MongoDB Atlas");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "span", 7);
      \u0275\u0275text(14, "\u0421\u0438\u043C\u0443\u043B\u044F\u0446\u0456\u044F \u043F\u0443\u043B\u044C\u0441\u0443");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(15, Lab4Component_Conditional_15_Template, 2, 0, "div", 8);
      \u0275\u0275conditionalCreate(16, Lab4Component_Conditional_16_Template, 2, 0, "div", 9);
      \u0275\u0275conditionalCreate(17, Lab4Component_Conditional_17_Template, 2, 0, "div", 10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "div", 11)(19, "div", 12);
      \u0275\u0275text(20);
      \u0275\u0275domElementStart(21, "span", 13);
      \u0275\u0275text(22, "BPM");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(23, "div", 14);
      \u0275\u0275text(24);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "div", 15)(26, "button", 16);
      \u0275\u0275domListener("click", function Lab4Component_Template_button_click_26_listener() {
        return ctx.startStop();
      });
      \u0275\u0275text(27);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "button", 17);
      \u0275\u0275domListener("click", function Lab4Component_Template_button_click_28_listener() {
        return ctx.clearHistory();
      });
      \u0275\u0275text(29, "\u{1F5D1}");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(30, "div", 18)(31, "h3");
      \u0275\u0275text(32, "\u0417\u043E\u043D\u0438 \u043D\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "div", 19);
      \u0275\u0275repeaterCreate(34, Lab4Component_For_35_Template, 6, 7, "div", 20, _forTrack0);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(36, "div", 21)(37, "div", 22)(38, "h3");
      \u0275\u0275text(39, "\u0413\u0440\u0430\u0444\u0456\u043A \u043F\u0443\u043B\u044C\u0441\u0443");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(40, "div", 23)(41, "button", 24);
      \u0275\u0275domListener("click", function Lab4Component_Template_button_click_41_listener() {
        return ctx.setRange("hour");
      });
      \u0275\u0275text(42, "1\u0433");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(43, "button", 24);
      \u0275\u0275domListener("click", function Lab4Component_Template_button_click_43_listener() {
        return ctx.setRange("day");
      });
      \u0275\u0275text(44, "1\u0434");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "button", 24);
      \u0275\u0275domListener("click", function Lab4Component_Template_button_click_45_listener() {
        return ctx.setRange("week");
      });
      \u0275\u0275text(46, "7\u0434");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(47, "div", 25);
      \u0275\u0275domElement(48, "canvas", null, 0);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(50, "div", 26)(51, "div", 27)(52, "div", 28);
      \u0275\u0275text(53, "\u0417\u0430\u043F\u0438\u0441\u0456\u0432");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(54, "div", 29);
      \u0275\u0275text(55);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(56, "div", 27)(57, "div", 28);
      \u0275\u0275text(58, "\u0421\u0435\u0440\u0435\u0434\u043D\u0456\u0439");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(59, "div", 29);
      \u0275\u0275text(60);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(61, "div", 27)(62, "div", 28);
      \u0275\u0275text(63, "\u041C\u0456\u043D.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(64, "div", 29);
      \u0275\u0275text(65);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(66, "div", 27)(67, "div", 28);
      \u0275\u0275text(68, "\u041C\u0430\u043A\u0441.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(69, "div", 29);
      \u0275\u0275text(70);
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.dbStatus() === "loading" ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dbStatus() === "ok" ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dbStatus() === "error" ? 17 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("color", ctx.currentZone().color)("animation-duration", ctx.bpm() ? 6e4 / ctx.bpm() : 1e3, "ms");
      \u0275\u0275classProp("beating", ctx.recording() && ctx.bpm() > 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.bpm() || "- -", " ");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("background", ctx.currentZone().color + "22")("color", ctx.currentZone().color);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.currentZone().name, " ");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.recording() ? "danger" : "primary");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.recording() ? "\u25A0 \u0417\u0443\u043F\u0438\u043D\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441" : "\u25B6 \u041F\u043E\u0447\u0430\u0442\u0438 \u0437\u0430\u043F\u0438\u0441", " ");
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.zones);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", ctx.range() === "hour");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.range() === "day");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.range() === "week");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.count);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.avg, " bpm");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.min, " bpm");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.max, " bpm");
    }
  }, dependencies: [CommonModule], styles: ["\n.bpm-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.bpm-display[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n  line-height: 1;\n  transition: color 0.3s;\n}\n.bpm-display[_ngcontent-%COMP%]   .bpm-unit[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: var(--muted);\n  margin-left: 4px;\n}\n.bpm-display.beating[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_heartbeat linear infinite;\n}\n@keyframes _ngcontent-%COMP%_heartbeat {\n  0% {\n    transform: scale(1);\n  }\n  10% {\n    transform: scale(1.08);\n  }\n  20% {\n    transform: scale(1);\n  }\n  30% {\n    transform: scale(1.04);\n  }\n  50% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.zone-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 14px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  margin: 10px auto 0;\n  transition: background 0.3s, color 0.3s;\n}\n.zones-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.zone-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 10px;\n  border-radius: 8px;\n  opacity: 0.5;\n  transition: opacity 0.2s;\n}\n.zone-row.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  background: var(--surface2);\n}\n.zone-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.zone-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n.zone-range[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--muted);\n  font-variant-numeric: tabular-nums;\n}\n.chart-wrap[_ngcontent-%COMP%] {\n  height: 180px;\n  position: relative;\n}\n.range-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.range-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 7px;\n  border: 1px solid var(--border);\n  background: transparent;\n  color: var(--muted);\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.range-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: #0f172a;\n  border-color: var(--accent);\n  font-weight: 700;\n}\n.btn-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.db-warn[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 6px 10px;\n  border-radius: 8px;\n  background: rgba(239, 68, 68, 0.1);\n  color: #f87171;\n  font-size: 0.78rem;\n}\n.db-info[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 6px 10px;\n  border-radius: 8px;\n  background: rgba(234, 179, 8, 0.1);\n  color: #fbbf24;\n  font-size: 0.78rem;\n}\n.db-ok[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 6px 10px;\n  border-radius: 8px;\n  background: rgba(34, 197, 94, 0.1);\n  color: #4ade80;\n  font-size: 0.78rem;\n}\n/*# sourceMappingURL=lab4.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Lab4Component, [{
    type: Component,
    args: [{ selector: "app-lab4", imports: [CommonModule], template: `<div class="lab-page">\r
  <div class="lab-header card">\r
    <div class="lab-num">\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430 4 \xB7 \u0412\u0430\u0440\u0456\u0430\u043D\u0442 13</div>\r
    <h2>\u2764\uFE0F \u041F\u0443\u043B\u044C\u0441\u043E\u043C\u0435\u0442\u0440 \u2014 \u0421\u0438\u043C\u0443\u043B\u044F\u0446\u0456\u044F + \u0413\u0440\u0430\u0444\u0456\u043A</h2>\r
    <p>\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0456\u044F \u0434\u0430\u043D\u0438\u0445 \u043F\u0443\u043B\u044C\u0441\u0443 (60\u2013180 bpm), \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0432 MongoDB Atlas, \u0433\u0440\u0430\u0444\u0456\u043A \u0437 \u0437\u043E\u043D\u0430\u043C\u0438 \u043D\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F.</p>\r
    <div class="tag-row" style="margin-top:10px">\r
      <span class="badge blue">Chart.js</span>\r
      <span class="badge purple">MongoDB Atlas</span>\r
      <span class="badge green">\u0421\u0438\u043C\u0443\u043B\u044F\u0446\u0456\u044F \u043F\u0443\u043B\u044C\u0441\u0443</span>\r
    </div>\r
    <!-- DB status indicator -->\r
    @if (dbStatus() === 'loading') {\r
      <div class="db-info">\u23F3 \u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u0437 \u0431\u0435\u043A\u0435\u043D\u0434\u043E\u043C\u2026</div>\r
    }\r
    @if (dbStatus() === 'ok') {\r
      <div class="db-ok">\u2705 Backend: \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0456\u0437\u043E\u0432\u0430\u043D\u043E</div>\r
    }\r
    @if (dbStatus() === 'error') {\r
      <div class="db-warn">\u274C \u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437'\u0454\u0434\u043D\u0430\u043D\u043D\u044F \u0437 \u0431\u0435\u043A\u0435\u043D\u0434\u043E\u043C</div>\r
    }\r
  </div>\r
\r
  <!-- BPM + Zone -->\r
  <div class="card bpm-card">\r
    <div class="bpm-display"\r
         [style.color]="currentZone().color"\r
         [style.animation-duration.ms]="bpm() ? 60000 / bpm() : 1000"\r
         [class.beating]="recording() && bpm() > 0">\r
      {{ bpm() || '- -' }}\r
      <span class="bpm-unit">BPM</span>\r
    </div>\r
    <div class="zone-badge" [style.background]="currentZone().color + '22'" [style.color]="currentZone().color">\r
      {{ currentZone().name }}\r
    </div>\r
    <div class="btn-row" style="justify-content: center; margin-top: 14px;">\r
      <button class="btn" [class]="recording() ? 'danger' : 'primary'" (click)="startStop()">\r
        {{ recording() ? '\u25A0 \u0417\u0443\u043F\u0438\u043D\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441' : '\u25B6 \u041F\u043E\u0447\u0430\u0442\u0438 \u0437\u0430\u043F\u0438\u0441' }}\r
      </button>\r
      <button class="btn secondary" (click)="clearHistory()">\u{1F5D1}</button>\r
    </div>\r
  </div>\r
\r
  <!-- Zones legend -->\r
  <div class="card">\r
    <h3>\u0417\u043E\u043D\u0438 \u043D\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F</h3>\r
    <div class="zones-list">\r
      @for (z of zones; track z.name) {\r
        <div class="zone-row" [class.active]="z.name === currentZone().name">\r
          <span class="zone-dot" [style.background]="z.color"></span>\r
          <span class="zone-name">{{ z.name }}</span>\r
          <span class="zone-range">\r
            {{ z.min }}\u2013{{ z.max === 9007199254740991 ? '180+' : z.max }} bpm\r
          </span>\r
        </div>\r
      }\r
    </div>\r
  </div>\r
\r
  <!-- Chart + timerange -->\r
  <div class="card chart-card">\r
    <div class="section-header">\r
      <h3>\u0413\u0440\u0430\u0444\u0456\u043A \u043F\u0443\u043B\u044C\u0441\u0443</h3>\r
      <div class="range-tabs">\r
          <button [class.active]="range() === 'hour'" (click)="setRange('hour')">1\u0433</button>\r
        <button [class.active]="range() === 'day'"  (click)="setRange('day')">1\u0434</button>\r
        <button [class.active]="range() === 'week'" (click)="setRange('week')">7\u0434</button>\r
      </div>\r
    </div>\r
    <div class="chart-wrap">\r
      <canvas #chartCanvas></canvas>\r
    </div>\r
  </div>\r
\r
  <!-- Stats -->\r
  <div class="data-grid">\r
    <div class="data-cell">\r
      <div class="label">\u0417\u0430\u043F\u0438\u0441\u0456\u0432</div>\r
      <div class="value">{{ count }}</div>\r
    </div>\r
    <div class="data-cell">\r
      <div class="label">\u0421\u0435\u0440\u0435\u0434\u043D\u0456\u0439</div>\r
      <div class="value">{{ avg }} bpm</div>\r
    </div>\r
    <div class="data-cell">\r
      <div class="label">\u041C\u0456\u043D.</div>\r
      <div class="value">{{ min }} bpm</div>\r
    </div>\r
    <div class="data-cell">\r
      <div class="label">\u041C\u0430\u043A\u0441.</div>\r
      <div class="value">{{ max }} bpm</div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/labs/lab4/lab4.component.scss */\n.bpm-card {\n  text-align: center;\n}\n.bpm-display {\n  font-size: 4rem;\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n  line-height: 1;\n  transition: color 0.3s;\n}\n.bpm-display .bpm-unit {\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: var(--muted);\n  margin-left: 4px;\n}\n.bpm-display.beating {\n  animation: heartbeat linear infinite;\n}\n@keyframes heartbeat {\n  0% {\n    transform: scale(1);\n  }\n  10% {\n    transform: scale(1.08);\n  }\n  20% {\n    transform: scale(1);\n  }\n  30% {\n    transform: scale(1.04);\n  }\n  50% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.zone-badge {\n  display: inline-block;\n  padding: 3px 14px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  margin: 10px auto 0;\n  transition: background 0.3s, color 0.3s;\n}\n.zones-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.zone-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 10px;\n  border-radius: 8px;\n  opacity: 0.5;\n  transition: opacity 0.2s;\n}\n.zone-row.active {\n  opacity: 1;\n  background: var(--surface2);\n}\n.zone-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.zone-name {\n  flex: 1;\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n.zone-range {\n  font-size: 0.72rem;\n  color: var(--muted);\n  font-variant-numeric: tabular-nums;\n}\n.chart-wrap {\n  height: 180px;\n  position: relative;\n}\n.range-tabs {\n  display: flex;\n  gap: 4px;\n}\n.range-tabs button {\n  padding: 4px 10px;\n  border-radius: 7px;\n  border: 1px solid var(--border);\n  background: transparent;\n  color: var(--muted);\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.range-tabs button.active {\n  background: var(--accent);\n  color: #0f172a;\n  border-color: var(--accent);\n  font-weight: 700;\n}\n.btn-row {\n  display: flex;\n  gap: 8px;\n}\n.db-warn {\n  margin-top: 8px;\n  padding: 6px 10px;\n  border-radius: 8px;\n  background: rgba(239, 68, 68, 0.1);\n  color: #f87171;\n  font-size: 0.78rem;\n}\n.db-info {\n  margin-top: 8px;\n  padding: 6px 10px;\n  border-radius: 8px;\n  background: rgba(234, 179, 8, 0.1);\n  color: #fbbf24;\n  font-size: 0.78rem;\n}\n.db-ok {\n  margin-top: 8px;\n  padding: 6px 10px;\n  border-radius: 8px;\n  background: rgba(34, 197, 94, 0.1);\n  color: #4ade80;\n  font-size: 0.78rem;\n}\n/*# sourceMappingURL=lab4.component.css.map */\n"] }]
  }], null, { chartCanvas: [{
    type: ViewChild,
    args: ["chartCanvas"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Lab4Component, { className: "Lab4Component", filePath: "src/app/labs/lab4/lab4.component.ts", lineNumber: 29 });
})();
export {
  Lab4Component
};
//# sourceMappingURL=chunk-ZPOOL3PK.js.map
