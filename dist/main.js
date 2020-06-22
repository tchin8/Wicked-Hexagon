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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cursor; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULTS = {
  COLOR: "#08fb7b",
  DIR: 0,
  RADIUS: 60,
  SIZE: 5,
  SPEED: 5
};

var Cursor = /*#__PURE__*/function () {
  function Cursor(canvas) {
    _classCallCheck(this, Cursor);

    this.ctx = canvas.getContext("2d");
    this.angle = 330;
    this.x = canvas.width / 2 + DEFAULTS.RADIUS * Math.cos(this.angle * Math.PI / 180);
    this.y = canvas.height / 2 + DEFAULTS.RADIUS * Math.sin(this.angle * Math.PI / 180);
    this.draw(this.ctx);
  }

  _createClass(Cursor, [{
    key: "draw",
    value: function draw(ctx) {
      this.angle = this.angle + DEFAULTS.DIR * DEFAULTS.SPEED;

      if (this.angle < 0) {
        this.angle = 360 - this.angle;
      } else if (this.angle > 360) {
        this.angle = this.angle % 360;
      } // rotates the cursor depending on where around the hexagon it is


      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle * Math.PI / 180);
      ctx.translate(-this.x, -this.y);
      ctx.beginPath();
      ctx.moveTo(this.x - DEFAULTS.SIZE, this.y - DEFAULTS.SIZE);
      ctx.lineTo(this.x + DEFAULTS.SIZE, this.y);
      ctx.lineTo(this.x - DEFAULTS.SIZE, this.y + DEFAULTS.SIZE);
      ctx.fillStyle = DEFAULTS.COLOR;
      ctx.fill();
    }
  }]);

  return Cursor;
}();



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
/* harmony import */ var _sections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections */ "./src/scripts/sections.js");
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

    this.sections = new _sections__WEBPACK_IMPORTED_MODULE_3__["default"](canvas);
    this.ctx.globalCompositeOperation = 'source-over';
    this.hexagon = new _hexagon__WEBPACK_IMPORTED_MODULE_1__["default"](canvas);
    this.cursor = new _cursor__WEBPACK_IMPORTED_MODULE_2__["default"](canvas);
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

var DEFAULTS = {
  COLORS: ["#000000", "#08fb7b"],
  SIZE: 50
};

var Hexagon = /*#__PURE__*/function () {
  function Hexagon(canvas) {
    _classCallCheck(this, Hexagon);

    this.ctx = canvas.getContext("2d");
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.draw(this.ctx);
  }

  _createClass(Hexagon, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      var hex1 = 0;

      for (hex1; hex1 <= 6; hex1++) {
        ctx.lineTo(this.x + DEFAULTS.SIZE * Math.cos(hex1 * 2 * Math.PI / 6), this.y + DEFAULTS.SIZE * Math.sin(hex1 * 2 * Math.PI / 6));
      }

      ctx.fillStyle = DEFAULTS.COLORS[1];
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      var hex2 = 0;

      for (hex2; hex2 <= 6; hex2++) {
        ctx.lineTo(this.x + 44 * Math.cos(hex2 * 2 * Math.PI / 6), this.y + 44 * Math.sin(hex2 * 2 * Math.PI / 6));
      }

      ctx.fillStyle = DEFAULTS.COLORS[0];
      ctx.fill();
    }
  }, {
    key: "rotate",
    value: function rotate() {}
  }]);

  return Hexagon;
}();



/***/ }),

/***/ "./src/scripts/sections.js":
/*!*********************************!*\
  !*** ./src/scripts/sections.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sections; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULTS = {
  COLORS: ["#000000", "#022713"]
};

var Sections = /*#__PURE__*/function () {
  function Sections(canvas) {
    _classCallCheck(this, Sections);

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.angle = 0;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.draw(this.ctx);
  }

  _createClass(Sections, [{
    key: "draw",
    value: function draw(ctx) {
      // // do I even need this?
      // ctx.translate(this.x, this.y);
      var prevCoord;

      for (var i = 0; i <= 6; i++) {
        this.angle = this.angle + 60;

        if (this.angle < 0) {
          this.angle = 360 - this.angle;
        } else if (this.angle > 360) {
          this.angle = this.angle % 360;
        }

        var x2 = void 0,
            y2 = void 0,
            length = void 0; // length = Math.floor(Math.sqrt(3) * this.x * 2);

        length = 2000;
        x2 = this.x + Math.cos(Math.PI * this.angle / 180) * length;
        y2 = this.y + Math.sin(Math.PI * this.angle / 180) * length;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(x2, y2);

        if (prevCoord !== undefined) {
          ctx.lineTo.apply(ctx, _toConsumableArray(prevCoord));
        }

        ctx.strokeStyle = DEFAULTS.COLORS[i % 2];
        ctx.fillStyle = DEFAULTS.COLORS[i % 2];
        ctx.fill();
        ctx.stroke();
        prevCoord = [x2, y2];
      }
    }
  }]);

  return Sections;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIldpY2tlZEhleGFnb24iLCJERUZBVUxUUyIsIkNPTE9SIiwiRElSIiwiUkFESVVTIiwiU0laRSIsIlNQRUVEIiwiQ3Vyc29yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImFuZ2xlIiwieCIsIk1hdGgiLCJjb3MiLCJQSSIsInkiLCJzaW4iLCJkcmF3IiwidHJhbnNsYXRlIiwicm90YXRlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiZmlsbFN0eWxlIiwiZmlsbCIsImRpbWVuc2lvbnMiLCJyZWdpc3RlckV2ZW50cyIsInJlc3RhcnQiLCJzZWN0aW9ucyIsIlNlY3Rpb25zIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiaGV4YWdvbiIsIkhleGFnb24iLCJjdXJzb3IiLCJydW5uaW5nIiwiYW5pbWF0ZSIsImxlZnRIYW5kbGVyIiwicGl2b3RDbG9ja3dpc2UiLCJiaW5kIiwicmlnaHRIYW5kbGVyIiwicGl2b3RDb3VudGVyQ2xvY2t3aXNlIiwiZXZlbnQiLCJrZXlDb2RlIiwiQ09MT1JTIiwiaGV4MSIsImhleDIiLCJwcmV2Q29vcmQiLCJpIiwieDIiLCJ5MiIsImxl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QUFMLENBQVo7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERILHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBXaWNrZWRIZXhhZ29uIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcbi8vIGltcG9ydCBXaWNrZWRIZXhhZ29uIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcblxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgY2FudmFzRWwuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICBjYW52YXNFbC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gIG5ldyBXaWNrZWRIZXhhZ29uKGNhbnZhc0VsKTtcbn0pO1xuIiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SOiBcIiMwOGZiN2JcIixcbiAgRElSOiAwLFxuICBSQURJVVM6IDYwLFxuICBTSVpFOiA1LFxuICBTUEVFRDogNSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmFuZ2xlID0gMzMwO1xuICAgIHRoaXMueCA9IChjYW52YXMud2lkdGggLyAyKSArIChERUZBVUxUUy5SQURJVVMgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgIHRoaXMueSA9IChjYW52YXMuaGVpZ2h0IC8gMikgKyAoREVGQVVMVFMuUkFESVVTICogTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKTtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICsgKERFRkFVTFRTLkRJUiAqIERFRkFVTFRTLlNQRUVEKTtcbiAgICBpZiAodGhpcy5hbmdsZSA8IDApIHtcbiAgICAgIHRoaXMuYW5nbGUgPSAzNjAgLSB0aGlzLmFuZ2xlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hbmdsZSA+IDM2MCkge1xuICAgICAgdGhpcy5hbmdsZSA9ICB0aGlzLmFuZ2xlICUgMzYwO1xuICAgIH1cblxuICAgIC8vIHJvdGF0ZXMgdGhlIGN1cnNvciBkZXBlbmRpbmcgb24gd2hlcmUgYXJvdW5kIHRoZSBoZXhhZ29uIGl0IGlzXG4gICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy54LCAtdGhpcy55KTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMueCAtIERFRkFVTFRTLlNJWkUsIHRoaXMueSAtIERFRkFVTFRTLlNJWkUpO1xuICAgIGN0eC5saW5lVG8odGhpcy54ICsgREVGQVVMVFMuU0laRSwgdGhpcy55KTtcbiAgICBjdHgubGluZVRvKHRoaXMueCAtIERFRkFVTFRTLlNJWkUsIHRoaXMueSArIERFRkFVTFRTLlNJWkUpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cbn0iLCJpbXBvcnQgU3RvcHdhdGNoIGZyb20gJy4vc3RvcHdhdGNoJztcbmltcG9ydCBIZXhhZ29uIGZyb20gJy4vaGV4YWdvbic7XG5pbXBvcnQgQ3Vyc29yIGZyb20gJy4vY3Vyc29yJztcbmltcG9ydCBTZWN0aW9ucyBmcm9tICcuL3NlY3Rpb25zJztcbi8vIGltcG9ydCB0aGUgb3RoZXIgc2NyaXB0c1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWNrZWRIZXhhZ29uIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICAgIHRoaXMucmVzdGFydCgpO1xuXG4gICAgLy8gdGhpcy5zdG9wd2F0Y2ggPSBuZXcgU3RvcHdhdGNoO1xuICAgIHRoaXMuc2VjdGlvbnMgPSBuZXcgU2VjdGlvbnMoY2FudmFzKTtcbiAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIHRoaXMuaGV4YWdvbiA9IG5ldyBIZXhhZ29uKGNhbnZhcyk7XG4gICAgdGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKGNhbnZhcyk7XG4gIH1cblxuICBwbGF5KCkge1xuICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgdGhpcy5hbmltYXRlKCk7XG4gIH1cblxuICBwaXZvdENsb2Nrd2lzZSgpIHtcblxuICB9XG5cbiAgcGl2b3RDb3VudGVyQ2xvY2t3aXNlKCkge1xuXG4gIH1cblxuICByZWdpc3RlckV2ZW50cygpIHtcbiAgICB0aGlzLmxlZnRIYW5kbGVyID0gdGhpcy5waXZvdENsb2Nrd2lzZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmlnaHRIYW5kbGVyID0gdGhpcy5waXZvdENvdW50ZXJDbG9ja3dpc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3IHx8IGV2ZW50LmtleUNvZGUgPT09IDY1KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlZnRIYW5kbGVyO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSB8fCBldmVudC5rZXlDb2RlID09PSA2OCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yaWdodEhhbmRsZXI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXN0YXJ0KCkge1xuXG4gIH1cbn0iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXCIjMDAwMDAwXCIsIFwiIzA4ZmI3YlwiXSxcbiAgU0laRTogNTAsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhleGFnb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGxldCBoZXgxID0gMDtcbiAgICBmb3IgKGhleDE7IGhleDEgPD0gNjsgaGV4MSsrKSB7XG4gICAgICBjdHgubGluZVRvKHRoaXMueCArIERFRkFVTFRTLlNJWkUgKiBNYXRoLmNvcyhoZXgxICogMiAqIE1hdGguUEkgLyA2KSwgdGhpcy55ICsgREVGQVVMVFMuU0laRSAqIE1hdGguc2luKGhleDEgKiAyICogTWF0aC5QSSAvIDYpKTtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzFdO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG5cbiAgICBsZXQgaGV4MiA9IDA7XG4gICAgZm9yIChoZXgyOyBoZXgyIDw9IDY7IGhleDIrKykge1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyA0NCAqIE1hdGguY29zKGhleDIgKiAyICogTWF0aC5QSSAvIDYpLCB0aGlzLnkgKyA0NCAqIE1hdGguc2luKGhleDIgKiAyICogTWF0aC5QSSAvIDYpKTtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzBdO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICByb3RhdGUoKSB7XG4gICAgXG4gIH1cbn0iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXCIjMDAwMDAwXCIsIFwiIzAyMjcxM1wiXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbnMge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICBcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICAvLyAvLyBkbyBJIGV2ZW4gbmVlZCB0aGlzP1xuICAgIC8vIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgIGxldCBwcmV2Q29vcmQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA2OyBpKyspIHtcbiAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICsgNjA7XG4gICAgICBpZiAodGhpcy5hbmdsZSA8IDApIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDM2MCAtIHRoaXMuYW5nbGU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYW5nbGUgPiAzNjApIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgJSAzNjA7XG4gICAgICB9XG5cbiAgICAgIGxldCB4MiwgeTIsIGxlbmd0aDtcblxuICAgICAgLy8gbGVuZ3RoID0gTWF0aC5mbG9vcihNYXRoLnNxcnQoMykgKiB0aGlzLnggKiAyKTtcbiAgICAgIGxlbmd0aCA9IDIwMDA7XG4gICAgICB4MiA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIGxlbmd0aDtcbiAgICAgIHkyID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogbGVuZ3RoO1xuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcbiAgICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICAgIGlmIChwcmV2Q29vcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdHgubGluZVRvKC4uLnByZXZDb29yZCk7XG4gICAgICB9XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbaSAlIDJdO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1tpICUgMl07XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBwcmV2Q29vcmQgPSBbeDIsIHkyXTtcbiAgICB9XG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9