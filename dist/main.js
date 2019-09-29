/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanM/Y2QwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/global.js\n");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/Y2VkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/module.js\n");

/***/ }),

/***/ "./src/ActionCreators.js":
/*!*******************************!*\
  !*** ./src/ActionCreators.js ***!
  \*******************************/
/*! exports provided: fetchFilesStart, fetchFilesSuccess, fetchFilesFailed, searchFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchFilesStart\", function() { return fetchFilesStart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchFilesSuccess\", function() { return fetchFilesSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchFilesFailed\", function() { return fetchFilesFailed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchFiles\", function() { return searchFiles; });\n/* harmony import */ var _ActionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionsTypes */ \"./src/ActionsTypes.js\");\n\n\n/**\n * @returns {ACTION_FETCH_FILES_START}\n */\nconst fetchFilesStart = () => ({\n  type: _ActionsTypes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_FILES_START\"],\n});\n\nconst fetchFilesSuccess = (json) => ({\n  type: _ActionsTypes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_FILES_SUCCESS\"],\n  json,\n});\n\nconst fetchFilesFailed = (error) => ({\n  type: _ActionsTypes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_FILES_FAILED\"],\n  error,\n});\n\nconst searchFiles = (searchString = '') => (dispatch) => {\n  dispatch({ type: _ActionsTypes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_FILES_START\"], searchString });\n\n  const url = new URL('http://localhost:3000/api/repos/arcadia');\n  if (searchString) url.searchParams.append('search', searchString);\n\n  fetch(url)\n    .then((response) => {\n      if (!response.ok) {\n        throw new Error('Error fetching files');\n      } else {\n        return response.json();\n      }\n    })\n    .then((json) => dispatch(fetchFilesSuccess({ ...json, searchString })))\n    .catch((err) => dispatch(fetchFilesFailed(err)));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQWN0aW9uQ3JlYXRvcnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9uQ3JlYXRvcnMuanM/OTEzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGRVRDSF9GSUxFU19TVEFSVCwgRkVUQ0hfRklMRVNfU1VDQ0VTUywgRkVUQ0hfRklMRVNfRkFJTEVEIH0gZnJvbSAnLi9BY3Rpb25zVHlwZXMnO1xuXG4vKipcbiAqIEByZXR1cm5zIHtBQ1RJT05fRkVUQ0hfRklMRVNfU1RBUlR9XG4gKi9cbmV4cG9ydCBjb25zdCBmZXRjaEZpbGVzU3RhcnQgPSAoKSA9PiAoe1xuICB0eXBlOiBGRVRDSF9GSUxFU19TVEFSVCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hGaWxlc1N1Y2Nlc3MgPSAoanNvbikgPT4gKHtcbiAgdHlwZTogRkVUQ0hfRklMRVNfU1VDQ0VTUyxcbiAganNvbixcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hGaWxlc0ZhaWxlZCA9IChlcnJvcikgPT4gKHtcbiAgdHlwZTogRkVUQ0hfRklMRVNfRkFJTEVELFxuICBlcnJvcixcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoRmlsZXMgPSAoc2VhcmNoU3RyaW5nID0gJycpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX0ZJTEVTX1NUQVJULCBzZWFyY2hTdHJpbmcgfSk7XG5cbiAgY29uc3QgdXJsID0gbmV3IFVSTCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9yZXBvcy9hcmNhZGlhJyk7XG4gIGlmIChzZWFyY2hTdHJpbmcpIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdzZWFyY2gnLCBzZWFyY2hTdHJpbmcpO1xuXG4gIGZldGNoKHVybClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBmZXRjaGluZyBmaWxlcycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKChqc29uKSA9PiBkaXNwYXRjaChmZXRjaEZpbGVzU3VjY2Vzcyh7IC4uLmpzb24sIHNlYXJjaFN0cmluZyB9KSkpXG4gICAgLmNhdGNoKChlcnIpID0+IGRpc3BhdGNoKGZldGNoRmlsZXNGYWlsZWQoZXJyKSkpO1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ActionCreators.js\n");

/***/ }),

/***/ "./src/ActionsTypes.js":
/*!*****************************!*\
  !*** ./src/ActionsTypes.js ***!
  \*****************************/
/*! exports provided: FETCH_FILES_START, FETCH_FILES_SUCCESS, FETCH_FILES_FAILED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_FILES_START\", function() { return FETCH_FILES_START; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_FILES_SUCCESS\", function() { return FETCH_FILES_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_FILES_FAILED\", function() { return FETCH_FILES_FAILED; });\n/**\n * @typedef ACTION_FETCH_FILES_START\n * @type {object}\n * @property {string} type\n * @property {string} searchString\n */\nconst FETCH_FILES_START = 'FETCH_FILES_START';\n\nconst FETCH_FILES_SUCCESS = 'FETCH_FILES_SUCCESS';\n\nconst FETCH_FILES_FAILED = 'FETCH_FILES_FAILED';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQWN0aW9uc1R5cGVzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FjdGlvbnNUeXBlcy5qcz8yY2RjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYgQUNUSU9OX0ZFVENIX0ZJTEVTX1NUQVJUXG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzZWFyY2hTdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IEZFVENIX0ZJTEVTX1NUQVJUID0gJ0ZFVENIX0ZJTEVTX1NUQVJUJztcblxuZXhwb3J0IGNvbnN0IEZFVENIX0ZJTEVTX1NVQ0NFU1MgPSAnRkVUQ0hfRklMRVNfU1VDQ0VTUyc7XG5cbmV4cG9ydCBjb25zdCBGRVRDSF9GSUxFU19GQUlMRUQgPSAnRkVUQ0hfRklMRVNfRkFJTEVEJztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ActionsTypes.js\n");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _redux_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redux/Store */ \"./src/redux/Store.js\");\n/* harmony import */ var _redux_applyMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redux/applyMiddleware */ \"./src/redux/applyMiddleware.js\");\n/* harmony import */ var _redux_createStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux/createStore */ \"./src/redux/createStore.js\");\n/* harmony import */ var _redux_middleware_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/middleware/thunk */ \"./src/redux/middleware/thunk.js\");\n/* harmony import */ var _redux_middleware_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/middleware/logger */ \"./src/redux/middleware/logger.js\");\n/* harmony import */ var _components_RepoBrowser_RepoBrowserView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/RepoBrowser/RepoBrowserView */ \"./src/components/RepoBrowser/RepoBrowserView.js\");\n/* harmony import */ var _components_Search_SearchView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Search/SearchView */ \"./src/components/Search/SearchView.js\");\n/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rootReducer */ \"./src/rootReducer.js\");\n/* harmony import */ var _ActionCreators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ActionCreators */ \"./src/ActionCreators.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst KEY_CODES = {\n  ENTER: 13,\n};\n\n// TO-DO: middleware\n\n/**\n * App setup\n */\ndocument.addEventListener('DOMContentLoaded', () => {\n  const store = Object(_redux_createStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_rootReducer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], Object(_redux_applyMiddleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([_redux_middleware_thunk__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _redux_middleware_logger__WEBPACK_IMPORTED_MODULE_4__[\"default\"]]));\n  const repoBrowserView = new _components_RepoBrowser_RepoBrowserView__WEBPACK_IMPORTED_MODULE_5__[\"default\"](document.querySelector('.RepoBrowser'), store);\n  const searchView = new _components_Search_SearchView__WEBPACK_IMPORTED_MODULE_6__[\"default\"](document.querySelector('.Search'), store);\n\n  document.body.addEventListener('keypress', (event) => {\n    if (event.keyCode === KEY_CODES.ENTER) {\n      const { nextElementSibling } = event.target;\n      if (nextElementSibling && nextElementSibling.tagName === 'BUTTON') {\n        nextElementSibling.click();\n      }\n    }\n  });\n\n  store.dispatch(Object(_ActionCreators__WEBPACK_IMPORTED_MODULE_8__[\"searchFiles\"])());\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdG9yZSBmcm9tICcuL3JlZHV4L1N0b3JlJztcblxuaW1wb3J0IGFwcGx5TWlkZGxld2FyZSBmcm9tICcuL3JlZHV4L2FwcGx5TWlkZGxld2FyZSc7XG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi9yZWR1eC9jcmVhdGVTdG9yZSc7XG5cbmltcG9ydCB0aHVuayBmcm9tICcuL3JlZHV4L21pZGRsZXdhcmUvdGh1bmsnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuL3JlZHV4L21pZGRsZXdhcmUvbG9nZ2VyJztcblxuaW1wb3J0IFJlcG9Ccm93c2VyVmlldyBmcm9tICcuL2NvbXBvbmVudHMvUmVwb0Jyb3dzZXIvUmVwb0Jyb3dzZXJWaWV3JztcbmltcG9ydCBTZWFyY2hWaWV3IGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoVmlldyc7XG5cbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3Jvb3RSZWR1Y2VyJztcbmltcG9ydCB7IHNlYXJjaEZpbGVzIH0gZnJvbSAnLi9BY3Rpb25DcmVhdG9ycyc7XG5cbmNvbnN0IEtFWV9DT0RFUyA9IHtcbiAgRU5URVI6IDEzLFxufTtcblxuLy8gVE8tRE86IG1pZGRsZXdhcmVcblxuLyoqXG4gKiBBcHAgc2V0dXBcbiAqL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKFt0aHVuaywgbG9nZ2VyXSkpO1xuICBjb25zdCByZXBvQnJvd3NlclZpZXcgPSBuZXcgUmVwb0Jyb3dzZXJWaWV3KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5SZXBvQnJvd3NlcicpLCBzdG9yZSk7XG4gIGNvbnN0IHNlYXJjaFZpZXcgPSBuZXcgU2VhcmNoVmlldyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuU2VhcmNoJyksIHN0b3JlKTtcblxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtFWV9DT0RFUy5FTlRFUikge1xuICAgICAgY29uc3QgeyBuZXh0RWxlbWVudFNpYmxpbmcgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGlmIChuZXh0RWxlbWVudFNpYmxpbmcgJiYgbmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgICAgIG5leHRFbGVtZW50U2libGluZy5jbGljaygpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgc3RvcmUuZGlzcGF0Y2goc2VhcmNoRmlsZXMoKSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/components/RepoBrowser/RepoBrowserView.js":
/*!*******************************************************!*\
  !*** ./src/components/RepoBrowser/RepoBrowserView.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RepoBrowserView; });\n/* harmony import */ var _redux_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../redux/View */ \"./src/redux/View.js\");\n/* eslint-disable class-methods-use-this */\n\n\nclass RepoBrowserView extends _redux_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  render({ files, commits }) {\n    const fileList = files.map((file) => {\n      const commit = commits[file.commit];\n      return `\n      <div class=\"Table-Row Table-Row_padding_h Table-Row_padding_v Table-Row_border_bottom\">\n        <div class=\"Table-Cell RepoBrowser-File\">\n            <a href=\"#\" class=\"File\">\n                <span class=\"Icon\">\n                    <img src=\"../assets/${file.type}.svg\">                                      \n                </span>\n                <span>${file.name}</span>\n            </a>\n        </div>\n        <div class=\"Table-Cell RepoBrowser-Commit\">\n            <a href=\"#\" class=\"Link\">${file.commit}</a>\n        </div>\n        <div class=\"Table-Cell RepoBrowser-CommitMessage\">\n            ${commit.message}\n        </div>\n        <div class=\"Table-Cell RepoBrowser-Committer\">\n            <a href=\"#\" class=\"Name\">${commit.author}</a>\n        </div>\n        <div class=\"Table-Cell Table-Cell_text_right RepoBrowser-Updated\">\n            ${commit.time}\n        </div>\n        <div class=\"Table-Cell Goto\">\n            <svg width=\"10\" height=\"19\" viewBox=\"0 0 10 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M0.9375 1.02344L0.15625 1.76562C0 1.96094 0 2.27344 0.15625 2.42969L7.22656 9.5L0.15625 16.6094C0 16.7656 0 17.0781 0.15625 17.2734L0.9375 18.0156C1.13281 18.2109 1.40625 18.2109 1.60156 18.0156L9.80469 9.85156C9.96094 9.65625 9.96094 9.38281 9.80469 9.1875L1.60156 1.02344C1.40625 0.828125 1.13281 0.828125 0.9375 1.02344Z\" fill=\"#E5E5E5\"/>\n            </svg>                                \n        </div>\n      </div>\n      `;\n    }).join('');\n    return `\n      <div class=\"Table RepoBrowser Page-Block\">\n        <div class=\"Table-Header Table-Header_padding_h Table-Header_padding_v Table-Row RepoBrowser-Header\">\n            <div class=\"Table-Cell RepoBrowser-File\">Name</div>\n            <div class=\"Table-Cell RepoBrowser-Commit\">Last commit</div>\n            <div class=\"Table-Cell RepoBrowser-CommitMessage\">Commit message</div>\n            <div class=\"Table-Cell RepoBrowser-Committer\">Committer</div>\n            <div class=\"Table-Cell Table-Cell_text_right RepoBrowser-Updated\">Updated</div>\n        </div>\n        ${fileList}\n      </div>\n    `;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXBvQnJvd3Nlci9SZXBvQnJvd3NlclZpZXcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZXBvQnJvd3Nlci9SZXBvQnJvd3NlclZpZXcuanM/ZjNmNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgVmlldyBmcm9tICcuLi8uLi9yZWR1eC9WaWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb0Jyb3dzZXJWaWV3IGV4dGVuZHMgVmlldyB7XG4gIHJlbmRlcih7IGZpbGVzLCBjb21taXRzIH0pIHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IGZpbGVzLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgY29tbWl0ID0gY29tbWl0c1tmaWxlLmNvbW1pdF07XG4gICAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz1cIlRhYmxlLVJvdyBUYWJsZS1Sb3dfcGFkZGluZ19oIFRhYmxlLVJvd19wYWRkaW5nX3YgVGFibGUtUm93X2JvcmRlcl9ib3R0b21cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIlRhYmxlLUNlbGwgUmVwb0Jyb3dzZXItRmlsZVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIkZpbGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIkljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvJHtmaWxlLnR5cGV9LnN2Z1wiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPiR7ZmlsZS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJUYWJsZS1DZWxsIFJlcG9Ccm93c2VyLUNvbW1pdFwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIkxpbmtcIj4ke2ZpbGUuY29tbWl0fTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJUYWJsZS1DZWxsIFJlcG9Ccm93c2VyLUNvbW1pdE1lc3NhZ2VcIj5cbiAgICAgICAgICAgICR7Y29tbWl0Lm1lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiVGFibGUtQ2VsbCBSZXBvQnJvd3Nlci1Db21taXR0ZXJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJOYW1lXCI+JHtjb21taXQuYXV0aG9yfTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJUYWJsZS1DZWxsIFRhYmxlLUNlbGxfdGV4dF9yaWdodCBSZXBvQnJvd3Nlci1VcGRhdGVkXCI+XG4gICAgICAgICAgICAke2NvbW1pdC50aW1lfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIlRhYmxlLUNlbGwgR290b1wiPlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTlcIiB2aWV3Qm94PVwiMCAwIDEwIDE5XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wLjkzNzUgMS4wMjM0NEwwLjE1NjI1IDEuNzY1NjJDMCAxLjk2MDk0IDAgMi4yNzM0NCAwLjE1NjI1IDIuNDI5NjlMNy4yMjY1NiA5LjVMMC4xNTYyNSAxNi42MDk0QzAgMTYuNzY1NiAwIDE3LjA3ODEgMC4xNTYyNSAxNy4yNzM0TDAuOTM3NSAxOC4wMTU2QzEuMTMyODEgMTguMjEwOSAxLjQwNjI1IDE4LjIxMDkgMS42MDE1NiAxOC4wMTU2TDkuODA0NjkgOS44NTE1NkM5Ljk2MDk0IDkuNjU2MjUgOS45NjA5NCA5LjM4MjgxIDkuODA0NjkgOS4xODc1TDEuNjAxNTYgMS4wMjM0NEMxLjQwNjI1IDAuODI4MTI1IDEuMTMyODEgMC44MjgxMjUgMC45Mzc1IDEuMDIzNDRaXCIgZmlsbD1cIiNFNUU1RTVcIi8+XG4gICAgICAgICAgICA8L3N2Zz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9KS5qb2luKCcnKTtcbiAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz1cIlRhYmxlIFJlcG9Ccm93c2VyIFBhZ2UtQmxvY2tcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIlRhYmxlLUhlYWRlciBUYWJsZS1IZWFkZXJfcGFkZGluZ19oIFRhYmxlLUhlYWRlcl9wYWRkaW5nX3YgVGFibGUtUm93IFJlcG9Ccm93c2VyLUhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRhYmxlLUNlbGwgUmVwb0Jyb3dzZXItRmlsZVwiPk5hbWU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJUYWJsZS1DZWxsIFJlcG9Ccm93c2VyLUNvbW1pdFwiPkxhc3QgY29tbWl0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiVGFibGUtQ2VsbCBSZXBvQnJvd3Nlci1Db21taXRNZXNzYWdlXCI+Q29tbWl0IG1lc3NhZ2U8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJUYWJsZS1DZWxsIFJlcG9Ccm93c2VyLUNvbW1pdHRlclwiPkNvbW1pdHRlcjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRhYmxlLUNlbGwgVGFibGUtQ2VsbF90ZXh0X3JpZ2h0IFJlcG9Ccm93c2VyLVVwZGF0ZWRcIj5VcGRhdGVkPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke2ZpbGVMaXN0fVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/RepoBrowser/RepoBrowserView.js\n");

/***/ }),

/***/ "./src/components/Search/SearchView.js":
/*!*********************************************!*\
  !*** ./src/components/Search/SearchView.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SearchView; });\n/* harmony import */ var _redux_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../redux/View */ \"./src/redux/View.js\");\n/* harmony import */ var _ActionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ActionCreators */ \"./src/ActionCreators.js\");\n/* eslint-disable class-methods-use-this */\n\n\n\n\nclass SearchView extends _redux_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  /**\n   * Class constructor\n   * @param {Node} element\n   * @param {Store} store\n   */\n  constructor(element, store) {\n    super(element, store);\n\n    this.onSearchBtnClick = this.onSearchBtnClick.bind(this);\n\n    // Handle events in the root element for this view because of re-renders\n    this.el.addEventListener('click', this.onSearchBtnClick);\n  }\n\n  destroy() {\n    super.destroy();\n    this.el.removeEventListener('click', this.onSearchBtnClick);\n  }\n\n  /**\n   * Handles Search button click\n   * @param {Event} event\n   */\n  onSearchBtnClick(event) {\n    if (event.target.tagName === 'BUTTON') {\n      this.store.dispatch(Object(_ActionCreators__WEBPACK_IMPORTED_MODULE_1__[\"searchFiles\"])(this.el.querySelector('input').value));\n    }\n  }\n\n  render(state) {\n    return `\n        <input type=\"text\" class=\"Search-Input TextInput\" placeholder=\"Search files...\" value=${state.searchString}>\n        <button class=\"Search-Button Button Button_search\">Search</button>`;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoVmlldy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaC9TZWFyY2hWaWV3LmpzP2Y1YjkiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IFZpZXcgZnJvbSAnLi4vLi4vcmVkdXgvVmlldyc7XG5cbmltcG9ydCB7IHNlYXJjaEZpbGVzIH0gZnJvbSAnLi4vLi4vQWN0aW9uQ3JlYXRvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hWaWV3IGV4dGVuZHMgVmlldyB7XG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge05vZGV9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtTdG9yZX0gc3RvcmVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHN0b3JlKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgc3RvcmUpO1xuXG4gICAgdGhpcy5vblNlYXJjaEJ0bkNsaWNrID0gdGhpcy5vblNlYXJjaEJ0bkNsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAvLyBIYW5kbGUgZXZlbnRzIGluIHRoZSByb290IGVsZW1lbnQgZm9yIHRoaXMgdmlldyBiZWNhdXNlIG9mIHJlLXJlbmRlcnNcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNlYXJjaEJ0bkNsaWNrKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VhcmNoQnRuQ2xpY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgU2VhcmNoIGJ1dHRvbiBjbGlja1xuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgKi9cbiAgb25TZWFyY2hCdG5DbGljayhldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goc2VhcmNoRmlsZXModGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKHN0YXRlKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJTZWFyY2gtSW5wdXQgVGV4dElucHV0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZmlsZXMuLi5cIiB2YWx1ZT0ke3N0YXRlLnNlYXJjaFN0cmluZ30+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJTZWFyY2gtQnV0dG9uIEJ1dHRvbiBCdXR0b25fc2VhcmNoXCI+U2VhcmNoPC9idXR0b24+YDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Search/SearchView.js\n");

/***/ }),

/***/ "./src/redux/Store.js":
/*!****************************!*\
  !*** ./src/redux/Store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Store; });\nclass Store {\n  constructor(reducer) {\n    this.reducer = reducer;\n    this.listeners = [];\n    this.state = undefined;\n\n    this.dispatch = this.dispatch.bind(this);\n\n    this.dispatch({\n      type: '@@init',\n    });\n  }\n\n  /**\n   * Return current store state\n   */\n  getState() {\n    return this.state;\n  }\n\n  /**\n   * Debug method\n   */\n  getListeners() {\n    return this.listeners;\n  }\n\n  /**\n   * Subscribe to store updates\n   * @param {Function} callback\n   */\n  subscribe(callback) {\n    this.listeners.push(callback);\n    return () => {\n      const idx = this.listeners.indexOf(callback);\n      this.listeners.splice(idx, 1);\n    };\n  }\n\n  /**\n   * Notify subscribers on state change\n   */\n  runListeners() {\n    this.listeners.forEach((callback) => {\n      callback(this.state);\n    });\n  }\n\n  /**\n   * Dispatch action to store\n   * @param {Object} action\n   */\n  dispatch(action) {\n    this.state = this.reducer(action, this.state);\n    this.runListeners();\n    return action;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvU3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvU3RvcmUuanM/NGQyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKHJlZHVjZXIpIHtcbiAgICB0aGlzLnJlZHVjZXIgPSByZWR1Y2VyO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5zdGF0ZSA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuZGlzcGF0Y2ggPSB0aGlzLmRpc3BhdGNoLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdAQGluaXQnLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBjdXJyZW50IHN0b3JlIHN0YXRlXG4gICAqL1xuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWJ1ZyBtZXRob2RcbiAgICovXG4gIGdldExpc3RlbmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lcnM7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHN0b3JlIHVwZGF0ZXNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICovXG4gIHN1YnNjcmliZShjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpZHgsIDEpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTm90aWZ5IHN1YnNjcmliZXJzIG9uIHN0YXRlIGNoYW5nZVxuICAgKi9cbiAgcnVuTGlzdGVuZXJzKCkge1xuICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICBjYWxsYmFjayh0aGlzLnN0YXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCBhY3Rpb24gdG8gc3RvcmVcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxuICAgKi9cbiAgZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMucmVkdWNlcihhY3Rpb24sIHRoaXMuc3RhdGUpO1xuICAgIHRoaXMucnVuTGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/Store.js\n");

/***/ }),

/***/ "./src/redux/View.js":
/*!***************************!*\
  !*** ./src/redux/View.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\nclass View {\n  constructor(element, store) {\n    this.el = element;\n    this.store = store;\n    this.unsibscribe = store.subscribe((newState) => this.update(newState));\n    this.update(store.getState());\n  }\n\n  destroy() {\n    this.unsibscribe();\n    this.el.innerHTML = '';\n  }\n\n  update(state) {\n    this.el.innerHTML = this.render(state);\n  }\n\n  render() {\n    throw new Error('Method render not implemented');\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvVmlldy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWR1eC9WaWV3LmpzP2EwNWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHN0b3JlKSB7XG4gICAgdGhpcy5lbCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIHRoaXMudW5zaWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKG5ld1N0YXRlKSA9PiB0aGlzLnVwZGF0ZShuZXdTdGF0ZSkpO1xuICAgIHRoaXMudXBkYXRlKHN0b3JlLmdldFN0YXRlKCkpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnVuc2lic2NyaWJlKCk7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIHVwZGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5yZW5kZXIoc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIHJlbmRlciBub3QgaW1wbGVtZW50ZWQnKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/View.js\n");

/***/ }),

/***/ "./src/redux/applyMiddleware.js":
/*!**************************************!*\
  !*** ./src/redux/applyMiddleware.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst applyMiddleware = (middleware) => (store) => {\n  if (typeof middleware !== 'function' && !Array.isArray(middleware)) {\n    throw new TypeError('middleware should be either a function or an array of functions');\n  }\n\n  let { dispatch } = store;\n\n  // Ordering is like in function composition: a • b • c = c(b(a(x)))\n  for (let i = middleware.length - 1; i >= 0; i--) {\n    dispatch = middleware[i](store)(dispatch);\n  }\n\n  store.dispatch = dispatch;\n\n  return store;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (applyMiddleware);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvYXBwbHlNaWRkbGV3YXJlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FwcGx5TWlkZGxld2FyZS5qcz81YjgzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwcGx5TWlkZGxld2FyZSA9IChtaWRkbGV3YXJlKSA9PiAoc3RvcmUpID0+IHtcbiAgaWYgKHR5cGVvZiBtaWRkbGV3YXJlICE9PSAnZnVuY3Rpb24nICYmICFBcnJheS5pc0FycmF5KG1pZGRsZXdhcmUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbWlkZGxld2FyZSBzaG91bGQgYmUgZWl0aGVyIGEgZnVuY3Rpb24gb3IgYW4gYXJyYXkgb2YgZnVuY3Rpb25zJyk7XG4gIH1cblxuICBsZXQgeyBkaXNwYXRjaCB9ID0gc3RvcmU7XG5cbiAgLy8gT3JkZXJpbmcgaXMgbGlrZSBpbiBmdW5jdGlvbiBjb21wb3NpdGlvbjogYSDigKIgYiDigKIgYyA9IGMoYihhKHgpKSlcbiAgZm9yIChsZXQgaSA9IG1pZGRsZXdhcmUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBkaXNwYXRjaCA9IG1pZGRsZXdhcmVbaV0oc3RvcmUpKGRpc3BhdGNoKTtcbiAgfVxuXG4gIHN0b3JlLmRpc3BhdGNoID0gZGlzcGF0Y2g7XG5cbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwbHlNaWRkbGV3YXJlO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/applyMiddleware.js\n");

/***/ }),

/***/ "./src/redux/createStore.js":
/*!**********************************!*\
  !*** ./src/redux/createStore.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _redux_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redux/Store */ \"./src/redux/Store.js\");\n\n\n/**\n * Creates store with given reducer\n * Ideally, support state object as argument to support state hydration\n * @param {Function} reducer\n * @param {Function} enhancer\n */\nconst createStore = (reducer, enhancer) => {\n  let store = new _redux_Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"](reducer);\n\n  if (typeof enhancer === 'function') {\n    store = enhancer(store);\n  }\n\n  return store;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createStore);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvY3JlYXRlU3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvY3JlYXRlU3RvcmUuanM/MjJmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RvcmUgZnJvbSAnLi4vcmVkdXgvU3RvcmUnO1xuXG4vKipcbiAqIENyZWF0ZXMgc3RvcmUgd2l0aCBnaXZlbiByZWR1Y2VyXG4gKiBJZGVhbGx5LCBzdXBwb3J0IHN0YXRlIG9iamVjdCBhcyBhcmd1bWVudCB0byBzdXBwb3J0IHN0YXRlIGh5ZHJhdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZW5oYW5jZXJcbiAqL1xuY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlciwgZW5oYW5jZXIpID0+IHtcbiAgbGV0IHN0b3JlID0gbmV3IFN0b3JlKHJlZHVjZXIpO1xuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzdG9yZSA9IGVuaGFuY2VyKHN0b3JlKTtcbiAgfVxuXG4gIHJldHVybiBzdG9yZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/createStore.js\n");

/***/ }),

/***/ "./src/redux/middleware/logger.js":
/*!****************************************!*\
  !*** ./src/redux/middleware/logger.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst logger = (store) => (next) => (action) => {\n  console.log('Dispatching action', action);\n  const result = next(action);\n  console.log('Action dispatched', action);\n  return result;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (logger);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvbWlkZGxld2FyZS9sb2dnZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvbWlkZGxld2FyZS9sb2dnZXIuanM/Mzk4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2dnZXIgPSAoc3RvcmUpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdEaXNwYXRjaGluZyBhY3Rpb24nLCBhY3Rpb24pO1xuICBjb25zdCByZXN1bHQgPSBuZXh0KGFjdGlvbik7XG4gIGNvbnNvbGUubG9nKCdBY3Rpb24gZGlzcGF0Y2hlZCcsIGFjdGlvbik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/middleware/logger.js\n");

/***/ }),

/***/ "./src/redux/middleware/thunk.js":
/*!***************************************!*\
  !*** ./src/redux/middleware/thunk.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst thunk = (store) => (next) => (action) => {\n  console.log('Thunk middleware');\n  if (typeof action === 'function') {\n    console.log('Executing function in thunk');\n    return action(next, store.getState);\n  }\n  console.log('Thunk passing action to the next middleware');\n  return next(action);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (thunk);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvbWlkZGxld2FyZS90aHVuay5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWR1eC9taWRkbGV3YXJlL3RodW5rLmpzP2E1OWEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGh1bmsgPSAoc3RvcmUpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdUaHVuayBtaWRkbGV3YXJlJyk7XG4gIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5sb2coJ0V4ZWN1dGluZyBmdW5jdGlvbiBpbiB0aHVuaycpO1xuICAgIHJldHVybiBhY3Rpb24obmV4dCwgc3RvcmUuZ2V0U3RhdGUpO1xuICB9XG4gIGNvbnNvbGUubG9nKCdUaHVuayBwYXNzaW5nIGFjdGlvbiB0byB0aGUgbmV4dCBtaWRkbGV3YXJlJyk7XG4gIHJldHVybiBuZXh0KGFjdGlvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aHVuaztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/middleware/thunk.js\n");

/***/ }),

/***/ "./src/rootReducer.js":
/*!****************************!*\
  !*** ./src/rootReducer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ActionsTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionsTypes */ \"./src/ActionsTypes.js\");\n\n\n\n\nconst defaultState = {\n  files: [\n  ],\n  commits: {\n  },\n  searchString: '',\n};\n\nconst rootReducer = (action, state) => {\n  switch (action.type) {\n    case '@@init':\n      return defaultState;\n    case _ActionsTypes__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_FILES_START\"]:\n      return { ...Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"cloneDeep\"])(state), searchString: action.searchString };\n    case _ActionsTypes__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_FILES_SUCCESS\"]: {\n      const newState = {\n        ...action.json,\n      };\n      return newState;\n    }\n    case _ActionsTypes__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_FILES_FAILED\"]:\n      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"cloneDeep\"])(state);\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm9vdFJlZHVjZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm9vdFJlZHVjZXIuanM/MzJhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBGRVRDSF9GSUxFU19TVEFSVCwgRkVUQ0hfRklMRVNfU1VDQ0VTUywgRkVUQ0hfRklMRVNfRkFJTEVEIH0gZnJvbSAnLi9BY3Rpb25zVHlwZXMnO1xuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIGZpbGVzOiBbXG4gIF0sXG4gIGNvbW1pdHM6IHtcbiAgfSxcbiAgc2VhcmNoU3RyaW5nOiAnJyxcbn07XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gKGFjdGlvbiwgc3RhdGUpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0BAaW5pdCc6XG4gICAgICByZXR1cm4gZGVmYXVsdFN0YXRlO1xuICAgIGNhc2UgRkVUQ0hfRklMRVNfU1RBUlQ6XG4gICAgICByZXR1cm4geyAuLi5jbG9uZURlZXAoc3RhdGUpLCBzZWFyY2hTdHJpbmc6IGFjdGlvbi5zZWFyY2hTdHJpbmcgfTtcbiAgICBjYXNlIEZFVENIX0ZJTEVTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAuLi5hY3Rpb24uanNvbixcbiAgICAgIH07XG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxuICAgIGNhc2UgRkVUQ0hfRklMRVNfRkFJTEVEOlxuICAgICAgcmV0dXJuIGNsb25lRGVlcChzdGF0ZSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/rootReducer.js\n");

/***/ })

/******/ });