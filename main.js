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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  font-family: 'Ubuntu', sans-serif; }\r\n\r\nbody {\r\n  height: 100vh;\r\n  margin: 0; }\r\n\r\n.form-container {\r\n  width: 400px;\r\n  height: auto; }\r\n\r\nmain {\r\n  display: flex;\r\n  height: 90vh; }\r\n\r\n.backdrop {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: #7181869d;\r\n  z-index: 2; }\r\n\r\n.add-task__modal {\r\n  display: none;\r\n  background-color: #ccd2d4;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 32px;\r\n  border: 4px solid #344B52;\r\n  border-radius: 5px;\r\n  z-index: 3; }\r\n  .add-task__modal h2 {\r\n    color: #232323;\r\n    text-align: center;\r\n    margin: 0 0 16px 0; }\r\n\r\n.remove-tasklist__modal {\r\n  display: none;\r\n  text-align: center;\r\n  background-color: #eeecdf;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 32px;\r\n  border: 4px solid #ee6962;\r\n  border-radius: 5px;\r\n  z-index: 3; }\r\n  .remove-tasklist__modal h2 {\r\n    color: #ee6962;\r\n    text-align: center;\r\n    margin: 0 0 16px 0; }\r\n  .remove-tasklist__modal div {\r\n    font-size: 1.2rem; }\r\n  .remove-tasklist__modal button {\r\n    cursor: pointer;\r\n    font-size: 1.5rem;\r\n    border-radius: 5px;\r\n    padding: 5px 10px;\r\n    margin: 16px 16px 0 16px; }\r\n  .remove-tasklist__modal .remove-confirm__button {\r\n    background-color: #ee6962;\r\n    border: 2px solid #ee6962;\r\n    color: #efefef; }\r\n    .remove-tasklist__modal .remove-confirm__button:hover {\r\n      background-color: #efefef;\r\n      color: #ee6962;\r\n      border: 2px solid #ee6962; }\r\n  .remove-tasklist__modal .remove-cancel__button {\r\n    color: #718186;\r\n    border: 2px solid #718186; }\r\n\r\n.edit-task__modal {\r\n  display: none; }\r\n\r\n#add-task_form {\r\n  display: flex;\r\n  display: flex;\r\n  flex-direction: column; }\r\n  #add-task_form .input-group {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 8px 0; }\r\n  #add-task_form textarea {\r\n    resize: vertical;\r\n    max-height: 33vh; }\r\n  #add-task_form input[type=\"submit\"] {\r\n    font-family: 'Ubuntu', sans-serif;\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    background-color: #d4d0af;\r\n    padding: 8px;\r\n    margin: auto;\r\n    margin-top: 16px;\r\n    border: 3px solid #344B52;\r\n    border-radius: 10px;\r\n    color: #232323; }\r\n    #add-task_form input[type=\"submit\"]:hover {\r\n      background-color: #344B52;\r\n      color: #efefef;\r\n      cursor: pointer; }\r\n    #add-task_form input[type=\"submit\"]:active {\r\n      transform: translateY(2px); }\r\n\r\nheader {\r\n  display: flex;\r\n  height: 10vh;\r\n  background-color: #344B52; }\r\n\r\n.logo__container {\r\n  width: 15%;\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: default; }\r\n  .logo__container h1 {\r\n    font-family: 'Gamja Flower';\r\n    margin: 0 0 0 20px;\r\n    font-size: 3.5rem;\r\n    color: #efefef; }\r\n\r\n.header__container {\r\n  width: 85%;\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n  gap: 32px;\r\n  padding-right: 20px; }\r\n  .header__container a {\r\n    color: #efefef;\r\n    text-decoration: none; }\r\n\r\n.sidebar__container {\r\n  width: 300px;\r\n  padding: 20px;\r\n  background-color: #718186;\r\n  color: #efefef;\r\n  overflow-y: scroll; }\r\n\r\n.new-task__button {\r\n  font-family: 'Ubuntu', sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  width: 100%;\r\n  background-color: #d4d0af;\r\n  padding: 0.5rem;\r\n  margin-bottom: 24px;\r\n  border: 3px solid #344B52;\r\n  border-radius: 10px;\r\n  box-shadow: 3px 3px 5px #23232377; }\r\n  .new-task__button:hover {\r\n    background-color: #344B52;\r\n    color: #efefef;\r\n    border-color: #eeecdf;\r\n    cursor: pointer; }\r\n  .new-task__button:active {\r\n    transform: translateY(2px); }\r\n\r\n.sidebar-category {\r\n  margin-bottom: 32px; }\r\n  .sidebar-category h2 {\r\n    font-weight: 700;\r\n    font-size: 1rem;\r\n    margin: 0 0 8px 0; }\r\n  .sidebar-category ul {\r\n    margin: 0 0 0 8px;\r\n    padding: 0;\r\n    list-style-type: none; }\r\n\r\n.sidebar-tasklist {\r\n  margin-bottom: 8px;\r\n  border-radius: 5px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis; }\r\n  .sidebar-tasklist:hover, .sidebar-tasklist:active {\r\n    background-color: #ccd2d479;\r\n    cursor: pointer; }\r\n\r\n.tasklist-subtasks {\r\n  color: #cccccc;\r\n  font-size: 0.9rem;\r\n  font-style: italic; }\r\n  .tasklist-subtasks li {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis; }\r\n\r\n.content__container {\r\n  background-color: #efefef;\r\n  color: #232323;\r\n  width: 100%;\r\n  padding: 20px;\r\n  overflow-y: scroll; }\r\n\r\n.content__tasklist-header {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px; }\r\n\r\n.content__tasklist-title {\r\n  font-size: 1.5rem;\r\n  margin: 10px 0;\r\n  margin-right: 8px; }\r\n\r\n.content__tasklist-description {\r\n  color: #aaaaaa;\r\n  border-left: 3px solid #aaaaaa;\r\n  padding-left: 8px;\r\n  margin-bottom: 24px; }\r\n\r\n.edit-tasklist__button,\r\n.edit-single-task__button {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  height: 20px;\r\n  width: 20px; }\r\n  .edit-tasklist__button:hover,\r\n  .edit-single-task__button:hover {\r\n    cursor: pointer; }\r\n\r\n.remove-tasklist__button,\r\n.remove-single-task__button {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  height: 20px;\r\n  width: 20px;\r\n  display: inline-block;\r\n  border-radius: 5px; }\r\n  .remove-tasklist__button:hover,\r\n  .remove-single-task__button:hover {\r\n    background-color: #ee6962;\r\n    cursor: pointer; }\r\n\r\n.data_legends {\r\n  color: #aaaaaa;\r\n  display: grid;\r\n  grid-template-columns: 28px 6fr 2fr 1fr 60px;\r\n  align-items: center;\r\n  font-size: 0.9rem; }\r\n  .data_legends :not(:nth-child(2)) {\r\n    justify-self: center; }\r\n\r\n.single-task__container {\r\n  margin: 16px 0;\r\n  border-bottom: 1px solid #aaaaaa; }\r\n  .single-task__container:hover, .single-task__container:active {\r\n    background-color: #eeecdf; }\r\n\r\n.single-task__datas {\r\n  display: grid;\r\n  grid-template-columns: 20px 6fr 2fr 1fr 30px 30px;\r\n  align-items: center; }\r\n  .single-task__datas h3 {\r\n    margin: 0;\r\n    margin-left: 8px; }\r\n  .single-task__datas input[type=\"checkbox\"] {\r\n    margin: 0;\r\n    height: 15px;\r\n    justify-self: start; }\r\n  .single-task__datas :not(:nth-child(2)) {\r\n    justify-self: center; }\r\n\r\n.single-task__description {\r\n  color: #aaaaaa;\r\n  width: 60%;\r\n  font-size: 0.8rem;\r\n  font-style: italic;\r\n  border-left: 3px solid #aaaaaa;\r\n  padding-left: 8px;\r\n  margin: 8px 0; }\r\n\r\n/* width */\r\n::-webkit-scrollbar {\r\n  width: 10px; }\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  background: #f1f1f1; }\r\n\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: #888; }\r\n\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #555; }\r\n\r\n/*# sourceMappingURL=style.css.map */\r\n", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
/* harmony export */   "loadTasklistDetails": () => (/* binding */ loadTasklistDetails),
/* harmony export */   "resetContentContainer": () => (/* binding */ resetContentContainer)
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
    single_task_title.classList.add('single-task__title');
    single_task_title.textContent = task.title;
    single_task_datas.appendChild(single_task_title);
    const single_task_deadline = document.createElement('div');
    single_task_deadline.classList.add('single-task__deadline')
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
};

const resetContentContainer = () => {
  content_container.textContent = '';
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




// Global variables
const taskListsContainer = [];
let newTask;


// DOM Elements
const NEW_TASK_FORM = document.getElementById('add-task_form');
const EDIT_TASK_FORM = document.getElementById('editTaskForm');

const TEST_BUTTON = document.getElementById('superbutton'); // test purpose
const NEW_TASK_BUTTON = document.querySelector('.new-task__button');
const BACKDROP = document.querySelector('.backdrop');
const NEW_TASK_MODAL = document.querySelector('.add-task__modal');
const REMOVE_TASKLIST_MODAL = document.querySelector('.remove-tasklist__modal');


// General functions
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Factory function for creating new single tasks
const Task = (title, description, deadline, priority, tasklist) => {
  return { title, description, deadline, priority, tasklist };
};

// Factory function for creating tasklists, unto which we can push single tasks
const Tasklist = (title, description) => {
  const content = [];
  return { title, description, content };
};

// Modals
const openModal = (modal) => {
  BACKDROP.style.display = 'block';
  modal.style.display = 'block';
};

const closeModal = () => {
    BACKDROP.style.display = 'none';
    NEW_TASK_MODAL.style.display = 'none';
    REMOVE_TASKLIST_MODAL.style.display = 'none';
};

BACKDROP.addEventListener('click', () => closeModal());

NEW_TASK_BUTTON.addEventListener('click', () => {
  openModal(NEW_TASK_MODAL);
});

// TASKS AND TASKLISTS ACTIONS: Create, Remove, Edit
//
// Get tasks infos from form, put it in newTask variable for use in other functions
const getFormData = (() => {NEW_TASK_FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(NEW_TASK_FORM);
  const taskData = Object.fromEntries(formData);
  if (taskData.taskList === '') {
    taskData.taskList = 'General tasks'; // Create a general takslist to put single tasks into
  }
  const tasklist = capitalizeString(taskData.taskList);
  const title = capitalizeString(taskData.taskTitle);
  if (taskData.taskDescription === '') {
    taskData.taskDescription = 'No description.';
  }
  const description = taskData.taskDescription;
  if (taskData.taskDeadline === '') {
    taskData.taskDeadline = 'No deadline';
  }
  const deadline = taskData.taskDeadline;
  if (taskData.taskPriority === '') {
    taskData.taskPriority = 3;
  }
  const priority = taskData.taskPriority;
  newTask = Task(title, description, deadline, priority, tasklist);
  addTaskToTaskList(newTask);
  closeModal();
  });
})();

// Add the newTask to its task list if it exist, create one if it doesnt
const addTaskToTaskList = (newTask) => {
  // If the tasklist title is already in the database, this will return the tasklist object. Otherwise, returns undefined
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

// Remove a tasklist
const removeTasklist = () => {
  const REMOVE_TASKLIST_BUTTON = document.querySelector('.remove-tasklist__button');
  const REMOVE_TASKLIST_MODAL = document.querySelector('.remove-tasklist__modal');
  const REMOVE_CANCEL_BTN = document.querySelector('.remove-cancel__button');
  const REMOVE_CONFIRM_BTN = document.querySelector('.remove-confirm__button');
  REMOVE_TASKLIST_BUTTON.addEventListener('click', () => {
    openModal(REMOVE_TASKLIST_MODAL);
    const targetTaskListName = document.querySelector('.content__tasklist-title').textContent; // Find the current tasklist name
    const targetTaskList = taskListsContainer.find(({ title }) => title === targetTaskListName);
    REMOVE_CANCEL_BTN.addEventListener('click', () => closeModal());
    REMOVE_CONFIRM_BTN.addEventListener('click', () => {
      for (let i = 0; i < taskListsContainer.length; i++) { 
        if (taskListsContainer[i] === targetTaskList) { 
          taskListsContainer.splice(i, 1);
        }
      }
      (0,_dom_create_js__WEBPACK_IMPORTED_MODULE_1__.createTasklistContainer)(taskListsContainer); // Update the sidebar tasklists
      displayController(); // Reload the click actions on sidebar tasklists
      (0,_dom_create_js__WEBPACK_IMPORTED_MODULE_1__.resetContentContainer)(); // Empty the content container
      closeModal();
    });
  }
);
};

// Remove a single task from the tasklist display
const removeTask = () => {
  const REMOVE_TASK_BTN = document.querySelectorAll('.remove-single-task__button');
  const targetTaskListName = document.querySelector('.content__tasklist-title').textContent; // Find the current tasklist name
  const targetTaskList = taskListsContainer.find(({ title }) => title === targetTaskListName);
  for (let i = 0; i < REMOVE_TASK_BTN.length; i ++) {
    REMOVE_TASK_BTN[i].addEventListener('click', () => {
      targetTaskList.content.splice(i, 1);
      (0,_dom_create_js__WEBPACK_IMPORTED_MODULE_1__.loadTasklistDetails)(targetTaskList);
      (0,_dom_create_js__WEBPACK_IMPORTED_MODULE_1__.createTasklistContainer)(taskListsContainer); // Update the sidebar tasklists
      removeTask(); // Reload remove function for remaining tasks
      removeTasklist(); // Reload remove tasklist function
      editTasklist(); // Reload edit function
      displayController();
    });
  }
};

// Edit a tasklist
const editTasklist = () => {
  const TASKLIST_NAME_ELEMENT = document.querySelector('.content__tasklist-title');
  const TASKLIST_DESCRIPTION_ELEMENT = document.querySelector('.content__tasklist-description');
  const targetTaskListName = TASKLIST_NAME_ELEMENT.textContent;
  const targetTaskList = taskListsContainer.find(({ title }) => title === targetTaskListName);
  TASKLIST_NAME_ELEMENT.addEventListener('click', () => { // Edit the tasklist title
    TASKLIST_NAME_ELEMENT.contentEditable = "true";
  });
  TASKLIST_NAME_ELEMENT.addEventListener('blur', () => {
    TASKLIST_NAME_ELEMENT.contentEditable = 'false';
    targetTaskList.title = TASKLIST_NAME_ELEMENT.textContent; // Update tasklist in array
    (0,_dom_create_js__WEBPACK_IMPORTED_MODULE_1__.createTasklistContainer)(taskListsContainer); // Update the sidebar tasklists
    editTasklist(); // Reload edit function
  });
  TASKLIST_DESCRIPTION_ELEMENT.addEventListener('click', () => {
    TASKLIST_DESCRIPTION_ELEMENT.contentEditable = 'true';
  });
  TASKLIST_DESCRIPTION_ELEMENT.addEventListener('blur', () => {
    TASKLIST_DESCRIPTION_ELEMENT.contentEditable = 'false';
    targetTaskList.description = TASKLIST_DESCRIPTION_ELEMENT.textContent;
    (0,_dom_create_js__WEBPACK_IMPORTED_MODULE_1__.createTasklistContainer)(taskListsContainer); // Update the sidebar tasklists
    editTasklist(); // Reload edit function
  });
};

// Edit a single task
/*const getCurrentTaskData = (form, target) => { // Edit through form
  form.taskTitle.value = target.title;
  form.taskDescription.value = target.description;
  form.taskDeadline.value = target.deadline;
  form.taskPriority.value = target.priority;
  form.taskList.value = target.tasklist;
};

const editTaskForm = (target) => {
  const targetTaskListName = document.querySelector('.content__tasklist-title').textContent;
  const targetTaskList = taskListsContainer.find(({ title }) => title === targetTaskListName);
  EDIT_TASK_FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(EDIT_TASK_FORM);
    const taskData = Object.fromEntries(formData);
    target.tasklist = capitalizeString(taskData.taskList);
    target.title = capitalizeString(taskData.taskTitle);
    target.description = taskData.taskDescription;
    target.deadline = taskData.taskDeadline;
    target.priority = taskData.taskPriority;
    loadTasklistDetails(targetTaskList);
    removeTasklist();
    removeTask();
    editTasklist();
    editTask();
  });
};

const editTask = () => {
  const targetTaskListName = document.querySelector('.content__tasklist-title').textContent;
  const targetTaskList = taskListsContainer.find(({ title }) => title === targetTaskListName);
  const edit_task_button = document.querySelectorAll('.edit-single-task__button');
  for (let i = 0; i < edit_task_button.length; i++) {
    edit_task_button[i].addEventListener('click', () => {
      const targetTaskContent = targetTaskList.content[i]; // Find clicked task
      getCurrentTaskData(EDIT_TASK_FORM, targetTaskContent); // Fill the edit form with current datas
      editTaskForm(targetTaskContent);
    });
    }
};*/

const editTask = () => { // Live edit prototype
  // Find the current tasklist name, then search for it in the taskslists array and return it
  const targetTaskListName = document.querySelector('.content__tasklist-title').textContent; 
  const targetTaskList = taskListsContainer.find(({ title }) => title === targetTaskListName);
  const targetTask = targetTaskList.content;
  // Edit task title
  const single_task_title = document.querySelectorAll('.single-task__title');
  for (let i = 0; i < single_task_title.length; i ++) {
    single_task_title[i].addEventListener('click', () => {
      single_task_title[i].contentEditable = 'true';
    });
    single_task_title[i].addEventListener('blur', () => {
      single_task_title[i].contentEditable = 'false';
      targetTask[i].title = single_task_title[i].textContent;
      console.log(targetTask[i]);
      (0,_dom_create_js__WEBPACK_IMPORTED_MODULE_1__.createTasklistContainer)(taskListsContainer); // Update the sidebar tasklists
    });
  }

  // Edit task description
  const single_task_description = document.querySelectorAll('.single-task__description');
  for (let i = 0; i < single_task_description.length; i++) {
    single_task_description[i].addEventListener('click', () => {
      single_task_description[i].contentEditable = 'true';
    });
    single_task_description[i].addEventListener('blur', () => {
      single_task_description.contentEditable = 'false';
      targetTask[i].description = single_task_description[i].textContent;
    });
  }

  // Edit task deadline !!! BUGGED !!!
  const single_task_deadline = document.querySelectorAll('.single-task__deadline');
  const editableDeadline = document.createElement('input');
  editableDeadline.type = 'date';
  for (let i = 0; i < single_task_deadline.length; i++) { // Find which task 
    single_task_deadline[i].addEventListener('click', () => {
      editableDeadline.value = single_task_deadline[i].textContent;
      console.log(targetTask[i].deadline);
      single_task_deadline[i].replaceWith(editableDeadline);
    });
    editableDeadline.addEventListener('blur', () => {
      editableDeadline.replaceWith(single_task_deadline[i]);
      targetTask[i].deadline = editableDeadline.value;
      (0,_dom_create_js__WEBPACK_IMPORTED_MODULE_1__.loadTasklistDetails)(targetTaskList);
      removeTasklist();
      removeTask();
      editTasklist();
      editTask();
    });
  }
};




// DOM ACTIONS
// When clicking on a takslist name, update the display with the list of tasks
const displayController = () => {
  const tasklist_block = document.getElementsByClassName('sidebar-tasklist');
  const tasklist = document.getElementsByClassName('tasklist-title');
  for (let i = 0; i < tasklist.length; i++) {
    tasklist_block[i].addEventListener('click', () => {
      // Get the name of the clicked tasklist
      const clicked_task = tasklist[i].textContent;
      // Use the takslist name to find the tasklist in the taskListsContainer
      const clickedTaskList = taskListsContainer.find(({ title }) => title === clicked_task);
      (0,_dom_create_js__WEBPACK_IMPORTED_MODULE_1__.loadTasklistDetails)(clickedTaskList);
      removeTasklist();
      removeTask();
      editTasklist();
      editTask();
    });
  }
};


// Test purpose

TEST_BUTTON.addEventListener('click', () => {
    console.log(taskListsContainer);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvZWRpdC1pY29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3JlbW92ZS1pY29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R2FtamErRmxvd2VyJmZhbWlseT1VYnVudHU6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmOyB9XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgbWFyZ2luOiAwOyB9XFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogYXV0bzsgfVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogOTB2aDsgfVxcclxcblxcclxcbi5iYWNrZHJvcCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTgxODY5ZDtcXHJcXG4gIHotaW5kZXg6IDI7IH1cXHJcXG5cXHJcXG4uYWRkLXRhc2tfX21vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NkMmQ0O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHBhZGRpbmc6IDMycHg7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjMzQ0QjUyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgei1pbmRleDogMzsgfVxcclxcbiAgLmFkZC10YXNrX19tb2RhbCBoMiB7XFxyXFxuICAgIGNvbG9yOiAjMjMyMzIzO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCAwIDE2cHggMDsgfVxcclxcblxcclxcbi5yZW1vdmUtdGFza2xpc3RfX21vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlY2RmO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHBhZGRpbmc6IDMycHg7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjZWU2OTYyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgei1pbmRleDogMzsgfVxcclxcbiAgLnJlbW92ZS10YXNrbGlzdF9fbW9kYWwgaDIge1xcclxcbiAgICBjb2xvcjogI2VlNjk2MjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAgMCAxNnB4IDA7IH1cXHJcXG4gIC5yZW1vdmUtdGFza2xpc3RfX21vZGFsIGRpdiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtOyB9XFxyXFxuICAucmVtb3ZlLXRhc2tsaXN0X19tb2RhbCBidXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICBtYXJnaW46IDE2cHggMTZweCAwIDE2cHg7IH1cXHJcXG4gIC5yZW1vdmUtdGFza2xpc3RfX21vZGFsIC5yZW1vdmUtY29uZmlybV9fYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlNjk2MjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2VlNjk2MjtcXHJcXG4gICAgY29sb3I6ICNlZmVmZWY7IH1cXHJcXG4gICAgLnJlbW92ZS10YXNrbGlzdF9fbW9kYWwgLnJlbW92ZS1jb25maXJtX19idXR0b246aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxyXFxuICAgICAgY29sb3I6ICNlZTY5NjI7XFxyXFxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2VlNjk2MjsgfVxcclxcbiAgLnJlbW92ZS10YXNrbGlzdF9fbW9kYWwgLnJlbW92ZS1jYW5jZWxfX2J1dHRvbiB7XFxyXFxuICAgIGNvbG9yOiAjNzE4MTg2O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNzE4MTg2OyB9XFxyXFxuXFxyXFxuLmVkaXQtdGFza19fbW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTsgfVxcclxcblxcclxcbiNhZGQtdGFza19mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcclxcbiAgI2FkZC10YXNrX2Zvcm0gLmlucHV0LWdyb3VwIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luOiA4cHggMDsgfVxcclxcbiAgI2FkZC10YXNrX2Zvcm0gdGV4dGFyZWEge1xcclxcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAzM3ZoOyB9XFxyXFxuICAjYWRkLXRhc2tfZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMGFmO1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzM0NEI1MjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgY29sb3I6ICMyMzIzMjM7IH1cXHJcXG4gICAgI2FkZC10YXNrX2Zvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDRCNTI7XFxyXFxuICAgICAgY29sb3I6ICNlZmVmZWY7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxyXFxuICAgICNhZGQtdGFza19mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmFjdGl2ZSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7IH1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMTB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDRCNTI7IH1cXHJcXG5cXHJcXG4ubG9nb19fY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxNSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDsgfVxcclxcbiAgLmxvZ29fX2NvbnRhaW5lciBoMSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR2FtamEgRmxvd2VyJztcXHJcXG4gICAgbWFyZ2luOiAwIDAgMCAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG4gICAgY29sb3I6ICNlZmVmZWY7IH1cXHJcXG5cXHJcXG4uaGVhZGVyX19jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDMycHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XFxyXFxuICAuaGVhZGVyX19jb250YWluZXIgYSB7XFxyXFxuICAgIGNvbG9yOiAjZWZlZmVmO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXHJcXG5cXHJcXG4uc2lkZWJhcl9fY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE4MTg2O1xcclxcbiAgY29sb3I6ICNlZmVmZWY7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7IH1cXHJcXG5cXHJcXG4ubmV3LXRhc2tfX2J1dHRvbiB7XFxyXFxuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQwYWY7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgIzM0NEI1MjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAjMjMyMzIzNzc7IH1cXHJcXG4gIC5uZXctdGFza19fYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NEI1MjtcXHJcXG4gICAgY29sb3I6ICNlZmVmZWY7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2VlZWNkZjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxyXFxuICAubmV3LXRhc2tfX2J1dHRvbjphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTsgfVxcclxcblxcclxcbi5zaWRlYmFyLWNhdGVnb3J5IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7IH1cXHJcXG4gIC5zaWRlYmFyLWNhdGVnb3J5IGgyIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDAgMCA4cHggMDsgfVxcclxcbiAgLnNpZGViYXItY2F0ZWdvcnkgdWwge1xcclxcbiAgICBtYXJnaW46IDAgMCAwIDhweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxyXFxuXFxyXFxuLnNpZGViYXItdGFza2xpc3Qge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxcclxcbiAgLnNpZGViYXItdGFza2xpc3Q6aG92ZXIsIC5zaWRlYmFyLXRhc2tsaXN0OmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2QyZDQ3OTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxyXFxuXFxyXFxuLnRhc2tsaXN0LXN1YnRhc2tzIHtcXHJcXG4gIGNvbG9yOiAjY2NjY2NjO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXHJcXG4gIC50YXNrbGlzdC1zdWJ0YXNrcyBsaSB7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XFxyXFxuXFxyXFxuLmNvbnRlbnRfX2NvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcclxcbiAgY29sb3I6ICMyMzIzMjM7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7IH1cXHJcXG5cXHJcXG4uY29udGVudF9fdGFza2xpc3QtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxNnB4OyB9XFxyXFxuXFxyXFxuLmNvbnRlbnRfX3Rhc2tsaXN0LXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxcclxcblxcclxcbi5jb250ZW50X190YXNrbGlzdC1kZXNjcmlwdGlvbiB7XFxyXFxuICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2FhYWFhYTtcXHJcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxcclxcblxcclxcbi5lZGl0LXRhc2tsaXN0X19idXR0b24sXFxyXFxuLmVkaXQtc2luZ2xlLXRhc2tfX2J1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDIwcHg7IH1cXHJcXG4gIC5lZGl0LXRhc2tsaXN0X19idXR0b246aG92ZXIsXFxyXFxuICAuZWRpdC1zaW5nbGUtdGFza19fYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxyXFxuXFxyXFxuLnJlbW92ZS10YXNrbGlzdF9fYnV0dG9uLFxcclxcbi5yZW1vdmUtc2luZ2xlLXRhc2tfX2J1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXHJcXG4gIC5yZW1vdmUtdGFza2xpc3RfX2J1dHRvbjpob3ZlcixcXHJcXG4gIC5yZW1vdmUtc2luZ2xlLXRhc2tfX2J1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZTY5NjI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcclxcblxcclxcbi5kYXRhX2xlZ2VuZHMge1xcclxcbiAgY29sb3I6ICNhYWFhYWE7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOHB4IDZmciAyZnIgMWZyIDYwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07IH1cXHJcXG4gIC5kYXRhX2xlZ2VuZHMgOm5vdCg6bnRoLWNoaWxkKDIpKSB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyB9XFxyXFxuXFxyXFxuLnNpbmdsZS10YXNrX19jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAxNnB4IDA7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYWFhYTsgfVxcclxcbiAgLnNpbmdsZS10YXNrX19jb250YWluZXI6aG92ZXIsIC5zaW5nbGUtdGFza19fY29udGFpbmVyOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVjZGY7IH1cXHJcXG5cXHJcXG4uc2luZ2xlLXRhc2tfX2RhdGFzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggNmZyIDJmciAxZnIgMzBweCAzMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcclxcbiAgLnNpbmdsZS10YXNrX19kYXRhcyBoMyB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDsgfVxcclxcbiAgLnNpbmdsZS10YXNrX19kYXRhcyBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7IH1cXHJcXG4gIC5zaW5nbGUtdGFza19fZGF0YXMgOm5vdCg6bnRoLWNoaWxkKDIpKSB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyB9XFxyXFxuXFxyXFxuLnNpbmdsZS10YXNrX19kZXNjcmlwdGlvbiB7XFxyXFxuICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2FhYWFhYTtcXHJcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcclxcbiAgbWFyZ2luOiA4cHggMDsgfVxcclxcblxcclxcbi8qIHdpZHRoICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDsgfVxcclxcblxcclxcbi8qIFRyYWNrICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyB9XFxyXFxuXFxyXFxuLyogSGFuZGxlICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjODg4OyB9XFxyXFxuXFxyXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNTU1OyB9XFxyXFxuXFxyXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1xcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLGFBQWE7RUFDYixTQUFRLEVBQUE7O0FBR1Y7RUFDRSxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFJZDtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsVUFBVSxFQUFBOztBQUdaO0VBQ0UsYUFBYTtFQUNiLHlCQWxDZ0U7RUFtQ2hFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IseUJBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7RUFFVjtJQUNFLGNBN0N3RztJQThDeEcsa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFBOztBQUl0QjtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBdERrSjtFQXVEbEosZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYix5QkFBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTtFQUVWO0lBQ0UsY0FqRWtLO0lBa0VsSyxrQkFBa0I7SUFDbEIsa0JBQWtCLEVBQUE7RUFHcEI7SUFDRSxpQkFBaUIsRUFBQTtFQUduQjtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix3QkFBd0IsRUFBQTtFQUcxQjtJQUNFLHlCQW5Ga0s7SUFvRmxLLHlCQUEyQztJQUMzQyxjQXJGbUYsRUFBQTtJQXVGbkY7TUFDRSx5QkF4RmlGO01BeUZqRixjQXpGZ0s7TUEwRmhLLHlCQUEyQyxFQUFBO0VBSS9DO0lBQ0UsY0EvRnlDO0lBZ0d6Qyx5QkFBK0MsRUFBQTs7QUFJbkQ7RUFDRSxhQUFhLEVBQUE7O0FBS2Y7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQixFQUFBO0VBRXRCO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhLEVBQUE7RUFHZjtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZSxFQUFBO0VBR2pCO0lBQ0UsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBOUh5SDtJQStIekgsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIseUJBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQixjQXBJd0csRUFBQTtJQXNJeEc7TUFDRSx5QkF2SWlCO01Bd0lqQixjQXhJaUY7TUF5SWpGLGVBQWUsRUFBQTtJQUdqQjtNQUNFLDBCQUEwQixFQUFBOztBQU1oQztFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBdEpxQixFQUFBOztBQXlKdkI7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7RUFFZjtJQUNBLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBbktxRixFQUFBOztBQXVLdkY7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULG1CQUFtQixFQUFBO0VBRW5CO0lBQ0UsY0FoTG1GO0lBaUxuRixxQkFBcUIsRUFBQTs7QUFLekI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQXpMMkM7RUEwTDNDLGNBMUxxRjtFQTJMckYsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlCQW5NMkg7RUFvTTNILGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUJBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixpQ0FBaUMsRUFBQTtFQUVqQztJQUNFLHlCQTNNbUI7SUE0TW5CLGNBNU1tRjtJQTZNbkYscUJBN01nSjtJQThNaEosZUFBZSxFQUFBO0VBR2pCO0lBQ0UsMEJBQTBCLEVBQUE7O0FBSTlCO0VBQ0UsbUJBQW1CLEVBQUE7RUFFbkI7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBR25CO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixxQkFBcUIsRUFBQTs7QUFJekI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBRWxCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUE7RUFFdkI7SUFFRSwyQkFBMkI7SUFDM0IsZUFBZSxFQUFBOztBQUluQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7RUFFbEI7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBOztBQUs3QjtFQUNFLHlCQW5RcUY7RUFvUXJGLGNBcFEwRztFQXFRMUcsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsbUJBQWtCLEVBQUE7O0FBR3BCOztFQUVFLHlEQUErQztFQUMvQyxZQUFZO0VBQ1osV0FBVyxFQUFBO0VBRVg7O0lBQ0UsZUFBZSxFQUFBOztBQUluQjs7RUFFRSx5REFBaUQ7RUFDakQsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7RUFFbEI7O0lBQ0UseUJBalRrSztJQWtUbEssZUFBZSxFQUFBOztBQUluQjtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTtFQUVqQjtJQUNFLG9CQUFvQixFQUFBOztBQUl4QjtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0MsRUFBQTtFQUVoQztJQUVFLHlCQXhVZ0osRUFBQTs7QUE0VXBKO0VBQ0UsYUFBYTtFQUNiLGlEQUFpRDtFQUNqRCxtQkFBbUIsRUFBQTtFQUVuQjtJQUNFLFNBQVM7SUFDVCxnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLFNBQVM7SUFDVCxZQUFZO0lBQ1osbUJBQW1CLEVBQUE7RUFHckI7SUFDRSxvQkFBb0IsRUFBQTs7QUFJeEI7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBSWYsVUFBQTtBQUNBO0VBQ0UsV0FBVyxFQUFBOztBQUdiLFVBQUE7QUFDQTtFQUNFLG1CQUFtQixFQUFBOztBQUdyQixXQUFBO0FBQ0E7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEIsb0JBQUE7QUFDQTtFQUNFLGdCQUFnQixFQUFBOztBQzlGbEIsb0NBQW9DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3Qgc2lkZWJhcl90YXNrbGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci10YXNrbGlzdHMnKTtcclxuY29uc3QgY29udGVudF9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1vdXRwdXQnKTtcclxuXHJcbmNvbnN0IGNyZWF0ZVRhc2tsaXN0Q29udGFpbmVyID0gKHRhc2tMaXN0c0FycmF5KSA9PiB7XHJcbiAgc2lkZWJhcl90YXNrbGlzdHMudGV4dENvbnRlbnQgPSAnJztcclxuICB0YXNrTGlzdHNBcnJheS5mb3JFYWNoKGVsID0+IHtcclxuICAgIGNvbnN0IHRhc2tsaXN0X2Jsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIHRhc2tsaXN0X2Jsb2NrLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItdGFza2xpc3QnKTtcclxuICAgIHNpZGViYXJfdGFza2xpc3RzLmFwcGVuZENoaWxkKHRhc2tsaXN0X2Jsb2NrKTtcclxuICAgIGNvbnN0IHRhc2tsaXN0X3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrbGlzdF90aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrbGlzdC10aXRsZScpO1xyXG4gICAgdGFza2xpc3RfdGl0bGUudGV4dENvbnRlbnQgPSBlbC50aXRsZTtcclxuICAgIHRhc2tsaXN0X2Jsb2NrLmFwcGVuZENoaWxkKHRhc2tsaXN0X3RpdGxlKTtcclxuICAgIChlbC5jb250ZW50KS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgY29uc3QgdGFza2xpc3RfY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgIHRhc2tsaXN0X2NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFza2xpc3Qtc3VidGFza3MnKTtcclxuICAgICAgdGFza2xpc3RfY29udGVudC50ZXh0Q29udGVudCA9IGVsLnRpdGxlO1xyXG4gICAgICB0YXNrbGlzdF9ibG9jay5hcHBlbmRDaGlsZCh0YXNrbGlzdF9jb250ZW50KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbG9hZFRhc2tsaXN0RGV0YWlscyA9ICh0YXNrbGlzdCkgPT4ge1xyXG4gIGNvbnRlbnRfY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7IC8vIGVtcHR5IHRoZSBkaXYgYmVmb3JlIHVwZGF0aW5nXHJcbi8vIEdlbmVyYXRlIHRhc2tsaXN0IGhlYWRlclxyXG4gIGNvbnN0IGNvbnRlbnRfdGFza2xpc3RfaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGVudF90YXNrbGlzdF9oZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudF9fdGFza2xpc3QtaGVhZGVyJyk7XHJcbiAgY29udGVudF9jb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudF90YXNrbGlzdF9oZWFkZXIpO1xyXG4gIGNvbnN0IHRhc2tsaXN0X3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICB0YXNrbGlzdF90aXRsZS5jbGFzc0xpc3QuYWRkKCdjb250ZW50X190YXNrbGlzdC10aXRsZScpO1xyXG4gIHRhc2tsaXN0X3RpdGxlLnRleHRDb250ZW50ID0gdGFza2xpc3QudGl0bGU7XHJcbiAgY29udGVudF90YXNrbGlzdF9oZWFkZXIuYXBwZW5kQ2hpbGQodGFza2xpc3RfdGl0bGUpO1xyXG4gIGNvbnN0IGVkaXRfdGFza2xpc3RfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWRpdF90YXNrbGlzdF9idXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdC10YXNrbGlzdF9fYnV0dG9uJyk7XHJcbiAgY29udGVudF90YXNrbGlzdF9oZWFkZXIuYXBwZW5kQ2hpbGQoZWRpdF90YXNrbGlzdF9idXR0b24pO1xyXG4gIGNvbnN0IHJlbW92ZV90YXNrbGlzdF9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByZW1vdmVfdGFza2xpc3RfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS10YXNrbGlzdF9fYnV0dG9uJyk7XHJcbiAgY29udGVudF90YXNrbGlzdF9oZWFkZXIuYXBwZW5kQ2hpbGQocmVtb3ZlX3Rhc2tsaXN0X2J1dHRvbik7XHJcbi8vIEdlbmVyYXRlIHRhc2tsaXN0IGRlc2NyaXB0aW9uXHJcbiAgY29uc3QgdGFza2xpc3RfZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0YXNrbGlzdF9kZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdjb250ZW50X190YXNrbGlzdC1kZXNjcmlwdGlvbicpO1xyXG4gIHRhc2tsaXN0X2Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFza2xpc3QuZGVzY3JpcHRpb247XHJcbiAgY29udGVudF9jb250YWluZXIuYXBwZW5kQ2hpbGQodGFza2xpc3RfZGVzY3JpcHRpb24pO1xyXG4vLyBHZW5lcmF0ZSB0YXNrcyBjb250YWluZXJcclxuICBjb25zdCB0YXNrc19kaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGFza3NfZGlzcGxheS5jbGFzc0xpc3QuYWRkKCdjb250ZW50X19zaW5nbGUtdGFza3MtZGlzcGxheScpO1xyXG4gIGNvbnRlbnRfY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tzX2Rpc3BsYXkpO1xyXG4vLyBHZW5lcmF0ZSBjb2x1bW5zIGxhYmVsc1xyXG4gIGNvbnN0IGRhdGFfbGVnZW5kcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRhdGFfbGVnZW5kcy5jbGFzc0xpc3QuYWRkKCdkYXRhX2xlZ2VuZHMnKTtcclxuICB0YXNrc19kaXNwbGF5LmFwcGVuZENoaWxkKGRhdGFfbGVnZW5kcyk7XHJcbiAgY29uc3QgZW1wdHlfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGF0YV9sZWdlbmRzLmFwcGVuZENoaWxkKGVtcHR5X2Rpdik7XHJcbiAgY29uc3QgbGFiZWxfdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxhYmVsX3Rhc2sudGV4dENvbnRlbnQgPSAnVGFzayc7XHJcbiAgZGF0YV9sZWdlbmRzLmFwcGVuZENoaWxkKGxhYmVsX3Rhc2spO1xyXG4gIGNvbnN0IGxhYmVsX2RlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGFiZWxfZGVhZGxpbmUudGV4dENvbnRlbnQgPSAnRGVhZGxpbmUnO1xyXG4gIGRhdGFfbGVnZW5kcy5hcHBlbmRDaGlsZChsYWJlbF9kZWFkbGluZSk7XHJcbiAgY29uc3QgbGFiZWxfcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsYWJlbF9wcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XHJcbiAgZGF0YV9sZWdlbmRzLmFwcGVuZENoaWxkKGxhYmVsX3ByaW9yaXR5KTtcclxuICBjb25zdCBsYWJlbF9hY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGFiZWxfYWN0aW9ucy50ZXh0Q29udGVudCA9ICdBY3Rpb25zJztcclxuICBkYXRhX2xlZ2VuZHMuYXBwZW5kQ2hpbGQobGFiZWxfYWN0aW9ucyk7XHJcbi8vIEdlbmVyYXRlIGRpc3BsYXkgb2YgZWFjaCB0YXNrXHJcbiAgKHRhc2tsaXN0LmNvbnRlbnQpLmZvckVhY2godGFzayA9PiB7XHJcbiAgICBjb25zdCBzaW5nbGVfdGFza19jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNpbmdsZV90YXNrX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtdGFza19fY29udGFpbmVyJyk7XHJcbiAgICB0YXNrc19kaXNwbGF5LmFwcGVuZENoaWxkKHNpbmdsZV90YXNrX2NvbnRhaW5lcik7XHJcbiAgICBjb25zdCBzaW5nbGVfdGFza19kYXRhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2luZ2xlX3Rhc2tfZGF0YXMuY2xhc3NMaXN0LmFkZCgnc2luZ2xlLXRhc2tfX2RhdGFzJyk7XHJcbiAgICBzaW5nbGVfdGFza19jb250YWluZXIuYXBwZW5kQ2hpbGQoc2luZ2xlX3Rhc2tfZGF0YXMpO1xyXG4gICAgY29uc3QgdGFza19jaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0YXNrX2NoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBzaW5nbGVfdGFza19kYXRhcy5hcHBlbmRDaGlsZCh0YXNrX2NoZWNrYm94KTtcclxuICAgIGNvbnN0IHNpbmdsZV90YXNrX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHNpbmdsZV90YXNrX3RpdGxlLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS10YXNrX190aXRsZScpO1xyXG4gICAgc2luZ2xlX3Rhc2tfdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xyXG4gICAgc2luZ2xlX3Rhc2tfZGF0YXMuYXBwZW5kQ2hpbGQoc2luZ2xlX3Rhc2tfdGl0bGUpO1xyXG4gICAgY29uc3Qgc2luZ2xlX3Rhc2tfZGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNpbmdsZV90YXNrX2RlYWRsaW5lLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS10YXNrX19kZWFkbGluZScpXHJcbiAgICBzaW5nbGVfdGFza19kZWFkbGluZS50ZXh0Q29udGVudCA9IHRhc2suZGVhZGxpbmU7XHJcbiAgICBzaW5nbGVfdGFza19kYXRhcy5hcHBlbmRDaGlsZChzaW5nbGVfdGFza19kZWFkbGluZSk7XHJcbiAgICBjb25zdCBzaW5nbGVfdGFza19wcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2luZ2xlX3Rhc2tfcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xyXG4gICAgc2luZ2xlX3Rhc2tfZGF0YXMuYXBwZW5kQ2hpbGQoc2luZ2xlX3Rhc2tfcHJpb3JpdHkpO1xyXG4gICAgY29uc3QgZWRpdF9zaW5nbGVfdGFza19idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVkaXRfc2luZ2xlX3Rhc2tfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtc2luZ2xlLXRhc2tfX2J1dHRvbicpO1xyXG4gICAgc2luZ2xlX3Rhc2tfZGF0YXMuYXBwZW5kQ2hpbGQoZWRpdF9zaW5nbGVfdGFza19idXR0b24pO1xyXG4gICAgY29uc3QgcmVtb3ZlX3NpbmdsZV90YXNrX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmVtb3ZlX3NpbmdsZV90YXNrX2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtc2luZ2xlLXRhc2tfX2J1dHRvbicpO1xyXG4gICAgc2luZ2xlX3Rhc2tfZGF0YXMuYXBwZW5kQ2hpbGQocmVtb3ZlX3NpbmdsZV90YXNrX2J1dHRvbik7XHJcbiAgICBjb25zdCBzaW5nbGVfdGFza19kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2luZ2xlX3Rhc2tfZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnc2luZ2xlLXRhc2tfX2Rlc2NyaXB0aW9uJyk7XHJcbiAgICBzaW5nbGVfdGFza19kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICBzaW5nbGVfdGFza19jb250YWluZXIuYXBwZW5kQ2hpbGQoc2luZ2xlX3Rhc2tfZGVzY3JpcHRpb24pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcmVzZXRDb250ZW50Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnRlbnRfY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVUYXNrbGlzdENvbnRhaW5lciwgbG9hZFRhc2tsaXN0RGV0YWlscywgcmVzZXRDb250ZW50Q29udGFpbmVyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrbGlzdENvbnRhaW5lciwgbG9hZFRhc2tsaXN0RGV0YWlscywgcmVzZXRDb250ZW50Q29udGFpbmVyIH0gZnJvbSAnLi9kb20tY3JlYXRlLmpzJztcclxuaW1wb3J0IHsgZm9ybWF0LCBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5cclxuLy8gR2xvYmFsIHZhcmlhYmxlc1xyXG5jb25zdCB0YXNrTGlzdHNDb250YWluZXIgPSBbXTtcclxubGV0IG5ld1Rhc2s7XHJcblxyXG5cclxuLy8gRE9NIEVsZW1lbnRzXHJcbmNvbnN0IE5FV19UQVNLX0ZPUk0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2tfZm9ybScpO1xyXG5jb25zdCBFRElUX1RBU0tfRk9STSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VGFza0Zvcm0nKTtcclxuXHJcbmNvbnN0IFRFU1RfQlVUVE9OID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1cGVyYnV0dG9uJyk7IC8vIHRlc3QgcHVycG9zZVxyXG5jb25zdCBORVdfVEFTS19CVVRUT04gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2tfX2J1dHRvbicpO1xyXG5jb25zdCBCQUNLRFJPUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcCcpO1xyXG5jb25zdCBORVdfVEFTS19NT0RBTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFza19fbW9kYWwnKTtcclxuY29uc3QgUkVNT1ZFX1RBU0tMSVNUX01PREFMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZS10YXNrbGlzdF9fbW9kYWwnKTtcclxuXHJcblxyXG4vLyBHZW5lcmFsIGZ1bmN0aW9uc1xyXG5jb25zdCBjYXBpdGFsaXplU3RyaW5nID0gKHN0cmluZykgPT4ge1xyXG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XHJcbn07XHJcblxyXG4vLyBGYWN0b3J5IGZ1bmN0aW9uIGZvciBjcmVhdGluZyBuZXcgc2luZ2xlIHRhc2tzXHJcbmNvbnN0IFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkZWFkbGluZSwgcHJpb3JpdHksIHRhc2tsaXN0KSA9PiB7XHJcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkZWFkbGluZSwgcHJpb3JpdHksIHRhc2tsaXN0IH07XHJcbn07XHJcblxyXG4vLyBGYWN0b3J5IGZ1bmN0aW9uIGZvciBjcmVhdGluZyB0YXNrbGlzdHMsIHVudG8gd2hpY2ggd2UgY2FuIHB1c2ggc2luZ2xlIHRhc2tzXHJcbmNvbnN0IFRhc2tsaXN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbikgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBbXTtcclxuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGNvbnRlbnQgfTtcclxufTtcclxuXHJcbi8vIE1vZGFsc1xyXG5jb25zdCBvcGVuTW9kYWwgPSAobW9kYWwpID0+IHtcclxuICBCQUNLRFJPUC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxufTtcclxuXHJcbmNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBCQUNLRFJPUC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgTkVXX1RBU0tfTU9EQUwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIFJFTU9WRV9UQVNLTElTVF9NT0RBTC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59O1xyXG5cclxuQkFDS0RST1AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKCkpO1xyXG5cclxuTkVXX1RBU0tfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG9wZW5Nb2RhbChORVdfVEFTS19NT0RBTCk7XHJcbn0pO1xyXG5cclxuLy8gVEFTS1MgQU5EIFRBU0tMSVNUUyBBQ1RJT05TOiBDcmVhdGUsIFJlbW92ZSwgRWRpdFxyXG4vL1xyXG4vLyBHZXQgdGFza3MgaW5mb3MgZnJvbSBmb3JtLCBwdXQgaXQgaW4gbmV3VGFzayB2YXJpYWJsZSBmb3IgdXNlIGluIG90aGVyIGZ1bmN0aW9uc1xyXG5jb25zdCBnZXRGb3JtRGF0YSA9ICgoKSA9PiB7TkVXX1RBU0tfRk9STS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShORVdfVEFTS19GT1JNKTtcclxuICBjb25zdCB0YXNrRGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSk7XHJcbiAgaWYgKHRhc2tEYXRhLnRhc2tMaXN0ID09PSAnJykge1xyXG4gICAgdGFza0RhdGEudGFza0xpc3QgPSAnR2VuZXJhbCB0YXNrcyc7IC8vIENyZWF0ZSBhIGdlbmVyYWwgdGFrc2xpc3QgdG8gcHV0IHNpbmdsZSB0YXNrcyBpbnRvXHJcbiAgfVxyXG4gIGNvbnN0IHRhc2tsaXN0ID0gY2FwaXRhbGl6ZVN0cmluZyh0YXNrRGF0YS50YXNrTGlzdCk7XHJcbiAgY29uc3QgdGl0bGUgPSBjYXBpdGFsaXplU3RyaW5nKHRhc2tEYXRhLnRhc2tUaXRsZSk7XHJcbiAgaWYgKHRhc2tEYXRhLnRhc2tEZXNjcmlwdGlvbiA9PT0gJycpIHtcclxuICAgIHRhc2tEYXRhLnRhc2tEZXNjcmlwdGlvbiA9ICdObyBkZXNjcmlwdGlvbi4nO1xyXG4gIH1cclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IHRhc2tEYXRhLnRhc2tEZXNjcmlwdGlvbjtcclxuICBpZiAodGFza0RhdGEudGFza0RlYWRsaW5lID09PSAnJykge1xyXG4gICAgdGFza0RhdGEudGFza0RlYWRsaW5lID0gJ05vIGRlYWRsaW5lJztcclxuICB9XHJcbiAgY29uc3QgZGVhZGxpbmUgPSB0YXNrRGF0YS50YXNrRGVhZGxpbmU7XHJcbiAgaWYgKHRhc2tEYXRhLnRhc2tQcmlvcml0eSA9PT0gJycpIHtcclxuICAgIHRhc2tEYXRhLnRhc2tQcmlvcml0eSA9IDM7XHJcbiAgfVxyXG4gIGNvbnN0IHByaW9yaXR5ID0gdGFza0RhdGEudGFza1ByaW9yaXR5O1xyXG4gIG5ld1Rhc2sgPSBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGVhZGxpbmUsIHByaW9yaXR5LCB0YXNrbGlzdCk7XHJcbiAgYWRkVGFza1RvVGFza0xpc3QobmV3VGFzayk7XHJcbiAgY2xvc2VNb2RhbCgpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG5cclxuLy8gQWRkIHRoZSBuZXdUYXNrIHRvIGl0cyB0YXNrIGxpc3QgaWYgaXQgZXhpc3QsIGNyZWF0ZSBvbmUgaWYgaXQgZG9lc250XHJcbmNvbnN0IGFkZFRhc2tUb1Rhc2tMaXN0ID0gKG5ld1Rhc2spID0+IHtcclxuICAvLyBJZiB0aGUgdGFza2xpc3QgdGl0bGUgaXMgYWxyZWFkeSBpbiB0aGUgZGF0YWJhc2UsIHRoaXMgd2lsbCByZXR1cm4gdGhlIHRhc2tsaXN0IG9iamVjdC4gT3RoZXJ3aXNlLCByZXR1cm5zIHVuZGVmaW5lZFxyXG4gIGNvbnN0IHRhcmdldFRhc2tMaXN0ID0gdGFza0xpc3RzQ29udGFpbmVyLmZpbmQoKHsgdGl0bGUgfSkgPT4gdGl0bGUgPT09IG5ld1Rhc2sudGFza2xpc3QpO1xyXG4gIGlmICh0YXJnZXRUYXNrTGlzdCA9PT0gdW5kZWZpbmVkKSB7IC8vIGkuZS4gbm8gdGFza2xpc3Qgd2l0aCB0aGlzIG5hbWUgZXhpc3RzIHlldFxyXG4gICAgY29uc29sZS5sb2coJ1RoaXMgaXMgYSBuZXcgdGFza2xpc3QnKTtcclxuICAgIGNvbnN0IG5ld1Rhc2tMaXN0ID0gVGFza2xpc3QobmV3VGFzay50YXNrbGlzdCwgJycpO1xyXG4gICAgdGFza0xpc3RzQ29udGFpbmVyLnB1c2gobmV3VGFza0xpc3QpO1xyXG4gICAgKG5ld1Rhc2tMaXN0LmNvbnRlbnQpLnB1c2gobmV3VGFzayk7XHJcbiAgICBuZXdUYXNrTGlzdC5kZXNjcmlwdGlvbiA9ICdUaGVyZSBpcyBubyBkZXNjcmlwdGlvbiB5ZXQuLi4nO1xyXG4gICAgY3JlYXRlVGFza2xpc3RDb250YWluZXIodGFza0xpc3RzQ29udGFpbmVyKTtcclxuICAgIGRpc3BsYXlDb250cm9sbGVyKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgdGFzayB0byB0aGUgZXhpc3RpbmcgdGFza2xpc3QuLi4nKTtcclxuICAgICh0YXJnZXRUYXNrTGlzdC5jb250ZW50KS5wdXNoKG5ld1Rhc2spO1xyXG4gICAgY3JlYXRlVGFza2xpc3RDb250YWluZXIodGFza0xpc3RzQ29udGFpbmVyKTtcclxuICAgIGRpc3BsYXlDb250cm9sbGVyKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gUmVtb3ZlIGEgdGFza2xpc3RcclxuY29uc3QgcmVtb3ZlVGFza2xpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgUkVNT1ZFX1RBU0tMSVNUX0JVVFRPTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtdGFza2xpc3RfX2J1dHRvbicpO1xyXG4gIGNvbnN0IFJFTU9WRV9UQVNLTElTVF9NT0RBTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtdGFza2xpc3RfX21vZGFsJyk7XHJcbiAgY29uc3QgUkVNT1ZFX0NBTkNFTF9CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlLWNhbmNlbF9fYnV0dG9uJyk7XHJcbiAgY29uc3QgUkVNT1ZFX0NPTkZJUk1fQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZS1jb25maXJtX19idXR0b24nKTtcclxuICBSRU1PVkVfVEFTS0xJU1RfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgb3Blbk1vZGFsKFJFTU9WRV9UQVNLTElTVF9NT0RBTCk7XHJcbiAgICBjb25zdCB0YXJnZXRUYXNrTGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fdGFza2xpc3QtdGl0bGUnKS50ZXh0Q29udGVudDsgLy8gRmluZCB0aGUgY3VycmVudCB0YXNrbGlzdCBuYW1lXHJcbiAgICBjb25zdCB0YXJnZXRUYXNrTGlzdCA9IHRhc2tMaXN0c0NvbnRhaW5lci5maW5kKCh7IHRpdGxlIH0pID0+IHRpdGxlID09PSB0YXJnZXRUYXNrTGlzdE5hbWUpO1xyXG4gICAgUkVNT1ZFX0NBTkNFTF9CVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKCkpO1xyXG4gICAgUkVNT1ZFX0NPTkZJUk1fQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0c0NvbnRhaW5lci5sZW5ndGg7IGkrKykgeyBcclxuICAgICAgICBpZiAodGFza0xpc3RzQ29udGFpbmVyW2ldID09PSB0YXJnZXRUYXNrTGlzdCkgeyBcclxuICAgICAgICAgIHRhc2tMaXN0c0NvbnRhaW5lci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNyZWF0ZVRhc2tsaXN0Q29udGFpbmVyKHRhc2tMaXN0c0NvbnRhaW5lcik7IC8vIFVwZGF0ZSB0aGUgc2lkZWJhciB0YXNrbGlzdHNcclxuICAgICAgZGlzcGxheUNvbnRyb2xsZXIoKTsgLy8gUmVsb2FkIHRoZSBjbGljayBhY3Rpb25zIG9uIHNpZGViYXIgdGFza2xpc3RzXHJcbiAgICAgIHJlc2V0Q29udGVudENvbnRhaW5lcigpOyAvLyBFbXB0eSB0aGUgY29udGVudCBjb250YWluZXJcclxuICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4pO1xyXG59O1xyXG5cclxuLy8gUmVtb3ZlIGEgc2luZ2xlIHRhc2sgZnJvbSB0aGUgdGFza2xpc3QgZGlzcGxheVxyXG5jb25zdCByZW1vdmVUYXNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IFJFTU9WRV9UQVNLX0JUTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUtc2luZ2xlLXRhc2tfX2J1dHRvbicpO1xyXG4gIGNvbnN0IHRhcmdldFRhc2tMaXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X190YXNrbGlzdC10aXRsZScpLnRleHRDb250ZW50OyAvLyBGaW5kIHRoZSBjdXJyZW50IHRhc2tsaXN0IG5hbWVcclxuICBjb25zdCB0YXJnZXRUYXNrTGlzdCA9IHRhc2tMaXN0c0NvbnRhaW5lci5maW5kKCh7IHRpdGxlIH0pID0+IHRpdGxlID09PSB0YXJnZXRUYXNrTGlzdE5hbWUpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUkVNT1ZFX1RBU0tfQlROLmxlbmd0aDsgaSArKykge1xyXG4gICAgUkVNT1ZFX1RBU0tfQlROW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0YXJnZXRUYXNrTGlzdC5jb250ZW50LnNwbGljZShpLCAxKTtcclxuICAgICAgbG9hZFRhc2tsaXN0RGV0YWlscyh0YXJnZXRUYXNrTGlzdCk7XHJcbiAgICAgIGNyZWF0ZVRhc2tsaXN0Q29udGFpbmVyKHRhc2tMaXN0c0NvbnRhaW5lcik7IC8vIFVwZGF0ZSB0aGUgc2lkZWJhciB0YXNrbGlzdHNcclxuICAgICAgcmVtb3ZlVGFzaygpOyAvLyBSZWxvYWQgcmVtb3ZlIGZ1bmN0aW9uIGZvciByZW1haW5pbmcgdGFza3NcclxuICAgICAgcmVtb3ZlVGFza2xpc3QoKTsgLy8gUmVsb2FkIHJlbW92ZSB0YXNrbGlzdCBmdW5jdGlvblxyXG4gICAgICBlZGl0VGFza2xpc3QoKTsgLy8gUmVsb2FkIGVkaXQgZnVuY3Rpb25cclxuICAgICAgZGlzcGxheUNvbnRyb2xsZXIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIEVkaXQgYSB0YXNrbGlzdFxyXG5jb25zdCBlZGl0VGFza2xpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgVEFTS0xJU1RfTkFNRV9FTEVNRU5UID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX3Rhc2tsaXN0LXRpdGxlJyk7XHJcbiAgY29uc3QgVEFTS0xJU1RfREVTQ1JJUFRJT05fRUxFTUVOVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X190YXNrbGlzdC1kZXNjcmlwdGlvbicpO1xyXG4gIGNvbnN0IHRhcmdldFRhc2tMaXN0TmFtZSA9IFRBU0tMSVNUX05BTUVfRUxFTUVOVC50ZXh0Q29udGVudDtcclxuICBjb25zdCB0YXJnZXRUYXNrTGlzdCA9IHRhc2tMaXN0c0NvbnRhaW5lci5maW5kKCh7IHRpdGxlIH0pID0+IHRpdGxlID09PSB0YXJnZXRUYXNrTGlzdE5hbWUpO1xyXG4gIFRBU0tMSVNUX05BTUVfRUxFTUVOVC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgLy8gRWRpdCB0aGUgdGFza2xpc3QgdGl0bGVcclxuICAgIFRBU0tMSVNUX05BTUVfRUxFTUVOVC5jb250ZW50RWRpdGFibGUgPSBcInRydWVcIjtcclxuICB9KTtcclxuICBUQVNLTElTVF9OQU1FX0VMRU1FTlQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgIFRBU0tMSVNUX05BTUVfRUxFTUVOVC5jb250ZW50RWRpdGFibGUgPSAnZmFsc2UnO1xyXG4gICAgdGFyZ2V0VGFza0xpc3QudGl0bGUgPSBUQVNLTElTVF9OQU1FX0VMRU1FTlQudGV4dENvbnRlbnQ7IC8vIFVwZGF0ZSB0YXNrbGlzdCBpbiBhcnJheVxyXG4gICAgY3JlYXRlVGFza2xpc3RDb250YWluZXIodGFza0xpc3RzQ29udGFpbmVyKTsgLy8gVXBkYXRlIHRoZSBzaWRlYmFyIHRhc2tsaXN0c1xyXG4gICAgZWRpdFRhc2tsaXN0KCk7IC8vIFJlbG9hZCBlZGl0IGZ1bmN0aW9uXHJcbiAgfSk7XHJcbiAgVEFTS0xJU1RfREVTQ1JJUFRJT05fRUxFTUVOVC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIFRBU0tMSVNUX0RFU0NSSVBUSU9OX0VMRU1FTlQuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xyXG4gIH0pO1xyXG4gIFRBU0tMSVNUX0RFU0NSSVBUSU9OX0VMRU1FTlQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgIFRBU0tMSVNUX0RFU0NSSVBUSU9OX0VMRU1FTlQuY29udGVudEVkaXRhYmxlID0gJ2ZhbHNlJztcclxuICAgIHRhcmdldFRhc2tMaXN0LmRlc2NyaXB0aW9uID0gVEFTS0xJU1RfREVTQ1JJUFRJT05fRUxFTUVOVC50ZXh0Q29udGVudDtcclxuICAgIGNyZWF0ZVRhc2tsaXN0Q29udGFpbmVyKHRhc2tMaXN0c0NvbnRhaW5lcik7IC8vIFVwZGF0ZSB0aGUgc2lkZWJhciB0YXNrbGlzdHNcclxuICAgIGVkaXRUYXNrbGlzdCgpOyAvLyBSZWxvYWQgZWRpdCBmdW5jdGlvblxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gRWRpdCBhIHNpbmdsZSB0YXNrXHJcbi8qY29uc3QgZ2V0Q3VycmVudFRhc2tEYXRhID0gKGZvcm0sIHRhcmdldCkgPT4geyAvLyBFZGl0IHRocm91Z2ggZm9ybVxyXG4gIGZvcm0udGFza1RpdGxlLnZhbHVlID0gdGFyZ2V0LnRpdGxlO1xyXG4gIGZvcm0udGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gdGFyZ2V0LmRlc2NyaXB0aW9uO1xyXG4gIGZvcm0udGFza0RlYWRsaW5lLnZhbHVlID0gdGFyZ2V0LmRlYWRsaW5lO1xyXG4gIGZvcm0udGFza1ByaW9yaXR5LnZhbHVlID0gdGFyZ2V0LnByaW9yaXR5O1xyXG4gIGZvcm0udGFza0xpc3QudmFsdWUgPSB0YXJnZXQudGFza2xpc3Q7XHJcbn07XHJcblxyXG5jb25zdCBlZGl0VGFza0Zvcm0gPSAodGFyZ2V0KSA9PiB7XHJcbiAgY29uc3QgdGFyZ2V0VGFza0xpc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX3Rhc2tsaXN0LXRpdGxlJykudGV4dENvbnRlbnQ7XHJcbiAgY29uc3QgdGFyZ2V0VGFza0xpc3QgPSB0YXNrTGlzdHNDb250YWluZXIuZmluZCgoeyB0aXRsZSB9KSA9PiB0aXRsZSA9PT0gdGFyZ2V0VGFza0xpc3ROYW1lKTtcclxuICBFRElUX1RBU0tfRk9STS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoRURJVF9UQVNLX0ZPUk0pO1xyXG4gICAgY29uc3QgdGFza0RhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xyXG4gICAgdGFyZ2V0LnRhc2tsaXN0ID0gY2FwaXRhbGl6ZVN0cmluZyh0YXNrRGF0YS50YXNrTGlzdCk7XHJcbiAgICB0YXJnZXQudGl0bGUgPSBjYXBpdGFsaXplU3RyaW5nKHRhc2tEYXRhLnRhc2tUaXRsZSk7XHJcbiAgICB0YXJnZXQuZGVzY3JpcHRpb24gPSB0YXNrRGF0YS50YXNrRGVzY3JpcHRpb247XHJcbiAgICB0YXJnZXQuZGVhZGxpbmUgPSB0YXNrRGF0YS50YXNrRGVhZGxpbmU7XHJcbiAgICB0YXJnZXQucHJpb3JpdHkgPSB0YXNrRGF0YS50YXNrUHJpb3JpdHk7XHJcbiAgICBsb2FkVGFza2xpc3REZXRhaWxzKHRhcmdldFRhc2tMaXN0KTtcclxuICAgIHJlbW92ZVRhc2tsaXN0KCk7XHJcbiAgICByZW1vdmVUYXNrKCk7XHJcbiAgICBlZGl0VGFza2xpc3QoKTtcclxuICAgIGVkaXRUYXNrKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBlZGl0VGFzayA9ICgpID0+IHtcclxuICBjb25zdCB0YXJnZXRUYXNrTGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fdGFza2xpc3QtdGl0bGUnKS50ZXh0Q29udGVudDtcclxuICBjb25zdCB0YXJnZXRUYXNrTGlzdCA9IHRhc2tMaXN0c0NvbnRhaW5lci5maW5kKCh7IHRpdGxlIH0pID0+IHRpdGxlID09PSB0YXJnZXRUYXNrTGlzdE5hbWUpO1xyXG4gIGNvbnN0IGVkaXRfdGFza19idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1zaW5nbGUtdGFza19fYnV0dG9uJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlZGl0X3Rhc2tfYnV0dG9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBlZGl0X3Rhc2tfYnV0dG9uW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRUYXNrQ29udGVudCA9IHRhcmdldFRhc2tMaXN0LmNvbnRlbnRbaV07IC8vIEZpbmQgY2xpY2tlZCB0YXNrXHJcbiAgICAgIGdldEN1cnJlbnRUYXNrRGF0YShFRElUX1RBU0tfRk9STSwgdGFyZ2V0VGFza0NvbnRlbnQpOyAvLyBGaWxsIHRoZSBlZGl0IGZvcm0gd2l0aCBjdXJyZW50IGRhdGFzXHJcbiAgICAgIGVkaXRUYXNrRm9ybSh0YXJnZXRUYXNrQ29udGVudCk7XHJcbiAgICB9KTtcclxuICAgIH1cclxufTsqL1xyXG5cclxuY29uc3QgZWRpdFRhc2sgPSAoKSA9PiB7IC8vIExpdmUgZWRpdCBwcm90b3R5cGVcclxuICAvLyBGaW5kIHRoZSBjdXJyZW50IHRhc2tsaXN0IG5hbWUsIHRoZW4gc2VhcmNoIGZvciBpdCBpbiB0aGUgdGFza3NsaXN0cyBhcnJheSBhbmQgcmV0dXJuIGl0XHJcbiAgY29uc3QgdGFyZ2V0VGFza0xpc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX3Rhc2tsaXN0LXRpdGxlJykudGV4dENvbnRlbnQ7IFxyXG4gIGNvbnN0IHRhcmdldFRhc2tMaXN0ID0gdGFza0xpc3RzQ29udGFpbmVyLmZpbmQoKHsgdGl0bGUgfSkgPT4gdGl0bGUgPT09IHRhcmdldFRhc2tMaXN0TmFtZSk7XHJcbiAgY29uc3QgdGFyZ2V0VGFzayA9IHRhcmdldFRhc2tMaXN0LmNvbnRlbnQ7XHJcbiAgLy8gRWRpdCB0YXNrIHRpdGxlXHJcbiAgY29uc3Qgc2luZ2xlX3Rhc2tfdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2luZ2xlLXRhc2tfX3RpdGxlJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaW5nbGVfdGFza190aXRsZS5sZW5ndGg7IGkgKyspIHtcclxuICAgIHNpbmdsZV90YXNrX3RpdGxlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBzaW5nbGVfdGFza190aXRsZVtpXS5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XHJcbiAgICB9KTtcclxuICAgIHNpbmdsZV90YXNrX3RpdGxlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgIHNpbmdsZV90YXNrX3RpdGxlW2ldLmNvbnRlbnRFZGl0YWJsZSA9ICdmYWxzZSc7XHJcbiAgICAgIHRhcmdldFRhc2tbaV0udGl0bGUgPSBzaW5nbGVfdGFza190aXRsZVtpXS50ZXh0Q29udGVudDtcclxuICAgICAgY29uc29sZS5sb2codGFyZ2V0VGFza1tpXSk7XHJcbiAgICAgIGNyZWF0ZVRhc2tsaXN0Q29udGFpbmVyKHRhc2tMaXN0c0NvbnRhaW5lcik7IC8vIFVwZGF0ZSB0aGUgc2lkZWJhciB0YXNrbGlzdHNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gRWRpdCB0YXNrIGRlc2NyaXB0aW9uXHJcbiAgY29uc3Qgc2luZ2xlX3Rhc2tfZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2luZ2xlLXRhc2tfX2Rlc2NyaXB0aW9uJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaW5nbGVfdGFza19kZXNjcmlwdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgc2luZ2xlX3Rhc2tfZGVzY3JpcHRpb25baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHNpbmdsZV90YXNrX2Rlc2NyaXB0aW9uW2ldLmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcclxuICAgIH0pO1xyXG4gICAgc2luZ2xlX3Rhc2tfZGVzY3JpcHRpb25baV0uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgICAgc2luZ2xlX3Rhc2tfZGVzY3JpcHRpb24uY29udGVudEVkaXRhYmxlID0gJ2ZhbHNlJztcclxuICAgICAgdGFyZ2V0VGFza1tpXS5kZXNjcmlwdGlvbiA9IHNpbmdsZV90YXNrX2Rlc2NyaXB0aW9uW2ldLnRleHRDb250ZW50O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBFZGl0IHRhc2sgZGVhZGxpbmUgISEhIEJVR0dFRCAhISFcclxuICBjb25zdCBzaW5nbGVfdGFza19kZWFkbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaW5nbGUtdGFza19fZGVhZGxpbmUnKTtcclxuICBjb25zdCBlZGl0YWJsZURlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBlZGl0YWJsZURlYWRsaW5lLnR5cGUgPSAnZGF0ZSc7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaW5nbGVfdGFza19kZWFkbGluZS5sZW5ndGg7IGkrKykgeyAvLyBGaW5kIHdoaWNoIHRhc2sgXHJcbiAgICBzaW5nbGVfdGFza19kZWFkbGluZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZWRpdGFibGVEZWFkbGluZS52YWx1ZSA9IHNpbmdsZV90YXNrX2RlYWRsaW5lW2ldLnRleHRDb250ZW50O1xyXG4gICAgICBjb25zb2xlLmxvZyh0YXJnZXRUYXNrW2ldLmRlYWRsaW5lKTtcclxuICAgICAgc2luZ2xlX3Rhc2tfZGVhZGxpbmVbaV0ucmVwbGFjZVdpdGgoZWRpdGFibGVEZWFkbGluZSk7XHJcbiAgICB9KTtcclxuICAgIGVkaXRhYmxlRGVhZGxpbmUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgICAgZWRpdGFibGVEZWFkbGluZS5yZXBsYWNlV2l0aChzaW5nbGVfdGFza19kZWFkbGluZVtpXSk7XHJcbiAgICAgIHRhcmdldFRhc2tbaV0uZGVhZGxpbmUgPSBlZGl0YWJsZURlYWRsaW5lLnZhbHVlO1xyXG4gICAgICBsb2FkVGFza2xpc3REZXRhaWxzKHRhcmdldFRhc2tMaXN0KTtcclxuICAgICAgcmVtb3ZlVGFza2xpc3QoKTtcclxuICAgICAgcmVtb3ZlVGFzaygpO1xyXG4gICAgICBlZGl0VGFza2xpc3QoKTtcclxuICAgICAgZWRpdFRhc2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5cclxuXHJcbi8vIERPTSBBQ1RJT05TXHJcbi8vIFdoZW4gY2xpY2tpbmcgb24gYSB0YWtzbGlzdCBuYW1lLCB1cGRhdGUgdGhlIGRpc3BsYXkgd2l0aCB0aGUgbGlzdCBvZiB0YXNrc1xyXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgpID0+IHtcclxuICBjb25zdCB0YXNrbGlzdF9ibG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpZGViYXItdGFza2xpc3QnKTtcclxuICBjb25zdCB0YXNrbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2tsaXN0LXRpdGxlJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgdGFza2xpc3RfYmxvY2tbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIC8vIEdldCB0aGUgbmFtZSBvZiB0aGUgY2xpY2tlZCB0YXNrbGlzdFxyXG4gICAgICBjb25zdCBjbGlja2VkX3Rhc2sgPSB0YXNrbGlzdFtpXS50ZXh0Q29udGVudDtcclxuICAgICAgLy8gVXNlIHRoZSB0YWtzbGlzdCBuYW1lIHRvIGZpbmQgdGhlIHRhc2tsaXN0IGluIHRoZSB0YXNrTGlzdHNDb250YWluZXJcclxuICAgICAgY29uc3QgY2xpY2tlZFRhc2tMaXN0ID0gdGFza0xpc3RzQ29udGFpbmVyLmZpbmQoKHsgdGl0bGUgfSkgPT4gdGl0bGUgPT09IGNsaWNrZWRfdGFzayk7XHJcbiAgICAgIGxvYWRUYXNrbGlzdERldGFpbHMoY2xpY2tlZFRhc2tMaXN0KTtcclxuICAgICAgcmVtb3ZlVGFza2xpc3QoKTtcclxuICAgICAgcmVtb3ZlVGFzaygpO1xyXG4gICAgICBlZGl0VGFza2xpc3QoKTtcclxuICAgICAgZWRpdFRhc2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG4vLyBUZXN0IHB1cnBvc2VcclxuXHJcblRFU1RfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codGFza0xpc3RzQ29udGFpbmVyKTtcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9