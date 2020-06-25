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
    this.beforeGame(this.ctx);
  }

  _createClass(WickedHexagon, [{
    key: "beforeGame",
    value: function beforeGame(ctx) {
      var that = this;
      var f = new FontFace('Squada One', 'url(https://fonts.gstatic.com/s/squadaone/v8/BCasqZ8XsOrx4mcOk6Mtaac2WRJnDgo.woff2)');
      f.load().then(function () {
        ctx.beginPath();
        ctx.rect(that.x / 2 - 100, that.y / 2 - 150, 200, 80);
        ctx.strokeStyle = "#c31e9e";
        ctx.stroke();
        ctx.fill();
        ctx.font = "30px Squada One";
        ctx.fillStyle = "#ffffff";
        ctx.fillText("SPACE TO PLAY", that.x / 2 - 80, that.y / 2 - 100);
      });
    }
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJXaWNrZWRIZXhhZ29uIiwiREVGQVVMVFMiLCJDT0xPUlMiLCJSQURJVVMiLCJTSVpFIiwiQ3Vyc29yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImFuZ2xlIiwicm90YXRlQW5nbGUiLCJ4IiwieSIsImRyYXciLCJNYXRoIiwiY29zIiwiUEkiLCJzaW4iLCJjdXJzb3JYIiwiY3Vyc29yWSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImZpbGxTdHlsZSIsImZpbGwiLCJkZWx0YVRpbWUiLCJkaW1lbnNpb25zIiwicnVubmluZyIsInJlZ2lzdGVyRXZlbnRzIiwic2VjdGlvbnMiLCJTZWN0aW9ucyIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInN0b3B3YXRjaCIsIlN0b3B3YXRjaCIsImhleGFnb24iLCJIZXhhZ29uIiwiY3Vyc29yIiwiY3Vyc29yRGlyIiwibXVzaWMiLCJBdWRpbyIsImJlZ2luQXVkaW8iLCJnYW1lT3ZlckF1ZGlvIiwiYmVmb3JlR2FtZSIsInRoYXQiLCJmIiwiRm9udEZhY2UiLCJsb2FkIiwidGhlbiIsInJlY3QiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImZvbnQiLCJmaWxsVGV4dCIsInRpbWVzdGFtcCIsIkRhdGUiLCJsYXN0VGltZSIsInN0YXJ0VGltZSIsInNldFRpbWVvdXQiLCJhbmltYXRlIiwid2FsbHMiLCJXYWxscyIsInBsYXkiLCJwb3B1bGF0ZVdhbGxzIiwic2V0SW50ZXJ2YWwiLCJnYW1lT3ZlciIsInBhdXNlIiwic3RvcCIsImNsZWFySW50ZXJ2YWwiLCJwaXZvdENsb2Nrd2lzZSIsInBpdm90Q291bnRlckNsb2Nrd2lzZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJldmVudCIsImtleUNvZGUiLCJjb2xsaWRlc1dpdGgiLCJ0aXAiLCJoZXgxIiwiaGV4MiIsInByZXZDb29yZCIsImkiLCJ4MiIsInkyIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwidGltZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbm5lckhUTUwiLCJudW0iLCJmbG9vciIsInRvU3RyaW5nIiwic3BsaXQiLCJub3ciLCJyb3VuZCIsImNvdW50RGVjaW1hbHMiLCJNQVgiLCJhbmltYXRlV2FsbEFuZ2xlIiwiY29tYm9zIiwid2FsbENvbWJvcyIsImNvbWJvIiwiYXgiLCJheSIsImJ4IiwiYnkiLCJ3YWxsIiwiaXNXYWxsIiwicHVzaCIsImN1cnNvclBvcyIsImoiLCJwb2ludDEiLCJwb2ludDIiLCJsZW5ndGgxIiwiZ2V0RGlzdGFuY2UiLCJsZW5ndGgyIiwic3FydCIsImNvbWJvc0lkeCIsInJhbmRvbSIsInVuc2hpZnQiLCJuZXdMZW5ndGgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7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LElBQXBCLEVBQTBCO0FBQ3hCbkcsaUJBQUcsQ0FBQzRDLFdBQUosR0FBa0JsRCxRQUFRLENBQUNDLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBbEI7QUFDQUssaUJBQUcsQ0FBQ2tCLFNBQUosR0FBZ0J4QixRQUFRLENBQUNDLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBaEI7QUFDRCxhQUhELE1BR08sSUFBSXVHLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixLQUFwQixFQUEyQjtBQUNoQ25HLGlCQUFHLENBQUM0QyxXQUFKLEdBQWtCbEQsUUFBUSxDQUFDQyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQWxCO0FBQ0FLLGlCQUFHLENBQUNrQixTQUFKLEdBQWdCeEIsUUFBUSxDQUFDQyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQWhCO0FBQ0Q7O0FBRURLLGVBQUcsQ0FBQ21CLElBQUo7QUFDQW5CLGVBQUcsQ0FBQzZDLE1BQUo7QUFFQTRCLHFCQUFTLEdBQUcsQ0FBQ0UsRUFBRCxFQUFLQyxFQUFMLENBQVo7QUFFQSxpQkFBS2dCLFVBQUwsQ0FBZ0JsQixDQUFoQixFQUFtQjRCLENBQW5CLElBQXdCO0FBQ3RCekIsb0JBQU0sRUFBRW1DLFNBRGM7QUFFdEJiLG9CQUFNLEVBQUVELElBQUksQ0FBQ0MsTUFGUztBQUd0QmpHLG1CQUFLLEVBQUUsS0FBS3dGLGdCQUhVO0FBSXRCYSxvQkFBTSxFQUFFLENBQUNULEVBQUQsRUFBS0MsRUFBTCxDQUpjO0FBS3RCUyxvQkFBTSxFQUFFLENBQUNSLEVBQUQsRUFBS0MsRUFBTDtBQUxjLGFBQXhCO0FBT0Q7QUFDRjtBQUNGO0FBQ0Y7Ozs7OztBQUdZMUMsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUMzTkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFdpY2tlZEhleGFnb24gZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuLy8gaW1wb3J0IFdpY2tlZEhleGFnb24gZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICBjYW52YXNFbC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIGNhbnZhc0VsLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgbmV3IFdpY2tlZEhleGFnb24oY2FudmFzRWwpO1xufSk7XG4iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXG4gICAgXCIjMDhmYjdiXCIsXG4gICAgXCIjZWY4NzA4XCIsXG4gICAgXCIjYzMxZTllXCIsXG4gICAgXCIjNmI0YWNhXCIsXG4gICAgXCIjMmI2YWVhXCIsXG4gIF0sXG4gIFJBRElVUzogNjAsXG4gIFNJWkU6IDUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJzb3Ige1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmdsZSA9IDMzMDtcbiAgICB0aGlzLnJvdGF0ZUFuZ2xlID0gMDtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIHRpcCgpIHtcbiAgICBsZXQgeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpICsgKE1hdGguY29zKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSAqIChERUZBVUxUUy5SQURJVVMgKyBERUZBVUxUUy5TSVpFKSk7XG4gICAgbGV0IHkgPSAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMikgKyAoTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApICogKERFRkFVTFRTLlJBRElVUyArIERFRkFVTFRTLlNJWkUpKTtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICB0aGlzLmN1cnNvclggPSAodGhpcy5jYW52YXMud2lkdGggLyAyKSArIChNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiBERUZBVUxUUy5SQURJVVMpO1xuICAgIHRoaXMuY3Vyc29yWSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSArIChNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiBERUZBVUxUUy5SQURJVVMpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy5jdXJzb3JYLCAtdGhpcy5jdXJzb3JZKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMuY3Vyc29yWCAtIERFRkFVTFRTLlNJWkUsIHRoaXMuY3Vyc29yWSAtIERFRkFVTFRTLlNJWkUpO1xuICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYICsgREVGQVVMVFMuU0laRSwgdGhpcy5jdXJzb3JZKTtcbiAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCAtIERFRkFVTFRTLlNJWkUsIHRoaXMuY3Vyc29yWSArIERFRkFVTFRTLlNJWkUpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl07XG4gICAgY3R4LmZpbGwoKTtcblxuICAgIGN0eC50cmFuc2xhdGUodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgIGN0eC5yb3RhdGUoLXRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICBjdHgudHJhbnNsYXRlKC10aGlzLmN1cnNvclgsIC10aGlzLmN1cnNvclkpO1xuICB9XG5cbiAgYW5pbWF0ZShjdHgpIHtcbiAgICB0aGlzLmRyYXcoY3R4KTtcbiAgfVxuXG4gIHBpdm90Q2xvY2t3aXNlKGRlbHRhVGltZSwgY3R4KSB7XG4gICAgdGhpcy5hbmdsZSArPSAoMTUwIC8gZGVsdGFUaW1lKTtcbiAgICB0aGlzLmRyYXcoY3R4KVxuICB9XG5cbiAgcGl2b3RDb3VudGVyQ2xvY2t3aXNlKGRlbHRhVGltZSwgY3R4KSB7XG4gICAgdGhpcy5hbmdsZSAtPSAoMTUwIC8gZGVsdGFUaW1lKTtcbiAgICB0aGlzLmRyYXcoY3R4KTtcbiAgfVxufSIsImltcG9ydCBTdG9wd2F0Y2ggZnJvbSAnLi9zdG9wd2F0Y2gnO1xuaW1wb3J0IEhleGFnb24gZnJvbSAnLi9oZXhhZ29uJztcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi9jdXJzb3InO1xuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vc2VjdGlvbnMnO1xuaW1wb3J0IFdhbGxzIGZyb20gJy4vd2FsbHMnO1xuLy8gaW1wb3J0IHRoZSBvdGhlciBzY3JpcHRzXG5cbmNvbnN0IENPTE9SUyA9IFtcbiAgLy8gYmFzZSwgc2VjdGlvbnMsIGN1cnNvci93YWxscyAgIH4gLy8gYmxhY2sgdG8gY29sb3IgLy8gd2hpdGUgdG8gY29sb3JcbiAgW1wiIzAwMDAwMFwiLCBcIiMwMjI3MTNcIiwgXCIjMDhmYjdiXCJdLCAgICAvLyBibGFjay9ncmVlblxuICBbXCIjMDAwMDAwXCIsIFwiIzI2MTUwMVwiLCBcIiNlZjg3MDhcIl0sICAgIC8vIGJsYWNrL29yYW5nZVxuICBbXCIjZmZmZmZmXCIsIFwiI2Y1ZGNmMFwiLCBcIiNjMzFlOWVcIl0sICAgIC8vIHdoaXRlL3BpbmtcbiAgW1wiI2ZmZmZmZlwiLCBcIiNlN2UzZjdcIiwgXCIjNmI0YWNhXCJdLCAgICAvLyB3aGl0ZS9wdXJwbGVcbiAgW1wiI2ZmZmZmZlwiLCBcIiNkZGU4ZmNcIiwgXCIjMmI2YWVhXCJdLCAgICAvLyB3aGl0ZS9ibHVlXG5dXG5cbmNsYXNzIFdpY2tlZEhleGFnb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGg7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodDtcblxuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcblxuICAgIHRoaXMuc2VjdGlvbnMgPSBuZXcgU2VjdGlvbnMoY2FudmFzKTtcbiAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIHRoaXMuc3RvcHdhdGNoID0gbmV3IFN0b3B3YXRjaChjYW52YXMpO1xuICAgIHRoaXMuaGV4YWdvbiA9IG5ldyBIZXhhZ29uKGNhbnZhcyk7XG4gICAgdGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKGNhbnZhcyk7XG5cbiAgICB0aGlzLmN1cnNvckRpciA9ICcnO1xuXG4gICAgdGhpcy5tdXNpYyA9IG5ldyBBdWRpbygnYXNzZXRzL3NvdW5kcy9DdXNwLm1wMycpO1xuICAgIHRoaXMuYmVnaW5BdWRpbyA9IG5ldyBBdWRpbygnYXNzZXRzL3NvdW5kcy9iZWdpbi5tcDMnKTtcbiAgICB0aGlzLmdhbWVPdmVyQXVkaW8gPSBuZXcgQXVkaW8oJ2Fzc2V0cy9zb3VuZHMvZ2FtZV9vdmVyLm1wMycpO1xuXG4gICAgdGhpcy5iZWZvcmVHYW1lKHRoaXMuY3R4KTtcbiAgfVxuXG4gIGJlZm9yZUdhbWUoY3R4KSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuXG4gICAgbGV0IGYgPSBuZXcgRm9udEZhY2UoJ1NxdWFkYSBPbmUnLCAndXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9zcXVhZGFvbmUvdjgvQkNhc3FaOFhzT3J4NG1jT2s2TXRhYWMyV1JKbkRnby53b2ZmMiknKTtcblxuICAgIGYubG9hZCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnJlY3QodGhhdC54LzIgLSAxMDAsIHRoYXQueS8yIC0gMTUwLCAyMDAsIDgwKTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiI2MzMWU5ZVwiO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5mb250ID0gXCIzMHB4IFNxdWFkYSBPbmVcIjtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgIGN0eC5maWxsVGV4dChcIlNQQUNFIFRPIFBMQVlcIiwgdGhhdC54IC8gMiAtIDgwLCB0aGF0LnkgLyAyIC0gMTAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICBsZXQgdGltZXN0YW1wID0gbmV3IERhdGUoKVxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hbmltYXRlKHRpbWVzdGFtcCksIDMwMCk7XG5cbiAgICB0aGlzLndhbGxzID0gbmV3IFdhbGxzKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuYmVnaW5BdWRpby5wbGF5KCk7XG4gICAgdGhpcy5wb3B1bGF0ZVdhbGxzID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy53YWxscy5wb3B1bGF0ZVdhbGxzKCksIDgwMCk7XG4gICAgdGhpcy5tdXNpYy5sb2FkKCk7XG4gICAgdGhpcy5tdXNpYy5wbGF5KCk7XG4gIH1cblxuICBhbmltYXRlKHRpbWVzdGFtcCkge1xuICAgIGxldCBkZWx0YVRpbWUgPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lO1xuXG4gICAgdGhpcy5kZWx0YVRpbWUgPSBkZWx0YVRpbWU7XG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcblxuICAgIHRoaXMuc3RvcHdhdGNoLmFuaW1hdGUodGhpcy5zdGFydFRpbWUpO1xuICAgIHRoaXMuc2VjdGlvbnMuYW5pbWF0ZShkZWx0YVRpbWUpO1xuICAgIHRoaXMuaGV4YWdvbi5hbmltYXRlKGRlbHRhVGltZSk7XG4gICAgdGhpcy5jdXJzb3IuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgdGhpcy53YWxscy5hbmltYXRlKHRoaXMuY3R4KTtcblxuICAgIGlmICh0aGlzLmdhbWVPdmVyKCkgPT09IHRydWUpIHtcbiAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5nYW1lT3ZlckF1ZGlvLnBsYXkoKTtcbiAgICAgIHRoaXMubXVzaWMucGF1c2UoKTtcbiAgICAgIHRoaXMuc3RvcHdhdGNoLnN0b3AoKTtcbiAgICAgIHRoaXMuaGV4YWdvbi5zdG9wKCk7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMucG9wdWxhdGVXYWxscyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3Vyc29yRGlyID09PSAnY2xvY2t3aXNlJykge1xuICAgICAgdGhpcy5jdXJzb3IucGl2b3RDbG9ja3dpc2UoZGVsdGFUaW1lLCB0aGlzLmN0eCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnNvckRpciA9PT0gJ2NvdW50ZXJDbG9ja3dpc2UnKSB7XG4gICAgICB0aGlzLmN1cnNvci5waXZvdENvdW50ZXJDbG9ja3dpc2UoZGVsdGFUaW1lLCB0aGlzLmN0eCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucnVubmluZyA9PT0gdHJ1ZSkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3RlckV2ZW50cygpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3IHx8IGV2ZW50LmtleUNvZGUgPT09IDY1KSB7XG4gICAgICAgIGlmICh0aGF0LnJ1bm5pbmcpIHtcbiAgICAgICAgICB0aGF0LmN1cnNvckRpciA9ICdjb3VudGVyQ2xvY2t3aXNlJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSB8fCBldmVudC5rZXlDb2RlID09PSA2OCkge1xuICAgICAgICBpZiAodGhhdC5ydW5uaW5nKSB7XG4gICAgICAgICAgdGhhdC5jdXJzb3JEaXIgPSAnY2xvY2t3aXNlJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICB0aGF0LnBsYXkoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiAodGhhdC5jdXJzb3JEaXIgPSAnJykpO1xuICB9XG5cbiAgZ2FtZU92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMud2FsbHMuY29sbGlkZXNXaXRoKHRoaXMuY3Vyc29yLnRpcCgpKTtcbiAgfVxuXG4gIGRyYXdQcmVnYW1lKCkge1xuXG4gIH1cblxuICBkcmF3UG9zdGdhbWUoKSB7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaWNrZWRIZXhhZ29uOyIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcbiAgICBbXCIjMDAwMDAwXCIsIFwiIzA4ZmI3YlwiXSxcbiAgICBbXCIjMDAwMDAwXCIsIFwiI2VmODcwOFwiXSxcbiAgICBbXCIjZmZmZmZmXCIsIFwiI2MzMWU5ZVwiXSxcbiAgICBbXCIjZmZmZmZmXCIsIFwiIzZiNGFjYVwiXSxcbiAgICBbXCIjZmZmZmZmXCIsIFwiIzJiNmFlYVwiXSxcbiAgXSxcbiAgU0laRTogNTAsXG59XG5cblxuY2xhc3MgSGV4YWdvbiB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy54LCAtdGhpcy55KTtcblxuICAgIGxldCBoZXgxID0gMDtcbiAgICBmb3IgKGhleDE7IGhleDEgPD0gNjsgaGV4MSsrKSB7XG4gICAgICBjdHgubGluZVRvKHRoaXMueCArIERFRkFVTFRTLlNJWkUgKiBNYXRoLmNvcyhoZXgxICogMiAqIE1hdGguUEkgLyA2KSwgdGhpcy55ICsgREVGQVVMVFMuU0laRSAqIE1hdGguc2luKGhleDEgKiAyICogTWF0aC5QSSAvIDYpKTtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzFdO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG5cbiAgICBsZXQgaGV4MiA9IDA7XG4gICAgZm9yIChoZXgyOyBoZXgyIDw9IDY7IGhleDIrKykge1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyA0NCAqIE1hdGguY29zKGhleDIgKiAyICogTWF0aC5QSSAvIDYpLCB0aGlzLnkgKyA0NCAqIE1hdGguc2luKGhleDIgKiAyICogTWF0aC5QSSAvIDYpKTtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzBdO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBhbmltYXRlKGRlbHRhVGltZSkge1xuICAgIHRoaXMuYW5nbGUgPSAoMjAgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhleGFnb247IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1xuICAgIFtcIiMwMDAwMDBcIiwgXCIjMDIyNzEzXCJdLFxuICAgIFtcIiMwMDAwMDBcIiwgXCIjMjYxNTAxXCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjZjVkY2YwXCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjZTdlM2Y3XCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjZGRlOGZjXCJdLFxuICBdLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmFuZ2xlID0gLTYwO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAvIDI7XG4gICAgXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgbGV0IHByZXZDb29yZDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDY7IGkrKykge1xuICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyA2MDtcbiAgICAgIH1cblxuICAgICAgbGV0IHgyLCB5MiwgbGVuZ3RoO1xuXG4gICAgICAvLyBsZW5ndGggPSBNYXRoLmZsb29yKE1hdGguc3FydCgzKSAqIHRoaXMueCAqIDIpO1xuICAgICAgbGVuZ3RoID0gMTUwMDtcbiAgICAgIHgyID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogbGVuZ3RoO1xuICAgICAgeTIgPSB0aGlzLnkgKyBNYXRoLnNpbihNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBsZW5ndGg7XG5cbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuICAgICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgICAgaWYgKHByZXZDb29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN0eC5saW5lVG8oLi4ucHJldkNvb3JkKTtcbiAgICAgIH1cbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVtpICUgMl07XG4gICAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdW2kgJSAyXTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIHByZXZDb29yZCA9IFt4MiwgeTJdO1xuICAgIH1cbiAgfVxuXG4gIGFuaW1hdGUoZGVsdGFUaW1lKSB7XG4gICAgLy8gdGhpcy5hbmdsZSArPSAoMSAvIGRlbHRhVGltZSk7XG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfSAgXG59IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1xuICAgIFtcIiMwMDAwMDBcIiwgXCIjZmZmZmZmXCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjZWY4NzA4XCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjNmI0YWNhXCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjMmI2YWVhXCJdLFxuICBdLFxufVxuXG5jbGFzcyBTdG9wd2F0Y2gge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy50aW1lID0gXCIwLjAwXCI7XG5cbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3Qgc3RvcHdhdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0b3B3YXRjaFwiKTtcbiAgICBzdG9wd2F0Y2hbMF0uaW5uZXJIVE1MID0gXCJcIjtcbiAgICBzdG9wd2F0Y2hbMF0uaW5uZXJIVE1MICs9IGAke3RoaXMudGltZX1gO1xuICB9XG5cbiAgY291bnREZWNpbWFscyhudW0pIHtcbiAgICBpZiAoTWF0aC5mbG9vcihudW0pICE9PSBudW0pIHtcbiAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoIHx8IDA7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgYW5pbWF0ZShzdGFydFRpbWUpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMudGltZSA9IE1hdGgucm91bmQoKChub3cgLSBzdGFydFRpbWUpIC8gMTAwMCkgKiAxMDApIC8gMTAwO1xuXG4gICAgaWYgKHRoaXMuY291bnREZWNpbWFscyh0aGlzLnRpbWUpID09PSAwKSB7XG4gICAgICB0aGlzLnRpbWUgPSBgJHt0aGlzLnRpbWV9LjAwYDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY291bnREZWNpbWFscyh0aGlzLnRpbWUpID09PSAxKSB7XG4gICAgICB0aGlzLnRpbWUgPSBgJHt0aGlzLnRpbWV9MGA7XG4gICAgfVxuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgbGV0IHRpbWUgPSB0aGlzLnRpbWU7XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9wd2F0Y2g7IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1xuICAgIFtcIiMwOGZiN2JcIiwgJ3JnYmEoMCwwLDAsMCknXSxcbiAgICBbXCIjZWY4NzA4XCIsICdyZ2JhKDAsMCwwLDApJ10sXG4gICAgW1wiI2MzMWU5ZVwiLCAncmdiYSgwLDAsMCwwKSddLFxuICAgIFtcIiM2YjRhY2FcIiwgJ3JnYmEoMCwwLDAsMCknXSxcbiAgICBbXCIjMmI2YWVhXCIsICdyZ2JhKDAsMCwwLDApJ10sXG4gIF0sXG4gIC8vIHNlY29uZCBjb2xvciBpcyB0cmFuc3BhcmVudFxuICBTSVpFOiA0MCxcbiAgTUFYOiAxMDAwLFxuICAvLyBjb3JyZXNwb25kcyB3LyB0aGUgc2VjdGlvbnMnIGxlbmd0aHNcbn07XG5cbmNsYXNzIFdhbGxzIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5nbGUgPSAtNjA7XG4gICAgdGhpcy5hbmltYXRlV2FsbEFuZ2xlID0gLTYwO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAvIDI7XG5cbiAgICB0aGlzLmNvbWJvcyA9IFtcbiAgICAgIFt0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZV0sXG4gICAgICBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWVdLFxuICAgICAgW3RydWUsIHRydWUsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlXSxcbiAgICAgIFt0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0sXG4gICAgICBbdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIHRydWVdLFxuICAgICAgW2ZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlXSxcbiAgICAgIFt0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIGZhbHNlXSxcbiAgICAgIFtmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIGZhbHNlLCB0cnVlXSxcbiAgICAgIFt0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2VdLFxuICAgIF1cblxuICAgIHRoaXMud2FsbENvbWJvcyA9IFtdO1xuICB9XG5cbiAgZHJhdyAoY3R4LCBjb21ibykge1xuICAgIGxldCBwcmV2Q29vcmQsIHdhbGxzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gLTE7IGkgPD0gNTsgaSsrKSB7XG4gICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyA2MDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYW5nbGUgPj0gMzYwKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICUgMzYwO1xuICAgICAgfVxuXG4gICAgICBsZXQgeDIsIHkyLCBheCwgYXksIGJ4LCBieTtcbiAgICAgIC8vIG91dHRlciB0cmFwZXpvaWQgY29ybmVyXG4gICAgICB4MiA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIERFRkFVTFRTLk1BWDtcbiAgICAgIHkyID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogREVGQVVMVFMuTUFYO1xuXG4gICAgICAvLyBpbm5lciB0YXBlem9pZCBwb2ludCBvbiBmaXJzdCBsaW5lIFxuICAgICAgYnggPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiAoREVGQVVMVFMuTUFYIC0gREVGQVVMVFMuU0laRSk7XG4gICAgICBieSA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIChERUZBVUxUUy5NQVggLSBERUZBVUxUUy5TSVpFKTsgXG5cbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8oYngsIGJ5KTtcbiAgICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcblxuICAgICAgaWYgKHByZXZDb29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN0eC5saW5lVG8oLi4ucHJldkNvb3JkKTtcblxuICAgICAgICBheCA9IHByZXZDb29yZFswXSArIE1hdGguY29zKE1hdGguUEkgKiAodGhpcy5hbmdsZSArIDEyMCkgLyAxODApICogREVGQVVMVFMuU0laRTtcbiAgICAgICAgYXkgPSBwcmV2Q29vcmRbMV0gKyBNYXRoLnNpbihNYXRoLlBJICogKHRoaXMuYW5nbGUgKyAxMjApIC8gMTgwKSAqIERFRkFVTFRTLlNJWkU7XG5cbiAgICAgICAgY3R4LmxpbmVUbyhheCwgYXkpO1xuICAgICAgICBjdHgubGluZVRvKGJ4LCBieSk7XG4gICAgICB9XG5cbiAgICAgICAgaWYgKGkgPT09IC0xIHx8IGNvbWJvW2ldID09PSBmYWxzZSkge1xuICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVsxXTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzFdO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbWJvW2ldKSB7XG4gICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzBdO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMF07XG4gICAgICAgIH1cblxuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgcHJldkNvb3JkID0gW3gyLCB5Ml07XG5cbiAgICAgIGxldCB3YWxsID0ge1xuICAgICAgICBsZW5ndGg6IDEwMDAsXG4gICAgICAgIGlzV2FsbDogJycsXG4gICAgICB9O1xuXG4gICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgd2FsbC5pc1dhbGwgPSAnbGluZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YWxsLmlzV2FsbCA9IGNvbWJvW2ldO1xuICAgICAgfVxuXG4gICAgICB3YWxscy5wdXNoKHdhbGwpO1xuICAgIH1cblxuICAgIHRoaXMud2FsbENvbWJvcy5wdXNoKHdhbGxzKTtcbiAgfVxuXG4gIGNvbGxpZGVzV2l0aChjdXJzb3JQb3MpIHtcbiAgICBpZiAodGhpcy53YWxsQ29tYm9zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLndhbGxDb21ib3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IHdhbGxzID0gdGhpcy53YWxsQ29tYm9zW2pdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgd2FsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgd2FsbCA9IHdhbGxzW2ldO1xuICBcbiAgICAgICAgICBpZiAod2FsbC5pc1dhbGwpIHtcbiAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IGN1cnNvclBvcztcbiAgICAgICAgICAgIGNvbnN0IFtheCwgYXldID0gd2FsbC5wb2ludDE7XG4gICAgICAgICAgICBjb25zdCBbYngsIGJ5XSA9IHdhbGwucG9pbnQyO1xuICBcbiAgICAgICAgICAgIGxldCBsZW5ndGgxID0gdGhpcy5nZXREaXN0YW5jZSh4LCB5LCBheCwgYXkpO1xuICAgICAgICAgICAgbGV0IGxlbmd0aDIgPSB0aGlzLmdldERpc3RhbmNlKHgsIHksIGJ4LCBieSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChsZW5ndGgxICsgbGVuZ3RoMiA8PSB3YWxsLmxlbmd0aCAtIDM5KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGlzdGFuY2UoYXgsIGF5LCBieCwgYnkpIHtcbiAgICBjb25zdCB4ID0gYXggLSBieDtcbiAgICBjb25zdCB5ID0gYXkgLSBieTtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gIH1cblxuICBwb3B1bGF0ZVdhbGxzKCkge1xuICAgIGxldCBjb21ib3NJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNvbWJvcy5sZW5ndGgpO1xuICAgIGxldCBjb21ibyA9IHRoaXMuY29tYm9zW2NvbWJvc0lkeF07XG5cbiAgICB0aGlzLmRyYXcodGhpcy5jdHgsIGNvbWJvKTtcbiAgfVxuXG4gIGFuaW1hdGUoY3R4KSB7XG4gICAgaWYgKHRoaXMud2FsbENvbWJvcy5sZW5ndGggIT09IDAgJiYgdGhpcy53YWxsQ29tYm9zW3RoaXMud2FsbENvbWJvcy5sZW5ndGggLSAxXS5sZW5ndGggJSA3ID09PSAwKSB7XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53YWxsQ29tYm9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB3YWxscyA9IHRoaXMud2FsbENvbWJvc1tpXTtcblxuICAgICAgICBpZiAod2FsbHNbMF0ubGVuZ3RoID09PSA3MCkge1xuICAgICAgICAgIHRoaXMud2FsbENvbWJvcy51bnNoaWZ0KCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJldkNvb3JkO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2FsbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgd2FsbCA9IHdhbGxzW2pdO1xuXG4gICAgICAgICAgaWYgKHdhbGwuaXNXYWxsICE9PSAnbGluZScpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSA9IHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSArIDYwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmFuaW1hdGVXYWxsQW5nbGUgPj0gMzYwKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgPSB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgJSAzNjA7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBsZXQgeDIsIHkyLCBheCwgYXksIGJ4LCBieSwgbmV3TGVuZ3RoO1xuICBcbiAgICAgICAgICBuZXdMZW5ndGggPSB3YWxsLmxlbmd0aCAtIDU7XG4gIFxuICAgICAgICAgIHgyID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAvIDE4MCkgKiBuZXdMZW5ndGg7XG4gICAgICAgICAgeTIgPSB0aGlzLnkgKyBNYXRoLnNpbihNYXRoLlBJICogdGhpcy5hbmltYXRlV2FsbEFuZ2xlIC8gMTgwKSAqIG5ld0xlbmd0aDtcbiAgXG4gICAgICAgICAgLy8gdGFwZXpvaWQgcG9pbnQgb24gZmlyc3QgbGluZSBcbiAgICAgICAgICBieCA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgLyAxODApICogKG5ld0xlbmd0aCAtIERFRkFVTFRTLlNJWkUpO1xuICAgICAgICAgIGJ5ID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAvIDE4MCkgKiAobmV3TGVuZ3RoIC0gREVGQVVMVFMuU0laRSk7XG4gIFxuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHgubW92ZVRvKGJ4LCBieSk7XG4gICAgICAgICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICBcbiAgICAgICAgICBpZiAocHJldkNvb3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oLi4ucHJldkNvb3JkKTtcbiAgXG4gICAgICAgICAgICBheCA9IHByZXZDb29yZFswXSArIE1hdGguY29zKE1hdGguUEkgKiAodGhpcy5hbmltYXRlV2FsbEFuZ2xlICsgMTIwKSAvIDE4MCkgKiBERUZBVUxUUy5TSVpFO1xuICAgICAgICAgICAgYXkgPSBwcmV2Q29vcmRbMV0gKyBNYXRoLnNpbihNYXRoLlBJICogKHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSArIDEyMCkgLyAxODApICogREVGQVVMVFMuU0laRTtcbiAgXG4gICAgICAgICAgICBjdHgubGluZVRvKGF4LCBheSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKGJ4LCBieSk7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBpZiAod2FsbC5pc1dhbGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVswXTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMF07XG4gICAgICAgICAgfSBlbHNlIGlmICh3YWxsLmlzV2FsbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVsxXTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMV07XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgXG4gICAgICAgICAgcHJldkNvb3JkID0gW3gyLCB5Ml07XG4gIFxuICAgICAgICAgIHRoaXMud2FsbENvbWJvc1tpXVtqXSA9IHtcbiAgICAgICAgICAgIGxlbmd0aDogbmV3TGVuZ3RoLFxuICAgICAgICAgICAgaXNXYWxsOiB3YWxsLmlzV2FsbCxcbiAgICAgICAgICAgIGFuZ2xlOiB0aGlzLmFuaW1hdGVXYWxsQW5nbGUsXG4gICAgICAgICAgICBwb2ludDE6IFtheCwgYXldLFxuICAgICAgICAgICAgcG9pbnQyOiBbYngsIGJ5XSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2FsbHM7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==