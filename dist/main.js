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
  RADIUS: 60,
  SIZE: 5
};

var Cursor = /*#__PURE__*/function () {
  function Cursor(canvas) {
    _classCallCheck(this, Cursor);

    this.ctx = canvas.getContext("2d");
    this.angle = 330;
    this.x = canvas.width / 2 + Math.cos(this.angle * Math.PI / 180) * DEFAULTS.RADIUS;
    this.y = canvas.height / 2 + Math.sin(this.angle * Math.PI / 180) * DEFAULTS.RADIUS;
    this.draw(this.ctx);
  }

  _createClass(Cursor, [{
    key: "draw",
    value: function draw(ctx) {
      // rotates the cursor depending on where around the hexagon it is
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
      var timestamp = new Date();
      this.animate(timestamp);
      this.lastTime = 0;
      var t = new Date();
      this.stopwatch.start(t);
    }
  }, {
    key: "animate",
    value: function animate(timestamp) {
      var deltaTime = timestamp - this.lastTime;
      this.lastTime = timestamp; // rotate sections
      // rotate hexagon
      // rotate cursor - update(deltaTime)
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
      this.ctx.canvas.addEventListener("keydown", function (event) {
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
    key: "update",
    value: function update(deltaTime) {// const secs 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIldpY2tlZEhleGFnb24iLCJERUZBVUxUUyIsIkNPTE9SIiwiUkFESVVTIiwiU0laRSIsIkN1cnNvciIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJhbmdsZSIsIngiLCJNYXRoIiwiY29zIiwiUEkiLCJ5Iiwic2luIiwiZHJhdyIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImZpbGxTdHlsZSIsImZpbGwiLCJkaW1lbnNpb25zIiwicmVnaXN0ZXJFdmVudHMiLCJyZXN0YXJ0Iiwic2VjdGlvbnMiLCJTZWN0aW9ucyIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInN0b3B3YXRjaCIsIlN0b3B3YXRjaCIsImhleGFnb24iLCJIZXhhZ29uIiwiY3Vyc29yIiwicnVubmluZyIsInRpbWVzdGFtcCIsIkRhdGUiLCJhbmltYXRlIiwibGFzdFRpbWUiLCJ0Iiwic3RhcnQiLCJkZWx0YVRpbWUiLCJsZWZ0SGFuZGxlciIsInBpdm90Q2xvY2t3aXNlIiwiYmluZCIsInJpZ2h0SGFuZGxlciIsInBpdm90Q291bnRlckNsb2Nrd2lzZSIsInBsYXlHYW1lIiwicGxheSIsImV2ZW50Iiwia2V5Q29kZSIsIkNPTE9SUyIsImhleDEiLCJoZXgyIiwicHJldkNvb3JkIiwiaSIsIngyIiwieTIiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInRpbWUiLCJ0aW1lV29yZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJib2R5IiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7Q0FDQTs7QUFFQTtBQUlBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3hELE1BQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxD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WVIsS0FBWixHQUFvQixHQUEvQixFQUFvQyxFQUFwQztBQUNBUyxTQUFHLENBQUNjLE1BQUosQ0FBVyxLQUFLZixNQUFMLENBQVlSLEtBQVosR0FBb0IsR0FBL0IsRUFBb0MsRUFBcEM7QUFDQVMsU0FBRyxDQUFDYyxNQUFKLENBQVcsS0FBS2YsTUFBTCxDQUFZUixLQUF2QixFQUE4QixFQUE5QjtBQUNBUyxTQUFHLENBQUNjLE1BQUosQ0FBVyxLQUFLZixNQUFMLENBQVlSLEtBQXZCLEVBQThCLENBQTlCLEVBVFEsQ0FVUjs7QUFDQVMsU0FBRyxDQUFDZ0IsSUFBSjtBQUNBaEIsU0FBRyxDQUFDdUQsTUFBSjtBQUVBLFVBQU1FLFFBQVEsR0FBR3pFLFFBQVEsQ0FBQzBFLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBakI7QUFDQUQsY0FBUSxDQUFDRSxTQUFULENBQW1CQyxHQUFuQixDQUF1QixXQUF2QjtBQUNBSCxjQUFRLENBQUNJLFNBQVQsR0FBcUIsTUFBckI7QUFDQSxVQUFNQyxJQUFJLEdBQUc5RSxRQUFRLENBQUNHLG9CQUFULENBQThCLE1BQTlCLENBQWI7QUFDQTJFLFVBQUksQ0FBQyxDQUFELENBQUosQ0FBUUMsV0FBUixDQUFvQk4sUUFBcEI7QUFFQSxVQUFNbEMsU0FBUyxHQUFHdkMsUUFBUSxDQUFDMEUsYUFBVCxDQUF1QixNQUF2QixDQUFsQjtBQUNBbkMsZUFBUyxDQUFDb0MsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsV0FBeEI7QUFDQXJDLGVBQVMsQ0FBQ3NDLFNBQVYsR0FBc0IsS0FBS0wsSUFBM0I7QUFDQU0sVUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRQyxXQUFSLENBQW9CeEMsU0FBcEI7QUFDRDs7OzJCQUVNWSxTLEVBQVcsQ0FDaEI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0gsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFdpY2tlZEhleGFnb24gZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuLy8gaW1wb3J0IFdpY2tlZEhleGFnb24gZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICBjYW52YXNFbC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIGNhbnZhc0VsLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgbmV3IFdpY2tlZEhleGFnb24oY2FudmFzRWwpO1xufSk7XG4iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1I6IFwiIzA4ZmI3YlwiLFxuICBSQURJVVM6IDYwLFxuICBTSVpFOiA1LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Vyc29yIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5nbGUgPSAzMzA7XG4gICAgdGhpcy54ID0gKGNhbnZhcy53aWR0aCAvIDIpICsgKE1hdGguY29zKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSAqIERFRkFVTFRTLlJBRElVUyk7XG4gICAgdGhpcy55ID0gKGNhbnZhcy5oZWlnaHQgLyAyKSArIChNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiBERUZBVUxUUy5SQURJVVMpO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgLy8gcm90YXRlcyB0aGUgY3Vyc29yIGRlcGVuZGluZyBvbiB3aGVyZSBhcm91bmQgdGhlIGhleGFnb24gaXQgaXNcbiAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICBjdHgudHJhbnNsYXRlKC10aGlzLngsIC10aGlzLnkpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMueCAtIERFRkFVTFRTLlNJWkUsIHRoaXMueSAtIERFRkFVTFRTLlNJWkUpO1xuICAgIGN0eC5saW5lVG8odGhpcy54ICsgREVGQVVMVFMuU0laRSwgdGhpcy55KTtcbiAgICBjdHgubGluZVRvKHRoaXMueCAtIERFRkFVTFRTLlNJWkUsIHRoaXMueSArIERFRkFVTFRTLlNJWkUpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUjtcbiAgICBjdHguZmlsbCgpO1xuICB9XG59IiwiaW1wb3J0IFN0b3B3YXRjaCBmcm9tICcuL3N0b3B3YXRjaCc7XG5pbXBvcnQgSGV4YWdvbiBmcm9tICcuL2hleGFnb24nO1xuaW1wb3J0IEN1cnNvciBmcm9tICcuL2N1cnNvcic7XG5pbXBvcnQgU2VjdGlvbnMgZnJvbSAnLi9zZWN0aW9ucyc7XG4vLyBpbXBvcnQgdGhlIG90aGVyIHNjcmlwdHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lja2VkSGV4YWdvbiB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB0aGlzLnJlc3RhcnQoKTtcblxuICAgIHRoaXMuc2VjdGlvbnMgPSBuZXcgU2VjdGlvbnMoY2FudmFzKTtcbiAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIHRoaXMuc3RvcHdhdGNoID0gbmV3IFN0b3B3YXRjaChjYW52YXMpO1xuICAgIHRoaXMuaGV4YWdvbiA9IG5ldyBIZXhhZ29uKGNhbnZhcyk7XG4gICAgdGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKGNhbnZhcyk7XG4gIH1cblxuICBwbGF5KCkge1xuICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgbGV0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKClcbiAgICB0aGlzLmFuaW1hdGUodGltZXN0YW1wKTtcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICBsZXQgdCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5zdG9wd2F0Y2guc3RhcnQodCk7XG4gIH1cblxuICBhbmltYXRlKHRpbWVzdGFtcCkge1xuICAgIGxldCBkZWx0YVRpbWUgPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lO1xuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lc3RhbXA7XG4gICAgLy8gcm90YXRlIHNlY3Rpb25zXG4gICAgLy8gcm90YXRlIGhleGFnb25cbiAgICAvLyByb3RhdGUgY3Vyc29yIC0gdXBkYXRlKGRlbHRhVGltZSlcbiAgfVxuXG4gIHBpdm90Q2xvY2t3aXNlKCkge1xuXG4gIH1cblxuICBwaXZvdENvdW50ZXJDbG9ja3dpc2UoKSB7XG5cbiAgfVxuXG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIHRoaXMubGVmdEhhbmRsZXIgPSB0aGlzLnBpdm90Q2xvY2t3aXNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yaWdodEhhbmRsZXIgPSB0aGlzLnBpdm90Q291bnRlckNsb2Nrd2lzZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGxheUdhbWUgPSB0aGlzLnBsYXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyB8fCBldmVudC5rZXlDb2RlID09PSA2NSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0SGFuZGxlcjtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgfHwgZXZlbnQua2V5Q29kZSA9PT0gNjgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmlnaHRIYW5kbGVyO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5R2FtZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlc3RhcnQoKSB7XG5cbiAgfVxufSIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcIiMwMDAwMDBcIiwgXCIjMDhmYjdiXCJdLFxuICBTSVpFOiA1MCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGV4YWdvbiB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuXG4gICAgbGV0IGhleDEgPSAwO1xuICAgIGZvciAoaGV4MTsgaGV4MSA8PSA2OyBoZXgxKyspIHtcbiAgICAgIGN0eC5saW5lVG8odGhpcy54ICsgREVGQVVMVFMuU0laRSAqIE1hdGguY29zKGhleDEgKiAyICogTWF0aC5QSSAvIDYpLCB0aGlzLnkgKyBERUZBVUxUUy5TSVpFICogTWF0aC5zaW4oaGV4MSAqIDIgKiBNYXRoLlBJIC8gNikpO1xuICAgIH1cblxuICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMV07XG4gICAgY3R4LmZpbGwoKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGxldCBoZXgyID0gMDtcbiAgICBmb3IgKGhleDI7IGhleDIgPD0gNjsgaGV4MisrKSB7XG4gICAgICBjdHgubGluZVRvKHRoaXMueCArIDQ0ICogTWF0aC5jb3MoaGV4MiAqIDIgKiBNYXRoLlBJIC8gNiksIHRoaXMueSArIDQ0ICogTWF0aC5zaW4oaGV4MiAqIDIgKiBNYXRoLlBJIC8gNikpO1xuICAgIH1cblxuICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMF07XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIHJvdGF0ZSgpIHtcbiAgICBcbiAgfVxufSIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcIiMwMDAwMDBcIiwgXCIjMDIyNzEzXCJdLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmFuZ2xlID0gMDtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIFxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGxldCBwcmV2Q29vcmQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA2OyBpKyspIHtcbiAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICsgNjA7XG4gICAgICBpZiAodGhpcy5hbmdsZSA8IDApIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDM2MCAtIHRoaXMuYW5nbGU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYW5nbGUgPiAzNjApIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgJSAzNjA7XG4gICAgICB9XG5cbiAgICAgIGxldCB4MiwgeTIsIGxlbmd0aDtcblxuICAgICAgLy8gbGVuZ3RoID0gTWF0aC5mbG9vcihNYXRoLnNxcnQoMykgKiB0aGlzLnggKiAyKTtcbiAgICAgIGxlbmd0aCA9IDIwMDA7XG4gICAgICB4MiA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIGxlbmd0aDtcbiAgICAgIHkyID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogbGVuZ3RoO1xuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcbiAgICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICAgIGlmIChwcmV2Q29vcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdHgubGluZVRvKC4uLnByZXZDb29yZCk7XG4gICAgICB9XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbaSAlIDJdO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1tpICUgMl07XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBwcmV2Q29vcmQgPSBbeDIsIHkyXTtcbiAgICB9XG4gIH1cbn0iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXCIjMDAwMDAwXCIsIFwiI2ZmZmZmZlwiXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcHdhdGNoIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMudGltZSA9IFwiMC4wMFwiO1xuXG4gICAgLy8gb25seSBkcmF3IHdoZW4gc3RhcnRpbmcgdGhlIGdhbWUvIHNwYWNlIGJ1dHRvblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC0gMjYwLCAwKTtcbiAgICAvLyB4MiA9ICh0aGlzLmNhbnZhcy53aWR0aCAtIDI2MCkgKyBNYXRoLmNvcyhNYXRoLlBJICogKDYwIC8gMTgwKSkgKiA0MDtcbiAgICAvLyB5MiA9IE1hdGguc2luKE1hdGguUEkgKiAoNjAgLyAxODApKSAqIDQwO1xuICAgIGN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLSAyNDAsIDQwKTtcbiAgICBjdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC0gMTQwLCA0MCk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAtIDEzMCwgNTYpO1xuICAgIGN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGgsIDU2KTtcbiAgICBjdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoLCAwKTtcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMF07XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjb25zdCB0aW1lV29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRpbWVXb3JkLmNsYXNzTGlzdC5hZGQoXCJ0aW1lLXdvcmRcIik7XG4gICAgdGltZVdvcmQuaW5uZXJIVE1MID0gXCJUSU1FXCI7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKTtcbiAgICBib2R5WzBdLmFwcGVuZENoaWxkKHRpbWVXb3JkKTtcblxuICAgIGNvbnN0IHN0b3B3YXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHN0b3B3YXRjaC5jbGFzc0xpc3QuYWRkKFwic3RvcHdhdGNoXCIpO1xuICAgIHN0b3B3YXRjaC5pbm5lckhUTUwgPSB0aGlzLnRpbWU7XG4gICAgYm9keVswXS5hcHBlbmRDaGlsZChzdG9wd2F0Y2gpO1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhVGltZSkge1xuICAgIC8vIGNvbnN0IHNlY3MgXG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9