import {
  CommonModule,
  Component,
  DecimalPipe,
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
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XP2XXPPR.js";

// src/app/labs/lab2/lab2.component.ts
var _forTrack0 = ($index, $item) => $item.timestamp;
function Lab2Component_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 14);
    \u0275\u0275domListener("click", function Lab2Component_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.connect());
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("disabled", ctx_r1.connecting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.connecting() ? "\u23F3 \u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F..." : "\u{1F535} \u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0438\u0441\u044C", " ");
  }
}
function Lab2Component_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 15);
    \u0275\u0275domListener("click", function Lab2Component_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.disconnect());
    });
    \u0275\u0275text(1, "\u2715 \u0412\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0438");
    \u0275\u0275domElementEnd();
  }
}
function Lab2Component_Conditional_26_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 21);
    \u0275\u0275domElement(1, "div", 25);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", m_r4.current / 5 * 100, "%");
    \u0275\u0275classProp("red", m_r4.current >= 3)("yellow", m_r4.current >= 1 && m_r4.current < 3);
  }
}
function Lab2Component_Conditional_26_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.csvSnippet(m_r5));
  }
}
function Lab2Component_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 16)(1, "div", 17)(2, "div", 18);
    \u0275\u0275text(3, "\u0421\u0442\u0440\u0443\u043C");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 17)(8, "div", 18);
    \u0275\u0275text(9, "\u041F\u043E\u0442\u0443\u0436\u043D\u0456\u0441\u0442\u044C");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "div", 19);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "div", 17)(14, "div", 18);
    \u0275\u0275text(15, "\u0421\u0440. (10)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "div", 19);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(19, "div", 17)(20, "div", 18);
    \u0275\u0275text(21, "\u041C\u0430\u043A\u0441.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "div", 19);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(25, "div", 17)(26, "div", 18);
    \u0275\u0275text(27, "\u041C\u0456\u043D.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(28, "div", 19);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(31, "div", 17)(32, "div", 18);
    \u0275\u0275text(33, "\u0422\u0440\u0435\u043D\u0434");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(34, "div", 19);
    \u0275\u0275text(35);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(36, "div", 7)(37, "h3");
    \u0275\u0275text(38, "\u0413\u0440\u0430\u0444\u0456\u043A \u0441\u0442\u0440\u0443\u043C\u0443 (\u043E\u0441\u0442\u0430\u043D\u043D\u0456 20 \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u044C)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(39, "div", 20);
    \u0275\u0275repeaterCreate(40, Lab2Component_Conditional_26_For_41_Template, 2, 6, "div", 21, _forTrack0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(42, "div", 22)(43, "span");
    \u0275\u0275text(44, "0A");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(45, "span");
    \u0275\u0275text(46, "2.5A");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(47, "span");
    \u0275\u0275text(48, "5A");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(49, "div", 7)(50, "h3");
    \u0275\u0275text(51, "CSV \u041B\u043E\u0433 (\u043E\u0441\u0442\u0430\u043D\u043D\u0456 5)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(52, "div", 23);
    \u0275\u0275text(53, "timestamp,current,power");
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(54, Lab2Component_Conditional_26_For_55_Template, 2, 1, "div", 24, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.currentBadge());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 10, ctx_r1.current(), "1.3-3"), " A");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 13, ctx_r1.power(), "1.1-1"), " W");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 16, ctx_r1.avgCurrent, "1.2-2"), " A");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(24, 19, ctx_r1.maxCurrent, "1.2-2"), " A");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(30, 22, ctx_r1.minCurrent, "1.2-2"), " A");
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r1.trendClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.trend);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.history().slice(-20));
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.history().slice(-5).reverse());
  }
}
var Lab2Component = class _Lab2Component {
  VOLTAGE = 220;
  INTERVAL = 2e3;
  connected = signal(false, ...ngDevMode ? [{ debugName: "connected" }] : (
    /* istanbul ignore next */
    []
  ));
  connecting = signal(false, ...ngDevMode ? [{ debugName: "connecting" }] : (
    /* istanbul ignore next */
    []
  ));
  history = signal([], ...ngDevMode ? [{ debugName: "history" }] : (
    /* istanbul ignore next */
    []
  ));
  current = signal(0, ...ngDevMode ? [{ debugName: "current" }] : (
    /* istanbul ignore next */
    []
  ));
  power = signal(0, ...ngDevMode ? [{ debugName: "power" }] : (
    /* istanbul ignore next */
    []
  ));
  status = signal("\u0412\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E", ...ngDevMode ? [{ debugName: "status" }] : (
    /* istanbul ignore next */
    []
  ));
  timer;
  phase = 0;
  get avgCurrent() {
    const h = this.history();
    if (!h.length)
      return 0;
    return h.slice(-10).reduce((s, m) => s + m.current, 0) / Math.min(h.length, 10);
  }
  get maxCurrent() {
    const h = this.history();
    return h.length ? Math.max(...h.map((m) => m.current)) : 0;
  }
  get minCurrent() {
    const h = this.history();
    return h.length ? Math.min(...h.map((m) => m.current)) : 0;
  }
  get trend() {
    const h = this.history();
    if (h.length < 4)
      return "\u2192";
    const last = h.slice(-4);
    const diff = last[last.length - 1].current - last[0].current;
    if (diff > 0.15)
      return "\u2197";
    if (diff < -0.15)
      return "\u2198";
    return "\u2192";
  }
  get trendClass() {
    return { "\u2197": "red", "\u2198": "blue", "\u2192": "yellow" }[this.trend];
  }
  async connect() {
    this.connecting.set(true);
    this.status.set("\u041F\u043E\u0448\u0443\u043A ESP32-ACS712...");
    await new Promise((r) => setTimeout(r, 1500));
    this.status.set("\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u0434\u043E 'ESP32_CURRENT_SENSOR'...");
    await new Promise((r) => setTimeout(r, 1e3));
    this.connected.set(true);
    this.connecting.set(false);
    this.status.set("\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u0434\u043E 'ESP32_CURRENT_SENSOR'");
    this.startStream();
  }
  disconnect() {
    clearInterval(this.timer);
    this.connected.set(false);
    this.status.set("\u0412\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E");
    this.history.set([]);
    this.phase = 0;
  }
  startStream() {
    this.timer = setInterval(() => {
      this.phase += 0.15;
      const base = 2.5 + Math.sin(this.phase) * 1.8;
      const noise = (Math.random() - 0.5) * 0.3;
      const c = Math.max(0, Math.min(5, base + noise));
      const p = +(c * this.VOLTAGE).toFixed(1);
      this.current.set(+c.toFixed(3));
      this.power.set(p);
      this.history.update((h) => [
        ...h.slice(-49),
        { timestamp: Date.now(), current: +c.toFixed(3), power: p }
      ]);
    }, this.INTERVAL);
  }
  csvSnippet(m) {
    return `${m.timestamp},${m.current.toFixed(3)},${m.power.toFixed(1)}`;
  }
  formatTime(ts) {
    return new Date(ts).toLocaleTimeString("uk-UA");
  }
  currentBadge() {
    const c = this.current();
    if (c < 1)
      return "blue";
    if (c < 3)
      return "yellow";
    return "red";
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
  static \u0275fac = function Lab2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Lab2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Lab2Component, selectors: [["app-lab2"]], decls: 27, vars: 6, consts: [[1, "lab-page"], [1, "lab-header", "card"], [1, "lab-num"], [1, "tag-row", 2, "margin-top", "10px"], [1, "badge", "blue"], [1, "badge", "purple"], [1, "badge", "yellow"], [1, "card"], [1, "section-header"], [1, "badge"], [1, "ble-status"], [1, "btn-row"], [1, "btn", "primary", 3, "disabled"], [1, "btn", "danger"], [1, "btn", "primary", 3, "click", "disabled"], [1, "btn", "danger", 3, "click"], [1, "data-grid"], [1, "data-cell"], [1, "label"], [1, "value"], [1, "bar-chart"], [1, "bar-wrap"], [1, "bar-labels"], [1, "csv-header"], [1, "csv-row"], [1, "bar"]], template: function Lab2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430 2 \xB7 \u0412\u0430\u0440\u0456\u0430\u043D\u0442 13");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h2");
      \u0275\u0275text(5, "\u{1F50C} \u0414\u0430\u0442\u0447\u0438\u043A \u0441\u0442\u0440\u0443\u043C\u0443 ACS712 via BLE");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p");
      \u0275\u0275text(7, "\u041E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445 \u0437 ESP32 \u043F\u043E Bluetooth. \u0421\u0435\u043D\u0441\u043E\u0440 ACS712, \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D 0\u20135A, \u0444\u043E\u0440\u043C\u0430\u0442 CSV, \u0456\u043D\u0442\u0435\u0440\u0432\u0430\u043B 2 \u0441.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 3)(9, "span", 4);
      \u0275\u0275text(10, "Bluetooth BLE");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "span", 5);
      \u0275\u0275text(12, "ESP32");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "span", 6);
      \u0275\u0275text(14, "ACS712 \xB7 0\u20135A");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(15, "div", 7)(16, "div", 8)(17, "h3");
      \u0275\u0275text(18, "BLE \u0437'\u0454\u0434\u043D\u0430\u043D\u043D\u044F");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "span", 9);
      \u0275\u0275text(20);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "p", 10);
      \u0275\u0275text(22);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "div", 11);
      \u0275\u0275conditionalCreate(24, Lab2Component_Conditional_24_Template, 2, 2, "button", 12)(25, Lab2Component_Conditional_25_Template, 2, 0, "button", 13);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(26, Lab2Component_Conditional_26_Template, 56, 25);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275classMap(ctx.connected() ? "green" : "red");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.connected() ? "\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E" : "\u0412\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.connected() ? 24 : 25);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.connected() ? 26 : -1);
    }
  }, dependencies: [CommonModule, DecimalPipe], styles: ['\n.ble-status[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  margin: 6px 0 12px;\n}\n.btn-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 3px;\n  height: 80px;\n  margin-bottom: 4px;\n}\n.bar-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n  height: 100%;\n}\n.bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 3px 3px 0 0;\n  background: var(--accent);\n  transition: height 0.3s ease;\n  min-height: 2px;\n}\n.bar.yellow[_ngcontent-%COMP%] {\n  background: var(--yellow);\n}\n.bar.red[_ngcontent-%COMP%] {\n  background: var(--red);\n}\n.bar-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.65rem;\n  color: var(--muted);\n}\n.csv-header[_ngcontent-%COMP%], \n.csv-row[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 0.72rem;\n  padding: 3px 0;\n}\n.csv-header[_ngcontent-%COMP%] {\n  color: var(--accent);\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 4px;\n}\n.csv-row[_ngcontent-%COMP%] {\n  color: var(--text);\n}\n.value.blue[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.value.yellow[_ngcontent-%COMP%] {\n  color: var(--yellow);\n}\n.value.red[_ngcontent-%COMP%] {\n  color: var(--red);\n}\n/*# sourceMappingURL=lab2.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Lab2Component, [{
    type: Component,
    args: [{ selector: "app-lab2", imports: [CommonModule], template: `<div class="lab-page">\r
  <div class="lab-header card">\r
    <div class="lab-num">\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430 2 \xB7 \u0412\u0430\u0440\u0456\u0430\u043D\u0442 13</div>\r
    <h2>\u{1F50C} \u0414\u0430\u0442\u0447\u0438\u043A \u0441\u0442\u0440\u0443\u043C\u0443 ACS712 via BLE</h2>\r
    <p>\u041E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445 \u0437 ESP32 \u043F\u043E Bluetooth. \u0421\u0435\u043D\u0441\u043E\u0440 ACS712, \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D 0\u20135A, \u0444\u043E\u0440\u043C\u0430\u0442 CSV, \u0456\u043D\u0442\u0435\u0440\u0432\u0430\u043B 2 \u0441.</p>\r
    <div class="tag-row" style="margin-top:10px">\r
      <span class="badge blue">Bluetooth BLE</span>\r
      <span class="badge purple">ESP32</span>\r
      <span class="badge yellow">ACS712 \xB7 0\u20135A</span>\r
    </div>\r
  </div>\r
\r
  <!-- Connection -->\r
  <div class="card">\r
    <div class="section-header">\r
      <h3>BLE \u0437'\u0454\u0434\u043D\u0430\u043D\u043D\u044F</h3>\r
      <span class="badge" [class]="connected() ? 'green' : 'red'">\r
        {{ connected() ? '\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E' : '\u0412\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E' }}\r
      </span>\r
    </div>\r
    <p class="ble-status">{{ status() }}</p>\r
    <div class="btn-row">\r
      @if (!connected()) {\r
        <button class="btn primary" (click)="connect()" [disabled]="connecting()">\r
          {{ connecting() ? '\u23F3 \u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F...' : '\u{1F535} \u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0438\u0441\u044C' }}\r
        </button>\r
      } @else {\r
        <button class="btn danger" (click)="disconnect()">\u2715 \u0412\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0438</button>\r
      }\r
    </div>\r
  </div>\r
\r
  @if (connected()) {\r
    <div class="data-grid">\r
      <div class="data-cell">\r
        <div class="label">\u0421\u0442\u0440\u0443\u043C</div>\r
        <div class="value" [class]="currentBadge()">{{ current() | number:'1.3-3' }} A</div>\r
      </div>\r
      <div class="data-cell">\r
        <div class="label">\u041F\u043E\u0442\u0443\u0436\u043D\u0456\u0441\u0442\u044C</div>\r
        <div class="value">{{ power() | number:'1.1-1' }} W</div>\r
      </div>\r
      <div class="data-cell">\r
        <div class="label">\u0421\u0440. (10)</div>\r
        <div class="value">{{ avgCurrent | number:'1.2-2' }} A</div>\r
      </div>\r
      <div class="data-cell">\r
        <div class="label">\u041C\u0430\u043A\u0441.</div>\r
        <div class="value">{{ maxCurrent | number:'1.2-2' }} A</div>\r
      </div>\r
      <div class="data-cell">\r
        <div class="label">\u041C\u0456\u043D.</div>\r
        <div class="value">{{ minCurrent | number:'1.2-2' }} A</div>\r
      </div>\r
      <div class="data-cell">\r
        <div class="label">\u0422\u0440\u0435\u043D\u0434</div>\r
        <div class="value" [class]="trendClass">{{ trend }}</div>\r
      </div>\r
    </div>\r
\r
    <!-- Mini bar chart -->\r
    <div class="card">\r
      <h3>\u0413\u0440\u0430\u0444\u0456\u043A \u0441\u0442\u0440\u0443\u043C\u0443 (\u043E\u0441\u0442\u0430\u043D\u043D\u0456 20 \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u044C)</h3>\r
      <div class="bar-chart">\r
        @for (m of history().slice(-20); track m.timestamp) {\r
          <div class="bar-wrap">\r
            <div class="bar" [style.height.%]="(m.current / 5) * 100"\r
              [class.red]="m.current >= 3" [class.yellow]="m.current >= 1 && m.current < 3">\r
            </div>\r
          </div>\r
        }\r
      </div>\r
      <div class="bar-labels">\r
        <span>0A</span><span>2.5A</span><span>5A</span>\r
      </div>\r
    </div>\r
\r
    <!-- CSV log -->\r
    <div class="card">\r
      <h3>CSV \u041B\u043E\u0433 (\u043E\u0441\u0442\u0430\u043D\u043D\u0456 5)</h3>\r
      <div class="csv-header">timestamp,current,power</div>\r
      @for (m of history().slice(-5).reverse(); track m.timestamp) {\r
        <div class="csv-row">{{ csvSnippet(m) }}</div>\r
      }\r
    </div>\r
  }\r
</div>\r
`, styles: ['/* src/app/labs/lab2/lab2.component.scss */\n.ble-status {\n  font-size: 0.82rem;\n  margin: 6px 0 12px;\n}\n.btn-row {\n  display: flex;\n  gap: 8px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 3px;\n  height: 80px;\n  margin-bottom: 4px;\n}\n.bar-wrap {\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n  height: 100%;\n}\n.bar {\n  width: 100%;\n  border-radius: 3px 3px 0 0;\n  background: var(--accent);\n  transition: height 0.3s ease;\n  min-height: 2px;\n}\n.bar.yellow {\n  background: var(--yellow);\n}\n.bar.red {\n  background: var(--red);\n}\n.bar-labels {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.65rem;\n  color: var(--muted);\n}\n.csv-header,\n.csv-row {\n  font-family: "Courier New", monospace;\n  font-size: 0.72rem;\n  padding: 3px 0;\n}\n.csv-header {\n  color: var(--accent);\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 4px;\n}\n.csv-row {\n  color: var(--text);\n}\n.value.blue {\n  color: var(--accent);\n}\n.value.yellow {\n  color: var(--yellow);\n}\n.value.red {\n  color: var(--red);\n}\n/*# sourceMappingURL=lab2.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Lab2Component, { className: "Lab2Component", filePath: "src/app/labs/lab2/lab2.component.ts", lineNumber: 16 });
})();
export {
  Lab2Component
};
//# sourceMappingURL=chunk-2TJHQAW3.js.map
