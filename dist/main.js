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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);
 // import WickedHexagon from './scripts/game';


document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.height = window.innerHeight;
  canvasEl.width = window.innerWidth;
  new _scripts_game__WEBPACK_IMPORTED_MODULE_0__["default"](canvasEl);
});

/***/ }),

/***/ "./src/scripts/cursor.js":
/*!*******************************!*\
  !*** ./src/scripts/cursor.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WickedHexagon; });
/* harmony import */ var _stopwatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stopwatch */ "./src/scripts/stopwatch.js");
/* harmony import */ var _stopwatch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stopwatch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hexagon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hexagon */ "./src/scripts/hexagon.js");
/* harmony import */ var _cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cursor */ "./src/scripts/cursor.js");
/* harmony import */ var _cursor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cursor__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 // import the other scripts

var WickedHexagon = /*#__PURE__*/function () {
  function WickedHexagon(canvas) {
    _classCallCheck(this, WickedHexagon);

    this.ctx = canvas.getContext("2d");
    this.dimensions = {
      width: canvas.width,
      height: canvas.height
    };
    this.registerEvents();
    this.restart(); // this.stopwatch = new Stopwatch;

    this.hexagon = new _hexagon__WEBPACK_IMPORTED_MODULE_1__["default"](canvas);
    this.cursor = new _cursor__WEBPACK_IMPORTED_MODULE_2___default.a(canvas);
  }

  _createClass(WickedHexagon, [{
    key: "play",
    value: function play() {
      this.running = true;
      this.animate();
    }
  }, {
    key: "pivotClockwise",
    value: function pivotClockwise() {}
  }, {
    key: "pivotCounterClockwise",
    value: function pivotCounterClockwise() {}
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      this.leftHandler = this.pivotClockwise.bind(this);
      this.rightHandler = this.pivotCounterClockwise.bind(this);
      this.ctx.canvas.addEventListener("mousedown", function (event) {
        if (event.keyCode === 37 || event.keyCode === 65) {
          return this.leftHandler;
        } else if (event.keyCode === 39 || event.keyCode === 68) {
          return this.rightHandler;
        }
      });
    }
  }, {
    key: "restart",
    value: function restart() {}
  }]);

  return WickedHexagon;
}();



/***/ }),

/***/ "./src/scripts/hexagon.js":
/*!********************************!*\
  !*** ./src/scripts/hexagon.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hexagon; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hexagon = /*#__PURE__*/function () {
  function Hexagon(canvas) {
    _classCallCheck(this, Hexagon);

    this.canvas = canvas;
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.ctx = canvas.getContext("2d");
    this.draw(this.ctx);
  }

  _createClass(Hexagon, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      var side = 0;

      for (side; side <= 6; side++) {
        ctx.lineTo(this.x + 50 * Math.cos(side * 2 * Math.PI / 6), this.y + 50 * Math.sin(side * 2 * Math.PI / 6));
      }

      ctx.fillStyle = "#02ff8d";
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      var side2 = 0;

      for (side2; side2 <= 6; side2++) {
        ctx.lineTo(this.x + 44 * Math.cos(side2 * 2 * Math.PI / 6), this.y + 44 * Math.sin(side2 * 2 * Math.PI / 6));
      }

      ctx.fillStyle = "#000000";
      ctx.fill();
    }
  }, {
    key: "rotate",
    value: function rotate() {}
  }]);

  return Hexagon;
}();



/***/ }),

/***/ "./src/scripts/stopwatch.js":
/*!**********************************!*\
  !*** ./src/scripts/stopwatch.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaGV4YWdvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwiV2lja2VkSGV4YWdvbiIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkaW1lbnNpb25zIiwicmVnaXN0ZXJFdmVudHMiLCJyZXN0YXJ0IiwiaGV4YWdvbiIsIkhleGFnb24iLCJjdXJzb3IiLCJDdXJzb3IiLCJydW5uaW5nIiwiYW5pbWF0ZSIsImxlZnRIYW5kbGVyIiwicGl2b3RDbG9ja3dpc2UiLCJiaW5kIiwicmlnaHRIYW5kbGVyIiwicGl2b3RDb3VudGVyQ2xvY2t3aXNlIiwiZXZlbnQiLCJrZXlDb2RlIiwieCIsInkiLCJkcmF3IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwic2lkZSIsImxpbmVUbyIsIk1hdGgiLCJjb3MiLCJQSSIsInNpbiIsImZpbGxTdHlsZSIsImZpbGwiLCJzaWRlMiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxp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U0FBRyxDQUFDNkIsU0FBSixHQUFnQixTQUFoQjtBQUNBN0IsU0FBRyxDQUFDOEIsSUFBSjtBQUNEOzs7NkJBRVEsQ0FFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDSCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgV2lja2VkSGV4YWdvbiBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG4vLyBpbXBvcnQgV2lja2VkSGV4YWdvbiBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5cbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gIGNhbnZhc0VsLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgY2FudmFzRWwud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICBuZXcgV2lja2VkSGV4YWdvbihjYW52YXNFbCk7XG59KTtcbiIsImltcG9ydCBTdG9wd2F0Y2ggZnJvbSAnLi9zdG9wd2F0Y2gnO1xuaW1wb3J0IEhleGFnb24gZnJvbSAnLi9oZXhhZ29uJztcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi9jdXJzb3InO1xuLy8gaW1wb3J0IHRoZSBvdGhlciBzY3JpcHRzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpY2tlZEhleGFnb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG5cbiAgICAvLyB0aGlzLnN0b3B3YXRjaCA9IG5ldyBTdG9wd2F0Y2g7XG4gICAgdGhpcy5oZXhhZ29uID0gbmV3IEhleGFnb24oY2FudmFzKTtcbiAgICB0aGlzLmN1cnNvciA9IG5ldyBDdXJzb3IoY2FudmFzKTtcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfVxuXG4gIHBpdm90Q2xvY2t3aXNlKCkge1xuXG4gIH1cblxuICBwaXZvdENvdW50ZXJDbG9ja3dpc2UoKSB7XG5cbiAgfVxuXG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIHRoaXMubGVmdEhhbmRsZXIgPSB0aGlzLnBpdm90Q2xvY2t3aXNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yaWdodEhhbmRsZXIgPSB0aGlzLnBpdm90Q291bnRlckNsb2Nrd2lzZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgfHwgZXZlbnQua2V5Q29kZSA9PT0gNjUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVmdEhhbmRsZXI7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5IHx8IGV2ZW50LmtleUNvZGUgPT09IDY4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJpZ2h0SGFuZGxlcjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlc3RhcnQoKSB7XG5cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhleGFnb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLnggPSB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy55ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcblxuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGxldCBzaWRlID0gMDtcbiAgICBmb3IgKHNpZGU7IHNpZGUgPD0gNjsgc2lkZSsrKSB7XG4gICAgICBjdHgubGluZVRvKHRoaXMueCArIDUwICogTWF0aC5jb3Moc2lkZSAqIDIgKiBNYXRoLlBJIC8gNiksIHRoaXMueSArIDUwICogTWF0aC5zaW4oc2lkZSAqIDIgKiBNYXRoLlBJIC8gNikpO1xuICAgIH1cblxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMmZmOGRcIjtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuXG4gICAgbGV0IHNpZGUyID0gMDtcbiAgICBmb3IgKHNpZGUyOyBzaWRlMiA8PSA2OyBzaWRlMisrKSB7XG4gICAgICBjdHgubGluZVRvKHRoaXMueCArIDQ0ICogTWF0aC5jb3Moc2lkZTIgKiAyICogTWF0aC5QSSAvIDYpLCB0aGlzLnkgKyA0NCAqIE1hdGguc2luKHNpZGUyICogMiAqIE1hdGguUEkgLyA2KSk7XG4gICAgfVxuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICByb3RhdGUoKSB7XG4gICAgXG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9