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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJXaWNrZWRIZXhhZ29uIiwiREVGQVVMVFMiLCJDT0xPUiIsIkRJUiIsIlJBRElVUyIsIlNJWkUiLCJTUEVFRCIsIkN1cnNvciIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJhbmdsZSIsIngiLCJNYXRoIiwiY29zIiwiUEkiLCJ5Iiwic2luIiwiZHJhdyIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImZpbGxTdHlsZSIsImZpbGwiLCJkaW1lbnNpb25zIiwicmVnaXN0ZXJFdmVudHMiLCJyZXN0YXJ0Iiwic2VjdGlvbnMiLCJTZWN0aW9ucyIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInN0b3B3YXRjaCIsIlN0b3B3YXRjaCIsImhleGFnb24iLCJIZXhhZ29uIiwiY3Vyc29yIiwicnVubmluZyIsImFuaW1hdGUiLCJsZWZ0SGFuZGxlciIsInBpdm90Q2xvY2t3aXNlIiwiYmluZCIsInJpZ2h0SGFuZGxlciIsInBpdm90Q291bnRlckNsb2Nrd2lzZSIsImV2ZW50Iiwia2V5Q29kZSIsIkNPTE9SUyIsImhleDEiLCJoZXgyIiwicHJldkNvb3JkIiwiaSIsIngyIiwieTIiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInRpbWUiLCJ0aW1lV29yZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJib2R5IiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7Q0FDQTs7QUFFQTtBQUlBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3hELE1BQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUFqQjtBQUNBRCxVQUFRLENBQUNFLE1BQVQsR0FBa0JDLE1BQU0sQ0FBQ0MsV0FBekI7QUFDQUosVUFBUSxD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QUE5QjtBQUNBVyxTQUFHLENBQUNjLE1BQUosQ0FBVyxLQUFLZixNQUFMLENBQVlWLEtBQXZCLEVBQThCLENBQTlCLEVBVFEsQ0FVUjs7QUFDQVcsU0FBRyxDQUFDZ0IsSUFBSjtBQUNBaEIsU0FBRyxDQUFDK0MsTUFBSjtBQUVBLFVBQU1FLFFBQVEsR0FBR25FLFFBQVEsQ0FBQ29FLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBakI7QUFDQUQsY0FBUSxDQUFDRSxTQUFULENBQW1CQyxHQUFuQixDQUF1QixXQUF2QjtBQUNBSCxjQUFRLENBQUNJLFNBQVQsR0FBcUIsTUFBckI7QUFDQSxVQUFNQyxJQUFJLEdBQUd4RSxRQUFRLENBQUNHLG9CQUFULENBQThCLE1BQTlCLENBQWI7QUFDQXFFLFVBQUksQ0FBQyxDQUFELENBQUosQ0FBUUMsV0FBUixDQUFvQk4sUUFBcEI7QUFFQSxVQUFNMUIsU0FBUyxHQUFHekMsUUFBUSxDQUFDb0UsYUFBVCxDQUF1QixNQUF2QixDQUFsQjtBQUNBM0IsZUFBUyxDQUFDNEIsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsV0FBeEI7QUFDQTdCLGVBQVMsQ0FBQzhCLFNBQVYsR0FBc0IsS0FBS0wsSUFBM0I7QUFDQU0sVUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRQyxXQUFSLENBQW9CaEMsU0FBcEI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0gsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFdpY2tlZEhleGFnb24gZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuLy8gaW1wb3J0IFdpY2tlZEhleGFnb24gZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICBjYW52YXNFbC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIGNhbnZhc0VsLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgbmV3IFdpY2tlZEhleGFnb24oY2FudmFzRWwpO1xufSk7XG4iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1I6IFwiIzA4ZmI3YlwiLFxuICBESVI6IDAsXG4gIFJBRElVUzogNjAsXG4gIFNJWkU6IDUsXG4gIFNQRUVEOiA1LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Vyc29yIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5nbGUgPSAzMzA7XG4gICAgdGhpcy54ID0gKGNhbnZhcy53aWR0aCAvIDIpICsgKERFRkFVTFRTLlJBRElVUyAqIE1hdGguY29zKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSk7XG4gICAgdGhpcy55ID0gKGNhbnZhcy5oZWlnaHQgLyAyKSArIChERUZBVUxUUy5SQURJVVMgKiBNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyAoREVGQVVMVFMuRElSICogREVGQVVMVFMuU1BFRUQpO1xuICAgIGlmICh0aGlzLmFuZ2xlIDwgMCkge1xuICAgICAgdGhpcy5hbmdsZSA9IDM2MCAtIHRoaXMuYW5nbGU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFuZ2xlID4gMzYwKSB7XG4gICAgICB0aGlzLmFuZ2xlID0gIHRoaXMuYW5nbGUgJSAzNjA7XG4gICAgfVxuXG4gICAgLy8gcm90YXRlcyB0aGUgY3Vyc29yIGRlcGVuZGluZyBvbiB3aGVyZSBhcm91bmQgdGhlIGhleGFnb24gaXQgaXNcbiAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICBjdHgudHJhbnNsYXRlKC10aGlzLngsIC10aGlzLnkpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy54IC0gREVGQVVMVFMuU0laRSwgdGhpcy55IC0gREVGQVVMVFMuU0laRSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLnggKyBERUZBVUxUUy5TSVpFLCB0aGlzLnkpO1xuICAgIGN0eC5saW5lVG8odGhpcy54IC0gREVGQVVMVFMuU0laRSwgdGhpcy55ICsgREVGQVVMVFMuU0laRSk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1I7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxufSIsImltcG9ydCBTdG9wd2F0Y2ggZnJvbSAnLi9zdG9wd2F0Y2gnO1xuaW1wb3J0IEhleGFnb24gZnJvbSAnLi9oZXhhZ29uJztcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi9jdXJzb3InO1xuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vc2VjdGlvbnMnO1xuLy8gaW1wb3J0IHRoZSBvdGhlciBzY3JpcHRzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpY2tlZEhleGFnb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG5cbiAgICB0aGlzLnNlY3Rpb25zID0gbmV3IFNlY3Rpb25zKGNhbnZhcyk7XG4gICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB0aGlzLnN0b3B3YXRjaCA9IG5ldyBTdG9wd2F0Y2goY2FudmFzKTtcbiAgICB0aGlzLmhleGFnb24gPSBuZXcgSGV4YWdvbihjYW52YXMpO1xuICAgIHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcihjYW52YXMpO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9XG5cbiAgcGl2b3RDbG9ja3dpc2UoKSB7XG5cbiAgfVxuXG4gIHBpdm90Q291bnRlckNsb2Nrd2lzZSgpIHtcblxuICB9XG5cbiAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgdGhpcy5sZWZ0SGFuZGxlciA9IHRoaXMucGl2b3RDbG9ja3dpc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJpZ2h0SGFuZGxlciA9IHRoaXMucGl2b3RDb3VudGVyQ2xvY2t3aXNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyB8fCBldmVudC5rZXlDb2RlID09PSA2NSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0SGFuZGxlcjtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgfHwgZXZlbnQua2V5Q29kZSA9PT0gNjgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmlnaHRIYW5kbGVyO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVzdGFydCgpIHtcblxuICB9XG59IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1wiIzAwMDAwMFwiLCBcIiMwOGZiN2JcIl0sXG4gIFNJWkU6IDUwLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXhhZ29uIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAvIDI7XG5cbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG5cbiAgICBsZXQgaGV4MSA9IDA7XG4gICAgZm9yIChoZXgxOyBoZXgxIDw9IDY7IGhleDErKykge1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyBERUZBVUxUUy5TSVpFICogTWF0aC5jb3MoaGV4MSAqIDIgKiBNYXRoLlBJIC8gNiksIHRoaXMueSArIERFRkFVTFRTLlNJWkUgKiBNYXRoLnNpbihoZXgxICogMiAqIE1hdGguUEkgLyA2KSk7XG4gICAgfVxuXG4gICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1sxXTtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuXG4gICAgbGV0IGhleDIgPSAwO1xuICAgIGZvciAoaGV4MjsgaGV4MiA8PSA2OyBoZXgyKyspIHtcbiAgICAgIGN0eC5saW5lVG8odGhpcy54ICsgNDQgKiBNYXRoLmNvcyhoZXgyICogMiAqIE1hdGguUEkgLyA2KSwgdGhpcy55ICsgNDQgKiBNYXRoLnNpbihoZXgyICogMiAqIE1hdGguUEkgLyA2KSk7XG4gICAgfVxuXG4gICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1swXTtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgcm90YXRlKCkge1xuICAgIFxuICB9XG59IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1wiIzAwMDAwMFwiLCBcIiMwMjI3MTNcIl0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb25zIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAvIDI7XG4gICAgXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgbGV0IHByZXZDb29yZDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDY7IGkrKykge1xuICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyA2MDtcbiAgICAgIGlmICh0aGlzLmFuZ2xlIDwgMCkge1xuICAgICAgICB0aGlzLmFuZ2xlID0gMzYwIC0gdGhpcy5hbmdsZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hbmdsZSA+IDM2MCkge1xuICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSAlIDM2MDtcbiAgICAgIH1cblxuICAgICAgbGV0IHgyLCB5MiwgbGVuZ3RoO1xuXG4gICAgICAvLyBsZW5ndGggPSBNYXRoLmZsb29yKE1hdGguc3FydCgzKSAqIHRoaXMueCAqIDIpO1xuICAgICAgbGVuZ3RoID0gMjAwMDtcbiAgICAgIHgyID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogbGVuZ3RoO1xuICAgICAgeTIgPSB0aGlzLnkgKyBNYXRoLnNpbihNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBsZW5ndGg7XG5cbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuICAgICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgICAgaWYgKHByZXZDb29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN0eC5saW5lVG8oLi4ucHJldkNvb3JkKTtcbiAgICAgIH1cbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1tpICUgMl07XG4gICAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTW2kgJSAyXTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIHByZXZDb29yZCA9IFt4MiwgeTJdO1xuICAgIH1cbiAgfVxufSIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcIiMwMDAwMDBcIiwgXCIjZmZmZmZmXCJdLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9wd2F0Y2gge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy50aW1lID0gXCIwLjAwXCJcblxuICAgIC8vIG9ubHkgZHJhdyB3aGVuIHN0YXJ0aW5nIHRoZSBnYW1lLyBzcGFjZSBidXR0b25cbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAtIDI2MCwgMCk7XG4gICAgLy8geDIgPSAodGhpcy5jYW52YXMud2lkdGggLSAyNjApICsgTWF0aC5jb3MoTWF0aC5QSSAqICg2MCAvIDE4MCkpICogNDA7XG4gICAgLy8geTIgPSBNYXRoLnNpbihNYXRoLlBJICogKDYwIC8gMTgwKSkgKiA0MDtcbiAgICBjdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC0gMjQwLCA0MCk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAtIDE0MCwgNDApO1xuICAgIGN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLSAxMzAsIDU2KTtcbiAgICBjdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoLCA1Nik7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCwgMCk7XG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzBdO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY29uc3QgdGltZVdvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0aW1lV29yZC5jbGFzc0xpc3QuYWRkKFwidGltZS13b3JkXCIpO1xuICAgIHRpbWVXb3JkLmlubmVySFRNTCA9IFwiVElNRVwiO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIik7XG4gICAgYm9keVswXS5hcHBlbmRDaGlsZCh0aW1lV29yZCk7XG5cbiAgICBjb25zdCBzdG9wd2F0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzdG9wd2F0Y2guY2xhc3NMaXN0LmFkZChcInN0b3B3YXRjaFwiKTtcbiAgICBzdG9wd2F0Y2guaW5uZXJIVE1MID0gdGhpcy50aW1lO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQoc3RvcHdhdGNoKTtcbiAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=