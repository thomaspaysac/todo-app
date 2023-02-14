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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  font-family: 'Ubuntu', sans-serif; }\r\n\r\nbody {\r\n  height: 100vh;\r\n  margin: 0; }\r\n\r\n.form-container {\r\n  width: 400px;\r\n  height: auto; }\r\n\r\nmain {\r\n  display: flex;\r\n  height: 90vh; }\r\n\r\n.note {\r\n  font-style: italic; }\r\n\r\n.backdrop {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: #7181869d;\r\n  z-index: 2; }\r\n\r\n.add-task__modal {\r\n  display: none;\r\n  background-color: #ccd2d4;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 32px;\r\n  border: 4px solid #344B52;\r\n  border-radius: 5px;\r\n  z-index: 3; }\r\n  .add-task__modal h2 {\r\n    color: #232323;\r\n    text-align: center;\r\n    margin: 0 0 16px 0; }\r\n\r\n.remove-tasklist__modal {\r\n  display: none;\r\n  text-align: center;\r\n  background-color: #eeecdf;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 32px;\r\n  border: 4px solid #ee6962;\r\n  border-radius: 5px;\r\n  z-index: 3; }\r\n  .remove-tasklist__modal h2 {\r\n    color: #ee6962;\r\n    text-align: center;\r\n    margin: 0 0 16px 0; }\r\n  .remove-tasklist__modal div {\r\n    font-size: 1.2rem; }\r\n  .remove-tasklist__modal button {\r\n    cursor: pointer;\r\n    font-size: 1.5rem;\r\n    border-radius: 5px;\r\n    padding: 5px 10px;\r\n    margin: 16px 16px 0 16px; }\r\n  .remove-tasklist__modal .remove-confirm__button {\r\n    background-color: #ee6962;\r\n    border: 2px solid #ee6962;\r\n    color: #efefef; }\r\n    .remove-tasklist__modal .remove-confirm__button:hover {\r\n      background-color: #efefef;\r\n      color: #ee6962;\r\n      border: 2px solid #ee6962; }\r\n  .remove-tasklist__modal .remove-cancel__button {\r\n    color: #718186;\r\n    border: 2px solid #718186; }\r\n\r\n.edit-task__modal {\r\n  display: none; }\r\n\r\n#add-task_form {\r\n  display: flex;\r\n  display: flex;\r\n  flex-direction: column; }\r\n  #add-task_form .input-group {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 8px 0; }\r\n  #add-task_form textarea {\r\n    resize: vertical;\r\n    max-height: 33vh; }\r\n  #add-task_form input[type=\"submit\"] {\r\n    font-family: 'Ubuntu', sans-serif;\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    background-color: #d4d0af;\r\n    padding: 8px;\r\n    margin: auto;\r\n    margin-top: 16px;\r\n    border: 3px solid #344B52;\r\n    border-radius: 10px;\r\n    color: #232323; }\r\n    #add-task_form input[type=\"submit\"]:hover {\r\n      background-color: #344B52;\r\n      color: #efefef;\r\n      cursor: pointer; }\r\n    #add-task_form input[type=\"submit\"]:active {\r\n      transform: translateY(2px); }\r\n\r\nheader {\r\n  display: flex;\r\n  height: 10vh;\r\n  background-color: #344B52; }\r\n\r\n.logo__container {\r\n  width: 15%;\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: default; }\r\n  .logo__container h1 {\r\n    font-family: 'Gamja Flower';\r\n    margin: 0 0 0 20px;\r\n    font-size: 3.5rem;\r\n    color: #efefef; }\r\n\r\n.header__container {\r\n  width: 85%;\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n  gap: 32px;\r\n  padding-right: 20px; }\r\n  .header__container a {\r\n    color: #efefef;\r\n    text-decoration: none; }\r\n\r\n.sidebar__container {\r\n  width: 300px;\r\n  padding: 20px;\r\n  background-color: #718186;\r\n  color: #efefef;\r\n  overflow-y: scroll; }\r\n\r\n.new-task__button {\r\n  font-family: 'Ubuntu', sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  width: 100%;\r\n  background-color: #d4d0af;\r\n  padding: 0.5rem;\r\n  margin-bottom: 24px;\r\n  border: 3px solid #344B52;\r\n  border-radius: 10px;\r\n  box-shadow: 3px 3px 5px #23232377; }\r\n  .new-task__button:hover {\r\n    background-color: #344B52;\r\n    color: #efefef;\r\n    border-color: #eeecdf;\r\n    cursor: pointer; }\r\n  .new-task__button:active {\r\n    transform: translateY(2px); }\r\n\r\n.sidebar-category {\r\n  margin-bottom: 32px; }\r\n  .sidebar-category h2 {\r\n    font-weight: 700;\r\n    font-size: 1rem;\r\n    margin: 0 0 8px 0; }\r\n  .sidebar-category ul {\r\n    margin: 0 0 0 8px;\r\n    padding: 0;\r\n    list-style-type: none; }\r\n\r\n.sidebar-tasklist {\r\n  margin-bottom: 8px;\r\n  border-radius: 5px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis; }\r\n  .sidebar-tasklist:hover, .sidebar-tasklist:active {\r\n    background-color: #ccd2d479;\r\n    cursor: pointer; }\r\n\r\n.tasklist-subtasks {\r\n  color: #cccccc;\r\n  font-size: 0.9rem;\r\n  font-style: italic; }\r\n  .tasklist-subtasks li {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis; }\r\n\r\n.content__container {\r\n  background-color: #efefef;\r\n  color: #232323;\r\n  width: 100%;\r\n  padding: 20px;\r\n  overflow-y: scroll; }\r\n\r\n.content__tasklist-header {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px; }\r\n\r\n.content__tasklist-title {\r\n  font-size: 1.5rem;\r\n  margin: 10px 0;\r\n  margin-right: 8px; }\r\n\r\n.content__tasklist-description {\r\n  color: #aaaaaa;\r\n  border-left: 3px solid #aaaaaa;\r\n  padding-left: 8px;\r\n  margin-bottom: 24px; }\r\n\r\n.edit-tasklist__button,\r\n.edit-single-task__button {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  height: 20px;\r\n  width: 20px; }\r\n  .edit-tasklist__button:hover,\r\n  .edit-single-task__button:hover {\r\n    cursor: pointer; }\r\n\r\n.remove-tasklist__button,\r\n.remove-single-task__button {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  height: 20px;\r\n  width: 20px;\r\n  display: inline-block;\r\n  border-radius: 5px; }\r\n  .remove-tasklist__button:hover,\r\n  .remove-single-task__button:hover {\r\n    background-color: #ee6962;\r\n    cursor: pointer; }\r\n\r\n.data_legends {\r\n  color: #aaaaaa;\r\n  display: grid;\r\n  grid-template-columns: 28px 6fr 2fr 1fr 50px;\r\n  align-items: center;\r\n  font-size: 0.9rem; }\r\n  .data_legends :not(:nth-child(2)) {\r\n    justify-self: center; }\r\n\r\n.single-task__container {\r\n  margin: 16px 0;\r\n  border-bottom: 1px solid #aaaaaa; }\r\n  .single-task__container:hover, .single-task__container:active {\r\n    background-color: #eeecdf; }\r\n\r\n.single-task__datas {\r\n  display: grid;\r\n  grid-template-columns: 20px 6fr 2fr 1fr 50px;\r\n  align-items: center; }\r\n  .single-task__datas h3 {\r\n    margin: 0;\r\n    margin-left: 8px; }\r\n  .single-task__datas input[type=\"checkbox\"] {\r\n    margin: 0;\r\n    height: 15px;\r\n    justify-self: start; }\r\n  .single-task__datas :not(:nth-child(2)) {\r\n    justify-self: center; }\r\n\r\n.single-task__description {\r\n  color: #aaaaaa;\r\n  width: 60%;\r\n  font-size: 0.8rem;\r\n  font-style: italic;\r\n  border-left: 3px solid #aaaaaa;\r\n  padding-left: 8px;\r\n  margin: 8px 0; }\r\n\r\n.single-task__deadline {\r\n  color: #aaaaaa; }\r\n\r\n/* width */\r\n::-webkit-scrollbar {\r\n  width: 10px; }\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  background: #f1f1f1; }\r\n\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: #888; }\r\n\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #555; }\r\n\r\n/*# sourceMappingURL=style.css.map */\r\n", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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

// Create sidebar content
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

// Populate main content div
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
  /*const edit_tasklist_button = document.createElement('div');
  edit_tasklist_button.classList.add('edit-tasklist__button');
  content_tasklist_header.appendChild(edit_tasklist_button);*/
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
  label_actions.textContent = 'Delete';
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
    single_task_deadline.classList.add('single-task__deadline');
    if (task.deadline === '') {
      single_task_deadline.textContent = '-';
    } else {
      single_task_deadline.textContent = task.deadline;
    }
    single_task_datas.appendChild(single_task_deadline);
    const single_task_priority = document.createElement('div');
    single_task_priority.classList.add('single-task__priority');
    single_task_priority.textContent = '★'.repeat(task.priority);
    if (task.priority === '') {
      single_task_priority.textContent = '-';
      single_task_priority.style.color = '#aaaaaa';
    }
    if (task.priority === '1') {
      single_task_priority.style.color = '#A7C7E7';
    } else if (task.priority === '2') {
      single_task_priority.style.color = '#77DD77';
    } else if (task.priority === '3') {
      single_task_priority.style.color = '#ff6961';
    }
    single_task_datas.appendChild(single_task_priority);
    /*const edit_single_task_button = document.createElement('div');
    edit_single_task_button.classList.add('edit-single-task__button');
    single_task_datas.appendChild(edit_single_task_button);*/
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
const TEST_BUTTON = document.getElementById('superbutton'); // test purpose
const NEW_TASK_FORM = document.getElementById('add-task_form');
const EDIT_TASK_FORM = document.getElementById('editTaskForm'); // Unused

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

// TASKS AND TASKLISTS ACTIONS: Create, Delete, Edit
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
  /*if (taskData.taskDeadline === '') {
    taskData.taskDeadline = '-';
  }*/
  const deadline = taskData.taskDeadline;
  /*if (taskData.taskPriority === '') {
    taskData.taskPriority = '-';
  }*/
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

// Delete a tasklist
const deleteTasklist = () => {
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

// Delete a single task from the tasklist display
const deleteTask = () => {
  const REMOVE_TASK_BTN = document.querySelectorAll('.remove-single-task__button');
  const targetTaskListName = document.querySelector('.content__tasklist-title').textContent; // Find the current tasklist name
  const targetTaskList = taskListsContainer.find(({ title }) => title === targetTaskListName);
  for (let i = 0; i < REMOVE_TASK_BTN.length; i ++) {
    REMOVE_TASK_BTN[i].addEventListener('click', () => {
      targetTaskList.content.splice(i, 1);
      (0,_dom_create_js__WEBPACK_IMPORTED_MODULE_1__.loadTasklistDetails)(targetTaskList);
      (0,_dom_create_js__WEBPACK_IMPORTED_MODULE_1__.createTasklistContainer)(taskListsContainer); // Update the sidebar tasklists
      deleteTask(); // Reload delete function for remaining tasks
      deleteTasklist(); // Reload delete tasklist function
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

// Edit a single task, Modal version
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
    deleteTasklist();
    deleteTask();
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

const editTask = () => { // Live edit
  // Find the current tasklist name, then search for it in the taskslists array and return it
  const targetTaskListName = document.querySelector('.content__tasklist-title').textContent; 
  const targetTaskList = taskListsContainer.find(({ title }) => title === targetTaskListName);
  // Single tasks are stored as objects in the tasklist.content property. Create a shortcut to access the wanted task.
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

  // Edit task deadline
  const single_task_deadline = document.querySelectorAll('.single-task__deadline');
  for (let i = 0; i < single_task_deadline.length; i++) { 
    const editableDeadline = document.createElement('input');
    editableDeadline.type = 'date';
    single_task_deadline[i].addEventListener('click', () => {
      editableDeadline.value = single_task_deadline[i].textContent;
      single_task_deadline[i].replaceWith(editableDeadline);
    });
    editableDeadline.addEventListener('blur', () => {
      editableDeadline.replaceWith(single_task_deadline[i]);
      targetTask[i].deadline = editableDeadline.value;
      // Reload DOM elements to reflect changes and reload user actions functions
      (0,_dom_create_js__WEBPACK_IMPORTED_MODULE_1__.loadTasklistDetails)(targetTaskList);
      deleteTasklist();
      deleteTask();
      editTasklist();
      editTask();
    });
  }

  // Edit task priority
  const single_task_priority = document.querySelectorAll('.single-task__priority');
  single_task_priority.forEach((el, i) => {
    const editablePriority = document.createElement('input');
    editablePriority.type = 'number';
    editablePriority.min = '1';
    editablePriority.max = '3';
    el.addEventListener('click', () => {
      editablePriority.value = targetTask[i].priority;
      single_task_priority[i].replaceWith(editablePriority);
    });
    editablePriority.addEventListener('blur', () => {
      targetTask[i].priority = editablePriority.value;
      editablePriority.replaceWith(single_task_priority[i]);
      // Reload DOM elements to reflect changes and reload user actions functions
      (0,_dom_create_js__WEBPACK_IMPORTED_MODULE_1__.loadTasklistDetails)(targetTaskList);
      deleteTasklist();
      deleteTask();
      editTasklist();
      editTask();
    });
  });

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
      deleteTasklist();
      deleteTask();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsTUFBTSxtRUFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtRUFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELE9BQU87QUFDaEUsTUFBTSxtRUFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9kb20tY3JlYXRlLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2VkaXQtaWNvbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9yZW1vdmUtaWNvbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdhbWphK0Zsb3dlciZmYW1pbHk9VWJ1bnR1Oml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjsgfVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1hcmdpbjogMDsgfVxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87IH1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDkwdmg7IH1cXHJcXG5cXHJcXG4ubm90ZSB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXHJcXG5cXHJcXG4uYmFja2Ryb3Age1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE4MTg2OWQ7XFxyXFxuICB6LWluZGV4OiAyOyB9XFxyXFxuXFxyXFxuLmFkZC10YXNrX19tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjZDJkNDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBwYWRkaW5nOiAzMnB4O1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgIzM0NEI1MjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHotaW5kZXg6IDM7IH1cXHJcXG4gIC5hZGQtdGFza19fbW9kYWwgaDIge1xcclxcbiAgICBjb2xvcjogIzIzMjMyMztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAgMCAxNnB4IDA7IH1cXHJcXG5cXHJcXG4ucmVtb3ZlLXRhc2tsaXN0X19tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWNkZjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBwYWRkaW5nOiAzMnB4O1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgI2VlNjk2MjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHotaW5kZXg6IDM7IH1cXHJcXG4gIC5yZW1vdmUtdGFza2xpc3RfX21vZGFsIGgyIHtcXHJcXG4gICAgY29sb3I6ICNlZTY5NjI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMTZweCAwOyB9XFxyXFxuICAucmVtb3ZlLXRhc2tsaXN0X19tb2RhbCBkaXYge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTsgfVxcclxcbiAgLnJlbW92ZS10YXNrbGlzdF9fbW9kYWwgYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgbWFyZ2luOiAxNnB4IDE2cHggMCAxNnB4OyB9XFxyXFxuICAucmVtb3ZlLXRhc2tsaXN0X19tb2RhbCAucmVtb3ZlLWNvbmZpcm1fX2J1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZTY5NjI7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZTY5NjI7XFxyXFxuICAgIGNvbG9yOiAjZWZlZmVmOyB9XFxyXFxuICAgIC5yZW1vdmUtdGFza2xpc3RfX21vZGFsIC5yZW1vdmUtY29uZmlybV9fYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcclxcbiAgICAgIGNvbG9yOiAjZWU2OTYyO1xcclxcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZTY5NjI7IH1cXHJcXG4gIC5yZW1vdmUtdGFza2xpc3RfX21vZGFsIC5yZW1vdmUtY2FuY2VsX19idXR0b24ge1xcclxcbiAgICBjb2xvcjogIzcxODE4NjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzcxODE4NjsgfVxcclxcblxcclxcbi5lZGl0LXRhc2tfX21vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXHJcXG5cXHJcXG4jYWRkLXRhc2tfZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXHJcXG4gICNhZGQtdGFza19mb3JtIC5pbnB1dC1ncm91cCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbjogOHB4IDA7IH1cXHJcXG4gICNhZGQtdGFza19mb3JtIHRleHRhcmVhIHtcXHJcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG4gICAgbWF4LWhlaWdodDogMzN2aDsgfVxcclxcbiAgI2FkZC10YXNrX2Zvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDBhZjtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMzNDRCNTI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiAjMjMyMzIzOyB9XFxyXFxuICAgICNhZGQtdGFza19mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0QjUyO1xcclxcbiAgICAgIGNvbG9yOiAjZWZlZmVmO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcclxcbiAgICAjYWRkLXRhc2tfZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTphY3RpdmUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpOyB9XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0QjUyOyB9XFxyXFxuXFxyXFxuLmxvZ29fX2NvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTUlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7IH1cXHJcXG4gIC5sb2dvX19jb250YWluZXIgaDEge1xcclxcbiAgICBmb250LWZhbWlseTogJ0dhbWphIEZsb3dlcic7XFxyXFxuICAgIG1hcmdpbjogMCAwIDAgMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxuICAgIGNvbG9yOiAjZWZlZmVmOyB9XFxyXFxuXFxyXFxuLmhlYWRlcl9fY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMjBweDsgfVxcclxcbiAgLmhlYWRlcl9fY29udGFpbmVyIGEge1xcclxcbiAgICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxyXFxuXFxyXFxuLnNpZGViYXJfX2NvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxODE4NjtcXHJcXG4gIGNvbG9yOiAjZWZlZmVmO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyB9XFxyXFxuXFxyXFxuLm5ldy10YXNrX19idXR0b24ge1xcclxcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMGFmO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMzNDRCNTI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggIzIzMjMyMzc3OyB9XFxyXFxuICAubmV3LXRhc2tfX2J1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDRCNTI7XFxyXFxuICAgIGNvbG9yOiAjZWZlZmVmO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNlZWVjZGY7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcclxcbiAgLm5ldy10YXNrX19idXR0b246YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7IH1cXHJcXG5cXHJcXG4uc2lkZWJhci1jYXRlZ29yeSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMnB4OyB9XFxyXFxuICAuc2lkZWJhci1jYXRlZ29yeSBoMiB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgOHB4IDA7IH1cXHJcXG4gIC5zaWRlYmFyLWNhdGVnb3J5IHVsIHtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMCA4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcclxcblxcclxcbi5zaWRlYmFyLXRhc2tsaXN0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cXHJcXG4gIC5zaWRlYmFyLXRhc2tsaXN0OmhvdmVyLCAuc2lkZWJhci10YXNrbGlzdDphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NkMmQ0Nzk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcclxcblxcclxcbi50YXNrbGlzdC1zdWJ0YXNrcyB7XFxyXFxuICBjb2xvcjogI2NjY2NjYztcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxyXFxuICAudGFza2xpc3Qtc3VidGFza3MgbGkge1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxcclxcblxcclxcbi5jb250ZW50X19jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXHJcXG4gIGNvbG9yOiAjMjMyMzIzO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyB9XFxyXFxuXFxyXFxuLmNvbnRlbnRfX3Rhc2tsaXN0LWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTZweDsgfVxcclxcblxcclxcbi5jb250ZW50X190YXNrbGlzdC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cXHJcXG5cXHJcXG4uY29udGVudF9fdGFza2xpc3QtZGVzY3JpcHRpb24ge1xcclxcbiAgY29sb3I6ICNhYWFhYWE7XFxyXFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNhYWFhYWE7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7IH1cXHJcXG5cXHJcXG4uZWRpdC10YXNrbGlzdF9fYnV0dG9uLFxcclxcbi5lZGl0LXNpbmdsZS10YXNrX19idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiAyMHB4OyB9XFxyXFxuICAuZWRpdC10YXNrbGlzdF9fYnV0dG9uOmhvdmVyLFxcclxcbiAgLmVkaXQtc2luZ2xlLXRhc2tfX2J1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcclxcblxcclxcbi5yZW1vdmUtdGFza2xpc3RfX2J1dHRvbixcXHJcXG4ucmVtb3ZlLXNpbmdsZS10YXNrX19idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxyXFxuICAucmVtb3ZlLXRhc2tsaXN0X19idXR0b246aG92ZXIsXFxyXFxuICAucmVtb3ZlLXNpbmdsZS10YXNrX19idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU2OTYyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXHJcXG5cXHJcXG4uZGF0YV9sZWdlbmRzIHtcXHJcXG4gIGNvbG9yOiAjYWFhYWFhO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjhweCA2ZnIgMmZyIDFmciA1MHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtOyB9XFxyXFxuICAuZGF0YV9sZWdlbmRzIDpub3QoOm50aC1jaGlsZCgyKSkge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgfVxcclxcblxcclxcbi5zaW5nbGUtdGFza19fY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogMTZweCAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWFhYWE7IH1cXHJcXG4gIC5zaW5nbGUtdGFza19fY29udGFpbmVyOmhvdmVyLCAuc2luZ2xlLXRhc2tfX2NvbnRhaW5lcjphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlY2RmOyB9XFxyXFxuXFxyXFxuLnNpbmdsZS10YXNrX19kYXRhcyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDZmciAyZnIgMWZyIDUwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxyXFxuICAuc2luZ2xlLXRhc2tfX2RhdGFzIGgzIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogOHB4OyB9XFxyXFxuICAuc2luZ2xlLXRhc2tfX2RhdGFzIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDsgfVxcclxcbiAgLnNpbmdsZS10YXNrX19kYXRhcyA6bm90KDpudGgtY2hpbGQoMikpIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7IH1cXHJcXG5cXHJcXG4uc2luZ2xlLXRhc2tfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gIGNvbG9yOiAjYWFhYWFhO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjYWFhYWFhO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxyXFxuICBtYXJnaW46IDhweCAwOyB9XFxyXFxuXFxyXFxuLnNpbmdsZS10YXNrX19kZWFkbGluZSB7XFxyXFxuICBjb2xvcjogI2FhYWFhYTsgfVxcclxcblxcclxcbi8qIHdpZHRoICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDsgfVxcclxcblxcclxcbi8qIFRyYWNrICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyB9XFxyXFxuXFxyXFxuLyogSGFuZGxlICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjODg4OyB9XFxyXFxuXFxyXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNTU1OyB9XFxyXFxuXFxyXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1xcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU1BO0VBQ0Usc0JBQXNCO0VBQ3RCLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLGFBQWE7RUFDYixTQUFRLEVBQUE7O0FBR1Y7RUFDRSxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQixFQUFBOztBQUlwQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsVUFBVSxFQUFBOztBQUdaO0VBQ0UsYUFBYTtFQUNiLHlCQXZDZ0U7RUF3Q2hFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IseUJBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7RUFFVjtJQUNFLGNBbER3RztJQW1EeEcsa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFBOztBQUl0QjtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBM0RrSjtFQTREbEosZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYix5QkFBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTtFQUVWO0lBQ0UsY0F0RWtLO0lBdUVsSyxrQkFBa0I7SUFDbEIsa0JBQWtCLEVBQUE7RUFHcEI7SUFDRSxpQkFBaUIsRUFBQTtFQUduQjtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix3QkFBd0IsRUFBQTtFQUcxQjtJQUNFLHlCQXhGa0s7SUF5RmxLLHlCQUEyQztJ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LG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTtFQUVqQjtJQUNFLG9CQUFvQixFQUFBOztBQUl4QjtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0MsRUFBQTtFQUVoQztJQUVFLHlCQTdVZ0osRUFBQTs7QUFpVnBKO0VBQ0UsYUFBYTtFQUNiLDRDQUE0QztFQUM1QyxtQkFBbUIsRUFBQTtFQUVuQjtJQUNFLFNBQVM7SUFDVCxnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLFNBQVM7SUFDVCxZQUFZO0lBQ1osbUJBQW1CLEVBQUE7RUFHckI7SUFDRSxvQkFBb0IsRUFBQTs7QUFJeEI7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxjQUFjLEVBQUE7O0FBSWhCLFVBQUE7QUFDQTtFQUNFLFdBQVcsRUFBQTs7QUFHYixVQUFBO0FBQ0E7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckIsV0FBQTtBQUNBO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCLG9CQUFBO0FBQ0E7RUFDRSxnQkFBZ0IsRUFBQTs7QUNqR2xCLG9DQUFvQ1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHNpZGViYXJfdGFza2xpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItdGFza2xpc3RzJyk7XHJcbmNvbnN0IGNvbnRlbnRfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtb3V0cHV0Jyk7XHJcblxyXG4vLyBDcmVhdGUgc2lkZWJhciBjb250ZW50XHJcbmNvbnN0IGNyZWF0ZVRhc2tsaXN0Q29udGFpbmVyID0gKHRhc2tMaXN0c0FycmF5KSA9PiB7XHJcbiAgc2lkZWJhcl90YXNrbGlzdHMudGV4dENvbnRlbnQgPSAnJztcclxuICB0YXNrTGlzdHNBcnJheS5mb3JFYWNoKGVsID0+IHtcclxuICAgIGNvbnN0IHRhc2tsaXN0X2Jsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIHRhc2tsaXN0X2Jsb2NrLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItdGFza2xpc3QnKTtcclxuICAgIHNpZGViYXJfdGFza2xpc3RzLmFwcGVuZENoaWxkKHRhc2tsaXN0X2Jsb2NrKTtcclxuICAgIGNvbnN0IHRhc2tsaXN0X3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrbGlzdF90aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrbGlzdC10aXRsZScpO1xyXG4gICAgdGFza2xpc3RfdGl0bGUudGV4dENvbnRlbnQgPSBlbC50aXRsZTtcclxuICAgIHRhc2tsaXN0X2Jsb2NrLmFwcGVuZENoaWxkKHRhc2tsaXN0X3RpdGxlKTtcclxuICAgIChlbC5jb250ZW50KS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgY29uc3QgdGFza2xpc3RfY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgIHRhc2tsaXN0X2NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFza2xpc3Qtc3VidGFza3MnKTtcclxuICAgICAgdGFza2xpc3RfY29udGVudC50ZXh0Q29udGVudCA9IGVsLnRpdGxlO1xyXG4gICAgICB0YXNrbGlzdF9ibG9jay5hcHBlbmRDaGlsZCh0YXNrbGlzdF9jb250ZW50KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gUG9wdWxhdGUgbWFpbiBjb250ZW50IGRpdlxyXG5jb25zdCBsb2FkVGFza2xpc3REZXRhaWxzID0gKHRhc2tsaXN0KSA9PiB7XHJcbiAgY29udGVudF9jb250YWluZXIudGV4dENvbnRlbnQgPSAnJzsgLy8gZW1wdHkgdGhlIGRpdiBiZWZvcmUgdXBkYXRpbmdcclxuLy8gR2VuZXJhdGUgdGFza2xpc3QgaGVhZGVyXHJcbiAgY29uc3QgY29udGVudF90YXNrbGlzdF9oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250ZW50X3Rhc2tsaXN0X2hlYWRlci5jbGFzc0xpc3QuYWRkKCdjb250ZW50X190YXNrbGlzdC1oZWFkZXInKTtcclxuICBjb250ZW50X2NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50X3Rhc2tsaXN0X2hlYWRlcik7XHJcbiAgY29uc3QgdGFza2xpc3RfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHRhc2tsaXN0X3RpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfX3Rhc2tsaXN0LXRpdGxlJyk7XHJcbiAgdGFza2xpc3RfdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrbGlzdC50aXRsZTtcclxuICBjb250ZW50X3Rhc2tsaXN0X2hlYWRlci5hcHBlbmRDaGlsZCh0YXNrbGlzdF90aXRsZSk7XHJcbiAgLypjb25zdCBlZGl0X3Rhc2tsaXN0X2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVkaXRfdGFza2xpc3RfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtdGFza2xpc3RfX2J1dHRvbicpO1xyXG4gIGNvbnRlbnRfdGFza2xpc3RfaGVhZGVyLmFwcGVuZENoaWxkKGVkaXRfdGFza2xpc3RfYnV0dG9uKTsqL1xyXG4gIGNvbnN0IHJlbW92ZV90YXNrbGlzdF9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByZW1vdmVfdGFza2xpc3RfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS10YXNrbGlzdF9fYnV0dG9uJyk7XHJcbiAgY29udGVudF90YXNrbGlzdF9oZWFkZXIuYXBwZW5kQ2hpbGQocmVtb3ZlX3Rhc2tsaXN0X2J1dHRvbik7XHJcbi8vIEdlbmVyYXRlIHRhc2tsaXN0IGRlc2NyaXB0aW9uXHJcbiAgY29uc3QgdGFza2xpc3RfZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0YXNrbGlzdF9kZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdjb250ZW50X190YXNrbGlzdC1kZXNjcmlwdGlvbicpO1xyXG4gIHRhc2tsaXN0X2Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFza2xpc3QuZGVzY3JpcHRpb247XHJcbiAgY29udGVudF9jb250YWluZXIuYXBwZW5kQ2hpbGQodGFza2xpc3RfZGVzY3JpcHRpb24pO1xyXG4vLyBHZW5lcmF0ZSB0YXNrcyBjb250YWluZXJcclxuICBjb25zdCB0YXNrc19kaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGFza3NfZGlzcGxheS5jbGFzc0xpc3QuYWRkKCdjb250ZW50X19zaW5nbGUtdGFza3MtZGlzcGxheScpO1xyXG4gIGNvbnRlbnRfY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tzX2Rpc3BsYXkpO1xyXG4vLyBHZW5lcmF0ZSBjb2x1bW5zIGxhYmVsc1xyXG4gIGNvbnN0IGRhdGFfbGVnZW5kcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRhdGFfbGVnZW5kcy5jbGFzc0xpc3QuYWRkKCdkYXRhX2xlZ2VuZHMnKTtcclxuICB0YXNrc19kaXNwbGF5LmFwcGVuZENoaWxkKGRhdGFfbGVnZW5kcyk7XHJcbiAgY29uc3QgZW1wdHlfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGF0YV9sZWdlbmRzLmFwcGVuZENoaWxkKGVtcHR5X2Rpdik7XHJcbiAgY29uc3QgbGFiZWxfdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxhYmVsX3Rhc2sudGV4dENvbnRlbnQgPSAnVGFzayc7XHJcbiAgZGF0YV9sZWdlbmRzLmFwcGVuZENoaWxkKGxhYmVsX3Rhc2spO1xyXG4gIGNvbnN0IGxhYmVsX2RlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGFiZWxfZGVhZGxpbmUudGV4dENvbnRlbnQgPSAnRGVhZGxpbmUnO1xyXG4gIGRhdGFfbGVnZW5kcy5hcHBlbmRDaGlsZChsYWJlbF9kZWFkbGluZSk7XHJcbiAgY29uc3QgbGFiZWxfcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsYWJlbF9wcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XHJcbiAgZGF0YV9sZWdlbmRzLmFwcGVuZENoaWxkKGxhYmVsX3ByaW9yaXR5KTtcclxuICBjb25zdCBsYWJlbF9hY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGFiZWxfYWN0aW9ucy50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xyXG4gIGRhdGFfbGVnZW5kcy5hcHBlbmRDaGlsZChsYWJlbF9hY3Rpb25zKTtcclxuLy8gR2VuZXJhdGUgZGlzcGxheSBvZiBlYWNoIHRhc2tcclxuICAodGFza2xpc3QuY29udGVudCkuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgIGNvbnN0IHNpbmdsZV90YXNrX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2luZ2xlX3Rhc2tfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS10YXNrX19jb250YWluZXInKTtcclxuICAgIHRhc2tzX2Rpc3BsYXkuYXBwZW5kQ2hpbGQoc2luZ2xlX3Rhc2tfY29udGFpbmVyKTtcclxuICAgIGNvbnN0IHNpbmdsZV90YXNrX2RhdGFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzaW5nbGVfdGFza19kYXRhcy5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtdGFza19fZGF0YXMnKTtcclxuICAgIHNpbmdsZV90YXNrX2NvbnRhaW5lci5hcHBlbmRDaGlsZChzaW5nbGVfdGFza19kYXRhcyk7XHJcbiAgICBjb25zdCB0YXNrX2NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRhc2tfY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIHNpbmdsZV90YXNrX2RhdGFzLmFwcGVuZENoaWxkKHRhc2tfY2hlY2tib3gpO1xyXG4gICAgY29uc3Qgc2luZ2xlX3Rhc2tfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgc2luZ2xlX3Rhc2tfdGl0bGUuY2xhc3NMaXN0LmFkZCgnc2luZ2xlLXRhc2tfX3RpdGxlJyk7XHJcbiAgICBzaW5nbGVfdGFza190aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICBzaW5nbGVfdGFza19kYXRhcy5hcHBlbmRDaGlsZChzaW5nbGVfdGFza190aXRsZSk7XHJcbiAgICBjb25zdCBzaW5nbGVfdGFza19kZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2luZ2xlX3Rhc2tfZGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgnc2luZ2xlLXRhc2tfX2RlYWRsaW5lJyk7XHJcbiAgICBpZiAodGFzay5kZWFkbGluZSA9PT0gJycpIHtcclxuICAgICAgc2luZ2xlX3Rhc2tfZGVhZGxpbmUudGV4dENvbnRlbnQgPSAnLSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaW5nbGVfdGFza19kZWFkbGluZS50ZXh0Q29udGVudCA9IHRhc2suZGVhZGxpbmU7XHJcbiAgICB9XHJcbiAgICBzaW5nbGVfdGFza19kYXRhcy5hcHBlbmRDaGlsZChzaW5nbGVfdGFza19kZWFkbGluZSk7XHJcbiAgICBjb25zdCBzaW5nbGVfdGFza19wcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2luZ2xlX3Rhc2tfcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnc2luZ2xlLXRhc2tfX3ByaW9yaXR5Jyk7XHJcbiAgICBzaW5nbGVfdGFza19wcmlvcml0eS50ZXh0Q29udGVudCA9ICfimIUnLnJlcGVhdCh0YXNrLnByaW9yaXR5KTtcclxuICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnJykge1xyXG4gICAgICBzaW5nbGVfdGFza19wcmlvcml0eS50ZXh0Q29udGVudCA9ICctJztcclxuICAgICAgc2luZ2xlX3Rhc2tfcHJpb3JpdHkuc3R5bGUuY29sb3IgPSAnI2FhYWFhYSc7XHJcbiAgICB9XHJcbiAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJzEnKSB7XHJcbiAgICAgIHNpbmdsZV90YXNrX3ByaW9yaXR5LnN0eWxlLmNvbG9yID0gJyNBN0M3RTcnO1xyXG4gICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnMicpIHtcclxuICAgICAgc2luZ2xlX3Rhc2tfcHJpb3JpdHkuc3R5bGUuY29sb3IgPSAnIzc3REQ3Nyc7XHJcbiAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICczJykge1xyXG4gICAgICBzaW5nbGVfdGFza19wcmlvcml0eS5zdHlsZS5jb2xvciA9ICcjZmY2OTYxJztcclxuICAgIH1cclxuICAgIHNpbmdsZV90YXNrX2RhdGFzLmFwcGVuZENoaWxkKHNpbmdsZV90YXNrX3ByaW9yaXR5KTtcclxuICAgIC8qY29uc3QgZWRpdF9zaW5nbGVfdGFza19idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVkaXRfc2luZ2xlX3Rhc2tfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtc2luZ2xlLXRhc2tfX2J1dHRvbicpO1xyXG4gICAgc2luZ2xlX3Rhc2tfZGF0YXMuYXBwZW5kQ2hpbGQoZWRpdF9zaW5nbGVfdGFza19idXR0b24pOyovXHJcbiAgICBjb25zdCByZW1vdmVfc2luZ2xlX3Rhc2tfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByZW1vdmVfc2luZ2xlX3Rhc2tfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1zaW5nbGUtdGFza19fYnV0dG9uJyk7XHJcbiAgICBzaW5nbGVfdGFza19kYXRhcy5hcHBlbmRDaGlsZChyZW1vdmVfc2luZ2xlX3Rhc2tfYnV0dG9uKTtcclxuICAgIGNvbnN0IHNpbmdsZV90YXNrX2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzaW5nbGVfdGFza19kZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtdGFza19fZGVzY3JpcHRpb24nKTtcclxuICAgIHNpbmdsZV90YXNrX2Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcclxuICAgIHNpbmdsZV90YXNrX2NvbnRhaW5lci5hcHBlbmRDaGlsZChzaW5nbGVfdGFza19kZXNjcmlwdGlvbik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCByZXNldENvbnRlbnRDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29udGVudF9jb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVRhc2tsaXN0Q29udGFpbmVyLCBsb2FkVGFza2xpc3REZXRhaWxzLCByZXNldENvbnRlbnRDb250YWluZXIgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2tsaXN0Q29udGFpbmVyLCBsb2FkVGFza2xpc3REZXRhaWxzLCByZXNldENvbnRlbnRDb250YWluZXIgfSBmcm9tICcuL2RvbS1jcmVhdGUuanMnO1xyXG5pbXBvcnQgeyBmb3JtYXQsIGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tICdkYXRlLWZucyc7XHJcblxyXG4vLyBHbG9iYWwgdmFyaWFibGVzXHJcbmNvbnN0IHRhc2tMaXN0c0NvbnRhaW5lciA9IFtdO1xyXG5sZXQgbmV3VGFzaztcclxuXHJcblxyXG4vLyBET00gRWxlbWVudHNcclxuY29uc3QgVEVTVF9CVVRUT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VwZXJidXR0b24nKTsgLy8gdGVzdCBwdXJwb3NlXHJcbmNvbnN0IE5FV19UQVNLX0ZPUk0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2tfZm9ybScpO1xyXG5jb25zdCBFRElUX1RBU0tfRk9STSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VGFza0Zvcm0nKTsgLy8gVW51c2VkXHJcblxyXG5jb25zdCBORVdfVEFTS19CVVRUT04gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2tfX2J1dHRvbicpO1xyXG5jb25zdCBCQUNLRFJPUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcCcpO1xyXG5jb25zdCBORVdfVEFTS19NT0RBTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFza19fbW9kYWwnKTtcclxuY29uc3QgUkVNT1ZFX1RBU0tMSVNUX01PREFMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZS10YXNrbGlzdF9fbW9kYWwnKTtcclxuXHJcblxyXG4vLyBHZW5lcmFsIGZ1bmN0aW9uc1xyXG5jb25zdCBjYXBpdGFsaXplU3RyaW5nID0gKHN0cmluZykgPT4ge1xyXG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XHJcbn07XHJcblxyXG4vLyBGYWN0b3J5IGZ1bmN0aW9uIGZvciBjcmVhdGluZyBuZXcgc2luZ2xlIHRhc2tzXHJcbmNvbnN0IFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkZWFkbGluZSwgcHJpb3JpdHksIHRhc2tsaXN0KSA9PiB7XHJcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkZWFkbGluZSwgcHJpb3JpdHksIHRhc2tsaXN0IH07XHJcbn07XHJcblxyXG4vLyBGYWN0b3J5IGZ1bmN0aW9uIGZvciBjcmVhdGluZyB0YXNrbGlzdHMsIHVudG8gd2hpY2ggd2UgY2FuIHB1c2ggc2luZ2xlIHRhc2tzXHJcbmNvbnN0IFRhc2tsaXN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbikgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBbXTtcclxuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGNvbnRlbnQgfTtcclxufTtcclxuXHJcbi8vIE1vZGFsc1xyXG5jb25zdCBvcGVuTW9kYWwgPSAobW9kYWwpID0+IHtcclxuICBCQUNLRFJPUC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxufTtcclxuXHJcbmNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBCQUNLRFJPUC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgTkVXX1RBU0tfTU9EQUwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIFJFTU9WRV9UQVNLTElTVF9NT0RBTC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59O1xyXG5cclxuQkFDS0RST1AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKCkpO1xyXG5cclxuTkVXX1RBU0tfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG9wZW5Nb2RhbChORVdfVEFTS19NT0RBTCk7XHJcbn0pO1xyXG5cclxuLy8gVEFTS1MgQU5EIFRBU0tMSVNUUyBBQ1RJT05TOiBDcmVhdGUsIERlbGV0ZSwgRWRpdFxyXG4vL1xyXG4vLyBHZXQgdGFza3MgaW5mb3MgZnJvbSBmb3JtLCBwdXQgaXQgaW4gbmV3VGFzayB2YXJpYWJsZSBmb3IgdXNlIGluIG90aGVyIGZ1bmN0aW9uc1xyXG5jb25zdCBnZXRGb3JtRGF0YSA9ICgoKSA9PiB7TkVXX1RBU0tfRk9STS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShORVdfVEFTS19GT1JNKTtcclxuICBjb25zdCB0YXNrRGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSk7XHJcbiAgaWYgKHRhc2tEYXRhLnRhc2tMaXN0ID09PSAnJykge1xyXG4gICAgdGFza0RhdGEudGFza0xpc3QgPSAnR2VuZXJhbCB0YXNrcyc7IC8vIENyZWF0ZSBhIGdlbmVyYWwgdGFrc2xpc3QgdG8gcHV0IHNpbmdsZSB0YXNrcyBpbnRvXHJcbiAgfVxyXG4gIGNvbnN0IHRhc2tsaXN0ID0gY2FwaXRhbGl6ZVN0cmluZyh0YXNrRGF0YS50YXNrTGlzdCk7XHJcbiAgY29uc3QgdGl0bGUgPSBjYXBpdGFsaXplU3RyaW5nKHRhc2tEYXRhLnRhc2tUaXRsZSk7XHJcbiAgaWYgKHRhc2tEYXRhLnRhc2tEZXNjcmlwdGlvbiA9PT0gJycpIHtcclxuICAgIHRhc2tEYXRhLnRhc2tEZXNjcmlwdGlvbiA9ICdObyBkZXNjcmlwdGlvbi4nO1xyXG4gIH1cclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IHRhc2tEYXRhLnRhc2tEZXNjcmlwdGlvbjtcclxuICAvKmlmICh0YXNrRGF0YS50YXNrRGVhZGxpbmUgPT09ICcnKSB7XHJcbiAgICB0YXNrRGF0YS50YXNrRGVhZGxpbmUgPSAnLSc7XHJcbiAgfSovXHJcbiAgY29uc3QgZGVhZGxpbmUgPSB0YXNrRGF0YS50YXNrRGVhZGxpbmU7XHJcbiAgLyppZiAodGFza0RhdGEudGFza1ByaW9yaXR5ID09PSAnJykge1xyXG4gICAgdGFza0RhdGEudGFza1ByaW9yaXR5ID0gJy0nO1xyXG4gIH0qL1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gdGFza0RhdGEudGFza1ByaW9yaXR5O1xyXG4gIG5ld1Rhc2sgPSBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGVhZGxpbmUsIHByaW9yaXR5LCB0YXNrbGlzdCk7XHJcbiAgYWRkVGFza1RvVGFza0xpc3QobmV3VGFzayk7XHJcbiAgY2xvc2VNb2RhbCgpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG5cclxuLy8gQWRkIHRoZSBuZXdUYXNrIHRvIGl0cyB0YXNrIGxpc3QgaWYgaXQgZXhpc3QsIGNyZWF0ZSBvbmUgaWYgaXQgZG9lc250XHJcbmNvbnN0IGFkZFRhc2tUb1Rhc2tMaXN0ID0gKG5ld1Rhc2spID0+IHtcclxuICAvLyBJZiB0aGUgdGFza2xpc3QgdGl0bGUgaXMgYWxyZWFkeSBpbiB0aGUgZGF0YWJhc2UsIHRoaXMgd2lsbCByZXR1cm4gdGhlIHRhc2tsaXN0IG9iamVjdC4gT3RoZXJ3aXNlLCByZXR1cm5zIHVuZGVmaW5lZFxyXG4gIGNvbnN0IHRhcmdldFRhc2tMaXN0ID0gdGFza0xpc3RzQ29udGFpbmVyLmZpbmQoKHsgdGl0bGUgfSkgPT4gdGl0bGUgPT09IG5ld1Rhc2sudGFza2xpc3QpO1xyXG4gIGlmICh0YXJnZXRUYXNrTGlzdCA9PT0gdW5kZWZpbmVkKSB7IC8vIGkuZS4gbm8gdGFza2xpc3Qgd2l0aCB0aGlzIG5hbWUgZXhpc3RzIHlldFxyXG4gICAgY29uc29sZS5sb2coJ1RoaXMgaXMgYSBuZXcgdGFza2xpc3QnKTtcclxuICAgIGNvbnN0IG5ld1Rhc2tMaXN0ID0gVGFza2xpc3QobmV3VGFzay50YXNrbGlzdCwgJycpO1xyXG4gICAgdGFza0xpc3RzQ29udGFpbmVyLnB1c2gobmV3VGFza0xpc3QpO1xyXG4gICAgKG5ld1Rhc2tMaXN0LmNvbnRlbnQpLnB1c2gobmV3VGFzayk7XHJcbiAgICBuZXdUYXNrTGlzdC5kZXNjcmlwdGlvbiA9ICdUaGVyZSBpcyBubyBkZXNjcmlwdGlvbiB5ZXQuLi4nO1xyXG4gICAgY3JlYXRlVGFza2xpc3RDb250YWluZXIodGFza0xpc3RzQ29udGFpbmVyKTtcclxuICAgIGRpc3BsYXlDb250cm9sbGVyKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgdGFzayB0byB0aGUgZXhpc3RpbmcgdGFza2xpc3QuLi4nKTtcclxuICAgICh0YXJnZXRUYXNrTGlzdC5jb250ZW50KS5wdXNoKG5ld1Rhc2spO1xyXG4gICAgY3JlYXRlVGFza2xpc3RDb250YWluZXIodGFza0xpc3RzQ29udGFpbmVyKTtcclxuICAgIGRpc3BsYXlDb250cm9sbGVyKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gRGVsZXRlIGEgdGFza2xpc3RcclxuY29uc3QgZGVsZXRlVGFza2xpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgUkVNT1ZFX1RBU0tMSVNUX0JVVFRPTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtdGFza2xpc3RfX2J1dHRvbicpO1xyXG4gIGNvbnN0IFJFTU9WRV9UQVNLTElTVF9NT0RBTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtdGFza2xpc3RfX21vZGFsJyk7XHJcbiAgY29uc3QgUkVNT1ZFX0NBTkNFTF9CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlLWNhbmNlbF9fYnV0dG9uJyk7XHJcbiAgY29uc3QgUkVNT1ZFX0NPTkZJUk1fQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZS1jb25maXJtX19idXR0b24nKTtcclxuICBSRU1PVkVfVEFTS0xJU1RfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgb3Blbk1vZGFsKFJFTU9WRV9UQVNLTElTVF9NT0RBTCk7XHJcbiAgICBjb25zdCB0YXJnZXRUYXNrTGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fdGFza2xpc3QtdGl0bGUnKS50ZXh0Q29udGVudDsgLy8gRmluZCB0aGUgY3VycmVudCB0YXNrbGlzdCBuYW1lXHJcbiAgICBjb25zdCB0YXJnZXRUYXNrTGlzdCA9IHRhc2tMaXN0c0NvbnRhaW5lci5maW5kKCh7IHRpdGxlIH0pID0+IHRpdGxlID09PSB0YXJnZXRUYXNrTGlzdE5hbWUpO1xyXG4gICAgUkVNT1ZFX0NBTkNFTF9CVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKCkpO1xyXG4gICAgUkVNT1ZFX0NPTkZJUk1fQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0c0NvbnRhaW5lci5sZW5ndGg7IGkrKykgeyBcclxuICAgICAgICBpZiAodGFza0xpc3RzQ29udGFpbmVyW2ldID09PSB0YXJnZXRUYXNrTGlzdCkgeyBcclxuICAgICAgICAgIHRhc2tMaXN0c0NvbnRhaW5lci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNyZWF0ZVRhc2tsaXN0Q29udGFpbmVyKHRhc2tMaXN0c0NvbnRhaW5lcik7IC8vIFVwZGF0ZSB0aGUgc2lkZWJhciB0YXNrbGlzdHNcclxuICAgICAgZGlzcGxheUNvbnRyb2xsZXIoKTsgLy8gUmVsb2FkIHRoZSBjbGljayBhY3Rpb25zIG9uIHNpZGViYXIgdGFza2xpc3RzXHJcbiAgICAgIHJlc2V0Q29udGVudENvbnRhaW5lcigpOyAvLyBFbXB0eSB0aGUgY29udGVudCBjb250YWluZXJcclxuICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4pO1xyXG59O1xyXG5cclxuLy8gRGVsZXRlIGEgc2luZ2xlIHRhc2sgZnJvbSB0aGUgdGFza2xpc3QgZGlzcGxheVxyXG5jb25zdCBkZWxldGVUYXNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IFJFTU9WRV9UQVNLX0JUTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUtc2luZ2xlLXRhc2tfX2J1dHRvbicpO1xyXG4gIGNvbnN0IHRhcmdldFRhc2tMaXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X190YXNrbGlzdC10aXRsZScpLnRleHRDb250ZW50OyAvLyBGaW5kIHRoZSBjdXJyZW50IHRhc2tsaXN0IG5hbWVcclxuICBjb25zdCB0YXJnZXRUYXNrTGlzdCA9IHRhc2tMaXN0c0NvbnRhaW5lci5maW5kKCh7IHRpdGxlIH0pID0+IHRpdGxlID09PSB0YXJnZXRUYXNrTGlzdE5hbWUpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUkVNT1ZFX1RBU0tfQlROLmxlbmd0aDsgaSArKykge1xyXG4gICAgUkVNT1ZFX1RBU0tfQlROW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0YXJnZXRUYXNrTGlzdC5jb250ZW50LnNwbGljZShpLCAxKTtcclxuICAgICAgbG9hZFRhc2tsaXN0RGV0YWlscyh0YXJnZXRUYXNrTGlzdCk7XHJcbiAgICAgIGNyZWF0ZVRhc2tsaXN0Q29udGFpbmVyKHRhc2tMaXN0c0NvbnRhaW5lcik7IC8vIFVwZGF0ZSB0aGUgc2lkZWJhciB0YXNrbGlzdHNcclxuICAgICAgZGVsZXRlVGFzaygpOyAvLyBSZWxvYWQgZGVsZXRlIGZ1bmN0aW9uIGZvciByZW1haW5pbmcgdGFza3NcclxuICAgICAgZGVsZXRlVGFza2xpc3QoKTsgLy8gUmVsb2FkIGRlbGV0ZSB0YXNrbGlzdCBmdW5jdGlvblxyXG4gICAgICBlZGl0VGFza2xpc3QoKTsgLy8gUmVsb2FkIGVkaXQgZnVuY3Rpb25cclxuICAgICAgZGlzcGxheUNvbnRyb2xsZXIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIEVkaXQgYSB0YXNrbGlzdFxyXG5jb25zdCBlZGl0VGFza2xpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgVEFTS0xJU1RfTkFNRV9FTEVNRU5UID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX3Rhc2tsaXN0LXRpdGxlJyk7XHJcbiAgY29uc3QgVEFTS0xJU1RfREVTQ1JJUFRJT05fRUxFTUVOVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X190YXNrbGlzdC1kZXNjcmlwdGlvbicpO1xyXG4gIGNvbnN0IHRhcmdldFRhc2tMaXN0TmFtZSA9IFRBU0tMSVNUX05BTUVfRUxFTUVOVC50ZXh0Q29udGVudDtcclxuICBjb25zdCB0YXJnZXRUYXNrTGlzdCA9IHRhc2tMaXN0c0NvbnRhaW5lci5maW5kKCh7IHRpdGxlIH0pID0+IHRpdGxlID09PSB0YXJnZXRUYXNrTGlzdE5hbWUpO1xyXG4gIFRBU0tMSVNUX05BTUVfRUxFTUVOVC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgLy8gRWRpdCB0aGUgdGFza2xpc3QgdGl0bGVcclxuICAgIFRBU0tMSVNUX05BTUVfRUxFTUVOVC5jb250ZW50RWRpdGFibGUgPSBcInRydWVcIjtcclxuICB9KTtcclxuICBUQVNLTElTVF9OQU1FX0VMRU1FTlQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgIFRBU0tMSVNUX05BTUVfRUxFTUVOVC5jb250ZW50RWRpdGFibGUgPSAnZmFsc2UnO1xyXG4gICAgdGFyZ2V0VGFza0xpc3QudGl0bGUgPSBUQVNLTElTVF9OQU1FX0VMRU1FTlQudGV4dENvbnRlbnQ7IC8vIFVwZGF0ZSB0YXNrbGlzdCBpbiBhcnJheVxyXG4gICAgY3JlYXRlVGFza2xpc3RDb250YWluZXIodGFza0xpc3RzQ29udGFpbmVyKTsgLy8gVXBkYXRlIHRoZSBzaWRlYmFyIHRhc2tsaXN0c1xyXG4gICAgZWRpdFRhc2tsaXN0KCk7IC8vIFJlbG9hZCBlZGl0IGZ1bmN0aW9uXHJcbiAgfSk7XHJcbiAgVEFTS0xJU1RfREVTQ1JJUFRJT05fRUxFTUVOVC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIFRBU0tMSVNUX0RFU0NSSVBUSU9OX0VMRU1FTlQuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xyXG4gIH0pO1xyXG4gIFRBU0tMSVNUX0RFU0NSSVBUSU9OX0VMRU1FTlQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgIFRBU0tMSVNUX0RFU0NSSVBUSU9OX0VMRU1FTlQuY29udGVudEVkaXRhYmxlID0gJ2ZhbHNlJztcclxuICAgIHRhcmdldFRhc2tMaXN0LmRlc2NyaXB0aW9uID0gVEFTS0xJU1RfREVTQ1JJUFRJT05fRUxFTUVOVC50ZXh0Q29udGVudDtcclxuICAgIGNyZWF0ZVRhc2tsaXN0Q29udGFpbmVyKHRhc2tMaXN0c0NvbnRhaW5lcik7IC8vIFVwZGF0ZSB0aGUgc2lkZWJhciB0YXNrbGlzdHNcclxuICAgIGVkaXRUYXNrbGlzdCgpOyAvLyBSZWxvYWQgZWRpdCBmdW5jdGlvblxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gRWRpdCBhIHNpbmdsZSB0YXNrLCBNb2RhbCB2ZXJzaW9uXHJcbi8qY29uc3QgZ2V0Q3VycmVudFRhc2tEYXRhID0gKGZvcm0sIHRhcmdldCkgPT4geyAvLyBFZGl0IHRocm91Z2ggZm9ybVxyXG4gIGZvcm0udGFza1RpdGxlLnZhbHVlID0gdGFyZ2V0LnRpdGxlO1xyXG4gIGZvcm0udGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gdGFyZ2V0LmRlc2NyaXB0aW9uO1xyXG4gIGZvcm0udGFza0RlYWRsaW5lLnZhbHVlID0gdGFyZ2V0LmRlYWRsaW5lO1xyXG4gIGZvcm0udGFza1ByaW9yaXR5LnZhbHVlID0gdGFyZ2V0LnByaW9yaXR5O1xyXG4gIGZvcm0udGFza0xpc3QudmFsdWUgPSB0YXJnZXQudGFza2xpc3Q7XHJcbn07XHJcblxyXG5jb25zdCBlZGl0VGFza0Zvcm0gPSAodGFyZ2V0KSA9PiB7XHJcbiAgY29uc3QgdGFyZ2V0VGFza0xpc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX3Rhc2tsaXN0LXRpdGxlJykudGV4dENvbnRlbnQ7XHJcbiAgY29uc3QgdGFyZ2V0VGFza0xpc3QgPSB0YXNrTGlzdHNDb250YWluZXIuZmluZCgoeyB0aXRsZSB9KSA9PiB0aXRsZSA9PT0gdGFyZ2V0VGFza0xpc3ROYW1lKTtcclxuICBFRElUX1RBU0tfRk9STS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoRURJVF9UQVNLX0ZPUk0pO1xyXG4gICAgY29uc3QgdGFza0RhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xyXG4gICAgdGFyZ2V0LnRhc2tsaXN0ID0gY2FwaXRhbGl6ZVN0cmluZyh0YXNrRGF0YS50YXNrTGlzdCk7XHJcbiAgICB0YXJnZXQudGl0bGUgPSBjYXBpdGFsaXplU3RyaW5nKHRhc2tEYXRhLnRhc2tUaXRsZSk7XHJcbiAgICB0YXJnZXQuZGVzY3JpcHRpb24gPSB0YXNrRGF0YS50YXNrRGVzY3JpcHRpb247XHJcbiAgICB0YXJnZXQuZGVhZGxpbmUgPSB0YXNrRGF0YS50YXNrRGVhZGxpbmU7XHJcbiAgICB0YXJnZXQucHJpb3JpdHkgPSB0YXNrRGF0YS50YXNrUHJpb3JpdHk7XHJcbiAgICBsb2FkVGFza2xpc3REZXRhaWxzKHRhcmdldFRhc2tMaXN0KTtcclxuICAgIGRlbGV0ZVRhc2tsaXN0KCk7XHJcbiAgICBkZWxldGVUYXNrKCk7XHJcbiAgICBlZGl0VGFza2xpc3QoKTtcclxuICAgIGVkaXRUYXNrKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBlZGl0VGFzayA9ICgpID0+IHtcclxuICBjb25zdCB0YXJnZXRUYXNrTGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fdGFza2xpc3QtdGl0bGUnKS50ZXh0Q29udGVudDtcclxuICBjb25zdCB0YXJnZXRUYXNrTGlzdCA9IHRhc2tMaXN0c0NvbnRhaW5lci5maW5kKCh7IHRpdGxlIH0pID0+IHRpdGxlID09PSB0YXJnZXRUYXNrTGlzdE5hbWUpO1xyXG4gIGNvbnN0IGVkaXRfdGFza19idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1zaW5nbGUtdGFza19fYnV0dG9uJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlZGl0X3Rhc2tfYnV0dG9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBlZGl0X3Rhc2tfYnV0dG9uW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRUYXNrQ29udGVudCA9IHRhcmdldFRhc2tMaXN0LmNvbnRlbnRbaV07IC8vIEZpbmQgY2xpY2tlZCB0YXNrXHJcbiAgICAgIGdldEN1cnJlbnRUYXNrRGF0YShFRElUX1RBU0tfRk9STSwgdGFyZ2V0VGFza0NvbnRlbnQpOyAvLyBGaWxsIHRoZSBlZGl0IGZvcm0gd2l0aCBjdXJyZW50IGRhdGFzXHJcbiAgICAgIGVkaXRUYXNrRm9ybSh0YXJnZXRUYXNrQ29udGVudCk7XHJcbiAgICB9KTtcclxuICAgIH1cclxufTsqL1xyXG5cclxuY29uc3QgZWRpdFRhc2sgPSAoKSA9PiB7IC8vIExpdmUgZWRpdFxyXG4gIC8vIEZpbmQgdGhlIGN1cnJlbnQgdGFza2xpc3QgbmFtZSwgdGhlbiBzZWFyY2ggZm9yIGl0IGluIHRoZSB0YXNrc2xpc3RzIGFycmF5IGFuZCByZXR1cm4gaXRcclxuICBjb25zdCB0YXJnZXRUYXNrTGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fdGFza2xpc3QtdGl0bGUnKS50ZXh0Q29udGVudDsgXHJcbiAgY29uc3QgdGFyZ2V0VGFza0xpc3QgPSB0YXNrTGlzdHNDb250YWluZXIuZmluZCgoeyB0aXRsZSB9KSA9PiB0aXRsZSA9PT0gdGFyZ2V0VGFza0xpc3ROYW1lKTtcclxuICAvLyBTaW5nbGUgdGFza3MgYXJlIHN0b3JlZCBhcyBvYmplY3RzIGluIHRoZSB0YXNrbGlzdC5jb250ZW50IHByb3BlcnR5LiBDcmVhdGUgYSBzaG9ydGN1dCB0byBhY2Nlc3MgdGhlIHdhbnRlZCB0YXNrLlxyXG4gIGNvbnN0IHRhcmdldFRhc2sgPSB0YXJnZXRUYXNrTGlzdC5jb250ZW50O1xyXG5cclxuICAvLyBFZGl0IHRhc2sgdGl0bGVcclxuICBjb25zdCBzaW5nbGVfdGFza190aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaW5nbGUtdGFza19fdGl0bGUnKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpbmdsZV90YXNrX3RpdGxlLmxlbmd0aDsgaSArKykge1xyXG4gICAgc2luZ2xlX3Rhc2tfdGl0bGVbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHNpbmdsZV90YXNrX3RpdGxlW2ldLmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcclxuICAgIH0pO1xyXG4gICAgc2luZ2xlX3Rhc2tfdGl0bGVbaV0uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgICAgc2luZ2xlX3Rhc2tfdGl0bGVbaV0uY29udGVudEVkaXRhYmxlID0gJ2ZhbHNlJztcclxuICAgICAgdGFyZ2V0VGFza1tpXS50aXRsZSA9IHNpbmdsZV90YXNrX3RpdGxlW2ldLnRleHRDb250ZW50O1xyXG4gICAgICBjcmVhdGVUYXNrbGlzdENvbnRhaW5lcih0YXNrTGlzdHNDb250YWluZXIpOyAvLyBVcGRhdGUgdGhlIHNpZGViYXIgdGFza2xpc3RzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIEVkaXQgdGFzayBkZXNjcmlwdGlvblxyXG4gIGNvbnN0IHNpbmdsZV90YXNrX2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpbmdsZS10YXNrX19kZXNjcmlwdGlvbicpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2luZ2xlX3Rhc2tfZGVzY3JpcHRpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgIHNpbmdsZV90YXNrX2Rlc2NyaXB0aW9uW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBzaW5nbGVfdGFza19kZXNjcmlwdGlvbltpXS5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XHJcbiAgICB9KTtcclxuICAgIHNpbmdsZV90YXNrX2Rlc2NyaXB0aW9uW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgIHNpbmdsZV90YXNrX2Rlc2NyaXB0aW9uLmNvbnRlbnRFZGl0YWJsZSA9ICdmYWxzZSc7XHJcbiAgICAgIHRhcmdldFRhc2tbaV0uZGVzY3JpcHRpb24gPSBzaW5nbGVfdGFza19kZXNjcmlwdGlvbltpXS50ZXh0Q29udGVudDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gRWRpdCB0YXNrIGRlYWRsaW5lXHJcbiAgY29uc3Qgc2luZ2xlX3Rhc2tfZGVhZGxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2luZ2xlLXRhc2tfX2RlYWRsaW5lJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaW5nbGVfdGFza19kZWFkbGluZS5sZW5ndGg7IGkrKykgeyBcclxuICAgIGNvbnN0IGVkaXRhYmxlRGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZWRpdGFibGVEZWFkbGluZS50eXBlID0gJ2RhdGUnO1xyXG4gICAgc2luZ2xlX3Rhc2tfZGVhZGxpbmVbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGVkaXRhYmxlRGVhZGxpbmUudmFsdWUgPSBzaW5nbGVfdGFza19kZWFkbGluZVtpXS50ZXh0Q29udGVudDtcclxuICAgICAgc2luZ2xlX3Rhc2tfZGVhZGxpbmVbaV0ucmVwbGFjZVdpdGgoZWRpdGFibGVEZWFkbGluZSk7XHJcbiAgICB9KTtcclxuICAgIGVkaXRhYmxlRGVhZGxpbmUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgICAgZWRpdGFibGVEZWFkbGluZS5yZXBsYWNlV2l0aChzaW5nbGVfdGFza19kZWFkbGluZVtpXSk7XHJcbiAgICAgIHRhcmdldFRhc2tbaV0uZGVhZGxpbmUgPSBlZGl0YWJsZURlYWRsaW5lLnZhbHVlO1xyXG4gICAgICAvLyBSZWxvYWQgRE9NIGVsZW1lbnRzIHRvIHJlZmxlY3QgY2hhbmdlcyBhbmQgcmVsb2FkIHVzZXIgYWN0aW9ucyBmdW5jdGlvbnNcclxuICAgICAgbG9hZFRhc2tsaXN0RGV0YWlscyh0YXJnZXRUYXNrTGlzdCk7XHJcbiAgICAgIGRlbGV0ZVRhc2tsaXN0KCk7XHJcbiAgICAgIGRlbGV0ZVRhc2soKTtcclxuICAgICAgZWRpdFRhc2tsaXN0KCk7XHJcbiAgICAgIGVkaXRUYXNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIEVkaXQgdGFzayBwcmlvcml0eVxyXG4gIGNvbnN0IHNpbmdsZV90YXNrX3ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpbmdsZS10YXNrX19wcmlvcml0eScpO1xyXG4gIHNpbmdsZV90YXNrX3ByaW9yaXR5LmZvckVhY2goKGVsLCBpKSA9PiB7XHJcbiAgICBjb25zdCBlZGl0YWJsZVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGVkaXRhYmxlUHJpb3JpdHkudHlwZSA9ICdudW1iZXInO1xyXG4gICAgZWRpdGFibGVQcmlvcml0eS5taW4gPSAnMSc7XHJcbiAgICBlZGl0YWJsZVByaW9yaXR5Lm1heCA9ICczJztcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBlZGl0YWJsZVByaW9yaXR5LnZhbHVlID0gdGFyZ2V0VGFza1tpXS5wcmlvcml0eTtcclxuICAgICAgc2luZ2xlX3Rhc2tfcHJpb3JpdHlbaV0ucmVwbGFjZVdpdGgoZWRpdGFibGVQcmlvcml0eSk7XHJcbiAgICB9KTtcclxuICAgIGVkaXRhYmxlUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgICAgdGFyZ2V0VGFza1tpXS5wcmlvcml0eSA9IGVkaXRhYmxlUHJpb3JpdHkudmFsdWU7XHJcbiAgICAgIGVkaXRhYmxlUHJpb3JpdHkucmVwbGFjZVdpdGgoc2luZ2xlX3Rhc2tfcHJpb3JpdHlbaV0pO1xyXG4gICAgICAvLyBSZWxvYWQgRE9NIGVsZW1lbnRzIHRvIHJlZmxlY3QgY2hhbmdlcyBhbmQgcmVsb2FkIHVzZXIgYWN0aW9ucyBmdW5jdGlvbnNcclxuICAgICAgbG9hZFRhc2tsaXN0RGV0YWlscyh0YXJnZXRUYXNrTGlzdCk7XHJcbiAgICAgIGRlbGV0ZVRhc2tsaXN0KCk7XHJcbiAgICAgIGRlbGV0ZVRhc2soKTtcclxuICAgICAgZWRpdFRhc2tsaXN0KCk7XHJcbiAgICAgIGVkaXRUYXNrKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4vLyBET00gQUNUSU9OU1xyXG4vLyBXaGVuIGNsaWNraW5nIG9uIGEgdGFrc2xpc3QgbmFtZSwgdXBkYXRlIHRoZSBkaXNwbGF5IHdpdGggdGhlIGxpc3Qgb2YgdGFza3NcclxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGFza2xpc3RfYmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaWRlYmFyLXRhc2tsaXN0Jyk7XHJcbiAgY29uc3QgdGFza2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrbGlzdC10aXRsZScpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza2xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHRhc2tsaXN0X2Jsb2NrW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAvLyBHZXQgdGhlIG5hbWUgb2YgdGhlIGNsaWNrZWQgdGFza2xpc3RcclxuICAgICAgY29uc3QgY2xpY2tlZF90YXNrID0gdGFza2xpc3RbaV0udGV4dENvbnRlbnQ7XHJcbiAgICAgIC8vIFVzZSB0aGUgdGFrc2xpc3QgbmFtZSB0byBmaW5kIHRoZSB0YXNrbGlzdCBpbiB0aGUgdGFza0xpc3RzQ29udGFpbmVyXHJcbiAgICAgIGNvbnN0IGNsaWNrZWRUYXNrTGlzdCA9IHRhc2tMaXN0c0NvbnRhaW5lci5maW5kKCh7IHRpdGxlIH0pID0+IHRpdGxlID09PSBjbGlja2VkX3Rhc2spO1xyXG4gICAgICBsb2FkVGFza2xpc3REZXRhaWxzKGNsaWNrZWRUYXNrTGlzdCk7XHJcbiAgICAgIGRlbGV0ZVRhc2tsaXN0KCk7XHJcbiAgICAgIGRlbGV0ZVRhc2soKTtcclxuICAgICAgZWRpdFRhc2tsaXN0KCk7XHJcbiAgICAgIGVkaXRUYXNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuLy8gVGVzdCBwdXJwb3NlXHJcblxyXG5URVNUX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0c0NvbnRhaW5lcik7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==