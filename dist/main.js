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
    this.registerEvents(); // this.ctx.setTransform(3, 0, 0, 3, -this.x, -this.y);
    // this.ctx.setTransform(2, 0, 0, 2, -this.x/2, -this.y/2);
    // this.ctx.setTransform(1, 0, 0, 1, 0, 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJXaWNrZWRIZXhhZ29uIiwiREVGQVVMVFMiLCJDT0xPUlMiLCJSQURJVVMiLCJTSVpFIiwiQ3Vyc29yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImFuZ2xlIiwicm90YXRlQW5nbGUiLCJ4IiwieSIsImRyYXciLCJNYXRoIiwiY29zIiwiUEkiLCJzaW4iLCJjdXJzb3JYIiwiY3Vyc29yWSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImZpbGxTdHlsZSIsImZpbGwiLCJkZWx0YVRpbWUiLCJkaW1lbnNpb25zIiwicnVubmluZyIsInJlZ2lzdGVyRXZlbnRzIiwic2VjdGlvbnMiLCJTZWN0aW9ucyIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInN0b3B3YXRjaCIsIlN0b3B3YXRjaCIsImhleGFnb24iLCJIZXhhZ29uIiwiY3Vyc29yIiwiY3Vyc29yRGlyIiwibXVzaWMiLCJBdWRpbyIsImJlZ2luQXVkaW8iLCJnYW1lT3ZlckF1ZGlvIiwiYmVmb3JlR2FtZSIsInRoYXQiLCJmIiwiRm9udEZhY2UiLCJsb2FkIiwidGhlbiIsInJlY3QiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImZvbnQiLCJmaWxsVGV4dCIsInRpbWVzdGFtcCIsIkRhdGUiLCJsYXN0VGltZSIsInN0YXJ0VGltZSIsInNldFRpbWVvdXQiLCJhbmltYXRlIiwid2FsbHMiLCJXYWxscyIsInBsYXkiLCJwb3B1bGF0ZVdhbGxzIiwic2V0SW50ZXJ2YWwiLCJnYW1lT3ZlciIsInBhdXNlIiwic3RvcCIsImNsZWFySW50ZXJ2YWwiLCJwaXZvdENsb2Nrd2lzZSIsInBpdm90Q291bnRlckNsb2Nrd2lzZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJldmVudCIsImtleUNvZGUiLCJjb2xsaWRlc1dpdGgiLCJ0aXAiLCJoZXgxIiwiaGV4MiIsInByZXZDb29yZCIsImkiLCJ4MiIsInkyIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwidGltZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbm5lckhUTUwiLCJudW0iLCJmbG9vciIsInRvU3RyaW5nIiwic3BsaXQiLCJub3ciLCJyb3VuZCIsImNvdW50RGVjaW1hbHMiLCJNQVgiLCJhbmltYXRlV2FsbEFuZ2xlIiwiY29tYm9zIiwid2FsbENvbWJvcyIsImNvbWJvIiwiYXgiLCJheSIsImJ4IiwiYnkiLCJ3YWxsIiwiaXNXYWxsIiwicHVzaCIsImN1cnNvclBvcyIsImoiLCJwb2ludDEiLCJwb2ludDIiLCJsZW5ndGgxIiwiZ2V0RGlzdGFuY2UiLCJsZW5ndGgyIiwic3FydCIsImNvbWJvc0lkeCIsInJhbmRvbSIsInVuc2hpZnQiLCJuZXdMZW5ndGgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7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QyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsSUFBcEIsRUFBMEI7QUFDeEJuRyxpQkFBRyxDQUFDNEMsV0FBSixHQUFrQmxELFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFsQjtBQUNBSyxpQkFBRyxDQUFDa0IsU0FBSixHQUFnQnhCLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFoQjtBQUNELGFBSEQsTUFHTyxJQUFJdUcsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEtBQXBCLEVBQTJCO0FBQ2hDbkcsaUJBQUcsQ0FBQzRDLFdBQUosR0FBa0JsRCxRQUFRLENBQUNDLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBbEI7QUFDQUssaUJBQUcsQ0FBQ2tCLFNBQUosR0FBZ0J4QixRQUFRLENBQUNDLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBaEI7QUFDRDs7QUFFREssZUFBRyxDQUFDbUIsSUFBSjtBQUNBbkIsZUFBRyxDQUFDNkMsTUFBSjtBQUVBNEIscUJBQVMsR0FBRyxDQUFDRSxFQUFELEVBQUtDLEVBQUwsQ0FBWjtBQUVBLGlCQUFLZ0IsVUFBTCxDQUFnQmxCLENBQWhCLEVBQW1CNEIsQ0FBbkIsSUFBd0I7QUFDdEJ6QixvQkFBTSxFQUFFbUMsU0FEYztBQUV0QmIsb0JBQU0sRUFBRUQsSUFBSSxDQUFDQyxNQUZTO0FBR3RCakcsbUJBQUssRUFBRSxLQUFLd0YsZ0JBSFU7QUFJdEJhLG9CQUFNLEVBQUUsQ0FBQ1QsRUFBRCxFQUFLQyxFQUFMLENBSmM7QUFLdEJTLG9CQUFNLEVBQUUsQ0FBQ1IsRUFBRCxFQUFLQyxFQUFMO0FBTGMsYUFBeEI7QUFPRDtBQUNGO0FBQ0Y7QUFDRjs7Ozs7O0FBR1kxQyxvRUFBZixFOzs7Ozs7Ozs7OztBQzNOQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgV2lja2VkSGV4YWdvbiBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG4vLyBpbXBvcnQgV2lja2VkSGV4YWdvbiBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5cbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gIGNhbnZhc0VsLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgY2FudmFzRWwud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICBuZXcgV2lja2VkSGV4YWdvbihjYW52YXNFbCk7XG59KTtcbiIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcbiAgICBcIiMwOGZiN2JcIixcbiAgICBcIiNlZjg3MDhcIixcbiAgICBcIiNjMzFlOWVcIixcbiAgICBcIiM2YjRhY2FcIixcbiAgICBcIiMyYjZhZWFcIixcbiAgXSxcbiAgUkFESVVTOiA2MCxcbiAgU0laRTogNSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmFuZ2xlID0gMzMwO1xuICAgIHRoaXMucm90YXRlQW5nbGUgPSAwO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAvIDI7XG5cbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgdGlwKCkge1xuICAgIGxldCB4ID0gKHRoaXMuY2FudmFzLndpZHRoIC8gMikgKyAoTWF0aC5jb3ModGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApICogKERFRkFVTFRTLlJBRElVUyArIERFRkFVTFRTLlNJWkUpKTtcbiAgICBsZXQgeSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSArIChNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiAoREVGQVVMVFMuUkFESVVTICsgREVGQVVMVFMuU0laRSkpO1xuICAgIHJldHVybiBbeCwgeV07XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIHRoaXMuY3Vyc29yWCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpICsgKE1hdGguY29zKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSAqIERFRkFVTFRTLlJBRElVUyk7XG4gICAgdGhpcy5jdXJzb3JZID0gKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpICsgKE1hdGguc2luKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSAqIERFRkFVTFRTLlJBRElVUyk7XG5cbiAgICBjdHgudHJhbnNsYXRlKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICBjdHgudHJhbnNsYXRlKC10aGlzLmN1cnNvclgsIC10aGlzLmN1cnNvclkpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy5jdXJzb3JYIC0gREVGQVVMVFMuU0laRSwgdGhpcy5jdXJzb3JZIC0gREVGQVVMVFMuU0laRSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclggKyBERUZBVUxUUy5TSVpFLCB0aGlzLmN1cnNvclkpO1xuICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYIC0gREVGQVVMVFMuU0laRSwgdGhpcy5jdXJzb3JZICsgREVGQVVMVFMuU0laRSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXTtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgY3R4LnJvdGF0ZSgtdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGN0eC50cmFuc2xhdGUoLXRoaXMuY3Vyc29yWCwgLXRoaXMuY3Vyc29yWSk7XG4gIH1cblxuICBhbmltYXRlKGN0eCkge1xuICAgIHRoaXMuZHJhdyhjdHgpO1xuICB9XG5cbiAgcGl2b3RDbG9ja3dpc2UoZGVsdGFUaW1lLCBjdHgpIHtcbiAgICB0aGlzLmFuZ2xlICs9ICgxNTAgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyhjdHgpXG4gIH1cblxuICBwaXZvdENvdW50ZXJDbG9ja3dpc2UoZGVsdGFUaW1lLCBjdHgpIHtcbiAgICB0aGlzLmFuZ2xlIC09ICgxNTAgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyhjdHgpO1xuICB9XG59IiwiaW1wb3J0IFN0b3B3YXRjaCBmcm9tICcuL3N0b3B3YXRjaCc7XG5pbXBvcnQgSGV4YWdvbiBmcm9tICcuL2hleGFnb24nO1xuaW1wb3J0IEN1cnNvciBmcm9tICcuL2N1cnNvcic7XG5pbXBvcnQgU2VjdGlvbnMgZnJvbSAnLi9zZWN0aW9ucyc7XG5pbXBvcnQgV2FsbHMgZnJvbSAnLi93YWxscyc7XG4vLyBpbXBvcnQgdGhlIG90aGVyIHNjcmlwdHNcblxuY29uc3QgQ09MT1JTID0gW1xuICAvLyBiYXNlLCBzZWN0aW9ucywgY3Vyc29yL3dhbGxzICAgfiAvLyBibGFjayB0byBjb2xvciAvLyB3aGl0ZSB0byBjb2xvclxuICBbXCIjMDAwMDAwXCIsIFwiIzAyMjcxM1wiLCBcIiMwOGZiN2JcIl0sICAgIC8vIGJsYWNrL2dyZWVuXG4gIFtcIiMwMDAwMDBcIiwgXCIjMjYxNTAxXCIsIFwiI2VmODcwOFwiXSwgICAgLy8gYmxhY2svb3JhbmdlXG4gIFtcIiNmZmZmZmZcIiwgXCIjZjVkY2YwXCIsIFwiI2MzMWU5ZVwiXSwgICAgLy8gd2hpdGUvcGlua1xuICBbXCIjZmZmZmZmXCIsIFwiI2U3ZTNmN1wiLCBcIiM2YjRhY2FcIl0sICAgIC8vIHdoaXRlL3B1cnBsZVxuICBbXCIjZmZmZmZmXCIsIFwiI2RkZThmY1wiLCBcIiMyYjZhZWFcIl0sICAgIC8vIHdoaXRlL2JsdWVcbl1cblxuY2xhc3MgV2lja2VkSGV4YWdvbiB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aDtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuXG4gICAgLy8gdGhpcy5jdHguc2V0VHJhbnNmb3JtKDMsIDAsIDAsIDMsIC10aGlzLngsIC10aGlzLnkpO1xuICAgIC8vIHRoaXMuY3R4LnNldFRyYW5zZm9ybSgyLCAwLCAwLCAyLCAtdGhpcy54LzIsIC10aGlzLnkvMik7XG4gICAgLy8gdGhpcy5jdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuXG4gICAgdGhpcy5zZWN0aW9ucyA9IG5ldyBTZWN0aW9ucyhjYW52YXMpO1xuICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgdGhpcy5zdG9wd2F0Y2ggPSBuZXcgU3RvcHdhdGNoKGNhbnZhcyk7XG4gICAgdGhpcy5oZXhhZ29uID0gbmV3IEhleGFnb24oY2FudmFzKTtcbiAgICB0aGlzLmN1cnNvciA9IG5ldyBDdXJzb3IoY2FudmFzKTtcblxuICAgIHRoaXMuY3Vyc29yRGlyID0gJyc7XG5cbiAgICB0aGlzLm11c2ljID0gbmV3IEF1ZGlvKCdhc3NldHMvc291bmRzL0N1c3AubXAzJyk7XG4gICAgdGhpcy5iZWdpbkF1ZGlvID0gbmV3IEF1ZGlvKCdhc3NldHMvc291bmRzL2JlZ2luLm1wMycpO1xuICAgIHRoaXMuZ2FtZU92ZXJBdWRpbyA9IG5ldyBBdWRpbygnYXNzZXRzL3NvdW5kcy9nYW1lX292ZXIubXAzJyk7XG5cbiAgICB0aGlzLmJlZm9yZUdhbWUodGhpcy5jdHgpO1xuICB9XG5cbiAgYmVmb3JlR2FtZShjdHgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgICBsZXQgZiA9IG5ldyBGb250RmFjZSgnU3F1YWRhIE9uZScsICd1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3NxdWFkYW9uZS92OC9CQ2FzcVo4WHNPcng0bWNPazZNdGFhYzJXUkpuRGdvLndvZmYyKScpO1xuXG4gICAgZi5sb2FkKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgucmVjdCh0aGF0LngvMiAtIDEwMCwgdGhhdC55LzIgLSAxNTAsIDIwMCwgODApO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjYzMxZTllXCI7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LmZvbnQgPSBcIjMwcHggU3F1YWRhIE9uZVwiO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgY3R4LmZpbGxUZXh0KFwiU1BBQ0UgVE8gUExBWVwiLCB0aGF0LnggLyAyIC0gODAsIHRoYXQueSAvIDIgLSAxMDApO1xuICAgIH0pO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFuaW1hdGUodGltZXN0YW1wKSwgMzAwKTtcblxuICAgIHRoaXMud2FsbHMgPSBuZXcgV2FsbHModGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5iZWdpbkF1ZGlvLnBsYXkoKTtcbiAgICB0aGlzLnBvcHVsYXRlV2FsbHMgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLndhbGxzLnBvcHVsYXRlV2FsbHMoKSwgODAwKTtcbiAgICB0aGlzLm11c2ljLmxvYWQoKTtcbiAgICB0aGlzLm11c2ljLnBsYXkoKTtcbiAgfVxuXG4gIGFuaW1hdGUodGltZXN0YW1wKSB7XG4gICAgbGV0IGRlbHRhVGltZSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWU7XG5cbiAgICB0aGlzLmRlbHRhVGltZSA9IGRlbHRhVGltZTtcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuXG4gICAgdGhpcy5zdG9wd2F0Y2guYW5pbWF0ZSh0aGlzLnN0YXJ0VGltZSk7XG4gICAgdGhpcy5zZWN0aW9ucy5hbmltYXRlKGRlbHRhVGltZSk7XG4gICAgdGhpcy5oZXhhZ29uLmFuaW1hdGUoZGVsdGFUaW1lKTtcbiAgICB0aGlzLmN1cnNvci5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICB0aGlzLndhbGxzLmFuaW1hdGUodGhpcy5jdHgpO1xuXG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIoKSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmdhbWVPdmVyQXVkaW8ucGxheSgpO1xuICAgICAgdGhpcy5tdXNpYy5wYXVzZSgpO1xuICAgICAgdGhpcy5zdG9wd2F0Y2guc3RvcCgpO1xuICAgICAgdGhpcy5oZXhhZ29uLnN0b3AoKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wb3B1bGF0ZVdhbGxzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jdXJzb3JEaXIgPT09ICdjbG9ja3dpc2UnKSB7XG4gICAgICB0aGlzLmN1cnNvci5waXZvdENsb2Nrd2lzZShkZWx0YVRpbWUsIHRoaXMuY3R4KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3Vyc29yRGlyID09PSAnY291bnRlckNsb2Nrd2lzZScpIHtcbiAgICAgIHRoaXMuY3Vyc29yLnBpdm90Q291bnRlckNsb2Nrd2lzZShkZWx0YVRpbWUsIHRoaXMuY3R4KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ydW5uaW5nID09PSB0cnVlKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgfHwgZXZlbnQua2V5Q29kZSA9PT0gNjUpIHtcbiAgICAgICAgaWYgKHRoYXQucnVubmluZykge1xuICAgICAgICAgIHRoYXQuY3Vyc29yRGlyID0gJ2NvdW50ZXJDbG9ja3dpc2UnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5IHx8IGV2ZW50LmtleUNvZGUgPT09IDY4KSB7XG4gICAgICAgIGlmICh0aGF0LnJ1bm5pbmcpIHtcbiAgICAgICAgICB0aGF0LmN1cnNvckRpciA9ICdjbG9ja3dpc2UnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgIHRoYXQucGxheSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+ICh0aGF0LmN1cnNvckRpciA9ICcnKSk7XG4gIH1cblxuICBnYW1lT3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy53YWxscy5jb2xsaWRlc1dpdGgodGhpcy5jdXJzb3IudGlwKCkpO1xuICB9XG5cbiAgZHJhd1ByZWdhbWUoKSB7XG5cbiAgfVxuXG4gIGRyYXdQb3N0Z2FtZSgpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpY2tlZEhleGFnb247IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1xuICAgIFtcIiMwMDAwMDBcIiwgXCIjMDhmYjdiXCJdLFxuICAgIFtcIiMwMDAwMDBcIiwgXCIjZWY4NzA4XCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjYzMxZTllXCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjNmI0YWNhXCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjMmI2YWVhXCJdLFxuICBdLFxuICBTSVpFOiA1MCxcbn1cblxuXG5jbGFzcyBIZXhhZ29uIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAvIDI7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG5cbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG5cbiAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICBjdHgudHJhbnNsYXRlKC10aGlzLngsIC10aGlzLnkpO1xuXG4gICAgbGV0IGhleDEgPSAwO1xuICAgIGZvciAoaGV4MTsgaGV4MSA8PSA2OyBoZXgxKyspIHtcbiAgICAgIGN0eC5saW5lVG8odGhpcy54ICsgREVGQVVMVFMuU0laRSAqIE1hdGguY29zKGhleDEgKiAyICogTWF0aC5QSSAvIDYpLCB0aGlzLnkgKyBERUZBVUxUUy5TSVpFICogTWF0aC5zaW4oaGV4MSAqIDIgKiBNYXRoLlBJIC8gNikpO1xuICAgIH1cblxuICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMV07XG4gICAgY3R4LmZpbGwoKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGxldCBoZXgyID0gMDtcbiAgICBmb3IgKGhleDI7IGhleDIgPD0gNjsgaGV4MisrKSB7XG4gICAgICBjdHgubGluZVRvKHRoaXMueCArIDQ0ICogTWF0aC5jb3MoaGV4MiAqIDIgKiBNYXRoLlBJIC8gNiksIHRoaXMueSArIDQ0ICogTWF0aC5zaW4oaGV4MiAqIDIgKiBNYXRoLlBJIC8gNikpO1xuICAgIH1cblxuICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMF07XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGFuaW1hdGUoZGVsdGFUaW1lKSB7XG4gICAgdGhpcy5hbmdsZSA9ICgyMCAvIGRlbHRhVGltZSk7XG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGV4YWdvbjsiLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXG4gICAgW1wiIzAwMDAwMFwiLCBcIiMwMjI3MTNcIl0sXG4gICAgW1wiIzAwMDAwMFwiLCBcIiMyNjE1MDFcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiNmNWRjZjBcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiNlN2UzZjdcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiNkZGU4ZmNcIl0sXG4gIF0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb25zIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5nbGUgPSAtNjA7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICBcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBsZXQgcHJldkNvb3JkO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSArIDYwO1xuICAgICAgfVxuXG4gICAgICBsZXQgeDIsIHkyLCBsZW5ndGg7XG5cbiAgICAgIC8vIGxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5zcXJ0KDMpICogdGhpcy54ICogMik7XG4gICAgICBsZW5ndGggPSAxNTAwO1xuICAgICAgeDIgPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBsZW5ndGg7XG4gICAgICB5MiA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIGxlbmd0aDtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG4gICAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gICAgICBpZiAocHJldkNvb3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3R4LmxpbmVUbyguLi5wcmV2Q29vcmQpO1xuICAgICAgfVxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdW2kgJSAyXTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1baSAlIDJdO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgcHJldkNvb3JkID0gW3gyLCB5Ml07XG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZShkZWx0YVRpbWUpIHtcbiAgICAvLyB0aGlzLmFuZ2xlICs9ICgxIC8gZGVsdGFUaW1lKTtcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9ICBcbn0iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXG4gICAgW1wiIzAwMDAwMFwiLCBcIiNmZmZmZmZcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiNlZjg3MDhcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiM2YjRhY2FcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiMyYjZhZWFcIl0sXG4gIF0sXG59XG5cbmNsYXNzIFN0b3B3YXRjaCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLnRpbWUgPSBcIjAuMDBcIjtcblxuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBzdG9wd2F0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RvcHdhdGNoXCIpO1xuICAgIHN0b3B3YXRjaFswXS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHN0b3B3YXRjaFswXS5pbm5lckhUTUwgKz0gYCR7dGhpcy50aW1lfWA7XG4gIH1cblxuICBjb3VudERlY2ltYWxzKG51bSkge1xuICAgIGlmIChNYXRoLmZsb29yKG51bSkgIT09IG51bSkge1xuICAgICAgcmV0dXJuIG51bS50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGggfHwgMDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBhbmltYXRlKHN0YXJ0VGltZSkge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy50aW1lID0gTWF0aC5yb3VuZCgoKG5vdyAtIHN0YXJ0VGltZSkgLyAxMDAwKSAqIDEwMCkgLyAxMDA7XG5cbiAgICBpZiAodGhpcy5jb3VudERlY2ltYWxzKHRoaXMudGltZSkgPT09IDApIHtcbiAgICAgIHRoaXMudGltZSA9IGAke3RoaXMudGltZX0uMDBgO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb3VudERlY2ltYWxzKHRoaXMudGltZSkgPT09IDEpIHtcbiAgICAgIHRoaXMudGltZSA9IGAke3RoaXMudGltZX0wYDtcbiAgICB9XG5cbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBsZXQgdGltZSA9IHRoaXMudGltZTtcbiAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3B3YXRjaDsiLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXG4gICAgW1wiIzA4ZmI3YlwiLCAncmdiYSgwLDAsMCwwKSddLFxuICAgIFtcIiNlZjg3MDhcIiwgJ3JnYmEoMCwwLDAsMCknXSxcbiAgICBbXCIjYzMxZTllXCIsICdyZ2JhKDAsMCwwLDApJ10sXG4gICAgW1wiIzZiNGFjYVwiLCAncmdiYSgwLDAsMCwwKSddLFxuICAgIFtcIiMyYjZhZWFcIiwgJ3JnYmEoMCwwLDAsMCknXSxcbiAgXSxcbiAgLy8gc2Vjb25kIGNvbG9yIGlzIHRyYW5zcGFyZW50XG4gIFNJWkU6IDQwLFxuICBNQVg6IDEwMDAsXG4gIC8vIGNvcnJlc3BvbmRzIHcvIHRoZSBzZWN0aW9ucycgbGVuZ3Roc1xufTtcblxuY2xhc3MgV2FsbHMge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmdsZSA9IC02MDtcbiAgICB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgPSAtNjA7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcblxuICAgIHRoaXMuY29tYm9zID0gW1xuICAgICAgW3RydWUsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlXSxcbiAgICAgIFt0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZV0sXG4gICAgICBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWVdLFxuICAgICAgW3RydWUsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlXSxcbiAgICAgIFt0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0sXG4gICAgICBbZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIHRydWVdLFxuICAgICAgW3RydWUsIGZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2VdLFxuICAgICAgW2ZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWVdLFxuICAgICAgW3RydWUsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZV0sXG4gICAgXVxuXG4gICAgdGhpcy53YWxsQ29tYm9zID0gW107XG4gIH1cblxuICBkcmF3IChjdHgsIGNvbWJvKSB7XG4gICAgbGV0IHByZXZDb29yZCwgd2FsbHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAtMTsgaSA8PSA1OyBpKyspIHtcbiAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSArIDYwO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5hbmdsZSA+PSAzNjApIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgJSAzNjA7XG4gICAgICB9XG5cbiAgICAgIGxldCB4MiwgeTIsIGF4LCBheSwgYngsIGJ5O1xuICAgICAgLy8gb3V0dGVyIHRyYXBlem9pZCBjb3JuZXJcbiAgICAgIHgyID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogREVGQVVMVFMuTUFYO1xuICAgICAgeTIgPSB0aGlzLnkgKyBNYXRoLnNpbihNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBERUZBVUxUUy5NQVg7XG5cbiAgICAgIC8vIGlubmVyIHRhcGV6b2lkIHBvaW50IG9uIGZpcnN0IGxpbmUgXG4gICAgICBieCA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIChERUZBVUxUUy5NQVggLSBERUZBVUxUUy5TSVpFKTtcbiAgICAgIGJ5ID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogKERFRkFVTFRTLk1BWCAtIERFRkFVTFRTLlNJWkUpOyBcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyhieCwgYnkpO1xuICAgICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuXG4gICAgICBpZiAocHJldkNvb3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3R4LmxpbmVUbyguLi5wcmV2Q29vcmQpO1xuXG4gICAgICAgIGF4ID0gcHJldkNvb3JkWzBdICsgTWF0aC5jb3MoTWF0aC5QSSAqICh0aGlzLmFuZ2xlICsgMTIwKSAvIDE4MCkgKiBERUZBVUxUUy5TSVpFO1xuICAgICAgICBheSA9IHByZXZDb29yZFsxXSArIE1hdGguc2luKE1hdGguUEkgKiAodGhpcy5hbmdsZSArIDEyMCkgLyAxODApICogREVGQVVMVFMuU0laRTtcblxuICAgICAgICBjdHgubGluZVRvKGF4LCBheSk7XG4gICAgICAgIGN0eC5saW5lVG8oYngsIGJ5KTtcbiAgICAgIH1cblxuICAgICAgICBpZiAoaSA9PT0gLTEgfHwgY29tYm9baV0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzFdO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMV07XG4gICAgICAgIH0gZWxzZSBpZiAoY29tYm9baV0pIHtcbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMF07XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVswXTtcbiAgICAgICAgfVxuXG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBwcmV2Q29vcmQgPSBbeDIsIHkyXTtcblxuICAgICAgbGV0IHdhbGwgPSB7XG4gICAgICAgIGxlbmd0aDogMTAwMCxcbiAgICAgICAgaXNXYWxsOiAnJyxcbiAgICAgIH07XG5cbiAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICB3YWxsLmlzV2FsbCA9ICdsaW5lJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhbGwuaXNXYWxsID0gY29tYm9baV07XG4gICAgICB9XG5cbiAgICAgIHdhbGxzLnB1c2god2FsbCk7XG4gICAgfVxuXG4gICAgdGhpcy53YWxsQ29tYm9zLnB1c2god2FsbHMpO1xuICB9XG5cbiAgY29sbGlkZXNXaXRoKGN1cnNvclBvcykge1xuICAgIGlmICh0aGlzLndhbGxDb21ib3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMud2FsbENvbWJvcy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgd2FsbHMgPSB0aGlzLndhbGxDb21ib3Nbal07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB3YWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCB3YWxsID0gd2FsbHNbaV07XG4gIFxuICAgICAgICAgIGlmICh3YWxsLmlzV2FsbCkge1xuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gY3Vyc29yUG9zO1xuICAgICAgICAgICAgY29uc3QgW2F4LCBheV0gPSB3YWxsLnBvaW50MTtcbiAgICAgICAgICAgIGNvbnN0IFtieCwgYnldID0gd2FsbC5wb2ludDI7XG4gIFxuICAgICAgICAgICAgbGV0IGxlbmd0aDEgPSB0aGlzLmdldERpc3RhbmNlKHgsIHksIGF4LCBheSk7XG4gICAgICAgICAgICBsZXQgbGVuZ3RoMiA9IHRoaXMuZ2V0RGlzdGFuY2UoeCwgeSwgYngsIGJ5KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGxlbmd0aDEgKyBsZW5ndGgyIDw9IHdhbGwubGVuZ3RoIC0gMzkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXREaXN0YW5jZShheCwgYXksIGJ4LCBieSkge1xuICAgIGNvbnN0IHggPSBheCAtIGJ4O1xuICAgIGNvbnN0IHkgPSBheSAtIGJ5O1xuXG4gICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgfVxuXG4gIHBvcHVsYXRlV2FsbHMoKSB7XG4gICAgbGV0IGNvbWJvc0lkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29tYm9zLmxlbmd0aCk7XG4gICAgbGV0IGNvbWJvID0gdGhpcy5jb21ib3NbY29tYm9zSWR4XTtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCwgY29tYm8pO1xuICB9XG5cbiAgYW5pbWF0ZShjdHgpIHtcbiAgICBpZiAodGhpcy53YWxsQ29tYm9zLmxlbmd0aCAhPT0gMCAmJiB0aGlzLndhbGxDb21ib3NbdGhpcy53YWxsQ29tYm9zLmxlbmd0aCAtIDFdLmxlbmd0aCAlIDcgPT09IDApIHtcbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndhbGxDb21ib3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHdhbGxzID0gdGhpcy53YWxsQ29tYm9zW2ldO1xuXG4gICAgICAgIGlmICh3YWxsc1swXS5sZW5ndGggPT09IDcwKSB7XG4gICAgICAgICAgdGhpcy53YWxsQ29tYm9zLnVuc2hpZnQoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcmV2Q29vcmQ7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3YWxscy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCB3YWxsID0gd2FsbHNbal07XG5cbiAgICAgICAgICBpZiAod2FsbC5pc1dhbGwgIT09ICdsaW5lJykge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlV2FsbEFuZ2xlID0gdGhpcy5hbmltYXRlV2FsbEFuZ2xlICsgNjA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSA+PSAzNjApIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSA9IHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAlIDM2MDtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGxldCB4MiwgeTIsIGF4LCBheSwgYngsIGJ5LCBuZXdMZW5ndGg7XG4gIFxuICAgICAgICAgIG5ld0xlbmd0aCA9IHdhbGwubGVuZ3RoIC0gNTtcbiAgXG4gICAgICAgICAgeDIgPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmltYXRlV2FsbEFuZ2xlIC8gMTgwKSAqIG5ld0xlbmd0aDtcbiAgICAgICAgICB5MiA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgLyAxODApICogbmV3TGVuZ3RoO1xuICBcbiAgICAgICAgICAvLyB0YXBlem9pZCBwb2ludCBvbiBmaXJzdCBsaW5lIFxuICAgICAgICAgIGJ4ID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAvIDE4MCkgKiAobmV3TGVuZ3RoIC0gREVGQVVMVFMuU0laRSk7XG4gICAgICAgICAgYnkgPSB0aGlzLnkgKyBNYXRoLnNpbihNYXRoLlBJICogdGhpcy5hbmltYXRlV2FsbEFuZ2xlIC8gMTgwKSAqIChuZXdMZW5ndGggLSBERUZBVUxUUy5TSVpFKTtcbiAgXG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGN0eC5tb3ZlVG8oYngsIGJ5KTtcbiAgICAgICAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gIFxuICAgICAgICAgIGlmIChwcmV2Q29vcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY3R4LmxpbmVUbyguLi5wcmV2Q29vcmQpO1xuICBcbiAgICAgICAgICAgIGF4ID0gcHJldkNvb3JkWzBdICsgTWF0aC5jb3MoTWF0aC5QSSAqICh0aGlzLmFuaW1hdGVXYWxsQW5nbGUgKyAxMjApIC8gMTgwKSAqIERFRkFVTFRTLlNJWkU7XG4gICAgICAgICAgICBheSA9IHByZXZDb29yZFsxXSArIE1hdGguc2luKE1hdGguUEkgKiAodGhpcy5hbmltYXRlV2FsbEFuZ2xlICsgMTIwKSAvIDE4MCkgKiBERUZBVUxUUy5TSVpFO1xuICBcbiAgICAgICAgICAgIGN0eC5saW5lVG8oYXgsIGF5KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oYngsIGJ5KTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGlmICh3YWxsLmlzV2FsbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzBdO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVswXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdhbGwuaXNXYWxsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzFdO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVsxXTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICBcbiAgICAgICAgICBwcmV2Q29vcmQgPSBbeDIsIHkyXTtcbiAgXG4gICAgICAgICAgdGhpcy53YWxsQ29tYm9zW2ldW2pdID0ge1xuICAgICAgICAgICAgbGVuZ3RoOiBuZXdMZW5ndGgsXG4gICAgICAgICAgICBpc1dhbGw6IHdhbGwuaXNXYWxsLFxuICAgICAgICAgICAgYW5nbGU6IHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSxcbiAgICAgICAgICAgIHBvaW50MTogW2F4LCBheV0sXG4gICAgICAgICAgICBwb2ludDI6IFtieCwgYnldLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYWxsczsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9