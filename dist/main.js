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
    this.angle = 270;
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
  }, {
    key: "animate",
    value: function animate(dt, ctx) {
      // this.angle += 30;
      this.draw(ctx);
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
      var timestamp = new Date();
      this.lastTime = 0;
      this.startTime = new Date();
      this.animate(timestamp);
    }
  }, {
    key: "animate",
    value: function animate(timestamp) {
      // // what are these even for?
      var deltaTime = timestamp - this.lastTime;
      this.lastTime = timestamp; // idk man
      // this.ctx.clearRect(0, 0, this.x, this.y);

      this.stopwatch.animate(this.startTime); // this.cursor.animate(deltaTime, this.ctx);
      // this.cursor.draw(this.ctx);

      this.sections.animate(deltaTime);
      this.hexagon.animate(deltaTime); // rotate sections
      // rotate hexagon
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
    this.angle = 0;
    this.draw(this.ctx);
  }

  _createClass(Hexagon, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle * Math.PI / 180);
      ctx.translate(-this.x, -this.y);
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
    key: "animate",
    value: function animate(deltaTime) {
      this.angle = 20 / deltaTime;
      this.draw(this.ctx);
    }
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
    this.angle = -60;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.draw(this.ctx);
  }

  _createClass(Sections, [{
    key: "draw",
    value: function draw(ctx) {
      var prevCoord; // ctx.translate(this.x, this.y);
      // ctx.rotate(this.angle * Math.PI / 180);
      // ctx.translate(-this.x, -this.y);

      for (var i = 0; i <= 6; i++) {
        if (i !== 0) {
          this.angle = this.angle + 60;
        } // if (this.angle < 0) {
        //   this.angle = 360 - this.angle;
        // } else if (this.angle > 360) {
        //   this.angle = this.angle % 360;
        // }


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
  }, {
    key: "animate",
    value: function animate(deltaTime) {
      // this.angle += (1 / deltaTime);
      // console.log(deltaTime);
      this.draw(this.ctx); // this.ctx.translate(this.x, this.y);
      // this.ctx.rotate(this.angle * Math.PI / 180);
      // this.ctx.translate(-this.x, -this.y);
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
    this.time = "0.00";
    this.draw();
  }

  _createClass(Stopwatch, [{
    key: "draw",
    value: function draw() {
      var container = document.createElement("div");
      container.classList.add('container');
      var body = document.getElementsByTagName("body");
      body[0].appendChild(container);
      var innerContainer = document.createElement("div");
      innerContainer.classList.add('inner-container');
      container.appendChild(innerContainer);
      var timeWord = document.createElement("span");
      timeWord.classList.add("time-word");
      timeWord.innerHTML = "TIME";
      container.appendChild(timeWord);
      var stopwatch = document.createElement("span");
      stopwatch.classList.add("stopwatch");
      stopwatch.innerHTML = "".concat(this.time);
      innerContainer.appendChild(stopwatch);
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
      }

      this.draw(this.ctx);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJXaWNrZWRIZXhhZ29uIiwiREVGQVVMVFMiLCJDT0xPUiIsIlJBRElVUyIsIlNJWkUiLCJDdXJzb3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiYW5nbGUiLCJ4IiwiTWF0aCIsImNvcyIsIlBJIiwieSIsInNpbiIsImRyYXciLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJmaWxsU3R5bGUiLCJmaWxsIiwiZHQiLCJkaW1lbnNpb25zIiwicnVubmluZyIsInJlZ2lzdGVyRXZlbnRzIiwicmVzdGFydCIsInNlY3Rpb25zIiwiU2VjdGlvbnMiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJzdG9wd2F0Y2giLCJTdG9wd2F0Y2giLCJoZXhhZ29uIiwiSGV4YWdvbiIsImN1cnNvciIsInRpbWVzdGFtcCIsIkRhdGUiLCJsYXN0VGltZSIsInN0YXJ0VGltZSIsImFuaW1hdGUiLCJkZWx0YVRpbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwidGhhdCIsImV2ZW50Iiwia2V5Q29kZSIsImNvbnNvbGUiLCJsb2ciLCJwaXZvdENsb2Nrd2lzZSIsInBpdm90Q291bnRlckNsb2Nrd2lzZSIsInBsYXkiLCJDT0xPUlMiLCJoZXgxIiwiaGV4MiIsInByZXZDb29yZCIsImkiLCJ4MiIsInkyIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJ0aW1lIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImlubmVyQ29udGFpbmVyIiwidGltZVdvcmQiLCJpbm5lckhUTUwiLCJudW0iLCJmbG9vciIsInRvU3RyaW5nIiwic3BsaXQiLCJub3ciLCJyb3VuZCIsImNvdW50RGVjaW1hbHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7Q0FDQTs7QUFFQTtBQUlBQSxRQUFRLENB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LEtBQUtBLElBQXBCO0FBQ0Q7O0FBRUQsV0FBS2hELElBQUwsQ0FBVSxLQUFLVCxHQUFmO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRILHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBXaWNrZWRIZXhhZ29uIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcbi8vIGltcG9ydCBXaWNrZWRIZXhhZ29uIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcblxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgY2FudmFzRWwuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICBjYW52YXNFbC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gIG5ldyBXaWNrZWRIZXhhZ29uKGNhbnZhc0VsKTtcbn0pO1xuIiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SOiBcIiMwOGZiN2JcIixcbiAgUkFESVVTOiA2MCxcbiAgU0laRTogNSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmFuZ2xlID0gMjcwO1xuICAgIHRoaXMueCA9IChjYW52YXMud2lkdGggLyAyKSArIChNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiBERUZBVUxUUy5SQURJVVMpO1xuICAgIHRoaXMueSA9IChjYW52YXMuaGVpZ2h0IC8gMikgKyAoTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApICogREVGQVVMVFMuUkFESVVTKTtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIC8vIHJpZ2h0LCB2ZWwgKyAzMD9cbiAgICAvLyByb3RhdGVzIHRoZSBjdXJzb3IgZGVwZW5kaW5nIG9uIHdoZXJlIGFyb3VuZCB0aGUgaGV4YWdvbiBpdCBpc1xuICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgIGN0eC5yb3RhdGUodGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy54IC0gREVGQVVMVFMuU0laRSwgdGhpcy55IC0gREVGQVVMVFMuU0laRSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLnggKyBERUZBVUxUUy5TSVpFLCB0aGlzLnkpO1xuICAgIGN0eC5saW5lVG8odGhpcy54IC0gREVGQVVMVFMuU0laRSwgdGhpcy55ICsgREVGQVVMVFMuU0laRSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBhbmltYXRlKGR0LCBjdHgpIHtcbiAgICAvLyB0aGlzLmFuZ2xlICs9IDMwO1xuICAgIHRoaXMuZHJhdyhjdHgpXG4gIH1cbn0iLCJpbXBvcnQgU3RvcHdhdGNoIGZyb20gJy4vc3RvcHdhdGNoJztcbmltcG9ydCBIZXhhZ29uIGZyb20gJy4vaGV4YWdvbic7XG5pbXBvcnQgQ3Vyc29yIGZyb20gJy4vY3Vyc29yJztcbmltcG9ydCBTZWN0aW9ucyBmcm9tICcuL3NlY3Rpb25zJztcbi8vIGltcG9ydCB0aGUgb3RoZXIgc2NyaXB0c1xuXG5jbGFzcyBXaWNrZWRIZXhhZ29uIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG5cbiAgICB0aGlzLnNlY3Rpb25zID0gbmV3IFNlY3Rpb25zKGNhbnZhcyk7XG4gICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB0aGlzLnN0b3B3YXRjaCA9IG5ldyBTdG9wd2F0Y2goY2FudmFzKTtcbiAgICB0aGlzLmhleGFnb24gPSBuZXcgSGV4YWdvbihjYW52YXMpO1xuICAgIHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcihjYW52YXMpO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICAvLyB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIFxuICAgIC8vIC8vIHdoYXQgaXMgdGhpcyBldmVudD9cbiAgICBsZXQgdGltZXN0YW1wID0gbmV3IERhdGUoKVxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIFxuICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcblxuICAgIHRoaXMuYW5pbWF0ZSh0aW1lc3RhbXApO1xuICB9XG4gIFxuICBhbmltYXRlKHRpbWVzdGFtcCkge1xuICAgIC8vIC8vIHdoYXQgYXJlIHRoZXNlIGV2ZW4gZm9yP1xuICAgIGxldCBkZWx0YVRpbWUgPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lO1xuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lc3RhbXA7XG5cbiAgICAvLyBpZGsgbWFuXG4gICAgLy8gdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMueCwgdGhpcy55KTtcbiAgICB0aGlzLnN0b3B3YXRjaC5hbmltYXRlKHRoaXMuc3RhcnRUaW1lKTtcbiAgICAvLyB0aGlzLmN1cnNvci5hbmltYXRlKGRlbHRhVGltZSwgdGhpcy5jdHgpO1xuICAgIC8vIHRoaXMuY3Vyc29yLmRyYXcodGhpcy5jdHgpO1xuICAgIHRoaXMuc2VjdGlvbnMuYW5pbWF0ZShkZWx0YVRpbWUpO1xuICAgIHRoaXMuaGV4YWdvbi5hbmltYXRlKGRlbHRhVGltZSk7XG5cbiAgICAvLyByb3RhdGUgc2VjdGlvbnNcbiAgICAvLyByb3RhdGUgaGV4YWdvblxuXG4gICAgLy8gY29uc29sZS5sb2coJ2FuaW1hdGluZycpO1xuICAgIGlmICh0aGlzLnJ1bm5pbmcgPSB0cnVlKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHBpdm90Q2xvY2t3aXNlKCkge1xuXG4gIH1cblxuICBwaXZvdENvdW50ZXJDbG9ja3dpc2UoKSB7XG5cbiAgfVxuXG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgfHwgZXZlbnQua2V5Q29kZSA9PT0gNjUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xlZnQ/Jyk7XG4gICAgICAgIHRoYXQucGl2b3RDbG9ja3dpc2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgfHwgZXZlbnQua2V5Q29kZSA9PT0gNjgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JpZ2h0PycpO1xuICAgICAgICB0aGF0LnBpdm90Q291bnRlckNsb2Nrd2lzZSgpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICBjb25zb2xlLmxvZygnc3BhY2UnKTtcbiAgICAgICAgdGhhdC5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhhdC5wbGF5KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXN0YXJ0KCkge1xuXG4gIH1cblxuICBnYW1lT3ZlcigpIHtcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaWNrZWRIZXhhZ29uOyIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcIiMwMDAwMDBcIiwgXCIjMDhmYjdiXCJdLFxuICBTSVpFOiA1MCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGV4YWdvbiB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy54LCAtdGhpcy55KTtcblxuICAgIGxldCBoZXgxID0gMDtcbiAgICBmb3IgKGhleDE7IGhleDEgPD0gNjsgaGV4MSsrKSB7XG4gICAgICBjdHgubGluZVRvKHRoaXMueCArIERFRkFVTFRTLlNJWkUgKiBNYXRoLmNvcyhoZXgxICogMiAqIE1hdGguUEkgLyA2KSwgdGhpcy55ICsgREVGQVVMVFMuU0laRSAqIE1hdGguc2luKGhleDEgKiAyICogTWF0aC5QSSAvIDYpKTtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzFdO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG5cbiAgICBsZXQgaGV4MiA9IDA7XG4gICAgZm9yIChoZXgyOyBoZXgyIDw9IDY7IGhleDIrKykge1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyA0NCAqIE1hdGguY29zKGhleDIgKiAyICogTWF0aC5QSSAvIDYpLCB0aGlzLnkgKyA0NCAqIE1hdGguc2luKGhleDIgKiAyICogTWF0aC5QSSAvIDYpKTtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzBdO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBhbmltYXRlKGRlbHRhVGltZSkge1xuICAgIHRoaXMuYW5nbGUgPSAoMjAgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cbn0iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXCIjMDAwMDAwXCIsIFwiIzAyMjcxM1wiXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbnMge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmdsZSA9IC02MDtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIFxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGxldCBwcmV2Q29vcmQ7XG5cbiAgICAvLyBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAvLyBjdHgucm90YXRlKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAvLyBjdHgudHJhbnNsYXRlKC10aGlzLngsIC10aGlzLnkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDY7IGkrKykge1xuICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyA2MDtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgKHRoaXMuYW5nbGUgPCAwKSB7XG4gICAgICAvLyAgIHRoaXMuYW5nbGUgPSAzNjAgLSB0aGlzLmFuZ2xlO1xuICAgICAgLy8gfSBlbHNlIGlmICh0aGlzLmFuZ2xlID4gMzYwKSB7XG4gICAgICAvLyAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICUgMzYwO1xuICAgICAgLy8gfVxuXG4gICAgICBsZXQgeDIsIHkyLCBsZW5ndGg7XG5cbiAgICAgIC8vIGxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5zcXJ0KDMpICogdGhpcy54ICogMik7XG4gICAgICBsZW5ndGggPSAyMDAwO1xuICAgICAgeDIgPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBsZW5ndGg7XG4gICAgICB5MiA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIGxlbmd0aDtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG4gICAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gICAgICBpZiAocHJldkNvb3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3R4LmxpbmVUbyguLi5wcmV2Q29vcmQpO1xuICAgICAgfVxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTW2kgJSAyXTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbaSAlIDJdO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgcHJldkNvb3JkID0gW3gyLCB5Ml07XG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZShkZWx0YVRpbWUpIHtcbiAgICAvLyB0aGlzLmFuZ2xlICs9ICgxIC8gZGVsdGFUaW1lKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gICAgLy8gdGhpcy5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAvLyB0aGlzLmN0eC5yb3RhdGUodGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgIC8vIHRoaXMuY3R4LnRyYW5zbGF0ZSgtdGhpcy54LCAtdGhpcy55KTtcbiAgfSAgXG59IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1wiIzAwMDAwMFwiLCBcIiNmZmZmZmZcIl0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3B3YXRjaCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLnRpbWUgPSBcIjAuMDBcIjtcblxuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgZHJhdygpIHtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIik7XG4gICAgYm9keVswXS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgY29uc3QgaW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlubmVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lubmVyLWNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbm5lckNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0aW1lV29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRpbWVXb3JkLmNsYXNzTGlzdC5hZGQoXCJ0aW1lLXdvcmRcIik7XG4gICAgdGltZVdvcmQuaW5uZXJIVE1MID0gXCJUSU1FXCI7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVXb3JkKTtcblxuICAgIGNvbnN0IHN0b3B3YXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHN0b3B3YXRjaC5jbGFzc0xpc3QuYWRkKFwic3RvcHdhdGNoXCIpO1xuICAgIHN0b3B3YXRjaC5pbm5lckhUTUwgPSBgJHt0aGlzLnRpbWV9YDtcbiAgICBpbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChzdG9wd2F0Y2gpO1xuICB9XG5cbiAgY291bnREZWNpbWFscyhudW0pIHtcbiAgICBpZiAoTWF0aC5mbG9vcihudW0pICE9PSBudW0pIHtcbiAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoIHx8IDA7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgYW5pbWF0ZShzdGFydFRpbWUpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMudGltZSA9IE1hdGgucm91bmQoKChub3cgLSBzdGFydFRpbWUpIC8gMTAwMCkgKiAxMDApIC8gMTAwO1xuXG4gICAgaWYgKHRoaXMuY291bnREZWNpbWFscyh0aGlzLnRpbWUpID09PSAwKSB7XG4gICAgICB0aGlzLnRpbWUgPSBgJHt0aGlzLnRpbWV9LjAwYDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY291bnREZWNpbWFscyh0aGlzLnRpbWUpID09PSAxKSB7XG4gICAgICB0aGlzLnRpbWUgPSBgJHt0aGlzLnRpbWV9MGA7XG4gICAgfVxuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=