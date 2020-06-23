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
    this.restart();
    this.sections = new _sections__WEBPACK_IMPORTED_MODULE_3__["default"](canvas);
    this.ctx.globalCompositeOperation = 'source-over';
    this.stopwatch = new _stopwatch__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
    this.hexagon = new _hexagon__WEBPACK_IMPORTED_MODULE_1__["default"](canvas);
    this.cursor = new _cursor__WEBPACK_IMPORTED_MODULE_2__["default"](canvas);
  }

  _createClass(WickedHexagon, [{
    key: "play",
    value: function play() {
      this.running = true;
      this.animate();
      this.stopwatch.start(); // rotate sections
      // rotate hexagon
      // rotate cursor
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
      this.playGame = this.play.bind(this);
      this.ctx.canvas.addEventListener("mousedown", function (event) {
        if (event.keyCode === 37 || event.keyCode === 65) {
          return this.leftHandler;
        } else if (event.keyCode === 39 || event.keyCode === 68) {
          return this.rightHandler;
        } else if (event.keyCode === 32) {
          return this.playGame;
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stopwatch; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULTS = {
  COLORS: ["#000000", "#ffffff"]
};

var Stopwatch = /*#__PURE__*/function () {
  function Stopwatch(canvas) {
    _classCallCheck(this, Stopwatch);

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.time = "0.00"; // only draw when starting the game/ space button

    this.draw(this.ctx);
  }

  _createClass(Stopwatch, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.moveTo(this.canvas.width - 260, 0); // x2 = (this.canvas.width - 260) + Math.cos(Math.PI * (60 / 180)) * 40;
      // y2 = Math.sin(Math.PI * (60 / 180)) * 40;

      ctx.lineTo(this.canvas.width - 240, 40);
      ctx.lineTo(this.canvas.width - 140, 40);
      ctx.lineTo(this.canvas.width - 130, 56);
      ctx.lineTo(this.canvas.width, 56);
      ctx.lineTo(this.canvas.width, 0); // ctx.strokeStyle = DEFAULTS.COLORS[0];

      ctx.fill();
      ctx.stroke();
      var timeWord = document.createElement("span");
      timeWord.classList.add("time-word");
      timeWord.innerHTML = "TIME";
      var body = document.getElementsByTagName("body");
      body[0].appendChild(timeWord);
      var stopwatch = document.createElement("span");
      stopwatch.classList.add("stopwatch");
      stopwatch.innerHTML = this.time;
      body[0].appendChild(stopwatch);
    }
  }, {
    key: "start",
    value: function start() {}
  }]);

  return Stopwatch;
}();



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJXaWNrZWRIZXhhZ29uIiwiREVGQVVMVFMiLCJDT0xPUiIsIkRJUiIsIlJBRElVUyIsIlNJWkUiLCJTUEVFRCIsIkN1cnNvciIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJhbmdsZSIsIngiLCJNYXRoIiwiY29zIiwiUEkiLCJ5Iiwic2luIiwiZHJhdyIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImZpbGxTdHlsZSIsImZpbGwiLCJkaW1lbnNpb25zIiwicmVnaXN0ZXJFdmVudHMiLCJyZXN0YXJ0Iiwic2VjdGlvbnMiLCJTZWN0aW9ucyIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInN0b3B3YXRjaCIsIlN0b3B3YXRjaCIsImhleGFnb24iLCJIZXhhZ29uIiwiY3Vyc29yIiwicnVubmluZyIsImFuaW1hdGUiLCJzdGFydCIsImxlZnRIYW5kbGVyIiwicGl2b3RDbG9ja3dpc2UiLCJiaW5kIiwicmlnaHRIYW5kbGVyIiwicGl2b3RDb3VudGVyQ2xvY2t3aXNlIiwicGxheUdhbWUiLCJwbGF5IiwiZXZlbnQiLCJrZXlDb2RlIiwiQ09MT1JTIiwiaGV4MSIsImhleDIiLCJwcmV2Q29vcmQiLCJpIiwieDIiLCJ5MiIsImxlbmd0aCIsInVuZGVmaW5lZCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwidGltZSIsInRpbWVXb3JkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImJvZHkiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtDQUNBOztBQUVBO0FBSUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDeEQsTUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLG9CQUFULENBQThCLFFBQTlCLEVBQXdDLENBQXhDLENBQWpCO0FBQ0FELFVBQVEsQ0FBQ0UsTUFBVCxHQUFrQkMsTUFB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YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFdpY2tlZEhleGFnb24gZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuLy8gaW1wb3J0IFdpY2tlZEhleGFnb24gZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICBjYW52YXNFbC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIGNhbnZhc0VsLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgbmV3IFdpY2tlZEhleGFnb24oY2FudmFzRWwpO1xufSk7XG4iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1I6IFwiIzA4ZmI3YlwiLFxuICBESVI6IDAsXG4gIFJBRElVUzogNjAsXG4gIFNJWkU6IDUsXG4gIFNQRUVEOiA1LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Vyc29yIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5nbGUgPSAzMzA7XG4gICAgdGhpcy54ID0gKGNhbnZhcy53aWR0aCAvIDIpICsgKERFRkFVTFRTLlJBRElVUyAqIE1hdGguY29zKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSk7XG4gICAgdGhpcy55ID0gKGNhbnZhcy5oZWlnaHQgLyAyKSArIChERUZBVUxUUy5SQURJVVMgKiBNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyAoREVGQVVMVFMuRElSICogREVGQVVMVFMuU1BFRUQpO1xuICAgIGlmICh0aGlzLmFuZ2xlIDwgMCkge1xuICAgICAgdGhpcy5hbmdsZSA9IDM2MCAtIHRoaXMuYW5nbGU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFuZ2xlID4gMzYwKSB7XG4gICAgICB0aGlzLmFuZ2xlID0gIHRoaXMuYW5nbGUgJSAzNjA7XG4gICAgfVxuXG4gICAgLy8gcm90YXRlcyB0aGUgY3Vyc29yIGRlcGVuZGluZyBvbiB3aGVyZSBhcm91bmQgdGhlIGhleGFnb24gaXQgaXNcbiAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICBjdHgudHJhbnNsYXRlKC10aGlzLngsIC10aGlzLnkpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy54IC0gREVGQVVMVFMuU0laRSwgdGhpcy55IC0gREVGQVVMVFMuU0laRSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLnggKyBERUZBVUxUUy5TSVpFLCB0aGlzLnkpO1xuICAgIGN0eC5saW5lVG8odGhpcy54IC0gREVGQVVMVFMuU0laRSwgdGhpcy55ICsgREVGQVVMVFMuU0laRSk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1I7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxufSIsImltcG9ydCBTdG9wd2F0Y2ggZnJvbSAnLi9zdG9wd2F0Y2gnO1xuaW1wb3J0IEhleGFnb24gZnJvbSAnLi9oZXhhZ29uJztcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi9jdXJzb3InO1xuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vc2VjdGlvbnMnO1xuLy8gaW1wb3J0IHRoZSBvdGhlciBzY3JpcHRzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpY2tlZEhleGFnb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG5cbiAgICB0aGlzLnNlY3Rpb25zID0gbmV3IFNlY3Rpb25zKGNhbnZhcyk7XG4gICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB0aGlzLnN0b3B3YXRjaCA9IG5ldyBTdG9wd2F0Y2goY2FudmFzKTtcbiAgICB0aGlzLmhleGFnb24gPSBuZXcgSGV4YWdvbihjYW52YXMpO1xuICAgIHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcihjYW52YXMpO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIHRoaXMuc3RvcHdhdGNoLnN0YXJ0KCk7XG4gICAgLy8gcm90YXRlIHNlY3Rpb25zXG4gICAgLy8gcm90YXRlIGhleGFnb25cbiAgICAvLyByb3RhdGUgY3Vyc29yXG4gIH1cblxuICBwaXZvdENsb2Nrd2lzZSgpIHtcblxuICB9XG5cbiAgcGl2b3RDb3VudGVyQ2xvY2t3aXNlKCkge1xuXG4gIH1cblxuICByZWdpc3RlckV2ZW50cygpIHtcbiAgICB0aGlzLmxlZnRIYW5kbGVyID0gdGhpcy5waXZvdENsb2Nrd2lzZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmlnaHRIYW5kbGVyID0gdGhpcy5waXZvdENvdW50ZXJDbG9ja3dpc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBsYXlHYW1lID0gdGhpcy5wbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyB8fCBldmVudC5rZXlDb2RlID09PSA2NSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0SGFuZGxlcjtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgfHwgZXZlbnQua2V5Q29kZSA9PT0gNjgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmlnaHRIYW5kbGVyO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5R2FtZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlc3RhcnQoKSB7XG5cbiAgfVxufSIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcIiMwMDAwMDBcIiwgXCIjMDhmYjdiXCJdLFxuICBTSVpFOiA1MCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGV4YWdvbiB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuXG4gICAgbGV0IGhleDEgPSAwO1xuICAgIGZvciAoaGV4MTsgaGV4MSA8PSA2OyBoZXgxKyspIHtcbiAgICAgIGN0eC5saW5lVG8odGhpcy54ICsgREVGQVVMVFMuU0laRSAqIE1hdGguY29zKGhleDEgKiAyICogTWF0aC5QSSAvIDYpLCB0aGlzLnkgKyBERUZBVUxUUy5TSVpFICogTWF0aC5zaW4oaGV4MSAqIDIgKiBNYXRoLlBJIC8gNikpO1xuICAgIH1cblxuICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMV07XG4gICAgY3R4LmZpbGwoKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGxldCBoZXgyID0gMDtcbiAgICBmb3IgKGhleDI7IGhleDIgPD0gNjsgaGV4MisrKSB7XG4gICAgICBjdHgubGluZVRvKHRoaXMueCArIDQ0ICogTWF0aC5jb3MoaGV4MiAqIDIgKiBNYXRoLlBJIC8gNiksIHRoaXMueSArIDQ0ICogTWF0aC5zaW4oaGV4MiAqIDIgKiBNYXRoLlBJIC8gNikpO1xuICAgIH1cblxuICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMF07XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIHJvdGF0ZSgpIHtcbiAgICBcbiAgfVxufSIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcIiMwMDAwMDBcIiwgXCIjMDIyNzEzXCJdLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmFuZ2xlID0gMDtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIFxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGxldCBwcmV2Q29vcmQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA2OyBpKyspIHtcbiAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICsgNjA7XG4gICAgICBpZiAodGhpcy5hbmdsZSA8IDApIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDM2MCAtIHRoaXMuYW5nbGU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYW5nbGUgPiAzNjApIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgJSAzNjA7XG4gICAgICB9XG5cbiAgICAgIGxldCB4MiwgeTIsIGxlbmd0aDtcblxuICAgICAgLy8gbGVuZ3RoID0gTWF0aC5mbG9vcihNYXRoLnNxcnQoMykgKiB0aGlzLnggKiAyKTtcbiAgICAgIGxlbmd0aCA9IDIwMDA7XG4gICAgICB4MiA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIGxlbmd0aDtcbiAgICAgIHkyID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogbGVuZ3RoO1xuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcbiAgICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICAgIGlmIChwcmV2Q29vcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdHgubGluZVRvKC4uLnByZXZDb29yZCk7XG4gICAgICB9XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbaSAlIDJdO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1tpICUgMl07XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBwcmV2Q29vcmQgPSBbeDIsIHkyXTtcbiAgICB9XG4gIH1cbn0iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXCIjMDAwMDAwXCIsIFwiI2ZmZmZmZlwiXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcHdhdGNoIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMudGltZSA9IFwiMC4wMFwiXG5cbiAgICAvLyBvbmx5IGRyYXcgd2hlbiBzdGFydGluZyB0aGUgZ2FtZS8gc3BhY2UgYnV0dG9uXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLSAyNjAsIDApO1xuICAgIC8vIHgyID0gKHRoaXMuY2FudmFzLndpZHRoIC0gMjYwKSArIE1hdGguY29zKE1hdGguUEkgKiAoNjAgLyAxODApKSAqIDQwO1xuICAgIC8vIHkyID0gTWF0aC5zaW4oTWF0aC5QSSAqICg2MCAvIDE4MCkpICogNDA7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAtIDI0MCwgNDApO1xuICAgIGN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLSAxNDAsIDQwKTtcbiAgICBjdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC0gMTMwLCA1Nik7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCwgNTYpO1xuICAgIGN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGgsIDApO1xuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1swXTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGNvbnN0IHRpbWVXb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGltZVdvcmQuY2xhc3NMaXN0LmFkZChcInRpbWUtd29yZFwiKTtcbiAgICB0aW1lV29yZC5pbm5lckhUTUwgPSBcIlRJTUVcIjtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQodGltZVdvcmQpO1xuXG4gICAgY29uc3Qgc3RvcHdhdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3RvcHdhdGNoLmNsYXNzTGlzdC5hZGQoXCJzdG9wd2F0Y2hcIik7XG4gICAgc3RvcHdhdGNoLmlubmVySFRNTCA9IHRoaXMudGltZTtcbiAgICBib2R5WzBdLmFwcGVuZENoaWxkKHN0b3B3YXRjaCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBcbiAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=