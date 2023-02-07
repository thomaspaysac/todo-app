/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/edit-icon.svg */ "./src/images/edit-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/remove-icon.svg */ "./src/images/remove-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Gamja+Flower&family=Ubuntu:ital,wght@0,400;0,700;1,300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  font-family: 'Ubuntu', sans-serif; }\r\n\r\n.form-container {\r\n  width: 400px;\r\n  height: auto; }\r\n\r\nbody {\r\n  height: 100vh;\r\n  margin: 0; }\r\n\r\nheader {\r\n  display: flex;\r\n  height: 10vh;\r\n  background-color: #555555; }\r\n\r\nmain {\r\n  display: flex;\r\n  height: 90vh; }\r\n\r\n.logo__container {\r\n  width: 15%;\r\n  display: flex;\r\n  align-items: center; }\r\n  .logo__container h1 {\r\n    font-family: 'Gamja Flower';\r\n    margin: 0 0 0 20px;\r\n    font-size: 3.5rem;\r\n    color: #eeeeee; }\r\n\r\n.header__container {\r\n  width: 85%;\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n  gap: 32px;\r\n  padding-right: 20px; }\r\n  .header__container a {\r\n    color: #eeeeee;\r\n    text-decoration: none; }\r\n\r\n.sidebar__container {\r\n  width: 300px;\r\n  padding: 20px;\r\n  background-color: #666666;\r\n  color: #eeeeee;\r\n  overflow-y: scroll; }\r\n\r\n.sidebar-category {\r\n  margin-bottom: 32px; }\r\n  .sidebar-category h2 {\r\n    font-weight: 700;\r\n    font-size: 1rem;\r\n    margin: 0 0 8px 0; }\r\n  .sidebar-category ul {\r\n    margin: 0 0 0 8px;\r\n    padding: 0;\r\n    list-style-type: none; }\r\n\r\n.sidebar-tasklist {\r\n  margin-bottom: 8px; }\r\n\r\n.tasklist-subtasks {\r\n  color: #aaaaaa;\r\n  font-size: 0.9rem;\r\n  font-style: italic; }\r\n  .tasklist-subtasks li {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis; }\r\n\r\n.content__container {\r\n  background-color: #eeeeee;\r\n  width: 100%;\r\n  padding: 20px; }\r\n\r\n.content__tasklist-header {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px; }\r\n\r\n.content__tasklist-title {\r\n  font-size: 1.5rem;\r\n  margin: 10px 0;\r\n  margin-right: 8px; }\r\n\r\n.content__tasklist-description {\r\n  color: #aaaaaa;\r\n  border-left: 3px solid #aaaaaa;\r\n  padding-left: 8px;\r\n  margin-bottom: 24px; }\r\n\r\n.edit-tasklist__button,\r\n.edit-single-task__button {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  height: 20px;\r\n  width: 20px; }\r\n\r\n.remove-tasklist__button,\r\n.remove-single-task__button {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  height: 20px;\r\n  width: 20px; }\r\n\r\n.data_legends {\r\n  color: #aaaaaa;\r\n  display: grid;\r\n  grid-template-columns: 28px 6fr 2fr 1fr 60px;\r\n  align-items: center; }\r\n\r\n.single-task__container {\r\n  margin: 16px 0;\r\n  border-bottom: 1px solid #aaaaaa; }\r\n\r\n.single-task__datas {\r\n  display: grid;\r\n  grid-template-columns: 20px 6fr 2fr 1fr 30px 30px;\r\n  align-items: center; }\r\n  .single-task__datas h3 {\r\n    margin: 0;\r\n    margin-left: 8px; }\r\n  .single-task__datas input[type=\"checkbox\"] {\r\n    margin: 0;\r\n    height: 15px;\r\n    justify-self: start; }\r\n\r\n.single-task__description {\r\n  color: #aaaaaa;\r\n  width: 60%;\r\n  font-size: 0.8rem;\r\n  font-style: italic;\r\n  border-left: 3px solid #aaaaaa;\r\n  padding-left: 8px;\r\n  margin: 8px 0; }\r\n\r\n/*# sourceMappingURL=style.css.map */\r\n", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,iCAAiC,EAAA;;AAGnC;EACE,YAAY;EACZ,YAAY,EAAA;;AAGd;EACE,aAAa;EACb,SAAQ,EAAA;;AAGV;EACE,aAAa;EACb,YAAY;EACZ,yBAAyB,EAAA;;AAG3B;EACE,aAAa;EACb,YAAY,EAAA;;AAGd;EACE,UAAU;EACV,aAAa;EACb,mBAAmB,EAAA;EAEnB;IACA,2BAA2B;IAC3B,kBAAkB;IAClB,iBAAiB;IACjB,cAAc,EAAA;;AAIhB;EACE,UAAU;EACV,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,SAAS;EACT,mBAAmB,EAAA;EAEnB;IACE,cAAc;IACd,qBAAqB,EAAA;;AAKzB;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,cAAc;EACd,kBAAkB,EAAA;;AAGpB;EACE,mBAAmB,EAAA;EAEnB;IACE,gBAAgB;IAChB,eAAe;IACf,iBAAiB,EAAA;EAGnB;IACE,iBAAiB;IACjB,UAAU;IACV,qBAAqB,EAAA;;AAIzB;EACE,kBAAkB,EAAA;;AAGpB;EACE,cAAc;EACd,iBAAiB;EACjB,kBAAkB,EAAA;EAElB;IACI,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB,EAAA;;AAM7B;EACE,yBAAyB;EACzB,WAAW;EACX,aAAa,EAAA;;AAGf;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS,EAAA;;AAGX;EACE,iBAAiB;EACjB,cAAc;EACd,iBAAiB,EAAA;;AAGnB;EACE,cAAc;EACd,8BAA8B;EAC9B,iBAAiB;EACjB,mBAAkB,EAAA;;AAGpB;;EAEE,yDAA+C;EAC/C,YAAY;EACZ,WAAW,EAAA;;AAGb;;EAEE,yDAAiD;EACjD,YAAY;EACZ,WAAW,EAAA;;AAGb;EACE,cAAc;EACd,aAAa;EACb,4CAA4C;EAC5C,mBAAmB,EAAA;;AAGrB;EACE,cAAc;EACd,gCAAgC,EAAA;;AAGlC;EACE,aAAa;EACb,iDAAiD;EACjD,mBAAmB,EAAA;EAEnB;IACE,SAAS;IACT,gBAAgB,EAAA;EAGlB;IACE,SAAS;IACT,YAAY;IACZ,mBAAmB,EAAA;;AAIvB;EACE,cAAc;EACd,UAAU;EACV,iBAAiB;EACjB,kBAAkB;EAClB,8BAA8B;EAC9B,iBAAiB;EACjB,aAAa,EAAA;;ACpCf,oCAAoC","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom-create.js":
/*!***************************!*\
  !*** ./src/dom-create.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTasklistContainer": () => (/* binding */ createTasklistContainer),
/* harmony export */   "loadTasklistDetails": () => (/* binding */ loadTasklistDetails)
/* harmony export */ });
const sidebar_tasklists = document.querySelector('.sidebar-tasklists');
const content_container = document.querySelector('.content-output');

const createTasklistContainer = (taskListsArray) => {
  sidebar_tasklists.textContent = '';
  taskListsArray.forEach(el => {
    const tasklist_block = document.createElement('li');
    tasklist_block.classList.add('sidebar-tasklist');
    sidebar_tasklists.appendChild(tasklist_block);
    const tasklist_title = document.createElement('div');
    tasklist_title.classList.add('tasklist-title');
    tasklist_title.textContent = el.title;
    tasklist_block.appendChild(tasklist_title);
    (el.content).forEach(el => {
      const tasklist_content = document.createElement('ul');
      tasklist_content.classList.add('tasklist-subtasks');
      tasklist_content.textContent = el.title;
      tasklist_block.appendChild(tasklist_content);
    });
  });
};

const loadTasklistDetails = (tasklist) => {
  content_container.textContent = '';
  const tasklist_title = document.createElement('h2');
  tasklist_title.textContent = tasklist.title;
  content_container.appendChild(tasklist_title);
  (tasklist.content).forEach(tsk => {
    const singleTaskContainer = document.createElement('div');
    content_container.appendChild(singleTaskContainer);
    const taskTitle = document.createElement('h3');
    taskTitle.textContent = tsk.title;
    singleTaskContainer.appendChild(taskTitle);
    const taskDesc = document.createElement('div');
    taskDesc.textContent = tsk.description;
    singleTaskContainer.appendChild(taskDesc);
  });
};



/***/ }),

/***/ "./src/images/edit-icon.svg":
/*!**********************************!*\
  !*** ./src/images/edit-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8421b7fc701a0f1a93be.svg";

/***/ }),

/***/ "./src/images/remove-icon.svg":
/*!************************************!*\
  !*** ./src/images/remove-icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4a7b26be64c05d0f239.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-create.js */ "./src/dom-create.js");




const NEW_TASK_FORM = document.getElementById('add-task_form');
const TEST_BUTTON = document.getElementById('superbutton'); // test purpose
const taskListsContainer = [];
let newTask;


// Factory function for creating new single tasks
const Task = (title, description, deadline, priority, tasklist) => {
  return { title, description, deadline, priority, tasklist };
};

// Factory function for creating tasklists, unto which we can push single tasks
const Tasklist = (title, description) => {
  const content = [];
  return { title, description, content };
};


// Get tasks infos from form, put it in newTask variable for use in other functions
//
const getFormData = (() => {NEW_TASK_FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(NEW_TASK_FORM);
  const taskData = Object.fromEntries(formData);
  const tasklist = taskData.taskList;
  const title = taskData.taskTitle;
  const description = taskData.taskDescription;
  const deadline = taskData.taskDeadline;
  const priority = taskData.taskPriority;
  newTask = Task(title, description, deadline, priority, tasklist);
  addTaskToTaskList(newTask);
  });
})();

// Add the newTask to its task list if it exist, create one if it doesnt
const addTaskToTaskList = (newTask) => {
  //If the tasklist title is already in the database, this will return the tasklist object. Otherwise, returns undefined
  const targetTaskList = taskListsContainer.find(({ title }) => title === newTask.tasklist);
  if (targetTaskList === undefined) { // i.e. no tasklist with this name exists yet
    console.log('This is a new tasklist');
    const newTaskList = Tasklist(newTask.tasklist, '');
    taskListsContainer.push(newTaskList);
    (newTaskList.content).push(newTask);
    (0,_dom_create_js__WEBPACK_IMPORTED_MODULE_1__.createTasklistContainer)(taskListsContainer);
    displayController();
  } else {
    console.log('Adding task to the existing tasklist...');
    (targetTaskList.content).push(newTask);
    (0,_dom_create_js__WEBPACK_IMPORTED_MODULE_1__.createTasklistContainer)(taskListsContainer);
    displayController();
  }
};

// If the newTask doesn't go in a tasklist, add it directly to the DOM
// Otherwise, add the tasklist then the task to the DOM


// When clicking on a takslist name, update the display with the list of tasks
const displayController = () => {
  const tasklist_block = document.getElementsByClassName('sidebar-tasklist');
  const tasklist = document.getElementsByClassName('tasklist-title');
  for (let i = 0; i < tasklist.length; i++) {
    tasklist_block[i].addEventListener('click', () => {
       // Get the name of the clicked tasklist
      const clicked_task = tasklist[i].textContent;
      // Use the takslist name to find the tasklist in the taskListsContainer
      const targetTaskList = taskListsContainer.find(({ title }) => title === clicked_task);
      (0,_dom_create_js__WEBPACK_IMPORTED_MODULE_1__.loadTasklistDetails)(targetTaskList);
    });
  }
};


// When clicking on a task name, update the display with task infos



// Test purpose

TEST_BUTTON.addEventListener('click', () => {
    console.log(taskListsContainer);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9kb20tY3JlYXRlLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2VkaXQtaWNvbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9yZW1vdmUtaWNvbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdhbWphK0Zsb3dlciZmYW1pbHk9VWJ1bnR1Oml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjsgfVxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87IH1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBtYXJnaW46IDA7IH1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMTB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU1NTU7IH1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDkwdmg7IH1cXHJcXG5cXHJcXG4ubG9nb19fY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxNSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcclxcbiAgLmxvZ29fX2NvbnRhaW5lciBoMSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR2FtamEgRmxvd2VyJztcXHJcXG4gICAgbWFyZ2luOiAwIDAgMCAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG4gICAgY29sb3I6ICNlZWVlZWU7IH1cXHJcXG5cXHJcXG4uaGVhZGVyX19jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDMycHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XFxyXFxuICAuaGVhZGVyX19jb250YWluZXIgYSB7XFxyXFxuICAgIGNvbG9yOiAjZWVlZWVlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXHJcXG5cXHJcXG4uc2lkZWJhcl9fY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjY2O1xcclxcbiAgY29sb3I6ICNlZWVlZWU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7IH1cXHJcXG5cXHJcXG4uc2lkZWJhci1jYXRlZ29yeSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMnB4OyB9XFxyXFxuICAuc2lkZWJhci1jYXRlZ29yeSBoMiB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgOHB4IDA7IH1cXHJcXG4gIC5zaWRlYmFyLWNhdGVnb3J5IHVsIHtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMCA4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcclxcblxcclxcbi5zaWRlYmFyLXRhc2tsaXN0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDhweDsgfVxcclxcblxcclxcbi50YXNrbGlzdC1zdWJ0YXNrcyB7XFxyXFxuICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxyXFxuICAudGFza2xpc3Qtc3VidGFza3MgbGkge1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxcclxcblxcclxcbi5jb250ZW50X19jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMjBweDsgfVxcclxcblxcclxcbi5jb250ZW50X190YXNrbGlzdC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDE2cHg7IH1cXHJcXG5cXHJcXG4uY29udGVudF9fdGFza2xpc3QtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogOHB4OyB9XFxyXFxuXFxyXFxuLmNvbnRlbnRfX3Rhc2tsaXN0LWRlc2NyaXB0aW9uIHtcXHJcXG4gIGNvbG9yOiAjYWFhYWFhO1xcclxcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjYWFhYWFhO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XFxyXFxuXFxyXFxuLmVkaXQtdGFza2xpc3RfX2J1dHRvbixcXHJcXG4uZWRpdC1zaW5nbGUtdGFza19fYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMjBweDsgfVxcclxcblxcclxcbi5yZW1vdmUtdGFza2xpc3RfX2J1dHRvbixcXHJcXG4ucmVtb3ZlLXNpbmdsZS10YXNrX19idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiAyMHB4OyB9XFxyXFxuXFxyXFxuLmRhdGFfbGVnZW5kcyB7XFxyXFxuICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4cHggNmZyIDJmciAxZnIgNjBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXHJcXG5cXHJcXG4uc2luZ2xlLXRhc2tfX2NvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IDE2cHggMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFhYWFhOyB9XFxyXFxuXFxyXFxuLnNpbmdsZS10YXNrX19kYXRhcyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDZmciAyZnIgMWZyIDMwcHggMzBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXHJcXG4gIC5zaW5nbGUtdGFza19fZGF0YXMgaDMge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7IH1cXHJcXG4gIC5zaW5nbGUtdGFza19fZGF0YXMgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0OyB9XFxyXFxuXFxyXFxuLnNpbmdsZS10YXNrX19kZXNjcmlwdGlvbiB7XFxyXFxuICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2FhYWFhYTtcXHJcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcclxcbiAgbWFyZ2luOiA4cHggMDsgfVxcclxcblxcclxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLFNBQVEsRUFBQTs7QUFHVjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFHZDtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7RUFFbkI7SUFDQSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUIsRUFBQTtFQUVuQjtJQUNFLGNBQWM7SUFDZCxxQkFBcUIsRUFBQTs7QUFLekI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsbUJBQW1CLEVBQUE7RUFFbkI7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBR25CO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixxQkFBcUIsRUFBQTs7QUFJekI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0VBRWxCO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUIsRUFBQTs7QUFNN0I7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUyxFQUFBOztBQUdYO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixtQkFBa0IsRUFBQTs7QUFHcEI7O0VBRUUseURBQStDO0VBQy9DLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7O0VBRUUseURBQWlEO0VBQ2pELFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLDRDQUE0QztFQUM1QyxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsYUFBYTtFQUNiLGlEQUFpRDtFQUNqRCxtQkFBbUIsRUFBQTtFQUVuQjtJQUNFLFNBQVM7SUFDVCxnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLFNBQVM7SUFDVCxZQUFZO0lBQ1osbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQ3BDZixvQ0FBb0NcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBzaWRlYmFyX3Rhc2tsaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLXRhc2tsaXN0cycpO1xyXG5jb25zdCBjb250ZW50X2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LW91dHB1dCcpO1xyXG5cclxuY29uc3QgY3JlYXRlVGFza2xpc3RDb250YWluZXIgPSAodGFza0xpc3RzQXJyYXkpID0+IHtcclxuICBzaWRlYmFyX3Rhc2tsaXN0cy50ZXh0Q29udGVudCA9ICcnO1xyXG4gIHRhc2tMaXN0c0FycmF5LmZvckVhY2goZWwgPT4ge1xyXG4gICAgY29uc3QgdGFza2xpc3RfYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgdGFza2xpc3RfYmxvY2suY2xhc3NMaXN0LmFkZCgnc2lkZWJhci10YXNrbGlzdCcpO1xyXG4gICAgc2lkZWJhcl90YXNrbGlzdHMuYXBwZW5kQ2hpbGQodGFza2xpc3RfYmxvY2spO1xyXG4gICAgY29uc3QgdGFza2xpc3RfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tsaXN0X3RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tsaXN0LXRpdGxlJyk7XHJcbiAgICB0YXNrbGlzdF90aXRsZS50ZXh0Q29udGVudCA9IGVsLnRpdGxlO1xyXG4gICAgdGFza2xpc3RfYmxvY2suYXBwZW5kQ2hpbGQodGFza2xpc3RfdGl0bGUpO1xyXG4gICAgKGVsLmNvbnRlbnQpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICBjb25zdCB0YXNrbGlzdF9jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgdGFza2xpc3RfY29udGVudC5jbGFzc0xpc3QuYWRkKCd0YXNrbGlzdC1zdWJ0YXNrcycpO1xyXG4gICAgICB0YXNrbGlzdF9jb250ZW50LnRleHRDb250ZW50ID0gZWwudGl0bGU7XHJcbiAgICAgIHRhc2tsaXN0X2Jsb2NrLmFwcGVuZENoaWxkKHRhc2tsaXN0X2NvbnRlbnQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBsb2FkVGFza2xpc3REZXRhaWxzID0gKHRhc2tsaXN0KSA9PiB7XHJcbiAgY29udGVudF9jb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICBjb25zdCB0YXNrbGlzdF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgdGFza2xpc3RfdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrbGlzdC50aXRsZTtcclxuICBjb250ZW50X2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrbGlzdF90aXRsZSk7XHJcbiAgKHRhc2tsaXN0LmNvbnRlbnQpLmZvckVhY2godHNrID0+IHtcclxuICAgIGNvbnN0IHNpbmdsZVRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnRfY29udGFpbmVyLmFwcGVuZENoaWxkKHNpbmdsZVRhc2tDb250YWluZXIpO1xyXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRzay50aXRsZTtcclxuICAgIHNpbmdsZVRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRzay5kZXNjcmlwdGlvbjtcclxuICAgIHNpbmdsZVRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2MpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlVGFza2xpc3RDb250YWluZXIsIGxvYWRUYXNrbGlzdERldGFpbHMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2tsaXN0Q29udGFpbmVyLCBsb2FkVGFza2xpc3REZXRhaWxzIH0gZnJvbSAnLi9kb20tY3JlYXRlLmpzJztcclxuaW1wb3J0IHsgZm9ybWF0LCBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5cclxuY29uc3QgTkVXX1RBU0tfRk9STSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFza19mb3JtJyk7XHJcbmNvbnN0IFRFU1RfQlVUVE9OID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1cGVyYnV0dG9uJyk7IC8vIHRlc3QgcHVycG9zZVxyXG5jb25zdCB0YXNrTGlzdHNDb250YWluZXIgPSBbXTtcclxubGV0IG5ld1Rhc2s7XHJcblxyXG5cclxuLy8gRmFjdG9yeSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgbmV3IHNpbmdsZSB0YXNrc1xyXG5jb25zdCBUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGVhZGxpbmUsIHByaW9yaXR5LCB0YXNrbGlzdCkgPT4ge1xyXG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZGVhZGxpbmUsIHByaW9yaXR5LCB0YXNrbGlzdCB9O1xyXG59O1xyXG5cclxuLy8gRmFjdG9yeSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgdGFza2xpc3RzLCB1bnRvIHdoaWNoIHdlIGNhbiBwdXNoIHNpbmdsZSB0YXNrc1xyXG5jb25zdCBUYXNrbGlzdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24pID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gW107XHJcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjb250ZW50IH07XHJcbn07XHJcblxyXG5cclxuLy8gR2V0IHRhc2tzIGluZm9zIGZyb20gZm9ybSwgcHV0IGl0IGluIG5ld1Rhc2sgdmFyaWFibGUgZm9yIHVzZSBpbiBvdGhlciBmdW5jdGlvbnNcclxuLy9cclxuY29uc3QgZ2V0Rm9ybURhdGEgPSAoKCkgPT4ge05FV19UQVNLX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoTkVXX1RBU0tfRk9STSk7XHJcbiAgY29uc3QgdGFza0RhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xyXG4gIGNvbnN0IHRhc2tsaXN0ID0gdGFza0RhdGEudGFza0xpc3Q7XHJcbiAgY29uc3QgdGl0bGUgPSB0YXNrRGF0YS50YXNrVGl0bGU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSB0YXNrRGF0YS50YXNrRGVzY3JpcHRpb247XHJcbiAgY29uc3QgZGVhZGxpbmUgPSB0YXNrRGF0YS50YXNrRGVhZGxpbmU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSB0YXNrRGF0YS50YXNrUHJpb3JpdHk7XHJcbiAgbmV3VGFzayA9IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkZWFkbGluZSwgcHJpb3JpdHksIHRhc2tsaXN0KTtcclxuICBhZGRUYXNrVG9UYXNrTGlzdChuZXdUYXNrKTtcclxuICB9KTtcclxufSkoKTtcclxuXHJcbi8vIEFkZCB0aGUgbmV3VGFzayB0byBpdHMgdGFzayBsaXN0IGlmIGl0IGV4aXN0LCBjcmVhdGUgb25lIGlmIGl0IGRvZXNudFxyXG5jb25zdCBhZGRUYXNrVG9UYXNrTGlzdCA9IChuZXdUYXNrKSA9PiB7XHJcbiAgLy9JZiB0aGUgdGFza2xpc3QgdGl0bGUgaXMgYWxyZWFkeSBpbiB0aGUgZGF0YWJhc2UsIHRoaXMgd2lsbCByZXR1cm4gdGhlIHRhc2tsaXN0IG9iamVjdC4gT3RoZXJ3aXNlLCByZXR1cm5zIHVuZGVmaW5lZFxyXG4gIGNvbnN0IHRhcmdldFRhc2tMaXN0ID0gdGFza0xpc3RzQ29udGFpbmVyLmZpbmQoKHsgdGl0bGUgfSkgPT4gdGl0bGUgPT09IG5ld1Rhc2sudGFza2xpc3QpO1xyXG4gIGlmICh0YXJnZXRUYXNrTGlzdCA9PT0gdW5kZWZpbmVkKSB7IC8vIGkuZS4gbm8gdGFza2xpc3Qgd2l0aCB0aGlzIG5hbWUgZXhpc3RzIHlldFxyXG4gICAgY29uc29sZS5sb2coJ1RoaXMgaXMgYSBuZXcgdGFza2xpc3QnKTtcclxuICAgIGNvbnN0IG5ld1Rhc2tMaXN0ID0gVGFza2xpc3QobmV3VGFzay50YXNrbGlzdCwgJycpO1xyXG4gICAgdGFza0xpc3RzQ29udGFpbmVyLnB1c2gobmV3VGFza0xpc3QpO1xyXG4gICAgKG5ld1Rhc2tMaXN0LmNvbnRlbnQpLnB1c2gobmV3VGFzayk7XHJcbiAgICBjcmVhdGVUYXNrbGlzdENvbnRhaW5lcih0YXNrTGlzdHNDb250YWluZXIpO1xyXG4gICAgZGlzcGxheUNvbnRyb2xsZXIoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ0FkZGluZyB0YXNrIHRvIHRoZSBleGlzdGluZyB0YXNrbGlzdC4uLicpO1xyXG4gICAgKHRhcmdldFRhc2tMaXN0LmNvbnRlbnQpLnB1c2gobmV3VGFzayk7XHJcbiAgICBjcmVhdGVUYXNrbGlzdENvbnRhaW5lcih0YXNrTGlzdHNDb250YWluZXIpO1xyXG4gICAgZGlzcGxheUNvbnRyb2xsZXIoKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBJZiB0aGUgbmV3VGFzayBkb2Vzbid0IGdvIGluIGEgdGFza2xpc3QsIGFkZCBpdCBkaXJlY3RseSB0byB0aGUgRE9NXHJcbi8vIE90aGVyd2lzZSwgYWRkIHRoZSB0YXNrbGlzdCB0aGVuIHRoZSB0YXNrIHRvIHRoZSBET01cclxuXHJcblxyXG4vLyBXaGVuIGNsaWNraW5nIG9uIGEgdGFrc2xpc3QgbmFtZSwgdXBkYXRlIHRoZSBkaXNwbGF5IHdpdGggdGhlIGxpc3Qgb2YgdGFza3NcclxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGFza2xpc3RfYmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaWRlYmFyLXRhc2tsaXN0Jyk7XHJcbiAgY29uc3QgdGFza2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrbGlzdC10aXRsZScpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza2xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHRhc2tsaXN0X2Jsb2NrW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgLy8gR2V0IHRoZSBuYW1lIG9mIHRoZSBjbGlja2VkIHRhc2tsaXN0XHJcbiAgICAgIGNvbnN0IGNsaWNrZWRfdGFzayA9IHRhc2tsaXN0W2ldLnRleHRDb250ZW50O1xyXG4gICAgICAvLyBVc2UgdGhlIHRha3NsaXN0IG5hbWUgdG8gZmluZCB0aGUgdGFza2xpc3QgaW4gdGhlIHRhc2tMaXN0c0NvbnRhaW5lclxyXG4gICAgICBjb25zdCB0YXJnZXRUYXNrTGlzdCA9IHRhc2tMaXN0c0NvbnRhaW5lci5maW5kKCh7IHRpdGxlIH0pID0+IHRpdGxlID09PSBjbGlja2VkX3Rhc2spO1xyXG4gICAgICBsb2FkVGFza2xpc3REZXRhaWxzKHRhcmdldFRhc2tMaXN0KTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG4vLyBXaGVuIGNsaWNraW5nIG9uIGEgdGFzayBuYW1lLCB1cGRhdGUgdGhlIGRpc3BsYXkgd2l0aCB0YXNrIGluZm9zXHJcblxyXG5cclxuXHJcbi8vIFRlc3QgcHVycG9zZVxyXG5cclxuVEVTVF9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrTGlzdHNDb250YWluZXIpO1xyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=