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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  font-family: 'Ubuntu', sans-serif; }\r\n\r\n.form-container {\r\n  width: 400px;\r\n  height: auto; }\r\n\r\nbody {\r\n  height: 100vh;\r\n  margin: 0; }\r\n\r\nheader {\r\n  display: flex;\r\n  height: 10vh;\r\n  background-color: #344B52; }\r\n\r\nmain {\r\n  display: flex;\r\n  height: 90vh; }\r\n\r\n.logo__container {\r\n  width: 15%;\r\n  display: flex;\r\n  align-items: center; }\r\n  .logo__container h1 {\r\n    font-family: 'Gamja Flower';\r\n    margin: 0 0 0 20px;\r\n    font-size: 3.5rem;\r\n    color: #efefef; }\r\n\r\n.header__container {\r\n  width: 85%;\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n  gap: 32px;\r\n  padding-right: 20px; }\r\n  .header__container a {\r\n    color: #efefef;\r\n    text-decoration: none; }\r\n\r\n.sidebar__container {\r\n  width: 300px;\r\n  padding: 20px;\r\n  background-color: #718186;\r\n  color: #efefef;\r\n  overflow-y: scroll; }\r\n\r\n.sidebar-category {\r\n  margin-bottom: 32px; }\r\n  .sidebar-category h2 {\r\n    font-weight: 700;\r\n    font-size: 1rem;\r\n    margin: 0 0 8px 0; }\r\n  .sidebar-category ul {\r\n    margin: 0 0 0 8px;\r\n    padding: 0;\r\n    list-style-type: none; }\r\n\r\n.sidebar-tasklist {\r\n  margin-bottom: 8px;\r\n  border-radius: 5px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis; }\r\n  .sidebar-tasklist:hover, .sidebar-tasklist:active {\r\n    background-color: #ccd2d479; }\r\n\r\n.tasklist-subtasks {\r\n  color: #cccccc;\r\n  font-size: 0.9rem;\r\n  font-style: italic; }\r\n  .tasklist-subtasks li {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis; }\r\n\r\n.content__container {\r\n  background-color: #efefef;\r\n  color: #232323;\r\n  width: 100%;\r\n  padding: 20px;\r\n  overflow-y: scroll; }\r\n\r\n.content__tasklist-header {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px; }\r\n\r\n.content__tasklist-title {\r\n  font-size: 1.5rem;\r\n  margin: 10px 0;\r\n  margin-right: 8px; }\r\n\r\n.content__tasklist-description {\r\n  color: #aaaaaa;\r\n  border-left: 3px solid #aaaaaa;\r\n  padding-left: 8px;\r\n  margin-bottom: 24px; }\r\n\r\n.edit-tasklist__button,\r\n.edit-single-task__button {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  height: 20px;\r\n  width: 20px; }\r\n\r\n.remove-tasklist__button,\r\n.remove-single-task__button {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  height: 20px;\r\n  width: 20px; }\r\n\r\n.data_legends {\r\n  color: #aaaaaa;\r\n  display: grid;\r\n  grid-template-columns: 28px 6fr 2fr 1fr 60px;\r\n  align-items: center;\r\n  font-size: 0.9rem; }\r\n  .data_legends :not(:nth-child(2)) {\r\n    justify-self: center; }\r\n\r\n.single-task__container {\r\n  margin: 16px 0;\r\n  border-bottom: 1px solid #aaaaaa; }\r\n  .single-task__container:hover, .single-task__container:active {\r\n    background-color: #eeecdf; }\r\n\r\n.single-task__datas {\r\n  display: grid;\r\n  grid-template-columns: 20px 6fr 2fr 1fr 30px 30px;\r\n  align-items: center; }\r\n  .single-task__datas h3 {\r\n    margin: 0;\r\n    margin-left: 8px; }\r\n  .single-task__datas input[type=\"checkbox\"] {\r\n    margin: 0;\r\n    height: 15px;\r\n    justify-self: start; }\r\n  .single-task__datas :not(:nth-child(2)) {\r\n    justify-self: center; }\r\n\r\n.single-task__description {\r\n  color: #aaaaaa;\r\n  width: 60%;\r\n  font-size: 0.8rem;\r\n  font-style: italic;\r\n  border-left: 3px solid #aaaaaa;\r\n  padding-left: 8px;\r\n  margin: 8px 0; }\r\n\r\n/*# sourceMappingURL=style.css.map */\r\n", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"AAKA;EACE,sBAAsB;EACtB,iCAAiC,EAAA;;AAGnC;EACE,YAAY;EACZ,YAAY,EAAA;;AAGd;EACE,aAAa;EACb,SAAQ,EAAA;;AAGV;EACE,aAAa;EACb,YAAY;EACZ,yBApBqB,EAAA;;AAuBvB;EACE,aAAa;EACb,YAAY,EAAA;;AAId;EACE,UAAU;EACV,aAAa;EACb,mBAAmB,EAAA;EAEnB;IACA,2BAA2B;IAC3B,kBAAkB;IAClB,iBAAiB;IACjB,cAtCqF,EAAA;;AA0CvF;EACE,UAAU;EACV,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,SAAS;EACT,mBAAmB,EAAA;EAEnB;IACE,cAnDmF;IAoDnF,qBAAqB,EAAA;;AAKzB;EACE,YAAY;EACZ,aAAa;EACb,yBA5D2C;EA6D3C,cA7DqF;EA8DrF,kBAAkB,EAAA;;AAGpB;EACE,mBAAmB,EAAA;EAEnB;IACE,gBAAgB;IAChB,eAAe;IACf,iBAAiB,EAAA;EAGnB;IACE,iBAAiB;IACjB,UAAU;IACV,qBAAqB,EAAA;;AAIzB;EACE,kBAAkB;EAClB,kBAAkB;EAElB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB,EAAA;EAEvB;IAEE,2BAA2B,EAAA;;AAI/B;EACE,cAAc;EACd,iBAAiB;EACjB,kBAAkB,EAAA;EAElB;IACI,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB,EAAA;;AAK7B;EACE,yBA7GqF;EA8GrF,cA9G0G;EA+G1G,WAAW;EACX,aAAa;EACb,kBAAkB,EAAA;;AAGpB;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS,EAAA;;AAGX;EACE,iBAAiB;EACjB,cAAc;EACd,iBAAiB,EAAA;;AAGnB;EACE,cAAc;EACd,8BAA8B;EAC9B,iBAAiB;EACjB,mBAAkB,EAAA;;AAGpB;;EAEE,yDAA+C;EAC/C,YAAY;EACZ,WAAW,EAAA;;AAGb;;EAEE,yDAAiD;EACjD,YAAY;EACZ,WAAW,EAAA;;AAGb;EACE,cAAc;EACd,aAAa;EACb,4CAA4C;EAC5C,mBAAmB;EACnB,iBAAiB,EAAA;EAEjB;IACE,oBAAoB,EAAA;;AAIxB;EACE,cAAc;EACd,gCAAgC,EAAA;EAEhC;IAEE,yBAvKgJ,EAAA;;AA2KpJ;EACE,aAAa;EACb,iDAAiD;EACjD,mBAAmB,EAAA;EAEnB;IACE,SAAS;IACT,gBAAgB,EAAA;EAGlB;IACE,SAAS;IACT,YAAY;IACZ,mBAAmB,EAAA;EAGrB;IACE,oBAAoB,EAAA;;AAIxB;EACE,cAAc;EACd,UAAU;EACV,iBAAiB;EACjB,kBAAkB;EAClB,8BAA8B;EAC9B,iBAAiB;EACjB,aAAa,EAAA;;AClDf,oCAAoC","sourceRoot":""}]);
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
  content_container.textContent = ''; // empty the div before updating
// Generate tasklist header
  const content_tasklist_header = document.createElement('div');
  content_tasklist_header.classList.add('content__tasklist-header');
  content_container.appendChild(content_tasklist_header);
  const tasklist_title = document.createElement('h2');
  tasklist_title.classList.add('content__tasklist-title');
  tasklist_title.textContent = tasklist.title;
  content_tasklist_header.appendChild(tasklist_title);
  const edit_tasklist_button = document.createElement('div');
  edit_tasklist_button.classList.add('edit-tasklist__button');
  content_tasklist_header.appendChild(edit_tasklist_button);
  const remove_tasklist_button = document.createElement('div');
  remove_tasklist_button.classList.add('remove-tasklist__button');
  content_tasklist_header.appendChild(remove_tasklist_button);
// Generate tasklist description
  const tasklist_description = document.createElement('div');
  tasklist_description.classList.add('content__tasklist-description');
  tasklist_description.textContent = tasklist.description;
  content_container.appendChild(tasklist_description);
// Generate tasks container
  const tasks_display = document.createElement('div');
  tasks_display.classList.add('content__single-tasks-display');
  content_container.appendChild(tasks_display);
// Generate columns labels
  const data_legends = document.createElement('div');
  data_legends.classList.add('data_legends');
  tasks_display.appendChild(data_legends);
  const empty_div = document.createElement('div');
  data_legends.appendChild(empty_div);
  const label_task = document.createElement('div');
  label_task.textContent = 'Task';
  data_legends.appendChild(label_task);
  const label_deadline = document.createElement('div');
  label_deadline.textContent = 'Deadline';
  data_legends.appendChild(label_deadline);
  const label_priority = document.createElement('div');
  label_priority.textContent = 'Priority';
  data_legends.appendChild(label_priority);
  const label_actions = document.createElement('div');
  label_actions.textContent = 'Actions';
  data_legends.appendChild(label_actions);
// Generate display of each task
  (tasklist.content).forEach(task => {
    const single_task_container = document.createElement('div');
    single_task_container.classList.add('single-task__container');
    tasks_display.appendChild(single_task_container);
    const single_task_datas = document.createElement('div');
    single_task_datas.classList.add('single-task__datas');
    single_task_container.appendChild(single_task_datas);
    const task_checkbox = document.createElement('input');
    task_checkbox.type = "checkbox";
    single_task_datas.appendChild(task_checkbox);
    const single_task_title = document.createElement('h3');
    single_task_title.textContent = task.title;
    single_task_datas.appendChild(single_task_title);
    const single_task_deadline = document.createElement('div');
    single_task_deadline.textContent = task.deadline;
    single_task_datas.appendChild(single_task_deadline);
    const single_task_priority = document.createElement('div');
    single_task_priority.textContent = task.priority;
    single_task_datas.appendChild(single_task_priority);
    const edit_single_task_button = document.createElement('div');
    edit_single_task_button.classList.add('edit-single-task__button');
    single_task_datas.appendChild(edit_single_task_button);
    const remove_single_task_button = document.createElement('div');
    remove_single_task_button.classList.add('remove-single-task__button');
    single_task_datas.appendChild(remove_single_task_button);
    const single_task_description = document.createElement('div');
    single_task_description.classList.add('single-task__description');
    single_task_description.textContent = task.description;
    single_task_container.appendChild(single_task_description);
  });
  content_tasklist_header.style.opacity = 1;
};

/*const loadTasklistDetails = (tasklist) => {
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
};*/



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
  if (taskData.taskList === '') {
    taskData.taskList = 'General tasks'; // Create a general takslist to put single tasks into
  }
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
    newTaskList.description = 'There is no description yet...';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDMEQ7QUFDeEI7QUFDdkQ7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELE9BQU87QUFDM0Qsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVFQUF1QjtBQUMzQjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSSx1RUFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxPQUFPO0FBQy9ELE1BQU0sbUVBQW1CO0FBQ3pCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9lZGl0LWljb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcmVtb3ZlLWljb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HYW1qYStGbG93ZXImZmFtaWx5PVVidW50dTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSwzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7IH1cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvOyB9XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgbWFyZ2luOiAwOyB9XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0QjUyOyB9XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA5MHZoOyB9XFxyXFxuXFxyXFxuLmxvZ29fX2NvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTUlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXHJcXG4gIC5sb2dvX19jb250YWluZXIgaDEge1xcclxcbiAgICBmb250LWZhbWlseTogJ0dhbWphIEZsb3dlcic7XFxyXFxuICAgIG1hcmdpbjogMCAwIDAgMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxuICAgIGNvbG9yOiAjZWZlZmVmOyB9XFxyXFxuXFxyXFxuLmhlYWRlcl9fY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMjBweDsgfVxcclxcbiAgLmhlYWRlcl9fY29udGFpbmVyIGEge1xcclxcbiAgICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxyXFxuXFxyXFxuLnNpZGViYXJfX2NvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxODE4NjtcXHJcXG4gIGNvbG9yOiAjZWZlZmVmO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyB9XFxyXFxuXFxyXFxuLnNpZGViYXItY2F0ZWdvcnkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzJweDsgfVxcclxcbiAgLnNpZGViYXItY2F0ZWdvcnkgaDIge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMCAwIDhweCAwOyB9XFxyXFxuICAuc2lkZWJhci1jYXRlZ29yeSB1bCB7XFxyXFxuICAgIG1hcmdpbjogMCAwIDAgOHB4O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXHJcXG5cXHJcXG4uc2lkZWJhci10YXNrbGlzdCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XFxyXFxuICAuc2lkZWJhci10YXNrbGlzdDpob3ZlciwgLnNpZGViYXItdGFza2xpc3Q6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjZDJkNDc5OyB9XFxyXFxuXFxyXFxuLnRhc2tsaXN0LXN1YnRhc2tzIHtcXHJcXG4gIGNvbG9yOiAjY2NjY2NjO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXHJcXG4gIC50YXNrbGlzdC1zdWJ0YXNrcyBsaSB7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XFxyXFxuXFxyXFxuLmNvbnRlbnRfX2NvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcclxcbiAgY29sb3I6ICMyMzIzMjM7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7IH1cXHJcXG5cXHJcXG4uY29udGVudF9fdGFza2xpc3QtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxNnB4OyB9XFxyXFxuXFxyXFxuLmNvbnRlbnRfX3Rhc2tsaXN0LXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxcclxcblxcclxcbi5jb250ZW50X190YXNrbGlzdC1kZXNjcmlwdGlvbiB7XFxyXFxuICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2FhYWFhYTtcXHJcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxcclxcblxcclxcbi5lZGl0LXRhc2tsaXN0X19idXR0b24sXFxyXFxuLmVkaXQtc2luZ2xlLXRhc2tfX2J1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDIwcHg7IH1cXHJcXG5cXHJcXG4ucmVtb3ZlLXRhc2tsaXN0X19idXR0b24sXFxyXFxuLnJlbW92ZS1zaW5nbGUtdGFza19fYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMjBweDsgfVxcclxcblxcclxcbi5kYXRhX2xlZ2VuZHMge1xcclxcbiAgY29sb3I6ICNhYWFhYWE7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOHB4IDZmciAyZnIgMWZyIDYwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07IH1cXHJcXG4gIC5kYXRhX2xlZ2VuZHMgOm5vdCg6bnRoLWNoaWxkKDIpKSB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyB9XFxyXFxuXFxyXFxuLnNpbmdsZS10YXNrX19jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAxNnB4IDA7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYWFhYTsgfVxcclxcbiAgLnNpbmdsZS10YXNrX19jb250YWluZXI6aG92ZXIsIC5zaW5nbGUtdGFza19fY29udGFpbmVyOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVjZGY7IH1cXHJcXG5cXHJcXG4uc2luZ2xlLXRhc2tfX2RhdGFzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggNmZyIDJmciAxZnIgMzBweCAzMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcclxcbiAgLnNpbmdsZS10YXNrX19kYXRhcyBoMyB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDsgfVxcclxcbiAgLnNpbmdsZS10YXNrX19kYXRhcyBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7IH1cXHJcXG4gIC5zaW5nbGUtdGFza19fZGF0YXMgOm5vdCg6bnRoLWNoaWxkKDIpKSB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyB9XFxyXFxuXFxyXFxuLnNpbmdsZS10YXNrX19kZXNjcmlwdGlvbiB7XFxyXFxuICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2FhYWFhYTtcXHJcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcclxcbiAgbWFyZ2luOiA4cHggMDsgfVxcclxcblxcclxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTtFQUNFLHNCQUFzQjtFQUN0QixpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLFNBQVEsRUFBQTs7QUFHVjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBcEJxQixFQUFBOztBQXVCdkI7RUFDRSxhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUlkO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQUVuQjtJQUNBLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBdENxRixFQUFBOztBQTBDdkY7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULG1CQUFtQixFQUFBO0VBRW5CO0lBQ0UsY0FuRG1GO0lBb0RuRixxQkFBcUIsRUFBQTs7QUFLekI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQTVEMkM7RUE2RDNDLGNBN0RxRjtFQThEckYsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsbUJBQW1CLEVBQUE7RUFFbkI7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBR25CO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixxQkFBcUIsRUFBQTs7QUFJekI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBRWxCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUE7RUFFdkI7SUFFRSwyQkFBMkIsRUFBQTs7QUFJL0I7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0VBRWxCO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUIsRUFBQTs7QUFLN0I7RUFDRSx5QkE3R3FGO0VBOEdyRixjQTlHMEc7RUErRzFHLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTLEVBQUE7O0FBR1g7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLG1CQUFrQixFQUFBOztBQUdwQjs7RUFFRSx5REFBK0M7RUFDL0MsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjs7RUFFRSx5REFBaUQ7RUFDakQsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTtFQUVqQjtJQUNFLG9CQUFvQixFQUFBOztBQUl4QjtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0MsRUFBQTtFQUVoQztJQUVFLHlCQXZLZ0osRUFBQTs7QUEyS3BKO0VBQ0UsYUFBYTtFQUNiLGlEQUFpRDtFQUNqRCxtQkFBbUIsRUFBQTtFQUVuQjtJQUNFLFNBQVM7SUFDVCxnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLFNBQVM7SUFDVCxZQUFZO0lBQ1osbUJBQW1CLEVBQUE7RUFHckI7SUFDRSxvQkFBb0IsRUFBQTs7QUFJeEI7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FDbERmLG9DQUFvQ1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHNpZGViYXJfdGFza2xpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItdGFza2xpc3RzJyk7XHJcbmNvbnN0IGNvbnRlbnRfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtb3V0cHV0Jyk7XHJcblxyXG5jb25zdCBjcmVhdGVUYXNrbGlzdENvbnRhaW5lciA9ICh0YXNrTGlzdHNBcnJheSkgPT4ge1xyXG4gIHNpZGViYXJfdGFza2xpc3RzLnRleHRDb250ZW50ID0gJyc7XHJcbiAgdGFza0xpc3RzQXJyYXkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBjb25zdCB0YXNrbGlzdF9ibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICB0YXNrbGlzdF9ibG9jay5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLXRhc2tsaXN0Jyk7XHJcbiAgICBzaWRlYmFyX3Rhc2tsaXN0cy5hcHBlbmRDaGlsZCh0YXNrbGlzdF9ibG9jayk7XHJcbiAgICBjb25zdCB0YXNrbGlzdF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza2xpc3RfdGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza2xpc3QtdGl0bGUnKTtcclxuICAgIHRhc2tsaXN0X3RpdGxlLnRleHRDb250ZW50ID0gZWwudGl0bGU7XHJcbiAgICB0YXNrbGlzdF9ibG9jay5hcHBlbmRDaGlsZCh0YXNrbGlzdF90aXRsZSk7XHJcbiAgICAoZWwuY29udGVudCkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgIGNvbnN0IHRhc2tsaXN0X2NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICB0YXNrbGlzdF9jb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2tsaXN0LXN1YnRhc2tzJyk7XHJcbiAgICAgIHRhc2tsaXN0X2NvbnRlbnQudGV4dENvbnRlbnQgPSBlbC50aXRsZTtcclxuICAgICAgdGFza2xpc3RfYmxvY2suYXBwZW5kQ2hpbGQodGFza2xpc3RfY29udGVudCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGxvYWRUYXNrbGlzdERldGFpbHMgPSAodGFza2xpc3QpID0+IHtcclxuICBjb250ZW50X2NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnOyAvLyBlbXB0eSB0aGUgZGl2IGJlZm9yZSB1cGRhdGluZ1xyXG4vLyBHZW5lcmF0ZSB0YXNrbGlzdCBoZWFkZXJcclxuICBjb25zdCBjb250ZW50X3Rhc2tsaXN0X2hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRlbnRfdGFza2xpc3RfaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfX3Rhc2tsaXN0LWhlYWRlcicpO1xyXG4gIGNvbnRlbnRfY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRfdGFza2xpc3RfaGVhZGVyKTtcclxuICBjb25zdCB0YXNrbGlzdF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgdGFza2xpc3RfdGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGVudF9fdGFza2xpc3QtdGl0bGUnKTtcclxuICB0YXNrbGlzdF90aXRsZS50ZXh0Q29udGVudCA9IHRhc2tsaXN0LnRpdGxlO1xyXG4gIGNvbnRlbnRfdGFza2xpc3RfaGVhZGVyLmFwcGVuZENoaWxkKHRhc2tsaXN0X3RpdGxlKTtcclxuICBjb25zdCBlZGl0X3Rhc2tsaXN0X2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVkaXRfdGFza2xpc3RfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtdGFza2xpc3RfX2J1dHRvbicpO1xyXG4gIGNvbnRlbnRfdGFza2xpc3RfaGVhZGVyLmFwcGVuZENoaWxkKGVkaXRfdGFza2xpc3RfYnV0dG9uKTtcclxuICBjb25zdCByZW1vdmVfdGFza2xpc3RfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcmVtb3ZlX3Rhc2tsaXN0X2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtdGFza2xpc3RfX2J1dHRvbicpO1xyXG4gIGNvbnRlbnRfdGFza2xpc3RfaGVhZGVyLmFwcGVuZENoaWxkKHJlbW92ZV90YXNrbGlzdF9idXR0b24pO1xyXG4vLyBHZW5lcmF0ZSB0YXNrbGlzdCBkZXNjcmlwdGlvblxyXG4gIGNvbnN0IHRhc2tsaXN0X2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGFza2xpc3RfZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnY29udGVudF9fdGFza2xpc3QtZGVzY3JpcHRpb24nKTtcclxuICB0YXNrbGlzdF9kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2tsaXN0LmRlc2NyaXB0aW9uO1xyXG4gIGNvbnRlbnRfY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tsaXN0X2Rlc2NyaXB0aW9uKTtcclxuLy8gR2VuZXJhdGUgdGFza3MgY29udGFpbmVyXHJcbiAgY29uc3QgdGFza3NfZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRhc2tzX2Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgnY29udGVudF9fc2luZ2xlLXRhc2tzLWRpc3BsYXknKTtcclxuICBjb250ZW50X2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrc19kaXNwbGF5KTtcclxuLy8gR2VuZXJhdGUgY29sdW1ucyBsYWJlbHNcclxuICBjb25zdCBkYXRhX2xlZ2VuZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkYXRhX2xlZ2VuZHMuY2xhc3NMaXN0LmFkZCgnZGF0YV9sZWdlbmRzJyk7XHJcbiAgdGFza3NfZGlzcGxheS5hcHBlbmRDaGlsZChkYXRhX2xlZ2VuZHMpO1xyXG4gIGNvbnN0IGVtcHR5X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRhdGFfbGVnZW5kcy5hcHBlbmRDaGlsZChlbXB0eV9kaXYpO1xyXG4gIGNvbnN0IGxhYmVsX3Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsYWJlbF90YXNrLnRleHRDb250ZW50ID0gJ1Rhc2snO1xyXG4gIGRhdGFfbGVnZW5kcy5hcHBlbmRDaGlsZChsYWJlbF90YXNrKTtcclxuICBjb25zdCBsYWJlbF9kZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxhYmVsX2RlYWRsaW5lLnRleHRDb250ZW50ID0gJ0RlYWRsaW5lJztcclxuICBkYXRhX2xlZ2VuZHMuYXBwZW5kQ2hpbGQobGFiZWxfZGVhZGxpbmUpO1xyXG4gIGNvbnN0IGxhYmVsX3ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGFiZWxfcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xyXG4gIGRhdGFfbGVnZW5kcy5hcHBlbmRDaGlsZChsYWJlbF9wcmlvcml0eSk7XHJcbiAgY29uc3QgbGFiZWxfYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxhYmVsX2FjdGlvbnMudGV4dENvbnRlbnQgPSAnQWN0aW9ucyc7XHJcbiAgZGF0YV9sZWdlbmRzLmFwcGVuZENoaWxkKGxhYmVsX2FjdGlvbnMpO1xyXG4vLyBHZW5lcmF0ZSBkaXNwbGF5IG9mIGVhY2ggdGFza1xyXG4gICh0YXNrbGlzdC5jb250ZW50KS5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgY29uc3Qgc2luZ2xlX3Rhc2tfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzaW5nbGVfdGFza19jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2luZ2xlLXRhc2tfX2NvbnRhaW5lcicpO1xyXG4gICAgdGFza3NfZGlzcGxheS5hcHBlbmRDaGlsZChzaW5nbGVfdGFza19jb250YWluZXIpO1xyXG4gICAgY29uc3Qgc2luZ2xlX3Rhc2tfZGF0YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNpbmdsZV90YXNrX2RhdGFzLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS10YXNrX19kYXRhcycpO1xyXG4gICAgc2luZ2xlX3Rhc2tfY29udGFpbmVyLmFwcGVuZENoaWxkKHNpbmdsZV90YXNrX2RhdGFzKTtcclxuICAgIGNvbnN0IHRhc2tfY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGFza19jaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgc2luZ2xlX3Rhc2tfZGF0YXMuYXBwZW5kQ2hpbGQodGFza19jaGVja2JveCk7XHJcbiAgICBjb25zdCBzaW5nbGVfdGFza190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBzaW5nbGVfdGFza190aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICBzaW5nbGVfdGFza19kYXRhcy5hcHBlbmRDaGlsZChzaW5nbGVfdGFza190aXRsZSk7XHJcbiAgICBjb25zdCBzaW5nbGVfdGFza19kZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2luZ2xlX3Rhc2tfZGVhZGxpbmUudGV4dENvbnRlbnQgPSB0YXNrLmRlYWRsaW5lO1xyXG4gICAgc2luZ2xlX3Rhc2tfZGF0YXMuYXBwZW5kQ2hpbGQoc2luZ2xlX3Rhc2tfZGVhZGxpbmUpO1xyXG4gICAgY29uc3Qgc2luZ2xlX3Rhc2tfcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNpbmdsZV90YXNrX3ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcclxuICAgIHNpbmdsZV90YXNrX2RhdGFzLmFwcGVuZENoaWxkKHNpbmdsZV90YXNrX3ByaW9yaXR5KTtcclxuICAgIGNvbnN0IGVkaXRfc2luZ2xlX3Rhc2tfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlZGl0X3NpbmdsZV90YXNrX2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LXNpbmdsZS10YXNrX19idXR0b24nKTtcclxuICAgIHNpbmdsZV90YXNrX2RhdGFzLmFwcGVuZENoaWxkKGVkaXRfc2luZ2xlX3Rhc2tfYnV0dG9uKTtcclxuICAgIGNvbnN0IHJlbW92ZV9zaW5nbGVfdGFza19idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJlbW92ZV9zaW5nbGVfdGFza19idXR0b24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLXNpbmdsZS10YXNrX19idXR0b24nKTtcclxuICAgIHNpbmdsZV90YXNrX2RhdGFzLmFwcGVuZENoaWxkKHJlbW92ZV9zaW5nbGVfdGFza19idXR0b24pO1xyXG4gICAgY29uc3Qgc2luZ2xlX3Rhc2tfZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNpbmdsZV90YXNrX2Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS10YXNrX19kZXNjcmlwdGlvbicpO1xyXG4gICAgc2luZ2xlX3Rhc2tfZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgc2luZ2xlX3Rhc2tfY29udGFpbmVyLmFwcGVuZENoaWxkKHNpbmdsZV90YXNrX2Rlc2NyaXB0aW9uKTtcclxuICB9KTtcclxuICBjb250ZW50X3Rhc2tsaXN0X2hlYWRlci5zdHlsZS5vcGFjaXR5ID0gMTtcclxufTtcclxuXHJcbi8qY29uc3QgbG9hZFRhc2tsaXN0RGV0YWlscyA9ICh0YXNrbGlzdCkgPT4ge1xyXG4gIGNvbnRlbnRfY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgY29uc3QgdGFza2xpc3RfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHRhc2tsaXN0X3RpdGxlLnRleHRDb250ZW50ID0gdGFza2xpc3QudGl0bGU7XHJcbiAgY29udGVudF9jb250YWluZXIuYXBwZW5kQ2hpbGQodGFza2xpc3RfdGl0bGUpO1xyXG4gICh0YXNrbGlzdC5jb250ZW50KS5mb3JFYWNoKHRzayA9PiB7XHJcbiAgICBjb25zdCBzaW5nbGVUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50X2NvbnRhaW5lci5hcHBlbmRDaGlsZChzaW5nbGVUYXNrQ29udGFpbmVyKTtcclxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0c2sudGl0bGU7XHJcbiAgICBzaW5nbGVUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0c2suZGVzY3JpcHRpb247XHJcbiAgICBzaW5nbGVUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXNjKTtcclxuICB9KTtcclxufTsqL1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlVGFza2xpc3RDb250YWluZXIsIGxvYWRUYXNrbGlzdERldGFpbHMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2tsaXN0Q29udGFpbmVyLCBsb2FkVGFza2xpc3REZXRhaWxzIH0gZnJvbSAnLi9kb20tY3JlYXRlLmpzJztcclxuaW1wb3J0IHsgZm9ybWF0LCBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5cclxuY29uc3QgTkVXX1RBU0tfRk9STSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFza19mb3JtJyk7XHJcbmNvbnN0IFRFU1RfQlVUVE9OID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1cGVyYnV0dG9uJyk7IC8vIHRlc3QgcHVycG9zZVxyXG5jb25zdCB0YXNrTGlzdHNDb250YWluZXIgPSBbXTtcclxubGV0IG5ld1Rhc2s7XHJcblxyXG5cclxuLy8gRmFjdG9yeSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgbmV3IHNpbmdsZSB0YXNrc1xyXG5jb25zdCBUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGVhZGxpbmUsIHByaW9yaXR5LCB0YXNrbGlzdCkgPT4ge1xyXG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZGVhZGxpbmUsIHByaW9yaXR5LCB0YXNrbGlzdCB9O1xyXG59O1xyXG5cclxuLy8gRmFjdG9yeSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgdGFza2xpc3RzLCB1bnRvIHdoaWNoIHdlIGNhbiBwdXNoIHNpbmdsZSB0YXNrc1xyXG5jb25zdCBUYXNrbGlzdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24pID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gW107XHJcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjb250ZW50IH07XHJcbn07XHJcblxyXG5cclxuLy8gR2V0IHRhc2tzIGluZm9zIGZyb20gZm9ybSwgcHV0IGl0IGluIG5ld1Rhc2sgdmFyaWFibGUgZm9yIHVzZSBpbiBvdGhlciBmdW5jdGlvbnNcclxuLy9cclxuY29uc3QgZ2V0Rm9ybURhdGEgPSAoKCkgPT4ge05FV19UQVNLX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoTkVXX1RBU0tfRk9STSk7XHJcbiAgY29uc3QgdGFza0RhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xyXG4gIGlmICh0YXNrRGF0YS50YXNrTGlzdCA9PT0gJycpIHtcclxuICAgIHRhc2tEYXRhLnRhc2tMaXN0ID0gJ0dlbmVyYWwgdGFza3MnOyAvLyBDcmVhdGUgYSBnZW5lcmFsIHRha3NsaXN0IHRvIHB1dCBzaW5nbGUgdGFza3MgaW50b1xyXG4gIH1cclxuICBjb25zdCB0YXNrbGlzdCA9IHRhc2tEYXRhLnRhc2tMaXN0O1xyXG4gIGNvbnN0IHRpdGxlID0gdGFza0RhdGEudGFza1RpdGxlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gdGFza0RhdGEudGFza0Rlc2NyaXB0aW9uO1xyXG4gIGNvbnN0IGRlYWRsaW5lID0gdGFza0RhdGEudGFza0RlYWRsaW5lO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gdGFza0RhdGEudGFza1ByaW9yaXR5O1xyXG4gIG5ld1Rhc2sgPSBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGVhZGxpbmUsIHByaW9yaXR5LCB0YXNrbGlzdCk7XHJcbiAgYWRkVGFza1RvVGFza0xpc3QobmV3VGFzayk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcblxyXG4vLyBBZGQgdGhlIG5ld1Rhc2sgdG8gaXRzIHRhc2sgbGlzdCBpZiBpdCBleGlzdCwgY3JlYXRlIG9uZSBpZiBpdCBkb2VzbnRcclxuY29uc3QgYWRkVGFza1RvVGFza0xpc3QgPSAobmV3VGFzaykgPT4ge1xyXG4gIC8vSWYgdGhlIHRhc2tsaXN0IHRpdGxlIGlzIGFscmVhZHkgaW4gdGhlIGRhdGFiYXNlLCB0aGlzIHdpbGwgcmV0dXJuIHRoZSB0YXNrbGlzdCBvYmplY3QuIE90aGVyd2lzZSwgcmV0dXJucyB1bmRlZmluZWRcclxuICBjb25zdCB0YXJnZXRUYXNrTGlzdCA9IHRhc2tMaXN0c0NvbnRhaW5lci5maW5kKCh7IHRpdGxlIH0pID0+IHRpdGxlID09PSBuZXdUYXNrLnRhc2tsaXN0KTtcclxuICBpZiAodGFyZ2V0VGFza0xpc3QgPT09IHVuZGVmaW5lZCkgeyAvLyBpLmUuIG5vIHRhc2tsaXN0IHdpdGggdGhpcyBuYW1lIGV4aXN0cyB5ZXRcclxuICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIGEgbmV3IHRhc2tsaXN0Jyk7XHJcbiAgICBjb25zdCBuZXdUYXNrTGlzdCA9IFRhc2tsaXN0KG5ld1Rhc2sudGFza2xpc3QsICcnKTtcclxuICAgIHRhc2tMaXN0c0NvbnRhaW5lci5wdXNoKG5ld1Rhc2tMaXN0KTtcclxuICAgIChuZXdUYXNrTGlzdC5jb250ZW50KS5wdXNoKG5ld1Rhc2spO1xyXG4gICAgbmV3VGFza0xpc3QuZGVzY3JpcHRpb24gPSAnVGhlcmUgaXMgbm8gZGVzY3JpcHRpb24geWV0Li4uJztcclxuICAgIGNyZWF0ZVRhc2tsaXN0Q29udGFpbmVyKHRhc2tMaXN0c0NvbnRhaW5lcik7XHJcbiAgICBkaXNwbGF5Q29udHJvbGxlcigpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnQWRkaW5nIHRhc2sgdG8gdGhlIGV4aXN0aW5nIHRhc2tsaXN0Li4uJyk7XHJcbiAgICAodGFyZ2V0VGFza0xpc3QuY29udGVudCkucHVzaChuZXdUYXNrKTtcclxuICAgIGNyZWF0ZVRhc2tsaXN0Q29udGFpbmVyKHRhc2tMaXN0c0NvbnRhaW5lcik7XHJcbiAgICBkaXNwbGF5Q29udHJvbGxlcigpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIElmIHRoZSBuZXdUYXNrIGRvZXNuJ3QgZ28gaW4gYSB0YXNrbGlzdCwgYWRkIGl0IGRpcmVjdGx5IHRvIHRoZSBET01cclxuLy8gT3RoZXJ3aXNlLCBhZGQgdGhlIHRhc2tsaXN0IHRoZW4gdGhlIHRhc2sgdG8gdGhlIERPTVxyXG5cclxuXHJcbi8vIFdoZW4gY2xpY2tpbmcgb24gYSB0YWtzbGlzdCBuYW1lLCB1cGRhdGUgdGhlIGRpc3BsYXkgd2l0aCB0aGUgbGlzdCBvZiB0YXNrc1xyXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgpID0+IHtcclxuICBjb25zdCB0YXNrbGlzdF9ibG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpZGViYXItdGFza2xpc3QnKTtcclxuICBjb25zdCB0YXNrbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2tsaXN0LXRpdGxlJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgdGFza2xpc3RfYmxvY2tbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAvLyBHZXQgdGhlIG5hbWUgb2YgdGhlIGNsaWNrZWQgdGFza2xpc3RcclxuICAgICAgY29uc3QgY2xpY2tlZF90YXNrID0gdGFza2xpc3RbaV0udGV4dENvbnRlbnQ7XHJcbiAgICAgIC8vIFVzZSB0aGUgdGFrc2xpc3QgbmFtZSB0byBmaW5kIHRoZSB0YXNrbGlzdCBpbiB0aGUgdGFza0xpc3RzQ29udGFpbmVyXHJcbiAgICAgIGNvbnN0IHRhcmdldFRhc2tMaXN0ID0gdGFza0xpc3RzQ29udGFpbmVyLmZpbmQoKHsgdGl0bGUgfSkgPT4gdGl0bGUgPT09IGNsaWNrZWRfdGFzayk7XHJcbiAgICAgIGxvYWRUYXNrbGlzdERldGFpbHModGFyZ2V0VGFza0xpc3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbi8vIFdoZW4gY2xpY2tpbmcgb24gYSB0YXNrIG5hbWUsIHVwZGF0ZSB0aGUgZGlzcGxheSB3aXRoIHRhc2sgaW5mb3NcclxuXHJcblxyXG5cclxuLy8gVGVzdCBwdXJwb3NlXHJcblxyXG5URVNUX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0c0NvbnRhaW5lcik7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==