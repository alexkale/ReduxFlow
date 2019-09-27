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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _redux_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redux/Store */ \"./src/redux/Store.js\");\n/* harmony import */ var _components_RepoBrowser_RepoBrowserReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/RepoBrowser/RepoBrowserReducer */ \"./src/components/RepoBrowser/RepoBrowserReducer.js\");\n/* harmony import */ var _components_RepoBrowser_RepoBrowserView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/RepoBrowser/RepoBrowserView */ \"./src/components/RepoBrowser/RepoBrowserView.js\");\n\n\n\n\n\nconst store = new _redux_Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_components_RepoBrowser_RepoBrowserReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nconst repoBrowserView = new _components_RepoBrowser_RepoBrowserView__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.querySelector('.RepoBrowserView'), store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdG9yZSBmcm9tICcuL3JlZHV4L1N0b3JlJztcblxuaW1wb3J0IHJlcG9Ccm93c2VyUmVkdWNlciBmcm9tICcuL2NvbXBvbmVudHMvUmVwb0Jyb3dzZXIvUmVwb0Jyb3dzZXJSZWR1Y2VyJztcbmltcG9ydCBSZXBvQnJvd3NlclZpZXcgZnJvbSAnLi9jb21wb25lbnRzL1JlcG9Ccm93c2VyL1JlcG9Ccm93c2VyVmlldyc7XG5cbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKHJlcG9Ccm93c2VyUmVkdWNlcik7XG5cbmNvbnN0IHJlcG9Ccm93c2VyVmlldyA9IG5ldyBSZXBvQnJvd3NlclZpZXcoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlJlcG9Ccm93c2VyVmlldycpLCBzdG9yZSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/components/RepoBrowser/RepoBrowserReducer.js":
/*!**********************************************************!*\
  !*** ./src/components/RepoBrowser/RepoBrowserReducer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst defaultState = {\n  count: 0,\n  files: [\n    {\n      id: 0,\n      name: 'api',\n      type: 'folder',\n      commit: 'd53dsv',\n    },\n    {\n      id: 1,\n      name: 'ci',\n      type: 'folder',\n      commit: 'c53dsv',\n    },\n  ],\n  commits: {\n    d53dsv: {\n      hash: 'd53dsv',\n      message: '[vcs] move http to arc',\n      author: 'noxoomo',\n      time: '4 s ago',\n    },\n    c53dsv: {\n      hash: 'c53dsv',\n      message: '[vcs] test for empty commit message',\n      author: 'nikitxskv',\n      time: '1 min ago',\n    }\n  },\n  shownFiles: [0, 1],\n};\n\nconst repoBrowserReducer = (action, state = defaultState) => {\n  console.log('repoBrowserReducer called for action', action);\n\n  switch (action) {\n    case '@@init':\n      return defaultState;\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (repoBrowserReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXBvQnJvd3Nlci9SZXBvQnJvd3NlclJlZHVjZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZXBvQnJvd3Nlci9SZXBvQnJvd3NlclJlZHVjZXIuanM/YWVhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIGNvdW50OiAwLFxuICBmaWxlczogW1xuICAgIHtcbiAgICAgIGlkOiAwLFxuICAgICAgbmFtZTogJ2FwaScsXG4gICAgICB0eXBlOiAnZm9sZGVyJyxcbiAgICAgIGNvbW1pdDogJ2Q1M2RzdicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIG5hbWU6ICdjaScsXG4gICAgICB0eXBlOiAnZm9sZGVyJyxcbiAgICAgIGNvbW1pdDogJ2M1M2RzdicsXG4gICAgfSxcbiAgXSxcbiAgY29tbWl0czoge1xuICAgIGQ1M2Rzdjoge1xuICAgICAgaGFzaDogJ2Q1M2RzdicsXG4gICAgICBtZXNzYWdlOiAnW3Zjc10gbW92ZSBodHRwIHRvIGFyYycsXG4gICAgICBhdXRob3I6ICdub3hvb21vJyxcbiAgICAgIHRpbWU6ICc0IHMgYWdvJyxcbiAgICB9LFxuICAgIGM1M2Rzdjoge1xuICAgICAgaGFzaDogJ2M1M2RzdicsXG4gICAgICBtZXNzYWdlOiAnW3Zjc10gdGVzdCBmb3IgZW1wdHkgY29tbWl0IG1lc3NhZ2UnLFxuICAgICAgYXV0aG9yOiAnbmlraXR4c2t2JyxcbiAgICAgIHRpbWU6ICcxIG1pbiBhZ28nLFxuICAgIH1cbiAgfSxcbiAgc2hvd25GaWxlczogWzAsIDFdLFxufTtcblxuY29uc3QgcmVwb0Jyb3dzZXJSZWR1Y2VyID0gKGFjdGlvbiwgc3RhdGUgPSBkZWZhdWx0U3RhdGUpID0+IHtcbiAgY29uc29sZS5sb2coJ3JlcG9Ccm93c2VyUmVkdWNlciBjYWxsZWQgZm9yIGFjdGlvbicsIGFjdGlvbik7XG5cbiAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICBjYXNlICdAQGluaXQnOlxuICAgICAgcmV0dXJuIGRlZmF1bHRTdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXBvQnJvd3NlclJlZHVjZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/RepoBrowser/RepoBrowserReducer.js\n");

/***/ }),

/***/ "./src/components/RepoBrowser/RepoBrowserView.js":
/*!*******************************************************!*\
  !*** ./src/components/RepoBrowser/RepoBrowserView.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RepoBrowserView; });\n/* harmony import */ var _redux_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../redux/View */ \"./src/redux/View.js\");\n/* eslint-disable class-methods-use-this */\n\n\nclass RepoBrowserView extends _redux_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  render({ files, commits, shownFiles }) {\n    console.log('VIEW', this.constructor.name, 'render method called');\n    const fileList = shownFiles.map((id) => {\n      const file = files[id];\n      const commit = commits[file.commit];\n      return `\n      <div class=\"Table-Row Table-Row_padding_h Table-Row_padding_v Table-Row_border_bottom\">\n        <div class=\"Table-Cell RepoBrowser-File\">\n            <a href=\"#\" class=\"File\">\n                <span class=\"Icon\">\n                    <svg width=\"12\" height=\"9\" viewBox=\"0 0 12 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M10.875 1.5H6.375L4.875 0H1.125C0.492188 0 0 0.515625 0 1.125V7.875C0 8.50781 0.492188 9 1.125 9H10.875C11.4844 9 12 8.50781 12 7.875V2.625C12 2.01562 11.4844 1.5 10.875 1.5Z\" fill=\"black\"/>\n                        </svg>                                        \n                </span>\n                <span>${files[id].name}</span>\n            </a>\n        </div>\n        <div class=\"Table-Cell RepoBrowser-Commit\">\n            <a href=\"#\" class=\"Link\">${files[id].commit}</a>\n        </div>\n        <div class=\"Table-Cell RepoBrowser-CommitMessage\">\n            ${commit.message}\n        </div>\n        <div class=\"Table-Cell RepoBrowser-Committer\">\n            <a href=\"#\" class=\"Name\">${commit.author}</a>\n        </div>\n        <div class=\"Table-Cell Table-Cell_text_right RepoBrowser-Updated\">\n            ${commit.time}\n        </div>\n        <div class=\"Table-Cell Goto\">\n            <svg width=\"10\" height=\"19\" viewBox=\"0 0 10 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M0.9375 1.02344L0.15625 1.76562C0 1.96094 0 2.27344 0.15625 2.42969L7.22656 9.5L0.15625 16.6094C0 16.7656 0 17.0781 0.15625 17.2734L0.9375 18.0156C1.13281 18.2109 1.40625 18.2109 1.60156 18.0156L9.80469 9.85156C9.96094 9.65625 9.96094 9.38281 9.80469 9.1875L1.60156 1.02344C1.40625 0.828125 1.13281 0.828125 0.9375 1.02344Z\" fill=\"#E5E5E5\"/>\n            </svg>                                \n        </div>\n      </div>\n      `;\n    }).join('');\n    return `\n      <div class=\"Table RepoBrowser Page-Block\">\n        <div class=\"Table-Header Table-Header_padding_h Table-Header_padding_v Table-Row RepoBrowser-Header\">\n            <div class=\"Table-Cell RepoBrowser-File\">Name</div>\n            <div class=\"Table-Cell RepoBrowser-Commit\">Last commit</div>\n            <div class=\"Table-Cell RepoBrowser-CommitMessage\">Commit message</div>\n            <div class=\"Table-Cell RepoBrowser-Committer\">Committer</div>\n            <div class=\"Table-Cell Table-Cell_text_right RepoBrowser-Updated\">Updated</div>\n        </div>\n        ${fileList}\n      </div>\n    `;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXBvQnJvd3Nlci9SZXBvQnJvd3NlclZpZXcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZXBvQnJvd3Nlci9SZXBvQnJvd3NlclZpZXcuanM/ZjNmNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgVmlldyBmcm9tICcuLi8uLi9yZWR1eC9WaWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb0Jyb3dzZXJWaWV3IGV4dGVuZHMgVmlldyB7XG4gIHJlbmRlcih7IGZpbGVzLCBjb21taXRzLCBzaG93bkZpbGVzIH0pIHtcbiAgICBjb25zb2xlLmxvZygnVklFVycsIHRoaXMuY29uc3RydWN0b3IubmFtZSwgJ3JlbmRlciBtZXRob2QgY2FsbGVkJyk7XG4gICAgY29uc3QgZmlsZUxpc3QgPSBzaG93bkZpbGVzLm1hcCgoaWQpID0+IHtcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpZF07XG4gICAgICBjb25zdCBjb21taXQgPSBjb21taXRzW2ZpbGUuY29tbWl0XTtcbiAgICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGNsYXNzPVwiVGFibGUtUm93IFRhYmxlLVJvd19wYWRkaW5nX2ggVGFibGUtUm93X3BhZGRpbmdfdiBUYWJsZS1Sb3dfYm9yZGVyX2JvdHRvbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiVGFibGUtQ2VsbCBSZXBvQnJvd3Nlci1GaWxlXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiRmlsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiSWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCI5XCIgdmlld0JveD1cIjAgMCAxMiA5XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwLjg3NSAxLjVINi4zNzVMNC44NzUgMEgxLjEyNUMwLjQ5MjE4OCAwIDAgMC41MTU2MjUgMCAxLjEyNVY3Ljg3NUMwIDguNTA3ODEgMC40OTIxODggOSAxLjEyNSA5SDEwLjg3NUMxMS40ODQ0IDkgMTIgOC41MDc4MSAxMiA3Ljg3NVYyLjYyNUMxMiAyLjAxNTYyIDExLjQ4NDQgMS41IDEwLjg3NSAxLjVaXCIgZmlsbD1cImJsYWNrXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4ke2ZpbGVzW2lkXS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJUYWJsZS1DZWxsIFJlcG9Ccm93c2VyLUNvbW1pdFwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIkxpbmtcIj4ke2ZpbGVzW2lkXS5jb21taXR9PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIlRhYmxlLUNlbGwgUmVwb0Jyb3dzZXItQ29tbWl0TWVzc2FnZVwiPlxuICAgICAgICAgICAgJHtjb21taXQubWVzc2FnZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJUYWJsZS1DZWxsIFJlcG9Ccm93c2VyLUNvbW1pdHRlclwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIk5hbWVcIj4ke2NvbW1pdC5hdXRob3J9PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIlRhYmxlLUNlbGwgVGFibGUtQ2VsbF90ZXh0X3JpZ2h0IFJlcG9Ccm93c2VyLVVwZGF0ZWRcIj5cbiAgICAgICAgICAgICR7Y29tbWl0LnRpbWV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiVGFibGUtQ2VsbCBHb3RvXCI+XG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxOVwiIHZpZXdCb3g9XCIwIDAgMTAgMTlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAuOTM3NSAxLjAyMzQ0TDAuMTU2MjUgMS43NjU2MkMwIDEuOTYwOTQgMCAyLjI3MzQ0IDAuMTU2MjUgMi40Mjk2OUw3LjIyNjU2IDkuNUwwLjE1NjI1IDE2LjYwOTRDMCAxNi43NjU2IDAgMTcuMDc4MSAwLjE1NjI1IDE3LjI3MzRMMC45Mzc1IDE4LjAxNTZDMS4xMzI4MSAxOC4yMTA5IDEuNDA2MjUgMTguMjEwOSAxLjYwMTU2IDE4LjAxNTZMOS44MDQ2OSA5Ljg1MTU2QzkuOTYwOTQgOS42NTYyNSA5Ljk2MDk0IDkuMzgyODEgOS44MDQ2OSA5LjE4NzVMMS42MDE1NiAxLjAyMzQ0QzEuNDA2MjUgMC44MjgxMjUgMS4xMzI4MSAwLjgyODEyNSAwLjkzNzUgMS4wMjM0NFpcIiBmaWxsPVwiI0U1RTVFNVwiLz5cbiAgICAgICAgICAgIDwvc3ZnPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH0pLmpvaW4oJycpO1xuICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGNsYXNzPVwiVGFibGUgUmVwb0Jyb3dzZXIgUGFnZS1CbG9ja1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiVGFibGUtSGVhZGVyIFRhYmxlLUhlYWRlcl9wYWRkaW5nX2ggVGFibGUtSGVhZGVyX3BhZGRpbmdfdiBUYWJsZS1Sb3cgUmVwb0Jyb3dzZXItSGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiVGFibGUtQ2VsbCBSZXBvQnJvd3Nlci1GaWxlXCI+TmFtZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRhYmxlLUNlbGwgUmVwb0Jyb3dzZXItQ29tbWl0XCI+TGFzdCBjb21taXQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJUYWJsZS1DZWxsIFJlcG9Ccm93c2VyLUNvbW1pdE1lc3NhZ2VcIj5Db21taXQgbWVzc2FnZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRhYmxlLUNlbGwgUmVwb0Jyb3dzZXItQ29tbWl0dGVyXCI+Q29tbWl0dGVyPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiVGFibGUtQ2VsbCBUYWJsZS1DZWxsX3RleHRfcmlnaHQgUmVwb0Jyb3dzZXItVXBkYXRlZFwiPlVwZGF0ZWQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICR7ZmlsZUxpc3R9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/RepoBrowser/RepoBrowserView.js\n");

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