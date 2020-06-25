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
  COLORS: ["#08fb7b", "#ef8708", "#c31e9e", "#6b4aca", "#2b6aea"],
  RADIUS: 60,
  SIZE: 5
};

var Cursor = /*#__PURE__*/function () {
  function Cursor(canvas) {
    _classCallCheck(this, Cursor);

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.angle = 330;
    this.rotateAngle = 0;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.draw(this.ctx);
  }

  _createClass(Cursor, [{
    key: "tip",
    value: function tip() {
      var x = this.canvas.width / 2 + Math.cos(this.angle * Math.PI / 180) * (DEFAULTS.RADIUS + DEFAULTS.SIZE);
      var y = this.canvas.height / 2 + Math.sin(this.angle * Math.PI / 180) * (DEFAULTS.RADIUS + DEFAULTS.SIZE);
      return [x, y];
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.cursorX = this.canvas.width / 2 + Math.cos(this.angle * Math.PI / 180) * DEFAULTS.RADIUS;
      this.cursorY = this.canvas.height / 2 + Math.sin(this.angle * Math.PI / 180) * DEFAULTS.RADIUS;
      ctx.translate(this.cursorX, this.cursorY);
      ctx.rotate(this.angle * Math.PI / 180);
      ctx.translate(-this.cursorX, -this.cursorY);
      ctx.beginPath();
      ctx.moveTo(this.cursorX - DEFAULTS.SIZE, this.cursorY - DEFAULTS.SIZE);
      ctx.lineTo(this.cursorX + DEFAULTS.SIZE, this.cursorY);
      ctx.lineTo(this.cursorX - DEFAULTS.SIZE, this.cursorY + DEFAULTS.SIZE);
      ctx.fillStyle = DEFAULTS.COLORS[2];
      ctx.fill();
      ctx.translate(this.cursorX, this.cursorY);
      ctx.rotate(-this.angle * Math.PI / 180);
      ctx.translate(-this.cursorX, -this.cursorY);
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.draw(ctx);
    }
  }, {
    key: "pivotClockwise",
    value: function pivotClockwise(deltaTime, ctx) {
      this.angle += 150 / deltaTime;
      this.draw(ctx);
    }
  }, {
    key: "pivotCounterClockwise",
    value: function pivotCounterClockwise(deltaTime, ctx) {
      this.angle -= 150 / deltaTime;
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
/* harmony import */ var _walls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./walls */ "./src/scripts/walls.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





 // import the other scripts

var COLORS = [// base, sections, cursor/walls   ~ // black to color // white to color
["#000000", "#022713", "#08fb7b"], // black/green
["#000000", "#261501", "#ef8708"], // black/orange
["#ffffff", "#f5dcf0", "#c31e9e"], // white/pink
["#ffffff", "#e7e3f7", "#6b4aca"], // white/purple
["#ffffff", "#dde8fc", "#2b6aea"] // white/blue
];

var WickedHexagon = /*#__PURE__*/function () {
  function WickedHexagon(canvas) {
    _classCallCheck(this, WickedHexagon);

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.dimensions = {
      width: canvas.width,
      height: canvas.height
    };
    this.running = false;
    this.x = canvas.width;
    this.y = canvas.height;
    this.registerEvents();
    this.sections = new _sections__WEBPACK_IMPORTED_MODULE_3__["default"](canvas);
    this.ctx.globalCompositeOperation = 'source-over';
    this.stopwatch = new _stopwatch__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
    this.hexagon = new _hexagon__WEBPACK_IMPORTED_MODULE_1__["default"](canvas);
    this.cursor = new _cursor__WEBPACK_IMPORTED_MODULE_2__["default"](canvas);
    this.cursorDir = '';
    this.music = new Audio('assets/sounds/Cusp.mp3');
    this.beginAudio = new Audio('assets/sounds/begin.mp3');
    this.gameOverAudio = new Audio('assets/sounds/game_over.mp3');
  }

  _createClass(WickedHexagon, [{
    key: "play",
    value: function play() {
      var _this = this;

      this.running = true;
      var timestamp = new Date();
      this.lastTime = 0;
      this.startTime = new Date();
      setTimeout(function () {
        return _this.animate(timestamp);
      }, 300);
      this.walls = new _walls__WEBPACK_IMPORTED_MODULE_4__["default"](this.canvas);
      this.beginAudio.play();
      this.populateWalls = setInterval(function () {
        return _this.walls.populateWalls();
      }, 800);
      this.music.load();
      this.music.play();
    }
  }, {
    key: "animate",
    value: function animate(timestamp) {
      var deltaTime = timestamp - this.lastTime;
      this.deltaTime = deltaTime;
      this.lastTime = timestamp;
      this.stopwatch.animate(this.startTime);
      this.sections.animate(deltaTime);
      this.hexagon.animate(deltaTime);
      this.cursor.animate(this.ctx);
      this.walls.animate(this.ctx);

      if (this.gameOver() === true) {
        this.running = false;
        this.gameOverAudio.play();
        this.music.pause();
        this.stopwatch.stop();
        this.hexagon.stop();
        clearInterval(this.populateWalls);
      }

      if (this.cursorDir === 'clockwise') {
        this.cursor.pivotClockwise(deltaTime, this.ctx);
      } else if (this.cursorDir === 'counterClockwise') {
        this.cursor.pivotCounterClockwise(deltaTime, this.ctx);
      }

      if (this.running === true) {
        requestAnimationFrame(this.animate.bind(this));
      }
    }
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      var that = this;
      document.addEventListener("keydown", function (event) {
        if (event.keyCode === 37 || event.keyCode === 65) {
          if (that.running) {
            that.cursorDir = 'counterClockwise';
          }
        } else if (event.keyCode === 39 || event.keyCode === 68) {
          if (that.running) {
            that.cursorDir = 'clockwise';
          }
        } else if (event.keyCode === 32) {
          that.play();
        }
      });
      document.addEventListener("keyup", function () {
        return that.cursorDir = '';
      });
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      return this.walls.collidesWith(this.cursor.tip());
    }
  }, {
    key: "drawPregame",
    value: function drawPregame() {}
  }, {
    key: "drawPostgame",
    value: function drawPostgame() {}
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULTS = {
  COLORS: [["#000000", "#08fb7b"], ["#000000", "#ef8708"], ["#ffffff", "#c31e9e"], ["#ffffff", "#6b4aca"], ["#ffffff", "#2b6aea"]],
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

      ctx.fillStyle = DEFAULTS.COLORS[2][1];
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      var hex2 = 0;

      for (hex2; hex2 <= 6; hex2++) {
        ctx.lineTo(this.x + 44 * Math.cos(hex2 * 2 * Math.PI / 6), this.y + 44 * Math.sin(hex2 * 2 * Math.PI / 6));
      }

      ctx.fillStyle = DEFAULTS.COLORS[2][0];
      ctx.fill();
    }
  }, {
    key: "animate",
    value: function animate(deltaTime) {
      this.angle = 20 / deltaTime;
      this.draw(this.ctx);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.angle = 0;
    }
  }]);

  return Hexagon;
}();

/* harmony default export */ __webpack_exports__["default"] = (Hexagon);

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
  COLORS: [["#000000", "#022713"], ["#000000", "#261501"], ["#ffffff", "#f5dcf0"], ["#ffffff", "#e7e3f7"], ["#ffffff", "#dde8fc"]]
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
      var prevCoord;

      for (var i = 0; i <= 6; i++) {
        if (i !== 0) {
          this.angle = this.angle + 60;
        }

        var x2 = void 0,
            y2 = void 0,
            length = void 0; // length = Math.floor(Math.sqrt(3) * this.x * 2);

        length = 1500;
        x2 = this.x + Math.cos(Math.PI * this.angle / 180) * length;
        y2 = this.y + Math.sin(Math.PI * this.angle / 180) * length;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(x2, y2);

        if (prevCoord !== undefined) {
          ctx.lineTo.apply(ctx, _toConsumableArray(prevCoord));
        }

        ctx.strokeStyle = DEFAULTS.COLORS[2][i % 2];
        ctx.fillStyle = DEFAULTS.COLORS[2][i % 2];
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULTS = {
  COLORS: [["#000000", "#ffffff"], ["#ffffff", "#ef8708"], ["#ffffff", "#6b4aca"], ["#ffffff", "#2b6aea"]]
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
  }, {
    key: "stop",
    value: function stop() {
      var time = this.time;
      this.time = time;
    }
  }]);

  return Stopwatch;
}();

/* harmony default export */ __webpack_exports__["default"] = (Stopwatch);

/***/ }),

/***/ "./src/scripts/walls.js":
/*!******************************!*\
  !*** ./src/scripts/walls.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  COLORS: [["#08fb7b", 'rgba(0,0,0,0)'], ["#ef8708", 'rgba(0,0,0,0)'], ["#c31e9e", 'rgba(0,0,0,0)'], ["#6b4aca", 'rgba(0,0,0,0)'], ["#2b6aea", 'rgba(0,0,0,0)']],
  // second color is transparent
  SIZE: 40,
  MAX: 1000 // corresponds w/ the sections' lengths

};

var Walls = /*#__PURE__*/function () {
  function Walls(canvas) {
    _classCallCheck(this, Walls);

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.angle = -60;
    this.animateWallAngle = -60;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.combos = [[true, true, true, true, true, false], [true, true, true, true, false, true], [true, true, true, false, true, true], [true, true, false, true, true, true], [true, false, true, true, true, true], [false, true, true, true, true, true], [true, false, true, false, true, false], [false, true, false, true, false, true], [true, true, false, true, true, false]];
    this.wallCombos = [];
  }

  _createClass(Walls, [{
    key: "draw",
    value: function draw(ctx, combo) {
      var prevCoord,
          walls = [];

      for (var i = -1; i <= 5; i++) {
        if (i !== -1) {
          this.angle = this.angle + 60;
        }

        if (this.angle >= 360) {
          this.angle = this.angle % 360;
        }

        var x2 = void 0,
            y2 = void 0,
            ax = void 0,
            ay = void 0,
            bx = void 0,
            by = void 0; // outter trapezoid corner

        x2 = this.x + Math.cos(Math.PI * this.angle / 180) * DEFAULTS.MAX;
        y2 = this.y + Math.sin(Math.PI * this.angle / 180) * DEFAULTS.MAX; // inner tapezoid point on first line 

        bx = this.x + Math.cos(Math.PI * this.angle / 180) * (DEFAULTS.MAX - DEFAULTS.SIZE);
        by = this.y + Math.sin(Math.PI * this.angle / 180) * (DEFAULTS.MAX - DEFAULTS.SIZE);
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.lineTo(x2, y2);

        if (prevCoord !== undefined) {
          ctx.lineTo.apply(ctx, _toConsumableArray(prevCoord));
          ax = prevCoord[0] + Math.cos(Math.PI * (this.angle + 120) / 180) * DEFAULTS.SIZE;
          ay = prevCoord[1] + Math.sin(Math.PI * (this.angle + 120) / 180) * DEFAULTS.SIZE;
          ctx.lineTo(ax, ay);
          ctx.lineTo(bx, by);
        }

        if (i === -1 || combo[i] === false) {
          debugger;
          ctx.strokeStyle = DEFAULTS.COLORS[2][1];
          ctx.fillStyle = DEFAULTS.COLORS[2][1];
        } else if (combo[i]) {
          ctx.strokeStyle = DEFAULTS.COLORS[2][0];
          ctx.fillStyle = DEFAULTS.COLORS[2][0];
        }

        ctx.fill();
        ctx.stroke();
        prevCoord = [x2, y2];
        var wall = {
          length: 1000,
          isWall: ''
        };

        if (i === -1) {
          wall.isWall = 'line';
        } else {
          wall.isWall = combo[i];
        }

        walls.push(wall);
      }

      this.wallCombos.push(walls);
    }
  }, {
    key: "collidesWith",
    value: function collidesWith(cursorPos) {
      if (this.wallCombos.length !== 0) {
        for (var j = 0; j < this.wallCombos.length; j++) {
          var walls = this.wallCombos[j];

          for (var i = 1; i < walls.length; i++) {
            var wall = walls[i];

            if (wall.isWall) {
              var _cursorPos = _slicedToArray(cursorPos, 2),
                  x = _cursorPos[0],
                  y = _cursorPos[1];

              var _wall$point = _slicedToArray(wall.point1, 2),
                  ax = _wall$point[0],
                  ay = _wall$point[1];

              var _wall$point2 = _slicedToArray(wall.point2, 2),
                  bx = _wall$point2[0],
                  by = _wall$point2[1];

              var length1 = this.getDistance(x, y, ax, ay);
              var length2 = this.getDistance(x, y, bx, by);

              if (length1 + length2 <= wall.length - 39) {
                return true;
              }
            }
          }
        }

        return false;
      }
    }
  }, {
    key: "getDistance",
    value: function getDistance(ax, ay, bx, by) {
      var x = ax - bx;
      var y = ay - by;
      return Math.sqrt(x * x + y * y);
    }
  }, {
    key: "populateWalls",
    value: function populateWalls() {
      var combosIdx = Math.floor(Math.random() * this.combos.length);
      var combo = this.combos[combosIdx];
      this.draw(this.ctx, combo);
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      if (this.wallCombos.length !== 0 && this.wallCombos[this.wallCombos.length - 1].length % 7 === 0) {
        for (var i = 0; i < this.wallCombos.length; i++) {
          var walls = this.wallCombos[i];

          if (walls[0].length === 70) {
            this.wallCombos.unshift();
            continue;
          }

          var prevCoord = void 0;

          for (var j = 0; j < walls.length; j++) {
            var wall = walls[j];

            if (wall.isWall !== 'line') {
              this.animateWallAngle = this.animateWallAngle + 60;
            }

            if (this.animateWallAngle >= 360) {
              this.animateWallAngle = this.animateWallAngle % 360;
            }

            var x2 = void 0,
                y2 = void 0,
                ax = void 0,
                ay = void 0,
                bx = void 0,
                by = void 0,
                newLength = void 0;
            newLength = wall.length - 5;
            x2 = this.x + Math.cos(Math.PI * this.animateWallAngle / 180) * newLength;
            y2 = this.y + Math.sin(Math.PI * this.animateWallAngle / 180) * newLength; // tapezoid point on first line 

            bx = this.x + Math.cos(Math.PI * this.animateWallAngle / 180) * (newLength - DEFAULTS.SIZE);
            by = this.y + Math.sin(Math.PI * this.animateWallAngle / 180) * (newLength - DEFAULTS.SIZE);
            ctx.beginPath();
            ctx.moveTo(bx, by);
            ctx.lineTo(x2, y2);

            if (prevCoord !== undefined) {
              ctx.lineTo.apply(ctx, _toConsumableArray(prevCoord));
              ax = prevCoord[0] + Math.cos(Math.PI * (this.animateWallAngle + 120) / 180) * DEFAULTS.SIZE;
              ay = prevCoord[1] + Math.sin(Math.PI * (this.animateWallAngle + 120) / 180) * DEFAULTS.SIZE;
              ctx.lineTo(ax, ay);
              ctx.lineTo(bx, by);
            }

            if (wall.isWall === true) {
              ctx.strokeStyle = DEFAULTS.COLORS[2][0];
              ctx.fillStyle = DEFAULTS.COLORS[2][0];
            } else if (wall.isWall === false) {
              ctx.strokeStyle = DEFAULTS.COLORS[2][1];
              ctx.fillStyle = DEFAULTS.COLORS[2][1];
            }

            ctx.fill();
            ctx.stroke();
            prevCoord = [x2, y2];
            this.wallCombos[i][j] = {
              length: newLength,
              isWall: wall.isWall,
              angle: this.animateWallAngle,
              point1: [ax, ay],
              point2: [bx, by]
            };
          }
        }
      }
    }
  }]);

  return Walls;
}();

/* harmony default export */ __webpack_exports__["default"] = (Walls);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIldpY2tlZEhleGFnb24iLCJERUZBVUxUUyIsIkNPTE9SUyIsIlJBRElVUyIsIlNJWkUiLCJDdXJzb3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiYW5nbGUiLCJyb3RhdGVBbmdsZSIsIngiLCJ5IiwiZHJhdyIsIk1hdGgiLCJjb3MiLCJQSSIsInNpbiIsImN1cnNvclgiLCJjdXJzb3JZIiwidHJhbnNsYXRlIiwicm90YXRlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiZmlsbFN0eWxlIiwiZmlsbCIsImRlbHRhVGltZSIsImRpbWVuc2lvbnMiLCJydW5uaW5nIiwicmVnaXN0ZXJFdmVudHMiLCJzZWN0aW9ucyIsIlNlY3Rpb25zIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwic3RvcHdhdGNoIiwiU3RvcHdhdGNoIiwiaGV4YWdvbiIsIkhleGFnb24iLCJjdXJzb3IiLCJjdXJzb3JEaXIiLCJtdXNpYyIsIkF1ZGlvIiwiYmVnaW5BdWRpbyIsImdhbWVPdmVyQXVkaW8iLCJ0aW1lc3RhbXAiLCJEYXRlIiwibGFzdFRpbWUiLCJzdGFydFRpbWUiLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZSIsIndhbGxzIiwiV2FsbHMiLCJwbGF5IiwicG9wdWxhdGVXYWxscyIsInNldEludGVydmFsIiwibG9hZCIsImdhbWVPdmVyIiwicGF1c2UiLCJzdG9wIiwiY2xlYXJJbnRlcnZhbCIsInBpdm90Q2xvY2t3aXNlIiwicGl2b3RDb3VudGVyQ2xvY2t3aXNlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsInRoYXQiLCJldmVudCIsImtleUNvZGUiLCJjb2xsaWRlc1dpdGgiLCJ0aXAiLCJoZXgxIiwiaGV4MiIsInByZXZDb29yZCIsImkiLCJ4MiIsInkyIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJ0aW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVySFRNTCIsIm51bSIsImZsb29yIiwidG9TdHJpbmciLCJzcGxpdCIsIm5vdyIsInJvdW5kIiwiY291bnREZWNpbWFscyIsIk1BWCIsImFuaW1hdGVXYWxsQW5nbGUiLCJjb21ib3MiLCJ3YWxsQ29tYm9zIiwiY29tYm8iLCJheCIsImF5IiwiYngiLCJieSIsIndhbGwiLCJpc1dhbGwiLCJwdXNoIiwiY3Vyc29yUG9zIiwiaiIsInBvaW50MSIsInBvaW50MiIsImxlbmd0aDEiLCJnZXREaXN0YW5jZSIsImxlbmd0aDIiLCJzcXJ0IiwiY29tYm9zSWR4IiwicmFuZG9tIiwidW5zaGlmdCIsIm5ld0xlbmd0aCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFn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Q1IsRUFBRCxFQUFLQyxFQUFMO0FBTGMsYUFBeEI7QUFPRDtBQUNGO0FBQ0Y7QUFDRjs7Ozs7O0FBR1k5QyxvRUFBZixFOzs7Ozs7Ozs7OztBQzVOQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgV2lja2VkSGV4YWdvbiBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG4vLyBpbXBvcnQgV2lja2VkSGV4YWdvbiBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5cbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gIGNhbnZhc0VsLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgY2FudmFzRWwud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICBuZXcgV2lja2VkSGV4YWdvbihjYW52YXNFbCk7XG59KTtcbiIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcbiAgICBcIiMwOGZiN2JcIixcbiAgICBcIiNlZjg3MDhcIixcbiAgICBcIiNjMzFlOWVcIixcbiAgICBcIiM2YjRhY2FcIixcbiAgICBcIiMyYjZhZWFcIixcbiAgXSxcbiAgUkFESVVTOiA2MCxcbiAgU0laRTogNSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmFuZ2xlID0gMzMwO1xuICAgIHRoaXMucm90YXRlQW5nbGUgPSAwO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAvIDI7XG5cbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgdGlwKCkge1xuICAgIGxldCB4ID0gKHRoaXMuY2FudmFzLndpZHRoIC8gMikgKyAoTWF0aC5jb3ModGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApICogKERFRkFVTFRTLlJBRElVUyArIERFRkFVTFRTLlNJWkUpKTtcbiAgICBsZXQgeSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSArIChNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiAoREVGQVVMVFMuUkFESVVTICsgREVGQVVMVFMuU0laRSkpO1xuICAgIHJldHVybiBbeCwgeV07XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIHRoaXMuY3Vyc29yWCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpICsgKE1hdGguY29zKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSAqIERFRkFVTFRTLlJBRElVUyk7XG4gICAgdGhpcy5jdXJzb3JZID0gKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpICsgKE1hdGguc2luKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSAqIERFRkFVTFRTLlJBRElVUyk7XG5cbiAgICBjdHgudHJhbnNsYXRlKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICBjdHgudHJhbnNsYXRlKC10aGlzLmN1cnNvclgsIC10aGlzLmN1cnNvclkpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy5jdXJzb3JYIC0gREVGQVVMVFMuU0laRSwgdGhpcy5jdXJzb3JZIC0gREVGQVVMVFMuU0laRSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclggKyBERUZBVUxUUy5TSVpFLCB0aGlzLmN1cnNvclkpO1xuICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYIC0gREVGQVVMVFMuU0laRSwgdGhpcy5jdXJzb3JZICsgREVGQVVMVFMuU0laRSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXTtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgY3R4LnJvdGF0ZSgtdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGN0eC50cmFuc2xhdGUoLXRoaXMuY3Vyc29yWCwgLXRoaXMuY3Vyc29yWSk7XG4gIH1cblxuICBhbmltYXRlKGN0eCkge1xuICAgIHRoaXMuZHJhdyhjdHgpO1xuICB9XG5cbiAgcGl2b3RDbG9ja3dpc2UoZGVsdGFUaW1lLCBjdHgpIHtcbiAgICB0aGlzLmFuZ2xlICs9ICgxNTAgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyhjdHgpXG4gIH1cblxuICBwaXZvdENvdW50ZXJDbG9ja3dpc2UoZGVsdGFUaW1lLCBjdHgpIHtcbiAgICB0aGlzLmFuZ2xlIC09ICgxNTAgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyhjdHgpO1xuICB9XG59IiwiaW1wb3J0IFN0b3B3YXRjaCBmcm9tICcuL3N0b3B3YXRjaCc7XG5pbXBvcnQgSGV4YWdvbiBmcm9tICcuL2hleGFnb24nO1xuaW1wb3J0IEN1cnNvciBmcm9tICcuL2N1cnNvcic7XG5pbXBvcnQgU2VjdGlvbnMgZnJvbSAnLi9zZWN0aW9ucyc7XG5pbXBvcnQgV2FsbHMgZnJvbSAnLi93YWxscyc7XG4vLyBpbXBvcnQgdGhlIG90aGVyIHNjcmlwdHNcblxuY29uc3QgQ09MT1JTID0gW1xuICAvLyBiYXNlLCBzZWN0aW9ucywgY3Vyc29yL3dhbGxzICAgfiAvLyBibGFjayB0byBjb2xvciAvLyB3aGl0ZSB0byBjb2xvclxuICBbXCIjMDAwMDAwXCIsIFwiIzAyMjcxM1wiLCBcIiMwOGZiN2JcIl0sICAgIC8vIGJsYWNrL2dyZWVuXG4gIFtcIiMwMDAwMDBcIiwgXCIjMjYxNTAxXCIsIFwiI2VmODcwOFwiXSwgICAgLy8gYmxhY2svb3JhbmdlXG4gIFtcIiNmZmZmZmZcIiwgXCIjZjVkY2YwXCIsIFwiI2MzMWU5ZVwiXSwgICAgLy8gd2hpdGUvcGlua1xuICBbXCIjZmZmZmZmXCIsIFwiI2U3ZTNmN1wiLCBcIiM2YjRhY2FcIl0sICAgIC8vIHdoaXRlL3B1cnBsZVxuICBbXCIjZmZmZmZmXCIsIFwiI2RkZThmY1wiLCBcIiMyYjZhZWFcIl0sICAgIC8vIHdoaXRlL2JsdWVcbl1cblxuY2xhc3MgV2lja2VkSGV4YWdvbiB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aDtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuXG4gICAgdGhpcy5zZWN0aW9ucyA9IG5ldyBTZWN0aW9ucyhjYW52YXMpO1xuICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgdGhpcy5zdG9wd2F0Y2ggPSBuZXcgU3RvcHdhdGNoKGNhbnZhcyk7XG4gICAgdGhpcy5oZXhhZ29uID0gbmV3IEhleGFnb24oY2FudmFzKTtcbiAgICB0aGlzLmN1cnNvciA9IG5ldyBDdXJzb3IoY2FudmFzKTtcblxuICAgIHRoaXMuY3Vyc29yRGlyID0gJyc7XG5cbiAgICB0aGlzLm11c2ljID0gbmV3IEF1ZGlvKCdhc3NldHMvc291bmRzL0N1c3AubXAzJyk7XG4gICAgdGhpcy5iZWdpbkF1ZGlvID0gbmV3IEF1ZGlvKCdhc3NldHMvc291bmRzL2JlZ2luLm1wMycpO1xuICAgIHRoaXMuZ2FtZU92ZXJBdWRpbyA9IG5ldyBBdWRpbygnYXNzZXRzL3NvdW5kcy9nYW1lX292ZXIubXAzJyk7XG4gIH1cblxuICBwbGF5KCkge1xuICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgbGV0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKClcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYW5pbWF0ZSh0aW1lc3RhbXApLCAzMDApO1xuXG4gICAgdGhpcy53YWxscyA9IG5ldyBXYWxscyh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmJlZ2luQXVkaW8ucGxheSgpO1xuICAgIHRoaXMucG9wdWxhdGVXYWxscyA9IHNldEludGVydmFsKCgpID0+IHRoaXMud2FsbHMucG9wdWxhdGVXYWxscygpLCA4MDApO1xuICAgIHRoaXMubXVzaWMubG9hZCgpO1xuICAgIHRoaXMubXVzaWMucGxheSgpO1xuICB9XG5cbiAgYW5pbWF0ZSh0aW1lc3RhbXApIHtcbiAgICBsZXQgZGVsdGFUaW1lID0gdGltZXN0YW1wIC0gdGhpcy5sYXN0VGltZTtcblxuICAgIHRoaXMuZGVsdGFUaW1lID0gZGVsdGFUaW1lO1xuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lc3RhbXA7XG5cbiAgICB0aGlzLnN0b3B3YXRjaC5hbmltYXRlKHRoaXMuc3RhcnRUaW1lKTtcbiAgICB0aGlzLnNlY3Rpb25zLmFuaW1hdGUoZGVsdGFUaW1lKTtcbiAgICB0aGlzLmhleGFnb24uYW5pbWF0ZShkZWx0YVRpbWUpO1xuICAgIHRoaXMuY3Vyc29yLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgIHRoaXMud2FsbHMuYW5pbWF0ZSh0aGlzLmN0eCk7XG5cbiAgICBpZiAodGhpcy5nYW1lT3ZlcigpID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZ2FtZU92ZXJBdWRpby5wbGF5KCk7XG4gICAgICB0aGlzLm11c2ljLnBhdXNlKCk7XG4gICAgICB0aGlzLnN0b3B3YXRjaC5zdG9wKCk7XG4gICAgICB0aGlzLmhleGFnb24uc3RvcCgpO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBvcHVsYXRlV2FsbHMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmN1cnNvckRpciA9PT0gJ2Nsb2Nrd2lzZScpIHtcbiAgICAgIHRoaXMuY3Vyc29yLnBpdm90Q2xvY2t3aXNlKGRlbHRhVGltZSwgdGhpcy5jdHgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJzb3JEaXIgPT09ICdjb3VudGVyQ2xvY2t3aXNlJykge1xuICAgICAgdGhpcy5jdXJzb3IucGl2b3RDb3VudGVyQ2xvY2t3aXNlKGRlbHRhVGltZSwgdGhpcy5jdHgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJ1bm5pbmcgPT09IHRydWUpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyB8fCBldmVudC5rZXlDb2RlID09PSA2NSkge1xuICAgICAgICBpZiAodGhhdC5ydW5uaW5nKSB7XG4gICAgICAgICAgdGhhdC5jdXJzb3JEaXIgPSAnY291bnRlckNsb2Nrd2lzZSc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgfHwgZXZlbnQua2V5Q29kZSA9PT0gNjgpIHtcbiAgICAgICAgaWYgKHRoYXQucnVubmluZykge1xuICAgICAgICAgIHRoYXQuY3Vyc29yRGlyID0gJ2Nsb2Nrd2lzZSc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgdGhhdC5wbGF5KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4gKHRoYXQuY3Vyc29yRGlyID0gJycpKTtcbiAgfVxuXG4gIGdhbWVPdmVyKCkge1xuICAgIHJldHVybiB0aGlzLndhbGxzLmNvbGxpZGVzV2l0aCh0aGlzLmN1cnNvci50aXAoKSk7XG4gIH1cblxuICBkcmF3UHJlZ2FtZSgpIHtcblxuICB9XG5cbiAgZHJhd1Bvc3RnYW1lKCkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lja2VkSGV4YWdvbjsiLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXG4gICAgW1wiIzAwMDAwMFwiLCBcIiMwOGZiN2JcIl0sXG4gICAgW1wiIzAwMDAwMFwiLCBcIiNlZjg3MDhcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiNjMzFlOWVcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiM2YjRhY2FcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiMyYjZhZWFcIl0sXG4gIF0sXG4gIFNJWkU6IDUwLFxufVxuXG5cbmNsYXNzIEhleGFnb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLmFuZ2xlID0gMDtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgIGN0eC5yb3RhdGUodGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG5cbiAgICBsZXQgaGV4MSA9IDA7XG4gICAgZm9yIChoZXgxOyBoZXgxIDw9IDY7IGhleDErKykge1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyBERUZBVUxUUy5TSVpFICogTWF0aC5jb3MoaGV4MSAqIDIgKiBNYXRoLlBJIC8gNiksIHRoaXMueSArIERFRkFVTFRTLlNJWkUgKiBNYXRoLnNpbihoZXgxICogMiAqIE1hdGguUEkgLyA2KSk7XG4gICAgfVxuXG4gICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVsxXTtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuXG4gICAgbGV0IGhleDIgPSAwO1xuICAgIGZvciAoaGV4MjsgaGV4MiA8PSA2OyBoZXgyKyspIHtcbiAgICAgIGN0eC5saW5lVG8odGhpcy54ICsgNDQgKiBNYXRoLmNvcyhoZXgyICogMiAqIE1hdGguUEkgLyA2KSwgdGhpcy55ICsgNDQgKiBNYXRoLnNpbihoZXgyICogMiAqIE1hdGguUEkgLyA2KSk7XG4gICAgfVxuXG4gICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVswXTtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgYW5pbWF0ZShkZWx0YVRpbWUpIHtcbiAgICB0aGlzLmFuZ2xlID0gKDIwIC8gZGVsdGFUaW1lKTtcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLmFuZ2xlID0gMDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZXhhZ29uOyIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcbiAgICBbXCIjMDAwMDAwXCIsIFwiIzAyMjcxM1wiXSxcbiAgICBbXCIjMDAwMDAwXCIsIFwiIzI2MTUwMVwiXSxcbiAgICBbXCIjZmZmZmZmXCIsIFwiI2Y1ZGNmMFwiXSxcbiAgICBbXCIjZmZmZmZmXCIsIFwiI2U3ZTNmN1wiXSxcbiAgICBbXCIjZmZmZmZmXCIsIFwiI2RkZThmY1wiXSxcbiAgXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbnMge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmdsZSA9IC02MDtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIFxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGxldCBwcmV2Q29vcmQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA2OyBpKyspIHtcbiAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICsgNjA7XG4gICAgICB9XG5cbiAgICAgIGxldCB4MiwgeTIsIGxlbmd0aDtcblxuICAgICAgLy8gbGVuZ3RoID0gTWF0aC5mbG9vcihNYXRoLnNxcnQoMykgKiB0aGlzLnggKiAyKTtcbiAgICAgIGxlbmd0aCA9IDE1MDA7XG4gICAgICB4MiA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIGxlbmd0aDtcbiAgICAgIHkyID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogbGVuZ3RoO1xuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcbiAgICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICAgIGlmIChwcmV2Q29vcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdHgubGluZVRvKC4uLnByZXZDb29yZCk7XG4gICAgICB9XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1baSAlIDJdO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVtpICUgMl07XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBwcmV2Q29vcmQgPSBbeDIsIHkyXTtcbiAgICB9XG4gIH1cblxuICBhbmltYXRlKGRlbHRhVGltZSkge1xuICAgIC8vIHRoaXMuYW5nbGUgKz0gKDEgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH0gIFxufSIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcbiAgICBbXCIjMDAwMDAwXCIsIFwiI2ZmZmZmZlwiXSxcbiAgICBbXCIjZmZmZmZmXCIsIFwiI2VmODcwOFwiXSxcbiAgICBbXCIjZmZmZmZmXCIsIFwiIzZiNGFjYVwiXSxcbiAgICBbXCIjZmZmZmZmXCIsIFwiIzJiNmFlYVwiXSxcbiAgXSxcbn1cblxuY2xhc3MgU3RvcHdhdGNoIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMudGltZSA9IFwiMC4wMFwiO1xuXG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IHN0b3B3YXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdG9wd2F0Y2hcIik7XG4gICAgc3RvcHdhdGNoWzBdLmlubmVySFRNTCA9IFwiXCI7XG4gICAgc3RvcHdhdGNoWzBdLmlubmVySFRNTCArPSBgJHt0aGlzLnRpbWV9YDtcbiAgfVxuXG4gIGNvdW50RGVjaW1hbHMobnVtKSB7XG4gICAgaWYgKE1hdGguZmxvb3IobnVtKSAhPT0gbnVtKSB7XG4gICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aCB8fCAwO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGFuaW1hdGUoc3RhcnRUaW1lKSB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnRpbWUgPSBNYXRoLnJvdW5kKCgobm93IC0gc3RhcnRUaW1lKSAvIDEwMDApICogMTAwKSAvIDEwMDtcblxuICAgIGlmICh0aGlzLmNvdW50RGVjaW1hbHModGhpcy50aW1lKSA9PT0gMCkge1xuICAgICAgdGhpcy50aW1lID0gYCR7dGhpcy50aW1lfS4wMGA7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvdW50RGVjaW1hbHModGhpcy50aW1lKSA9PT0gMSkge1xuICAgICAgdGhpcy50aW1lID0gYCR7dGhpcy50aW1lfTBgO1xuICAgIH1cblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGxldCB0aW1lID0gdGhpcy50aW1lO1xuICAgIHRoaXMudGltZSA9IHRpbWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcHdhdGNoOyIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcbiAgICBbXCIjMDhmYjdiXCIsICdyZ2JhKDAsMCwwLDApJ10sXG4gICAgW1wiI2VmODcwOFwiLCAncmdiYSgwLDAsMCwwKSddLFxuICAgIFtcIiNjMzFlOWVcIiwgJ3JnYmEoMCwwLDAsMCknXSxcbiAgICBbXCIjNmI0YWNhXCIsICdyZ2JhKDAsMCwwLDApJ10sXG4gICAgW1wiIzJiNmFlYVwiLCAncmdiYSgwLDAsMCwwKSddLFxuICBdLFxuICAvLyBzZWNvbmQgY29sb3IgaXMgdHJhbnNwYXJlbnRcbiAgU0laRTogNDAsXG4gIE1BWDogMTAwMCxcbiAgLy8gY29ycmVzcG9uZHMgdy8gdGhlIHNlY3Rpb25zJyBsZW5ndGhzXG59O1xuXG5jbGFzcyBXYWxscyB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmFuZ2xlID0gLTYwO1xuICAgIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSA9IC02MDtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuXG4gICAgdGhpcy5jb21ib3MgPSBbXG4gICAgICBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2VdLFxuICAgICAgW3RydWUsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlLCB0cnVlXSxcbiAgICAgIFt0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZV0sXG4gICAgICBbdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWUsIHRydWVdLFxuICAgICAgW3RydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlXSxcbiAgICAgIFtmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0sXG4gICAgICBbdHJ1ZSwgZmFsc2UsIHRydWUsIGZhbHNlLCB0cnVlLCBmYWxzZV0sXG4gICAgICBbZmFsc2UsIHRydWUsIGZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZV0sXG4gICAgICBbdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWUsIGZhbHNlXSxcbiAgICBdXG5cbiAgICB0aGlzLndhbGxDb21ib3MgPSBbXTtcbiAgfVxuXG4gIGRyYXcgKGN0eCwgY29tYm8pIHtcbiAgICBsZXQgcHJldkNvb3JkLCB3YWxscyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IC0xOyBpIDw9IDU7IGkrKykge1xuICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICsgNjA7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmFuZ2xlID49IDM2MCkge1xuICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSAlIDM2MDtcbiAgICAgIH1cblxuICAgICAgbGV0IHgyLCB5MiwgYXgsIGF5LCBieCwgYnk7XG4gICAgICAvLyBvdXR0ZXIgdHJhcGV6b2lkIGNvcm5lclxuICAgICAgeDIgPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBERUZBVUxUUy5NQVg7XG4gICAgICB5MiA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIERFRkFVTFRTLk1BWDtcblxuICAgICAgLy8gaW5uZXIgdGFwZXpvaWQgcG9pbnQgb24gZmlyc3QgbGluZSBcbiAgICAgIGJ4ID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogKERFRkFVTFRTLk1BWCAtIERFRkFVTFRTLlNJWkUpO1xuICAgICAgYnkgPSB0aGlzLnkgKyBNYXRoLnNpbihNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiAoREVGQVVMVFMuTUFYIC0gREVGQVVMVFMuU0laRSk7IFxuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKGJ4LCBieSk7XG4gICAgICBjdHgubGluZVRvKHgyLCB5Mik7XG5cbiAgICAgIGlmIChwcmV2Q29vcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdHgubGluZVRvKC4uLnByZXZDb29yZCk7XG5cbiAgICAgICAgYXggPSBwcmV2Q29vcmRbMF0gKyBNYXRoLmNvcyhNYXRoLlBJICogKHRoaXMuYW5nbGUgKyAxMjApIC8gMTgwKSAqIERFRkFVTFRTLlNJWkU7XG4gICAgICAgIGF5ID0gcHJldkNvb3JkWzFdICsgTWF0aC5zaW4oTWF0aC5QSSAqICh0aGlzLmFuZ2xlICsgMTIwKSAvIDE4MCkgKiBERUZBVUxUUy5TSVpFO1xuXG4gICAgICAgIGN0eC5saW5lVG8oYXgsIGF5KTtcbiAgICAgICAgY3R4LmxpbmVUbyhieCwgYnkpO1xuICAgICAgfVxuXG4gICAgICAgIGlmIChpID09PSAtMSB8fCBjb21ib1tpXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMV07XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVsxXTtcbiAgICAgICAgfSBlbHNlIGlmIChjb21ib1tpXSkge1xuICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVswXTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzBdO1xuICAgICAgICB9XG5cbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIHByZXZDb29yZCA9IFt4MiwgeTJdO1xuXG4gICAgICBsZXQgd2FsbCA9IHtcbiAgICAgICAgbGVuZ3RoOiAxMDAwLFxuICAgICAgICBpc1dhbGw6ICcnLFxuICAgICAgfTtcblxuICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgIHdhbGwuaXNXYWxsID0gJ2xpbmUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FsbC5pc1dhbGwgPSBjb21ib1tpXTtcbiAgICAgIH1cblxuICAgICAgd2FsbHMucHVzaCh3YWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLndhbGxDb21ib3MucHVzaCh3YWxscyk7XG4gIH1cblxuICBjb2xsaWRlc1dpdGgoY3Vyc29yUG9zKSB7XG4gICAgaWYgKHRoaXMud2FsbENvbWJvcy5sZW5ndGggIT09IDApIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy53YWxsQ29tYm9zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCB3YWxscyA9IHRoaXMud2FsbENvbWJvc1tqXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHdhbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHdhbGwgPSB3YWxsc1tpXTtcbiAgXG4gICAgICAgICAgaWYgKHdhbGwuaXNXYWxsKSB7XG4gICAgICAgICAgICBjb25zdCBbeCwgeV0gPSBjdXJzb3JQb3M7XG4gICAgICAgICAgICBjb25zdCBbYXgsIGF5XSA9IHdhbGwucG9pbnQxO1xuICAgICAgICAgICAgY29uc3QgW2J4LCBieV0gPSB3YWxsLnBvaW50MjtcbiAgXG4gICAgICAgICAgICBsZXQgbGVuZ3RoMSA9IHRoaXMuZ2V0RGlzdGFuY2UoeCwgeSwgYXgsIGF5KTtcbiAgICAgICAgICAgIGxldCBsZW5ndGgyID0gdGhpcy5nZXREaXN0YW5jZSh4LCB5LCBieCwgYnkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAobGVuZ3RoMSArIGxlbmd0aDIgPD0gd2FsbC5sZW5ndGggLSAzOSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldERpc3RhbmNlKGF4LCBheSwgYngsIGJ5KSB7XG4gICAgY29uc3QgeCA9IGF4IC0gYng7XG4gICAgY29uc3QgeSA9IGF5IC0gYnk7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICB9XG5cbiAgcG9wdWxhdGVXYWxscygpIHtcbiAgICBsZXQgY29tYm9zSWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jb21ib3MubGVuZ3RoKTtcbiAgICBsZXQgY29tYm8gPSB0aGlzLmNvbWJvc1tjb21ib3NJZHhdO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4LCBjb21ibyk7XG4gIH1cblxuICBhbmltYXRlKGN0eCkge1xuICAgIGlmICh0aGlzLndhbGxDb21ib3MubGVuZ3RoICE9PSAwICYmIHRoaXMud2FsbENvbWJvc1t0aGlzLndhbGxDb21ib3MubGVuZ3RoIC0gMV0ubGVuZ3RoICUgNyA9PT0gMCkge1xuICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud2FsbENvbWJvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgd2FsbHMgPSB0aGlzLndhbGxDb21ib3NbaV07XG5cbiAgICAgICAgaWYgKHdhbGxzWzBdLmxlbmd0aCA9PT0gNzApIHtcbiAgICAgICAgICB0aGlzLndhbGxDb21ib3MudW5zaGlmdCgpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByZXZDb29yZDtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdhbGxzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IHdhbGwgPSB3YWxsc1tqXTtcblxuICAgICAgICAgIGlmICh3YWxsLmlzV2FsbCAhPT0gJ2xpbmUnKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgPSB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgKyA2MDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5hbmltYXRlV2FsbEFuZ2xlID49IDM2MCkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlV2FsbEFuZ2xlID0gdGhpcy5hbmltYXRlV2FsbEFuZ2xlICUgMzYwO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgbGV0IHgyLCB5MiwgYXgsIGF5LCBieCwgYnksIG5ld0xlbmd0aDtcbiAgXG4gICAgICAgICAgbmV3TGVuZ3RoID0gd2FsbC5sZW5ndGggLSA1O1xuICBcbiAgICAgICAgICB4MiA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgLyAxODApICogbmV3TGVuZ3RoO1xuICAgICAgICAgIHkyID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAvIDE4MCkgKiBuZXdMZW5ndGg7XG4gIFxuICAgICAgICAgIC8vIHRhcGV6b2lkIHBvaW50IG9uIGZpcnN0IGxpbmUgXG4gICAgICAgICAgYnggPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmltYXRlV2FsbEFuZ2xlIC8gMTgwKSAqIChuZXdMZW5ndGggLSBERUZBVUxUUy5TSVpFKTtcbiAgICAgICAgICBieSA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgLyAxODApICogKG5ld0xlbmd0aCAtIERFRkFVTFRTLlNJWkUpO1xuICBcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY3R4Lm1vdmVUbyhieCwgYnkpO1xuICAgICAgICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgXG4gICAgICAgICAgaWYgKHByZXZDb29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjdHgubGluZVRvKC4uLnByZXZDb29yZCk7XG4gIFxuICAgICAgICAgICAgYXggPSBwcmV2Q29vcmRbMF0gKyBNYXRoLmNvcyhNYXRoLlBJICogKHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSArIDEyMCkgLyAxODApICogREVGQVVMVFMuU0laRTtcbiAgICAgICAgICAgIGF5ID0gcHJldkNvb3JkWzFdICsgTWF0aC5zaW4oTWF0aC5QSSAqICh0aGlzLmFuaW1hdGVXYWxsQW5nbGUgKyAxMjApIC8gMTgwKSAqIERFRkFVTFRTLlNJWkU7XG4gIFxuICAgICAgICAgICAgY3R4LmxpbmVUbyhheCwgYXkpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhieCwgYnkpO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgaWYgKHdhbGwuaXNXYWxsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMF07XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzBdO1xuICAgICAgICAgIH0gZWxzZSBpZiAod2FsbC5pc1dhbGwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMV07XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzFdO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gIFxuICAgICAgICAgIHByZXZDb29yZCA9IFt4MiwgeTJdO1xuICBcbiAgICAgICAgICB0aGlzLndhbGxDb21ib3NbaV1bal0gPSB7XG4gICAgICAgICAgICBsZW5ndGg6IG5ld0xlbmd0aCxcbiAgICAgICAgICAgIGlzV2FsbDogd2FsbC5pc1dhbGwsXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5hbmltYXRlV2FsbEFuZ2xlLFxuICAgICAgICAgICAgcG9pbnQxOiBbYXgsIGF5XSxcbiAgICAgICAgICAgIHBvaW50MjogW2J4LCBieV0sXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxzOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=