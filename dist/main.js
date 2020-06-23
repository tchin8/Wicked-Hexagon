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
    this.rotateAngle = 0;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.cursorX = canvas.width / 2 + Math.cos(this.angle * Math.PI / 180) * DEFAULTS.RADIUS;
    this.cursorY = canvas.height / 2 + Math.sin(this.angle * Math.PI / 180) * DEFAULTS.RADIUS;
    this.draw(this.ctx);
  }

  _createClass(Cursor, [{
    key: "draw",
    value: function draw(ctx) {
      // right, vel + 30?
      // rotates the cursor depending on where around the hexagon it is
      ctx.translate(this.cursorX, this.cursorY);
      ctx.rotate(this.angle * Math.PI / 180);
      ctx.translate(-this.cursorX, -this.cursorY);
      ctx.beginPath();
      ctx.moveTo(this.cursorX - DEFAULTS.SIZE, this.cursorY - DEFAULTS.SIZE);
      ctx.lineTo(this.cursorX + DEFAULTS.SIZE, this.cursorY);
      ctx.lineTo(this.cursorX - DEFAULTS.SIZE, this.cursorY + DEFAULTS.SIZE);
      ctx.fillStyle = DEFAULTS.COLOR;
      ctx.fill();
      ctx.translate(this.cursorX, this.cursorY);
      ctx.rotate(-this.angle * Math.PI / 180);
      ctx.translate(-this.cursorX, -this.cursorY);
    }
  }, {
    key: "rotate",
    value: function rotate(ctx) {
      ctx.moveTo(this.x, this.y);
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotateAngle * Math.PI / 180);
      ctx.translate(-this.x, -this.y);
      this.draw(ctx);
    }
  }, {
    key: "animate",
    value: function animate(deltaTime, ctx) {
      this.rotateAngle = 20 / deltaTime;
      this.rotate(ctx);
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

      this.ctx.moveTo(this.x, this.y);
      this.stopwatch.animate(this.startTime); // this.cursor.draw(this.ctx);

      this.sections.animate(deltaTime);
      this.hexagon.animate(deltaTime);
      this.cursor.animate(deltaTime, this.ctx); // rotate sections
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
      // this.angle = (20 / deltaTime);
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
      this.draw(this.ctx);
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
      var stopwatch = document.getElementsByClassName("stopwatch");
      stopwatch[0].innerHTML = "";
      stopwatch[0].innerHTML += "".concat(this.time);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJXaWNrZWRIZXhhZ29uIiwiREVGQVVMVFMiLCJDT0xPUiIsIlJBRElVUyIsIlNJWkUiLCJDdXJzb3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiYW5nbGUiLCJyb3RhdGVBbmdsZSIsIngiLCJ5IiwiY3Vyc29yWCIsIk1hdGgiLCJjb3MiLCJQSSIsImN1cnNvclkiLCJzaW4iLCJkcmF3IiwidHJhbnNsYXRlIiwicm90YXRlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiZmlsbFN0eWxlIiwiZmlsbCIsImRlbHRhVGltZSIsImRpbWVuc2lvbnMiLCJydW5uaW5nIiwicmVnaXN0ZXJFdmVudHMiLCJyZXN0YXJ0Iiwic2VjdGlvbnMiLCJTZWN0aW9ucyIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInN0b3B3YXRjaCIsIlN0b3B3YXRjaCIsImhleGFnb24iLCJIZXhhZ29uIiwiY3Vyc29yIiwidGltZXN0YW1wIiwiRGF0ZSIsImxhc3RUaW1lIiwic3RhcnRUaW1lIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJ0aGF0IiwiZXZlbnQiLCJrZXlDb2RlIiwiY29uc29sZSIsImxvZyIsInBpdm90Q2xvY2t3aXNlIiwicGl2b3RDb3VudGVyQ2xvY2t3aXNlIiwicGxheSIsIkNPTE9SUyIsImhleDEiLCJoZXgyIiwicHJldkNvb3JkIiwiaSIsIngyIiwieTIiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInRpbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwibnVtIiwiZmxvb3IiLCJ0b1N0cmluZyIsInNwbGl0Iiwibm93Iiwicm91bmQiLCJjb3VudERlY2ltYWxzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7O0FBRUE7QUFJQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN4RCxN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S1osR0FBZjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDSCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgV2lja2VkSGV4YWdvbiBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG4vLyBpbXBvcnQgV2lja2VkSGV4YWdvbiBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5cbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gIGNhbnZhc0VsLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgY2FudmFzRWwud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICBuZXcgV2lja2VkSGV4YWdvbihjYW52YXNFbCk7XG59KTtcbiIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUjogXCIjMDhmYjdiXCIsXG4gIFJBRElVUzogNjAsXG4gIFNJWkU6IDUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJzb3Ige1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmdsZSA9IDMzMDtcbiAgICB0aGlzLnJvdGF0ZUFuZ2xlID0gMDtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIHRoaXMuY3Vyc29yWCA9IChjYW52YXMud2lkdGggLyAyKSArIChNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiBERUZBVUxUUy5SQURJVVMpO1xuICAgIHRoaXMuY3Vyc29yWSA9IChjYW52YXMuaGVpZ2h0IC8gMikgKyAoTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApICogREVGQVVMVFMuUkFESVVTKTtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIC8vIHJpZ2h0LCB2ZWwgKyAzMD9cbiAgICAvLyByb3RhdGVzIHRoZSBjdXJzb3IgZGVwZW5kaW5nIG9uIHdoZXJlIGFyb3VuZCB0aGUgaGV4YWdvbiBpdCBpc1xuICAgIGN0eC50cmFuc2xhdGUodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgIGN0eC5yb3RhdGUodGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGN0eC50cmFuc2xhdGUoLXRoaXMuY3Vyc29yWCwgLXRoaXMuY3Vyc29yWSk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLmN1cnNvclggLSBERUZBVUxUUy5TSVpFLCB0aGlzLmN1cnNvclkgLSBERUZBVUxUUy5TSVpFKTtcbiAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCArIERFRkFVTFRTLlNJWkUsIHRoaXMuY3Vyc29yWSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclggLSBERUZBVUxUUy5TSVpFLCB0aGlzLmN1cnNvclkgKyBERUZBVUxUUy5TSVpFKTtcbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1I7XG4gICAgY3R4LmZpbGwoKTtcblxuICAgIGN0eC50cmFuc2xhdGUodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgIGN0eC5yb3RhdGUoLXRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICBjdHgudHJhbnNsYXRlKC10aGlzLmN1cnNvclgsIC10aGlzLmN1cnNvclkpO1xuICB9XG5cbiAgcm90YXRlKGN0eCkge1xuICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgIGN0eC5yb3RhdGUodGhpcy5yb3RhdGVBbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgdGhpcy5kcmF3KGN0eCk7XG4gIH1cblxuICBhbmltYXRlKGRlbHRhVGltZSwgY3R4KSB7XG4gICAgdGhpcy5yb3RhdGVBbmdsZSA9ICgyMCAvIGRlbHRhVGltZSk7XG4gICAgdGhpcy5yb3RhdGUoY3R4KTtcbiAgfVxufSIsImltcG9ydCBTdG9wd2F0Y2ggZnJvbSAnLi9zdG9wd2F0Y2gnO1xuaW1wb3J0IEhleGFnb24gZnJvbSAnLi9oZXhhZ29uJztcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi9jdXJzb3InO1xuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vc2VjdGlvbnMnO1xuLy8gaW1wb3J0IHRoZSBvdGhlciBzY3JpcHRzXG5cbmNsYXNzIFdpY2tlZEhleGFnb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGg7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodDtcblxuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB0aGlzLnJlc3RhcnQoKTtcblxuICAgIHRoaXMuc2VjdGlvbnMgPSBuZXcgU2VjdGlvbnMoY2FudmFzKTtcbiAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIHRoaXMuc3RvcHdhdGNoID0gbmV3IFN0b3B3YXRjaChjYW52YXMpO1xuICAgIHRoaXMuaGV4YWdvbiA9IG5ldyBIZXhhZ29uKGNhbnZhcyk7XG4gICAgdGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKGNhbnZhcyk7XG4gIH1cblxuICBwbGF5KCkge1xuICAgIC8vIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgXG4gICAgLy8gLy8gd2hhdCBpcyB0aGlzIGV2ZW50P1xuICAgIGxldCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgXG4gICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgdGhpcy5hbmltYXRlKHRpbWVzdGFtcCk7XG4gIH1cbiAgXG4gIGFuaW1hdGUodGltZXN0YW1wKSB7XG4gICAgLy8gLy8gd2hhdCBhcmUgdGhlc2UgZXZlbiBmb3I/XG4gICAgbGV0IGRlbHRhVGltZSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWU7XG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcblxuICAgIC8vIGlkayBtYW5cbiAgICAvLyB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy54LCB0aGlzLnkpO1xuICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG4gICAgdGhpcy5zdG9wd2F0Y2guYW5pbWF0ZSh0aGlzLnN0YXJ0VGltZSk7XG4gICAgLy8gdGhpcy5jdXJzb3IuZHJhdyh0aGlzLmN0eCk7XG4gICAgdGhpcy5zZWN0aW9ucy5hbmltYXRlKGRlbHRhVGltZSk7XG4gICAgdGhpcy5oZXhhZ29uLmFuaW1hdGUoZGVsdGFUaW1lKTtcbiAgICB0aGlzLmN1cnNvci5hbmltYXRlKGRlbHRhVGltZSwgdGhpcy5jdHgpO1xuXG4gICAgLy8gcm90YXRlIHNlY3Rpb25zXG4gICAgLy8gcm90YXRlIGhleGFnb25cblxuICAgIC8vIGNvbnNvbGUubG9nKCdhbmltYXRpbmcnKTtcbiAgICBpZiAodGhpcy5ydW5uaW5nID0gdHJ1ZSkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBwaXZvdENsb2Nrd2lzZSgpIHtcblxuICB9XG5cbiAgcGl2b3RDb3VudGVyQ2xvY2t3aXNlKCkge1xuXG4gIH1cblxuICByZWdpc3RlckV2ZW50cygpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3IHx8IGV2ZW50LmtleUNvZGUgPT09IDY1KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsZWZ0PycpO1xuICAgICAgICB0aGF0LnBpdm90Q2xvY2t3aXNlKCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5IHx8IGV2ZW50LmtleUNvZGUgPT09IDY4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyaWdodD8nKTtcbiAgICAgICAgdGhhdC5waXZvdENvdW50ZXJDbG9ja3dpc2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NwYWNlJyk7XG4gICAgICAgIHRoYXQucnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoYXQucGxheSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVzdGFydCgpIHtcblxuICB9XG5cbiAgZ2FtZU92ZXIoKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lja2VkSGV4YWdvbjsiLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXCIjMDAwMDAwXCIsIFwiIzA4ZmI3YlwiXSxcbiAgU0laRTogNTAsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhleGFnb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLmFuZ2xlID0gMDtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGxldCBoZXgxID0gMDtcbiAgICBmb3IgKGhleDE7IGhleDEgPD0gNjsgaGV4MSsrKSB7XG4gICAgICBjdHgubGluZVRvKHRoaXMueCArIERFRkFVTFRTLlNJWkUgKiBNYXRoLmNvcyhoZXgxICogMiAqIE1hdGguUEkgLyA2KSwgdGhpcy55ICsgREVGQVVMVFMuU0laRSAqIE1hdGguc2luKGhleDEgKiAyICogTWF0aC5QSSAvIDYpKTtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzFdO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG5cbiAgICBsZXQgaGV4MiA9IDA7XG4gICAgZm9yIChoZXgyOyBoZXgyIDw9IDY7IGhleDIrKykge1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyA0NCAqIE1hdGguY29zKGhleDIgKiAyICogTWF0aC5QSSAvIDYpLCB0aGlzLnkgKyA0NCAqIE1hdGguc2luKGhleDIgKiAyICogTWF0aC5QSSAvIDYpKTtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzBdO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBhbmltYXRlKGRlbHRhVGltZSkge1xuICAgIC8vIHRoaXMuYW5nbGUgPSAoMjAgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cbn0iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXCIjMDAwMDAwXCIsIFwiIzAyMjcxM1wiXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbnMge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmdsZSA9IC02MDtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIFxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGxldCBwcmV2Q29vcmQ7XG5cbiAgICAvLyBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAvLyBjdHgucm90YXRlKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAvLyBjdHgudHJhbnNsYXRlKC10aGlzLngsIC10aGlzLnkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDY7IGkrKykge1xuICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyA2MDtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgKHRoaXMuYW5nbGUgPCAwKSB7XG4gICAgICAvLyAgIHRoaXMuYW5nbGUgPSAzNjAgLSB0aGlzLmFuZ2xlO1xuICAgICAgLy8gfSBlbHNlIGlmICh0aGlzLmFuZ2xlID4gMzYwKSB7XG4gICAgICAvLyAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICUgMzYwO1xuICAgICAgLy8gfVxuXG4gICAgICBsZXQgeDIsIHkyLCBsZW5ndGg7XG5cbiAgICAgIC8vIGxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5zcXJ0KDMpICogdGhpcy54ICogMik7XG4gICAgICBsZW5ndGggPSAyMDAwO1xuICAgICAgeDIgPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBsZW5ndGg7XG4gICAgICB5MiA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIGxlbmd0aDtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG4gICAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gICAgICBpZiAocHJldkNvb3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3R4LmxpbmVUbyguLi5wcmV2Q29vcmQpO1xuICAgICAgfVxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTW2kgJSAyXTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbaSAlIDJdO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgcHJldkNvb3JkID0gW3gyLCB5Ml07XG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZShkZWx0YVRpbWUpIHtcbiAgICAvLyB0aGlzLmFuZ2xlICs9ICgxIC8gZGVsdGFUaW1lKTtcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9ICBcbn0iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXCIjMDAwMDAwXCIsIFwiI2ZmZmZmZlwiXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcHdhdGNoIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMudGltZSA9IFwiMC4wMFwiO1xuXG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IHN0b3B3YXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdG9wd2F0Y2hcIik7XG4gICAgc3RvcHdhdGNoWzBdLmlubmVySFRNTCA9IFwiXCI7XG4gICAgc3RvcHdhdGNoWzBdLmlubmVySFRNTCArPSBgJHt0aGlzLnRpbWV9YDtcbiAgfVxuXG4gIGNvdW50RGVjaW1hbHMobnVtKSB7XG4gICAgaWYgKE1hdGguZmxvb3IobnVtKSAhPT0gbnVtKSB7XG4gICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aCB8fCAwO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGFuaW1hdGUoc3RhcnRUaW1lKSB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnRpbWUgPSBNYXRoLnJvdW5kKCgobm93IC0gc3RhcnRUaW1lKSAvIDEwMDApICogMTAwKSAvIDEwMDtcblxuICAgIGlmICh0aGlzLmNvdW50RGVjaW1hbHModGhpcy50aW1lKSA9PT0gMCkge1xuICAgICAgdGhpcy50aW1lID0gYCR7dGhpcy50aW1lfS4wMGA7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvdW50RGVjaW1hbHModGhpcy50aW1lKSA9PT0gMSkge1xuICAgICAgdGhpcy50aW1lID0gYCR7dGhpcy50aW1lfTBgO1xuICAgIH1cblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9