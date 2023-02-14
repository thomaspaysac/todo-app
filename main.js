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
  const deadline = taskData.taskDeadline;
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
    const newTaskList = Tasklist(newTask.tasklist, ''); // Create new tasklist
    taskListsContainer.push(newTaskList);
    (newTaskList.content).push(newTask);
    newTaskList.description = 'There is no description yet...';
    (0,_dom_create_js__WEBPACK_IMPORTED_MODULE_1__.createTasklistContainer)(taskListsContainer);
    displayController();
  } else {
    (targetTaskList.content).push(newTask); // Add to existing tasklist
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
      editTask();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbUVBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxPQUFPO0FBQ2hFLE1BQU0sbUVBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9lZGl0LWljb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcmVtb3ZlLWljb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HYW1qYStGbG93ZXImZmFtaWx5PVVidW50dTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSwzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7IH1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBtYXJnaW46IDA7IH1cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvOyB9XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA5MHZoOyB9XFxyXFxuXFxyXFxuLm5vdGUge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxyXFxuXFxyXFxuLmJhY2tkcm9wIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxODE4NjlkO1xcclxcbiAgei1pbmRleDogMjsgfVxcclxcblxcclxcbi5hZGQtdGFza19fbW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2QyZDQ7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgcGFkZGluZzogMzJweDtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICMzNDRCNTI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB6LWluZGV4OiAzOyB9XFxyXFxuICAuYWRkLXRhc2tfX21vZGFsIGgyIHtcXHJcXG4gICAgY29sb3I6ICMyMzIzMjM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMTZweCAwOyB9XFxyXFxuXFxyXFxuLnJlbW92ZS10YXNrbGlzdF9fbW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVjZGY7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgcGFkZGluZzogMzJweDtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNlZTY5NjI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB6LWluZGV4OiAzOyB9XFxyXFxuICAucmVtb3ZlLXRhc2tsaXN0X19tb2RhbCBoMiB7XFxyXFxuICAgIGNvbG9yOiAjZWU2OTYyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCAwIDE2cHggMDsgfVxcclxcbiAgLnJlbW92ZS10YXNrbGlzdF9fbW9kYWwgZGl2IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07IH1cXHJcXG4gIC5yZW1vdmUtdGFza2xpc3RfX21vZGFsIGJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMTZweCAxNnB4IDAgMTZweDsgfVxcclxcbiAgLnJlbW92ZS10YXNrbGlzdF9fbW9kYWwgLnJlbW92ZS1jb25maXJtX19idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU2OTYyO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZWU2OTYyO1xcclxcbiAgICBjb2xvcjogI2VmZWZlZjsgfVxcclxcbiAgICAucmVtb3ZlLXRhc2tsaXN0X19tb2RhbCAucmVtb3ZlLWNvbmZpcm1fX2J1dHRvbjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXHJcXG4gICAgICBjb2xvcjogI2VlNjk2MjtcXHJcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWU2OTYyOyB9XFxyXFxuICAucmVtb3ZlLXRhc2tsaXN0X19tb2RhbCAucmVtb3ZlLWNhbmNlbF9fYnV0dG9uIHtcXHJcXG4gICAgY29sb3I6ICM3MTgxODY7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3MTgxODY7IH1cXHJcXG5cXHJcXG4uZWRpdC10YXNrX19tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBub25lOyB9XFxyXFxuXFxyXFxuI2FkZC10YXNrX2Zvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxyXFxuICAjYWRkLXRhc2tfZm9ybSAuaW5wdXQtZ3JvdXAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW46IDhweCAwOyB9XFxyXFxuICAjYWRkLXRhc2tfZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDMzdmg7IH1cXHJcXG4gICNhZGQtdGFza19mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQwYWY7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMzQ0QjUyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjb2xvcjogIzIzMjMyMzsgfVxcclxcbiAgICAjYWRkLXRhc2tfZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NEI1MjtcXHJcXG4gICAgICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXHJcXG4gICAgI2FkZC10YXNrX2Zvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06YWN0aXZlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTsgfVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0NEI1MjsgfVxcclxcblxcclxcbi5sb2dvX19jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDE1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxyXFxuICAubG9nb19fY29udGFpbmVyIGgxIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHYW1qYSBGbG93ZXInO1xcclxcbiAgICBtYXJnaW46IDAgMCAwIDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbiAgICBjb2xvcjogI2VmZWZlZjsgfVxcclxcblxcclxcbi5oZWFkZXJfX2NvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7IH1cXHJcXG4gIC5oZWFkZXJfX2NvbnRhaW5lciBhIHtcXHJcXG4gICAgY29sb3I6ICNlZmVmZWY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcclxcblxcclxcbi5zaWRlYmFyX19jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTgxODY7XFxyXFxuICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgfVxcclxcblxcclxcbi5uZXctdGFza19fYnV0dG9uIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDBhZjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjMzQ0QjUyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNXB4ICMyMzIzMjM3NzsgfVxcclxcbiAgLm5ldy10YXNrX19idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0QjUyO1xcclxcbiAgICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZWVlY2RmO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXHJcXG4gIC5uZXctdGFza19fYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpOyB9XFxyXFxuXFxyXFxuLnNpZGViYXItY2F0ZWdvcnkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzJweDsgfVxcclxcbiAgLnNpZGViYXItY2F0ZWdvcnkgaDIge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMCAwIDhweCAwOyB9XFxyXFxuICAuc2lkZWJhci1jYXRlZ29yeSB1bCB7XFxyXFxuICAgIG1hcmdpbjogMCAwIDAgOHB4O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXHJcXG5cXHJcXG4uc2lkZWJhci10YXNrbGlzdCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XFxyXFxuICAuc2lkZWJhci10YXNrbGlzdDpob3ZlciwgLnNpZGViYXItdGFza2xpc3Q6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjZDJkNDc5O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXHJcXG5cXHJcXG4udGFza2xpc3Qtc3VidGFza3Mge1xcclxcbiAgY29sb3I6ICNjY2NjY2M7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcclxcbiAgLnRhc2tsaXN0LXN1YnRhc2tzIGxpIHtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cXHJcXG5cXHJcXG4uY29udGVudF9fY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxyXFxuICBjb2xvcjogIzIzMjMyMztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgfVxcclxcblxcclxcbi5jb250ZW50X190YXNrbGlzdC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDE2cHg7IH1cXHJcXG5cXHJcXG4uY29udGVudF9fdGFza2xpc3QtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogOHB4OyB9XFxyXFxuXFxyXFxuLmNvbnRlbnRfX3Rhc2tsaXN0LWRlc2NyaXB0aW9uIHtcXHJcXG4gIGNvbG9yOiAjYWFhYWFhO1xcclxcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjYWFhYWFhO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XFxyXFxuXFxyXFxuLmVkaXQtdGFza2xpc3RfX2J1dHRvbixcXHJcXG4uZWRpdC1zaW5nbGUtdGFza19fYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMjBweDsgfVxcclxcbiAgLmVkaXQtdGFza2xpc3RfX2J1dHRvbjpob3ZlcixcXHJcXG4gIC5lZGl0LXNpbmdsZS10YXNrX19idXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXHJcXG5cXHJcXG4ucmVtb3ZlLXRhc2tsaXN0X19idXR0b24sXFxyXFxuLnJlbW92ZS1zaW5nbGUtdGFza19fYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcclxcbiAgLnJlbW92ZS10YXNrbGlzdF9fYnV0dG9uOmhvdmVyLFxcclxcbiAgLnJlbW92ZS1zaW5nbGUtdGFza19fYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlNjk2MjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxyXFxuXFxyXFxuLmRhdGFfbGVnZW5kcyB7XFxyXFxuICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4cHggNmZyIDJmciAxZnIgNTBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTsgfVxcclxcbiAgLmRhdGFfbGVnZW5kcyA6bm90KDpudGgtY2hpbGQoMikpIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7IH1cXHJcXG5cXHJcXG4uc2luZ2xlLXRhc2tfX2NvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IDE2cHggMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFhYWFhOyB9XFxyXFxuICAuc2luZ2xlLXRhc2tfX2NvbnRhaW5lcjpob3ZlciwgLnNpbmdsZS10YXNrX19jb250YWluZXI6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWNkZjsgfVxcclxcblxcclxcbi5zaW5nbGUtdGFza19fZGF0YXMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCA2ZnIgMmZyIDFmciA1MHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcclxcbiAgLnNpbmdsZS10YXNrX19kYXRhcyBoMyB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDsgfVxcclxcbiAgLnNpbmdsZS10YXNrX19kYXRhcyBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7IH1cXHJcXG4gIC5zaW5nbGUtdGFza19fZGF0YXMgOm5vdCg6bnRoLWNoaWxkKDIpKSB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyB9XFxyXFxuXFxyXFxuLnNpbmdsZS10YXNrX19kZXNjcmlwdGlvbiB7XFxyXFxuICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2FhYWFhYTtcXHJcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcclxcbiAgbWFyZ2luOiA4cHggMDsgfVxcclxcblxcclxcbi5zaW5nbGUtdGFza19fZGVhZGxpbmUge1xcclxcbiAgY29sb3I6ICNhYWFhYWE7IH1cXHJcXG5cXHJcXG4vKiB3aWR0aCAqL1xcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDEwcHg7IH1cXHJcXG5cXHJcXG4vKiBUcmFjayAqL1xcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZDogI2YxZjFmMTsgfVxcclxcblxcclxcbi8qIEhhbmRsZSAqL1xcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogIzg4ODsgfVxcclxcblxcclxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzU1NTsgfVxcclxcblxcclxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFNQTtFQUNFLHNCQUFzQjtFQUN0QixpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSxhQUFhO0VBQ2IsU0FBUSxFQUFBOztBQUdWO0VBQ0UsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGFBQWE7RUFDYix5QkF2Q2dFO0VBd0NoRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHlCQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBO0VBRVY7SUFDRSxjQWxEd0c7SUFtRHhHLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQTNEa0o7RUE0RGxKLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IseUJBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7RUFFVjtJQUNFLGNBdEVrSztJQXVFbEssa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFBO0VBR3BCO0lBQ0UsaUJBQWlCLEVBQUE7RUFHbkI7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsd0JBQXdCLEVBQUE7RUFHMUI7SUFDRSx5QkF4RmtLO0lBeUZsSyx5QkFBMkM7SUFDM0MsY0ExRm1GLEVBQUE7SUE0Rm5GO01BQ0Us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akI7SUFDRSxvQkFBb0IsRUFBQTs7QUFJeEI7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDLEVBQUE7RUFFaEM7SUFFRSx5QkE3VWdKLEVBQUE7O0FBaVZwSjtFQUNFLGFBQWE7RUFDYiw0Q0FBNEM7RUFDNUMsbUJBQW1CLEVBQUE7RUFFbkI7SUFDRSxTQUFTO0lBQ1QsZ0JBQWdCLEVBQUE7RUFHbEI7SUFDRSxTQUFTO0lBQ1QsWUFBWTtJQUNaLG1CQUFtQixFQUFBO0VBR3JCO0lBQ0Usb0JBQW9CLEVBQUE7O0FBSXhCO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsY0FBYyxFQUFBOztBQUloQixVQUFBO0FBQ0E7RUFDRSxXQUFXLEVBQUE7O0FBR2IsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCLFdBQUE7QUFDQTtFQUNFLGdCQUFnQixFQUFBOztBQUdsQixvQkFBQTtBQUNBO0VBQ0UsZ0JBQWdCLEVBQUE7O0FDakdsQixvQ0FBb0NcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBzaWRlYmFyX3Rhc2tsaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLXRhc2tsaXN0cycpO1xyXG5jb25zdCBjb250ZW50X2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LW91dHB1dCcpO1xyXG5cclxuLy8gQ3JlYXRlIHNpZGViYXIgY29udGVudFxyXG5jb25zdCBjcmVhdGVUYXNrbGlzdENvbnRhaW5lciA9ICh0YXNrTGlzdHNBcnJheSkgPT4ge1xyXG4gIHNpZGViYXJfdGFza2xpc3RzLnRleHRDb250ZW50ID0gJyc7XHJcbiAgdGFza0xpc3RzQXJyYXkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBjb25zdCB0YXNrbGlzdF9ibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICB0YXNrbGlzdF9ibG9jay5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLXRhc2tsaXN0Jyk7XHJcbiAgICBzaWRlYmFyX3Rhc2tsaXN0cy5hcHBlbmRDaGlsZCh0YXNrbGlzdF9ibG9jayk7XHJcbiAgICBjb25zdCB0YXNrbGlzdF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza2xpc3RfdGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza2xpc3QtdGl0bGUnKTtcclxuICAgIHRhc2tsaXN0X3RpdGxlLnRleHRDb250ZW50ID0gZWwudGl0bGU7XHJcbiAgICB0YXNrbGlzdF9ibG9jay5hcHBlbmRDaGlsZCh0YXNrbGlzdF90aXRsZSk7XHJcbiAgICAoZWwuY29udGVudCkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgIGNvbnN0IHRhc2tsaXN0X2NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICB0YXNrbGlzdF9jb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2tsaXN0LXN1YnRhc2tzJyk7XHJcbiAgICAgIHRhc2tsaXN0X2NvbnRlbnQudGV4dENvbnRlbnQgPSBlbC50aXRsZTtcclxuICAgICAgdGFza2xpc3RfYmxvY2suYXBwZW5kQ2hpbGQodGFza2xpc3RfY29udGVudCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbi8vIFBvcHVsYXRlIG1haW4gY29udGVudCBkaXZcclxuY29uc3QgbG9hZFRhc2tsaXN0RGV0YWlscyA9ICh0YXNrbGlzdCkgPT4ge1xyXG4gIGNvbnRlbnRfY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7IC8vIGVtcHR5IHRoZSBkaXYgYmVmb3JlIHVwZGF0aW5nXHJcbi8vIEdlbmVyYXRlIHRhc2tsaXN0IGhlYWRlclxyXG4gIGNvbnN0IGNvbnRlbnRfdGFza2xpc3RfaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGVudF90YXNrbGlzdF9oZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudF9fdGFza2xpc3QtaGVhZGVyJyk7XHJcbiAgY29udGVudF9jb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudF90YXNrbGlzdF9oZWFkZXIpO1xyXG4gIGNvbnN0IHRhc2tsaXN0X3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICB0YXNrbGlzdF90aXRsZS5jbGFzc0xpc3QuYWRkKCdjb250ZW50X190YXNrbGlzdC10aXRsZScpO1xyXG4gIHRhc2tsaXN0X3RpdGxlLnRleHRDb250ZW50ID0gdGFza2xpc3QudGl0bGU7XHJcbiAgY29udGVudF90YXNrbGlzdF9oZWFkZXIuYXBwZW5kQ2hpbGQodGFza2xpc3RfdGl0bGUpO1xyXG4gIC8qY29uc3QgZWRpdF90YXNrbGlzdF9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBlZGl0X3Rhc2tsaXN0X2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LXRhc2tsaXN0X19idXR0b24nKTtcclxuICBjb250ZW50X3Rhc2tsaXN0X2hlYWRlci5hcHBlbmRDaGlsZChlZGl0X3Rhc2tsaXN0X2J1dHRvbik7Ki9cclxuICBjb25zdCByZW1vdmVfdGFza2xpc3RfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcmVtb3ZlX3Rhc2tsaXN0X2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtdGFza2xpc3RfX2J1dHRvbicpO1xyXG4gIGNvbnRlbnRfdGFza2xpc3RfaGVhZGVyLmFwcGVuZENoaWxkKHJlbW92ZV90YXNrbGlzdF9idXR0b24pO1xyXG4vLyBHZW5lcmF0ZSB0YXNrbGlzdCBkZXNjcmlwdGlvblxyXG4gIGNvbnN0IHRhc2tsaXN0X2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGFza2xpc3RfZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnY29udGVudF9fdGFza2xpc3QtZGVzY3JpcHRpb24nKTtcclxuICB0YXNrbGlzdF9kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2tsaXN0LmRlc2NyaXB0aW9uO1xyXG4gIGNvbnRlbnRfY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tsaXN0X2Rlc2NyaXB0aW9uKTtcclxuLy8gR2VuZXJhdGUgdGFza3MgY29udGFpbmVyXHJcbiAgY29uc3QgdGFza3NfZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRhc2tzX2Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgnY29udGVudF9fc2luZ2xlLXRhc2tzLWRpc3BsYXknKTtcclxuICBjb250ZW50X2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrc19kaXNwbGF5KTtcclxuLy8gR2VuZXJhdGUgY29sdW1ucyBsYWJlbHNcclxuICBjb25zdCBkYXRhX2xlZ2VuZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkYXRhX2xlZ2VuZHMuY2xhc3NMaXN0LmFkZCgnZGF0YV9sZWdlbmRzJyk7XHJcbiAgdGFza3NfZGlzcGxheS5hcHBlbmRDaGlsZChkYXRhX2xlZ2VuZHMpO1xyXG4gIGNvbnN0IGVtcHR5X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRhdGFfbGVnZW5kcy5hcHBlbmRDaGlsZChlbXB0eV9kaXYpO1xyXG4gIGNvbnN0IGxhYmVsX3Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsYWJlbF90YXNrLnRleHRDb250ZW50ID0gJ1Rhc2snO1xyXG4gIGRhdGFfbGVnZW5kcy5hcHBlbmRDaGlsZChsYWJlbF90YXNrKTtcclxuICBjb25zdCBsYWJlbF9kZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxhYmVsX2RlYWRsaW5lLnRleHRDb250ZW50ID0gJ0RlYWRsaW5lJztcclxuICBkYXRhX2xlZ2VuZHMuYXBwZW5kQ2hpbGQobGFiZWxfZGVhZGxpbmUpO1xyXG4gIGNvbnN0IGxhYmVsX3ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGFiZWxfcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xyXG4gIGRhdGFfbGVnZW5kcy5hcHBlbmRDaGlsZChsYWJlbF9wcmlvcml0eSk7XHJcbiAgY29uc3QgbGFiZWxfYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxhYmVsX2FjdGlvbnMudGV4dENvbnRlbnQgPSAnRGVsZXRlJztcclxuICBkYXRhX2xlZ2VuZHMuYXBwZW5kQ2hpbGQobGFiZWxfYWN0aW9ucyk7XHJcbi8vIEdlbmVyYXRlIGRpc3BsYXkgb2YgZWFjaCB0YXNrXHJcbiAgKHRhc2tsaXN0LmNvbnRlbnQpLmZvckVhY2godGFzayA9PiB7XHJcbiAgICBjb25zdCBzaW5nbGVfdGFza19jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNpbmdsZV90YXNrX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtdGFza19fY29udGFpbmVyJyk7XHJcbiAgICB0YXNrc19kaXNwbGF5LmFwcGVuZENoaWxkKHNpbmdsZV90YXNrX2NvbnRhaW5lcik7XHJcbiAgICBjb25zdCBzaW5nbGVfdGFza19kYXRhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2luZ2xlX3Rhc2tfZGF0YXMuY2xhc3NMaXN0LmFkZCgnc2luZ2xlLXRhc2tfX2RhdGFzJyk7XHJcbiAgICBzaW5nbGVfdGFza19jb250YWluZXIuYXBwZW5kQ2hpbGQoc2luZ2xlX3Rhc2tfZGF0YXMpO1xyXG4gICAgY29uc3QgdGFza19jaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0YXNrX2NoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBzaW5nbGVfdGFza19kYXRhcy5hcHBlbmRDaGlsZCh0YXNrX2NoZWNrYm94KTtcclxuICAgIGNvbnN0IHNpbmdsZV90YXNrX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHNpbmdsZV90YXNrX3RpdGxlLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS10YXNrX190aXRsZScpO1xyXG4gICAgc2luZ2xlX3Rhc2tfdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xyXG4gICAgc2luZ2xlX3Rhc2tfZGF0YXMuYXBwZW5kQ2hpbGQoc2luZ2xlX3Rhc2tfdGl0bGUpO1xyXG4gICAgY29uc3Qgc2luZ2xlX3Rhc2tfZGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNpbmdsZV90YXNrX2RlYWRsaW5lLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS10YXNrX19kZWFkbGluZScpO1xyXG4gICAgaWYgKHRhc2suZGVhZGxpbmUgPT09ICcnKSB7XHJcbiAgICAgIHNpbmdsZV90YXNrX2RlYWRsaW5lLnRleHRDb250ZW50ID0gJy0nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2luZ2xlX3Rhc2tfZGVhZGxpbmUudGV4dENvbnRlbnQgPSB0YXNrLmRlYWRsaW5lO1xyXG4gICAgfVxyXG4gICAgc2luZ2xlX3Rhc2tfZGF0YXMuYXBwZW5kQ2hpbGQoc2luZ2xlX3Rhc2tfZGVhZGxpbmUpO1xyXG4gICAgY29uc3Qgc2luZ2xlX3Rhc2tfcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNpbmdsZV90YXNrX3ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS10YXNrX19wcmlvcml0eScpO1xyXG4gICAgc2luZ2xlX3Rhc2tfcHJpb3JpdHkudGV4dENvbnRlbnQgPSAn4piFJy5yZXBlYXQodGFzay5wcmlvcml0eSk7XHJcbiAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJycpIHtcclxuICAgICAgc2luZ2xlX3Rhc2tfcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnLSc7XHJcbiAgICAgIHNpbmdsZV90YXNrX3ByaW9yaXR5LnN0eWxlLmNvbG9yID0gJyNhYWFhYWEnO1xyXG4gICAgfVxyXG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICcxJykge1xyXG4gICAgICBzaW5nbGVfdGFza19wcmlvcml0eS5zdHlsZS5jb2xvciA9ICcjQTdDN0U3JztcclxuICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJzInKSB7XHJcbiAgICAgIHNpbmdsZV90YXNrX3ByaW9yaXR5LnN0eWxlLmNvbG9yID0gJyM3N0RENzcnO1xyXG4gICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnMycpIHtcclxuICAgICAgc2luZ2xlX3Rhc2tfcHJpb3JpdHkuc3R5bGUuY29sb3IgPSAnI2ZmNjk2MSc7XHJcbiAgICB9XHJcbiAgICBzaW5nbGVfdGFza19kYXRhcy5hcHBlbmRDaGlsZChzaW5nbGVfdGFza19wcmlvcml0eSk7XHJcbiAgICAvKmNvbnN0IGVkaXRfc2luZ2xlX3Rhc2tfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlZGl0X3NpbmdsZV90YXNrX2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LXNpbmdsZS10YXNrX19idXR0b24nKTtcclxuICAgIHNpbmdsZV90YXNrX2RhdGFzLmFwcGVuZENoaWxkKGVkaXRfc2luZ2xlX3Rhc2tfYnV0dG9uKTsqL1xyXG4gICAgY29uc3QgcmVtb3ZlX3NpbmdsZV90YXNrX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmVtb3ZlX3NpbmdsZV90YXNrX2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtc2luZ2xlLXRhc2tfX2J1dHRvbicpO1xyXG4gICAgc2luZ2xlX3Rhc2tfZGF0YXMuYXBwZW5kQ2hpbGQocmVtb3ZlX3NpbmdsZV90YXNrX2J1dHRvbik7XHJcbiAgICBjb25zdCBzaW5nbGVfdGFza19kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2luZ2xlX3Rhc2tfZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnc2luZ2xlLXRhc2tfX2Rlc2NyaXB0aW9uJyk7XHJcbiAgICBzaW5nbGVfdGFza19kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICBzaW5nbGVfdGFza19jb250YWluZXIuYXBwZW5kQ2hpbGQoc2luZ2xlX3Rhc2tfZGVzY3JpcHRpb24pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcmVzZXRDb250ZW50Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnRlbnRfY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVUYXNrbGlzdENvbnRhaW5lciwgbG9hZFRhc2tsaXN0RGV0YWlscywgcmVzZXRDb250ZW50Q29udGFpbmVyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrbGlzdENvbnRhaW5lciwgbG9hZFRhc2tsaXN0RGV0YWlscywgcmVzZXRDb250ZW50Q29udGFpbmVyIH0gZnJvbSAnLi9kb20tY3JlYXRlLmpzJztcclxuaW1wb3J0IHsgZm9ybWF0LCBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5cclxuLy8gR2xvYmFsIHZhcmlhYmxlc1xyXG5jb25zdCB0YXNrTGlzdHNDb250YWluZXIgPSBbXTtcclxubGV0IG5ld1Rhc2s7XHJcblxyXG5cclxuLy8gRE9NIEVsZW1lbnRzXHJcbmNvbnN0IFRFU1RfQlVUVE9OID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1cGVyYnV0dG9uJyk7IC8vIHRlc3QgcHVycG9zZVxyXG5jb25zdCBORVdfVEFTS19GT1JNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrX2Zvcm0nKTtcclxuY29uc3QgRURJVF9UQVNLX0ZPUk0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRhc2tGb3JtJyk7IC8vIFVudXNlZFxyXG5cclxuY29uc3QgTkVXX1RBU0tfQlVUVE9OID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrX19idXR0b24nKTtcclxuY29uc3QgQkFDS0RST1AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuY29uc3QgTkVXX1RBU0tfTU9EQUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2tfX21vZGFsJyk7XHJcbmNvbnN0IFJFTU9WRV9UQVNLTElTVF9NT0RBTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtdGFza2xpc3RfX21vZGFsJyk7XHJcblxyXG5cclxuLy8gR2VuZXJhbCBmdW5jdGlvbnNcclxuY29uc3QgY2FwaXRhbGl6ZVN0cmluZyA9IChzdHJpbmcpID0+IHtcclxuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xyXG59O1xyXG5cclxuLy8gRmFjdG9yeSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgbmV3IHNpbmdsZSB0YXNrc1xyXG5jb25zdCBUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGVhZGxpbmUsIHByaW9yaXR5LCB0YXNrbGlzdCkgPT4ge1xyXG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZGVhZGxpbmUsIHByaW9yaXR5LCB0YXNrbGlzdCB9O1xyXG59O1xyXG5cclxuLy8gRmFjdG9yeSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgdGFza2xpc3RzLCB1bnRvIHdoaWNoIHdlIGNhbiBwdXNoIHNpbmdsZSB0YXNrc1xyXG5jb25zdCBUYXNrbGlzdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24pID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gW107XHJcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjb250ZW50IH07XHJcbn07XHJcblxyXG4vLyBNb2RhbHNcclxuY29uc3Qgb3Blbk1vZGFsID0gKG1vZGFsKSA9PiB7XHJcbiAgQkFDS0RST1Auc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbn07XHJcblxyXG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgQkFDS0RST1Auc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIE5FV19UQVNLX01PREFMLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBSRU1PVkVfVEFTS0xJU1RfTU9EQUwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufTtcclxuXHJcbkJBQ0tEUk9QLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VNb2RhbCgpKTtcclxuXHJcbk5FV19UQVNLX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBvcGVuTW9kYWwoTkVXX1RBU0tfTU9EQUwpO1xyXG59KTtcclxuXHJcbi8vIFRBU0tTIEFORCBUQVNLTElTVFMgQUNUSU9OUzogQ3JlYXRlLCBEZWxldGUsIEVkaXRcclxuLy9cclxuLy8gR2V0IHRhc2tzIGluZm9zIGZyb20gZm9ybSwgcHV0IGl0IGluIG5ld1Rhc2sgdmFyaWFibGUgZm9yIHVzZSBpbiBvdGhlciBmdW5jdGlvbnNcclxuY29uc3QgZ2V0Rm9ybURhdGEgPSAoKCkgPT4ge05FV19UQVNLX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoTkVXX1RBU0tfRk9STSk7XHJcbiAgY29uc3QgdGFza0RhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xyXG4gIGlmICh0YXNrRGF0YS50YXNrTGlzdCA9PT0gJycpIHtcclxuICAgIHRhc2tEYXRhLnRhc2tMaXN0ID0gJ0dlbmVyYWwgdGFza3MnOyAvLyBDcmVhdGUgYSBnZW5lcmFsIHRha3NsaXN0IHRvIHB1dCBzaW5nbGUgdGFza3MgaW50b1xyXG4gIH1cclxuICBjb25zdCB0YXNrbGlzdCA9IGNhcGl0YWxpemVTdHJpbmcodGFza0RhdGEudGFza0xpc3QpO1xyXG4gIGNvbnN0IHRpdGxlID0gY2FwaXRhbGl6ZVN0cmluZyh0YXNrRGF0YS50YXNrVGl0bGUpO1xyXG4gIGlmICh0YXNrRGF0YS50YXNrRGVzY3JpcHRpb24gPT09ICcnKSB7XHJcbiAgICB0YXNrRGF0YS50YXNrRGVzY3JpcHRpb24gPSAnTm8gZGVzY3JpcHRpb24uJztcclxuICB9XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSB0YXNrRGF0YS50YXNrRGVzY3JpcHRpb247XHJcbiAgY29uc3QgZGVhZGxpbmUgPSB0YXNrRGF0YS50YXNrRGVhZGxpbmU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSB0YXNrRGF0YS50YXNrUHJpb3JpdHk7XHJcbiAgbmV3VGFzayA9IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkZWFkbGluZSwgcHJpb3JpdHksIHRhc2tsaXN0KTtcclxuICBhZGRUYXNrVG9UYXNrTGlzdChuZXdUYXNrKTtcclxuICBjbG9zZU1vZGFsKCk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcblxyXG4vLyBBZGQgdGhlIG5ld1Rhc2sgdG8gaXRzIHRhc2sgbGlzdCBpZiBpdCBleGlzdCwgY3JlYXRlIG9uZSBpZiBpdCBkb2VzbnRcclxuY29uc3QgYWRkVGFza1RvVGFza0xpc3QgPSAobmV3VGFzaykgPT4ge1xyXG4gIC8vIElmIHRoZSB0YXNrbGlzdCB0aXRsZSBpcyBhbHJlYWR5IGluIHRoZSBkYXRhYmFzZSwgdGhpcyB3aWxsIHJldHVybiB0aGUgdGFza2xpc3Qgb2JqZWN0LiBPdGhlcndpc2UsIHJldHVybnMgdW5kZWZpbmVkXHJcbiAgY29uc3QgdGFyZ2V0VGFza0xpc3QgPSB0YXNrTGlzdHNDb250YWluZXIuZmluZCgoeyB0aXRsZSB9KSA9PiB0aXRsZSA9PT0gbmV3VGFzay50YXNrbGlzdCk7XHJcbiAgaWYgKHRhcmdldFRhc2tMaXN0ID09PSB1bmRlZmluZWQpIHsgLy8gaS5lLiBubyB0YXNrbGlzdCB3aXRoIHRoaXMgbmFtZSBleGlzdHMgeWV0XHJcbiAgICBjb25zdCBuZXdUYXNrTGlzdCA9IFRhc2tsaXN0KG5ld1Rhc2sudGFza2xpc3QsICcnKTsgLy8gQ3JlYXRlIG5ldyB0YXNrbGlzdFxyXG4gICAgdGFza0xpc3RzQ29udGFpbmVyLnB1c2gobmV3VGFza0xpc3QpO1xyXG4gICAgKG5ld1Rhc2tMaXN0LmNvbnRlbnQpLnB1c2gobmV3VGFzayk7XHJcbiAgICBuZXdUYXNrTGlzdC5kZXNjcmlwdGlvbiA9ICdUaGVyZSBpcyBubyBkZXNjcmlwdGlvbiB5ZXQuLi4nO1xyXG4gICAgY3JlYXRlVGFza2xpc3RDb250YWluZXIodGFza0xpc3RzQ29udGFpbmVyKTtcclxuICAgIGRpc3BsYXlDb250cm9sbGVyKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgICh0YXJnZXRUYXNrTGlzdC5jb250ZW50KS5wdXNoKG5ld1Rhc2spOyAvLyBBZGQgdG8gZXhpc3RpbmcgdGFza2xpc3RcclxuICAgIGNyZWF0ZVRhc2tsaXN0Q29udGFpbmVyKHRhc2tMaXN0c0NvbnRhaW5lcik7XHJcbiAgICBkaXNwbGF5Q29udHJvbGxlcigpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIERlbGV0ZSBhIHRhc2tsaXN0XHJcbmNvbnN0IGRlbGV0ZVRhc2tsaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFJFTU9WRV9UQVNLTElTVF9CVVRUT04gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlLXRhc2tsaXN0X19idXR0b24nKTtcclxuICBjb25zdCBSRU1PVkVfVEFTS0xJU1RfTU9EQUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlLXRhc2tsaXN0X19tb2RhbCcpO1xyXG4gIGNvbnN0IFJFTU9WRV9DQU5DRUxfQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZS1jYW5jZWxfX2J1dHRvbicpO1xyXG4gIGNvbnN0IFJFTU9WRV9DT05GSVJNX0JUTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtY29uZmlybV9fYnV0dG9uJyk7XHJcbiAgUkVNT1ZFX1RBU0tMSVNUX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG9wZW5Nb2RhbChSRU1PVkVfVEFTS0xJU1RfTU9EQUwpO1xyXG4gICAgY29uc3QgdGFyZ2V0VGFza0xpc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX3Rhc2tsaXN0LXRpdGxlJykudGV4dENvbnRlbnQ7IC8vIEZpbmQgdGhlIGN1cnJlbnQgdGFza2xpc3QgbmFtZVxyXG4gICAgY29uc3QgdGFyZ2V0VGFza0xpc3QgPSB0YXNrTGlzdHNDb250YWluZXIuZmluZCgoeyB0aXRsZSB9KSA9PiB0aXRsZSA9PT0gdGFyZ2V0VGFza0xpc3ROYW1lKTtcclxuICAgIFJFTU9WRV9DQU5DRUxfQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VNb2RhbCgpKTtcclxuICAgIFJFTU9WRV9DT05GSVJNX0JUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdHNDb250YWluZXIubGVuZ3RoOyBpKyspIHsgXHJcbiAgICAgICAgaWYgKHRhc2tMaXN0c0NvbnRhaW5lcltpXSA9PT0gdGFyZ2V0VGFza0xpc3QpIHsgXHJcbiAgICAgICAgICB0YXNrTGlzdHNDb250YWluZXIuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjcmVhdGVUYXNrbGlzdENvbnRhaW5lcih0YXNrTGlzdHNDb250YWluZXIpOyAvLyBVcGRhdGUgdGhlIHNpZGViYXIgdGFza2xpc3RzXHJcbiAgICAgIGRpc3BsYXlDb250cm9sbGVyKCk7IC8vIFJlbG9hZCB0aGUgY2xpY2sgYWN0aW9ucyBvbiBzaWRlYmFyIHRhc2tsaXN0c1xyXG4gICAgICByZXNldENvbnRlbnRDb250YWluZXIoKTsgLy8gRW1wdHkgdGhlIGNvbnRlbnQgY29udGFpbmVyXHJcbiAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuKTtcclxufTtcclxuXHJcbi8vIERlbGV0ZSBhIHNpbmdsZSB0YXNrIGZyb20gdGhlIHRhc2tsaXN0IGRpc3BsYXlcclxuY29uc3QgZGVsZXRlVGFzayA9ICgpID0+IHtcclxuICBjb25zdCBSRU1PVkVfVEFTS19CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLXNpbmdsZS10YXNrX19idXR0b24nKTtcclxuICBjb25zdCB0YXJnZXRUYXNrTGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fdGFza2xpc3QtdGl0bGUnKS50ZXh0Q29udGVudDsgLy8gRmluZCB0aGUgY3VycmVudCB0YXNrbGlzdCBuYW1lXHJcbiAgY29uc3QgdGFyZ2V0VGFza0xpc3QgPSB0YXNrTGlzdHNDb250YWluZXIuZmluZCgoeyB0aXRsZSB9KSA9PiB0aXRsZSA9PT0gdGFyZ2V0VGFza0xpc3ROYW1lKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IFJFTU9WRV9UQVNLX0JUTi5sZW5ndGg7IGkgKyspIHtcclxuICAgIFJFTU9WRV9UQVNLX0JUTltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGFyZ2V0VGFza0xpc3QuY29udGVudC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGxvYWRUYXNrbGlzdERldGFpbHModGFyZ2V0VGFza0xpc3QpO1xyXG4gICAgICBjcmVhdGVUYXNrbGlzdENvbnRhaW5lcih0YXNrTGlzdHNDb250YWluZXIpOyAvLyBVcGRhdGUgdGhlIHNpZGViYXIgdGFza2xpc3RzXHJcbiAgICAgIGRlbGV0ZVRhc2soKTsgLy8gUmVsb2FkIGRlbGV0ZSBmdW5jdGlvbiBmb3IgcmVtYWluaW5nIHRhc2tzXHJcbiAgICAgIGRlbGV0ZVRhc2tsaXN0KCk7IC8vIFJlbG9hZCBkZWxldGUgdGFza2xpc3QgZnVuY3Rpb25cclxuICAgICAgZWRpdFRhc2tsaXN0KCk7IC8vIFJlbG9hZCBlZGl0IGZ1bmN0aW9uXHJcbiAgICAgIGVkaXRUYXNrKCk7XHJcbiAgICAgIGRpc3BsYXlDb250cm9sbGVyKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBFZGl0IGEgdGFza2xpc3RcclxuY29uc3QgZWRpdFRhc2tsaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFRBU0tMSVNUX05BTUVfRUxFTUVOVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X190YXNrbGlzdC10aXRsZScpO1xyXG4gIGNvbnN0IFRBU0tMSVNUX0RFU0NSSVBUSU9OX0VMRU1FTlQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fdGFza2xpc3QtZGVzY3JpcHRpb24nKTtcclxuICBjb25zdCB0YXJnZXRUYXNrTGlzdE5hbWUgPSBUQVNLTElTVF9OQU1FX0VMRU1FTlQudGV4dENvbnRlbnQ7XHJcbiAgY29uc3QgdGFyZ2V0VGFza0xpc3QgPSB0YXNrTGlzdHNDb250YWluZXIuZmluZCgoeyB0aXRsZSB9KSA9PiB0aXRsZSA9PT0gdGFyZ2V0VGFza0xpc3ROYW1lKTtcclxuICBUQVNLTElTVF9OQU1FX0VMRU1FTlQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IC8vIEVkaXQgdGhlIHRhc2tsaXN0IHRpdGxlXHJcbiAgICBUQVNLTElTVF9OQU1FX0VMRU1FTlQuY29udGVudEVkaXRhYmxlID0gXCJ0cnVlXCI7XHJcbiAgfSk7XHJcbiAgVEFTS0xJU1RfTkFNRV9FTEVNRU5ULmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICBUQVNLTElTVF9OQU1FX0VMRU1FTlQuY29udGVudEVkaXRhYmxlID0gJ2ZhbHNlJztcclxuICAgIHRhcmdldFRhc2tMaXN0LnRpdGxlID0gVEFTS0xJU1RfTkFNRV9FTEVNRU5ULnRleHRDb250ZW50OyAvLyBVcGRhdGUgdGFza2xpc3QgaW4gYXJyYXlcclxuICAgIGNyZWF0ZVRhc2tsaXN0Q29udGFpbmVyKHRhc2tMaXN0c0NvbnRhaW5lcik7IC8vIFVwZGF0ZSB0aGUgc2lkZWJhciB0YXNrbGlzdHNcclxuICAgIGVkaXRUYXNrbGlzdCgpOyAvLyBSZWxvYWQgZWRpdCBmdW5jdGlvblxyXG4gIH0pO1xyXG4gIFRBU0tMSVNUX0RFU0NSSVBUSU9OX0VMRU1FTlQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBUQVNLTElTVF9ERVNDUklQVElPTl9FTEVNRU5ULmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcclxuICB9KTtcclxuICBUQVNLTElTVF9ERVNDUklQVElPTl9FTEVNRU5ULmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICBUQVNLTElTVF9ERVNDUklQVElPTl9FTEVNRU5ULmNvbnRlbnRFZGl0YWJsZSA9ICdmYWxzZSc7XHJcbiAgICB0YXJnZXRUYXNrTGlzdC5kZXNjcmlwdGlvbiA9IFRBU0tMSVNUX0RFU0NSSVBUSU9OX0VMRU1FTlQudGV4dENvbnRlbnQ7XHJcbiAgICBjcmVhdGVUYXNrbGlzdENvbnRhaW5lcih0YXNrTGlzdHNDb250YWluZXIpOyAvLyBVcGRhdGUgdGhlIHNpZGViYXIgdGFza2xpc3RzXHJcbiAgICBlZGl0VGFza2xpc3QoKTsgLy8gUmVsb2FkIGVkaXQgZnVuY3Rpb25cclxuICB9KTtcclxufTtcclxuXHJcbi8vIEVkaXQgYSBzaW5nbGUgdGFzaywgTW9kYWwgdmVyc2lvblxyXG4vKmNvbnN0IGdldEN1cnJlbnRUYXNrRGF0YSA9IChmb3JtLCB0YXJnZXQpID0+IHsgLy8gRWRpdCB0aHJvdWdoIGZvcm1cclxuICBmb3JtLnRhc2tUaXRsZS52YWx1ZSA9IHRhcmdldC50aXRsZTtcclxuICBmb3JtLnRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IHRhcmdldC5kZXNjcmlwdGlvbjtcclxuICBmb3JtLnRhc2tEZWFkbGluZS52YWx1ZSA9IHRhcmdldC5kZWFkbGluZTtcclxuICBmb3JtLnRhc2tQcmlvcml0eS52YWx1ZSA9IHRhcmdldC5wcmlvcml0eTtcclxuICBmb3JtLnRhc2tMaXN0LnZhbHVlID0gdGFyZ2V0LnRhc2tsaXN0O1xyXG59O1xyXG5cclxuY29uc3QgZWRpdFRhc2tGb3JtID0gKHRhcmdldCkgPT4ge1xyXG4gIGNvbnN0IHRhcmdldFRhc2tMaXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X190YXNrbGlzdC10aXRsZScpLnRleHRDb250ZW50O1xyXG4gIGNvbnN0IHRhcmdldFRhc2tMaXN0ID0gdGFza0xpc3RzQ29udGFpbmVyLmZpbmQoKHsgdGl0bGUgfSkgPT4gdGl0bGUgPT09IHRhcmdldFRhc2tMaXN0TmFtZSk7XHJcbiAgRURJVF9UQVNLX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKEVESVRfVEFTS19GT1JNKTtcclxuICAgIGNvbnN0IHRhc2tEYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKTtcclxuICAgIHRhcmdldC50YXNrbGlzdCA9IGNhcGl0YWxpemVTdHJpbmcodGFza0RhdGEudGFza0xpc3QpO1xyXG4gICAgdGFyZ2V0LnRpdGxlID0gY2FwaXRhbGl6ZVN0cmluZyh0YXNrRGF0YS50YXNrVGl0bGUpO1xyXG4gICAgdGFyZ2V0LmRlc2NyaXB0aW9uID0gdGFza0RhdGEudGFza0Rlc2NyaXB0aW9uO1xyXG4gICAgdGFyZ2V0LmRlYWRsaW5lID0gdGFza0RhdGEudGFza0RlYWRsaW5lO1xyXG4gICAgdGFyZ2V0LnByaW9yaXR5ID0gdGFza0RhdGEudGFza1ByaW9yaXR5O1xyXG4gICAgbG9hZFRhc2tsaXN0RGV0YWlscyh0YXJnZXRUYXNrTGlzdCk7XHJcbiAgICBkZWxldGVUYXNrbGlzdCgpO1xyXG4gICAgZGVsZXRlVGFzaygpO1xyXG4gICAgZWRpdFRhc2tsaXN0KCk7XHJcbiAgICBlZGl0VGFzaygpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZWRpdFRhc2sgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGFyZ2V0VGFza0xpc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX3Rhc2tsaXN0LXRpdGxlJykudGV4dENvbnRlbnQ7XHJcbiAgY29uc3QgdGFyZ2V0VGFza0xpc3QgPSB0YXNrTGlzdHNDb250YWluZXIuZmluZCgoeyB0aXRsZSB9KSA9PiB0aXRsZSA9PT0gdGFyZ2V0VGFza0xpc3ROYW1lKTtcclxuICBjb25zdCBlZGl0X3Rhc2tfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtc2luZ2xlLXRhc2tfX2J1dHRvbicpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWRpdF90YXNrX2J1dHRvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgZWRpdF90YXNrX2J1dHRvbltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0VGFza0NvbnRlbnQgPSB0YXJnZXRUYXNrTGlzdC5jb250ZW50W2ldOyAvLyBGaW5kIGNsaWNrZWQgdGFza1xyXG4gICAgICBnZXRDdXJyZW50VGFza0RhdGEoRURJVF9UQVNLX0ZPUk0sIHRhcmdldFRhc2tDb250ZW50KTsgLy8gRmlsbCB0aGUgZWRpdCBmb3JtIHdpdGggY3VycmVudCBkYXRhc1xyXG4gICAgICBlZGl0VGFza0Zvcm0odGFyZ2V0VGFza0NvbnRlbnQpO1xyXG4gICAgfSk7XHJcbiAgICB9XHJcbn07Ki9cclxuXHJcbmNvbnN0IGVkaXRUYXNrID0gKCkgPT4geyAvLyBMaXZlIGVkaXRcclxuICAvLyBGaW5kIHRoZSBjdXJyZW50IHRhc2tsaXN0IG5hbWUsIHRoZW4gc2VhcmNoIGZvciBpdCBpbiB0aGUgdGFza3NsaXN0cyBhcnJheSBhbmQgcmV0dXJuIGl0XHJcbiAgY29uc3QgdGFyZ2V0VGFza0xpc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX3Rhc2tsaXN0LXRpdGxlJykudGV4dENvbnRlbnQ7IFxyXG4gIGNvbnN0IHRhcmdldFRhc2tMaXN0ID0gdGFza0xpc3RzQ29udGFpbmVyLmZpbmQoKHsgdGl0bGUgfSkgPT4gdGl0bGUgPT09IHRhcmdldFRhc2tMaXN0TmFtZSk7XHJcbiAgLy8gU2luZ2xlIHRhc2tzIGFyZSBzdG9yZWQgYXMgb2JqZWN0cyBpbiB0aGUgdGFza2xpc3QuY29udGVudCBwcm9wZXJ0eS4gQ3JlYXRlIGEgc2hvcnRjdXQgdG8gYWNjZXNzIHRoZSB3YW50ZWQgdGFzay5cclxuICBjb25zdCB0YXJnZXRUYXNrID0gdGFyZ2V0VGFza0xpc3QuY29udGVudDtcclxuXHJcbiAgLy8gRWRpdCB0YXNrIHRpdGxlXHJcbiAgY29uc3Qgc2luZ2xlX3Rhc2tfdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2luZ2xlLXRhc2tfX3RpdGxlJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaW5nbGVfdGFza190aXRsZS5sZW5ndGg7IGkgKyspIHtcclxuICAgIHNpbmdsZV90YXNrX3RpdGxlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBzaW5nbGVfdGFza190aXRsZVtpXS5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XHJcbiAgICB9KTtcclxuICAgIHNpbmdsZV90YXNrX3RpdGxlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgIHNpbmdsZV90YXNrX3RpdGxlW2ldLmNvbnRlbnRFZGl0YWJsZSA9ICdmYWxzZSc7XHJcbiAgICAgIHRhcmdldFRhc2tbaV0udGl0bGUgPSBzaW5nbGVfdGFza190aXRsZVtpXS50ZXh0Q29udGVudDtcclxuICAgICAgY3JlYXRlVGFza2xpc3RDb250YWluZXIodGFza0xpc3RzQ29udGFpbmVyKTsgLy8gVXBkYXRlIHRoZSBzaWRlYmFyIHRhc2tsaXN0c1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBFZGl0IHRhc2sgZGVzY3JpcHRpb25cclxuICBjb25zdCBzaW5nbGVfdGFza19kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaW5nbGUtdGFza19fZGVzY3JpcHRpb24nKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpbmdsZV90YXNrX2Rlc2NyaXB0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBzaW5nbGVfdGFza19kZXNjcmlwdGlvbltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgc2luZ2xlX3Rhc2tfZGVzY3JpcHRpb25baV0uY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xyXG4gICAgfSk7XHJcbiAgICBzaW5nbGVfdGFza19kZXNjcmlwdGlvbltpXS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgICBzaW5nbGVfdGFza19kZXNjcmlwdGlvbi5jb250ZW50RWRpdGFibGUgPSAnZmFsc2UnO1xyXG4gICAgICB0YXJnZXRUYXNrW2ldLmRlc2NyaXB0aW9uID0gc2luZ2xlX3Rhc2tfZGVzY3JpcHRpb25baV0udGV4dENvbnRlbnQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIEVkaXQgdGFzayBkZWFkbGluZVxyXG4gIGNvbnN0IHNpbmdsZV90YXNrX2RlYWRsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpbmdsZS10YXNrX19kZWFkbGluZScpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2luZ2xlX3Rhc2tfZGVhZGxpbmUubGVuZ3RoOyBpKyspIHsgXHJcbiAgICBjb25zdCBlZGl0YWJsZURlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGVkaXRhYmxlRGVhZGxpbmUudHlwZSA9ICdkYXRlJztcclxuICAgIHNpbmdsZV90YXNrX2RlYWRsaW5lW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBlZGl0YWJsZURlYWRsaW5lLnZhbHVlID0gc2luZ2xlX3Rhc2tfZGVhZGxpbmVbaV0udGV4dENvbnRlbnQ7XHJcbiAgICAgIHNpbmdsZV90YXNrX2RlYWRsaW5lW2ldLnJlcGxhY2VXaXRoKGVkaXRhYmxlRGVhZGxpbmUpO1xyXG4gICAgfSk7XHJcbiAgICBlZGl0YWJsZURlYWRsaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgIGVkaXRhYmxlRGVhZGxpbmUucmVwbGFjZVdpdGgoc2luZ2xlX3Rhc2tfZGVhZGxpbmVbaV0pO1xyXG4gICAgICB0YXJnZXRUYXNrW2ldLmRlYWRsaW5lID0gZWRpdGFibGVEZWFkbGluZS52YWx1ZTtcclxuICAgICAgLy8gUmVsb2FkIERPTSBlbGVtZW50cyB0byByZWZsZWN0IGNoYW5nZXMgYW5kIHJlbG9hZCB1c2VyIGFjdGlvbnMgZnVuY3Rpb25zXHJcbiAgICAgIGxvYWRUYXNrbGlzdERldGFpbHModGFyZ2V0VGFza0xpc3QpO1xyXG4gICAgICBkZWxldGVUYXNrbGlzdCgpO1xyXG4gICAgICBkZWxldGVUYXNrKCk7XHJcbiAgICAgIGVkaXRUYXNrbGlzdCgpO1xyXG4gICAgICBlZGl0VGFzaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBFZGl0IHRhc2sgcHJpb3JpdHlcclxuICBjb25zdCBzaW5nbGVfdGFza19wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaW5nbGUtdGFza19fcHJpb3JpdHknKTtcclxuICBzaW5nbGVfdGFza19wcmlvcml0eS5mb3JFYWNoKChlbCwgaSkgPT4ge1xyXG4gICAgY29uc3QgZWRpdGFibGVQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBlZGl0YWJsZVByaW9yaXR5LnR5cGUgPSAnbnVtYmVyJztcclxuICAgIGVkaXRhYmxlUHJpb3JpdHkubWluID0gJzEnO1xyXG4gICAgZWRpdGFibGVQcmlvcml0eS5tYXggPSAnMyc7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZWRpdGFibGVQcmlvcml0eS52YWx1ZSA9IHRhcmdldFRhc2tbaV0ucHJpb3JpdHk7XHJcbiAgICAgIHNpbmdsZV90YXNrX3ByaW9yaXR5W2ldLnJlcGxhY2VXaXRoKGVkaXRhYmxlUHJpb3JpdHkpO1xyXG4gICAgfSk7XHJcbiAgICBlZGl0YWJsZVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgIHRhcmdldFRhc2tbaV0ucHJpb3JpdHkgPSBlZGl0YWJsZVByaW9yaXR5LnZhbHVlO1xyXG4gICAgICBlZGl0YWJsZVByaW9yaXR5LnJlcGxhY2VXaXRoKHNpbmdsZV90YXNrX3ByaW9yaXR5W2ldKTtcclxuICAgICAgLy8gUmVsb2FkIERPTSBlbGVtZW50cyB0byByZWZsZWN0IGNoYW5nZXMgYW5kIHJlbG9hZCB1c2VyIGFjdGlvbnMgZnVuY3Rpb25zXHJcbiAgICAgIGxvYWRUYXNrbGlzdERldGFpbHModGFyZ2V0VGFza0xpc3QpO1xyXG4gICAgICBkZWxldGVUYXNrbGlzdCgpO1xyXG4gICAgICBkZWxldGVUYXNrKCk7XHJcbiAgICAgIGVkaXRUYXNrbGlzdCgpO1xyXG4gICAgICBlZGl0VGFzaygpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuLy8gRE9NIEFDVElPTlNcclxuLy8gV2hlbiBjbGlja2luZyBvbiBhIHRha3NsaXN0IG5hbWUsIHVwZGF0ZSB0aGUgZGlzcGxheSB3aXRoIHRoZSBsaXN0IG9mIHRhc2tzXHJcbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRhc2tsaXN0X2Jsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2lkZWJhci10YXNrbGlzdCcpO1xyXG4gIGNvbnN0IHRhc2tsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFza2xpc3QtdGl0bGUnKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB0YXNrbGlzdF9ibG9ja1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgLy8gR2V0IHRoZSBuYW1lIG9mIHRoZSBjbGlja2VkIHRhc2tsaXN0XHJcbiAgICAgIGNvbnN0IGNsaWNrZWRfdGFzayA9IHRhc2tsaXN0W2ldLnRleHRDb250ZW50O1xyXG4gICAgICAvLyBVc2UgdGhlIHRha3NsaXN0IG5hbWUgdG8gZmluZCB0aGUgdGFza2xpc3QgaW4gdGhlIHRhc2tMaXN0c0NvbnRhaW5lclxyXG4gICAgICBjb25zdCBjbGlja2VkVGFza0xpc3QgPSB0YXNrTGlzdHNDb250YWluZXIuZmluZCgoeyB0aXRsZSB9KSA9PiB0aXRsZSA9PT0gY2xpY2tlZF90YXNrKTtcclxuICAgICAgbG9hZFRhc2tsaXN0RGV0YWlscyhjbGlja2VkVGFza0xpc3QpO1xyXG4gICAgICBkZWxldGVUYXNrbGlzdCgpO1xyXG4gICAgICBkZWxldGVUYXNrKCk7XHJcbiAgICAgIGVkaXRUYXNrbGlzdCgpO1xyXG4gICAgICBlZGl0VGFzaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbi8vIFRlc3QgcHVycG9zZVxyXG5cclxuVEVTVF9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrTGlzdHNDb250YWluZXIpO1xyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=