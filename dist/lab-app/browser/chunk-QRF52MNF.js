import {
  CommonModule,
  Component,
  DecimalPipe,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XP2XXPPR.js";

// src/app/labs/lab1/lab1.component.ts
function Lab1Component_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function Lab1Component_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, Lab1Component_Conditional_15_Conditional_1_Template, 2, 1, "p", 8);
    \u0275\u0275domElementStart(2, "button", 9);
    \u0275\u0275domListener("click", function Lab1Component_Conditional_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.start());
    });
    \u0275\u0275text(3, "\u25B6 \u0420\u043E\u0437\u043F\u043E\u0447\u0430\u0442\u0438");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 10);
    \u0275\u0275text(5, "\u041F\u043E\u0442\u0440\u0456\u0431\u0435\u043D \u0434\u043E\u0437\u0432\u0456\u043B \u043D\u0430 \u0434\u0430\u0442\u0447\u0438\u043A\u0438 \u0440\u0443\u0445\u0443 (Safari iOS 13+)");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.error() ? 1 : -1);
  }
}
function Lab1Component_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "h3");
    \u0275\u0275text(2, "\u0406\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u043D\u0430\u0445\u0438\u043B\u0443");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 12)(4, "span", 13);
    \u0275\u0275text(5, "\u0432\u043F\u0435\u0440\u0435\u0434");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 14);
    \u0275\u0275text(7, "\u043D\u0430\u0437\u0430\u0434");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 15);
    \u0275\u0275text(9, "\u0432\u043B\u0456\u0432\u043E");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span", 16);
    \u0275\u0275text(11, "\u0432\u043F\u0440\u0430\u0432\u043E");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 17);
    \u0275\u0275domElement(13, "div", 18)(14, "div", 19)(15, "div", 20)(16, "div", 21);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(17, "div", 22)(18, "div", 23);
    \u0275\u0275text(19, "\u0421\u0442\u0430\u043D \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "div", 24);
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(22, "div", 25)(23, "div", 26)(24, "div", 27);
    \u0275\u0275text(25, "\u041D\u0430\u0445\u0438\u043B \u043B\u0456\u0432/\u043F\u0440 (\u03B3)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "div", 28);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(29, "div", 26)(30, "div", 27);
    \u0275\u0275text(31, "\u041D\u0430\u0445\u0438\u043B \u0432\u043F/\u043D\u0437 (\u03B2)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(32, "div", 28);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "number");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(35, "div", 26)(36, "div", 27);
    \u0275\u0275text(37, "\u041F\u043E\u0440\u0456\u0433");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(38, "div", 28);
    \u0275\u0275text(39);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(40, "p", 29);
    \u0275\u0275text(41, "\u0422\u0440\u0438\u043C\u0430\u0439\u0442\u0435 \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043F\u043E\u043A\u0430\u0437\u0443 \xAB\u0440\u0456\u0432\u043D\u043E\xBB.");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275classMap(ctx_r1.statusClass());
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("transform", "translate(calc(-50% + " + ctx_r1.bubbleX + "px), calc(-50% + " + ctx_r1.bubbleY + "px))");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.statusClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.status());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(28, 10, ctx_r1.gamma(), "1.1-1"), "\xB0");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(34, 13, ctx_r1.beta(), "1.1-1"), "\xB0");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\xB1", ctx_r1.THRESHOLD, "\xB0");
  }
}
var Lab1Component = class _Lab1Component {
  THRESHOLD = 15;
  BUBBLE_MAX = 70;
  started = signal(false, ...ngDevMode ? [{ debugName: "started" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  gamma = signal(0, ...ngDevMode ? [{ debugName: "gamma" }] : (
    /* istanbul ignore next */
    []
  ));
  beta = signal(0, ...ngDevMode ? [{ debugName: "beta" }] : (
    /* istanbul ignore next */
    []
  ));
  status = signal("\u0440\u0456\u0432\u043D\u043E", ...ngDevMode ? [{ debugName: "status" }] : (
    /* istanbul ignore next */
    []
  ));
  statusClass = signal("level", ...ngDevMode ? [{ debugName: "statusClass" }] : (
    /* istanbul ignore next */
    []
  ));
  handler = (e) => this.handleOrientation(e);
  get bubbleX() {
    return Math.max(-this.BUBBLE_MAX, Math.min(this.BUBBLE_MAX, this.gamma() / 90 * this.BUBBLE_MAX));
  }
  get bubbleY() {
    return Math.max(-this.BUBBLE_MAX, Math.min(this.BUBBLE_MAX, this.beta() / 90 * this.BUBBLE_MAX));
  }
  start() {
    const DOE = DeviceOrientationEvent;
    if (typeof DOE.requestPermission === "function") {
      DOE.requestPermission().then((state) => {
        if (state === "granted") {
          this.attachListener();
        } else {
          this.error.set("\u0414\u043E\u0441\u0442\u0443\u043F \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u043E. \u0423\u0432\u0456\u043C\u043A\u043D\u0456\u0442\u044C \u0443 \u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445 \u2192 Safari \u2192 \u0421\u0435\u043D\u0441\u043E\u0440\u0438 \u0440\u0443\u0445\u0443 \u0456 \u043E\u0440\u0456\u0454\u043D\u0442\u0430\u0446\u0456\u0457.");
        }
      }).catch((e) => {
        this.error.set("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0434\u043E\u0437\u0432\u043E\u043B\u0443: " + (e?.message ?? e));
      });
    } else {
      this.attachListener();
    }
  }
  attachListener() {
    window.addEventListener("deviceorientation", this.handler, true);
    this.started.set(true);
  }
  handleOrientation(e) {
    const g = e.gamma ?? 0;
    const b = e.beta ?? 0;
    this.gamma.set(g);
    this.beta.set(b);
    const ag = Math.abs(g), ab = Math.abs(b);
    if (ag < this.THRESHOLD && ab < this.THRESHOLD) {
      this.status.set("\u0440\u0456\u0432\u043D\u043E");
      this.statusClass.set("level");
    } else if (ag >= ab) {
      if (g < 0) {
        this.status.set("\u043D\u0430\u0445\u0438\u043B \u0432\u043B\u0456\u0432\u043E");
        this.statusClass.set("left");
      } else {
        this.status.set("\u043D\u0430\u0445\u0438\u043B \u0432\u043F\u0440\u0430\u0432\u043E");
        this.statusClass.set("right");
      }
    } else {
      if (b > 0) {
        this.status.set("\u043D\u0430\u0445\u0438\u043B \u0432\u043F\u0435\u0440\u0435\u0434");
        this.statusClass.set("fwd");
      } else {
        this.status.set("\u043D\u0430\u0445\u0438\u043B \u043D\u0430\u0437\u0430\u0434");
        this.statusClass.set("back");
      }
    }
  }
  ngOnDestroy() {
    window.removeEventListener("deviceorientation", this.handler, true);
  }
  static \u0275fac = function Lab1Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Lab1Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Lab1Component, selectors: [["app-lab1"]], decls: 17, vars: 1, consts: [[1, "lab-page"], [1, "lab-header", "card"], [1, "lab-num"], [1, "tag-row", 2, "margin-top", "10px"], [1, "badge", "blue"], [1, "badge", "purple"], [1, "badge", "yellow"], [1, "card", "center-card"], [1, "err-msg"], [1, "btn", "primary", 3, "click"], [2, "margin-top", "8px", "font-size", ".8rem"], [1, "card"], [1, "level-wrap"], [1, "axis-label", "top"], [1, "axis-label", "bottom"], [1, "axis-label", "left"], [1, "axis-label", "right"], [1, "level-ring"], [1, "crossh-v"], [1, "crossh-h"], [1, "center-circle"], [1, "bubble"], [1, "card", "status-card"], [1, "status-label"], [1, "status-text"], [1, "data-grid"], [1, "data-cell"], [1, "label"], [1, "value"], [2, "text-align", "center", "font-size", ".78rem"]], template: function Lab1Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430 1 \xB7 \u0412\u0430\u0440\u0456\u0430\u043D\u0442 13");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h2");
      \u0275\u0275text(5, "\u2696\uFE0F \u041F\u0440\u043E\u0441\u0442\u0438\u0439 \u0440\u0456\u0432\u0435\u043D\u044C");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p");
      \u0275\u0275text(7, "\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0430\u0454 \u043D\u0430\u0445\u0438\u043B \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E DeviceOrientationEvent: \u0440\u0456\u0432\u043D\u043E / \u043D\u0430\u0445\u0438\u043B \u0432\u043B\u0456\u0432\u043E / \u0432\u043F\u0440\u0430\u0432\u043E / \u0432\u043F\u0435\u0440\u0435\u0434 / \u043D\u0430\u0437\u0430\u0434.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 3)(9, "span", 4);
      \u0275\u0275text(10, "\u0410\u043A\u0441\u0435\u043B\u0435\u0440\u043E\u043C\u0435\u0442\u0440");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "span", 5);
      \u0275\u0275text(12, "DeviceOrientation API");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "span", 6);
      \u0275\u0275text(14, "iOS 13+");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(15, Lab1Component_Conditional_15_Template, 6, 1, "div", 7)(16, Lab1Component_Conditional_16_Template, 42, 16);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275conditional(!ctx.started() ? 15 : 16);
    }
  }, dependencies: [CommonModule, DecimalPipe], styles: ["\n.center-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  text-align: center;\n  padding: 32px;\n}\n.err-msg[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  border: 1px solid var(--red);\n  color: #fca5a5;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.82rem;\n  margin-bottom: 8px;\n}\n.level-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 28px;\n}\n.axis-label[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 0.65rem;\n  color: var(--muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.axis-label.top[_ngcontent-%COMP%] {\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.axis-label.bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.axis-label.left[_ngcontent-%COMP%] {\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.axis-label.right[_ngcontent-%COMP%] {\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.level-ring[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  border: 3px solid var(--border);\n  background:\n    radial-gradient(\n      circle at center,\n      var(--surface2) 60%,\n      var(--bg));\n  position: relative;\n  overflow: hidden;\n  transition: border-color 0.3s;\n}\n.level-ring.level[_ngcontent-%COMP%] {\n  border-color: var(--green);\n}\n.level-ring.left[_ngcontent-%COMP%], \n.level-ring.right[_ngcontent-%COMP%] {\n  border-color: var(--yellow);\n}\n.level-ring.fwd[_ngcontent-%COMP%], \n.level-ring.back[_ngcontent-%COMP%] {\n  border-color: var(--accent2);\n}\n.crossh-v[_ngcontent-%COMP%], \n.crossh-h[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background: var(--border);\n}\n.crossh-v[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 100%;\n  transform: translate(-50%, -50%);\n}\n.crossh-h[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  transform: translate(-50%, -50%);\n}\n.center-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  border: 2px solid var(--border);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.bubble[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at 35% 35%,\n      #67e8f9,\n      var(--accent));\n  box-shadow: 0 0 14px rgba(6, 182, 212, 0.6);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: transform 0.1s ease;\n  z-index: 2;\n}\n.status-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.status-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--muted);\n  margin-bottom: 6px;\n}\n.status-text[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  transition: color 0.2s;\n}\n.status-text.level[_ngcontent-%COMP%] {\n  color: var(--green);\n}\n.status-text.left[_ngcontent-%COMP%] {\n  color: var(--yellow);\n}\n.status-text.right[_ngcontent-%COMP%] {\n  color: var(--yellow);\n}\n.status-text.fwd[_ngcontent-%COMP%] {\n  color: var(--accent2);\n}\n.status-text.back[_ngcontent-%COMP%] {\n  color: var(--accent2);\n}\n/*# sourceMappingURL=lab1.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Lab1Component, [{
    type: Component,
    args: [{ selector: "app-lab1", imports: [CommonModule], template: `<div class="lab-page">\r
  <div class="lab-header card">\r
    <div class="lab-num">\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430 1 \xB7 \u0412\u0430\u0440\u0456\u0430\u043D\u0442 13</div>\r
    <h2>\u2696\uFE0F \u041F\u0440\u043E\u0441\u0442\u0438\u0439 \u0440\u0456\u0432\u0435\u043D\u044C</h2>\r
    <p>\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0430\u0454 \u043D\u0430\u0445\u0438\u043B \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E DeviceOrientationEvent: \u0440\u0456\u0432\u043D\u043E / \u043D\u0430\u0445\u0438\u043B \u0432\u043B\u0456\u0432\u043E / \u0432\u043F\u0440\u0430\u0432\u043E / \u0432\u043F\u0435\u0440\u0435\u0434 / \u043D\u0430\u0437\u0430\u0434.</p>\r
    <div class="tag-row" style="margin-top:10px">\r
      <span class="badge blue">\u0410\u043A\u0441\u0435\u043B\u0435\u0440\u043E\u043C\u0435\u0442\u0440</span>\r
      <span class="badge purple">DeviceOrientation API</span>\r
      <span class="badge yellow">iOS 13+</span>\r
    </div>\r
  </div>\r
\r
  @if (!started()) {\r
    <div class="card center-card">\r
      @if (error()) {\r
        <p class="err-msg">{{ error() }}</p>\r
      }\r
      <button class="btn primary" (click)="start()">\u25B6 \u0420\u043E\u0437\u043F\u043E\u0447\u0430\u0442\u0438</button>\r
      <p style="margin-top:8px;font-size:.8rem">\u041F\u043E\u0442\u0440\u0456\u0431\u0435\u043D \u0434\u043E\u0437\u0432\u0456\u043B \u043D\u0430 \u0434\u0430\u0442\u0447\u0438\u043A\u0438 \u0440\u0443\u0445\u0443 (Safari iOS 13+)</p>\r
    </div>\r
  } @else {\r
    <!-- Bubble level -->\r
    <div class="card">\r
      <h3>\u0406\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u043D\u0430\u0445\u0438\u043B\u0443</h3>\r
      <div class="level-wrap">\r
        <span class="axis-label top">\u0432\u043F\u0435\u0440\u0435\u0434</span>\r
        <span class="axis-label bottom">\u043D\u0430\u0437\u0430\u0434</span>\r
        <span class="axis-label left">\u0432\u043B\u0456\u0432\u043E</span>\r
        <span class="axis-label right">\u0432\u043F\u0440\u0430\u0432\u043E</span>\r
        <div class="level-ring" [class]="statusClass()">\r
          <div class="crossh-v"></div>\r
          <div class="crossh-h"></div>\r
          <div class="center-circle"></div>\r
          <div class="bubble"\r
            [style.transform]="'translate(calc(-50% + ' + bubbleX + 'px), calc(-50% + ' + bubbleY + 'px))'">\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Status -->\r
    <div class="card status-card">\r
      <div class="status-label">\u0421\u0442\u0430\u043D \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E</div>\r
      <div class="status-text" [class]="statusClass()">{{ status() }}</div>\r
    </div>\r
\r
    <!-- Angles readout -->\r
    <div class="data-grid">\r
      <div class="data-cell">\r
        <div class="label">\u041D\u0430\u0445\u0438\u043B \u043B\u0456\u0432/\u043F\u0440 (\u03B3)</div>\r
        <div class="value">{{ gamma() | number:'1.1-1' }}\xB0</div>\r
      </div>\r
      <div class="data-cell">\r
        <div class="label">\u041D\u0430\u0445\u0438\u043B \u0432\u043F/\u043D\u0437 (\u03B2)</div>\r
        <div class="value">{{ beta() | number:'1.1-1' }}\xB0</div>\r
      </div>\r
      <div class="data-cell">\r
        <div class="label">\u041F\u043E\u0440\u0456\u0433</div>\r
        <div class="value">\xB1{{ THRESHOLD }}\xB0</div>\r
      </div>\r
    </div>\r
\r
    <p style="text-align:center;font-size:.78rem">\u0422\u0440\u0438\u043C\u0430\u0439\u0442\u0435 \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043F\u043E\u043A\u0430\u0437\u0443 \xAB\u0440\u0456\u0432\u043D\u043E\xBB.</p>\r
  }\r
</div>\r
`, styles: ["/* src/app/labs/lab1/lab1.component.scss */\n.center-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  text-align: center;\n  padding: 32px;\n}\n.err-msg {\n  background: rgba(239, 68, 68, 0.12);\n  border: 1px solid var(--red);\n  color: #fca5a5;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.82rem;\n  margin-bottom: 8px;\n}\n.level-wrap {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 28px;\n}\n.axis-label {\n  position: absolute;\n  font-size: 0.65rem;\n  color: var(--muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.axis-label.top {\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.axis-label.bottom {\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.axis-label.left {\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.axis-label.right {\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.level-ring {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  border: 3px solid var(--border);\n  background:\n    radial-gradient(\n      circle at center,\n      var(--surface2) 60%,\n      var(--bg));\n  position: relative;\n  overflow: hidden;\n  transition: border-color 0.3s;\n}\n.level-ring.level {\n  border-color: var(--green);\n}\n.level-ring.left,\n.level-ring.right {\n  border-color: var(--yellow);\n}\n.level-ring.fwd,\n.level-ring.back {\n  border-color: var(--accent2);\n}\n.crossh-v,\n.crossh-h {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background: var(--border);\n}\n.crossh-v {\n  width: 1px;\n  height: 100%;\n  transform: translate(-50%, -50%);\n}\n.crossh-h {\n  width: 100%;\n  height: 1px;\n  transform: translate(-50%, -50%);\n}\n.center-circle {\n  position: absolute;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  border: 2px solid var(--border);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.bubble {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at 35% 35%,\n      #67e8f9,\n      var(--accent));\n  box-shadow: 0 0 14px rgba(6, 182, 212, 0.6);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: transform 0.1s ease;\n  z-index: 2;\n}\n.status-card {\n  text-align: center;\n}\n.status-label {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--muted);\n  margin-bottom: 6px;\n}\n.status-text {\n  font-size: 1.8rem;\n  font-weight: 700;\n  transition: color 0.2s;\n}\n.status-text.level {\n  color: var(--green);\n}\n.status-text.left {\n  color: var(--yellow);\n}\n.status-text.right {\n  color: var(--yellow);\n}\n.status-text.fwd {\n  color: var(--accent2);\n}\n.status-text.back {\n  color: var(--accent2);\n}\n/*# sourceMappingURL=lab1.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Lab1Component, { className: "Lab1Component", filePath: "src/app/labs/lab1/lab1.component.ts", lineNumber: 13 });
})();
export {
  Lab1Component
};
//# sourceMappingURL=chunk-QRF52MNF.js.map
