/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n* {\\n  font-family: sans-serif;\\n  box-sizing: border-box;\\n}\\n\\nul {\\n  padding-left: 15px;\\n}\\n\\nli {\\n  margin-bottom: 10px;\\n}\\n\\nform {\\n  width: 500px;\\n  margin: 0 auto;\\n}\\n\\nlabel, input, select {\\n  width: 100%;\\n}\\n\\nlabel {\\n  font-size: 14px;\\n}\\n\\ninput, select {\\n  padding: 5px;\\n  margin: 5px 0 15px 0;\\n}\\n\\ninput:focus {\\n  border-color: #fc2193;\\n}\\n\\nselect:focus {\\n  border-color: #fc2193;\\n}\\n\\ninput[type=submit] {\\n  background-color: #fc2193;\\n  color: white;\\n  border: none;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  width: 50%;\\n}\\n\\nh3 {\\n  margin: 0;\\n}\\n\\n.form-item {\\n  background-color: #f3f3f3;\\n  padding: 15px;\\n  margin-bottom: 30px;\\n  border-radius: 5px;\\n}\\n\\n/* Образование*/\\n.user-education__item:not(:last-child) {\\n  border-bottom: 2px dotted #fc2193;\\n}\\n\\n/*Сертификаты*/\\n.user-certificate__item:not(:last-child) {\\n  border-bottom: 2px dotted #fc2193;\\n}\\n\\n/*Общее*/\\n.delete-button {\\n  background-color: transparent;\\n  color: #fc2193;\\n  border: none;\\n  cursor: pointer;\\n  padding: 0;\\n}\\n\\n.add-button {\\n  background-color: #0dc6bf;\\n  color: white;\\n  padding: 5px 10px;\\n  border: none;\\n  cursor: pointer;\\n  border-radius: 5px;\\n}\\n\\n.list-item {\\n  padding: 20px 0;\\n}\\n\\n.list-item.item:first-child {\\n  padding: 0 0 10px 0;\\n}\\n\\n.item {\\n  padding: 10px 0;\\n}\\n\\n.item:last-child {\\n  padding: 10px 0 0 0;\\n}\\n\\n.item.hover input,\\n.item.hover select {\\n  background-color: #ffa8a8;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://MZ_FormData/./src/style/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://MZ_FormData/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack://MZ_FormData/./src/style/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://MZ_FormData/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ \"./src/style/style.scss\");\n\r\n\r\n\"use strict\"\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function() {\r\n    // Контейнеры данных\r\n    const userEducationBox = document.querySelector('.user-education__list');\r\n    const userCertificateBox = document.querySelector('.user-certificate__list');\r\n    const userAdditionalBox = document.querySelector('.user-additional__list');\r\n    const userSkillBox = document.querySelector('.user-skill__list');\r\n\r\n    // Добавление пункта об образовании\r\n    const addEducationItemBtn = document.querySelector('.user-education__btn');\r\n    addEducationItemBtn.addEventListener(\"click\", addEducationItem);\r\n\r\n    // Кнопка добавления сертификата\r\n    const addCertificateItemBtn = document.querySelector('.user-certificate__btn');\r\n    addCertificateItemBtn.addEventListener(\"click\", addCertificateItem);\r\n\r\n    // Кнопка добавления дополнительного образования\r\n    const addAdditionalItemBtn = document.querySelector('.user-additional__btn');\r\n    addAdditionalItemBtn.addEventListener(\"click\", addAdditionalItem);\r\n\r\n    // Кнопки удаления\r\n    let deleteEducationItemBtn;\r\n    let deleteCertificateItemBtn;\r\n    let deleteAdditionalItemBtn;\r\n    let deleteSkillItemBtn;\r\n\r\n\r\n    function deleteItem(e){\r\n        // Функция инициализации кнопок удаления пунктов, добавление слушателей\r\n        let deleteItemBtn = document.querySelectorAll('.delete-button');\r\n\r\n        deleteItemBtn.forEach( item => {\r\n            item.addEventListener(\"mouseover\", function(e){\r\n                let hoverItem = e.target.closest('.item');\r\n                hoverItem.classList.add('hover');\r\n            });\r\n\r\n            item.addEventListener(\"mouseout\", function(e){\r\n                let hoverItem = e.target.closest('.item');\r\n                hoverItem.classList.remove('hover');\r\n            });\r\n        });\r\n    };\r\n\r\n\r\n    function addEducationItem(e){\r\n        e.preventDefault();\r\n\r\n        let newItem = document.createElement('div');\r\n        newItem.classList.add('user-education__item');\r\n        newItem.classList.add('item');\r\n        newItem.innerHTML = `                \r\n        <label>Год окончания:</label>\r\n        <input type=\"number\" name=\"user-education-yearEnd\" min=\"1950\" max=\"2025\" placeholder=\"Например, 2020\" required>\r\n        <label>Уровень подготовки:</label>\r\n        <select name=\"user-education-speciality\">\r\n            <option value=\"Диплом\">Диплом</option>\r\n            <option value=\"Интернатура\">Интернатура</option>\r\n            <option value=\"Ординатура\">Ординатура</option>\r\n            <option value=\"Профессиональная переподготовка\">Профессиональная переподготовка</option>\r\n        </select>\r\n        <label>Университет:</label>\r\n        <input type=\"text\" name=\"user-education-university\" placeholder=\"Например, Санкт-Петербургский государственный медицинский университет\" required>\r\n        <label>Специальность:</label>\r\n        <select name=\"user-education-speciality\">\r\n            <option value=\"Стоматология\">Стоматология</option>\r\n            <option value=\"Стоматология общей практики\">Стоматология общей практики</option>\r\n            <option value=\"Стоматология терапевтическая\">Стоматология терапевтическая</option>\r\n            <option value=\"Стоматология ортопедическая\">Стоматология ортопедическая</option>\r\n            <option value=\"Стоматология хирургическая\">Стоматология хирургическая</option>\r\n            <option value=\"Стоматология детская\">Стоматология детская</option>\r\n            <option value=\"Ортодонтия\">Ортодонтия</option>\r\n        </select>\r\n        <button class=\"education-delete__btn delete-button\">Удалить</button>`;\r\n        userEducationBox.appendChild(newItem);\r\n\r\n        // инициализируем кнопки закрытия и вешаем слушателя\r\n        deleteEducationItemBtn = document.querySelectorAll('.education-delete__btn');\r\n        deleteEducationItemBtn.forEach( item => {\r\n            item.addEventListener(\"click\", deleteEducationItem);\r\n        });\r\n\r\n        deleteItem();\r\n    };\r\n\r\n\r\n    function deleteEducationItem(e){\r\n        e.preventDefault();\r\n        let deleteItem = e.target.closest('.user-education__item');\r\n        userEducationBox.removeChild(deleteItem);\r\n    };\r\n\r\n    function addCertificateItem(e){\r\n        e.preventDefault();\r\n\r\n        let newItem = document.createElement('div');\r\n        newItem.classList.add('user-certificate__item');\r\n        newItem.classList.add('item');\r\n        newItem.innerHTML = `                \r\n        <label>Специальность:</label>\r\n        <select name=\"user-education-speciality\">\r\n            <option value=\"Стоматология\">Стоматология</option>\r\n            <option value=\"Стоматология общей практики\">Стоматология общей практики</option>\r\n            <option value=\"Стоматология ортопедическая\">Стоматология ортопедическая</option>\r\n            <option value=\"Стоматология хирургическая\">Стоматология хирургическая</option>\r\n            <option value=\"Стоматология детская\">Стоматология детская</option>\r\n            <option value=\"Ортодонтия\">Ортодонтия</option>\r\n        </select>\r\n        <label>Выдан:</label>\r\n        <input type=\"date\" required>\r\n        <label>Действителен до:</label>\r\n        <input type=\"date\"required>\r\n        <button class=\"certificate-delete__btn delete-button\">Удалить</button>`;\r\n        userCertificateBox.appendChild(newItem);\r\n\r\n        // инициализируем кнопки закрытия и вешаем слушателя\r\n        deleteCertificateItemBtn = document.querySelectorAll('.certificate-delete__btn');\r\n        deleteCertificateItemBtn.forEach( item => {\r\n            item.addEventListener(\"click\", deleteCertificateItem);\r\n        });\r\n    };\r\n\r\n    \r\n    function deleteCertificateItem(e){\r\n        e.preventDefault();\r\n        let deleteItem = e.target.closest('.user-certificate__item');\r\n        userCertificateBox.removeChild(deleteItem);\r\n    };\r\n\r\n    function addAdditionalItem(e){\r\n        e.preventDefault();\r\n\r\n        let newItem = document.createElement('div');\r\n        newItem.classList.add('user-additional__item');\r\n        newItem.classList.add('item');\r\n        newItem.innerHTML = `                \r\n        <label>Название курса, семинара</label>\r\n        <input type=\"text\" placeholder=\"Эндодонтия №1. Практические нюансы каждодневной эндодонтии\">\r\n        <label>Название организации обучения или ФИО лектора</label>\r\n        <input type=\"text\" placeholder=\"Например, А. Павлов\">\r\n        <button class=\"additional-delete__btn delete-button\">Удалить</button>`;\r\n        userAdditionalBox.appendChild(newItem);\r\n\r\n        // инициализируем кнопки закрытия и вешаем слушателя\r\n        deleteAdditionalItemBtn = document.querySelectorAll('.additional-delete__btn');\r\n        deleteAdditionalItemBtn.forEach( item => {\r\n            item.addEventListener(\"click\", deleteAdditionalItem);\r\n        });\r\n    };\r\n\r\n    \r\n    function deleteAdditionalItem(e){\r\n        e.preventDefault();\r\n        let deleteItem = e.target.closest('.user-additional__item');\r\n        userAdditionalBox.removeChild(deleteItem);\r\n    };\r\n\r\n\r\n\r\n});\n\n//# sourceURL=webpack://MZ_FormData/./src/js/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;