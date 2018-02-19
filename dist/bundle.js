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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! normalize.css/normalize.css */ 1);\n\n__webpack_require__(/*! ../sass/main.scss */ 3);\n\nvar _wiki = __webpack_require__(/*! ./wiki */ 4);\n\nvar _ui = __webpack_require__(/*! ./ui */ 5);\n\n// Hide content section on load\ndocument.addEventListener('DOMContentLoaded', _ui.ui.hideSearchContent);\n\n// Show content section on input focus\ndocument.querySelector('.search__input').addEventListener('focus', _ui.ui.showSearchContent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICcuLi9zYXNzL21haW4uc2Nzcyc7XG5cbmltcG9ydCB7IHdpa2kgfSBmcm9tICcuL3dpa2knO1xuaW1wb3J0IHsgdWkgfSBmcm9tICcuL3VpJztcblxuLy8gSGlkZSBjb250ZW50IHNlY3Rpb24gb24gbG9hZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHVpLmhpZGVTZWFyY2hDb250ZW50KTtcblxuLy8gU2hvdyBjb250ZW50IHNlY3Rpb24gb24gaW5wdXQgZm9jdXNcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2lucHV0JykuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB1aS5zaG93U2VhcmNoQ29udGVudCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3M/NjI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */,
/* 3 */
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zYXNzL21haW4uc2Nzcz84MDU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!************************!*\
  !*** ./src/js/wiki.js ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Wiki = function () {\n  function Wiki() {\n    _classCallCheck(this, Wiki);\n\n    this.article_count = 20;\n  }\n\n  _createClass(Wiki, [{\n    key: \"getArticles\",\n    value: function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(searchInput) {\n        var res, resData;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"https://en.wikipedia.org/w/api.php?action=opensearch&search=\" + searchInput + \"&limit=\" + this.article_count + \"&format=json&origin=*\");\n\n              case 2:\n                res = _context.sent;\n                _context.next = 5;\n                return res.json();\n\n              case 5:\n                resData = _context.sent;\n                return _context.abrupt(\"return\", resData);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function getArticles(_x) {\n        return _ref.apply(this, arguments);\n      }\n\n      return getArticles;\n    }()\n  }]);\n\n  return Wiki;\n}();\n\nvar wiki = exports.wiki = new Wiki();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvd2lraS5qcz9kYTBiIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFdpa2kge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFydGljbGVfY291bnQgPSAyMDtcbiAgfVxuXG4gIGFzeW5jIGdldEFydGljbGVzKHNlYXJjaElucHV0KSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93L2FwaS5waHA/YWN0aW9uPW9wZW5zZWFyY2gmc2VhcmNoPSR7c2VhcmNoSW5wdXR9JmxpbWl0PSR7dGhpcy5hcnRpY2xlX2NvdW50fSZmb3JtYXQ9anNvbiZvcmlnaW49KmApO1xuICAgIGNvbnN0IHJlc0RhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiByZXNEYXRhO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB3aWtpID0gbmV3IFdpa2koKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvd2lraS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7O0FBREE7O0FBQ0E7QUFDQTs7QUFEQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar UI = function UI() {\n  _classCallCheck(this, UI);\n\n  this.contentSection = document.querySelector('.content');\n};\n\nvar ui = exports.ui = new UI();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvdWkuanM/MjFhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBVSSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29udGVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1aSA9IG5ldyBVSSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy91aS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ })
/******/ ]);