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
  SIZE: 5,
  VEL: 0
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
      // right, vel + 30?
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
    this.running = false;
    this.x = canvas.width;
    this.y = canvas.height;
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
      // this.running = true;
      // // what is this event?
      // let timestamp = new Date()
      // this.lastTime = 0;
      console.log('playfx');
      this.startTime = new Date();
      this.animate();
    }
  }, {
    key: "animate",
    value: function animate() {
      // // what are these even for?
      // let deltaTime = timestamp - this.lastTime;
      // this.lastTime = timestamp;
      // idk man
      // this.ctx.clearRect(0, 0, this.x, this.y);
      this.stopwatch.animate(this.startTime); // rotate sections
      // rotate hexagon
      // rotate cursor - update(deltaTime)
      // console.log('animating');

      if (this.running = true) {
        requestAnimationFrame(this.animate.bind(this));
      }
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
      var that = this;
      document.addEventListener("keydown", function (event) {
        if (event.keyCode === 37 || event.keyCode === 65) {
          console.log('left?');
          that.pivotClockwise();
        } else if (event.keyCode === 39 || event.keyCode === 68) {
          console.log('right?');
          that.pivotCounterClockwise();
        } else if (event.keyCode === 32) {
          console.log('space');
          that.running = true;
          that.play();
        }
      });
    }
  }, {
    key: "restart",
    value: function restart() {}
  }, {
    key: "gameOver",
    value: function gameOver() {
      this.running = false;
    }
  }]);

  return WickedHexagon;
}();

/* harmony default export */ __webpack_exports__["default"] = (WickedHexagon);

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

    this.drawBackground(this.ctx);
    this.drawBackground = this.drawBackground.bind(this);
  }

  _createClass(Stopwatch, [{
    key: "drawBackground",
    value: function drawBackground(ctx) {
      ctx.beginPath();
      ctx.moveTo(this.canvas.width - 260, 0); // x2 = (this.canvas.width - 260) + Math.cos(Math.PI * (60 / 180)) * 40;
      // y2 = Math.sin(Math.PI * (60 / 180)) * 40;

      ctx.lineTo(this.canvas.width - 240, 40);
      ctx.lineTo(this.canvas.width - 140, 40);
      ctx.lineTo(this.canvas.width - 130, 56);
      ctx.lineTo(this.canvas.width, 56);
      ctx.lineTo(this.canvas.width, 0); // ctx.strokeStyle = DEFAULTS.COLORS[0];
      // ctx.fillStyle = DEFAULTS.COLORS[0];
      // this.ctx.fillStyle = "#08fb7b";

      ctx.fill();
      ctx.stroke();
      var timeWord = document.createElement("span");
      timeWord.classList.add("time-word");
      timeWord.innerHTML = "TIME";
      var body = document.getElementsByTagName("body");
      body[0].appendChild(timeWord);

      if (this.time === '0.00') {
        var stopwatch = document.createElement("span");
        stopwatch.classList.add("stopwatch");
        stopwatch.innerHTML = "".concat(this.time);
        body[0].appendChild(stopwatch);
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      // ctx.globalCompositeOperation = 'source-over';
      this.drawBackground(ctx);
      var timeWord = document.createElement("span");
      timeWord.classList.add("time-word");
      timeWord.innerHTML = "TIME";
      var body = document.getElementsByTagName("body");
      body[0].appendChild(timeWord);
      var stopwatch = document.createElement("span");
      stopwatch.classList.add("stopwatch");
      stopwatch.innerHTML = "".concat(this.time);
      body[0].appendChild(stopwatch);
    }
  }, {
    key: "countDecimals",
    value: function countDecimals(num) {
      if (Math.floor(num) !== num) {
        return num.toString().split(".")[1].length || 0;
      }

      return 0;
    }
  }, {
    key: "animate",
    value: function animate(startTime) {
      var now = new Date();
      this.time = Math.round((now - startTime) / 1000 * 100) / 100;

      if (this.countDecimals(this.time) === 0) {
        this.time = "".concat(this.time, ".00");
      } else if (this.countDecimals(this.time) === 1) {
        this.time = "".concat(this.time, "0");
      } // console.log(this.countDecimals(this.time));
      // slower one
      // this.time = Math.floor((now - startTime) / 1000);


      this.draw(this.ctx); // this.drawBackground(this.ctx);
      // this.ctx.fillStyle = "#08fb7b";
      // this.ctx.fill();
      // console.log(this.ctx);
      // this.ctx.clearRect(this.canvas.width - 130, 10, 120, 100);
      // this.drawBackground(this.ctx);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJXaWNrZWRIZXhhZ29uIiwiREVGQVVMVFMiLCJDT0xPUiIsIlJBRElVUyIsIlNJWkUiLCJWRUwiLCJDdXJzb3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiYW5nbGUiLCJ4IiwiTWF0aCIsImNvcyIsIlBJIiwieSIsInNpbiIsImRyYXciLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJmaWxsU3R5bGUiLCJmaWxsIiwiZGltZW5zaW9ucyIsInJ1bm5pbmciLCJyZWdpc3RlckV2ZW50cyIsInJlc3RhcnQiLCJzZWN0aW9ucyIsIlNlY3Rpb25zIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwic3RvcHdhdGNoIiwiU3RvcHdhdGNoIiwiaGV4YWdvbiIsIkhleGFnb24iLCJjdXJzb3IiLCJjb25zb2xlIiwibG9nIiwic3RhcnRUaW1lIiwiRGF0ZSIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwidGhhdCIsImV2ZW50Iiwia2V5Q29kZSIsInBpdm90Q2xvY2t3aXNlIiwicGl2b3RDb3VudGVyQ2xvY2t3aXNlIiwicGxheSIsIkNPTE9SUyIsImhleDEiLCJoZXgyIiwicHJldkNvb3JkIiwiaSIsIngyIiwieTIiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInRpbWUiLCJkcmF3QmFja2dyb3VuZCIsInRpbWVXb3JkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIm51bSIsImZsb29yIiwidG9TdHJpbmciLCJzcGxpdCIsIm5vdyIsInJvdW5kIiwiY291bnREZWNpbWFscyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtDQUNBOztBQUVBO0FBSUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDeEQsTUFBTUMs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QUFHLEdBQUcsSUFBSWxDLElBQUosRUFBWjtBQUNBLFdBQUtxQixJQUFMLEdBQVlqRCxJQUFJLENBQUMrRCxLQUFMLENBQVksQ0FBQ0QsR0FBRyxHQUFHbkMsU0FBUCxJQUFvQixJQUFyQixHQUE2QixHQUF4QyxJQUErQyxHQUEzRDs7QUFFQSxVQUFJLEtBQUtxQyxhQUFMLENBQW1CLEtBQUtmLElBQXhCLE1BQWtDLENBQXRDLEVBQXlDO0FBQ3ZDLGFBQUtBLElBQUwsYUFBZSxLQUFLQSxJQUFwQjtBQUNELE9BRkQsTUFFTyxJQUFJLEtBQUtlLGFBQUwsQ0FBbUIsS0FBS2YsSUFBeEIsTUFBa0MsQ0FBdEMsRUFBeUM7QUFDOUMsYUFBS0EsSUFBTCxhQUFlLEtBQUtBLElBQXBCO0FBQ0QsT0FSZ0IsQ0FVakI7QUFFQTtBQUNBOzs7QUFFQSxXQUFLNUMsSUFBTCxDQUFVLEtBQUtULEdBQWYsRUFmaUIsQ0FpQmpCO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlGSCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgV2lja2VkSGV4YWdvbiBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG4vLyBpbXBvcnQgV2lja2VkSGV4YWdvbiBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5cbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gIGNhbnZhc0VsLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgY2FudmFzRWwud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICBuZXcgV2lja2VkSGV4YWdvbihjYW52YXNFbCk7XG59KTtcbiIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUjogXCIjMDhmYjdiXCIsXG4gIFJBRElVUzogNjAsXG4gIFNJWkU6IDUsXG4gIFZFTDogMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmFuZ2xlID0gMzMwO1xuICAgIHRoaXMueCA9IChjYW52YXMud2lkdGggLyAyKSArIChNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiBERUZBVUxUUy5SQURJVVMpO1xuICAgIHRoaXMueSA9IChjYW52YXMuaGVpZ2h0IC8gMikgKyAoTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApICogREVGQVVMVFMuUkFESVVTKTtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIC8vIHJpZ2h0LCB2ZWwgKyAzMD9cbiAgICAvLyByb3RhdGVzIHRoZSBjdXJzb3IgZGVwZW5kaW5nIG9uIHdoZXJlIGFyb3VuZCB0aGUgaGV4YWdvbiBpdCBpc1xuICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgIGN0eC5yb3RhdGUodGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy54IC0gREVGQVVMVFMuU0laRSwgdGhpcy55IC0gREVGQVVMVFMuU0laRSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLnggKyBERUZBVUxUUy5TSVpFLCB0aGlzLnkpO1xuICAgIGN0eC5saW5lVG8odGhpcy54IC0gREVGQVVMVFMuU0laRSwgdGhpcy55ICsgREVGQVVMVFMuU0laRSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cbn0iLCJpbXBvcnQgU3RvcHdhdGNoIGZyb20gJy4vc3RvcHdhdGNoJztcbmltcG9ydCBIZXhhZ29uIGZyb20gJy4vaGV4YWdvbic7XG5pbXBvcnQgQ3Vyc29yIGZyb20gJy4vY3Vyc29yJztcbmltcG9ydCBTZWN0aW9ucyBmcm9tICcuL3NlY3Rpb25zJztcbi8vIGltcG9ydCB0aGUgb3RoZXIgc2NyaXB0c1xuXG5jbGFzcyBXaWNrZWRIZXhhZ29uIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG5cbiAgICB0aGlzLnNlY3Rpb25zID0gbmV3IFNlY3Rpb25zKGNhbnZhcyk7XG4gICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB0aGlzLnN0b3B3YXRjaCA9IG5ldyBTdG9wd2F0Y2goY2FudmFzKTtcbiAgICB0aGlzLmhleGFnb24gPSBuZXcgSGV4YWdvbihjYW52YXMpO1xuICAgIHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcihjYW52YXMpO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICAvLyB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIFxuICAgIC8vIC8vIHdoYXQgaXMgdGhpcyBldmVudD9cbiAgICAvLyBsZXQgdGltZXN0YW1wID0gbmV3IERhdGUoKVxuICAgIC8vIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKCdwbGF5ZngnKTtcbiAgICBcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfVxuICBcbiAgYW5pbWF0ZSgpIHtcbiAgICAvLyAvLyB3aGF0IGFyZSB0aGVzZSBldmVuIGZvcj9cbiAgICAvLyBsZXQgZGVsdGFUaW1lID0gdGltZXN0YW1wIC0gdGhpcy5sYXN0VGltZTtcbiAgICAvLyB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuXG4gICAgLy8gaWRrIG1hblxuICAgIC8vIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLngsIHRoaXMueSk7XG4gICAgdGhpcy5zdG9wd2F0Y2guYW5pbWF0ZSh0aGlzLnN0YXJ0VGltZSk7XG4gICAgLy8gcm90YXRlIHNlY3Rpb25zXG4gICAgLy8gcm90YXRlIGhleGFnb25cbiAgICAvLyByb3RhdGUgY3Vyc29yIC0gdXBkYXRlKGRlbHRhVGltZSlcblxuICAgIC8vIGNvbnNvbGUubG9nKCdhbmltYXRpbmcnKTtcbiAgICBpZiAodGhpcy5ydW5uaW5nID0gdHJ1ZSkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBwaXZvdENsb2Nrd2lzZSgpIHtcblxuICB9XG5cbiAgcGl2b3RDb3VudGVyQ2xvY2t3aXNlKCkge1xuXG4gIH1cblxuICByZWdpc3RlckV2ZW50cygpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3IHx8IGV2ZW50LmtleUNvZGUgPT09IDY1KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsZWZ0PycpO1xuICAgICAgICB0aGF0LnBpdm90Q2xvY2t3aXNlKCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5IHx8IGV2ZW50LmtleUNvZGUgPT09IDY4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyaWdodD8nKTtcbiAgICAgICAgdGhhdC5waXZvdENvdW50ZXJDbG9ja3dpc2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NwYWNlJyk7XG4gICAgICAgIHRoYXQucnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoYXQucGxheSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVzdGFydCgpIHtcblxuICB9XG5cbiAgZ2FtZU92ZXIoKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lja2VkSGV4YWdvbjsiLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXCIjMDAwMDAwXCIsIFwiIzA4ZmI3YlwiXSxcbiAgU0laRTogNTAsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhleGFnb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGxldCBoZXgxID0gMDtcbiAgICBmb3IgKGhleDE7IGhleDEgPD0gNjsgaGV4MSsrKSB7XG4gICAgICBjdHgubGluZVRvKHRoaXMueCArIERFRkFVTFRTLlNJWkUgKiBNYXRoLmNvcyhoZXgxICogMiAqIE1hdGguUEkgLyA2KSwgdGhpcy55ICsgREVGQVVMVFMuU0laRSAqIE1hdGguc2luKGhleDEgKiAyICogTWF0aC5QSSAvIDYpKTtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzFdO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG5cbiAgICBsZXQgaGV4MiA9IDA7XG4gICAgZm9yIChoZXgyOyBoZXgyIDw9IDY7IGhleDIrKykge1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyA0NCAqIE1hdGguY29zKGhleDIgKiAyICogTWF0aC5QSSAvIDYpLCB0aGlzLnkgKyA0NCAqIE1hdGguc2luKGhleDIgKiAyICogTWF0aC5QSSAvIDYpKTtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzBdO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICByb3RhdGUoKSB7XG4gICAgXG4gIH1cbn0iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXCIjMDAwMDAwXCIsIFwiIzAyMjcxM1wiXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbnMge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICBcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBsZXQgcHJldkNvb3JkO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSArIDYwO1xuICAgICAgaWYgKHRoaXMuYW5nbGUgPCAwKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSAzNjAgLSB0aGlzLmFuZ2xlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFuZ2xlID4gMzYwKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICUgMzYwO1xuICAgICAgfVxuXG4gICAgICBsZXQgeDIsIHkyLCBsZW5ndGg7XG5cbiAgICAgIC8vIGxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5zcXJ0KDMpICogdGhpcy54ICogMik7XG4gICAgICBsZW5ndGggPSAyMDAwO1xuICAgICAgeDIgPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBsZW5ndGg7XG4gICAgICB5MiA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIGxlbmd0aDtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG4gICAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gICAgICBpZiAocHJldkNvb3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3R4LmxpbmVUbyguLi5wcmV2Q29vcmQpO1xuICAgICAgfVxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTW2kgJSAyXTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbaSAlIDJdO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgcHJldkNvb3JkID0gW3gyLCB5Ml07XG4gICAgfVxuICB9XG59IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1wiIzAwMDAwMFwiLCBcIiNmZmZmZmZcIl0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3B3YXRjaCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLnRpbWUgPSBcIjAuMDBcIjtcblxuICAgIC8vIG9ubHkgZHJhdyB3aGVuIHN0YXJ0aW5nIHRoZSBnYW1lLyBzcGFjZSBidXR0b25cbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKHRoaXMuY3R4KTtcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kID0gdGhpcy5kcmF3QmFja2dyb3VuZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZHJhd0JhY2tncm91bmQoY3R4KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLSAyNjAsIDApO1xuICAgIC8vIHgyID0gKHRoaXMuY2FudmFzLndpZHRoIC0gMjYwKSArIE1hdGguY29zKE1hdGguUEkgKiAoNjAgLyAxODApKSAqIDQwO1xuICAgIC8vIHkyID0gTWF0aC5zaW4oTWF0aC5QSSAqICg2MCAvIDE4MCkpICogNDA7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAtIDI0MCwgNDApO1xuICAgIGN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLSAxNDAsIDQwKTtcbiAgICBjdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC0gMTMwLCA1Nik7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCwgNTYpO1xuICAgIGN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGgsIDApO1xuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1swXTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzBdO1xuICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzA4ZmI3YlwiO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY29uc3QgdGltZVdvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0aW1lV29yZC5jbGFzc0xpc3QuYWRkKFwidGltZS13b3JkXCIpO1xuICAgIHRpbWVXb3JkLmlubmVySFRNTCA9IFwiVElNRVwiO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIik7XG4gICAgYm9keVswXS5hcHBlbmRDaGlsZCh0aW1lV29yZCk7XG5cbiAgICBpZiAodGhpcy50aW1lID09PSAnMC4wMCcpIHtcbiAgICAgIGNvbnN0IHN0b3B3YXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgc3RvcHdhdGNoLmNsYXNzTGlzdC5hZGQoXCJzdG9wd2F0Y2hcIik7XG4gICAgICBzdG9wd2F0Y2guaW5uZXJIVE1MID0gYCR7dGhpcy50aW1lfWA7XG4gICAgICBib2R5WzBdLmFwcGVuZENoaWxkKHN0b3B3YXRjaCk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICAvLyBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG5cbiAgICBjb25zdCB0aW1lV29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRpbWVXb3JkLmNsYXNzTGlzdC5hZGQoXCJ0aW1lLXdvcmRcIik7XG4gICAgdGltZVdvcmQuaW5uZXJIVE1MID0gXCJUSU1FXCI7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKTtcbiAgICBib2R5WzBdLmFwcGVuZENoaWxkKHRpbWVXb3JkKTtcblxuICAgIGNvbnN0IHN0b3B3YXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHN0b3B3YXRjaC5jbGFzc0xpc3QuYWRkKFwic3RvcHdhdGNoXCIpO1xuICAgIHN0b3B3YXRjaC5pbm5lckhUTUwgPSBgJHt0aGlzLnRpbWV9YDtcbiAgICBib2R5WzBdLmFwcGVuZENoaWxkKHN0b3B3YXRjaCk7XG4gIH1cblxuICBjb3VudERlY2ltYWxzKG51bSkge1xuICAgIGlmIChNYXRoLmZsb29yKG51bSkgIT09IG51bSkge1xuICAgICAgcmV0dXJuIG51bS50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGggfHwgMDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBhbmltYXRlKHN0YXJ0VGltZSkge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy50aW1lID0gTWF0aC5yb3VuZCgoKG5vdyAtIHN0YXJ0VGltZSkgLyAxMDAwKSAqIDEwMCkgLyAxMDA7XG5cbiAgICBpZiAodGhpcy5jb3VudERlY2ltYWxzKHRoaXMudGltZSkgPT09IDApIHtcbiAgICAgIHRoaXMudGltZSA9IGAke3RoaXMudGltZX0uMDBgO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb3VudERlY2ltYWxzKHRoaXMudGltZSkgPT09IDEpIHtcbiAgICAgIHRoaXMudGltZSA9IGAke3RoaXMudGltZX0wYDtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvdW50RGVjaW1hbHModGhpcy50aW1lKSk7XG5cbiAgICAvLyBzbG93ZXIgb25lXG4gICAgLy8gdGhpcy50aW1lID0gTWF0aC5mbG9vcigobm93IC0gc3RhcnRUaW1lKSAvIDEwMDApO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcblxuICAgIC8vIHRoaXMuZHJhd0JhY2tncm91bmQodGhpcy5jdHgpO1xuXG4gICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDhmYjdiXCI7XG5cbiAgICAvLyB0aGlzLmN0eC5maWxsKCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jdHgpO1xuICAgIFxuICAgIC8vIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLmNhbnZhcy53aWR0aCAtIDEzMCwgMTAsIDEyMCwgMTAwKTtcbiAgICAvLyB0aGlzLmRyYXdCYWNrZ3JvdW5kKHRoaXMuY3R4KTtcbiAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=