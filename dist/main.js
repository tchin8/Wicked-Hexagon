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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJXaWNrZWRIZXhhZ29uIiwiREVGQVVMVFMiLCJDT0xPUlMiLCJSQURJVVMiLCJTSVpFIiwiQ3Vyc29yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImFuZ2xlIiwicm90YXRlQW5nbGUiLCJ4IiwieSIsImRyYXciLCJNYXRoIiwiY29zIiwiUEkiLCJzaW4iLCJjdXJzb3JYIiwiY3Vyc29yWSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImZpbGxTdHlsZSIsImZpbGwiLCJkZWx0YVRpbWUiLCJkaW1lbnNpb25zIiwicnVubmluZyIsInJlZ2lzdGVyRXZlbnRzIiwic2VjdGlvbnMiLCJTZWN0aW9ucyIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInN0b3B3YXRjaCIsIlN0b3B3YXRjaCIsImhleGFnb24iLCJIZXhhZ29uIiwiY3Vyc29yIiwiY3Vyc29yRGlyIiwibXVzaWMiLCJBdWRpbyIsImJlZ2luQXVkaW8iLCJnYW1lT3ZlckF1ZGlvIiwidGltZXN0YW1wIiwiRGF0ZSIsImxhc3RUaW1lIiwic3RhcnRUaW1lIiwic2V0VGltZW91dCIsImFuaW1hdGUiLCJ3YWxscyIsIldhbGxzIiwicGxheSIsInBvcHVsYXRlV2FsbHMiLCJzZXRJbnRlcnZhbCIsImxvYWQiLCJnYW1lT3ZlciIsInBhdXNlIiwic3RvcCIsImNsZWFySW50ZXJ2YWwiLCJwaXZvdENsb2Nrd2lzZSIsInBpdm90Q291bnRlckNsb2Nrd2lzZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJ0aGF0IiwiZXZlbnQiLCJrZXlDb2RlIiwiY29sbGlkZXNXaXRoIiwidGlwIiwiaGV4MSIsImhleDIiLCJwcmV2Q29vcmQiLCJpIiwieDIiLCJ5MiIsImxlbmd0aCIsInVuZGVmaW5lZCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwidGltZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbm5lckhUTUwiLCJudW0iLCJmbG9vciIsInRvU3RyaW5nIiwic3BsaXQiLCJub3ciLCJyb3VuZCIsImNvdW50RGVjaW1hbHMiLCJNQVgiLCJhbmltYXRlV2FsbEFuZ2xlIiwiY29tYm9zIiwid2FsbENvbWJvcyIsImNvbWJvIiwiYXgiLCJheSIsImJ4IiwiYnkiLCJ3YWxsIiwiaXNXYWxsIiwicHVzaCIsImN1cnNvclBvcyIsImoiLCJwb2ludDEiLCJwb2ludDIiLCJsZW5ndGgxIiwiZ2V0RGlzdGFuY2UiLCJsZW5ndGgyIiwic3FydCIsImNvbWJvc0lkeCIsInJhbmRvbSIsInVuc2hpZnQiLCJuZXdMZW5ndGgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFD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QUQsRUFBS0MsRUFBTDtBQUxjLGFBQXhCO0FBT0Q7QUFDRjtBQUNGO0FBQ0Y7Ozs7OztBQUdZOUMsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUM1TkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFdpY2tlZEhleGFnb24gZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuLy8gaW1wb3J0IFdpY2tlZEhleGFnb24gZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICBjYW52YXNFbC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIGNhbnZhc0VsLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgbmV3IFdpY2tlZEhleGFnb24oY2FudmFzRWwpO1xufSk7XG4iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXG4gICAgXCIjMDhmYjdiXCIsXG4gICAgXCIjZWY4NzA4XCIsXG4gICAgXCIjYzMxZTllXCIsXG4gICAgXCIjNmI0YWNhXCIsXG4gICAgXCIjMmI2YWVhXCIsXG4gIF0sXG4gIFJBRElVUzogNjAsXG4gIFNJWkU6IDUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJzb3Ige1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmdsZSA9IDMzMDtcbiAgICB0aGlzLnJvdGF0ZUFuZ2xlID0gMDtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIHRpcCgpIHtcbiAgICBsZXQgeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpICsgKE1hdGguY29zKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSAqIChERUZBVUxUUy5SQURJVVMgKyBERUZBVUxUUy5TSVpFKSk7XG4gICAgbGV0IHkgPSAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMikgKyAoTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApICogKERFRkFVTFRTLlJBRElVUyArIERFRkFVTFRTLlNJWkUpKTtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICB0aGlzLmN1cnNvclggPSAodGhpcy5jYW52YXMud2lkdGggLyAyKSArIChNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiBERUZBVUxUUy5SQURJVVMpO1xuICAgIHRoaXMuY3Vyc29yWSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSArIChNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiBERUZBVUxUUy5SQURJVVMpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy5jdXJzb3JYLCAtdGhpcy5jdXJzb3JZKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMuY3Vyc29yWCAtIERFRkFVTFRTLlNJWkUsIHRoaXMuY3Vyc29yWSAtIERFRkFVTFRTLlNJWkUpO1xuICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYICsgREVGQVVMVFMuU0laRSwgdGhpcy5jdXJzb3JZKTtcbiAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCAtIERFRkFVTFRTLlNJWkUsIHRoaXMuY3Vyc29yWSArIERFRkFVTFRTLlNJWkUpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl07XG4gICAgY3R4LmZpbGwoKTtcblxuICAgIGN0eC50cmFuc2xhdGUodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgIGN0eC5yb3RhdGUoLXRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICBjdHgudHJhbnNsYXRlKC10aGlzLmN1cnNvclgsIC10aGlzLmN1cnNvclkpO1xuICB9XG5cbiAgYW5pbWF0ZShjdHgpIHtcbiAgICB0aGlzLmRyYXcoY3R4KTtcbiAgfVxuXG4gIHBpdm90Q2xvY2t3aXNlKGRlbHRhVGltZSwgY3R4KSB7XG4gICAgdGhpcy5hbmdsZSArPSAoMTUwIC8gZGVsdGFUaW1lKTtcbiAgICB0aGlzLmRyYXcoY3R4KVxuICB9XG5cbiAgcGl2b3RDb3VudGVyQ2xvY2t3aXNlKGRlbHRhVGltZSwgY3R4KSB7XG4gICAgdGhpcy5hbmdsZSAtPSAoMTUwIC8gZGVsdGFUaW1lKTtcbiAgICB0aGlzLmRyYXcoY3R4KTtcbiAgfVxufSIsImltcG9ydCBTdG9wd2F0Y2ggZnJvbSAnLi9zdG9wd2F0Y2gnO1xuaW1wb3J0IEhleGFnb24gZnJvbSAnLi9oZXhhZ29uJztcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi9jdXJzb3InO1xuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vc2VjdGlvbnMnO1xuaW1wb3J0IFdhbGxzIGZyb20gJy4vd2FsbHMnO1xuLy8gaW1wb3J0IHRoZSBvdGhlciBzY3JpcHRzXG5cbmNvbnN0IENPTE9SUyA9IFtcbiAgLy8gYmFzZSwgc2VjdGlvbnMsIGN1cnNvci93YWxscyAgIH4gLy8gYmxhY2sgdG8gY29sb3IgLy8gd2hpdGUgdG8gY29sb3JcbiAgW1wiIzAwMDAwMFwiLCBcIiMwMjI3MTNcIiwgXCIjMDhmYjdiXCJdLCAgICAvLyBibGFjay9ncmVlblxuICBbXCIjMDAwMDAwXCIsIFwiIzI2MTUwMVwiLCBcIiNlZjg3MDhcIl0sICAgIC8vIGJsYWNrL29yYW5nZVxuICBbXCIjZmZmZmZmXCIsIFwiI2Y1ZGNmMFwiLCBcIiNjMzFlOWVcIl0sICAgIC8vIHdoaXRlL3BpbmtcbiAgW1wiI2ZmZmZmZlwiLCBcIiNlN2UzZjdcIiwgXCIjNmI0YWNhXCJdLCAgICAvLyB3aGl0ZS9wdXJwbGVcbiAgW1wiI2ZmZmZmZlwiLCBcIiNkZGU4ZmNcIiwgXCIjMmI2YWVhXCJdLCAgICAvLyB3aGl0ZS9ibHVlXG5dXG5cbmNsYXNzIFdpY2tlZEhleGFnb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGg7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodDtcblxuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcblxuICAgIHRoaXMuc2VjdGlvbnMgPSBuZXcgU2VjdGlvbnMoY2FudmFzKTtcbiAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIHRoaXMuc3RvcHdhdGNoID0gbmV3IFN0b3B3YXRjaChjYW52YXMpO1xuICAgIHRoaXMuaGV4YWdvbiA9IG5ldyBIZXhhZ29uKGNhbnZhcyk7XG4gICAgdGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKGNhbnZhcyk7XG5cbiAgICB0aGlzLmN1cnNvckRpciA9ICcnO1xuXG4gICAgdGhpcy5tdXNpYyA9IG5ldyBBdWRpbygnYXNzZXRzL3NvdW5kcy9DdXNwLm1wMycpO1xuICAgIHRoaXMuYmVnaW5BdWRpbyA9IG5ldyBBdWRpbygnYXNzZXRzL3NvdW5kcy9iZWdpbi5tcDMnKTtcbiAgICB0aGlzLmdhbWVPdmVyQXVkaW8gPSBuZXcgQXVkaW8oJ2Fzc2V0cy9zb3VuZHMvZ2FtZV9vdmVyLm1wMycpO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFuaW1hdGUodGltZXN0YW1wKSwgMzAwKTtcblxuICAgIHRoaXMud2FsbHMgPSBuZXcgV2FsbHModGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5iZWdpbkF1ZGlvLnBsYXkoKTtcbiAgICB0aGlzLnBvcHVsYXRlV2FsbHMgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLndhbGxzLnBvcHVsYXRlV2FsbHMoKSwgODAwKTtcbiAgICB0aGlzLm11c2ljLmxvYWQoKTtcbiAgICB0aGlzLm11c2ljLnBsYXkoKTtcbiAgfVxuXG4gIGFuaW1hdGUodGltZXN0YW1wKSB7XG4gICAgbGV0IGRlbHRhVGltZSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWU7XG5cbiAgICB0aGlzLmRlbHRhVGltZSA9IGRlbHRhVGltZTtcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuXG4gICAgdGhpcy5zdG9wd2F0Y2guYW5pbWF0ZSh0aGlzLnN0YXJ0VGltZSk7XG4gICAgdGhpcy5zZWN0aW9ucy5hbmltYXRlKGRlbHRhVGltZSk7XG4gICAgdGhpcy5oZXhhZ29uLmFuaW1hdGUoZGVsdGFUaW1lKTtcbiAgICB0aGlzLmN1cnNvci5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICB0aGlzLndhbGxzLmFuaW1hdGUodGhpcy5jdHgpO1xuXG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIoKSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmdhbWVPdmVyQXVkaW8ucGxheSgpO1xuICAgICAgdGhpcy5tdXNpYy5wYXVzZSgpO1xuICAgICAgdGhpcy5zdG9wd2F0Y2guc3RvcCgpO1xuICAgICAgdGhpcy5oZXhhZ29uLnN0b3AoKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wb3B1bGF0ZVdhbGxzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jdXJzb3JEaXIgPT09ICdjbG9ja3dpc2UnKSB7XG4gICAgICB0aGlzLmN1cnNvci5waXZvdENsb2Nrd2lzZShkZWx0YVRpbWUsIHRoaXMuY3R4KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3Vyc29yRGlyID09PSAnY291bnRlckNsb2Nrd2lzZScpIHtcbiAgICAgIHRoaXMuY3Vyc29yLnBpdm90Q291bnRlckNsb2Nrd2lzZShkZWx0YVRpbWUsIHRoaXMuY3R4KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ydW5uaW5nID09PSB0cnVlKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgfHwgZXZlbnQua2V5Q29kZSA9PT0gNjUpIHtcbiAgICAgICAgaWYgKHRoYXQucnVubmluZykge1xuICAgICAgICAgIHRoYXQuY3Vyc29yRGlyID0gJ2NvdW50ZXJDbG9ja3dpc2UnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5IHx8IGV2ZW50LmtleUNvZGUgPT09IDY4KSB7XG4gICAgICAgIGlmICh0aGF0LnJ1bm5pbmcpIHtcbiAgICAgICAgICB0aGF0LmN1cnNvckRpciA9ICdjbG9ja3dpc2UnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgIHRoYXQucGxheSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+ICh0aGF0LmN1cnNvckRpciA9ICcnKSk7XG4gIH1cblxuICBnYW1lT3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy53YWxscy5jb2xsaWRlc1dpdGgodGhpcy5jdXJzb3IudGlwKCkpO1xuICB9XG5cbiAgZHJhd1ByZWdhbWUoKSB7XG5cbiAgfVxuXG4gIGRyYXdQb3N0Z2FtZSgpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpY2tlZEhleGFnb247IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1xuICAgIFtcIiMwMDAwMDBcIiwgXCIjMDhmYjdiXCJdLFxuICAgIFtcIiMwMDAwMDBcIiwgXCIjZWY4NzA4XCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjYzMxZTllXCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjNmI0YWNhXCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjMmI2YWVhXCJdLFxuICBdLFxuICBTSVpFOiA1MCxcbn1cblxuXG5jbGFzcyBIZXhhZ29uIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAvIDI7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG5cbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG5cbiAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICBjdHgudHJhbnNsYXRlKC10aGlzLngsIC10aGlzLnkpO1xuXG4gICAgbGV0IGhleDEgPSAwO1xuICAgIGZvciAoaGV4MTsgaGV4MSA8PSA2OyBoZXgxKyspIHtcbiAgICAgIGN0eC5saW5lVG8odGhpcy54ICsgREVGQVVMVFMuU0laRSAqIE1hdGguY29zKGhleDEgKiAyICogTWF0aC5QSSAvIDYpLCB0aGlzLnkgKyBERUZBVUxUUy5TSVpFICogTWF0aC5zaW4oaGV4MSAqIDIgKiBNYXRoLlBJIC8gNikpO1xuICAgIH1cblxuICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMV07XG4gICAgY3R4LmZpbGwoKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGxldCBoZXgyID0gMDtcbiAgICBmb3IgKGhleDI7IGhleDIgPD0gNjsgaGV4MisrKSB7XG4gICAgICBjdHgubGluZVRvKHRoaXMueCArIDQ0ICogTWF0aC5jb3MoaGV4MiAqIDIgKiBNYXRoLlBJIC8gNiksIHRoaXMueSArIDQ0ICogTWF0aC5zaW4oaGV4MiAqIDIgKiBNYXRoLlBJIC8gNikpO1xuICAgIH1cblxuICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMF07XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGFuaW1hdGUoZGVsdGFUaW1lKSB7XG4gICAgdGhpcy5hbmdsZSA9ICgyMCAvIGRlbHRhVGltZSk7XG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGV4YWdvbjsiLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXG4gICAgW1wiIzAwMDAwMFwiLCBcIiMwMjI3MTNcIl0sXG4gICAgW1wiIzAwMDAwMFwiLCBcIiMyNjE1MDFcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiNmNWRjZjBcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiNlN2UzZjdcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiNkZGU4ZmNcIl0sXG4gIF0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb25zIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5nbGUgPSAtNjA7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICBcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBsZXQgcHJldkNvb3JkO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSArIDYwO1xuICAgICAgfVxuXG4gICAgICBsZXQgeDIsIHkyLCBsZW5ndGg7XG5cbiAgICAgIC8vIGxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5zcXJ0KDMpICogdGhpcy54ICogMik7XG4gICAgICBsZW5ndGggPSAxNTAwO1xuICAgICAgeDIgPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBsZW5ndGg7XG4gICAgICB5MiA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIGxlbmd0aDtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG4gICAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gICAgICBpZiAocHJldkNvb3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3R4LmxpbmVUbyguLi5wcmV2Q29vcmQpO1xuICAgICAgfVxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdW2kgJSAyXTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1baSAlIDJdO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgcHJldkNvb3JkID0gW3gyLCB5Ml07XG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZShkZWx0YVRpbWUpIHtcbiAgICAvLyB0aGlzLmFuZ2xlICs9ICgxIC8gZGVsdGFUaW1lKTtcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9ICBcbn0iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXG4gICAgW1wiIzAwMDAwMFwiLCBcIiNmZmZmZmZcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiNlZjg3MDhcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiM2YjRhY2FcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiMyYjZhZWFcIl0sXG4gIF0sXG59XG5cbmNsYXNzIFN0b3B3YXRjaCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLnRpbWUgPSBcIjAuMDBcIjtcblxuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBzdG9wd2F0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RvcHdhdGNoXCIpO1xuICAgIHN0b3B3YXRjaFswXS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHN0b3B3YXRjaFswXS5pbm5lckhUTUwgKz0gYCR7dGhpcy50aW1lfWA7XG4gIH1cblxuICBjb3VudERlY2ltYWxzKG51bSkge1xuICAgIGlmIChNYXRoLmZsb29yKG51bSkgIT09IG51bSkge1xuICAgICAgcmV0dXJuIG51bS50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGggfHwgMDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBhbmltYXRlKHN0YXJ0VGltZSkge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy50aW1lID0gTWF0aC5yb3VuZCgoKG5vdyAtIHN0YXJ0VGltZSkgLyAxMDAwKSAqIDEwMCkgLyAxMDA7XG5cbiAgICBpZiAodGhpcy5jb3VudERlY2ltYWxzKHRoaXMudGltZSkgPT09IDApIHtcbiAgICAgIHRoaXMudGltZSA9IGAke3RoaXMudGltZX0uMDBgO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb3VudERlY2ltYWxzKHRoaXMudGltZSkgPT09IDEpIHtcbiAgICAgIHRoaXMudGltZSA9IGAke3RoaXMudGltZX0wYDtcbiAgICB9XG5cbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBsZXQgdGltZSA9IHRoaXMudGltZTtcbiAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3B3YXRjaDsiLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXG4gICAgW1wiIzA4ZmI3YlwiLCAncmdiYSgwLDAsMCwwKSddLFxuICAgIFtcIiNlZjg3MDhcIiwgJ3JnYmEoMCwwLDAsMCknXSxcbiAgICBbXCIjYzMxZTllXCIsICdyZ2JhKDAsMCwwLDApJ10sXG4gICAgW1wiIzZiNGFjYVwiLCAncmdiYSgwLDAsMCwwKSddLFxuICAgIFtcIiMyYjZhZWFcIiwgJ3JnYmEoMCwwLDAsMCknXSxcbiAgXSxcbiAgLy8gc2Vjb25kIGNvbG9yIGlzIHRyYW5zcGFyZW50XG4gIFNJWkU6IDQwLFxuICBNQVg6IDEwMDAsXG4gIC8vIGNvcnJlc3BvbmRzIHcvIHRoZSBzZWN0aW9ucycgbGVuZ3Roc1xufTtcblxuY2xhc3MgV2FsbHMge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmdsZSA9IC02MDtcbiAgICB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgPSAtNjA7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcblxuICAgIHRoaXMuY29tYm9zID0gW1xuICAgICAgW3RydWUsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlXSxcbiAgICAgIFt0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZV0sXG4gICAgICBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWVdLFxuICAgICAgW3RydWUsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlXSxcbiAgICAgIFt0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0sXG4gICAgICBbZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIHRydWVdLFxuICAgICAgW3RydWUsIGZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2VdLFxuICAgICAgW2ZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWVdLFxuICAgICAgW3RydWUsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZV0sXG4gICAgXVxuXG4gICAgdGhpcy53YWxsQ29tYm9zID0gW107XG4gIH1cblxuICBkcmF3IChjdHgsIGNvbWJvKSB7XG4gICAgbGV0IHByZXZDb29yZCwgd2FsbHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAtMTsgaSA8PSA1OyBpKyspIHtcbiAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSArIDYwO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5hbmdsZSA+PSAzNjApIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgJSAzNjA7XG4gICAgICB9XG5cbiAgICAgIGxldCB4MiwgeTIsIGF4LCBheSwgYngsIGJ5O1xuICAgICAgLy8gb3V0dGVyIHRyYXBlem9pZCBjb3JuZXJcbiAgICAgIHgyID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogREVGQVVMVFMuTUFYO1xuICAgICAgeTIgPSB0aGlzLnkgKyBNYXRoLnNpbihNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBERUZBVUxUUy5NQVg7XG5cbiAgICAgIC8vIGlubmVyIHRhcGV6b2lkIHBvaW50IG9uIGZpcnN0IGxpbmUgXG4gICAgICBieCA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIChERUZBVUxUUy5NQVggLSBERUZBVUxUUy5TSVpFKTtcbiAgICAgIGJ5ID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogKERFRkFVTFRTLk1BWCAtIERFRkFVTFRTLlNJWkUpOyBcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyhieCwgYnkpO1xuICAgICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuXG4gICAgICBpZiAocHJldkNvb3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3R4LmxpbmVUbyguLi5wcmV2Q29vcmQpO1xuXG4gICAgICAgIGF4ID0gcHJldkNvb3JkWzBdICsgTWF0aC5jb3MoTWF0aC5QSSAqICh0aGlzLmFuZ2xlICsgMTIwKSAvIDE4MCkgKiBERUZBVUxUUy5TSVpFO1xuICAgICAgICBheSA9IHByZXZDb29yZFsxXSArIE1hdGguc2luKE1hdGguUEkgKiAodGhpcy5hbmdsZSArIDEyMCkgLyAxODApICogREVGQVVMVFMuU0laRTtcblxuICAgICAgICBjdHgubGluZVRvKGF4LCBheSk7XG4gICAgICAgIGN0eC5saW5lVG8oYngsIGJ5KTtcbiAgICAgIH1cblxuICAgICAgICBpZiAoaSA9PT0gLTEgfHwgY29tYm9baV0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzFdO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMV07XG4gICAgICAgIH0gZWxzZSBpZiAoY29tYm9baV0pIHtcbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMF07XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVswXTtcbiAgICAgICAgfVxuXG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBwcmV2Q29vcmQgPSBbeDIsIHkyXTtcblxuICAgICAgbGV0IHdhbGwgPSB7XG4gICAgICAgIGxlbmd0aDogMTAwMCxcbiAgICAgICAgaXNXYWxsOiAnJyxcbiAgICAgIH07XG5cbiAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICB3YWxsLmlzV2FsbCA9ICdsaW5lJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhbGwuaXNXYWxsID0gY29tYm9baV07XG4gICAgICB9XG5cbiAgICAgIHdhbGxzLnB1c2god2FsbCk7XG4gICAgfVxuXG4gICAgdGhpcy53YWxsQ29tYm9zLnB1c2god2FsbHMpO1xuICB9XG5cbiAgY29sbGlkZXNXaXRoKGN1cnNvclBvcykge1xuICAgIGlmICh0aGlzLndhbGxDb21ib3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMud2FsbENvbWJvcy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgd2FsbHMgPSB0aGlzLndhbGxDb21ib3Nbal07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB3YWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCB3YWxsID0gd2FsbHNbaV07XG4gIFxuICAgICAgICAgIGlmICh3YWxsLmlzV2FsbCkge1xuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gY3Vyc29yUG9zO1xuICAgICAgICAgICAgY29uc3QgW2F4LCBheV0gPSB3YWxsLnBvaW50MTtcbiAgICAgICAgICAgIGNvbnN0IFtieCwgYnldID0gd2FsbC5wb2ludDI7XG4gIFxuICAgICAgICAgICAgbGV0IGxlbmd0aDEgPSB0aGlzLmdldERpc3RhbmNlKHgsIHksIGF4LCBheSk7XG4gICAgICAgICAgICBsZXQgbGVuZ3RoMiA9IHRoaXMuZ2V0RGlzdGFuY2UoeCwgeSwgYngsIGJ5KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGxlbmd0aDEgKyBsZW5ndGgyIDw9IHdhbGwubGVuZ3RoIC0gMzkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXREaXN0YW5jZShheCwgYXksIGJ4LCBieSkge1xuICAgIGNvbnN0IHggPSBheCAtIGJ4O1xuICAgIGNvbnN0IHkgPSBheSAtIGJ5O1xuXG4gICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgfVxuXG4gIHBvcHVsYXRlV2FsbHMoKSB7XG4gICAgbGV0IGNvbWJvc0lkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29tYm9zLmxlbmd0aCk7XG4gICAgbGV0IGNvbWJvID0gdGhpcy5jb21ib3NbY29tYm9zSWR4XTtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCwgY29tYm8pO1xuICB9XG5cbiAgYW5pbWF0ZShjdHgpIHtcbiAgICBpZiAodGhpcy53YWxsQ29tYm9zLmxlbmd0aCAhPT0gMCAmJiB0aGlzLndhbGxDb21ib3NbdGhpcy53YWxsQ29tYm9zLmxlbmd0aCAtIDFdLmxlbmd0aCAlIDcgPT09IDApIHtcbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndhbGxDb21ib3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHdhbGxzID0gdGhpcy53YWxsQ29tYm9zW2ldO1xuXG4gICAgICAgIGlmICh3YWxsc1swXS5sZW5ndGggPT09IDcwKSB7XG4gICAgICAgICAgdGhpcy53YWxsQ29tYm9zLnVuc2hpZnQoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcmV2Q29vcmQ7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3YWxscy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCB3YWxsID0gd2FsbHNbal07XG5cbiAgICAgICAgICBpZiAod2FsbC5pc1dhbGwgIT09ICdsaW5lJykge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlV2FsbEFuZ2xlID0gdGhpcy5hbmltYXRlV2FsbEFuZ2xlICsgNjA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSA+PSAzNjApIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSA9IHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAlIDM2MDtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGxldCB4MiwgeTIsIGF4LCBheSwgYngsIGJ5LCBuZXdMZW5ndGg7XG4gIFxuICAgICAgICAgIG5ld0xlbmd0aCA9IHdhbGwubGVuZ3RoIC0gNTtcbiAgXG4gICAgICAgICAgeDIgPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmltYXRlV2FsbEFuZ2xlIC8gMTgwKSAqIG5ld0xlbmd0aDtcbiAgICAgICAgICB5MiA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgLyAxODApICogbmV3TGVuZ3RoO1xuICBcbiAgICAgICAgICAvLyB0YXBlem9pZCBwb2ludCBvbiBmaXJzdCBsaW5lIFxuICAgICAgICAgIGJ4ID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAvIDE4MCkgKiAobmV3TGVuZ3RoIC0gREVGQVVMVFMuU0laRSk7XG4gICAgICAgICAgYnkgPSB0aGlzLnkgKyBNYXRoLnNpbihNYXRoLlBJICogdGhpcy5hbmltYXRlV2FsbEFuZ2xlIC8gMTgwKSAqIChuZXdMZW5ndGggLSBERUZBVUxUUy5TSVpFKTtcbiAgXG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGN0eC5tb3ZlVG8oYngsIGJ5KTtcbiAgICAgICAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gIFxuICAgICAgICAgIGlmIChwcmV2Q29vcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY3R4LmxpbmVUbyguLi5wcmV2Q29vcmQpO1xuICBcbiAgICAgICAgICAgIGF4ID0gcHJldkNvb3JkWzBdICsgTWF0aC5jb3MoTWF0aC5QSSAqICh0aGlzLmFuaW1hdGVXYWxsQW5nbGUgKyAxMjApIC8gMTgwKSAqIERFRkFVTFRTLlNJWkU7XG4gICAgICAgICAgICBheSA9IHByZXZDb29yZFsxXSArIE1hdGguc2luKE1hdGguUEkgKiAodGhpcy5hbmltYXRlV2FsbEFuZ2xlICsgMTIwKSAvIDE4MCkgKiBERUZBVUxUUy5TSVpFO1xuICBcbiAgICAgICAgICAgIGN0eC5saW5lVG8oYXgsIGF5KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oYngsIGJ5KTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGlmICh3YWxsLmlzV2FsbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzBdO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVswXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdhbGwuaXNXYWxsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzFdO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVsxXTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICBcbiAgICAgICAgICBwcmV2Q29vcmQgPSBbeDIsIHkyXTtcbiAgXG4gICAgICAgICAgdGhpcy53YWxsQ29tYm9zW2ldW2pdID0ge1xuICAgICAgICAgICAgbGVuZ3RoOiBuZXdMZW5ndGgsXG4gICAgICAgICAgICBpc1dhbGw6IHdhbGwuaXNXYWxsLFxuICAgICAgICAgICAgYW5nbGU6IHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSxcbiAgICAgICAgICAgIHBvaW50MTogW2F4LCBheV0sXG4gICAgICAgICAgICBwb2ludDI6IFtieCwgYnldLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYWxsczsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9