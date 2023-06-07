/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 806:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(9242);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3396);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=0d22a264&ts=true

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
;// CONCATENATED MODULE: ./src/models/Link.ts

class Link {
  constructor() {
    (0,defineProperty/* default */.Z)(this, "id", "");

    (0,defineProperty/* default */.Z)(this, "isOverviewLink", false);

    (0,defineProperty/* default */.Z)(this, "text", "");

    (0,defineProperty/* default */.Z)(this, "isAccordion", false);

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
;// CONCATENATED MODULE: ./src/models/StageAsset.ts


class StageAsset {
  constructor() {
    (0,defineProperty/* default */.Z)(this, "id", "");

    (0,defineProperty/* default */.Z)(this, "name", "");

    (0,defineProperty/* default */.Z)(this, "src", "");

    (0,defineProperty/* default */.Z)(this, "altText", "");

    (0,defineProperty/* default */.Z)(this, "left", "");

    (0,defineProperty/* default */.Z)(this, "top", "0");

    (0,defineProperty/* default */.Z)(this, "z", 0);

    (0,defineProperty/* default */.Z)(this, "width", "150px");

    (0,defineProperty/* default */.Z)(this, "backgroundColor", "transparent");

    (0,defineProperty/* default */.Z)(this, "disabled", false);

    (0,defineProperty/* default */.Z)(this, "linkIdentifier", "");

    (0,defineProperty/* default */.Z)(this, "timeline", new StageTimeline());
  }

}
;// CONCATENATED MODULE: ./src/models/StageBackground.ts

class StageBackground {
  constructor() {
    (0,defineProperty/* default */.Z)(this, "id", "");

    (0,defineProperty/* default */.Z)(this, "name", "");

    (0,defineProperty/* default */.Z)(this, "src", "");

    (0,defineProperty/* default */.Z)(this, "altText", "");

    (0,defineProperty/* default */.Z)(this, "left", "");

    (0,defineProperty/* default */.Z)(this, "top", "0");

    (0,defineProperty/* default */.Z)(this, "z", 0);

    (0,defineProperty/* default */.Z)(this, "width", "150px");

    (0,defineProperty/* default */.Z)(this, "height", "150px");

    (0,defineProperty/* default */.Z)(this, "backgroundColor", "transparent");
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
  }
  /*
  public static createAccordion () {
      }
  */
  // loop through a config link, creating all its sublinks


  static createLink(configLink) {
    const l = new Link();
    configLink.components.forEach(x => {
      if (x["@name"] === "linkText" && x.contents && x.contents.length > 0) {
        l.id = x["@label"];
        l.text = x.contents;
      } else if (x["@name"] === "sublinks" && x.components) {
        x.components.forEach(sublinksComponent => {
          if (sublinksComponent["@name"] === "sublink" && sublinksComponent.components) {
            const subLink = new Link(); // does this contain accordion items?

            sublinksComponent.components.forEach(b => {
              if (b["@name"] === "subLinkText" && b.contents && b.contents.length > 0) {
                subLink.id = b["@label"];
                subLink.text = b.contents;
              } else if (b["@name"] === "accordionItems" && b.components.length > 0) {
                subLink.isAccordion = true;
                b.components.forEach(accordionItem => {
                  const accLink = new Link();
                  accLink.id = accordionItem["@label"];
                  accLink.text = accordionItem.contents;
                  subLink.links.push(accLink);
                });
              }
            });
            l.links.push(subLink);
          }
        });
      } // l.links.push(Factory.createLink(x));

    });
    return l;
  }
  /*
  public static createBaseAsset (id: string, name: string, width: string, left: string, top: string, zIndex: number, disabled: boolean): AssetInterface {
    const a = new BaseAsset();
    a.id = id;
    a.name = name === "" ? "Not specified" : name;
    // a.height = height;
    a.width = width;
    a.left = left;
    a.top = top;
    a.z = zIndex;
    a.disabled = disabled;
        return a;
  }
  */


  static createBackground(fileAsset) {
    const stageBackground = new StageBackground();
    stageBackground.id = fileAsset["@label"];
    stageBackground.name = fileAsset["@description"] === "" ? "Not specified" : fileAsset["@description"];
    stageBackground.left = fileAsset["@left"];
    stageBackground.top = fileAsset["@top"];
    stageBackground.width = fileAsset["@width"];
    stageBackground.height = fileAsset["@height"];
    stageBackground.z = fileAsset["@zindex"];

    if (fileAsset["@imagealt"]) {
      stageBackground.altText = fileAsset["@imagealt"];
    }

    fileAsset.components.forEach(fa => {
      // image inside stage asset
      if (fa["@name"] === "image" && fa.components) {
        // get href for image
        fa.components.forEach(secondC => {
          if (secondC["@href"]) {
            // stageAsset.src = "/session/1/TWNSCPS_Session/1/" + secondC["@href"];
            stageBackground.src = "./" + secondC["@href"];
          }
        });
      }
    });
    return stageBackground;
  }

  static createStageAsset(fileAsset) {
    const stageAsset = new StageAsset();
    console.log(fileAsset);
    const geometry = fileAsset["@geometry"];

    if (geometry && geometry !== "") {
      const geometryArr = geometry.split(",");

      if (geometryArr.length === 4) {
        // (left, top, scale (width), z-index)
        stageAsset.id = fileAsset["@label"];
        stageAsset.name = fileAsset["@description"] === "" ? "Not specified" : fileAsset["@description"];
        stageAsset.left = geometryArr[0];
        stageAsset.top = geometryArr[1];
        stageAsset.width = geometryArr[2];
        stageAsset.z = parseInt(geometryArr[3], 10);
        stageAsset.disabled = fileAsset["@isdisabled"] === "yes";
      }
    }

    if (fileAsset["@hotspotpagename"]) {
      stageAsset.linkIdentifier = encodeURI(fileAsset["@hotspotpagename"].toLowerCase().replaceAll(" ", "-"));
    }

    if (fileAsset["@imagealt"]) {
      stageAsset.altText = fileAsset["@imagealt"];
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
        stageAsset.timeline.repeat = parseInt(fa["@repeat"], 10);
        stageAsset.timeline.repeatDelay = parseFloat(fa["@repeatDelay"]);
        stageAsset.timeline.yoyo = fa["@yoyo"].toLowerCase() === "yes"; // for each tween

        fa.components.forEach(configTween => {
          // create tween
          const tween = Factory.createTween(configTween["@type"], parseFloat(configTween["@duration"]), parseFloat(configTween["@delay"]), parseInt(configTween["@repeat"], 10), configTween["@ease"], configTween["@easeType"], configTween["@yoyo"]); // animation properties
          // change key value of animatedProperties if any of the key values are:
          // flip horizontally - scaleX -1
          // flip vertically - scaleY -1
          // scale width - scaleX
          // scale height - scaleY
          // scale height and width - change to scaleX and scaleY

          configTween.components.forEach(configProp => {
            // create animation property
            // tween["@ease"];
            if (configProp["@property"]) {
              let propValue = "";

              if (configProp["@value"]) {
                propValue = configProp["@value"];
              }

              let propType = configProp["@property"];

              if (propType.toLowerCase() === "scale height and width") {
                tween.animatedProperties.set("scaleX", propValue);
                tween.animatedProperties.set("scaleY", propValue);
              } else {
                switch (propType.toLowerCase()) {
                  case "flip horizontally":
                    propType = "scaleX";
                    propValue = "-1";
                    break;

                  case "flip vertically":
                    propType = "scaleY";
                    propValue = "-1";
                    break;

                  case "scale width":
                    propType = "scaleX";
                    break;

                  case "scale height":
                    propType = "scaleY";
                    break;
                }

                tween.animatedProperties.set(propType, propValue);
              }
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
;// CONCATENATED MODULE: ./src/models/Information.ts

class Information {
  constructor() {
    (0,defineProperty/* default */.Z)(this, "id", "");

    (0,defineProperty/* default */.Z)(this, "title", "");

    (0,defineProperty/* default */.Z)(this, "text", "");
  }

}
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
  }

}
;// CONCATENATED MODULE: ./src/models/SessionConfig.ts





class SessionConfig {
  constructor() {
    (0,defineProperty/* default */.Z)(this, "title", "");

    (0,defineProperty/* default */.Z)(this, "editorOn", false);

    (0,defineProperty/* default */.Z)(this, "info", new Information());

    (0,defineProperty/* default */.Z)(this, "overview", new Link());

    (0,defineProperty/* default */.Z)(this, "stage", new Stage());

    (0,defineProperty/* default */.Z)(this, "stageBackground", new StageBackground());

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
    hotspotIndicatorsEnabled: false,
    stageLeftPosition: "0%",
    viewMode: "normal"
  },
  getters: {},
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

    SET_STAGE_LEFT_POSITION(state, value) {
      state.stageLeftPosition = value;
    },

    ENABLE_ANIMATIONS(state, value) {
      state.animationsEnabled = value;
    },

    TOGGLE_ANIMATIONS(state, value) {
      state.animationsEnabled = value;
    },

    ENABLE_HOTSPOTINDICATORS(state, value) {
      state.hotspotIndicatorsEnabled = value;
    },

    TOGGLE_HOTSPOTINDICATORS(state, value) {
      state.hotspotIndicatorsEnabled = value;
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

    setStageLeftPosition({
      commit
    }, value) {
      commit("SET_STAGE_LEFT_POSITION", value);
    },

    enableAnimations({
      commit
    }, value) {
      commit("ENABLE_ANIMATIONS", value);
    },

    async toggleAnimations({
      commit
    }) {
      commit("TOGGLE_ANIMATIONS", !this.state.animationsEnabled);
    },

    enableHotspotIndicators({
      commit
    }, value) {
      commit("ENABLE_HOTSPOTINDICATORS", value);
    },

    async toggleHotspotIndicators({
      commit
    }) {
      commit("TOGGLE_HOTSPOTINDICATORS", !this.state.hotspotIndicatorsEnabled);
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
    },

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
      config.title = fileConfig.root["@description"];
      config.editorOn = fileConfig.root["@editoron"] !== "no"; // config.editorOn = true;

      this.dispatch("enableHotspotIndicators", fileConfig.root["@hotspotindicatorshowonstart"] === "yes");
      this.dispatch("enableAnimations", true);
      config.stage.hotSpotIndicatorColour = fileConfig.root["@hotspotindicatorcolour"];
      config.stage.scrollButtonsEnabled = fileConfig.root["@scrollbuttonsenabled"] === "yes";

      if (config.stage.scrollButtonsEnabled) {
        config.stage.scrollButtonColour = fileConfig.root["@scrollbuttoncolour"];
        config.stage.scrollButtonStrokeColour = fileConfig.root["@scrollbuttonstrokecolour"];
      }

      config.stage.height = fileConfig.root["@height"];
      config.stage.width = fileConfig.root["@width"];
      config.stage.backgroundColor = fileConfig.root["@stagebackgroundcolor"]; // config.stage.leftStartPosition = fileConfig.root["@stagestartposition"];
      // config.stage.leftStartPosition = "-133%";

      this.dispatch("setStageLeftPosition", fileConfig.root["@stagestartposition"]); //this.dispatch("setStageLeftPosition", "-20%");

      config.stage.footerColor = fileConfig.root["@footerbackgroundcolor"];
      config.stage.footerHeight = fileConfig.root["@footerheight"];
      const info = new Information();
      info.title = fileConfig.root["@informationbuttontext"];

      if (fileConfig.root.information) {
        info.text = fileConfig.root.information.contents;
      }

      config.info = info;
      const l = new Link();
      l.text = "Overview";
      const subLink = new Link();
      subLink.isOverviewLink = true;

      if (fileConfig.root.overview) {
        subLink.text = fileConfig.root.overview.contents;
      }

      l.links.push(subLink);
      config.overview = l;
      const backgroundImage = fileConfig.root.backgroundImage;
      const stageBackground = Factory.createBackground(backgroundImage);
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
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeView.vue?vue&type=template&id=7fb3dfa6&ts=true

const HomeViewvue_type_template_id_7fb3dfa6_ts_true_hoisted_1 = {
  class: "stage-control-panel"
};

const HomeViewvue_type_template_id_7fb3dfa6_ts_true_hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "sr-only"
}, "Switch to accessible view", -1);

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "",
  "aria-hidden": "true"
}, "Accessible view ", -1);

const _hoisted_4 = [HomeViewvue_type_template_id_7fb3dfa6_ts_true_hoisted_2, _hoisted_3];

const _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "sr-only"
}, "Toggle animations on and off", -1);

const HomeViewvue_type_template_id_7fb3dfa6_ts_true_hoisted_6 = {
  key: 0,
  "aria-hidden": "true"
};
const _hoisted_7 = {
  key: 1,
  "aria-hidden": "true"
};

const _hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "sr-only"
}, "Toggle hotspot indicator on and off", -1);

const _hoisted_9 = {
  key: 0,
  "aria-hidden": "true"
};
const _hoisted_10 = {
  key: 1,
  "aria-hidden": "true"
};

const _hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "sr-only"
}, "Switch to accessible view", -1);

const _hoisted_12 = {
  key: 5,
  class: "xy-position"
};
const _hoisted_13 = {
  class: "sr-only"
};
const _hoisted_14 = ["id"];
const _hoisted_15 = ["src", "alt"];
const _hoisted_16 = {
  key: 0
};

const _hoisted_17 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "sr-only"
}, "Scroll stage to the left", -1);

const _hoisted_18 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "sr-only"
}, "Scroll stage to the right", -1);

const _hoisted_19 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Asset Information ");

const _hoisted_20 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Here are the details for all the assets on the stage. ");

const _hoisted_21 = {
  id: "assetData"
};

const _hoisted_22 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("thead", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("tr", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("th", null, "Name"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("th", null, "Left"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("th", null, "Top"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("th", null, "Scale"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("th", null, "Z-Index"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("th", null, "Background Colour"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("th", null, "Hotspot Page"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("th", null, "Timeline?"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("th", null, "Copy Geometry")])], -1);

const _hoisted_23 = ["onClick"];
const _hoisted_24 = {
  class: "info-modal-contents"
};
const _hoisted_25 = ["innerHTML"];
function HomeViewvue_type_template_id_7fb3dfa6_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_small_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("small-view");

  const _component_svg_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("svg-icon");

  const _component_asset_component = (0,runtime_core_esm_bundler/* resolveComponent */.up)("asset-component");

  const _component_modal_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("modal-view");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_small_view, {
    class: (0,shared_esm_bundler/* normalizeClass */.C_)({
      'display': _ctx.viewMode === 'smallOnly',
      'editor-on': _ctx.sessionConfig.editorOn === true
    })
  }, null, 8, ["class"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
    id: "containerWrapper",
    class: (0,shared_esm_bundler/* normalizeClass */.C_)({
      'display-none': _ctx.viewMode !== 'normal',
      'editor-on': _ctx.sessionConfig.editorOn === true
    })
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", HomeViewvue_type_template_id_7fb3dfa6_ts_true_hoisted_1, [!_ctx.sessionConfig.editorOn ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = $event => _ctx.setSimpleViewMode()),
    class: "hide controlBtn"
  }, _hoisted_4)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    onClick: _cache[1] || (_cache[1] = $event => _ctx.stopStartAnimations()),
    class: "controlBtn hide"
  }, [_hoisted_5, _ctx.animationsExist && _ctx.animationsEnabled === true ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("span", HomeViewvue_type_template_id_7fb3dfa6_ts_true_hoisted_6, "Stop animations ")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.animationsExist && _ctx.animationsEnabled === false ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("span", _hoisted_7, "Start animations ")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]), !_ctx.sessionConfig.editorOn ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
    key: 1,
    onClick: _cache[2] || (_cache[2] = $event => _ctx.toggleHotspotIndicator()),
    class: "hide controlBtn"
  }, [_hoisted_8, _ctx.hotspotIndicatorsEnabled === true ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("span", _hoisted_9, "Hide selectable areas ")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.hotspotIndicatorsEnabled === false ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("span", _hoisted_10, "Show selectable areas ")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.sessionConfig.info.title && _ctx.sessionConfig.info.text ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
    key: 2,
    class: "hide controlBtn",
    onClick: _cache[3] || (_cache[3] = $event => _ctx.setVisibleModal('information'))
  }, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.sessionConfig.info.title), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), !_ctx.sessionConfig.editorOn ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
    key: 3,
    onClick: _cache[4] || (_cache[4] = $event => _ctx.setSimpleViewMode()),
    class: "hide svg-btn"
  }, [_hoisted_11, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
    class: "",
    icon: "accessiblityOn",
    "aria-hidden": "true",
    color1: _ctx.sessionConfig.stage.scrollButtonColour
  }, null, 8, ["color1"])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.sessionConfig.editorOn === true ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
    key: 4,
    style: {
      "padding": "0.5em"
    },
    onClick: _cache[5] || (_cache[5] = $event => _ctx.setVisibleModal('assetData'))
  }, "Show Asset Info")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.sessionConfig.editorOn === true ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_12, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.xPos) + "%, " + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.yPos) + "% ", 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
    id: "container",
    class: (0,shared_esm_bundler/* normalizeClass */.C_)({
      'drag-zone': _ctx.sessionConfig.editorOn === true
    }),
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      width: _ctx.sessionConfig.stage.width,
      height: _ctx.sessionConfig.stage.height,
      backgroundColor: _ctx.sessionConfig.stage.backgroundColor
    })
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_13, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.sessionConfig.title), 1), _ctx.sessionConfig.stageBackground && _ctx.sessionConfig.stageBackground.id !== '' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
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
  }, null, 8, _hoisted_15)], 44, _hoisted_14)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.sessionConfig.assets, a => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, {
      key: a.id
    }, [!a.disabled ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_asset_component, {
      key: 0,
      onOnMoveLeft: $event => _ctx.onMoveLeft(a, _ctx.smallMoveValue),
      onOnLargeMoveLeft: $event => _ctx.onMoveLeft(a, _ctx.largeMoveValue),
      onOnMoveRight: $event => _ctx.onMoveRight(a, _ctx.smallMoveValue),
      onOnLargeMoveRight: $event => _ctx.onMoveRight(a, _ctx.largeMoveValue),
      onOnMoveUp: $event => _ctx.onMoveUp(a, _ctx.smallMoveValue),
      onOnLargeMoveUp: $event => _ctx.onMoveUp(a, _ctx.largeMoveValue),
      onOnMoveDown: $event => _ctx.onMoveDown(a, _ctx.smallMoveValue),
      onOnLargeMoveDown: $event => _ctx.onMoveDown(a, _ctx.largeMoveValue),
      onOnMinus: $event => _ctx.onDecreaseSize(a),
      onOnPlus: $event => _ctx.onIncreaseSize(a),
      asset: a,
      "editor-enabled": _ctx.sessionConfig.editorOn,
      "indicator-colour": _ctx.sessionConfig.stage.hotSpotIndicatorColour
    }, null, 8, ["onOnMoveLeft", "onOnLargeMoveLeft", "onOnMoveRight", "onOnLargeMoveRight", "onOnMoveUp", "onOnLargeMoveUp", "onOnMoveDown", "onOnLargeMoveDown", "onOnMinus", "onOnPlus", "asset", "editor-enabled", "indicator-colour"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)], 64);
  }), 128))], 6), _ctx.sessionConfig.stage.scrollButtonsEnabled ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_16, [(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    id: "scrollButtonLeft",
    class: "hide scroll-button rotate",
    onClick: _cache[10] || (_cache[10] = $event => _ctx.scrollStageLeft())
  }, [_hoisted_17, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
    "aria-hidden": "true",
    class: "rotate",
    icon: "scrollArrow",
    color1: _ctx.sessionConfig.stage.scrollButtonStrokeColour,
    color2: _ctx.sessionConfig.stage.scrollButtonColour
  }, null, 8, ["color1", "color2"])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    id: "scrollButtonRight",
    class: "hide scroll-button",
    onClick: _cache[11] || (_cache[11] = $event => _ctx.scrollStageRight())
  }, [_hoisted_18, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
    "aria-hidden": "true",
    icon: "scrollArrow",
    color1: _ctx.sessionConfig.stage.scrollButtonStrokeColour,
    color2: _ctx.sessionConfig.stage.scrollButtonColour
  }, null, 8, ["color1", "color2"])])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createElementVNode */._)("footer", {
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
      header: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_19]),
      body: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, [_hoisted_20, (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
        onClick: _cache[12] || (_cache[12] = $event => _ctx.copyToClipboard())
      }, "Copy all to clipboard")]), (0,runtime_core_esm_bundler/* createElementVNode */._)("table", _hoisted_21, [_hoisted_22, (0,runtime_core_esm_bundler/* createElementVNode */._)("tbody", null, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.sessionConfig.assets, a => {
        return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("tr", {
          key: a
        }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(a.name), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(a.left), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(a.top), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(a.width), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(a.z), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(a.backgroundColor), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(a.linkIdentifier), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(a.timeline.tweens.length > 0 ? "Yes" : "No"), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
          onClick: $event => _ctx.copyAssetGeometryToClipboard(a)
        }, "Copy", 8, _hoisted_23)])]);
      }), 128))])])]),
      _: 1
    })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
    _: 1
  }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(runtime_dom_esm_bundler/* Transition */.uT, {
    name: "slide"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_ctx.visibleModal == 'information' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_modal_view, {
      key: 0,
      onClose: _cache[14] || (_cache[14] = $event => _ctx.setVisibleModal(''))
    }, {
      header: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("h2", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.sessionConfig.info.title), 1)])]),
      body: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_24, [(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
        innerHTML: _ctx.sessionConfig.info.text
      }, null, 8, _hoisted_25)])]),
      _: 1
    })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
    _: 1
  })], 64);
}
;// CONCATENATED MODULE: ./src/components/HomeView.vue?vue&type=template&id=7fb3dfa6&ts=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__(1703);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ModalView.vue?vue&type=template&id=452dd254&scoped=true


const ModalViewvue_type_template_id_452dd254_scoped_true_withScopeId = n => (_pushScopeId("data-v-452dd254"), n = n(), _popScopeId(), n);

const ModalViewvue_type_template_id_452dd254_scoped_true_hoisted_1 = {
  class: "modal"
};
const ModalViewvue_type_template_id_452dd254_scoped_true_hoisted_2 = {
  class: "modal__wrapper"
};
const ModalViewvue_type_template_id_452dd254_scoped_true_hoisted_3 = {
  class: "modal__header",
  id: "modalTitle"
};
const ModalViewvue_type_template_id_452dd254_scoped_true_hoisted_4 = {
  class: "modal__body",
  id: "modalDescription"
};
const ModalViewvue_type_template_id_452dd254_scoped_true_hoisted_5 = {
  class: "modal__footer"
};
function ModalViewvue_type_template_id_452dd254_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("svg-icon");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", ModalViewvue_type_template_id_452dd254_scoped_true_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", ModalViewvue_type_template_id_452dd254_scoped_true_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C_)(['modal__container', $props.modalSize]),
    role: "dialog",
    "aria-labelledby": "modalTitle",
    "aria-describedby": "modalDescription"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("header", ModalViewvue_type_template_id_452dd254_scoped_true_hoisted_3, [(0,runtime_core_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "header", {}, undefined, true), (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    id: "closeModal",
    class: "hide",
    onClick: _cache[0] || (_cache[0] = $event => $options.close()),
    onKeydownCapture: _cache[1] || (_cache[1] = (0,runtime_dom_esm_bundler/* withKeys */.D2)((0,runtime_dom_esm_bundler/* withModifiers */.iM)(() => {}, ["shift", "prevent", "stop"]), ["tab"]))
  }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
    class: "icon close spin",
    icon: "close",
    color1: "#000",
    color2: "#fff",
    color3: "#000"
  })], 32)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ModalViewvue_type_template_id_452dd254_scoped_true_hoisted_4, [(0,runtime_core_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "body", {}, undefined, true)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ModalViewvue_type_template_id_452dd254_scoped_true_hoisted_5, [(0,runtime_core_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "footer", {}, undefined, true)])], 2)])]);
}
;// CONCATENATED MODULE: ./src/components/ModalView.vue?vue&type=template&id=452dd254&scoped=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SvgIcon.vue?vue&type=template&id=7a75d2d0&ts=true

const SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_1 = {
  key: 0,
  tabindex: "-1",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 299.58 299.58",
  "xml:space": "preserve"
};
const SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_2 = {
  key: 1,
  tabindex: "-1",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 299.58 299.58",
  "xml:space": "preserve"
};
const SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_3 = {
  key: 2,
  height: "50",
  width: "70",
  x: "0px",
  y: "0px",
  viewBox: "0 0 50 50",
  tabindex: "-1",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "xml:space": "preserve"
};
const SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_4 = {
  key: 3,
  tabindex: "-1",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 299.58 299.58",
  "xml:space": "preserve"
};
const SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_5 = {
  key: 4,
  tabindex: "-1",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 299.58 299.58",
  "xml:space": "preserve"
};
const SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_6 = {
  key: 5,
  tabindex: "-1",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  height: "32px",
  id: "Layer_1",
  style: {
    "enable-background": "new 0 0 16 16"
  },
  viewBox: "0 0 16 16",
  width: "32px",
  "xml:space": "preserve"
};
const SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_7 = {
  key: 6,
  tabindex: "-1",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 299.58 299.58",
  "xml:space": "preserve"
};
const SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_8 = {
  key: 7,
  tabindex: "-1",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 299.58 299.58",
  "xml:space": "preserve"
};
const SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_9 = {
  key: 8,
  tabindex: "-1",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 299.58 299.58",
  "xml:space": "preserve"
};
const SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_10 = {
  key: 9,
  tabindex: "-1",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 299.58 299.58",
  "xml:space": "preserve"
};
const SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_11 = {
  key: 10,
  tabindex: "-1",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 390 340",
  "xml:space": "preserve"
};
const SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_12 = {
  key: 11,
  tabindex: "-1",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 390 340",
  "xml:space": "preserve"
};
function SvgIconvue_type_template_id_7a75d2d0_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", null, [_ctx.icon === 'pin' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("svg", SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("circle", {
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
  }, null, 4)])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.icon === 'arrow' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("svg", SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("circle", {
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
  }, null, 4)])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.icon === 'scrollArrow' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("svg", SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    d: "M54.58,22.57,38.12,29.73,21.66,36.88a3.49,3.49,0,0,1-5.13-3.22L16.41,24H6.15c-6.2,0-6.2-9.3,0-9.3H16.41L16.53,5a3.4,3.4,0,0,1,4.89-3.22L38.12,9l16.46,7.16A3.49,3.49,0,0,1,54.58,22.57Z",
    transform: "translate(0 0)",
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color2,
      stroke: _ctx.color1
    }),
    "stroke-miterlimit": "10",
    "stroke-width": "3",
    "fill-rule": "evenodd"
  }, null, 4)])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.icon === 'back' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("svg", SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */._)("g", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color1
    }),
    d: "M62.3,47.93V352.07a4,4,0,0,0,6,3.47L331.7,203.46a4,4,0,0,0,0-6.92L68.3,44.46A4,4,0,0,0,62.3,47.93Z",
    transform: "translate(-62.3 -43.92)"
  }, null, 4)])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.icon === 'close' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("svg", SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */._)("g", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color2
    }),
    d: "M150,35c30.72,0,59.6,11.96,81.32,33.68S265,119.28,265,150s-11.96,59.6-33.68,81.32S180.72,265,150,265\r\n          s-59.6-11.96-81.32-33.68S35,180.72,35,150s11.96-59.6,33.68-81.32S119.28,35,150,35 M150,0C67.16,0,0,67.16,0,150\r\n          s67.16,150,150,150s150-67.16,150-150S232.84,0,150,0L150,0z"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color2
    }),
    d: "M175.25,150.5l27.22-27.22c6.83-6.83,6.83-17.91,0-24.75c-6.83-6.83-17.91-6.83-24.75,0l-27.22,27.22\r\n          l-27.22-27.22c-6.83-6.83-17.92-6.83-24.75,0c-6.83,6.83-6.83,17.91,0,24.75l27.22,27.22l-27.22,27.22\r\n          c-6.83,6.83-6.83,17.91,0,24.75c3.42,3.42,7.9,5.13,12.37,5.13s8.96-1.71,12.37-5.13l27.22-27.22l27.22,27.22\r\n          c3.42,3.42,7.9,5.13,12.37,5.13s8.96-1.71,12.37-5.13c6.83-6.83,6.83-17.91,0-24.75L175.25,150.5z"
  }, null, 4)])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.icon === 'home' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("svg", SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_6, [(0,runtime_core_esm_bundler/* createElementVNode */._)("g", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color2
    }),
    d: "M 15.45,7 C 13.284907,4.8667114 11.15027,2.7031192 9,0.555 8.727,0.297 8.477,0 8,0 7.523,0 7.273,0.297 7,0.555 L 0.55,7 C 0.238,7.325 0,7.562 0,8 0,8.563 0.432,9 1,9 h 1 v 7 H 6 V 9.4958678 c 2.2692475,-0.01328 1.7106562,-0.005 4,0 V 16 c 1.137173,0.03816 3.777795,0.0032 4,0.0041 V 9 h 1 C 15.568,9 16,8.563 16,8 16,7.562 15.762,7.325 15.45,7 Z"
  }, null, 4)])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.icon === 'accessiblityOff' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("svg", SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_7, [(0,runtime_core_esm_bundler/* createElementVNode */._)("g", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("circle", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color1
    }),
    cx: "157.22",
    cy: "34.9",
    r: "34.9"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color1
    }),
    d: "M157.94,152.73V218a31.45,31.45,0,0,1-.67,6.42L127.88,364.55a16.14,16.14,0,0,0,31.26,7.92l35.12-117.73a6,6,0,0,1,11.48,0l35.12,117.73a16.14,16.14,0,0,0,31.26-7.92l-14.87-70.89-99.36-141.9C157.91,152.08,157.94,152.4,157.94,152.73Z",
    transform: "translate(-42.78 -16)"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color1
    }),
    d: "M57.25,97.74a14.47,14.47,0,0,0-1.56,28.85l87.32,9.5a17.08,17.08,0,0,1,4.8,1.27L120.07,97.74Z",
    transform: "translate(-42.78 -16)"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color1
    }),
    d: "M242.06,152.73A16.75,16.75,0,0,1,257,136.09l87.32-9.5a14.47,14.47,0,0,0-1.56-28.85h-176l75.33,107.59Z",
    transform: "translate(-42.78 -16)"
  }, null, 4)])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.icon === 'accessiblityOn' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("svg", SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_8, [(0,runtime_core_esm_bundler/* createElementVNode */._)("g", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("circle", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color1
    }),
    cx: "157.22",
    cy: "34.9",
    r: "34.9"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color1
    }),
    d: "M240.86,372.47a16.13,16.13,0,0,0,18.57,11.23h0a16.14,16.14,0,0,0,12.69-19.15L242.73,224.42a31.45,31.45,0,0,1-.67-6.42V152.73A16.75,16.75,0,0,1,257,136.09l87.32-9.5a14.48,14.48,0,0,0,12.91-14.38h0a14.47,14.47,0,0,0-14.47-14.47H57.25a14.47,14.47,0,0,0-14.47,14.47h0a14.48,14.48,0,0,0,12.91,14.38l87.32,9.5a16.75,16.75,0,0,1,14.93,16.64V218a31.45,31.45,0,0,1-.67,6.42L127.88,364.55a16.14,16.14,0,0,0,12.69,19.15h0a16.13,16.13,0,0,0,18.57-11.23l35.12-117.73a6,6,0,0,1,11.48,0Z",
    transform: "translate(-42.78 -16)"
  }, null, 4)])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.icon === 'stopAnimations' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("svg", SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_9, [(0,runtime_core_esm_bundler/* createElementVNode */._)("g", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("rect", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color1
    }),
    width: "318",
    height: "318",
    rx: "6"
  }, null, 4)])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.icon === 'startAnimations' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("svg", SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_10, [(0,runtime_core_esm_bundler/* createElementVNode */._)("g", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color1
    }),
    d: "M62.3,47.93V352.07a4,4,0,0,0,6,3.47L331.7,203.46a4,4,0,0,0,0-6.92L68.3,44.46A4,4,0,0,0,62.3,47.93Z",
    transform: "translate(-62.3 -43.92)"
  }, null, 4)])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.icon === 'hideHotspots' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("svg", SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_11, [(0,runtime_core_esm_bundler/* createElementVNode */._)("g", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color1
    }),
    d: "M364.54,45.41H217.28a4,4,0,0,0-4,4V350.15a4,4,0,0,0,4,4H364.54a4,4,0,0,0,4-4V49.41A4,4,0,0,0,364.54,45.41Z",
    transform: "translate(-23.23 -23.37)"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color1
    }),
    d: "M107.52,179.31a3.49,3.49,0,0,0-5,0L23.23,350.64a3.51,3.51,0,0,0,3.51,3.51H183.35a3.51,3.51,0,0,0,3.51-3.51Z",
    transform: "translate(-23.23 -23.37)"
  }, null, 4)])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.icon === 'showHotspots' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("svg", SvgIconvue_type_template_id_7a75d2d0_ts_true_hoisted_12, [(0,runtime_core_esm_bundler/* createElementVNode */._)("g", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color1
    }),
    d: "M364.54,45.41H217.28a4,4,0,0,0-4,4V350.15a4,4,0,0,0,4,4H364.54a4,4,0,0,0,4-4V49.41A4,4,0,0,0,364.54,45.41Z",
    transform: "translate(-23.23 -23.37)"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color1
    }),
    d: "M107.52,179.31a3.49,3.49,0,0,0-5,0L23.23,350.64a3.51,3.51,0,0,0,3.51,3.51H183.35a3.51,3.51,0,0,0,3.51-3.51Z",
    transform: "translate(-23.23 -23.37)"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color2
    }),
    d: "M380.52,376.85h-8a4,4,0,0,1,0-8h4v-4a4,4,0,0,1,8,0v8A4,4,0,0,1,380.52,376.85Z",
    transform: "translate(-23.23 -23.37)"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color2
    }),
    d: "M353.26,376.85H336.15a4,4,0,0,1,0-8h17.11a4,4,0,0,1,0,8Zm-36.37,0H299.78a4,4,0,0,1,0-8h17.11a4,4,0,0,1,0,8Zm-36.37,0H263.4a4,4,0,0,1,0-8h17.12a4,4,0,0,1,0,8Zm-36.37,0H227a4,4,0,1,1,0-8h17.12a4,4,0,0,1,0,8Z",
    transform: "translate(-23.23 -23.37)"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color2
    }),
    d: "M207.78,376.85h-8a4,4,0,0,1-4-4v-8a4,4,0,0,1,8,0v4h4a4,4,0,0,1,0,8Z",
    transform: "translate(-23.23 -23.37)"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color2
    }),
    d: "M199.78,350.55a4,4,0,0,1-4-4V330.28a4,4,0,0,1,8,0v16.27A4,4,0,0,1,199.78,350.55Zm0-34.58a4,4,0,0,1-4-4V295.7a4,4,0,0,1,8,0V312A4,4,0,0,1,199.78,316Zm0-34.57a4,4,0,0,1-4-4V261.13a4,4,0,0,1,8,0V277.4A4,4,0,0,1,199.78,281.4Zm0-34.58a4,4,0,0,1-4-4V226.55a4,4,0,0,1,8,0v16.27A4,4,0,0,1,199.78,246.82Zm0-34.57a4,4,0,0,1-4-4V192a4,4,0,0,1,8,0v16.27A4,4,0,0,1,199.78,212.25Zm0-34.58a4,4,0,0,1-4-4V157.4a4,4,0,0,1,8,0v16.27A4,4,0,0,1,199.78,177.67Zm0-34.57a4,4,0,0,1-4-4V122.82a4,4,0,0,1,8,0V139.1A4,4,0,0,1,199.78,143.1Zm0-34.58a4,4,0,0,1-4-4V88.25a4,4,0,1,1,8,0v16.27A4,4,0,0,1,199.78,108.52Zm0-34.57a4,4,0,0,1-4-4V53.67a4,4,0,1,1,8,0V70A4,4,0,0,1,199.78,74Z",
    transform: "translate(-23.23 -23.37)"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color2
    }),
    d: "M199.78,39.37a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4h8a4,4,0,0,1,0,8h-4v4A4,4,0,0,1,199.78,39.37Z",
    transform: "translate(-23.23 -23.37)"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color2
    }),
    d: "M353.26,31.37H336.15a4,4,0,0,1,0-8h17.11a4,4,0,0,1,0,8Zm-36.37,0H299.78a4,4,0,0,1,0-8h17.11a4,4,0,0,1,0,8Zm-36.37,0H263.4a4,4,0,0,1,0-8h17.12a4,4,0,0,1,0,8Zm-36.37,0H227a4,4,0,0,1,0-8h17.12a4,4,0,0,1,0,8Z",
    transform: "translate(-23.23 -23.37)"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color2
    }),
    d: "M380.52,39.37a4,4,0,0,1-4-4v-4h-4a4,4,0,0,1,0-8h8a4,4,0,0,1,4,4v8A4,4,0,0,1,380.52,39.37Z",
    transform: "translate(-23.23 -23.37)"
  }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      fill: _ctx.color2
    }),
    d: "M380.52,350.55a4,4,0,0,1-4-4V330.28a4,4,0,0,1,8,0v16.27A4,4,0,0,1,380.52,350.55Zm0-34.58a4,4,0,0,1-4-4V295.7a4,4,0,0,1,8,0V312A4,4,0,0,1,380.52,316Zm0-34.57a4,4,0,0,1-4-4V261.13a4,4,0,0,1,8,0V277.4A4,4,0,0,1,380.52,281.4Zm0-34.58a4,4,0,0,1-4-4V226.55a4,4,0,1,1,8,0v16.27A4,4,0,0,1,380.52,246.82Zm0-34.57a4,4,0,0,1-4-4V192a4,4,0,0,1,8,0v16.27A4,4,0,0,1,380.52,212.25Zm0-34.58a4,4,0,0,1-4-4V157.4a4,4,0,1,1,8,0v16.27A4,4,0,0,1,380.52,177.67Zm0-34.57a4,4,0,0,1-4-4V122.83a4,4,0,1,1,8,0V139.1A4,4,0,0,1,380.52,143.1Zm0-34.58a4,4,0,0,1-4-4V88.25a4,4,0,0,1,8,0v16.27A4,4,0,0,1,380.52,108.52Zm0-34.57a4,4,0,0,1-4-4V53.67a4,4,0,0,1,8,0V70A4,4,0,0,1,380.52,74Z",
    transform: "translate(-23.23 -23.37)"
  }, null, 4)])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]);
}
;// CONCATENATED MODULE: ./src/components/SvgIcon.vue?vue&type=template&id=7a75d2d0&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SvgIcon.vue?vue&type=script&lang=ts

/* harmony default export */ var SvgIconvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "SvgIcon",
  props: {
    ariaLabel: {
      type: String,
      default: ""
    },
    icon: String,
    classes: String,
    color1: String,
    color2: String,
    color3: String
  }
}));
;// CONCATENATED MODULE: ./src/components/SvgIcon.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/SvgIcon.vue




;
const SvgIcon_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SvgIconvue_type_script_lang_ts, [['render',SvgIconvue_type_template_id_7a75d2d0_ts_true_render]])

/* harmony default export */ var SvgIcon = (SvgIcon_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ModalView.vue?vue&type=script&lang=js

/* harmony default export */ var ModalViewvue_type_script_lang_js = ({
  name: "ModalView",
  emits: ["close"],
  components: {
    SvgIcon: SvgIcon
  },
  props: {
    modalSize: {
      type: String,
      default: "large"
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }

  }
});
;// CONCATENATED MODULE: ./src/components/ModalView.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ModalView.vue?vue&type=style&index=0&id=452dd254&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/ModalView.vue?vue&type=style&index=0&id=452dd254&scoped=true&lang=scss

;// CONCATENATED MODULE: ./src/components/ModalView.vue




;


const ModalView_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ModalViewvue_type_script_lang_js, [['render',ModalViewvue_type_template_id_452dd254_scoped_true_render],['__scopeId',"data-v-452dd254"]])

/* harmony default export */ var ModalView = (ModalView_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AssetComponent.vue?vue&type=template&id=7357325a&scoped=true&ts=true


const AssetComponentvue_type_template_id_7357325a_scoped_true_ts_true_withScopeId = n => (_pushScopeId("data-v-7357325a"), n = n(), _popScopeId(), n);

const AssetComponentvue_type_template_id_7357325a_scoped_true_ts_true_hoisted_1 = ["id"];
const AssetComponentvue_type_template_id_7357325a_scoped_true_ts_true_hoisted_2 = ["src", "alt"];
const AssetComponentvue_type_template_id_7357325a_scoped_true_ts_true_hoisted_3 = ["id", "src", "alt"];
const AssetComponentvue_type_template_id_7357325a_scoped_true_ts_true_hoisted_4 = ["id", "src", "alt"];
function AssetComponentvue_type_template_id_7357325a_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", null, [_ctx.editorEnabled === true ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
    key: 0,
    id: _ctx.asset.id,
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)(_ctx.getStyle()),
    class: "asset-image drag-me",
    draggable: "true",
    onDragstart: _cache[0] || (_cache[0] = $event => _ctx.startDrag($event, _ctx.asset)),
    onKeydown: [_cache[1] || (_cache[1] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)( //@ts-ignore
    (...args) => _ctx.onKeyDownWithShift && _ctx.onKeyDownWithShift(...args), ["shift", "exact"])), _cache[2] || (_cache[2] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)( //@ts-ignore
    (...args) => _ctx.onKeyDown && _ctx.onKeyDown(...args), ["exact"]))],
    tabindex: "0"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
    src: _ctx.asset.src,
    alt: _ctx.asset.altText,
    draggable: "false"
  }, null, 8, AssetComponentvue_type_template_id_7357325a_scoped_true_ts_true_hoisted_2)], 44, AssetComponentvue_type_template_id_7357325a_scoped_true_ts_true_hoisted_1)) : _ctx.asset.src && _ctx.asset.src !== '' && _ctx.asset.linkIdentifier && _ctx.asset.linkIdentifier !== '' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_router_link, {
    key: 1,
    class: "hotspot",
    onKeyup: [_cache[3] || (_cache[3] = (0,runtime_dom_esm_bundler/* withKeys */.D2)($event => _ctx.goToPage(_ctx.asset.linkIdentifier), ["enter"])), _cache[4] || (_cache[4] = (0,runtime_dom_esm_bundler/* withKeys */.D2)($event => _ctx.goToPage(_ctx.asset.linkIdentifier), ["space"]))],
    to: {
      name: 'hotspotPage',
      params: {
        pageName: _ctx.asset.linkIdentifier
      }
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
      id: _ctx.asset.id,
      class: (0,shared_esm_bundler/* normalizeClass */.C_)(["asset-image grow", {
        'editor-enabled': _ctx.editorEnabled
      }]),
      style: (0,shared_esm_bundler/* normalizeStyle */.j5)(_ctx.getStyle()),
      src: _ctx.asset.src,
      alt: _ctx.asset.altText,
      draggable: "false"
    }, null, 14, AssetComponentvue_type_template_id_7357325a_scoped_true_ts_true_hoisted_3)]),
    _: 1
  }, 8, ["to"])) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("img", {
    key: 2,
    id: _ctx.asset.id,
    class: "asset-image no-pointer-events",
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)(_ctx.getStyle()),
    src: _ctx.asset.src,
    alt: _ctx.asset.altText,
    draggable: "false"
  }, null, 12, AssetComponentvue_type_template_id_7357325a_scoped_true_ts_true_hoisted_4))]);
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AssetComponent.vue?vue&type=script&lang=ts





/* harmony default export */ var AssetComponentvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "AssetComponent",
  emits: ["onMoveLeft", "onLargeMoveLeft", "onMoveRight", "onLargeMoveRight", "onMoveUp", "onLargeMoveUp", "onMoveDown", "onLargeMoveDown", "onPlus", "onMinus"],

  data() {
    return {
      store: (0,vuex_esm_bundler/* useStore */.oR)(key)
    };
  },

  computed: { ...(0,vuex_esm_bundler/* mapState */.rn)(["hotspotIndicatorsEnabled"])
  },
  props: {
    editorEnabled: {
      type: Boolean,
      required: true
    },
    indicatorColour: {
      type: String,
      required: true
    },
    asset: {
      type: StageAsset,
      default: new StageAsset()
    }
  },
  methods: {
    goToPage(assetLinkIdentifier) {
      src_router.push({
        name: "hotspotPage",
        params: {
          pageName: assetLinkIdentifier
        }
      });
    },

    onArrowLeft() {
      this.$emit("onMoveLeft");
    },

    onArrowRight() {
      this.$emit("onMoveRight");
    },

    onArrowUp() {
      this.$emit("onMoveUp");
    },

    onArrowDown() {
      this.$emit("onMoveDown");
    },

    onKeyDownWithShift(e) {
      switch (e.key) {
        case "+":
          this.$emit("onPlus");
          break;

        case "-":
          this.$emit("onMinus");
          break;

        case "ArrowLeft":
          this.$emit("onLargeMoveLeft");
          break;

        case "ArrowRight":
          this.$emit("onLargeMoveRight");
          break;

        case "ArrowUp":
          this.$emit("onLargeMoveUp");
          break;

        case "ArrowDown":
          this.$emit("onLargeMoveDown");
          break;

        default:
          break;
      }
    },

    onKeyDown(e) {
      switch (e.key) {
        case "+":
          this.$emit("onPlus");
          break;

        case "-":
          this.$emit("onMinus");
          break;

        case "ArrowLeft":
          this.$emit("onMoveLeft");
          break;

        case "ArrowRight":
          this.$emit("onMoveRight");
          break;

        case "ArrowDown":
          this.$emit("onMoveDown");
          break;

        case "ArrowUp":
          this.$emit("onMoveUp");
          break;

        default:
          break;
      }
    },

    getIconColor(color) {
      switch (color) {
        case 2:
          return "#fff";

        default:
          return "#000";
      }
    },

    getStyle() {
      // outline: $keyboard-focus-width $keyboard-focus-style $keyboard-focus-color;
      const s = {
        borderColor: "transparent",
        width: this.asset.width,
        zIndex: this.asset.z,
        left: this.asset.left,
        top: this.asset.top
      };

      if (this.asset.linkIdentifier && this.asset.linkIdentifier !== "") {
        if (this.hotspotIndicatorsEnabled || this.editorEnabled) {
          if (this.editorEnabled) {
            s.borderColor = "#ff0000";
          } else {
            s.borderColor = this.indicatorColour;
          }
        }
      }

      return s;
    },

    startDrag(evt, asset) {
      if (evt !== null && evt.dataTransfer !== null) {
        // evt.dataTransfer.dropEffect = "move";
        // evt.dataTransfer.effectAllowed = "move";
        evt.dataTransfer.setData("assetId", asset.id);
        evt.dataTransfer.setData("assetZ", asset.z);
        evt.dataTransfer.setDragImage(evt.target, evt.target.width / 2, evt.target.height / 2);
        asset.z = 9999;
      }
    }

  }
}));
;// CONCATENATED MODULE: ./src/components/AssetComponent.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AssetComponent.vue?vue&type=style&index=0&id=7357325a&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/AssetComponent.vue?vue&type=style&index=0&id=7357325a&scoped=true&lang=scss

;// CONCATENATED MODULE: ./src/components/AssetComponent.vue




;


const AssetComponent_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(AssetComponentvue_type_script_lang_ts, [['render',AssetComponentvue_type_template_id_7357325a_scoped_true_ts_true_render],['__scopeId',"data-v-7357325a"]])

/* harmony default export */ var AssetComponent = (AssetComponent_exports_);
// EXTERNAL MODULE: ./node_modules/gsap/index.js + 2 modules
var gsap = __webpack_require__(8552);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SmallView.vue?vue&type=template&id=952337fa&scoped=true&ts=true


const SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-952337fa"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_hoisted_1 = {
  id: "smallView",
  class: "sm-view"
};

const SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_hoisted_2 = /*#__PURE__*/SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "breadcrumbs"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, "Home")], -1));

const SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_hoisted_3 = {
  class: "sm-view-wrapper"
};
const SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_hoisted_4 = {
  class: "control-panel"
};

const SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_hoisted_5 = /*#__PURE__*/SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "sr-only"
}, "Switch to standard view", -1));

const SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_hoisted_6 = /*#__PURE__*/SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "",
  "aria-hidden": "true"
}, "Standard view ", -1));

const SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_hoisted_7 = [SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_hoisted_5, SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_hoisted_6];
const SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_hoisted_8 = {
  style: {
    "padding": "0"
  }
};
const SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_hoisted_9 = {
  class: "small-view-link"
};
function SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("svg-icon");

  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_hoisted_1, [SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_hoisted_2, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_hoisted_4, [!_ctx.sessionConfig.editorOn ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
    key: 0,
    class: "switch-view",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.setDetailedViewMode())
  }, SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_hoisted_7)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    onClick: _cache[1] || (_cache[1] = $event => _ctx.$router.push('/page/information'))
  }, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.sessionConfig.info.title), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("ul", SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_hoisted_8, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.sessionConfig.assets.filter(x => x.src && x.src.trim !== '' && x.linkIdentifier && x.linkIdentifier.trim !== ''), a => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("li", {
      key: a
    }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_hoisted_9, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
      class: "icon",
      icon: "pin",
      color1: "#005EB8",
      color2: "#fff",
      color3: "#005EB8"
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
      tabindex: "0",
      to: {
        name: 'hotspotPage',
        params: {
          pageName: a.linkIdentifier
        }
      }
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(a.name), 1)]),
      _: 2
    }, 1032, ["to"])])]);
  }), 128))])])]);
}
;// CONCATENATED MODULE: ./src/components/SmallView.vue?vue&type=template&id=952337fa&scoped=true&ts=true

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
    },

    createLink(a) {
      return `<a href='#/page/${a.linkIdentifier}'>${a.name}</a>`;
    }

  }
}));
;// CONCATENATED MODULE: ./src/components/SmallView.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SmallView.vue?vue&type=style&index=0&id=952337fa&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/SmallView.vue?vue&type=style&index=0&id=952337fa&scoped=true&lang=scss

;// CONCATENATED MODULE: ./src/components/SmallView.vue




;


const SmallView_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SmallViewvue_type_script_lang_ts, [['render',SmallViewvue_type_template_id_952337fa_scoped_true_ts_true_render],['__scopeId',"data-v-952337fa"]])

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
      animationsExist: false,
      xPos: "0",
      yPos: "0",
      timelines: new Array(),
      smallMoveValue: 0.1,
      largeMoveValue: 1
    };
  },

  computed: { ...(0,vuex_esm_bundler/* mapState */.rn)(["sessionConfig", "viewMode", "visibleModal", "animationsEnabled", "hotspotIndicatorsEnabled", "stageLeftPosition"])
  },

  async mounted() {
    await this.getViewModeCookie(); // determine stored view mode
    // create animations

    this.sessionConfig.assets.forEach(a => {
      if (a.timeline.tweens.length > 0) {
        this.animationsExist = true;
        const tl = gsap/* gsap.timeline */.p8.timeline({
          paused: true
        });
        const element = document.getElementById(a.id);

        if (element !== null) {
          tl.repeat(parseInt(a.timeline.repeat.toString(), 10));
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

          this.animationsEnabled === true ? tl.play() : tl.pause();
          this.timelines.push(tl);
        }
      }
    });
    const e = document.getElementById("container");

    if (e && this.stageLeftPosition && this.stageLeftPosition !== "") {
      e.style.marginLeft = this.stageLeftPosition;
      const rightMostPosition = "-" + (parseInt(this.sessionConfig.stage.width, 10) - 100) + "%";

      if (this.stageLeftPosition === "0%") {
        gsap/* gsap.set */.p8.set("#scrollButtonLeft", {
          display: "none",
          duration: 0
        }); // } else if ((parseInt(this.stageLeftPosition, 10) * -1) >= parseInt(this.sessionConfig.stage.width, 10)) {
      } else if (this.stageLeftPosition === rightMostPosition) {
        gsap/* gsap.set */.p8.set("#scrollButtonRight", {
          display: "none",
          duration: 0
        });
      }
    }
  },

  methods: {
    onMoveLeft(a, moveValue) {
      let position = 0.00;
      position = parseFloat(a.left) - moveValue;
      a.left = position.toFixed(2) + "%";
    },

    onMoveRight(a, moveValue) {
      let position = 0.00;
      position = parseFloat(a.left) + moveValue;
      a.left = position.toFixed(2) + "%";
    },

    onMoveUp(a, moveValue) {
      let position = 0.00;
      position = parseFloat(a.top) - moveValue;
      a.top = position.toFixed(2) + "%";
    },

    onMoveDown(a, moveValue) {
      let position = 0.00;
      position = parseFloat(a.top) + moveValue;
      a.top = position.toFixed(2) + "%";
    },

    onIncreaseSize(a) {
      let width = 0.00;

      if (a.width !== "auto") {
        width = parseFloat(a.width) + 0.1;
        a.width = width.toFixed(2) + "%";
      }
    },

    onDecreaseSize(a) {
      let width = 0.00;

      if (a.width !== "auto") {
        width = parseFloat(a.width) - 0.1;
        a.width = width.toFixed(2) + "%";
      }
    },

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

    dispatchStagePos(leftPosition) {
      this.store.dispatch("setStageLeftPosition", leftPosition);
    },

    scrollStageLeft() {
      const e = document.getElementById("container");

      if (e !== null) {
        const tl = gsap/* gsap.timeline */.p8.timeline();
        tl.eventCallback("onComplete", this.dispatchStagePos, ["0%"]); // myAnimation.eventCallback("onComplete", myFunction, ["param1","param2"]);

        tl.to(e, {
          marginLeft: "0",
          duration: 1,
          ease: "power1.in"
        });
        tl.to("#scrollButtonLeft", {
          opacity: 0,
          display: "none",
          duration: 0.3,
          ease: "power1.in"
        });
        tl.to("#scrollButtonRight", {
          opacity: 1,
          duration: 0.3,
          ease: "power1.in",
          display: "block"
        });
      }
    },

    scrollStageRight() {
      const e = document.getElementById("container");
      const marginLeftValue = "-" + (parseInt(this.sessionConfig.stage.width, 10) - 100) + "%";

      if (e !== null) {
        const tl = gsap/* gsap.timeline */.p8.timeline();
        tl.eventCallback("onComplete", this.dispatchStagePos, [marginLeftValue]);
        tl.to(e, {
          marginLeft: marginLeftValue,
          duration: 1,
          ease: "power1.in"
        });
        tl.to("#scrollButtonRight", {
          opacity: 0,
          display: "none",
          duration: 0.3,
          ease: "power1.in"
        });
        tl.to("#scrollButtonLeft", {
          opacity: 1,
          duration: 0.3,
          ease: "power1.in",
          display: "block"
        });
      }
    },

    getStyle(asset) {
      const s = {
        width: asset.width,
        zIndex: asset.z,
        left: asset.left,
        top: asset.top
      };
      return s;
    },

    copyToClipboard() {
      let str = "Name, Left, Top, Scale, Z-index, Background colour, Hotspot page, Timeline";
      this.sessionConfig.assets.forEach(a => {
        str = str + "\n" + a.name + ", " + a.left + ", " + a.top + ", " + a.width + ", " + a.z + ", " + a.backgroundColor;

        if (a.linkIdentifier && a.linkIdentifier !== null) {
          str = str + ", " + a.linkIdentifier;
        } else {
          str = str + ", ";
        }

        if (a.timeline && a.timeline.tweens.length > 0) {
          str = str + ", Yes";
        } else {
          str = str + ", No";
        }
      });
      navigator.clipboard.writeText(str);
    },

    copyAssetGeometryToClipboard(a) {
      const str = `${a.left}, ${a.top}, ${a.width}, ${a.z}`;
      navigator.clipboard.writeText(str);
    },

    async stopStartAnimations() {
      await this.store.dispatch("toggleAnimations");
      this.timelines.forEach(x => {
        if (this.animationsEnabled === false) {
          x.restart(); // reset timeline

          x.pause();
        } else {
          x.play();
        }
      });
    },

    async toggleHotspotIndicator() {
      await this.store.dispatch("toggleHotspotIndicators");
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
        evt.dataTransfer.setData("assetId", asset.id);
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
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeView.vue?vue&type=style&index=0&id=7fb3dfa6&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/HomeView.vue?vue&type=style&index=0&id=7fb3dfa6&lang=scss

;// CONCATENATED MODULE: ./src/components/HomeView.vue




;


const HomeView_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(HomeViewvue_type_script_lang_ts, [['render',HomeViewvue_type_template_id_7fb3dfa6_ts_true_render]])

/* harmony default export */ var HomeView = (HomeView_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HotspotPageView.vue?vue&type=template&id=1e0878f2&ts=true

const HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_1 = {
  style: {
    "position": "relative",
    "height": "92%"
  }
};
const HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_2 = {
  class: "sr-only"
};
const HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_3 = {
  class: "page-image-container"
};
const HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_4 = ["src"];
const HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_5 = {
  class: "circle-links"
};
const HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_6 = {
  class: "top"
};
const HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_7 = {
  class: "text"
};
const HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_8 = ["onClick"];
const HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_9 = {
  class: "text"
};

const HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "text"
}, "Home", -1);

function HotspotPageViewvue_type_template_id_1e0878f2_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_small_hotspot_page_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("small-hotspot-page-view");

  const _component_svg_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("svg-icon");

  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");

  const _component_pop_up_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("pop-up-view");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_small_hotspot_page_view, {
    class: (0,shared_esm_bundler/* normalizeClass */.C_)({
      'display': _ctx.viewMode === 'smallOnly'
    }),
    page: _ctx.page
  }, null, 8, ["class", "page"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("main", {
    id: "hotspotPageView",
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)([{
      "position": "absolute",
      "left": "0",
      "top": "0",
      "width": "100%",
      "height": "100%"
    }, {
      backgroundColor: _ctx.page.backgroundColor
    }]),
    class: (0,shared_esm_bundler/* normalizeClass */.C_)({
      'display-none': _ctx.viewMode !== 'normal',
      'editor-on': _ctx.sessionConfig.editorOn === true
    })
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_2, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.page.name), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
    src: _ctx.page.backgroundImgSrc,
    class: "page-image",
    alt: ""
  }, null, 8, HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_4)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("ul", HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */._)("li", HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_6, [(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    class: "hide grow",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.selectLink(_ctx.sessionConfig.overview))
  }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
    class: "icon gsapPop",
    icon: "arrow",
    color1: _ctx.getIconColor1,
    color2: _ctx.getIconColor2,
    color3: _ctx.getIconColor3
  }, null, 8, ["color1", "color2", "color3"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("span", HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_7, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.sessionConfig.overview.text), 1)])]), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.pageLinks, (link, index) => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("li", {
      class: (0,shared_esm_bundler/* normalizeClass */.C_)(_ctx.getItemClass(index)),
      key: index
    }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
      class: "hide grow",
      onClick: $event => _ctx.selectLink(link)
    }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
      class: "icon rotate gsapPop",
      icon: "arrow",
      color1: _ctx.getIconColor1,
      color2: _ctx.getIconColor2,
      color3: _ctx.getIconColor3
    }, null, 8, ["color1", "color2", "color3"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("span", HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_9, (0,shared_esm_bundler/* toDisplayString */.zw)(link.text), 1)], 8, HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_8)], 2);
  }), 128))])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("nav", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
    to: {
      name: 'home'
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
      class: "icon",
      icon: "home",
      color1: _ctx.getIconColor1,
      color2: _ctx.getIconColor2,
      color3: _ctx.getIconColor1
    }, null, 8, ["color1", "color2", "color3"]), HotspotPageViewvue_type_template_id_1e0878f2_ts_true_hoisted_10]),
    _: 1
  })]), _ctx.selectedLink.text !== '' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_pop_up_view, {
    key: 0,
    link: _ctx.selectedLink,
    backgroundColor: _ctx.page.backgroundColor,
    onClose: _cache[1] || (_cache[1] = $event => _ctx.closeLinkView())
  }, null, 8, ["link", "backgroundColor"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)], 6)], 64);
}
;// CONCATENATED MODULE: ./src/components/HotspotPageView.vue?vue&type=template&id=1e0878f2&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PopUpView.vue?vue&type=template&id=fee4dcc8&ts=true

const PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_1 = {
  class: "modal",
  id: "popUpViewModal"
};
const PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_2 = {
  class: "modal__wrapper"
};
const PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_3 = {
  class: "modal__container",
  role: "dialog"
};
const PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_4 = {
  class: "modal__header"
};
const PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_5 = {
  class: "text"
};
const PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_6 = {
  key: 0,
  class: "instructional-text"
};
const PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_7 = {
  class: "modal__body"
};
const PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_8 = ["innerHTML"];
const PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_9 = {
  key: 1
};
const PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_10 = ["onKeydown"];
const PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_11 = ["innerHTML"];
const PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_12 = {
  key: 1
};
const PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_13 = ["onKeyup"];
const PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_14 = ["innerHTML"];
const PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_15 = ["value"];
const PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_16 = ["data-index", "onKeydown"];
const PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_17 = ["innerHTML"];
function PopUpViewvue_type_template_id_fee4dcc8_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("svg-icon");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */._)("header", PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("h2", PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_5, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.link.text), 1), _ctx.link.text !== 'Overview' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_6, "Select an item below for further guidance")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    id: "closeModal",
    class: "hide",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.close()),
    onKeydownCapture: _cache[1] || (_cache[1] = (0,runtime_dom_esm_bundler/* withKeys */.D2)((0,runtime_dom_esm_bundler/* withModifiers */.iM)(() => {}, ["shift", "prevent", "stop"]), ["tab"]))
  }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
    class: "icon close spin",
    icon: "close",
    color1: "#000",
    color2: "#fff",
    color3: "#000"
  })], 32)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_7, [_ctx.link.links.length == 1 && _ctx.link.links[0].isOverviewLink ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
    key: 0,
    onKeydown: _cache[2] || (_cache[2] = (0,runtime_dom_esm_bundler/* withKeys */.D2)((0,runtime_dom_esm_bundler/* withModifiers */.iM)(event => _ctx.overviewTab(event), ["exact"]), ["tab"])),
    class: "is-overview",
    innerHTML: _ctx.overviewText,
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
      backgroundColor: _ctx.backgroundColor
    })
  }, null, 44, PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_8)) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("ul", PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_9, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.link.links, (l, index) => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("li", {
      key: index,
      class: (0,shared_esm_bundler/* normalizeClass */.C_)(["nonAccordionLi gsap-slide", {
        'has-accordion': _ctx.isAccordion(l),
        'open': _ctx.isAccordionOpen(l.id),
        'last-link': index == _ctx.link.links.length - 1
      }]),
      onMouseenter: _cache[6] || (_cache[6] = //@ts-ignore
      (...args) => _ctx.enterLI && _ctx.enterLI(...args)),
      onMouseleave: _cache[7] || (_cache[7] = //@ts-ignore
      (...args) => _ctx.leaveLI && _ctx.leaveLI(...args)),
      onKeydown: (0,runtime_dom_esm_bundler/* withKeys */.D2)((0,runtime_dom_esm_bundler/* withModifiers */.iM)(event => _ctx.checkIfLastLink(event, index == _ctx.link.links.length - 1, l), ["exact"]), ["tab"])
    }, [!_ctx.isAccordion(l) ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("span", {
      key: 0,
      class: "linkText",
      innerHTML: l.text,
      style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
        backgroundColor: _ctx.backgroundColor
      })
    }, null, 12, PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_11)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.isAccordion(l) ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_12, [(0,runtime_core_esm_bundler/* createElementVNode */._)("label", {
      class: "linkText",
      tabindex: "0",
      onKeyup: [(0,runtime_dom_esm_bundler/* withKeys */.D2)($event => _ctx.toggleAccordion(l.id), ["enter"]), (0,runtime_dom_esm_bundler/* withKeys */.D2)($event => _ctx.toggleAccordion(l.id), ["space"])],
      style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
        backgroundColor: _ctx.backgroundColor
      })
    }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
      innerHTML: l.text
    }, null, 8, PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_14), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
      type: "checkbox",
      value: l.id,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.openAccordions = $event),
      class: "hide"
    }, null, 8, PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_15), [[runtime_dom_esm_bundler/* vModelCheckbox */.e8, _ctx.openAccordions]])], 44, PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_13), (0,runtime_core_esm_bundler/* createVNode */.Wm)(runtime_dom_esm_bundler/* TransitionGroup */.W3, {
      tag: "ul",
      css: false,
      onEnter: _ctx.slideIn,
      onLeave: _ctx.slideOut,
      style: {
        "background-color": "transparent"
      },
      class: (0,shared_esm_bundler/* normalizeClass */.C_)(["accordion", {
        'open': _ctx.isAccordionOpen(l.id)
      }])
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(l.links, (accLink, accIndex) => {
        return (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("li", {
          class: (0,shared_esm_bundler/* normalizeClass */.C_)(["accordionLi", {
            'last-link': index == _ctx.link.links.length - 1 && accIndex == l.links.length - 1
          }]),
          key: accIndex,
          "data-index": accIndex,
          onMouseenter: _cache[4] || (_cache[4] = //@ts-ignore
          (...args) => _ctx.enterAccordionLI && _ctx.enterAccordionLI(...args)),
          onMouseleave: _cache[5] || (_cache[5] = //@ts-ignore
          (...args) => _ctx.leaveLI && _ctx.leaveLI(...args)),
          onKeydown: (0,runtime_dom_esm_bundler/* withKeys */.D2)((0,runtime_dom_esm_bundler/* withModifiers */.iM)(event => _ctx.checkIfLastLink(event, index == _ctx.link.links.length - 1 && accIndex == l.links.length - 1, accLink), ["exact"]), ["tab"])
        }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
          class: "linkText",
          style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
            backgroundColor: _ctx.lighten()
          }),
          innerHTML: accLink.text
        }, null, 12, PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_17)], 42, PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_16)), [[runtime_dom_esm_bundler/* vShow */.F8, _ctx.isAccordionOpen(l.id)]]);
      }), 128))]),
      _: 2
    }, 1032, ["onEnter", "onLeave", "class"])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)], 42, PopUpViewvue_type_template_id_fee4dcc8_ts_true_hoisted_10);
  }), 128))]))])])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(runtime_dom_esm_bundler/* Transition */.uT, {
    name: "fade"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
      class: "screen-mask",
      onClick: _cache[8] || (_cache[8] = $event => _ctx.close())
    })]),
    _: 1
  })]);
}
;// CONCATENATED MODULE: ./src/components/PopUpView.vue?vue&type=template&id=fee4dcc8&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PopUpView.vue?vue&type=script&lang=ts






/* harmony default export */ var PopUpViewvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "PopUpView",
  emits: ["close"],
  components: {
    SvgIcon: SvgIcon
  },
  props: {
    link: {
      type: Link,
      default: new Link()
    },
    backgroundColor: {
      type: String,
      default: "#fff"
    }
  },

  data() {
    return {
      store: (0,vuex_esm_bundler/* useStore */.oR)(key),
      animsHaveRun: false,
      openAccordions: new Array(),
      backToClose: false,
      overviewText: ""
    };
  },

  computed: { ...(0,vuex_esm_bundler/* mapState */.rn)(["sessionConfig"])
  },

  async mounted() {
    this.playOpeningAnims();
    const closeBtn = document.getElementById("closeModal");
    closeBtn?.focus();

    if (this.link.links.length === 1 && this.link.links[0].isOverviewLink) {
      const content = this.link.links[0].text;
      const div = document.createElement("div");
      div.innerHTML = content;
      const anchors = div.getElementsByTagName("a");

      if (anchors && anchors.length > 0) {
        const lastAnchor = anchors[anchors.length - 1];
        lastAnchor.classList.add("last-link");
      }

      this.overviewText = div.innerHTML;
    }
  },

  // GSAP animation won't run on load in the mounted event so have had to put it in updated but add a flag to stop it repeating
  async updated() {
    this.playOpeningAnims();
  },

  methods: {
    slideIn(el, done) {
      gsap/* gsap.set */.p8.set(el, {
        opacity: 0,
        height: 0
      });
      gsap/* gsap.to */.p8.to(el, {
        opacity: 1,
        height: "auto",
        duration: 0.8,
        delay: el.dataset.index * 0.25,
        onComplete: done
      });
    },

    slideOut(el, done) {
      gsap/* gsap.to */.p8.to(el, {
        opacity: 0,
        height: 0,
        duration: 0.8,
        delay: el.dataset.index * 0.25,
        onComplete: done
      });
    },

    isAccordionOpen(accordionId) {
      const found = this.openAccordions.find(x => x === accordionId);

      if (found) {
        return true;
      }

      return false;
    },

    overviewTab(event) {
      if (event.type.toLowerCase() === "keydown" && event.key.toLowerCase() === "tab" && !event.altKey && !event.shiftKey && !event.ctrlKey) {
        if (event.target) {
          const target = event.target;

          if (target.classList.contains("last-link")) {
            event.preventDefault(); // you must stop the event, otherwise the focus will move beyond the close button

            event.stopPropagation();
            const closeBtn = document.getElementById("closeModal");
            closeBtn?.focus();
          }
        }
      }
    },

    checkIfLastLink(event, isLastLinkInList, link) {
      // if this is the last link in the list of links in a parent list, or the list of links in a child accordion
      if (isLastLinkInList) {
        // if the link id is in the open accordion collection, don't skip to closeModal, let
        // the tab action go through the list of child accordion items
        const index = this.openAccordions.indexOf(link.id, 0);

        if (index === -1 && link.isOverviewLink === false) {
          // if this link is not an open accordion, skip to closeModal
          event.preventDefault(); // you must stop the event, otherwise the focus will move beyond the close button

          event.stopPropagation();
          const closeBtn = document.getElementById("closeModal");
          closeBtn?.focus();
        }
      }
    },

    isAccordion(l) {
      return l.links.length > 0;
    },

    lighten() {
      return this.newShade(this.backgroundColor, 30);
    },

    toggleAccordion(accordionId) {
      const index = this.openAccordions.indexOf(accordionId, 0);

      if (index > -1) {
        this.openAccordions.splice(index, 1);
      } else {
        this.openAccordions.push(accordionId);
      }
    },

    close() {
      this.$emit("close");
    },

    enterLI(e) {
      // gsap.to("li:not(.accordion>li)", { opacity: 0.6, duration: 0.5 });
      gsap/* gsap.to */.p8.to(".nonAccordionLi", {
        opacity: 0.7,
        duration: 0.2
      });
      gsap/* gsap.to */.p8.to(e.target, {
        opacity: 1,
        duration: 0.2
      });
    },

    enterAccordionLI(e) {
      gsap/* gsap.to */.p8.to(".accordionLi", {
        opacity: 0.7,
        duration: 0.2
      });
      gsap/* gsap.to */.p8.to(e.target, {
        opacity: 1,
        duration: 0.2
      });
    },

    leaveLI(e) {
      // gsap.to(".gsapSlide", { opacity: 1, duration: 0.5 });
      gsap/* gsap.to */.p8.to("li", {
        opacity: 1,
        duration: 0.2
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
        const arr = document.querySelectorAll(".gsap-slide");
        tl.from(arr, {
          opacity: "0",
          padding: "0",
          duration: 0.8,
          stagger: 0.1
        });
        tl.play();
        this.animsHaveRun = true;
      }
    },

    newShade(hexColor, magnitude) {
      hexColor = hexColor.replace("#", "");

      if (hexColor.length === 6) {
        const decimalColor = parseInt(hexColor, 16);
        let r = (decimalColor >> 16) + magnitude;
        r > 255 && (r = 255);
        r < 0 && (r = 0);
        let g = (decimalColor & 0x0000ff) + magnitude;
        g > 255 && (g = 255);
        g < 0 && (g = 0);
        let b = (decimalColor >> 8 & 0x00ff) + magnitude;
        b > 255 && (b = 255);
        b < 0 && (b = 0);
        return `#${(g | b << 8 | r << 16).toString(16)}`;
      } else {
        return hexColor;
      }
    }

  }
}));
;// CONCATENATED MODULE: ./src/components/PopUpView.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PopUpView.vue?vue&type=style&index=0&id=fee4dcc8&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/PopUpView.vue?vue&type=style&index=0&id=fee4dcc8&lang=scss

;// CONCATENATED MODULE: ./src/components/PopUpView.vue




;


const PopUpView_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(PopUpViewvue_type_script_lang_ts, [['render',PopUpViewvue_type_template_id_fee4dcc8_ts_true_render]])

/* harmony default export */ var PopUpView = (PopUpView_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SmallHotspotPageView.vue?vue&type=template&id=681d37fc&scoped=true&ts=true


const SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-681d37fc"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_hoisted_1 = {
  id: "smallHotspotPageView",
  class: "sm-view"
};
const SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_hoisted_2 = {
  class: "breadcrumbs"
};

const SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_hoisted_3 = /*#__PURE__*/SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, "Home", -1));

const SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_hoisted_4 = /*#__PURE__*/SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "breadcrumb-separator"
}, "\\", -1));

const SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_hoisted_5 = {
  class: "sm-view-wrapper"
};
const SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_hoisted_6 = {
  style: {
    "padding": "0"
  }
};
const SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_hoisted_7 = {
  key: 0,
  class: "small-view-link"
};
const SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_hoisted_8 = ["innerHTML"];
function SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");

  const _component_svg_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("svg-icon");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
    to: {
      name: 'home'
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_hoisted_3]),
    _: 1
  }), SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_hoisted_4, (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.nicePageName), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */._)("ul", SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_hoisted_6, [(0,runtime_core_esm_bundler/* createElementVNode */._)("li", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
    class: "icon rotate90",
    icon: "arrow",
    color1: "#005EB8",
    color2: "#fff",
    color3: "#005EB8"
  }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
    tabindex: "0",
    to: {
      name: 'OverviewPage',
      params: {
        pName: _ctx.page.name
      }
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.sessionConfig.overview.text), 1)]),
    _: 1
  }, 8, ["to"])]), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.page.links, (link, index) => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("li", {
      key: index
    }, [link.links.length > 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_hoisted_7, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
      class: "icon rotate90",
      icon: "arrow",
      color1: "#005EB8",
      color2: "#fff",
      color3: "#005EB8"
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
      tabindex: "0",
      to: {
        name: 'SmallLinkListView',
        params: {
          pageName: _ctx.page.name,
          linkText: link.text
        }
      }
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(link.text), 1)]),
      _: 2
    }, 1032, ["to"])])) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, {
      key: 1
    }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
      "tab-index": "-1",
      class: "icon rotate90",
      icon: "arrow",
      color1: "#000;",
      color2: "#fff",
      color3: "#000"
    }), link.links.length == 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("span", {
      key: 0,
      innerHTML: link.text
    }, null, 8, SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_hoisted_8)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)], 64))]);
  }), 128))])])]);
}
;// CONCATENATED MODULE: ./src/components/SmallHotspotPageView.vue?vue&type=template&id=681d37fc&scoped=true&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SmallHotspotPageView.vue?vue&type=script&lang=ts





/* harmony default export */ var SmallHotspotPageViewvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "SmallHotspotPageView",
  components: {
    SvgIcon: SvgIcon
  },
  props: {
    page: {
      type: HotspotPage,
      required: true
    }
  },

  data() {
    return {
      store: (0,vuex_esm_bundler/* useStore */.oR)(key)
    };
  },

  computed: { ...(0,vuex_esm_bundler/* mapState */.rn)(["sessionConfig"]),

    nicePageName() {
      let strName = "";
      this.page.name.split("-").forEach(x => {
        if (strName === "" && x !== "") {
          // capitalise first letter
          strName = x[0].toUpperCase();
          strName = strName + x.slice(1);
        } else {
          strName = strName + " " + x;
        }
      });
      return strName;
    }

  },
  methods: {
    getIconColor(color) {
      switch (color) {
        case 2:
          return "#fff";

        default:
          return "#000";
      }
    },

    goHome() {
      this.$router.push("/");
    }

  }
}));
;// CONCATENATED MODULE: ./src/components/SmallHotspotPageView.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SmallHotspotPageView.vue?vue&type=style&index=0&id=681d37fc&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/SmallHotspotPageView.vue?vue&type=style&index=0&id=681d37fc&scoped=true&lang=scss

;// CONCATENATED MODULE: ./src/components/SmallHotspotPageView.vue




;


const SmallHotspotPageView_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SmallHotspotPageViewvue_type_script_lang_ts, [['render',SmallHotspotPageViewvue_type_template_id_681d37fc_scoped_true_ts_true_render],['__scopeId',"data-v-681d37fc"]])

/* harmony default export */ var SmallHotspotPageView = (SmallHotspotPageView_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HotspotPageView.vue?vue&type=script&lang=ts









/* harmony default export */ var HotspotPageViewvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "HotspotPageView",
  components: {
    SvgIcon: SvgIcon,
    PopUpView: PopUpView,
    SmallHotspotPageView: SmallHotspotPageView
  },
  props: {
    pageName: String
  },

  data() {
    return {
      store: (0,vuex_esm_bundler/* useStore */.oR)(key),
      page: new HotspotPage(),
      selectedLink: new Link(),
      animsHaveRun: false,
      pageLinks: new Array(),
      linkMap: new Array()
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
      // return this.page.iconColor3;
      return "rgba(255, 255, 255, 0.3)";
    }

  },

  async mounted() {
    this.page = this.sessionConfig.hotspotPages.find(x => x.name === this.pageName); // this.pageLinks = this.page.links.slice(0, 6);

    this.pageLinks = this.page.links;
    this.linkMap.push([]); // 0

    this.linkMap.push(["left side-5-3"]); // 1

    this.linkMap.push(["left side-5-3", "right side-5-3"]); // 2

    this.linkMap.push(["left side-5-2", "right side-5-3", "left side-5-3"]); // 3

    this.linkMap.push(["left side-5-2", "right side-5-2", "left side-5-3", "right side-5-3"]); // 4

    this.linkMap.push(["left side-5-2", "right side-5-2", "left side-5-3", "right side-5-3", "left side-5-4"]); // 5

    this.linkMap.push(["left side-5-2", "right side-5-2", "left side-5-3", "right side-5-3", "left side-5-4", "right side-5-4"]); // 6

    this.linkMap.push(["left side-5-1", "right side-5-1", "left side-5-2", "right side-5-2", "left side-5-3", "right side-5-3", "left side-5-4"]); // 7

    this.linkMap.push(["left side-5-1", "right side-5-1", "left side-5-2", "right side-5-2", "left side-5-3", "right side-5-3", "left side-5-4", "right side-5-4"]); // 8

    this.linkMap.push(["left side-5-1", "right side-5-1", "left side-5-2", "right side-5-2", "left side-5-3", "right side-5-3", "left side-5-4", "right side-5-4", "left side-5-5"]); // 9

    this.linkMap.push(["left side-5-1", "right side-5-1", "left side-5-2", "right side-5-2", "left side-5-3", "right side-5-3", "left side-5-4", "right side-5-4", "left side-5-5", "right side-5-5"]); // 10

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
        // create a collection of pointer icons, so we can animate them in the desired order,
        // i.e. anti-clockwise, down the left hand side first, then up the right hand side and finally the top (overview) button
        const tl = gsap/* gsap.timeline */.p8.timeline({
          paused: true,
          delay: 0.5
        });
        const pinDuration = 0.06;
        const pinEase = "power1.inOut";
        let arr = document.querySelectorAll(".left > button > .gsapPop");

        for (let i = 0; i < arr.length; i++) {
          const e = arr[i];
          const eTL = gsap/* gsap.timeline */.p8.timeline();
          eTL.set(e, {
            opacity: 1,
            scale: 0
          });
          eTL.to(e, {
            scale: 1,
            ease: pinEase,
            duration: pinDuration
          });
          eTL.to(e, {
            scale: 3,
            ease: pinEase,
            duration: pinDuration
          });
          eTL.to(e, {
            scale: 1,
            ease: pinEase,
            duration: pinDuration
          }); // sometimes a bug appears and the arrow isn't pointing the right way, if the user is hovering over it when it is animating it,
          // so setting a rotation value here resets it to the correct position at the end of the animation.

          eTL.to(e, {
            rotate: 270,
            ease: "none",
            duration: 0
          });
          tl.add(eTL);
        }

        arr = document.querySelectorAll(".right > button > .gsapPop");

        for (let i = arr.length - 1; i >= 0; i--) {
          const e = arr[i];
          const eTL = gsap/* gsap.timeline */.p8.timeline();
          eTL.set(e, {
            opacity: 1,
            scale: 0
          });
          eTL.to(e, {
            scale: 1,
            ease: pinEase,
            duration: pinDuration
          });
          eTL.to(e, {
            scale: 3,
            ease: pinEase,
            duration: pinDuration
          });
          eTL.to(e, {
            scale: 1,
            ease: pinEase,
            duration: pinDuration
          });
          eTL.to(e, {
            rotate: 90,
            ease: "none",
            duration: 0
          });
          tl.add(eTL);
        }

        arr = document.querySelectorAll(".top > button > .gsapPop");

        for (let i = 0; i < arr.length; i++) {
          const e = arr[i];
          const eTL = gsap/* gsap.timeline */.p8.timeline();
          eTL.set(e, {
            opacity: 1,
            scale: 0
          });
          eTL.to(e, {
            scale: 1,
            ease: pinEase,
            duration: pinDuration
          });
          eTL.to(e, {
            scale: 3,
            ease: pinEase,
            duration: pinDuration
          });
          eTL.to(e, {
            scale: 1,
            ease: pinEase,
            duration: pinDuration
          });
          tl.add(eTL);
        }

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

    getItemClass(index) {
      // const linkPlacement = this.linkMap.get(this.pageLinks.length);
      const linkPlacement = this.linkMap[this.pageLinks.length];
      const className = linkPlacement[index];
      return className;
    }

  }
}));
;// CONCATENATED MODULE: ./src/components/HotspotPageView.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HotspotPageView.vue?vue&type=style&index=0&id=1e0878f2&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/HotspotPageView.vue?vue&type=style&index=0&id=1e0878f2&lang=scss

;// CONCATENATED MODULE: ./src/components/HotspotPageView.vue




;


const HotspotPageView_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(HotspotPageViewvue_type_script_lang_ts, [['render',HotspotPageViewvue_type_template_id_1e0878f2_ts_true_render]])

/* harmony default export */ var HotspotPageView = (HotspotPageView_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SmallLinkListView.vue?vue&type=template&id=bb638c34&scoped=true&ts=true


const SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-bb638c34"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_1 = {
  class: "breadcrumbs"
};

const SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_2 = /*#__PURE__*/SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, "Home", -1));

const SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_3 = /*#__PURE__*/SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "breadcrumb-separator"
}, "\\", -1));

const SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_4 = /*#__PURE__*/SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "breadcrumb-separator"
}, "\\", -1));

const SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_5 = {
  class: "sm-view-wrapper"
};
const SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_6 = {
  style: {
    "padding": "0"
  }
};
const SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_7 = {
  class: "small-view-link"
};
const SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_8 = ["innerHTML"];
const SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_9 = {
  class: "accordion",
  style: {
    "background-color": "transparent"
  }
};
const SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_10 = ["innerHTML"];
function SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");

  const _component_svg_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("svg-icon");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
    id: "smallLinkListView",
    class: (0,shared_esm_bundler/* normalizeClass */.C_)([{
      'display': _ctx.viewMode === 'smallOnly'
    }, "sm-view"])
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
    to: {
      name: 'home'
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_2]),
    _: 1
  }), SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_3, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
    to: {
      name: 'hotspotPage',
      params: {
        pageName: _ctx.pageName
      }
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.getPageName), 1)]),
    _: 1
  }, 8, ["to"]), SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_4, (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.linkText), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */._)("ul", SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_6, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.link.links, (l, index) => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("li", {
      key: index
    }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_7, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_svg_icon, {
      class: "icon rotate90",
      icon: "arrow",
      color1: "#005EB8",
      color2: "#fff",
      color3: "#005EB8"
    }), (0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
      innerHTML: l.text
    }, null, 8, SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_8)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("ul", SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_9, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(l.links, (accLink, index) => {
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("li", {
        class: "accordionLi",
        key: index
      }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
        innerHTML: accLink.text
      }, null, 8, SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_hoisted_10)]);
    }), 128))])]);
  }), 128))])])], 2);
}
;// CONCATENATED MODULE: ./src/components/SmallLinkListView.vue?vue&type=template&id=bb638c34&scoped=true&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SmallLinkListView.vue?vue&type=script&lang=ts






/* harmony default export */ var SmallLinkListViewvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "SmallLinkListView",
  components: {
    SvgIcon: SvgIcon
  },
  props: {
    pageName: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      store: (0,vuex_esm_bundler/* useStore */.oR)(key),
      page: new HotspotPage(),
      link: new Link()
    };
  },

  computed: { ...(0,vuex_esm_bundler/* mapState */.rn)(["sessionConfig", "viewMode"]),

    getPageName() {
      let strName = "";
      this.page.name.split("-").forEach(x => {
        if (strName === "" && x !== "") {
          // capitalise first letter
          strName = x[0].toUpperCase();
          strName = strName + x.slice(1);
        } else {
          strName = strName + " " + x;
        }
      });
      return strName;
    }

  },

  async mounted() {
    // get page
    this.page = this.sessionConfig.hotspotPages.find(x => x.name === this.pageName); // get link inside page

    if (this.page) {
      const l = this.page.links.find(x => x.text === this.linkText);

      if (l) {
        this.link = l;
      }
    }
  },

  methods: {
    getIconColor(color) {
      switch (color) {
        case 2:
          return "#fff";

        default:
          return "#000";
      }
    },

    goHome() {
      this.$router.push("/");
    }

  }
}));
;// CONCATENATED MODULE: ./src/components/SmallLinkListView.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SmallLinkListView.vue?vue&type=style&index=0&id=bb638c34&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/SmallLinkListView.vue?vue&type=style&index=0&id=bb638c34&scoped=true&lang=scss

;// CONCATENATED MODULE: ./src/components/SmallLinkListView.vue




;


const SmallLinkListView_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SmallLinkListViewvue_type_script_lang_ts, [['render',SmallLinkListViewvue_type_template_id_bb638c34_scoped_true_ts_true_render],['__scopeId',"data-v-bb638c34"]])

/* harmony default export */ var SmallLinkListView = (SmallLinkListView_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/InformationPage.vue?vue&type=template&id=ed0eac4c&scoped=true&ts=true


const InformationPagevue_type_template_id_ed0eac4c_scoped_true_ts_true_withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-ed0eac4c"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const InformationPagevue_type_template_id_ed0eac4c_scoped_true_ts_true_hoisted_1 = {
  id: "smallLinkListView",
  class: "sm-view display"
};
const InformationPagevue_type_template_id_ed0eac4c_scoped_true_ts_true_hoisted_2 = {
  class: "breadcrumbs"
};

const InformationPagevue_type_template_id_ed0eac4c_scoped_true_ts_true_hoisted_3 = /*#__PURE__*/InformationPagevue_type_template_id_ed0eac4c_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, "Home", -1));

const InformationPagevue_type_template_id_ed0eac4c_scoped_true_ts_true_hoisted_4 = /*#__PURE__*/InformationPagevue_type_template_id_ed0eac4c_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "breadcrumb-separator"
}, "\\", -1));

const InformationPagevue_type_template_id_ed0eac4c_scoped_true_ts_true_hoisted_5 = {
  class: "sm-view-wrapper information-text"
};
const InformationPagevue_type_template_id_ed0eac4c_scoped_true_ts_true_hoisted_6 = ["innerHTML"];
function InformationPagevue_type_template_id_ed0eac4c_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", InformationPagevue_type_template_id_ed0eac4c_scoped_true_ts_true_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", InformationPagevue_type_template_id_ed0eac4c_scoped_true_ts_true_hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
    to: {
      name: 'home'
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [InformationPagevue_type_template_id_ed0eac4c_scoped_true_ts_true_hoisted_3]),
    _: 1
  }), InformationPagevue_type_template_id_ed0eac4c_scoped_true_ts_true_hoisted_4, (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.sessionConfig.info.title), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", InformationPagevue_type_template_id_ed0eac4c_scoped_true_ts_true_hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
    innerHTML: _ctx.sessionConfig.info.text
  }, null, 8, InformationPagevue_type_template_id_ed0eac4c_scoped_true_ts_true_hoisted_6)])]);
}
;// CONCATENATED MODULE: ./src/components/InformationPage.vue?vue&type=template&id=ed0eac4c&scoped=true&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/InformationPage.vue?vue&type=script&lang=ts




/* harmony default export */ var InformationPagevue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "InformationPage",
  props: {
    pName: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      store: (0,vuex_esm_bundler/* useStore */.oR)(key),
      page: new HotspotPage()
    };
  },

  computed: { ...(0,vuex_esm_bundler/* mapState */.rn)(["sessionConfig", "viewMode"]),

    nicePageName() {
      let strName = "";
      this.page.name.split("-").forEach(x => {
        if (strName === "" && x !== "") {
          // capitalise first letter
          strName = x[0].toUpperCase();
          strName = strName + x.slice(1);
        } else {
          strName = strName + " " + x;
        }
      });
      return strName;
    }

  },

  async mounted() {
    // get page
    this.page = this.sessionConfig.hotspotPages.find(x => x.name === this.pName);
  }

}));
;// CONCATENATED MODULE: ./src/components/InformationPage.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/InformationPage.vue?vue&type=style&index=0&id=ed0eac4c&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/InformationPage.vue?vue&type=style&index=0&id=ed0eac4c&scoped=true&lang=scss

;// CONCATENATED MODULE: ./src/components/InformationPage.vue




;


const InformationPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(InformationPagevue_type_script_lang_ts, [['render',InformationPagevue_type_template_id_ed0eac4c_scoped_true_ts_true_render],['__scopeId',"data-v-ed0eac4c"]])

/* harmony default export */ var InformationPage = (InformationPage_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OverviewPage.vue?vue&type=template&id=17077597&scoped=true&ts=true


const OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-17077597"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_hoisted_1 = {
  id: "smallLinkListView",
  class: "sm-view display"
};
const OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_hoisted_2 = {
  class: "breadcrumbs"
};

const OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_hoisted_3 = /*#__PURE__*/OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, "Home", -1));

const OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_hoisted_4 = /*#__PURE__*/OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "breadcrumb-separator"
}, "\\", -1));

const OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_hoisted_5 = /*#__PURE__*/OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "breadcrumb-separator"
}, "\\", -1));

const OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_hoisted_6 = {
  class: "sm-view-wrapper overview-text"
};
const OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_hoisted_7 = ["innerHTML"];
function OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
    to: {
      name: 'home'
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_hoisted_3]),
    _: 1
  }), OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_hoisted_4, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
    to: {
      name: 'hotspotPage',
      params: {
        pageName: _ctx.pName
      }
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.nicePageName), 1)]),
    _: 1
  }, 8, ["to"]), OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_hoisted_5, (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.sessionConfig.overview.text), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_hoisted_6, [(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
    innerHTML: _ctx.sessionConfig.overview.links[0].text
  }, null, 8, OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_hoisted_7)])]);
}
;// CONCATENATED MODULE: ./src/components/OverviewPage.vue?vue&type=template&id=17077597&scoped=true&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OverviewPage.vue?vue&type=script&lang=ts




/* harmony default export */ var OverviewPagevue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "OverviewPage",
  props: {
    pName: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      store: (0,vuex_esm_bundler/* useStore */.oR)(key),
      page: new HotspotPage()
    };
  },

  computed: { ...(0,vuex_esm_bundler/* mapState */.rn)(["sessionConfig", "viewMode"]),

    nicePageName() {
      let strName = "";
      this.page.name.split("-").forEach(x => {
        if (strName === "" && x !== "") {
          // capitalise first letter
          strName = x[0].toUpperCase();
          strName = strName + x.slice(1);
        } else {
          strName = strName + " " + x;
        }
      });
      return strName;
    }

  },

  async mounted() {
    // get page
    this.page = this.sessionConfig.hotspotPages.find(x => x.name === this.pName);
  }

}));
;// CONCATENATED MODULE: ./src/components/OverviewPage.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OverviewPage.vue?vue&type=style&index=0&id=17077597&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/OverviewPage.vue?vue&type=style&index=0&id=17077597&scoped=true&lang=scss

;// CONCATENATED MODULE: ./src/components/OverviewPage.vue




;


const OverviewPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(OverviewPagevue_type_script_lang_ts, [['render',OverviewPagevue_type_template_id_17077597_scoped_true_ts_true_render],['__scopeId',"data-v-17077597"]])

/* harmony default export */ var OverviewPage = (OverviewPage_exports_);
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
}, {
  path: "/page/information",
  name: "InformationPage",
  props: true,
  component: InformationPage
}, // dynamic segments start with a colon
{
  path: "/page/:pageName",
  name: "hotspotPage",
  props: true,
  component: HotspotPageView
}, {
  path: "/page/:pageName/link/:linkText",
  name: "SmallLinkListView",
  props: true,
  component: SmallLinkListView
}, {
  path: "/page/:pageName/overview",
  name: "OverviewPage",
  props: true,
  component: OverviewPage
}, {
  path: "/error",
  name: "errorPage",
  component: ErrorPageView
}, {
  path: "/:catchAll(.*)",
  name: "NotFound",
  redirect: "/" // component: NotFound
  // component: () => import("../views/PageNotFound.vue")

}];
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
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=0d22a264&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/App.vue?vue&type=style&index=0&id=0d22a264&lang=scss

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], function() { return __webpack_require__(806); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map