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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _redux_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redux/Store */ \"./src/redux/Store.js\");\n/* harmony import */ var _components_RepoBrowser_RepoBrowserReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/RepoBrowser/RepoBrowserReducer */ \"./src/components/RepoBrowser/RepoBrowserReducer.js\");\n/* harmony import */ var _components_RepoBrowser_RepoBrowserView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/RepoBrowser/RepoBrowserView */ \"./src/components/RepoBrowser/RepoBrowserView.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const store = new _redux_Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_components_RepoBrowser_RepoBrowserReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  const repoBrowserView = new _components_RepoBrowser_RepoBrowserView__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.querySelector('.RepoBrowserView'), store);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdG9yZSBmcm9tICcuL3JlZHV4L1N0b3JlJztcblxuaW1wb3J0IHJlcG9Ccm93c2VyUmVkdWNlciBmcm9tICcuL2NvbXBvbmVudHMvUmVwb0Jyb3dzZXIvUmVwb0Jyb3dzZXJSZWR1Y2VyJztcbmltcG9ydCBSZXBvQnJvd3NlclZpZXcgZnJvbSAnLi9jb21wb25lbnRzL1JlcG9Ccm93c2VyL1JlcG9Ccm93c2VyVmlldyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKHJlcG9Ccm93c2VyUmVkdWNlcik7XG4gIGNvbnN0IHJlcG9Ccm93c2VyVmlldyA9IG5ldyBSZXBvQnJvd3NlclZpZXcoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlJlcG9Ccm93c2VyVmlldycpLCBzdG9yZSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/components/RepoBrowser/RepoBrowserReducer.js":
/*!**********************************************************!*\
  !*** ./src/components/RepoBrowser/RepoBrowserReducer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst defaultState = {\n  files: [\n    {\n      id: 0,\n      name: 'api',\n      type: 'folder',\n      commit: 'd53dsv',\n    },\n    {\n      id: 1,\n      name: 'ci',\n      type: 'folder',\n      commit: 'c53dsv',\n    },\n    {\n      id: 2,\n      name: 'contrib',\n      type: 'folder',\n      commit: 's53dsv',\n    },\n    {\n      id: 3,\n      name: 'http',\n      type: 'folder',\n      commit: 'h5jdsv',\n    },\n    {\n      id: 4,\n      name: 'lib',\n      type: 'folder',\n      commit: 'f5jdsv',\n    },\n    {\n      id: 5,\n      name: 'local',\n      type: 'folder',\n      commit: 'k5jdsv',\n    },\n    {\n      id: 6,\n      name: 'packages',\n      type: 'folder',\n      commit: 'a5jdsv',\n    },\n    {\n      id: 7,\n      name: 'robots',\n      type: 'folder',\n      commit: 'l5jdsv',\n    },\n    {\n      id: 8,\n      name: 'server',\n      type: 'folder',\n      commit: 'j5jdsv',\n    },\n    {\n      id: 9,\n      name: 'ut',\n      type: 'folder',\n      commit: '5jdsvk',\n    },\n    {\n      id: 10,\n      name: 'README.md',\n      type: 'text',\n      commit: 'h5jdsl',\n    },\n    {\n      id: 11,\n      name: 'ya.make',\n      type: 'code',\n      commit: 'k5jdsv',\n    },\n  ],\n  commits: {\n    d53dsv: {\n      hash: 'd53dsv',\n      message: '[vcs] move http to arc',\n      author: 'noxoomo',\n      time: '4 s ago',\n    },\n    c53dsv: {\n      hash: 'c53dsv',\n      message: '[vcs] test for empty commit message',\n      author: 'nikitxskv',\n      time: '1 min ago',\n    },\n    s53dsv: {\n      hash: 's53dsv',\n      message: '[vcs] change owner to g:arc',\n      author: 'nalpp',\n      time: '16:25',\n    },\n    h5jdsv: {\n      hash: 'h5jdsv',\n      message: '[vcs] move http to arc',\n      author: 'somov',\n      time: 'Yesterday, 14:50',\n    },\n    f5jdsv: {\n      hash: 'f5jdsv',\n      message: 'ARCADIA-771: append /trunk/arcadia/',\n      author: 'deshevoy',\n      time: 'Jan 11, 12:01',\n    },\n    k5jdsv: {\n      hash: 'k5jdsv',\n      message: '[vcs] move http to arc',\n      author: 'mvel',\n      time: 'Dec 29, 2017',\n    },\n    a5jdsv: {\n      hash: 'a5jdsv',\n      message: '[vcs] VCS-803: packages for services',\n      author: 'levanov',\n      time: 'Jan 1, 12:01',\n    },\n    l5jdsv: {\n      hash: 'l5jdsv',\n      message: 'ARCADIA-771: convert string to json object',\n      author: 'torkve',\n      time: 'Dec 29, 2017',\n    },\n    j5jdsv: {\n      hash: 'j5jdsv',\n      message: '[vcs] get list of refs',\n      author: 'spreis',\n      time: 'Dec 29, 2017',\n    },\n    '5jdsvk': {\n      hash: '5jdsvk',\n      message: '[vsc] store merge conflicts',\n      author: 'annaveronika',\n      time: 'Dec 29, 2017',\n    },\n    h5jdsl: {\n      hash: 'h5jdsl',\n      message: '[vcs] add readme',\n      author: 'pg',\n      time: 'Dec 29, 2017',\n    },\n  },\n  shownFiles: Array.from(Array(12).keys()),\n};\n\nconst repoBrowserReducer = (action, state = defaultState) => {\n  console.log('repoBrowserReducer called for action', action);\n\n  switch (action.type) {\n    case '@@init':\n      console.log('Setting default state', defaultState);\n      return defaultState;\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (repoBrowserReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXBvQnJvd3Nlci9SZXBvQnJvd3NlclJlZHVjZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZXBvQnJvd3Nlci9SZXBvQnJvd3NlclJlZHVjZXIuanM/YWVhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIGZpbGVzOiBbXG4gICAge1xuICAgICAgaWQ6IDAsXG4gICAgICBuYW1lOiAnYXBpJyxcbiAgICAgIHR5cGU6ICdmb2xkZXInLFxuICAgICAgY29tbWl0OiAnZDUzZHN2JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ2NpJyxcbiAgICAgIHR5cGU6ICdmb2xkZXInLFxuICAgICAgY29tbWl0OiAnYzUzZHN2JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgbmFtZTogJ2NvbnRyaWInLFxuICAgICAgdHlwZTogJ2ZvbGRlcicsXG4gICAgICBjb21taXQ6ICdzNTNkc3YnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBuYW1lOiAnaHR0cCcsXG4gICAgICB0eXBlOiAnZm9sZGVyJyxcbiAgICAgIGNvbW1pdDogJ2g1amRzdicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIG5hbWU6ICdsaWInLFxuICAgICAgdHlwZTogJ2ZvbGRlcicsXG4gICAgICBjb21taXQ6ICdmNWpkc3YnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDUsXG4gICAgICBuYW1lOiAnbG9jYWwnLFxuICAgICAgdHlwZTogJ2ZvbGRlcicsXG4gICAgICBjb21taXQ6ICdrNWpkc3YnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDYsXG4gICAgICBuYW1lOiAncGFja2FnZXMnLFxuICAgICAgdHlwZTogJ2ZvbGRlcicsXG4gICAgICBjb21taXQ6ICdhNWpkc3YnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDcsXG4gICAgICBuYW1lOiAncm9ib3RzJyxcbiAgICAgIHR5cGU6ICdmb2xkZXInLFxuICAgICAgY29tbWl0OiAnbDVqZHN2JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA4LFxuICAgICAgbmFtZTogJ3NlcnZlcicsXG4gICAgICB0eXBlOiAnZm9sZGVyJyxcbiAgICAgIGNvbW1pdDogJ2o1amRzdicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogOSxcbiAgICAgIG5hbWU6ICd1dCcsXG4gICAgICB0eXBlOiAnZm9sZGVyJyxcbiAgICAgIGNvbW1pdDogJzVqZHN2aycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTAsXG4gICAgICBuYW1lOiAnUkVBRE1FLm1kJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGNvbW1pdDogJ2g1amRzbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTEsXG4gICAgICBuYW1lOiAneWEubWFrZScsXG4gICAgICB0eXBlOiAnY29kZScsXG4gICAgICBjb21taXQ6ICdrNWpkc3YnLFxuICAgIH0sXG4gIF0sXG4gIGNvbW1pdHM6IHtcbiAgICBkNTNkc3Y6IHtcbiAgICAgIGhhc2g6ICdkNTNkc3YnLFxuICAgICAgbWVzc2FnZTogJ1t2Y3NdIG1vdmUgaHR0cCB0byBhcmMnLFxuICAgICAgYXV0aG9yOiAnbm94b29tbycsXG4gICAgICB0aW1lOiAnNCBzIGFnbycsXG4gICAgfSxcbiAgICBjNTNkc3Y6IHtcbiAgICAgIGhhc2g6ICdjNTNkc3YnLFxuICAgICAgbWVzc2FnZTogJ1t2Y3NdIHRlc3QgZm9yIGVtcHR5IGNvbW1pdCBtZXNzYWdlJyxcbiAgICAgIGF1dGhvcjogJ25pa2l0eHNrdicsXG4gICAgICB0aW1lOiAnMSBtaW4gYWdvJyxcbiAgICB9LFxuICAgIHM1M2Rzdjoge1xuICAgICAgaGFzaDogJ3M1M2RzdicsXG4gICAgICBtZXNzYWdlOiAnW3Zjc10gY2hhbmdlIG93bmVyIHRvIGc6YXJjJyxcbiAgICAgIGF1dGhvcjogJ25hbHBwJyxcbiAgICAgIHRpbWU6ICcxNjoyNScsXG4gICAgfSxcbiAgICBoNWpkc3Y6IHtcbiAgICAgIGhhc2g6ICdoNWpkc3YnLFxuICAgICAgbWVzc2FnZTogJ1t2Y3NdIG1vdmUgaHR0cCB0byBhcmMnLFxuICAgICAgYXV0aG9yOiAnc29tb3YnLFxuICAgICAgdGltZTogJ1llc3RlcmRheSwgMTQ6NTAnLFxuICAgIH0sXG4gICAgZjVqZHN2OiB7XG4gICAgICBoYXNoOiAnZjVqZHN2JyxcbiAgICAgIG1lc3NhZ2U6ICdBUkNBRElBLTc3MTogYXBwZW5kIC90cnVuay9hcmNhZGlhLycsXG4gICAgICBhdXRob3I6ICdkZXNoZXZveScsXG4gICAgICB0aW1lOiAnSmFuIDExLCAxMjowMScsXG4gICAgfSxcbiAgICBrNWpkc3Y6IHtcbiAgICAgIGhhc2g6ICdrNWpkc3YnLFxuICAgICAgbWVzc2FnZTogJ1t2Y3NdIG1vdmUgaHR0cCB0byBhcmMnLFxuICAgICAgYXV0aG9yOiAnbXZlbCcsXG4gICAgICB0aW1lOiAnRGVjIDI5LCAyMDE3JyxcbiAgICB9LFxuICAgIGE1amRzdjoge1xuICAgICAgaGFzaDogJ2E1amRzdicsXG4gICAgICBtZXNzYWdlOiAnW3Zjc10gVkNTLTgwMzogcGFja2FnZXMgZm9yIHNlcnZpY2VzJyxcbiAgICAgIGF1dGhvcjogJ2xldmFub3YnLFxuICAgICAgdGltZTogJ0phbiAxLCAxMjowMScsXG4gICAgfSxcbiAgICBsNWpkc3Y6IHtcbiAgICAgIGhhc2g6ICdsNWpkc3YnLFxuICAgICAgbWVzc2FnZTogJ0FSQ0FESUEtNzcxOiBjb252ZXJ0IHN0cmluZyB0byBqc29uIG9iamVjdCcsXG4gICAgICBhdXRob3I6ICd0b3JrdmUnLFxuICAgICAgdGltZTogJ0RlYyAyOSwgMjAxNycsXG4gICAgfSxcbiAgICBqNWpkc3Y6IHtcbiAgICAgIGhhc2g6ICdqNWpkc3YnLFxuICAgICAgbWVzc2FnZTogJ1t2Y3NdIGdldCBsaXN0IG9mIHJlZnMnLFxuICAgICAgYXV0aG9yOiAnc3ByZWlzJyxcbiAgICAgIHRpbWU6ICdEZWMgMjksIDIwMTcnLFxuICAgIH0sXG4gICAgJzVqZHN2ayc6IHtcbiAgICAgIGhhc2g6ICc1amRzdmsnLFxuICAgICAgbWVzc2FnZTogJ1t2c2NdIHN0b3JlIG1lcmdlIGNvbmZsaWN0cycsXG4gICAgICBhdXRob3I6ICdhbm5hdmVyb25pa2EnLFxuICAgICAgdGltZTogJ0RlYyAyOSwgMjAxNycsXG4gICAgfSxcbiAgICBoNWpkc2w6IHtcbiAgICAgIGhhc2g6ICdoNWpkc2wnLFxuICAgICAgbWVzc2FnZTogJ1t2Y3NdIGFkZCByZWFkbWUnLFxuICAgICAgYXV0aG9yOiAncGcnLFxuICAgICAgdGltZTogJ0RlYyAyOSwgMjAxNycsXG4gICAgfSxcbiAgfSxcbiAgc2hvd25GaWxlczogQXJyYXkuZnJvbShBcnJheSgxMikua2V5cygpKSxcbn07XG5cbmNvbnN0IHJlcG9Ccm93c2VyUmVkdWNlciA9IChhY3Rpb24sIHN0YXRlID0gZGVmYXVsdFN0YXRlKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdyZXBvQnJvd3NlclJlZHVjZXIgY2FsbGVkIGZvciBhY3Rpb24nLCBhY3Rpb24pO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdAQGluaXQnOlxuICAgICAgY29uc29sZS5sb2coJ1NldHRpbmcgZGVmYXVsdCBzdGF0ZScsIGRlZmF1bHRTdGF0ZSk7XG4gICAgICByZXR1cm4gZGVmYXVsdFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlcG9Ccm93c2VyUmVkdWNlcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/RepoBrowser/RepoBrowserReducer.js\n");

/***/ }),

/***/ "./src/components/RepoBrowser/RepoBrowserView.js":
/*!*******************************************************!*\
  !*** ./src/components/RepoBrowser/RepoBrowserView.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RepoBrowserView; });\n/* harmony import */ var _redux_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../redux/View */ \"./src/redux/View.js\");\n/* eslint-disable class-methods-use-this */\n\n\nclass RepoBrowserView extends _redux_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  render({ files, commits, shownFiles }) {\n    console.log('VIEW', this.constructor.name, 'render method called');\n    const fileList = shownFiles.map((id) => {\n      const file = files[id];\n      const commit = commits[file.commit];\n      return `\n      <div class=\"Table-Row Table-Row_padding_h Table-Row_padding_v Table-Row_border_bottom\">\n        <div class=\"Table-Cell RepoBrowser-File\">\n            <a href=\"#\" class=\"File\">\n                <span class=\"Icon\">\n                    <img src=\"../assets/${file.type}.svg\">                                      \n                </span>\n                <span>${files[id].name}</span>\n            </a>\n        </div>\n        <div class=\"Table-Cell RepoBrowser-Commit\">\n            <a href=\"#\" class=\"Link\">${files[id].commit}</a>\n        </div>\n        <div class=\"Table-Cell RepoBrowser-CommitMessage\">\n            ${commit.message}\n        </div>\n        <div class=\"Table-Cell RepoBrowser-Committer\">\n            <a href=\"#\" class=\"Name\">${commit.author}</a>\n        </div>\n        <div class=\"Table-Cell Table-Cell_text_right RepoBrowser-Updated\">\n            ${commit.time}\n        </div>\n        <div class=\"Table-Cell Goto\">\n            <svg width=\"10\" height=\"19\" viewBox=\"0 0 10 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M0.9375 1.02344L0.15625 1.76562C0 1.96094 0 2.27344 0.15625 2.42969L7.22656 9.5L0.15625 16.6094C0 16.7656 0 17.0781 0.15625 17.2734L0.9375 18.0156C1.13281 18.2109 1.40625 18.2109 1.60156 18.0156L9.80469 9.85156C9.96094 9.65625 9.96094 9.38281 9.80469 9.1875L1.60156 1.02344C1.40625 0.828125 1.13281 0.828125 0.9375 1.02344Z\" fill=\"#E5E5E5\"/>\n            </svg>                                \n        </div>\n      </div>\n      `;\n    }).join('');\n    return `\n      <div class=\"Table RepoBrowser Page-Block\">\n        <div class=\"Table-Header Table-Header_padding_h Table-Header_padding_v Table-Row RepoBrowser-Header\">\n            <div class=\"Table-Cell RepoBrowser-File\">Name</div>\n            <div class=\"Table-Cell RepoBrowser-Commit\">Last commit</div>\n            <div class=\"Table-Cell RepoBrowser-CommitMessage\">Commit message</div>\n            <div class=\"Table-Cell RepoBrowser-Committer\">Committer</div>\n            <div class=\"Table-Cell Table-Cell_text_right RepoBrowser-Updated\">Updated</div>\n        </div>\n        ${fileList}\n      </div>\n    `;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXBvQnJvd3Nlci9SZXBvQnJvd3NlclZpZXcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZXBvQnJvd3Nlci9SZXBvQnJvd3NlclZpZXcuanM/ZjNmNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgVmlldyBmcm9tICcuLi8uLi9yZWR1eC9WaWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb0Jyb3dzZXJWaWV3IGV4dGVuZHMgVmlldyB7XG4gIHJlbmRlcih7IGZpbGVzLCBjb21taXRzLCBzaG93bkZpbGVzIH0pIHtcbiAgICBjb25zb2xlLmxvZygnVklFVycsIHRoaXMuY29uc3RydWN0b3IubmFtZSwgJ3JlbmRlciBtZXRob2QgY2FsbGVkJyk7XG4gICAgY29uc3QgZmlsZUxpc3QgPSBzaG93bkZpbGVzLm1hcCgoaWQpID0+IHtcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpZF07XG4gICAgICBjb25zdCBjb21taXQgPSBjb21taXRzW2ZpbGUuY29tbWl0XTtcbiAgICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGNsYXNzPVwiVGFibGUtUm93IFRhYmxlLVJvd19wYWRkaW5nX2ggVGFibGUtUm93X3BhZGRpbmdfdiBUYWJsZS1Sb3dfYm9yZGVyX2JvdHRvbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiVGFibGUtQ2VsbCBSZXBvQnJvd3Nlci1GaWxlXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiRmlsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiSWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy8ke2ZpbGUudHlwZX0uc3ZnXCI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+JHtmaWxlc1tpZF0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiVGFibGUtQ2VsbCBSZXBvQnJvd3Nlci1Db21taXRcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJMaW5rXCI+JHtmaWxlc1tpZF0uY29tbWl0fTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJUYWJsZS1DZWxsIFJlcG9Ccm93c2VyLUNvbW1pdE1lc3NhZ2VcIj5cbiAgICAgICAgICAgICR7Y29tbWl0Lm1lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiVGFibGUtQ2VsbCBSZXBvQnJvd3Nlci1Db21taXR0ZXJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJOYW1lXCI+JHtjb21taXQuYXV0aG9yfTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJUYWJsZS1DZWxsIFRhYmxlLUNlbGxfdGV4dF9yaWdodCBSZXBvQnJvd3Nlci1VcGRhdGVkXCI+XG4gICAgICAgICAgICAke2NvbW1pdC50aW1lfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIlRhYmxlLUNlbGwgR290b1wiPlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTlcIiB2aWV3Qm94PVwiMCAwIDEwIDE5XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wLjkzNzUgMS4wMjM0NEwwLjE1NjI1IDEuNzY1NjJDMCAxLjk2MDk0IDAgMi4yNzM0NCAwLjE1NjI1IDIuNDI5NjlMNy4yMjY1NiA5LjVMMC4xNTYyNSAxNi42MDk0QzAgMTYuNzY1NiAwIDE3LjA3ODEgMC4xNTYyNSAxNy4yNzM0TDAuOTM3NSAxOC4wMTU2QzEuMTMyODEgMTguMjEwOSAxLjQwNjI1IDE4LjIxMDkgMS42MDE1NiAxOC4wMTU2TDkuODA0NjkgOS44NTE1NkM5Ljk2MDk0IDkuNjU2MjUgOS45NjA5NCA5LjM4MjgxIDkuODA0NjkgOS4xODc1TDEuNjAxNTYgMS4wMjM0NEMxLjQwNjI1IDAuODI4MTI1IDEuMTMyODEgMC44MjgxMjUgMC45Mzc1IDEuMDIzNDRaXCIgZmlsbD1cIiNFNUU1RTVcIi8+XG4gICAgICAgICAgICA8L3N2Zz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9KS5qb2luKCcnKTtcbiAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz1cIlRhYmxlIFJlcG9Ccm93c2VyIFBhZ2UtQmxvY2tcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIlRhYmxlLUhlYWRlciBUYWJsZS1IZWFkZXJfcGFkZGluZ19oIFRhYmxlLUhlYWRlcl9wYWRkaW5nX3YgVGFibGUtUm93IFJlcG9Ccm93c2VyLUhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRhYmxlLUNlbGwgUmVwb0Jyb3dzZXItRmlsZVwiPk5hbWU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJUYWJsZS1DZWxsIFJlcG9Ccm93c2VyLUNvbW1pdFwiPkxhc3QgY29tbWl0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiVGFibGUtQ2VsbCBSZXBvQnJvd3Nlci1Db21taXRNZXNzYWdlXCI+Q29tbWl0IG1lc3NhZ2U8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJUYWJsZS1DZWxsIFJlcG9Ccm93c2VyLUNvbW1pdHRlclwiPkNvbW1pdHRlcjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRhYmxlLUNlbGwgVGFibGUtQ2VsbF90ZXh0X3JpZ2h0IFJlcG9Ccm93c2VyLVVwZGF0ZWRcIj5VcGRhdGVkPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke2ZpbGVMaXN0fVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/RepoBrowser/RepoBrowserView.js\n");

/***/ }),

/***/ "./src/redux/Store.js":
/*!****************************!*\
  !*** ./src/redux/Store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Store; });\nclass Store {\n  constructor(reducer) {\n    this.reducer = reducer;\n    this.listeners = [];\n    this.state = undefined;\n\n    this.dispatch({\n      type: '@@init',\n    });\n\n    console.log('STORE: initialized');\n  }\n\n  /**\n   * Return current store state\n   */\n  getState() {\n    return this.state;\n  }\n\n  /**\n   * Debug method\n   */\n  getListeners() {\n    return this.listeners;\n  }\n\n  /**\n   * Subscribe to store updates\n   * @param {Function} callback\n   */\n  subscribe(callback) {\n    console.log(`STORE: New listener subscribing to store updates: ${callback}`);\n    this.listeners.push(callback);\n    return () => {\n      const idx = this.listeners.indexOf(callback);\n      console.log(`STORE: Listener #${idx}unsubscribed`);\n      this.listeners.splice(idx, 1);\n    };\n  }\n\n  /**\n   * Notify subscribers on state change\n   */\n  runListeners() {\n    console.log('Store notifying listeners');\n    this.listeners.forEach((callback) => {\n      callback(this.state);\n    });\n  }\n\n  /**\n   * Dispatch action to store\n   * @param {Object} action\n   */\n  dispatch(action) {\n    console.log('STORE: dispatching action', action);\n    this.state = this.reducer(action, this.state);\n    this.runListeners();\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvU3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvU3RvcmUuanM/NGQyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKHJlZHVjZXIpIHtcbiAgICB0aGlzLnJlZHVjZXIgPSByZWR1Y2VyO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5zdGF0ZSA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0BAaW5pdCcsXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygnU1RPUkU6IGluaXRpYWxpemVkJyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGN1cnJlbnQgc3RvcmUgc3RhdGVcbiAgICovXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlYnVnIG1ldGhvZFxuICAgKi9cbiAgZ2V0TGlzdGVuZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gc3RvcmUgdXBkYXRlc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKi9cbiAgc3Vic2NyaWJlKGNhbGxiYWNrKSB7XG4gICAgY29uc29sZS5sb2coYFNUT1JFOiBOZXcgbGlzdGVuZXIgc3Vic2NyaWJpbmcgdG8gc3RvcmUgdXBkYXRlczogJHtjYWxsYmFja31gKTtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBjb25zb2xlLmxvZyhgU1RPUkU6IExpc3RlbmVyICMke2lkeH11bnN1YnNjcmliZWRgKTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpZHgsIDEpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTm90aWZ5IHN1YnNjcmliZXJzIG9uIHN0YXRlIGNoYW5nZVxuICAgKi9cbiAgcnVuTGlzdGVuZXJzKCkge1xuICAgIGNvbnNvbGUubG9nKCdTdG9yZSBub3RpZnlpbmcgbGlzdGVuZXJzJyk7XG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKHRoaXMuc3RhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIGFjdGlvbiB0byBzdG9yZVxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXG4gICAqL1xuICBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBjb25zb2xlLmxvZygnU1RPUkU6IGRpc3BhdGNoaW5nIGFjdGlvbicsIGFjdGlvbik7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMucmVkdWNlcihhY3Rpb24sIHRoaXMuc3RhdGUpO1xuICAgIHRoaXMucnVuTGlzdGVuZXJzKCk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/Store.js\n");

/***/ }),

/***/ "./src/redux/View.js":
/*!***************************!*\
  !*** ./src/redux/View.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\nclass View {\n  constructor(element, store) {\n    this.el = element;\n    this.store = store;\n    this.unsibscribe = store.subscribe((newState) => this.update(newState));\n    this.update(store.getState());\n  }\n\n  destroy() {\n    this.unsibscribe();\n    this.el.innerHTML = '';\n  }\n\n  update(state) {\n    this.el.innerHTML = this.render(state);\n  }\n\n  render() {\n    throw new Error('Method render not implemented');\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvVmlldy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWR1eC9WaWV3LmpzP2EwNWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHN0b3JlKSB7XG4gICAgdGhpcy5lbCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIHRoaXMudW5zaWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKG5ld1N0YXRlKSA9PiB0aGlzLnVwZGF0ZShuZXdTdGF0ZSkpO1xuICAgIHRoaXMudXBkYXRlKHN0b3JlLmdldFN0YXRlKCkpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnVuc2lic2NyaWJlKCk7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIHVwZGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5yZW5kZXIoc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIHJlbmRlciBub3QgaW1wbGVtZW50ZWQnKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/View.js\n");

/***/ })

/******/ });