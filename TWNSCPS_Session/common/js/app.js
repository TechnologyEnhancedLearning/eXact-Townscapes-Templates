/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8644:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(9242);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3396);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=e84c6272&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_loading_screen = (0,runtime_core_esm_bundler/* resolveComponent */.up)("loading-screen");

  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, [_ctx.loadingStatus == 'loading' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_loading_screen, {
    key: 0
  })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.loadingStatus !== 'loading' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_router_view, {
    key: _ctx.$route.fullPath
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(({
      Component
    }) => [((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)((0,runtime_core_esm_bundler/* resolveDynamicComponent */.LL)(Component)))]),
    _: 1
  })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)], 64);
}
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js + 5 modules
var vuex_esm_bundler = __webpack_require__(7139);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2482);
;// CONCATENATED MODULE: ./src/models/BaseAsset.ts

class BaseAsset {
  constructor() {
    (0,defineProperty/* default */.Z)(this, "id", "");

    (0,defineProperty/* default */.Z)(this, "name", "");

    (0,defineProperty/* default */.Z)(this, "src", "");

    (0,defineProperty/* default */.Z)(this, "altText", "");

    (0,defineProperty/* default */.Z)(this, "left", "");

    (0,defineProperty/* default */.Z)(this, "right", "");

    (0,defineProperty/* default */.Z)(this, "top", "0");

    (0,defineProperty/* default */.Z)(this, "z", 0);

    (0,defineProperty/* default */.Z)(this, "width", "150px");

    (0,defineProperty/* default */.Z)(this, "height", "150px");

    (0,defineProperty/* default */.Z)(this, "backgroundColor", "transparent");
  }

}
;// CONCATENATED MODULE: ./src/models/Link.ts

class Link {
  constructor() {
    (0,defineProperty/* default */.Z)(this, "text", "");

    (0,defineProperty/* default */.Z)(this, "links", new Array());
  } // if this is populated, display it as an accordion


}
;// CONCATENATED MODULE: ./src/models/StageTimeline.ts

class StageTimeline {
  constructor() {
    (0,defineProperty/* default */.Z)(this, "tweens", new Array());

    (0,defineProperty/* default */.Z)(this, "repeat", 0);

    (0,defineProperty/* default */.Z)(this, "repeatDelay", 0);

    (0,defineProperty/* default */.Z)(this, "yoyo", false);
  }

}
;// CONCATENATED MODULE: ./src/models/StageTween.ts

class StageTween {
  constructor() {
    (0,defineProperty/* default */.Z)(this, "type", "to");

    (0,defineProperty/* default */.Z)(this, "animatedProperties", new Map());

    (0,defineProperty/* default */.Z)(this, "ease", "none");

    (0,defineProperty/* default */.Z)(this, "easeType", "");

    (0,defineProperty/* default */.Z)(this, "duration", 5);

    (0,defineProperty/* default */.Z)(this, "delay", 0);

    (0,defineProperty/* default */.Z)(this, "repeat", 0);
  }

}
;// CONCATENATED MODULE: ./src/models/Factory.ts




class Factory {
  static createTween(type, duration, delay, repeat, ease, easeType, yoyo) {
    const t = new StageTween();
    t.type = type;
    t.duration = duration;
    t.delay = delay;
    t.ease = ease;

    if (ease !== "none") {
      t.easeType = easeType;
    }

    t.repeat = repeat;
    return t;
  } // loop through a config link, creating all its sublinks


  static createLink(configLink) {
    const l = new Link();
    configLink.components.forEach(x => {
      if (x["@name"] === "linkText" && x.contents && x.contents.length > 0) {
        l.text = x.contents;
      } else if (x["@name"] === "sublinks" && x.components) {
        x.components.forEach(sublinksComponent => {
          if (sublinksComponent["@name"] === "sublink" && sublinksComponent.components) {
            sublinksComponent.components.forEach(b => {
              if (b["@name"] === "subLinkText" && b.contents && b.contents.length > 0) {
                const subLink = new Link();
                subLink.text = b.contents;
                l.links.push(subLink);
              }
            });
          }
        });
      } // l.links.push(Factory.createLink(x));

    });
    return l;
  }

  static createBaseAsset(id, name, height, width, left, top, zIndex) {
    const a = new BaseAsset();
    a.id = id;
    a.name = name === "" ? "Not specified" : name;
    a.height = height;
    a.width = width;
    a.left = left;
    a.top = top;
    a.z = zIndex;
    return a;
  }

  static createStageAsset(fileAsset) {
    const stageAsset = Factory.createBaseAsset(fileAsset["@label"], fileAsset["@description"], fileAsset["@height"], fileAsset["@width"], fileAsset["@left"], fileAsset["@top"], fileAsset["@zindex"]);

    if (fileAsset["@hotspotpagename"]) {
      // stageAsset.linkIdentifier = configAsset["@hotspotpagename"].toLowerCase().replaceAll(" ", "-");
      stageAsset.linkIdentifier = encodeURI(fileAsset["@hotspotpagename"].toLowerCase().replaceAll(" ", "-"));
    }

    if (fileAsset["@imageAlt"]) {
      stageAsset.altText = fileAsset["@imageAlt"];
    }

    stageAsset.timeline = new StageTimeline();
    fileAsset.components.forEach(fa => {
      // image inside stage asset
      if (fa["@name"] === "image" && fa.components) {
        // get href for image
        fa.components.forEach(secondC => {
          if (secondC["@href"]) {
            // stageAsset.src = "/session/1/TWNSCPS_Session/1/" + secondC["@href"];
            stageAsset.src = "./" + secondC["@href"];
          }
        });
      }

      if (fa["@name"] === "tweens" && fa.components) {
        stageAsset.timeline.repeat = fa["@repeat"];
        stageAsset.timeline.repeatDelay = fa["@repeatDelay"];
        stageAsset.timeline.yoyo = fa["@yoyo"].toLowerCase() === "yes"; // for each tween

        fa.components.forEach(configTween => {
          // create tween
          const tween = Factory.createTween(configTween["@type"], configTween["@duration"], configTween["@delay"], configTween["@repeat"], configTween["@ease"], configTween["@easeType"], configTween["@yoyo"]); // animation properties

          configTween.components.forEach(configProp => {
            // create animation property
            // tween["@ease"];
            if (configProp["@property"] && configProp["@value"]) {
              tween.animatedProperties.set(configProp["@property"], configProp["@value"]);
            }
          });
          stageAsset.timeline.tweens.push(tween);
        });
      }
    });
    return stageAsset;
  }

}
;// CONCATENATED MODULE: ./src/Log.ts

class Log {
  static Info(msg, obj) {
    console.info("%c%s", this.infoStyle, msg);

    if (obj) {
      console.dir(obj);
    }
  }

  static Warn(msg) {
    console.log("%c%s", this.warnStyle, msg);
  }

  static Error(msg, obj) {
    if (obj) {
      console.error("%c%s%o", this.errorStyle, msg, obj);
    } else {
      console.error("%c%s", this.errorStyle, msg);
    }
  }

}

(0,defineProperty/* default */.Z)(Log, "infoStyle", ["color: #00bb00", "background: transparent", "font-size: 12px", "padding: 10px"].join(";"));

(0,defineProperty/* default */.Z)(Log, "warnStyle", ["color: #333", "background: #fff", "font-size: 12px", "border: 1px solid #000", "padding: 10px"].join(";"));

(0,defineProperty/* default */.Z)(Log, "errorStyle", ["color: #fff", "font-weight: bold", "font-size: 12px", "padding: 20px"].join(";"));
;// CONCATENATED MODULE: ./src/models/Stage.ts

class Stage {
  constructor() {
    (0,defineProperty/* default */.Z)(this, "height", "100%");

    (0,defineProperty/* default */.Z)(this, "width", "100%");

    (0,defineProperty/* default */.Z)(this, "backgroundColor", "");

    (0,defineProperty/* default */.Z)(this, "footerColor", "");

    (0,defineProperty/* default */.Z)(this, "footerHeight", "0");

    (0,defineProperty/* default */.Z)(this, "scrollButtonsEnabled", false);

    (0,defineProperty/* default */.Z)(this, "scrollButtonColour", "");

    (0,defineProperty/* default */.Z)(this, "scrollButtonStrokeColour", "");

    (0,defineProperty/* default */.Z)(this, "hotSpotIndicatorColour", "");

    (0,defineProperty/* default */.Z)(this, "hotSpotIndicatorType", "");

    (0,defineProperty/* default */.Z)(this, "hotSpotIndicatorEnabled", false);

    (0,defineProperty/* default */.Z)(this, "animationsEnabled", true);
  }

}
;// CONCATENATED MODULE: ./src/models/StageAsset.ts



class StageAsset extends BaseAsset {
  constructor(...args) {
    super(...args);

    (0,defineProperty/* default */.Z)(this, "linkIdentifier", "");

    (0,defineProperty/* default */.Z)(this, "timeline", new StageTimeline());
  }

}
;// CONCATENATED MODULE: ./src/models/SessionConfig.ts



class SessionConfig {
  constructor() {
    (0,defineProperty/* default */.Z)(this, "title", "");

    (0,defineProperty/* default */.Z)(this, "editorOn", false);

    (0,defineProperty/* default */.Z)(this, "stage", new Stage());

    (0,defineProperty/* default */.Z)(this, "stageBackground", new StageAsset());

    (0,defineProperty/* default */.Z)(this, "assets", new Array());

    (0,defineProperty/* default */.Z)(this, "hotspotPages", new Array());
  }

}
;// CONCATENATED MODULE: ./src/models/HotspotPage.ts

class HotspotPage {
  constructor() {
    (0,defineProperty/* default */.Z)(this, "id", "");

    (0,defineProperty/* default */.Z)(this, "name", "");

    (0,defineProperty/* default */.Z)(this, "backgroundColor", "#fff");

    (0,defineProperty/* default */.Z)(this, "iconColor1", "#000");

    (0,defineProperty/* default */.Z)(this, "iconColor2", "#fff");

    (0,defineProperty/* default */.Z)(this, "iconColor3", "rgba(255, 255, 255, 0.5)");

    (0,defineProperty/* default */.Z)(this, "backgroundImgSrc", "");

    (0,defineProperty/* default */.Z)(this, "links", new Array());
  }

}
;// CONCATENATED MODULE: ./src/store/store.ts





const key = Symbol("mainStore");
const store = (0,vuex_esm_bundler/* createStore */.MT)({
  modules: {},
  state: {
    loadingStatus: "loading",
    sessionConfig: new SessionConfig(),
    visibleModal: "",
    animationsEnabled: true,
    viewMode: "normal"
  },
  getters: {
    hotspotIndicatorEnabled(state) {
      return state.sessionConfig.stage.hotSpotIndicatorEnabled;
    }

  },
  mutations: {
    SET_STATUS(state, value) {
      state.loadingStatus = value;
    },

    SET_SESSION_CONFIG(state, value) {
      state.sessionConfig = value;
    },

    SET_CURRENT_MODAL(state, value) {
      state.visibleModal = value;
    },

    TOGGLE_ANIMATIONS(state, value) {
      state.animationsEnabled = value;
    },

    SET_VIEW_MODE(state, value) {
      state.viewMode = value;
      const d = new Date();
      d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
      const expires = "expires=" + d.toUTCString();
      document.cookie = "ViewMode=" + state.viewMode + ";" + expires + ";path=/";
    }

  },
  actions: {
    async configureSession({
      commit
    }, value) {
      const fileConfig = value;
      const config = new SessionConfig();
      Log.Info("*******************************");
      Log.Info("** Loading configuration for **");
      Log.Info("** elfh townscapes session   **");
      Log.Info("*******************************");
      Log.Info(`Template type: ${fileConfig.root["@name"]} `);
      Log.Info(`Template version: ${fileConfig.root["@templateversion"]} `);
      Log.Info("config file", fileConfig.root);
      config.title = fileConfig.root["@description"];
      config.editorOn = fileConfig.root["@editoron"] !== "no"; // config.editorOn = false;

      config.stage.hotSpotIndicatorEnabled = fileConfig.root["@hotspotindicatorshowonstart"] === "yes";
      config.stage.hotSpotIndicatorType = fileConfig.root["@hotspotindicatortype"];
      config.stage.hotSpotIndicatorColour = fileConfig.root["@hotspotindicatorcolour"]; // config.hotspotBorderColour = "#e7a715";

      config.stage.scrollButtonsEnabled = fileConfig.root["@scrollbuttonsenabled"] === "yes";

      if (config.stage.scrollButtonsEnabled) {
        config.stage.scrollButtonColour = fileConfig.root["@scrollbuttoncolour"];
        config.stage.scrollButtonStrokeColour = fileConfig.root["@scrollbuttonstrokecolour"];
      }

      config.stage.height = fileConfig.root["@height"];
      config.stage.width = fileConfig.root["@width"];
      config.stage.backgroundColor = fileConfig.root["@backgroundcolor"];
      config.stage.footerColor = fileConfig.root["@footerbackgroundcolor"];
      config.stage.footerHeight = fileConfig.root["@footerheight"];
      const backgroundImage = fileConfig.root.backgroundImage;
      const stageBackground = Factory.createStageAsset(backgroundImage);
      stageBackground.linkIdentifier = "";
      config.stageBackground = stageBackground;
      const configStageAssets = fileConfig.root.stageAssets;
      configStageAssets.forEach(configAsset => {
        config.assets.push(Factory.createStageAsset(configAsset));
      });
      const configPages = fileConfig.root.pages;
      configPages.forEach(configPage => {
        const p = new HotspotPage();
        p.name = configPage["@description"].toLowerCase().replaceAll(" ", "-");

        if (p.name !== "") {
          // TODO change icon colour to config file
          p.iconColor1 = configPage["@iconcolour"];
          p.iconColor2 = "#fff";
          p.iconColor3 = configPage["@iconcolour"];
          configPage.components.forEach(c => {
            // image inside stage asset
            if (c["@name"] === "background" && c.components) {
              p.backgroundColor = c["@backgroundcolor"];
              c.components.forEach(b => {
                if (b["@name"] === "image" && b.components) {
                  // get href for image
                  b.components.forEach(a => {
                    if (a["@href"]) {
                      // stageAsset.src = "/session/1/TWNSCPS_Session/1/" + secondC["@href"];
                      p.backgroundImgSrc = "./" + a["@href"];
                    }
                  });
                }
              });
            }

            if (c["@name"] === "links" && c.components) {
              c.components.forEach(x => {
                const l = Factory.createLink(x); // only add links that have text added by the author

                if (l.text !== "") {
                  p.links.push(l);
                }
              });
            }
          });
          config.hotspotPages.push(p);
        }
      });
      commit("SET_SESSION_CONFIG", config);
      Log.Info("************************************");
      Log.Info("** Session configuration complete **");
      Log.Info("************************************");
      this.dispatch("setLoadingStatus", "loaded");
      Log.Info("sessionConfig", config);
    },

    setLoadingStatus({
      commit
    }, value) {
      commit("SET_STATUS", value);
    },

    setVisibleModal({
      commit
    }, value) {
      commit("SET_CURRENT_MODAL", value);
    },

    async toggleAnimations({
      commit
    }) {
      commit("TOGGLE_ANIMATIONS", !this.state.animationsEnabled);
    },

    setViewMode({
      commit
    }, value) {
      commit("SET_VIEW_MODE", value);
    },

    async toggleViewMode({
      commit
    }) {
      if (this.state.viewMode === "normal") {
        commit("SET_VIEW_MODE", "smallOnly");
      } else {
        commit("SET_VIEW_MODE", "normal");
      }
    }

  }
});
;// CONCATENATED MODULE: ./src/assets/img/elfh_logo_resized.svg
var elfh_logo_resized_namespaceObject = __webpack_require__.p + "common/img/elfh_logo_resized.svg";
;// CONCATENATED MODULE: ./src/assets/img/HEE_logo_left_aligned.svg
var HEE_logo_left_aligned_namespaceObject = __webpack_require__.p + "common/img/HEE_logo_left_aligned.svg";
;// CONCATENATED MODULE: ./src/assets/img/elfh-hee-loading-logos.svg
var elfh_hee_loading_logos_namespaceObject = __webpack_require__.p + "common/img/elfh-hee-loading-logos.svg";
;// CONCATENATED MODULE: ./src/assets/img/Spinner-1s-200px.svg
var Spinner_1s_200px_namespaceObject = __webpack_require__.p + "common/img/Spinner-1s-200px.svg";
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LoadingScreen.vue?vue&type=template&id=40199439&scoped=true&ts=true






const _withScopeId = n => (_pushScopeId("data-v-40199439"), n = n(), _popScopeId(), n);

const _hoisted_1 = {
  id: "loading",
  role: "alert",
  "aria-label": "Loading"
};

const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)("<img class=\"smallScreen\" src=\"" + elfh_logo_resized_namespaceObject + "\" alt=\"\" data-v-40199439><img class=\"smallScreen\" src=\"" + HEE_logo_left_aligned_namespaceObject + "\" alt=\"\" data-v-40199439><img class=\"largeScreen\" src=\"" + elfh_hee_loading_logos_namespaceObject + "\" alt=\"\" data-v-40199439><div class=\"loading-grid-container\" id=\"loadingTextAndAnimation\" data-v-40199439><div class=\"grid-child\" id=\"loadingText\" data-v-40199439>Loading...</div><div class=\"grid-child\" id=\"loadingAnimation\" data-v-40199439><img class=\"loading-animation\" src=\"" + Spinner_1s_200px_namespaceObject + "\" alt=\"\" data-v-40199439></div></div>", 4);

const _hoisted_6 = [_hoisted_2];
function LoadingScreenvue_type_template_id_40199439_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, _hoisted_6);
}
;// CONCATENATED MODULE: ./src/components/LoadingScreen.vue?vue&type=template&id=40199439&scoped=true&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LoadingScreen.vue?vue&type=script&lang=ts

/* harmony default export */ var LoadingScreenvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "LoadingScreen"
}));
;// CONCATENATED MODULE: ./src/components/LoadingScreen.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LoadingScreen.vue?vue&type=style&index=0&id=40199439&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/LoadingScreen.vue?vue&type=style&index=0&id=40199439&scoped=true&lang=scss

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(89);
;// CONCATENATED MODULE: ./src/components/LoadingScreen.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(LoadingScreenvue_type_script_lang_ts, [['render',LoadingScreenvue_type_template_id_40199439_scoped_true_ts_true_render],['__scopeId',"data-v-40199439"]])

/* harmony default export */ var LoadingScreen = (__exports__);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(678);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2268);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeView.vue?vue&type=template&id=e9b19fe0&ts=true

const HomeViewvue_type_template_id_e9b19fe0_ts_true_hoisted_1 = {
  class: "sr-only"
};
const HomeViewvue_type_template_id_e9b19fe0_ts_true_hoisted_2 = {
  class: "stage-control-panel"
};
const _hoisted_3 = {
  key: 6,
  class: "xy-position"
};
const _hoisted_4 = ["id"];
const _hoisted_5 = ["src", "alt"];
const HomeViewvue_type_template_id_e9b19fe0_ts_true_hoisted_6 = ["data-asset"];
const _hoisted_7 = {
  style: {
    "display": "flex",
    "flex-flow": "row nowrap",
    "justify-content": "space-between"
  }
};

const _hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Asset Information ");

const _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Here are the details for all the assets on the stage. ");

const _hoisted_10 = {
  id: "assetData"
};

const _hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("thead", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("tr", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("th", null, "Name"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("th", null, "Left"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("th", null, "Top"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("th", null, "Width"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("th", null, "Height"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("th", null, "Z-Index"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("th", null, "Background Colour"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("th", null, "Hotspot Page"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("th", null, "Timeline?")])], -1);

function HomeViewvue_type_template_id_e9b19fe0_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_small_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("small-view");

  const _component_asset_component = (0,runtime_core_esm_bundler/* resolveComponent */.up)("asset-component");

  const _component_svg_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("svg-icon");

  const _component_modal_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("modal-view");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_small_view, {
    class: (0,shared_esm_bundler/* normalizeClass */.C_)({
      'display': _ctx.viewMode === 'smallOnly'
    })
  }, null, 8, ["class"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
    id: "containerWrapper",
    class: (0,shared_esm_bundler/* normalizeClass */.C_)({
      'display-none': _ctx.viewMode !== 'normal'
    })
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
    id: "container",
    class: (0,shared_esm_bundler/* normalizeClass */.C_)({
      'drag-zone': _ctx.sessionConfig.editorOn === true
    }),
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      width: _ctx.sessionConfig.stage.width,
      height: _ctx.sessionConfig.stage.height,
      backgroundColor: _ctx.sessionConfig.stage.backgroundColor
    })
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("p", HomeViewvue_type_template_id_e9b19fe0_ts_true_hoisted_1, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.sessionConfig.title), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", HomeViewvue_type_template_id_e9b19fe0_ts_true_hoisted_2, [!_ctx.sessionConfig.editorOn ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = $event => _ctx.setSimpleViewMode())
  }, "Simple View")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.sessionConfig.stage.animationsEnabled === true ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
    key: 1,
    onClick: _cache[1] || (_cache[1] = $event => _ctx.disableAnimations())
  }, "Stop animations")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.sessionConfig.stage.animationsEnabled === false ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
    key: 2,
    onClick: _cache[2] || (_cache[2] = $event => _ctx.enableAnimations())
  }, "Start animations")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), !_ctx.sessionConfig.editorOn && _ctx.sessionConfig.stage.hotSpotIndicatorEnabled === true ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
    key: 3,
    onClick: _cache[3] || (_cache[3] = $event => _ctx.toggleHotspotIndicator())
  }, "Hide hotspots")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), !_ctx.sessionConfig.editorOn && _ctx.sessionConfig.stage.hotSpotIndicatorEnabled === false ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
    key: 4,
    onClick: _cache[4] || (_cache[4] = $event => _ctx.toggleHotspotIndicator())
  }, "Show hotspots")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.sessionConfig.editorOn === true ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
    key: 5,
    onClick: _cache[5] || (_cache[5] = $event => _ctx.setVisibleModal('assetData'))
  }, "Show Asset Info")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.sessionConfig.editorOn === true ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.xPos) + "%, " + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.yPos) + "% ", 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]), _ctx.sessionConfig.stageBackground.id !== '' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
    key: 0,
    id: _ctx.sessionConfig.stageBackground.id,
    class: "stage-background",
    onMousemove: _cache[6] || (_cache[6] = //@ts-ignore
    (...args) => _ctx.mousemove && _ctx.mousemove(...args)),
    onDrop: _cache[7] || (_cache[7] = $event => _ctx.onDrop($event)),
    onDragover: _cache[8] || (_cache[8] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)(() => {}, ["prevent"])),
    onDragenter: _cache[9] || (_cache[9] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)(() => {}, ["prevent"])),
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)(_ctx.getStyle(_ctx.sessionConfig.stageBackground))
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
    src: _ctx.sessionConfig.stageBackground.src,
    alt: _ctx.sessionConfig.stageBackground.altText,
    draggable: "false"
  }, null, 8, _hoisted_5)], 44, _hoisted_4)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.sessionConfig.assets, a => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
      "data-asset": a.id,
      key: a
    }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_asset_component, {
      asset: a,
      "editor-enabled": _ctx.sessionConfig.editorOn,
      "show-hotspot-indicator": _ctx.sessionConfig.stage.hotSpotIndicatorEnabled,
      "hot-spot-indicator-type": _ctx.sessionConfig.stage.hotSpotIndicatorType,
      "hot-spot-indicator-colour": _ctx.sessionConfig.stage.hotSpotIndicatorColour
    }, null, 8, ["asset", "editor-enabled", "show-hotspot-indicator", "hot-spot-indicator-type", "hot-spot-indicator-colour"])], 8, HomeViewvue_type_template_id_e9b19fe0_ts_true_hoisted_6);
  }), 128))], 6), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_7, [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
    onClick: _cache[10] || (_cache[10] = $event => _ctx.scrollStageLeft()),
    id: "scrollButtonLeft",
    class: "scroll-button grow rotate",
    icon: "scrollArrow",
    color1: _ctx.sessionConfig.stage.scrollButtonStrokeColour,
    color2: _ctx.sessionConfig.stage.scrollButtonColour
  }, null, 8, ["color1", "color2"]), [[runtime_dom_esm_bundler/* vShow */.F8, _ctx.sessionConfig.stage.scrollButtonsEnabled && _ctx.scrollPosition !== 'left']]), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
    onClick: _cache[11] || (_cache[11] = $event => _ctx.scrollStageRight()),
    id: "scrollButtonRight",
    class: "scroll-button grow",
    icon: "scrollArrow",
    color1: _ctx.sessionConfig.stage.scrollButtonStrokeColour,
    color2: _ctx.sessionConfig.stage.scrollButtonColour
  }, null, 8, ["color1", "color2"]), [[runtime_dom_esm_bundler/* vShow */.F8, _ctx.sessionConfig.stage.scrollButtonsEnabled && _ctx.scrollPosition === 'left']])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("footer", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      backgroundColor: _ctx.sessionConfig.stage.footerColor,
      height: _ctx.sessionConfig.stage.footerHeight
    })
  }, null, 4)], 2), (0,runtime_core_esm_bundler/* createVNode */.Wm)(runtime_dom_esm_bundler/* Transition */.uT, {
    name: "slide"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_ctx.visibleModal == 'assetData' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_modal_view, {
      key: 0,
      onClose: _cache[13] || (_cache[13] = $event => _ctx.setVisibleModal(''))
    }, {
      header: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_8]),
      body: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, [_hoisted_9, (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
        onClick: _cache[12] || (_cache[12] = $event => _ctx.copyToClipboard())
      }, "Copy to clipboard")]), (0,runtime_core_esm_bundler/* createElementVNode */._)("table", _hoisted_10, [_hoisted_11, (0,runtime_core_esm_bundler/* createElementVNode */._)("tbody", null, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.sessionConfig.assets, a => {
        return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("tr", {
          key: a
        }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(a.name), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(a.left), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(a.top), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(a.width), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(a.height), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(a.z), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(a.backgroundColor), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(a.linkIdentifier), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(a.timeline.tweens.length > 0 ? "Yes" : "No"), 1)]);
      }), 128))])])]),
      _: 1
    })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
    _: 1
  })], 64);
}
;// CONCATENATED MODULE: ./src/components/HomeView.vue?vue&type=template&id=e9b19fe0&ts=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__(1703);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ModalView.vue?vue&type=template&id=dea8b94a&scoped=true


const ModalViewvue_type_template_id_dea8b94a_scoped_true_withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-dea8b94a"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const ModalViewvue_type_template_id_dea8b94a_scoped_true_hoisted_1 = {
  class: "modal"
};
const ModalViewvue_type_template_id_dea8b94a_scoped_true_hoisted_2 = {
  class: "modal__wrapper"
};
const ModalViewvue_type_template_id_dea8b94a_scoped_true_hoisted_3 = {
  class: "modal__header",
  id: "modalTitle"
};

const ModalViewvue_type_template_id_dea8b94a_scoped_true_hoisted_4 = /*#__PURE__*/ModalViewvue_type_template_id_dea8b94a_scoped_true_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, "x", -1));

const ModalViewvue_type_template_id_dea8b94a_scoped_true_hoisted_5 = [ModalViewvue_type_template_id_dea8b94a_scoped_true_hoisted_4];
const ModalViewvue_type_template_id_dea8b94a_scoped_true_hoisted_6 = {
  class: "modal__body",
  id: "modalDescription"
};
const ModalViewvue_type_template_id_dea8b94a_scoped_true_hoisted_7 = {
  class: "modal__footer"
};
function ModalViewvue_type_template_id_dea8b94a_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", ModalViewvue_type_template_id_dea8b94a_scoped_true_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", ModalViewvue_type_template_id_dea8b94a_scoped_true_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C_)(['modal__container', $props.modalSize]),
    role: "dialog",
    "aria-labelledby": "modalTitle",
    "aria-describedby": "modalDescription"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("header", ModalViewvue_type_template_id_dea8b94a_scoped_true_hoisted_3, [(0,runtime_core_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "header", {}, undefined, true), (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    type: "button",
    class: "btn-close",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.close && $options.close(...args)),
    "aria-label": "Close modal"
  }, ModalViewvue_type_template_id_dea8b94a_scoped_true_hoisted_5)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ModalViewvue_type_template_id_dea8b94a_scoped_true_hoisted_6, [(0,runtime_core_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "body", {}, undefined, true)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ModalViewvue_type_template_id_dea8b94a_scoped_true_hoisted_7, [(0,runtime_core_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "footer", {}, () => [(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    type: "button",
    class: "",
    onClick: _cache[1] || (_cache[1] = (...args) => $options.close && $options.close(...args)),
    "aria-label": "Close modal"
  }, " Close ")], true)])], 2)])]);
}
;// CONCATENATED MODULE: ./src/components/ModalView.vue?vue&type=template&id=dea8b94a&scoped=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ModalView.vue?vue&type=script&lang=js
/* harmony default export */ var ModalViewvue_type_script_lang_js = ({
  name: "ModalView",
  emits: ["close"],
  props: {
    modalSize: {
      type: String,
      default: "medium"
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }

  }
});
;// CONCATENATED MODULE: ./src/components/ModalView.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ModalView.vue?vue&type=style&index=0&id=dea8b94a&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/ModalView.vue?vue&type=style&index=0&id=dea8b94a&scoped=true&lang=scss

;// CONCATENATED MODULE: ./src/components/ModalView.vue




;


const ModalView_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ModalViewvue_type_script_lang_js, [['render',ModalViewvue_type_template_id_dea8b94a_scoped_true_render],['__scopeId',"data-v-dea8b94a"]])

/* harmony default export */ var ModalView = (ModalView_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AssetComponent.vue?vue&type=template&id=8f3e2260&scoped=true&ts=true


const AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-8f3e2260"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_hoisted_1 = ["id"];
const AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_hoisted_2 = ["src", "alt"];
const AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_hoisted_3 = ["id"];
const AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_hoisted_4 = ["src", "alt"];

const AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_hoisted_5 = /*#__PURE__*/AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "sr-only"
}, "Hot spot", -1));

const AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_hoisted_6 = [AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_hoisted_5];
const AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_hoisted_7 = ["id"];
const AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_hoisted_8 = ["src", "alt"];
function AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", null, [_ctx.editorEnabled === true ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
    key: 0,
    id: _ctx.asset.id,
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)(_ctx.getStyle()),
    class: "asset-image drag-me",
    draggable: "true",
    onDragstart: _cache[0] || (_cache[0] = $event => _ctx.startDrag($event, _ctx.asset))
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
    src: _ctx.asset.src,
    alt: _ctx.asset.altText,
    draggable: "false"
  }, null, 8, AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_hoisted_2)], 44, AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_hoisted_1)) : _ctx.asset.src && _ctx.asset.src !== '' && _ctx.asset.linkIdentifier && _ctx.asset.linkIdentifier !== '' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_router_link, {
    key: 1,
    class: "hotspot",
    to: {
      name: 'hotspotPage',
      params: {
        pageName: _ctx.asset.linkIdentifier
      }
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
      id: _ctx.asset.id,
      class: "asset-image grow",
      style: (0,shared_esm_bundler/* normalizeStyle */.j5)(_ctx.getStyle())
    }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
      class: "",
      src: _ctx.asset.src,
      alt: _ctx.asset.altText,
      draggable: "false"
    }, null, 8, AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_hoisted_4), _ctx.showHotspotIndicator && _ctx.hotSpotIndicatorType === 'spot' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
      key: 0,
      class: "hotspot-indicator",
      style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
        backgroundColor: _ctx.hotSpotIndicatorColour
      })
    }, AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_hoisted_6, 4)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)], 12, AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_hoisted_3)]),
    _: 1
  }, 8, ["to"])) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
    key: 2,
    id: _ctx.asset.id,
    class: "asset-image",
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)(_ctx.getStyle())
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
    src: _ctx.asset.src,
    alt: _ctx.asset.altText,
    draggable: "false"
  }, null, 8, AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_hoisted_8)], 12, AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_hoisted_7))]);
}
;// CONCATENATED MODULE: ./src/components/AssetComponent.vue?vue&type=template&id=8f3e2260&scoped=true&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AssetComponent.vue?vue&type=script&lang=ts


/* harmony default export */ var AssetComponentvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "AssetComponent",
  props: {
    editorEnabled: {
      type: Boolean,
      required: true
    },
    showHotspotIndicator: {
      type: Boolean,
      required: true
    },
    hotSpotIndicatorType: {
      type: String,
      required: true
    },
    hotSpotIndicatorColour: {
      type: String,
      required: true
    },
    asset: {
      type: StageAsset,
      required: true
    }
  },
  computed: {},
  methods: {
    getIconColor(color) {
      switch (color) {
        case 2:
          return "#fff";

        default:
          return "#000";
      }
    },

    getStyle() {
      const s = {
        borderColor: "transparent",
        width: this.asset.width,
        height: this.asset.height,
        zIndex: this.asset.z,
        left: this.asset.left,
        top: this.asset.top
      };

      if (this.showHotspotIndicator || this.editorEnabled) {
        if (this.editorEnabled) {
          s.borderColor = "#ff0000";
        } else {
          if (this.hotSpotIndicatorType === "border") {
            s.borderColor = this.hotSpotIndicatorColour;
          }
        }
      }

      return s;
    },

    startDrag(evt, asset) {
      if (evt !== null && evt.dataTransfer !== null) {
        evt.dataTransfer.dropEffect = "move";
        evt.dataTransfer.effectAllowed = "move";
        evt.dataTransfer.setData("assetId", asset.id);
        evt.dataTransfer.setDragImage(evt.target, evt.target.width / 2, evt.target.height / 2);
      }
    }

  }
}));
;// CONCATENATED MODULE: ./src/components/AssetComponent.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AssetComponent.vue?vue&type=style&index=0&id=8f3e2260&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/AssetComponent.vue?vue&type=style&index=0&id=8f3e2260&scoped=true&lang=scss

;// CONCATENATED MODULE: ./src/components/AssetComponent.vue




;


const AssetComponent_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(AssetComponentvue_type_script_lang_ts, [['render',AssetComponentvue_type_template_id_8f3e2260_scoped_true_ts_true_render],['__scopeId',"data-v-8f3e2260"]])

/* harmony default export */ var AssetComponent = (AssetComponent_exports_);
// EXTERNAL MODULE: ./node_modules/gsap/index.js + 2 modules
var gsap = __webpack_require__(8552);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SmallView.vue?vue&type=template&id=c033c60c&scoped=true&ts=true


const SmallViewvue_type_template_id_c033c60c_scoped_true_ts_true_withScopeId = n => (_pushScopeId("data-v-c033c60c"), n = n(), _popScopeId(), n);

const SmallViewvue_type_template_id_c033c60c_scoped_true_ts_true_hoisted_1 = {
  id: "smallView"
};
const SmallViewvue_type_template_id_c033c60c_scoped_true_ts_true_hoisted_2 = {
  class: "control-panel"
};
const SmallViewvue_type_template_id_c033c60c_scoped_true_ts_true_hoisted_3 = {
  style: {
    "display": "flex",
    "flex-flow": "row nowrap",
    "justify-content": "flex-start",
    "align-items": "center"
  }
};
function SmallViewvue_type_template_id_c033c60c_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("svg-icon");

  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", SmallViewvue_type_template_id_c033c60c_scoped_true_ts_true_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", SmallViewvue_type_template_id_c033c60c_scoped_true_ts_true_hoisted_2, [!_ctx.sessionConfig.editorOn ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
    key: 0,
    class: "switch-view",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.setDetailedViewMode())
  }, "Detailed View")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("ul", null, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.sessionConfig.assets.filter(x => x.src && x.src.trim !== '' && x.linkIdentifier && x.linkIdentifier.trim !== ''), a => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("li", {
      key: a
    }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
      to: {
        name: 'hotspotPage',
        params: {
          pageName: a.linkIdentifier
        }
      }
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", SmallViewvue_type_template_id_c033c60c_scoped_true_ts_true_hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
        class: "icon",
        icon: "pin",
        color1: _ctx.getIconColor(1),
        color2: _ctx.getIconColor(2),
        color3: _ctx.getIconColor(3)
      }, null, 8, ["color1", "color2", "color3"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, (0,shared_esm_bundler/* toDisplayString */.zw)(a.name), 1)])]),
      _: 2
    }, 1032, ["to"])]);
  }), 128))])]);
}
;// CONCATENATED MODULE: ./src/components/SmallView.vue?vue&type=template&id=c033c60c&scoped=true&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SvgIcon.vue?vue&type=template&id=b777dffe&ts=true

const SvgIconvue_type_template_id_b777dffe_ts_true_hoisted_1 = {
  key: 0,
  id: "pinIcon",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 299.58 299.58",
  style: {
    "enable-background": "new 0 0 299.58 299.58"
  },
  "xml:space": "preserve"
};
const SvgIconvue_type_template_id_b777dffe_ts_true_hoisted_2 = {
  key: 1,
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 299.58 299.58",
  style: {
    "enable-background": "new 0 0 299.58 299.58"
  },
  "xml:space": "preserve"
};
const SvgIconvue_type_template_id_b777dffe_ts_true_hoisted_3 = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  width: "58.22",
  height: "38.78",
  viewBox: "0 0 58.22 38.78"
};

const SvgIconvue_type_template_id_b777dffe_ts_true_hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("title", null, "right_arrow", -1);

function SvgIconvue_type_template_id_b777dffe_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", null, [_ctx.icon === 'pin' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("svg", SvgIconvue_type_template_id_b777dffe_ts_true_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("circle", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color3
    }),
    cx: "149.79",
    cy: "149.79",
    r: "149.79"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("circle", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color2
    }),
    cx: "149.79",
    cy: "149.79",
    r: "98.32"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color1
    }),
    d: "M182.04,134.29c0,17.67-26.5,62.5-31.52,62.55c-5.36,0.05-32.48-44.87-32.48-62.55c0-17.67,14.33-32,32-32\r\n        S182.04,116.62,182.04,134.29z M150.04,115.79c-9.94,0-18,8.06-18,18c0,9.94,8.06,18,18,18c9.94,0,18-8.06,18-18\r\n        C168.04,123.85,159.98,115.79,150.04,115.79z"
  }, null, 4)])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.icon === 'arrow' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("svg", SvgIconvue_type_template_id_b777dffe_ts_true_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("circle", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color3
    }),
    cx: "149.79",
    cy: "149.79",
    r: "149.79"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("circle", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color2
    }),
    cx: "149.79",
    cy: "149.79",
    r: "98.32"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color1
    }),
    d: "M154.53,124.01l10.27,23.63l10.27,23.97c1.54,3.6-1.03,7.19-4.62,7.02l-13.87,0.17v14.73\r\n        c0,8.9-13.36,8.9-13.36,0v-14.73l-13.87-0.17c-3.94,0.17-6.34-3.94-4.62-7.36l10.27-23.63l10.27-23.63\r\n        C146.99,119.9,152.82,119.9,154.53,124.01z M164.8,105.86c1.54-1.54,3.94,0.86,2.4,2.4l-8.9,8.9c-1.54,1.54-3.94-0.86-2.4-2.4\r\n        L164.8,105.86z M172.68,121.61c2.23-0.17,2.23,3.25,0.17,3.25h-12.67c-2.05,0-2.23-3.25,0-3.42L172.68,121.61z M126.96,124.87\r\n        c-2.05,0-2.05-3.42,0.17-3.25l12.5-0.17c2.23,0.17,2.05,3.42,0,3.42H126.96z M132.61,108.26c-1.54-1.54,0.86-3.94,2.4-2.4l8.9,8.9\r\n        c1.54,1.54-0.86,3.94-2.4,2.4L132.61,108.26z M148.36,100.38c-0.17-2.23,3.25-2.23,3.08,0l0.17,12.5c-0.17,2.23-3.25,2.23-3.42,0\r\n        L148.36,100.38z"
  }, null, 4)])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.icon === 'scrollArrow' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("svg", SvgIconvue_type_template_id_b777dffe_ts_true_hoisted_3, [SvgIconvue_type_template_id_b777dffe_ts_true_hoisted_4, (0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    d: "M54.58,22.57,38.12,29.73,21.66,36.88a3.49,3.49,0,0,1-5.13-3.22L16.41,24H6.15c-6.2,0-6.2-9.3,0-9.3H16.41L16.53,5a3.4,3.4,0,0,1,4.89-3.22L38.12,9l16.46,7.16A3.49,3.49,0,0,1,54.58,22.57Z",
    transform: "translate(0 0)",
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color2,
      stroke: _ctx.color1
    }),
    "stroke-miterlimit": "10",
    "stroke-width": "3",
    "fill-rule": "evenodd"
  }, null, 4)])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]);
}
;// CONCATENATED MODULE: ./src/components/SvgIcon.vue?vue&type=template&id=b777dffe&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SvgIcon.vue?vue&type=script&lang=ts

/* harmony default export */ var SvgIconvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "SvgIcon",
  props: {
    icon: String,
    color1: String,
    color2: String,
    color3: String
  }
}));
;// CONCATENATED MODULE: ./src/components/SvgIcon.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/SvgIcon.vue




;
const SvgIcon_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SvgIconvue_type_script_lang_ts, [['render',SvgIconvue_type_template_id_b777dffe_ts_true_render]])

/* harmony default export */ var SvgIcon = (SvgIcon_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SmallView.vue?vue&type=script&lang=ts




/* harmony default export */ var SmallViewvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "SmallView",
  components: {
    SvgIcon: SvgIcon
  },
  props: {},

  data() {
    return {
      store: (0,vuex_esm_bundler/* useStore */.oR)(key)
    };
  },

  computed: { ...(0,vuex_esm_bundler/* mapState */.rn)(["sessionConfig"])
  },
  methods: {
    hotspotsAssets() {
      return this.sessionConfig.assets;
    },

    setDetailedViewMode() {
      this.store.dispatch("setViewMode", "normal");
    },

    getIconColor(color) {
      switch (color) {
        case 2:
          return "#fff";

        default:
          return "#000";
      }
    }

  }
}));
;// CONCATENATED MODULE: ./src/components/SmallView.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SmallView.vue?vue&type=style&index=0&id=c033c60c&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/SmallView.vue?vue&type=style&index=0&id=c033c60c&scoped=true&lang=scss

;// CONCATENATED MODULE: ./src/components/SmallView.vue




;


const SmallView_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SmallViewvue_type_script_lang_ts, [['render',SmallViewvue_type_template_id_c033c60c_scoped_true_ts_true_render],['__scopeId',"data-v-c033c60c"]])

/* harmony default export */ var SmallView = (SmallView_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeView.vue?vue&type=script&lang=ts










/* harmony default export */ var HomeViewvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "HomeView",
  components: {
    ModalView: ModalView,
    AssetComponent: AssetComponent,
    SmallView: SmallView,
    SvgIcon: SvgIcon
  },

  data() {
    return {
      store: (0,vuex_esm_bundler/* useStore */.oR)(key),
      xPos: "0",
      yPos: "0",
      timelines: new Array(),
      scrollPosition: "left"
    };
  },

  computed: { ...(0,vuex_esm_bundler/* mapState */.rn)(["sessionConfig", "viewMode", "visibleModal", "animationsEnabled", "hotspotIndicatorEnabled"])
  },

  async mounted() {
    await this.getViewModeCookie(); // determine stored view mode
    // create animations

    this.sessionConfig.assets.forEach(a => {
      if (a.timeline.tweens.length > 0) {
        const tl = gsap/* gsap.timeline */.p8.timeline({
          paused: true
        });
        const element = document.getElementById(a.id);

        if (element !== null) {
          tl.repeat(a.timeline.repeat);
          tl.yoyo(a.timeline.yoyo);

          if (a.timeline.repeatDelay > 0) {
            tl.repeatDelay(a.timeline.repeatDelay);
          }

          for (let index = 0; index < a.timeline.tweens.length; index++) {
            const tween = a.timeline.tweens[index];
            let ease = tween.ease;

            if (tween.ease !== "none" && tween.easeType !== "") {
              ease = tween.ease + "." + tween.easeType;
            }

            const anim = Object.fromEntries(tween.animatedProperties);
            anim.ease = ease;
            anim.duration = tween.duration;

            switch (tween.type) {
              case "to":
                tl.to(element, anim);
                break;

              case "from":
                tl.from(element, anim);
                break;

              default:
                throw new Error("Unable to create tween.  Unrecognised tween type: " + tween);
            }
          }

          tl.play();
          this.timelines.push(tl);
        }
      }
    });
  },

  methods: {
    setSimpleViewMode() {
      this.store.dispatch("setViewMode", "smallOnly");
    },

    toggleViewMode() {
      this.store.dispatch("toggleViewMode");
    },

    async getViewModeCookie() {
      const viewMode = document.cookie.split("; ").find(row => row.startsWith("ViewMode="))?.split("=")[1];

      if (viewMode === "normal" || viewMode === "smallOnly") {
        this.store.dispatch("setViewMode", viewMode);
      }
    },

    getIconColor1() {
      // return Utils.lightenDarkenColor(this.page.backgroundColour, -50);
      return "#fff";
    },

    getIconColor2() {
      return "#e7a715"; // e7a715
    },

    scrollStageLeft() {
      const e = document.getElementById("container");

      if (e !== null) {
        gsap/* gsap.to */.p8.to(e, {
          marginLeft: "0",
          duration: 1,
          ease: "power1.in"
        });
        gsap/* gsap.set */.p8.set("#scrollButtonRight", {
          opacity: 0
        });
        gsap/* gsap.to */.p8.to("#scrollButtonRight", {
          opacity: 1,
          duration: 1,
          ease: "power1.in"
        });
      }

      this.scrollPosition = "left";
    },

    scrollStageRight() {
      const e = document.getElementById("container");
      const marginLeftValue = "-" + (parseInt(this.sessionConfig.stage.width, 10) - 100) + "%";

      if (e !== null) {
        gsap/* gsap.to */.p8.to(e, {
          marginLeft: marginLeftValue,
          duration: 1,
          ease: "power1.in"
        });
        gsap/* gsap.set */.p8.set("#scrollButtonLeft", {
          opacity: 0
        });
        gsap/* gsap.to */.p8.to("#scrollButtonLeft", {
          opacity: 1,
          duration: 1,
          ease: "power1.in"
        });
      }

      this.scrollPosition = "right";
    },

    getStyle(asset) {
      const s = {
        width: asset.width,
        height: asset.height,
        zIndex: asset.z,
        left: asset.left,
        top: asset.top
      };
      return s;
    },

    copyToClipboard() {
      let str = "Name, Left, Top, Width, Height, Z-index, Background colour, Hotspot page, Timeline";
      this.sessionConfig.assets.forEach(a => {
        str = str + "\n" + a.name + ", " + a.left + ", " + a.top + ", " + a.width + ", " + a.height + ", " + a.z + ", " + a.backgroundColor;
        str = str + ", " + a.linkIdentifier;

        if (a.timeline.tweens.length > 0) {
          str = str + ", Yes";
        } else {
          str = str + ", No";
        }
      });
      navigator.clipboard.writeText(str);
    },

    async enableAnimations() {
      this.sessionConfig.stage.animationsEnabled = true;
      this.stopStartAnimations();
    },

    async disableAnimations() {
      this.sessionConfig.stage.animationsEnabled = false;
      this.stopStartAnimations();
    },

    async stopStartAnimations() {
      // await this.store.dispatch("toggleAnimations");
      // this.sessionConfig.stage.animationsEnabled = !this.sessionConfig.stage.animationsEnabled;
      this.timelines.forEach(x => {
        if (!this.sessionConfig.stage.animationsEnabled) {
          x.pause();
        } else {
          x.play();
        }
      });
    },

    async toggleHotspotIndicator() {
      // await this.store.dispatch("toggleHotspotIndicator");
      this.sessionConfig.stage.hotSpotIndicatorEnabled = !this.sessionConfig.stage.hotSpotIndicatorEnabled;
      Log.Info("Show Hotspots?", this.sessionConfig.stage.hotSpotIndicatorEnabled);
    },

    setVisibleModal(value) {
      this.store.dispatch("setVisibleModal", value);
    },

    isDraggableAsset(asset) {
      if (asset.linkIdentifier !== "") {
        return true;
      }

      return false;
    },

    startDrag(evt, asset) {
      if (evt !== null && evt.dataTransfer !== null) {
        evt.dataTransfer.dropEffect = "move";
        evt.dataTransfer.effectAllowed = "move";
        evt.dataTransfer.setData("assetId", asset.id); // document.getElementById(asset.id)

        Log.Info("event", evt);
        evt.dataTransfer.setDragImage(evt.target, evt.target.width / 2, evt.target.height / 2);
      }
    },

    onDrop(evt) {
      if (evt !== null && evt.dataTransfer !== null) {
        const droppedAssetId = evt.dataTransfer.getData("assetId");
        const a = this.sessionConfig.assets.find(x => x.id === droppedAssetId);

        if (a != null) {
          const y = evt.clientY / evt.target.height * 100;
          const x = evt.clientX / evt.target.width * 100;
          a.left = x.toFixed(2) + "%";
          a.top = y.toFixed(2) + "%";
        }
      }
    },

    mousemove(event) {
      event.stopPropagation();
      event.preventDefault();

      if (this.sessionConfig.editorOn === true) {
        const y = event.clientY / event.target.height * 100;
        const x = event.clientX / event.target.width * 100;
        this.xPos = x.toFixed(2);
        this.yPos = y.toFixed(2);
      }
    },

    getXPos() {
      const pos = Number(this.xPos) - 3;
      return pos.toString() + "%";
    },

    getYPos() {
      const pos = Number(this.yPos) - 5;
      return pos.toString() + "%";
    }

  }
}));
;// CONCATENATED MODULE: ./src/components/HomeView.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeView.vue?vue&type=style&index=0&id=e9b19fe0&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/HomeView.vue?vue&type=style&index=0&id=e9b19fe0&lang=scss

;// CONCATENATED MODULE: ./src/components/HomeView.vue




;


const HomeView_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(HomeViewvue_type_script_lang_ts, [['render',HomeViewvue_type_template_id_e9b19fe0_ts_true_render]])

/* harmony default export */ var HomeView = (HomeView_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HotspotPageView.vue?vue&type=template&id=7c2381fb&ts=true

const HotspotPageViewvue_type_template_id_7c2381fb_ts_true_hoisted_1 = {
  style: {
    "position": "relative",
    "height": "92%"
  }
};
const HotspotPageViewvue_type_template_id_7c2381fb_ts_true_hoisted_2 = {
  class: "sr-only"
};
const HotspotPageViewvue_type_template_id_7c2381fb_ts_true_hoisted_3 = {
  class: "page-image-container"
};
const HotspotPageViewvue_type_template_id_7c2381fb_ts_true_hoisted_4 = ["src"];
const HotspotPageViewvue_type_template_id_7c2381fb_ts_true_hoisted_5 = {
  class: "circle-links"
};
const HotspotPageViewvue_type_template_id_7c2381fb_ts_true_hoisted_6 = {
  class: "top"
};

const HotspotPageViewvue_type_template_id_7c2381fb_ts_true_hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "text"
}, "Overview", -1);

const HotspotPageViewvue_type_template_id_7c2381fb_ts_true_hoisted_8 = {
  class: "text"
};

const HotspotPageViewvue_type_template_id_7c2381fb_ts_true_hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "text",
  style: {
    "left-margin": "-3px"
  }
}, "BACK TO MAP", -1);

function HotspotPageViewvue_type_template_id_7c2381fb_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("svg-icon");

  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");

  const _component_pop_up_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("pop-up-view");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("main", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)([{
      "position": "absolute",
      "left": "0",
      "top": "0",
      "width": "100%",
      "height": "100%"
    }, {
      backgroundColor: _ctx.page.backgroundColor
    }])
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", HotspotPageViewvue_type_template_id_7c2381fb_ts_true_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", HotspotPageViewvue_type_template_id_7c2381fb_ts_true_hoisted_2, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.page.name), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", HotspotPageViewvue_type_template_id_7c2381fb_ts_true_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
    src: _ctx.page.backgroundImgSrc,
    class: "page-image"
  }, null, 8, HotspotPageViewvue_type_template_id_7c2381fb_ts_true_hoisted_4)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("ul", HotspotPageViewvue_type_template_id_7c2381fb_ts_true_hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */._)("li", HotspotPageViewvue_type_template_id_7c2381fb_ts_true_hoisted_6, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
    class: "icon grow gsapPop",
    icon: "arrow",
    color1: _ctx.getIconColor1,
    color2: _ctx.getIconColor2,
    color3: _ctx.getIconColor3
  }, null, 8, ["color1", "color2", "color3"]), HotspotPageViewvue_type_template_id_7c2381fb_ts_true_hoisted_7]), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.page.links, (link, index) => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("li", {
      class: (0,shared_esm_bundler/* normalizeClass */.C_)(_ctx.getItemClass(index, _ctx.page.links.length)),
      key: index
    }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
      onClick: $event => _ctx.selectLink(link),
      class: "icon grow rotate gsapPop",
      icon: "arrow",
      color1: _ctx.getIconColor1,
      color2: _ctx.getIconColor2,
      color3: _ctx.getIconColor3
    }, null, 8, ["onClick", "color1", "color2", "color3"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("span", HotspotPageViewvue_type_template_id_7c2381fb_ts_true_hoisted_8, (0,shared_esm_bundler/* toDisplayString */.zw)(link.text), 1)], 2);
  }), 128))])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("nav", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
    to: {
      name: 'home'
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
      class: "icon grow",
      icon: "pin",
      color1: _ctx.getIconColor1,
      color2: _ctx.getIconColor2,
      color3: _ctx.getIconColor1
    }, null, 8, ["color1", "color2", "color3"]), HotspotPageViewvue_type_template_id_7c2381fb_ts_true_hoisted_9]),
    _: 1
  })]), _ctx.selectedLink.text !== '' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_pop_up_view, {
    key: 0,
    link: _ctx.selectedLink,
    backgroundColor: _ctx.page.backgroundColor,
    onClose: _cache[0] || (_cache[0] = $event => _ctx.closeLinkView())
  }, null, 8, ["link", "backgroundColor"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)], 4);
}
;// CONCATENATED MODULE: ./src/components/HotspotPageView.vue?vue&type=template&id=7c2381fb&ts=true

;// CONCATENATED MODULE: ./src/assets/img/close.svg
var close_namespaceObject = __webpack_require__.p + "common/img/close.svg";
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PopUpView.vue?vue&type=template&id=4324ac14&ts=true


const PopUpViewvue_type_template_id_4324ac14_ts_true_hoisted_1 = {
  class: "modal"
};
const PopUpViewvue_type_template_id_4324ac14_ts_true_hoisted_2 = {
  class: "modal__wrapper"
};
const PopUpViewvue_type_template_id_4324ac14_ts_true_hoisted_3 = {
  class: "modal__container",
  role: "dialog"
};
const PopUpViewvue_type_template_id_4324ac14_ts_true_hoisted_4 = {
  class: "modal__header"
};
const PopUpViewvue_type_template_id_4324ac14_ts_true_hoisted_5 = {
  style: {
    "float": "left"
  }
};
const PopUpViewvue_type_template_id_4324ac14_ts_true_hoisted_6 = {
  class: "text"
};

const PopUpViewvue_type_template_id_4324ac14_ts_true_hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  class: "instructional-text"
}, "Please select an item below for further guidance", -1);

const PopUpViewvue_type_template_id_4324ac14_ts_true_hoisted_8 = {
  class: "modal__body",
  id: "LinkList"
};
const PopUpViewvue_type_template_id_4324ac14_ts_true_hoisted_9 = ["innerHTML"];
function PopUpViewvue_type_template_id_4324ac14_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", PopUpViewvue_type_template_id_4324ac14_ts_true_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", PopUpViewvue_type_template_id_4324ac14_ts_true_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", PopUpViewvue_type_template_id_4324ac14_ts_true_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */._)("header", PopUpViewvue_type_template_id_4324ac14_ts_true_hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", PopUpViewvue_type_template_id_4324ac14_ts_true_hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */._)("h2", PopUpViewvue_type_template_id_4324ac14_ts_true_hoisted_6, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.link.text), 1), PopUpViewvue_type_template_id_4324ac14_ts_true_hoisted_7]), (0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
    style: {
      "width": "5%",
      "height": "5%",
      "color": "#fff",
      "float": "right",
      "cursor": "pointer"
    },
    src: close_namespaceObject,
    onClick: _cache[0] || (_cache[0] = $event => _ctx.close())
  })]), (0,runtime_core_esm_bundler/* createElementVNode */._)("ul", PopUpViewvue_type_template_id_4324ac14_ts_true_hoisted_8, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.link.links, (l, index) => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("li", {
      class: "gsapSlide",
      onMouseenter: _cache[1] || (_cache[1] = //@ts-ignore
      (...args) => _ctx.enterLI && _ctx.enterLI(...args)),
      onMouseleave: _cache[2] || (_cache[2] = //@ts-ignore
      (...args) => _ctx.leaveLI && _ctx.leaveLI(...args)),
      key: index,
      style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
        backgroundColor: _ctx.backgroundColor
      })
    }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
      innerHTML: l.text
    }, null, 8, PopUpViewvue_type_template_id_4324ac14_ts_true_hoisted_9)], 36);
  }), 128))])])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(runtime_dom_esm_bundler/* Transition */.uT, {
    name: "fade"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
      class: "screen-mask",
      onClick: _cache[3] || (_cache[3] = $event => _ctx.close())
    })]),
    _: 1
  })]);
}
;// CONCATENATED MODULE: ./src/components/PopUpView.vue?vue&type=template&id=4324ac14&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PopUpView.vue?vue&type=script&lang=ts





/* harmony default export */ var PopUpViewvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "PopUpView",
  emits: ["close"],
  components: {},
  props: {
    link: {
      type: Link,
      default: new Link()
    },
    backgroundColor: String
  },

  data() {
    return {
      store: (0,vuex_esm_bundler/* useStore */.oR)(key),
      animsHaveRun: false
    };
  },

  computed: { ...(0,vuex_esm_bundler/* mapState */.rn)(["sessionConfig"])
  },

  async mounted() {
    this.playOpeningAnims();
  },

  // GSAP animation won't run on load in the mounted event so have had to put it in updated but add a flag to stop it repeating
  async updated() {
    this.playOpeningAnims();
  },

  methods: {
    close() {
      this.$emit("close");
    },

    enterLI(e) {
      gsap/* gsap.to */.p8.to(".gsapSlide", {
        opacity: 0.6,
        duration: 0.5
      });
      gsap/* gsap.to */.p8.to(e.target, {
        opacity: 1,
        duration: 0.5
      });
    },

    leaveLI(e) {
      gsap/* gsap.to */.p8.to(".gsapSlide", {
        opacity: 1,
        duration: 0.5
      });
    },

    playOpeningAnims() {
      if (this.animsHaveRun === false) {
        const tl = gsap/* gsap.timeline */.p8.timeline({
          paused: true
        });
        const modalHeaderTL = gsap/* gsap.timeline */.p8.timeline();
        modalHeaderTL.set(".modal__header", {
          opacity: 0
        });
        modalHeaderTL.to(".modal__header", {
          opacity: 1,
          ease: "power2.out",
          duration: 0.5
        });
        tl.add(modalHeaderTL);
        const arr = document.querySelectorAll(".gsapSlide");
        tl.from(arr, {
          opacity: 1,
          height: "0",
          padding: "0",
          duration: 0.5,
          stagger: {
            each: 0.1,
            grid: "auto",
            from: "start",
            axis: "y",
            ease: "power1.inOut"
          }
        }); // tl.to(".gsapSlide", { opacity: 0.8, delay: 1, duration: 0.5 });

        /*
        for (let i = 0; i < arr.length; i++) {
          const e = arr[i];
          const eTL = gsap.timeline();
          eTL.from(e, { opacity: 1, height: "0", padding: "0", ease: "power2.in", duration: 0.2 });
          eTL.to(e.children, { opacity: 1, ease: "power2.in", duration: 0.3 });
          tl.add(eTL);
        }
        */

        tl.play();
        this.animsHaveRun = true;
      }
    }

  }
}));
;// CONCATENATED MODULE: ./src/components/PopUpView.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PopUpView.vue?vue&type=style&index=0&id=4324ac14&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/PopUpView.vue?vue&type=style&index=0&id=4324ac14&lang=scss

;// CONCATENATED MODULE: ./src/components/PopUpView.vue




;


const PopUpView_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(PopUpViewvue_type_script_lang_ts, [['render',PopUpViewvue_type_template_id_4324ac14_ts_true_render]])

/* harmony default export */ var PopUpView = (PopUpView_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HotspotPageView.vue?vue&type=script&lang=ts







 // import SmallHotspotPageView from "./SmallHotspotPageView.vue";

/* harmony default export */ var HotspotPageViewvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "HotspotPageView",
  components: {
    SvgIcon: SvgIcon,
    PopUpView: PopUpView
  },
  props: {
    pageName: String
  },

  data() {
    return {
      store: (0,vuex_esm_bundler/* useStore */.oR)(key),
      page: new HotspotPage(),
      selectedLink: new Link(),
      animsHaveRun: false
    };
  },

  computed: { ...(0,vuex_esm_bundler/* mapState */.rn)(["sessionConfig", "viewMode"]),

    getIconColor1() {
      // return Utils.lightenDarkenColor(this.page.backgroundColour, -50);
      return this.page.iconColor1;
    },

    getIconColor2() {
      return this.page.iconColor2;
    },

    getIconColor3() {
      return this.page.iconColor3;
    }

  },

  async mounted() {
    this.page = this.sessionConfig.hotspotPages.find(x => x.name === this.pageName);

    if (!this.page) {
      alert("No matching page found: " + this.pageName);
    }
  },

  // GSAP animation won't run on load in the mounted event so have had to put it in updated but add a flag to stop it repeating
  async updated() {
    this.playOpeningAnims();
  },

  methods: {
    playOpeningAnims() {
      if (this.animsHaveRun === false) {
        // create a collection of pointer icons, so we can animate them in the desired order

        /*
        const topIcon = document.querySelectorAll(".top>.icon");
        const leftIcons = document.querySelectorAll(".left>.icon");
        const rightIcons = document.querySelectorAll(".right>.icon");
        */
        // const arr = [...leftIcons].concat([...topIcon].concat([...rightIcons].reverse()));

        /*
        const anim = gsap.timeline({ repeat: 20 });
        const targets = arr;
        const numberOfTargets = targets.length;
                  const duration = 0.2;
        const pause = 0.2;
                  const stagger = duration + pause;
        const repeatDelay = (stagger * (numberOfTargets - 1)) + pause;
                  anim.to(arr, {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          duration: duration,
          stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay: repeatDelay
          }
        }).to(arr, {
          scale: 1.5,
          ease: "power2.out",
          duration: duration,
          stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay: repeatDelay
          }
        }).to(arr, {
          scale: 1,
          ease: "power2.out",
          duration: duration,
          stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay: repeatDelay
          }
        }, stagger);
        */
        const tl = gsap/* gsap.timeline */.p8.timeline({
          paused: true
        }); // tl.eventCallback("onComplete", () => { console.log("finished"); });

        /*
        tl.to(arr, { scale: 1, opacity: 1, stagger: 0.1, ease: "power2.out", duration: 0.2 });
        tl.to(arr, { scale: 1.5, stagger: 0.1, ease: "power2.out", duration: 0.2 });
        tl.to(arr, { scale: 1, stagger: 0.1, ease: "power2.out", duration: 0.2 });
        */

        const arr = document.querySelectorAll(".gsapPop");

        for (let i = 0; i < arr.length; i++) {
          const e = arr[i];
          const eTL = gsap/* gsap.timeline */.p8.timeline();
          eTL.set(e, {
            opacity: 1,
            scale: 0
          });
          eTL.to(e, {
            scale: 1,
            ease: "power2.out",
            duration: 0.1
          });
          eTL.to(e, {
            scale: 4,
            ease: "power2.out",
            duration: 0.1
          });
          eTL.to(e, {
            scale: 1,
            ease: "power2.out",
            duration: 0.1
          });
          tl.add(eTL);
        } // const itemText = document.querySelectorAll(".circle-links .text");


        tl.to(".circle-links .text", {
          opacity: 1,
          duration: 1.5
        });
        tl.play();
        this.animsHaveRun = true;
      }
    },

    selectLink(link) {
      this.selectedLink = link;
    },

    closeLinkView() {
      this.selectedLink = new Link();
    },

    getItemClass(index, totalSize) {
      let leftRight = "left";
      const workingIndex = index + 1;

      if (workingIndex % 2 === 0) {
        leftRight = "right";
      }

      return leftRight + " " + "side-5-" + Math.round(workingIndex / 2);
    }
    /*
    selectPopUp () {
      // return page popups, this code below is just for test/demo purposes
      // this.page.popups
      const p = new PopUp();
      p.label = "Commission public health services for children aged 0-19 to include addressing smoking with women (including pregnant women) and families";
      p.items = new Array<PopUpItem>();
            let item = new PopUpItem();
      item.body = "Institute of Health Visiting â€“ effects of smoking on your child's health";
      item.url = "https://ihv.org.uk/for-health-visitors/resources-for-members/resource/ihv-tips-for-parents/transition-to-parenthood-and-the-early-weeks/the-effects-of-smoking-on-your-childs-health";
      p.items.push(item);
            item = new PopUpItem();
      item.body = "Smoking in Pregnancy Challenge Group resources on Health Visiting and relapse prevention";
      item.url = "https://smokefreeaction.org.uk/smokefree-nhs/smoking-in-pregnancy-challenge-group/smoking-in-pregnancy-challenge-group-resources/health-visiting-and-relapse-prevention";
      p.items.push(item);
            item = new PopUpItem();
      item.body = "PHE early years and school nurse programme High Impact Areas - Transition to Parenthood";
      item.url = "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/424443/High_Impact_Area_1_V2.pdf";
      p.items.push(item);
            item = new PopUpItem();
      item.body = "Use Parent Held Record or 'red book' to provide information on smoking";
      item.url = "https://www.rcpch.ac.uk/resources/personal-child-health-record-pchr";
      p.items.push(item);
            item = new PopUpItem();
      item.body = "Resources for Health Visitors on supporting a smokefree pregnancy on e-learning for healthcare";
      item.url = "https://portal.e-lfh.org.uk/Catalogue/Index?HierarchyId=0_41043&programmeId=41043";
      p.items.push(item);
            item = new PopUpItem();
      item.body = "Healthy Child Programme and commissioning resources";
      item.items = new Array<PopUpItem>();
      let subItem = new PopUpItem();
      subItem.body = "Health child programme 0-5";
      subItem.url = "https://www.gov.uk/government/publications/healthy-child-programme-pregnancy-and-the-first-5-years-of-life";
      item.items.push(subItem);
      subItem = new PopUpItem();
      subItem.body = "Health child programme 5-19";
      subItem.url = "https://www.gov.uk/government/publications/healthy-child-programme-5-to-19-years-old";
      item.items.push(subItem);
      subItem = new PopUpItem();
      subItem.body = "Commissioning Guides";
      subItem.url = "https://www.gov.uk/government/publications/healthy-child-programme-0-to-19-health-visitor-and-school-nurse-commissioning";
      item.items.push(subItem);
            p.items.push(item);
            this.selectedPopUp = p;
    }
    */


  }
}));
;// CONCATENATED MODULE: ./src/components/HotspotPageView.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HotspotPageView.vue?vue&type=style&index=0&id=7c2381fb&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/HotspotPageView.vue?vue&type=style&index=0&id=7c2381fb&lang=scss

;// CONCATENATED MODULE: ./src/components/HotspotPageView.vue




;


const HotspotPageView_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(HotspotPageViewvue_type_script_lang_ts, [['render',HotspotPageViewvue_type_template_id_7c2381fb_ts_true_render]])

/* harmony default export */ var HotspotPageView = (HotspotPageView_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ErrorPageView.vue?vue&type=template&id=4ca7104a&ts=true


const ErrorPageViewvue_type_template_id_4ca7104a_ts_true_hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h1", null, "Oops! We are very sorry but something unexpected happened.", -1);

const ErrorPageViewvue_type_template_id_4ca7104a_ts_true_hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Go back to home page. ");

function ErrorPageViewvue_type_template_id_4ca7104a_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, [ErrorPageViewvue_type_template_id_4ca7104a_ts_true_hoisted_1, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
    class: "simpleLink",
    to: {
      name: 'home'
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [ErrorPageViewvue_type_template_id_4ca7104a_ts_true_hoisted_2]),
    _: 1
  })])], 64);
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ErrorPageView.vue?vue&type=script&lang=ts

/* harmony default export */ var ErrorPageViewvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "ErrorPageView",
  components: {},
  methods: {}
}));
;// CONCATENATED MODULE: ./src/components/ErrorPageView.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ErrorPageView.vue?vue&type=style&index=0&id=4ca7104a&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/ErrorPageView.vue?vue&type=style&index=0&id=4ca7104a&lang=scss

;// CONCATENATED MODULE: ./src/components/ErrorPageView.vue




;


const ErrorPageView_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ErrorPageViewvue_type_script_lang_ts, [['render',ErrorPageViewvue_type_template_id_4ca7104a_ts_true_render]])

/* harmony default export */ var ErrorPageView = (ErrorPageView_exports_);
;// CONCATENATED MODULE: ./src/router/index.ts




const routes = [{
  path: "/",
  name: "home",
  component: HomeView
}, // dynamic segments start with a colon
{
  path: "/page/:pageName",
  name: "hotspotPage",
  props: true,
  component: HotspotPageView
}, {
  path: "/error",
  name: "errorPage",
  component: ErrorPageView
}, {
  path: "/:catchAll(.*)",
  name: "NotFound",
  redirect: "/" // component: NotFound
  // component: () => import("../views/PageNotFound.vue")

}
/*
{
  path: "/about",
  name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import("../views/AboutView.vue")
} */
];
const router = (0,vue_router_esm_bundler/* createRouter */.p7)({
  history: (0,vue_router_esm_bundler/* createWebHashHistory */.r5)(),
  routes
});
/* harmony default export */ var src_router = (router);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=ts






/* harmony default export */ var Appvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "App",
  components: {
    LoadingScreen: LoadingScreen
  },
  props: {},

  data() {
    return {
      store: (0,vuex_esm_bundler/* useStore */.oR)(key)
    };
  },

  computed: { ...(0,vuex_esm_bundler/* mapState */.rn)(["sessionConfig", "loadingStatus"])
  },

  async created() {
    try {
      await this.store.dispatch("configureSession", loConfig);
    } catch (e) {
      this.store.dispatch("setLoadingStatus", "loaded");
      Log.Error("Error loading configuration", e);
      src_router.push({
        name: "errorPage"
      });
    }
  },

  methods: {}
}));
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=e84c6272&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/App.vue?vue&type=style&index=0&id=e84c6272&lang=scss

;// CONCATENATED MODULE: ./src/App.vue




;


const App_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Appvue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var App = (App_exports_);
;// CONCATENATED MODULE: ./src/main.ts




(0,runtime_dom_esm_bundler/* createApp */.ri)(App).use(store, key).use(src_router).mount("#app");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktownscapes_vue"] = self["webpackChunktownscapes_vue"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], function() { return __webpack_require__(8644); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map