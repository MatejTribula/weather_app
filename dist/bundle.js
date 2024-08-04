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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_modules_date_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/modules/date-module */ \"./src/modules/date-module.js\");\n/* harmony import */ var _src_modules_data_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/modules/data-controller */ \"./src/modules/data-controller.js\");\n/* harmony import */ var _src_modules_dom_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/modules/dom-controller */ \"./src/modules/dom-controller.js\");\n\n\n\nconst dataController = new _src_modules_data_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst domController = new _src_modules_dom_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst form = document.querySelector(\"form\");\nconst input = document.querySelector(\"input\");\nconst h1 = document.querySelector(\"h1\");\nconst h2 = document.querySelector(\"h2\");\nconst img = document.querySelector(\"img\");\nconst tempButton = document.getElementById(\"tempButton\");\ntempButton.innerText = domController.setTemperature(dataController.isFarenheit);\nconsole.log(tempButton);\nasync function main() {\n  replaceDom(\"Poprad\");\n  form.addEventListener(\"submit\", async e => {\n    e.preventDefault();\n    replaceDom(input.value);\n    domController.setAttribute(input, \"\", \"value\");\n  });\n  tempButton.addEventListener(\"click\", () => {\n    dataController.changeTemperature();\n    tempButton.innerText = domController.setTemperature(dataController.isFarenheit);\n  });\n}\nasync function replaceDom(location) {\n  const data = await dataController.getWeatherData(location, (0,_src_modules_date_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  domController.setInnerText(h1, data.address);\n  if (dataController.isFarenheit) {\n    domController.setInnerText(h2, data.currentConditions.temp + \" \" + domController.setTemperature(dataController.isFarenheit));\n  } else {\n    domController.setInnerText(h2, Math.round(data.currentConditions.temp - 32) + \" \" + domController.setTemperature(dataController.isFarenheit));\n  }\n  let gifData = await dataController.getBackgroundGif(data.currentConditions.conditions);\n  img.setAttribute(\"src\", gifData);\n}\nmain();\n\n//# sourceURL=webpack://template_repo/./src/index.js?");

/***/ }),

/***/ "./src/modules/data-controller.js":
/*!****************************************!*\
  !*** ./src/modules/data-controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DataController)\n/* harmony export */ });\nclass DataController {\n  constructor() {\n    this.isFarenheit = true;\n  }\n  async getWeatherData(location, date) {\n    try {\n      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?key=DEWQSJ6H7SCKKWLFNGX5BVKXH`);\n      const data = await response.json();\n      console.log(data);\n      return data;\n    } catch (error) {\n      console.log(error);\n      throw error;\n    }\n  }\n  async getBackgroundGif(string) {\n    try {\n      const searchTerm = string.replace(/ /g, \"+\");\n      const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=E4ONMDAnzOKQo3E6R2yKAarLeNDzFFQy&s=${searchTerm}`);\n      const data = await response.json();\n      console.log(data.data.images.original.url);\n      return data.data.images.original.url;\n    } catch (error) {\n      console.log(error);\n      throw error;\n    }\n  }\n  changeTemperature() {\n    if (this.isFarenheit) {\n      this.isFarenheit = false;\n    } else {\n      this.isFarenheit = true;\n    }\n  }\n}\n\n//# sourceURL=webpack://template_repo/./src/modules/data-controller.js?");

/***/ }),

/***/ "./src/modules/date-module.js":
/*!************************************!*\
  !*** ./src/modules/date-module.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getDate)\n/* harmony export */ });\nfunction getDate() {\n  const now = new Date();\n  const year = now.getFullYear();\n  const month = String(now.getMonth() + 1).padStart(2, \"0\");\n  const day = String(now.getDate()).padStart(2, \"0\");\n  return `${year}-${month}-${day}`;\n}\n\n//# sourceURL=webpack://template_repo/./src/modules/date-module.js?");

/***/ }),

/***/ "./src/modules/dom-controller.js":
/*!***************************************!*\
  !*** ./src/modules/dom-controller.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DomController)\n/* harmony export */ });\nclass DomController {\n  setInnerText = (element, value) => element.innerText = value;\n  setAttribute = (element, value, attribute) => element.setAttribute(attribute, value);\n  setTemperature(condition) {\n    if (condition) {\n      return \"°F\";\n    } else {\n      return \"°C\";\n    }\n  }\n}\n\n//# sourceURL=webpack://template_repo/./src/modules/dom-controller.js?");

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
/************************************************************************/
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;