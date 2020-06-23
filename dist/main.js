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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJXaWNrZWRIZXhhZ29uIiwiREVGQVVMVFMiLCJDT0xPUiIsIlJBRElVUyIsIlNJWkUiLCJDdXJzb3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiYW5nbGUiLCJ4IiwiTWF0aCIsImNvcyIsIlBJIiwieSIsInNpbiIsImRyYXciLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJmaWxsU3R5bGUiLCJmaWxsIiwiZGltZW5zaW9ucyIsInJlZ2lzdGVyRXZlbnRzIiwicmVzdGFydCIsInNlY3Rpb25zIiwiU2VjdGlvbnMiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJzdG9wd2F0Y2giLCJTdG9wd2F0Y2giLCJoZXhhZ29uIiwiSGV4YWdvbiIsImN1cnNvciIsInJ1bm5pbmciLCJ0aW1lc3RhbXAiLCJEYXRlIiwiYW5pbWF0ZSIsImxhc3RUaW1lIiwidCIsInN0YXJ0IiwiZGVsdGFUaW1lIiwibGVmdEhhbmRsZXIiLCJwaXZvdENsb2Nrd2lzZSIsImJpbmQiLCJyaWdodEhhbmRsZXIiLCJwaXZvdENvdW50ZXJDbG9ja3dpc2UiLCJwbGF5R2FtZSIsInBsYXkiLCJldmVudCIsImtleUNvZGUiLCJDT0xPUlMiLCJoZXgxIiwiaGV4MiIsInByZXZDb29yZCIsImkiLCJ4MiIsInkyIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJ0aW1lIiwidGltZVdvcmQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiYm9keSIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7O0FBRUE7QUFJQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN4RCxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csb0JBQVQsQ0FBOEIsUUFBOUIsRUFBd0MsQ0FBeEMsQ0FBakI7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QVosR0FBb0IsR0FBL0IsRUFBb0MsRUFBcEM7QUFDQVMsU0FBRyxDQUFDYyxNQUFKLENBQVcsS0FBS2YsTUFBTCxDQUFZUixLQUFaLEdBQW9CLEdBQS9CLEVBQW9DLEVBQXBDO0FBQ0FTLFNBQUcsQ0FBQ2MsTUFBSixDQUFXLEtBQUtmLE1BQUwsQ0FBWVIsS0FBdkIsRUFBOEIsRUFBOUI7QUFDQVMsU0FBRyxDQUFDYyxNQUFKLENBQVcsS0FBS2YsTUFBTCxDQUFZUixLQUF2QixFQUE4QixDQUE5QixFQVRRLENBVVI7O0FBQ0FTLFNBQUcsQ0FBQ2dCLElBQUo7QUFDQWhCLFNBQUcsQ0FBQ3VELE1BQUo7QUFFQSxVQUFNRSxRQUFRLEdBQUd6RSxRQUFRLENBQUMwRSxhQUFULENBQXVCLE1BQXZCLENBQWpCO0FBQ0FELGNBQVEsQ0FBQ0UsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsV0FBdkI7QUFDQUgsY0FBUSxDQUFDSSxTQUFULEdBQXFCLE1BQXJCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHOUUsUUFBUSxDQUFDRyxvQkFBVCxDQUE4QixNQUE5QixDQUFiO0FBQ0EyRSxVQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFDLFdBQVIsQ0FBb0JOLFFBQXBCO0FBRUEsVUFBTWxDLFNBQVMsR0FBR3ZDLFFBQVEsQ0FBQzBFLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBbEI7QUFDQW5DLGVBQVMsQ0FBQ29DLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFdBQXhCO0FBQ0FyQyxlQUFTLENBQUNzQyxTQUFWLEdBQXNCLEtBQUtMLElBQTNCO0FBQ0FNLFVBQUksQ0FBQyxDQUFELENBQUosQ0FBUUMsV0FBUixDQUFvQnhDLFNBQXBCO0FBQ0Q7OzsyQkFFTVksUyxFQUFXLENBQ2hCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNILHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBXaWNrZWRIZXhhZ29uIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcbi8vIGltcG9ydCBXaWNrZWRIZXhhZ29uIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcblxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgY2FudmFzRWwuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICBjYW52YXNFbC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gIG5ldyBXaWNrZWRIZXhhZ29uKGNhbnZhc0VsKTtcbn0pO1xuIiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SOiBcIiMwOGZiN2JcIixcbiAgUkFESVVTOiA2MCxcbiAgU0laRTogNSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmFuZ2xlID0gMzMwO1xuICAgIHRoaXMueCA9IChjYW52YXMud2lkdGggLyAyKSArIChNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiBERUZBVUxUUy5SQURJVVMpO1xuICAgIHRoaXMueSA9IChjYW52YXMuaGVpZ2h0IC8gMikgKyAoTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApICogREVGQVVMVFMuUkFESVVTKTtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIC8vIHJvdGF0ZXMgdGhlIGN1cnNvciBkZXBlbmRpbmcgb24gd2hlcmUgYXJvdW5kIHRoZSBoZXhhZ29uIGl0IGlzXG4gICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy54LCAtdGhpcy55KTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLnggLSBERUZBVUxUUy5TSVpFLCB0aGlzLnkgLSBERUZBVUxUUy5TSVpFKTtcbiAgICBjdHgubGluZVRvKHRoaXMueCArIERFRkFVTFRTLlNJWkUsIHRoaXMueSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLnggLSBERUZBVUxUUy5TSVpFLCB0aGlzLnkgKyBERUZBVUxUUy5TSVpFKTtcbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1I7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxufSIsImltcG9ydCBTdG9wd2F0Y2ggZnJvbSAnLi9zdG9wd2F0Y2gnO1xuaW1wb3J0IEhleGFnb24gZnJvbSAnLi9oZXhhZ29uJztcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi9jdXJzb3InO1xuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vc2VjdGlvbnMnO1xuLy8gaW1wb3J0IHRoZSBvdGhlciBzY3JpcHRzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpY2tlZEhleGFnb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG5cbiAgICB0aGlzLnNlY3Rpb25zID0gbmV3IFNlY3Rpb25zKGNhbnZhcyk7XG4gICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB0aGlzLnN0b3B3YXRjaCA9IG5ldyBTdG9wd2F0Y2goY2FudmFzKTtcbiAgICB0aGlzLmhleGFnb24gPSBuZXcgSGV4YWdvbihjYW52YXMpO1xuICAgIHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcihjYW52YXMpO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpXG4gICAgdGhpcy5hbmltYXRlKHRpbWVzdGFtcCk7XG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgbGV0IHQgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMuc3RvcHdhdGNoLnN0YXJ0KHQpO1xuICB9XG5cbiAgYW5pbWF0ZSh0aW1lc3RhbXApIHtcbiAgICBsZXQgZGVsdGFUaW1lID0gdGltZXN0YW1wIC0gdGhpcy5sYXN0VGltZTtcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuICAgIC8vIHJvdGF0ZSBzZWN0aW9uc1xuICAgIC8vIHJvdGF0ZSBoZXhhZ29uXG4gICAgLy8gcm90YXRlIGN1cnNvciAtIHVwZGF0ZShkZWx0YVRpbWUpXG4gIH1cblxuICBwaXZvdENsb2Nrd2lzZSgpIHtcblxuICB9XG5cbiAgcGl2b3RDb3VudGVyQ2xvY2t3aXNlKCkge1xuXG4gIH1cblxuICByZWdpc3RlckV2ZW50cygpIHtcbiAgICB0aGlzLmxlZnRIYW5kbGVyID0gdGhpcy5waXZvdENsb2Nrd2lzZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmlnaHRIYW5kbGVyID0gdGhpcy5waXZvdENvdW50ZXJDbG9ja3dpc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBsYXlHYW1lID0gdGhpcy5wbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgfHwgZXZlbnQua2V5Q29kZSA9PT0gNjUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVmdEhhbmRsZXI7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5IHx8IGV2ZW50LmtleUNvZGUgPT09IDY4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJpZ2h0SGFuZGxlcjtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheUdhbWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXN0YXJ0KCkge1xuXG4gIH1cbn0iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXCIjMDAwMDAwXCIsIFwiIzA4ZmI3YlwiXSxcbiAgU0laRTogNTAsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhleGFnb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGxldCBoZXgxID0gMDtcbiAgICBmb3IgKGhleDE7IGhleDEgPD0gNjsgaGV4MSsrKSB7XG4gICAgICBjdHgubGluZVRvKHRoaXMueCArIERFRkFVTFRTLlNJWkUgKiBNYXRoLmNvcyhoZXgxICogMiAqIE1hdGguUEkgLyA2KSwgdGhpcy55ICsgREVGQVVMVFMuU0laRSAqIE1hdGguc2luKGhleDEgKiAyICogTWF0aC5QSSAvIDYpKTtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzFdO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG5cbiAgICBsZXQgaGV4MiA9IDA7XG4gICAgZm9yIChoZXgyOyBoZXgyIDw9IDY7IGhleDIrKykge1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyA0NCAqIE1hdGguY29zKGhleDIgKiAyICogTWF0aC5QSSAvIDYpLCB0aGlzLnkgKyA0NCAqIE1hdGguc2luKGhleDIgKiAyICogTWF0aC5QSSAvIDYpKTtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzBdO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICByb3RhdGUoKSB7XG4gICAgXG4gIH1cbn0iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXCIjMDAwMDAwXCIsIFwiIzAyMjcxM1wiXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbnMge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICBcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBsZXQgcHJldkNvb3JkO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSArIDYwO1xuICAgICAgaWYgKHRoaXMuYW5nbGUgPCAwKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSAzNjAgLSB0aGlzLmFuZ2xlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFuZ2xlID4gMzYwKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICUgMzYwO1xuICAgICAgfVxuXG4gICAgICBsZXQgeDIsIHkyLCBsZW5ndGg7XG5cbiAgICAgIC8vIGxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5zcXJ0KDMpICogdGhpcy54ICogMik7XG4gICAgICBsZW5ndGggPSAyMDAwO1xuICAgICAgeDIgPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBsZW5ndGg7XG4gICAgICB5MiA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIGxlbmd0aDtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG4gICAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gICAgICBpZiAocHJldkNvb3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3R4LmxpbmVUbyguLi5wcmV2Q29vcmQpO1xuICAgICAgfVxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTW2kgJSAyXTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbaSAlIDJdO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgcHJldkNvb3JkID0gW3gyLCB5Ml07XG4gICAgfVxuICB9XG59IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1wiIzAwMDAwMFwiLCBcIiNmZmZmZmZcIl0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3B3YXRjaCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLnRpbWUgPSBcIjAuMDBcIjtcblxuICAgIC8vIG9ubHkgZHJhdyB3aGVuIHN0YXJ0aW5nIHRoZSBnYW1lLyBzcGFjZSBidXR0b25cbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAtIDI2MCwgMCk7XG4gICAgLy8geDIgPSAodGhpcy5jYW52YXMud2lkdGggLSAyNjApICsgTWF0aC5jb3MoTWF0aC5QSSAqICg2MCAvIDE4MCkpICogNDA7XG4gICAgLy8geTIgPSBNYXRoLnNpbihNYXRoLlBJICogKDYwIC8gMTgwKSkgKiA0MDtcbiAgICBjdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC0gMjQwLCA0MCk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAtIDE0MCwgNDApO1xuICAgIGN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLSAxMzAsIDU2KTtcbiAgICBjdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoLCA1Nik7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCwgMCk7XG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzBdO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY29uc3QgdGltZVdvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0aW1lV29yZC5jbGFzc0xpc3QuYWRkKFwidGltZS13b3JkXCIpO1xuICAgIHRpbWVXb3JkLmlubmVySFRNTCA9IFwiVElNRVwiO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIik7XG4gICAgYm9keVswXS5hcHBlbmRDaGlsZCh0aW1lV29yZCk7XG5cbiAgICBjb25zdCBzdG9wd2F0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzdG9wd2F0Y2guY2xhc3NMaXN0LmFkZChcInN0b3B3YXRjaFwiKTtcbiAgICBzdG9wd2F0Y2guaW5uZXJIVE1MID0gdGhpcy50aW1lO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQoc3RvcHdhdGNoKTtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YVRpbWUpIHtcbiAgICAvLyBjb25zdCBzZWNzIFxuICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==