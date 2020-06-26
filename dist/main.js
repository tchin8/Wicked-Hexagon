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
    value: function tip(scale) {
      var x = this.canvas.width / 2 + Math.cos(this.angle * Math.PI / 180) * (DEFAULTS.RADIUS * scale + DEFAULTS.SIZE);
      var y = this.canvas.height / 2 + Math.sin(this.angle * Math.PI / 180) * (DEFAULTS.RADIUS * scale + DEFAULTS.SIZE);
      return [x, y];
    }
  }, {
    key: "draw",
    value: function draw(ctx, scale) {
      scale = scale || 1;
      this.cursorX = this.canvas.width / 2 + Math.cos(this.angle * Math.PI / 180) * (DEFAULTS.RADIUS * scale);
      this.cursorY = this.canvas.height / 2 + Math.sin(this.angle * Math.PI / 180) * (DEFAULTS.RADIUS * scale);
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
    value: function animate(ctx, scale) {
      this.draw(ctx, scale);
    }
  }, {
    key: "pivotClockwise",
    value: function pivotClockwise(deltaTime, ctx, scale) {
      this.angle += 150 / deltaTime;
      this.draw(ctx, scale);
    }
  }, {
    key: "pivotCounterClockwise",
    value: function pivotCounterClockwise(deltaTime, ctx, scale) {
      this.angle -= 150 / deltaTime;
      this.draw(ctx, scale);
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
    this.scale = 1;
    this.scaleDir = "";
    this.rotationDir = 1;
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
        ctx.rect(that.x / 2 - 120, that.y / 2 - 200, 240, 120);
        ctx.strokeStyle = "#c31e9e";
        ctx.stroke();
        ctx.fill();
        ctx.font = "30px Squada One";
        ctx.fillStyle = "#ffffff";
        ctx.fillText("SPACE TO PLAY", that.x / 2 - 80, that.y / 2 - 160);
        ctx.fillText("LEFT/RIGHT OR A/D", that.x / 2 - 96, that.y / 2 - 120);
        ctx.fillText("TO AVOID WALLS", that.x / 2 - 86, that.y / 2 - 90);
      });
    }
  }, {
    key: "afterGame",
    value: function afterGame() {
      var div = document.getElementsByClassName('game-over');
      div[0].classList.remove('hidden');
    }
  }, {
    key: "play",
    value: function play() {
      var _this = this;

      var div = document.getElementsByClassName('game-over');
      div[0].classList.add('hidden');
      this.running = true;
      var timestamp = new Date();
      this.lastTime = 0;
      setTimeout(function () {
        return _this.animate(timestamp);
      }, 300);
      this.walls = new _walls__WEBPACK_IMPORTED_MODULE_4__["default"](this.canvas);
      this.beginAudio.play();
      this.populateWalls = setInterval(function () {
        return _this.walls.populateWalls();
      }, 800);
      setTimeout(function () {
        _this.startTime = new Date();
      }, 400);
      var rand = Math.floor(Math.random() * 10) + 1;
      this.rotationTimeout = setTimeout(function () {
        _this.rotationInterval = setInterval(function () {
          return _this.updateRotation();
        }, rand * 500);
      }, 10000);
      this.music.load();
      this.music.play();
    }
  }, {
    key: "updateRotation",
    value: function updateRotation() {
      if (this.rotationDir === 1) {
        this.rotationDir = -1;
      } else {
        this.rotationDir = 1;
      }
    }
  }, {
    key: "updateScale",
    value: function updateScale() {
      if (this.scale <= 1) {
        this.scaleDir = "increasing";
      } else if (this.scale >= 1.5) {
        this.scaleDir = "decreasing";
      }

      if (this.scaleDir === "increasing") {
        this.scale += 0.04;
      } else if (this.scaleDir === "decreasing") {
        this.scale -= 0.04;
      }
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
    value: function animate(timestamp) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      var deltaTime = timestamp - this.lastTime;
      this.deltaTime = deltaTime;
      this.lastTime = timestamp;

      if (this.startTime) {
        var now = new Date();
        this.time = Math.round((now - this.startTime) / 1000 * 100) / 100;

        if (this.countDecimals(this.time) === 0) {
          this.time = "".concat(this.time, ".00");
        } else if (this.countDecimals(this.time) === 1) {
          this.time = "".concat(this.time, "0");
        }

        this.stopwatch.animate(this.time);
      }

      this.sections.animate(deltaTime);
      this.hexagon.animate(deltaTime, this.scale, this.rotationDir);
      this.cursor.animate(this.ctx, this.scale);
      this.walls.animate(this.ctx, this.scale);

      if (this.cursorDir === 'clockwise') {
        this.cursor.pivotClockwise(deltaTime, this.ctx, this.scale);
      } else if (this.cursorDir === 'counterClockwise') {
        this.cursor.pivotCounterClockwise(deltaTime, this.ctx, this.scale);
      }

      if (this.gameOver() === true) {
        this.running = false;
        this.gameOverAudio.play();
        this.music.pause();
        this.stopwatch.stop();
        this.hexagon.stop();
        clearInterval(this.populateWalls);
        clearInterval(this.rotationInterval);
        clearTimeout(this.rotationTimeout);
        this.afterGame();
      }

      if (this.time && this.time > 41) {
        this.updateScale();
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
      return this.walls.collidesWith(this.cursor.tip(this.scale), this.scale);
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
    value: function draw(ctx, scale) {
      scale = scale || 1;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle * Math.PI / 180);
      ctx.translate(-this.x, -this.y);
      var hex1 = 0;

      for (hex1; hex1 <= 6; hex1++) {
        ctx.lineTo(this.x + DEFAULTS.SIZE * scale * Math.cos(hex1 * 2 * Math.PI / 6), this.y + DEFAULTS.SIZE * scale * Math.sin(hex1 * 2 * Math.PI / 6));
      }

      ctx.fillStyle = DEFAULTS.COLORS[2][1];
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      var hex2 = 0;

      for (hex2; hex2 <= 6; hex2++) {
        ctx.lineTo(this.x + 44 * scale * Math.cos(hex2 * 2 * Math.PI / 6), this.y + 44 * scale * Math.sin(hex2 * 2 * Math.PI / 6));
      }

      ctx.fillStyle = DEFAULTS.COLORS[2][0];
      ctx.fill();
    }
  }, {
    key: "animate",
    value: function animate(deltaTime, scale, rotationDir) {
      this.angle = 20 / deltaTime * rotationDir;
      this.draw(this.ctx, scale);
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
    key: "animate",
    value: function animate(time) {
      this.time = time;
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

        ctx.closePath();
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
    value: function collidesWith(cursorPos, scale) {
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

              if (length1 + length2 <= wall.length * scale - 39) {
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
    value: function animate(ctx, scale) {
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
            x2 = this.x + Math.cos(Math.PI * this.animateWallAngle / 180) * (newLength * scale);
            y2 = this.y + Math.sin(Math.PI * this.animateWallAngle / 180) * (newLength * scale); // tapezoid point on first line 

            bx = this.x + Math.cos(Math.PI * this.animateWallAngle / 180) * (newLength * scale - DEFAULTS.SIZE);
            by = this.y + Math.sin(Math.PI * this.animateWallAngle / 180) * (newLength * scale - DEFAULTS.SIZE);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJXaWNrZWRIZXhhZ29uIiwiREVGQVVMVFMiLCJDT0xPUlMiLCJSQURJVVMiLCJTSVpFIiwiQ3Vyc29yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImFuZ2xlIiwicm90YXRlQW5nbGUiLCJ4IiwieSIsImRyYXciLCJzY2FsZSIsIk1hdGgiLCJjb3MiLCJQSSIsInNpbiIsImN1cnNvclgiLCJjdXJzb3JZIiwidHJhbnNsYXRlIiwicm90YXRlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiZmlsbFN0eWxlIiwiZmlsbCIsImRlbHRhVGltZSIsImRpbWVuc2lvbnMiLCJydW5uaW5nIiwic2NhbGVEaXIiLCJyb3RhdGlvbkRpciIsInJlZ2lzdGVyRXZlbnRzIiwic2VjdGlvbnMiLCJTZWN0aW9ucyIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInN0b3B3YXRjaCIsIlN0b3B3YXRjaCIsImhleGFnb24iLCJIZXhhZ29uIiwiY3Vyc29yIiwiY3Vyc29yRGlyIiwibXVzaWMiLCJBdWRpbyIsImJlZ2luQXVkaW8iLCJnYW1lT3ZlckF1ZGlvIiwiYmVmb3JlR2FtZSIsInRoYXQiLCJmIiwiRm9udEZhY2UiLCJsb2FkIiwidGhlbiIsInJlY3QiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImZvbnQiLCJmaWxsVGV4dCIsImRpdiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibGFzdFRpbWUiLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZSIsIndhbGxzIiwiV2FsbHMiLCJwbGF5IiwicG9wdWxhdGVXYWxscyIsInNldEludGVydmFsIiwic3RhcnRUaW1lIiwicmFuZCIsImZsb29yIiwicmFuZG9tIiwicm90YXRpb25UaW1lb3V0Iiwicm90YXRpb25JbnRlcnZhbCIsInVwZGF0ZVJvdGF0aW9uIiwibnVtIiwidG9TdHJpbmciLCJzcGxpdCIsImxlbmd0aCIsImNsZWFyUmVjdCIsIm5vdyIsInRpbWUiLCJyb3VuZCIsImNvdW50RGVjaW1hbHMiLCJwaXZvdENsb2Nrd2lzZSIsInBpdm90Q291bnRlckNsb2Nrd2lzZSIsImdhbWVPdmVyIiwicGF1c2UiLCJzdG9wIiwiY2xlYXJJbnRlcnZhbCIsImNsZWFyVGltZW91dCIsImFmdGVyR2FtZSIsInVwZGF0ZVNjYWxlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsImV2ZW50Iiwia2V5Q29kZSIsImNvbGxpZGVzV2l0aCIsInRpcCIsImhleDEiLCJoZXgyIiwicHJldkNvb3JkIiwiaSIsIngyIiwieTIiLCJ1bmRlZmluZWQiLCJpbm5lckhUTUwiLCJNQVgiLCJhbmltYXRlV2FsbEFuZ2xlIiwiY29tYm9zIiwid2FsbENvbWJvcyIsImNvbWJvIiwiYXgiLCJheSIsImJ4IiwiYnkiLCJjbG9zZVBhdGgiLCJ3YWxsIiwiaXNXYWxsIiwicHVzaCIsImN1cnNvclBvcyIsImoiLCJwb2ludDEiLCJwb2ludDIiLCJsZW5ndGgxIiwiZ2V0RGlzdGFuY2UiLCJsZW5ndGgyIiwic3FydCIsImNvbWJvc0lkeCIsInVuc2hpZnQiLCJuZXdMZW5ndGgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7Q0FDQTs7QUFFQTtBQUlBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3hELE1BQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUFqQjtBQUNBRCxVQUFRLENBQUNFLE1BQVQsR0FBa0JDLE1BQU0sQ0FBQ0MsV0FBekI7QUFDQUosVUFBUSxDQUFDSyxLQUFULEdBQWlCRixNQUFNLENBQUNHLFVBQXhCO0FBRUEsTUFBSUMscURBQUosQ0FBa0JQLFFBQWxCO0FBQ0QsQ0FORCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLElBQU1RLFFBQVEsR0FBRztBQUNmQyxR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RCxRQUFRLENBQUNDLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBbEI7QUFDQUssaUJBQUcsQ0FBQ21CLFNBQUosR0FBZ0J6QixRQUFRLENBQUNDLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBaEI7QUFDRDs7QUFFREssZUFBRyxDQUFDb0IsSUFBSjtBQUNBcEIsZUFBRyxDQUFDZ0QsTUFBSjtBQUVBbUQscUJBQVMsR0FBRyxDQUFDRSxFQUFELEVBQUtDLEVBQUwsQ0FBWjtBQUVBLGlCQUFLTSxVQUFMLENBQWdCUixDQUFoQixFQUFtQm1CLENBQW5CLElBQXdCO0FBQ3RCM0Msb0JBQU0sRUFBRW9ELFNBRGM7QUFFdEJaLG9CQUFNLEVBQUVELElBQUksQ0FBQ0MsTUFGUztBQUd0QmxILG1CQUFLLEVBQUUsS0FBS3dHLGdCQUhVO0FBSXRCYyxvQkFBTSxFQUFFLENBQUNWLEVBQUQsRUFBS0MsRUFBTCxDQUpjO0FBS3RCVSxvQkFBTSxFQUFFLENBQUNULEVBQUQsRUFBS0MsRUFBTDtBQUxjLGFBQXhCO0FBT0Q7QUFDRjtBQUNGO0FBQ0Y7Ozs7OztBQUdZbkQsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUM1TkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFdpY2tlZEhleGFnb24gZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuLy8gaW1wb3J0IFdpY2tlZEhleGFnb24gZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICBjYW52YXNFbC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIGNhbnZhc0VsLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgbmV3IFdpY2tlZEhleGFnb24oY2FudmFzRWwpO1xufSk7XG4iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXG4gICAgXCIjMDhmYjdiXCIsXG4gICAgXCIjZWY4NzA4XCIsXG4gICAgXCIjYzMxZTllXCIsXG4gICAgXCIjNmI0YWNhXCIsXG4gICAgXCIjMmI2YWVhXCIsXG4gIF0sXG4gIFJBRElVUzogNjAsXG4gIFNJWkU6IDUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJzb3Ige1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmdsZSA9IDMzMDtcbiAgICB0aGlzLnJvdGF0ZUFuZ2xlID0gMDtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIHRpcChzY2FsZSkge1xuICAgIGxldCB4ID0gKHRoaXMuY2FudmFzLndpZHRoIC8gMikgKyAoTWF0aC5jb3ModGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApICogKChERUZBVUxUUy5SQURJVVMgKiBzY2FsZSkgKyBERUZBVUxUUy5TSVpFKSk7XG4gICAgbGV0IHkgPSAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMikgKyAoTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApICogKChERUZBVUxUUy5SQURJVVMgKiBzY2FsZSkgKyBERUZBVUxUUy5TSVpFKSk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfVxuXG4gIGRyYXcoY3R4LCBzY2FsZSkge1xuICAgIHNjYWxlID0gc2NhbGUgfHwgMTtcblxuICAgIHRoaXMuY3Vyc29yWCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpICsgKE1hdGguY29zKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSAqIChERUZBVUxUUy5SQURJVVMgKiBzY2FsZSkpO1xuICAgIHRoaXMuY3Vyc29yWSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSArIChNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiAoREVGQVVMVFMuUkFESVVTICogc2NhbGUpKTtcblxuICAgIGN0eC50cmFuc2xhdGUodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgIGN0eC5yb3RhdGUodGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGN0eC50cmFuc2xhdGUoLXRoaXMuY3Vyc29yWCwgLXRoaXMuY3Vyc29yWSk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLmN1cnNvclggLSBERUZBVUxUUy5TSVpFLCB0aGlzLmN1cnNvclkgLSBERUZBVUxUUy5TSVpFKTtcbiAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCArIERFRkFVTFRTLlNJWkUsIHRoaXMuY3Vyc29yWSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclggLSBERUZBVUxUUy5TSVpFLCB0aGlzLmN1cnNvclkgKyBERUZBVUxUUy5TSVpFKTtcbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjdHgudHJhbnNsYXRlKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICBjdHgucm90YXRlKC10aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy5jdXJzb3JYLCAtdGhpcy5jdXJzb3JZKTtcbiAgfVxuXG4gIGFuaW1hdGUoY3R4LCBzY2FsZSkge1xuICAgIHRoaXMuZHJhdyhjdHgsIHNjYWxlKTtcbiAgfVxuXG4gIHBpdm90Q2xvY2t3aXNlKGRlbHRhVGltZSwgY3R4LCBzY2FsZSkge1xuICAgIHRoaXMuYW5nbGUgKz0gKDE1MCAvIGRlbHRhVGltZSk7XG4gICAgdGhpcy5kcmF3KGN0eCwgc2NhbGUpO1xuICB9XG5cbiAgcGl2b3RDb3VudGVyQ2xvY2t3aXNlKGRlbHRhVGltZSwgY3R4LCBzY2FsZSkge1xuICAgIHRoaXMuYW5nbGUgLT0gKDE1MCAvIGRlbHRhVGltZSk7XG4gICAgdGhpcy5kcmF3KGN0eCwgc2NhbGUpO1xuICB9XG59IiwiaW1wb3J0IFN0b3B3YXRjaCBmcm9tICcuL3N0b3B3YXRjaCc7XG5pbXBvcnQgSGV4YWdvbiBmcm9tICcuL2hleGFnb24nO1xuaW1wb3J0IEN1cnNvciBmcm9tICcuL2N1cnNvcic7XG5pbXBvcnQgU2VjdGlvbnMgZnJvbSAnLi9zZWN0aW9ucyc7XG5pbXBvcnQgV2FsbHMgZnJvbSAnLi93YWxscyc7XG4vLyBpbXBvcnQgdGhlIG90aGVyIHNjcmlwdHNcblxuY29uc3QgQ09MT1JTID0gW1xuICAvLyBiYXNlLCBzZWN0aW9ucywgY3Vyc29yL3dhbGxzICAgfiAvLyBibGFjayB0byBjb2xvciAvLyB3aGl0ZSB0byBjb2xvclxuICBbXCIjMDAwMDAwXCIsIFwiIzAyMjcxM1wiLCBcIiMwOGZiN2JcIl0sICAgIC8vIGJsYWNrL2dyZWVuXG4gIFtcIiMwMDAwMDBcIiwgXCIjMjYxNTAxXCIsIFwiI2VmODcwOFwiXSwgICAgLy8gYmxhY2svb3JhbmdlXG4gIFtcIiNmZmZmZmZcIiwgXCIjZjVkY2YwXCIsIFwiI2MzMWU5ZVwiXSwgICAgLy8gd2hpdGUvcGlua1xuICBbXCIjZmZmZmZmXCIsIFwiI2U3ZTNmN1wiLCBcIiM2YjRhY2FcIl0sICAgIC8vIHdoaXRlL3B1cnBsZVxuICBbXCIjZmZmZmZmXCIsIFwiI2RkZThmY1wiLCBcIiMyYjZhZWFcIl0sICAgIC8vIHdoaXRlL2JsdWVcbl1cblxuY2xhc3MgV2lja2VkSGV4YWdvbiB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aDtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0O1xuICAgIHRoaXMuc2NhbGUgPSAxO1xuICAgIHRoaXMuc2NhbGVEaXIgPSBcIlwiO1xuICAgIHRoaXMucm90YXRpb25EaXIgPSAxO1xuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuXG4gICAgdGhpcy5zZWN0aW9ucyA9IG5ldyBTZWN0aW9ucyhjYW52YXMpO1xuICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgdGhpcy5zdG9wd2F0Y2ggPSBuZXcgU3RvcHdhdGNoKGNhbnZhcyk7XG4gICAgdGhpcy5oZXhhZ29uID0gbmV3IEhleGFnb24oY2FudmFzKTtcbiAgICB0aGlzLmN1cnNvciA9IG5ldyBDdXJzb3IoY2FudmFzKTtcblxuICAgIHRoaXMuY3Vyc29yRGlyID0gJyc7XG5cbiAgICB0aGlzLm11c2ljID0gbmV3IEF1ZGlvKCdhc3NldHMvc291bmRzL0N1c3AubXAzJyk7XG4gICAgdGhpcy5iZWdpbkF1ZGlvID0gbmV3IEF1ZGlvKCdhc3NldHMvc291bmRzL2JlZ2luLm1wMycpO1xuICAgIHRoaXMuZ2FtZU92ZXJBdWRpbyA9IG5ldyBBdWRpbygnYXNzZXRzL3NvdW5kcy9nYW1lX292ZXIubXAzJyk7XG5cbiAgICB0aGlzLmJlZm9yZUdhbWUodGhpcy5jdHgpO1xuICB9XG5cbiAgYmVmb3JlR2FtZShjdHgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgICBsZXQgZiA9IG5ldyBGb250RmFjZSgnU3F1YWRhIE9uZScsICd1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3NxdWFkYW9uZS92OC9CQ2FzcVo4WHNPcng0bWNPazZNdGFhYzJXUkpuRGdvLndvZmYyKScpO1xuXG4gICAgZi5sb2FkKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgucmVjdCh0aGF0LngvMiAtIDEyMCwgdGhhdC55LzIgLSAyMDAsIDI0MCwgMTIwKTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiI2MzMWU5ZVwiO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5mb250ID0gXCIzMHB4IFNxdWFkYSBPbmVcIjtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgIGN0eC5maWxsVGV4dChcIlNQQUNFIFRPIFBMQVlcIiwgdGhhdC54IC8gMiAtIDgwLCB0aGF0LnkgLyAyIC0gMTYwKTtcbiAgICAgIGN0eC5maWxsVGV4dChcIkxFRlQvUklHSFQgT1IgQS9EXCIsIHRoYXQueCAvIDIgLSA5NiwgdGhhdC55IC8gMiAtIDEyMCk7XG4gICAgICBjdHguZmlsbFRleHQoXCJUTyBBVk9JRCBXQUxMU1wiLCB0aGF0LnggLyAyIC0gODYsIHRoYXQueSAvIDIgLSA5MCk7XG4gICAgfSk7XG4gIH1cblxuICBhZnRlckdhbWUoKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dhbWUtb3ZlcicpO1xuICAgIGRpdlswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dhbWUtb3ZlcicpO1xuICAgIGRpdlswXS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgbGV0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKClcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hbmltYXRlKHRpbWVzdGFtcCksIDMwMCk7XG5cblxuICAgIHRoaXMud2FsbHMgPSBuZXcgV2FsbHModGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5iZWdpbkF1ZGlvLnBsYXkoKTtcbiAgICB0aGlzLnBvcHVsYXRlV2FsbHMgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLndhbGxzLnBvcHVsYXRlV2FsbHMoKSwgODAwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIH0sIDQwMCk7XG5cbiAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG5cbiAgICB0aGlzLnJvdGF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yb3RhdGlvbkludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGVSb3RhdGlvbigpLCByYW5kICogNTAwKTtcbiAgICB9LCAxMDAwMClcblxuICAgIHRoaXMubXVzaWMubG9hZCgpO1xuICAgIHRoaXMubXVzaWMucGxheSgpO1xuICB9XG5cbiAgdXBkYXRlUm90YXRpb24oKSB7XG4gICAgaWYgKHRoaXMucm90YXRpb25EaXIgPT09IDEpIHtcbiAgICAgIHRoaXMucm90YXRpb25EaXIgPSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3RhdGlvbkRpciA9IDE7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU2NhbGUoKSB7XG4gICAgaWYgKHRoaXMuc2NhbGUgPD0gMSkge1xuICAgICAgdGhpcy5zY2FsZURpciA9IFwiaW5jcmVhc2luZ1wiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY2FsZSA+PSAxLjUpIHtcbiAgICAgIHRoaXMuc2NhbGVEaXIgPSBcImRlY3JlYXNpbmdcIjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY2FsZURpciA9PT0gXCJpbmNyZWFzaW5nXCIpIHtcbiAgICAgIHRoaXMuc2NhbGUgKz0gMC4wNDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NhbGVEaXIgPT09IFwiZGVjcmVhc2luZ1wiKSB7XG4gICAgICB0aGlzLnNjYWxlIC09IDAuMDQ7XG4gICAgfVxuICB9XG5cbiAgY291bnREZWNpbWFscyhudW0pIHtcbiAgICBpZiAoTWF0aC5mbG9vcihudW0pICE9PSBudW0pIHtcbiAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoIHx8IDA7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgYW5pbWF0ZSh0aW1lc3RhbXApIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgbGV0IGRlbHRhVGltZSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWU7XG5cbiAgICB0aGlzLmRlbHRhVGltZSA9IGRlbHRhVGltZTtcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuXG4gICAgaWYgKHRoaXMuc3RhcnRUaW1lKSB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgdGhpcy50aW1lID0gTWF0aC5yb3VuZCgoKG5vdyAtIHRoaXMuc3RhcnRUaW1lKSAvIDEwMDApICogMTAwKSAvIDEwMDtcbiAgXG4gICAgICBpZiAodGhpcy5jb3VudERlY2ltYWxzKHRoaXMudGltZSkgPT09IDApIHtcbiAgICAgICAgdGhpcy50aW1lID0gYCR7dGhpcy50aW1lfS4wMGA7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY291bnREZWNpbWFscyh0aGlzLnRpbWUpID09PSAxKSB7XG4gICAgICAgIHRoaXMudGltZSA9IGAke3RoaXMudGltZX0wYDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdG9wd2F0Y2guYW5pbWF0ZSh0aGlzLnRpbWUpO1xuICAgIH1cblxuICAgIHRoaXMuc2VjdGlvbnMuYW5pbWF0ZShkZWx0YVRpbWUpO1xuICAgIHRoaXMuaGV4YWdvbi5hbmltYXRlKGRlbHRhVGltZSwgdGhpcy5zY2FsZSwgdGhpcy5yb3RhdGlvbkRpcik7XG4gICAgdGhpcy5jdXJzb3IuYW5pbWF0ZSh0aGlzLmN0eCwgdGhpcy5zY2FsZSk7XG4gICAgdGhpcy53YWxscy5hbmltYXRlKHRoaXMuY3R4LCB0aGlzLnNjYWxlKTtcblxuICAgIFxuICAgIGlmICh0aGlzLmN1cnNvckRpciA9PT0gJ2Nsb2Nrd2lzZScpIHtcbiAgICAgIHRoaXMuY3Vyc29yLnBpdm90Q2xvY2t3aXNlKGRlbHRhVGltZSwgdGhpcy5jdHgsIHRoaXMuc2NhbGUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJzb3JEaXIgPT09ICdjb3VudGVyQ2xvY2t3aXNlJykge1xuICAgICAgdGhpcy5jdXJzb3IucGl2b3RDb3VudGVyQ2xvY2t3aXNlKGRlbHRhVGltZSwgdGhpcy5jdHgsIHRoaXMuc2NhbGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmdhbWVPdmVyKCkgPT09IHRydWUpIHtcbiAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5nYW1lT3ZlckF1ZGlvLnBsYXkoKTtcbiAgICAgIHRoaXMubXVzaWMucGF1c2UoKTtcbiAgICAgIHRoaXMuc3RvcHdhdGNoLnN0b3AoKTtcbiAgICAgIHRoaXMuaGV4YWdvbi5zdG9wKCk7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMucG9wdWxhdGVXYWxscyk7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMucm90YXRpb25JbnRlcnZhbCk7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5yb3RhdGlvblRpbWVvdXQpO1xuICAgICAgdGhpcy5hZnRlckdhbWUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50aW1lICYmIHRoaXMudGltZSA+IDQxKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNjYWxlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucnVubmluZyA9PT0gdHJ1ZSkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3RlckV2ZW50cygpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3IHx8IGV2ZW50LmtleUNvZGUgPT09IDY1KSB7XG4gICAgICAgIGlmICh0aGF0LnJ1bm5pbmcpIHtcbiAgICAgICAgICB0aGF0LmN1cnNvckRpciA9ICdjb3VudGVyQ2xvY2t3aXNlJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSB8fCBldmVudC5rZXlDb2RlID09PSA2OCkge1xuICAgICAgICBpZiAodGhhdC5ydW5uaW5nKSB7XG4gICAgICAgICAgdGhhdC5jdXJzb3JEaXIgPSAnY2xvY2t3aXNlJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICB0aGF0LnBsYXkoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiAodGhhdC5jdXJzb3JEaXIgPSAnJykpO1xuICB9XG5cbiAgZ2FtZU92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMud2FsbHMuY29sbGlkZXNXaXRoKHRoaXMuY3Vyc29yLnRpcCh0aGlzLnNjYWxlKSwgdGhpcy5zY2FsZSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBXaWNrZWRIZXhhZ29uOyIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcbiAgICBbXCIjMDAwMDAwXCIsIFwiIzA4ZmI3YlwiXSxcbiAgICBbXCIjMDAwMDAwXCIsIFwiI2VmODcwOFwiXSxcbiAgICBbXCIjZmZmZmZmXCIsIFwiI2MzMWU5ZVwiXSxcbiAgICBbXCIjZmZmZmZmXCIsIFwiIzZiNGFjYVwiXSxcbiAgICBbXCIjZmZmZmZmXCIsIFwiIzJiNmFlYVwiXSxcbiAgXSxcbiAgU0laRTogNTAsXG59XG5cblxuY2xhc3MgSGV4YWdvbiB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIGRyYXcoY3R4LCBzY2FsZSkge1xuICAgIHNjYWxlID0gc2NhbGUgfHwgMTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG5cbiAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICBjdHgudHJhbnNsYXRlKC10aGlzLngsIC10aGlzLnkpO1xuXG4gICAgbGV0IGhleDEgPSAwO1xuICAgIGZvciAoaGV4MTsgaGV4MSA8PSA2OyBoZXgxKyspIHtcbiAgICAgIGN0eC5saW5lVG8odGhpcy54ICsgKERFRkFVTFRTLlNJWkUgKiBzY2FsZSkgKiBNYXRoLmNvcyhoZXgxICogMiAqIE1hdGguUEkgLyA2KSwgdGhpcy55ICsgKERFRkFVTFRTLlNJWkUgKiBzY2FsZSkgKiBNYXRoLnNpbihoZXgxICogMiAqIE1hdGguUEkgLyA2KSk7XG4gICAgfVxuXG4gICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVsxXTtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuXG4gICAgbGV0IGhleDIgPSAwO1xuICAgIGZvciAoaGV4MjsgaGV4MiA8PSA2OyBoZXgyKyspIHtcbiAgICAgIGN0eC5saW5lVG8odGhpcy54ICsgKDQ0ICogc2NhbGUpICogTWF0aC5jb3MoaGV4MiAqIDIgKiBNYXRoLlBJIC8gNiksIHRoaXMueSArICg0NCAqIHNjYWxlKSAqIE1hdGguc2luKGhleDIgKiAyICogTWF0aC5QSSAvIDYpKTtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzBdO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBhbmltYXRlKGRlbHRhVGltZSwgc2NhbGUsIHJvdGF0aW9uRGlyKSB7XG4gICAgdGhpcy5hbmdsZSA9IDIwIC8gZGVsdGFUaW1lICogcm90YXRpb25EaXI7XG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4LCBzY2FsZSk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhleGFnb247IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1xuICAgIFtcIiMwMDAwMDBcIiwgXCIjMDIyNzEzXCJdLFxuICAgIFtcIiMwMDAwMDBcIiwgXCIjMjYxNTAxXCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjZjVkY2YwXCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjZTdlM2Y3XCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjZGRlOGZjXCJdLFxuICBdLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmFuZ2xlID0gLTYwO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAvIDI7XG4gICAgXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgbGV0IHByZXZDb29yZDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDY7IGkrKykge1xuICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyA2MDtcbiAgICAgIH1cblxuICAgICAgbGV0IHgyLCB5MiwgbGVuZ3RoO1xuXG4gICAgICAvLyBsZW5ndGggPSBNYXRoLmZsb29yKE1hdGguc3FydCgzKSAqIHRoaXMueCAqIDIpO1xuICAgICAgbGVuZ3RoID0gMTUwMDtcbiAgICAgIHgyID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogbGVuZ3RoO1xuICAgICAgeTIgPSB0aGlzLnkgKyBNYXRoLnNpbihNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBsZW5ndGg7XG5cbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuICAgICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgICAgaWYgKHByZXZDb29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN0eC5saW5lVG8oLi4ucHJldkNvb3JkKTtcbiAgICAgIH1cbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVtpICUgMl07XG4gICAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdW2kgJSAyXTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIHByZXZDb29yZCA9IFt4MiwgeTJdO1xuICAgIH1cbiAgfVxuXG4gIGFuaW1hdGUoZGVsdGFUaW1lKSB7XG4gICAgLy8gdGhpcy5hbmdsZSArPSAoMSAvIGRlbHRhVGltZSk7XG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfSAgXG59IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1xuICAgIFtcIiMwMDAwMDBcIiwgXCIjZmZmZmZmXCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjZWY4NzA4XCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjNmI0YWNhXCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjMmI2YWVhXCJdLFxuICBdLFxufVxuXG5jbGFzcyBTdG9wd2F0Y2gge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy50aW1lID0gXCIwLjAwXCI7XG5cbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3Qgc3RvcHdhdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0b3B3YXRjaFwiKTtcbiAgICBzdG9wd2F0Y2hbMF0uaW5uZXJIVE1MID0gXCJcIjtcbiAgICBzdG9wd2F0Y2hbMF0uaW5uZXJIVE1MICs9IGAke3RoaXMudGltZX1gO1xuICB9XG5cbiAgYW5pbWF0ZSh0aW1lKSB7XG4gICAgdGhpcy50aW1lID0gdGltZTtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGxldCB0aW1lID0gdGhpcy50aW1lO1xuICAgIHRoaXMudGltZSA9IHRpbWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcHdhdGNoOyIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcbiAgICBbXCIjMDhmYjdiXCIsICdyZ2JhKDAsMCwwLDApJ10sXG4gICAgW1wiI2VmODcwOFwiLCAncmdiYSgwLDAsMCwwKSddLFxuICAgIFtcIiNjMzFlOWVcIiwgJ3JnYmEoMCwwLDAsMCknXSxcbiAgICBbXCIjNmI0YWNhXCIsICdyZ2JhKDAsMCwwLDApJ10sXG4gICAgW1wiIzJiNmFlYVwiLCAncmdiYSgwLDAsMCwwKSddLFxuICBdLFxuICAvLyBzZWNvbmQgY29sb3IgaXMgdHJhbnNwYXJlbnRcbiAgU0laRTogNDAsXG4gIE1BWDogMTAwMCxcbiAgLy8gY29ycmVzcG9uZHMgdy8gdGhlIHNlY3Rpb25zJyBsZW5ndGhzXG59O1xuXG5jbGFzcyBXYWxscyB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmFuZ2xlID0gLTYwO1xuICAgIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSA9IC02MDtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuXG4gICAgdGhpcy5jb21ib3MgPSBbXG4gICAgICBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2VdLFxuICAgICAgW3RydWUsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlLCB0cnVlXSxcbiAgICAgIFt0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZV0sXG4gICAgICBbdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWUsIHRydWVdLFxuICAgICAgW3RydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlXSxcbiAgICAgIFtmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0sXG4gICAgICBbdHJ1ZSwgZmFsc2UsIHRydWUsIGZhbHNlLCB0cnVlLCBmYWxzZV0sXG4gICAgICBbZmFsc2UsIHRydWUsIGZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZV0sXG4gICAgICBbdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWUsIGZhbHNlXSxcbiAgICBdXG5cbiAgICB0aGlzLndhbGxDb21ib3MgPSBbXTtcbiAgfVxuXG4gIGRyYXcgKGN0eCwgY29tYm8pIHtcbiAgICBsZXQgcHJldkNvb3JkLCB3YWxscyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IC0xOyBpIDw9IDU7IGkrKykge1xuICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICsgNjA7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmFuZ2xlID49IDM2MCkge1xuICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSAlIDM2MDtcbiAgICAgIH1cblxuICAgICAgbGV0IHgyLCB5MiwgYXgsIGF5LCBieCwgYnk7XG4gICAgICAvLyBvdXR0ZXIgdHJhcGV6b2lkIGNvcm5lclxuICAgICAgeDIgPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBERUZBVUxUUy5NQVg7XG4gICAgICB5MiA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIERFRkFVTFRTLk1BWDtcblxuICAgICAgLy8gaW5uZXIgdGFwZXpvaWQgcG9pbnQgb24gZmlyc3QgbGluZSBcbiAgICAgIGJ4ID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogKERFRkFVTFRTLk1BWCAtIERFRkFVTFRTLlNJWkUpO1xuICAgICAgYnkgPSB0aGlzLnkgKyBNYXRoLnNpbihNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiAoREVGQVVMVFMuTUFYIC0gREVGQVVMVFMuU0laRSk7IFxuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKGJ4LCBieSk7XG4gICAgICBjdHgubGluZVRvKHgyLCB5Mik7XG5cbiAgICAgIGlmIChwcmV2Q29vcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdHgubGluZVRvKC4uLnByZXZDb29yZCk7XG5cbiAgICAgICAgYXggPSBwcmV2Q29vcmRbMF0gKyBNYXRoLmNvcyhNYXRoLlBJICogKHRoaXMuYW5nbGUgKyAxMjApIC8gMTgwKSAqIERFRkFVTFRTLlNJWkU7XG4gICAgICAgIGF5ID0gcHJldkNvb3JkWzFdICsgTWF0aC5zaW4oTWF0aC5QSSAqICh0aGlzLmFuZ2xlICsgMTIwKSAvIDE4MCkgKiBERUZBVUxUUy5TSVpFO1xuXG4gICAgICAgIGN0eC5saW5lVG8oYXgsIGF5KTtcbiAgICAgICAgY3R4LmxpbmVUbyhieCwgYnkpO1xuICAgICAgfVxuXG4gICAgICAgIGlmIChpID09PSAtMSB8fCBjb21ib1tpXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMV07XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVsxXTtcbiAgICAgICAgfSBlbHNlIGlmIChjb21ib1tpXSkge1xuICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVswXTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzBdO1xuICAgICAgICB9XG5cbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIHByZXZDb29yZCA9IFt4MiwgeTJdO1xuXG4gICAgICBsZXQgd2FsbCA9IHtcbiAgICAgICAgbGVuZ3RoOiAxMDAwLFxuICAgICAgICBpc1dhbGw6ICcnLFxuICAgICAgfTtcblxuICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgIHdhbGwuaXNXYWxsID0gJ2xpbmUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FsbC5pc1dhbGwgPSBjb21ib1tpXTtcbiAgICAgIH1cblxuICAgICAgd2FsbHMucHVzaCh3YWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLndhbGxDb21ib3MucHVzaCh3YWxscyk7XG4gIH1cblxuICBjb2xsaWRlc1dpdGgoY3Vyc29yUG9zLCBzY2FsZSkge1xuICAgIGlmICh0aGlzLndhbGxDb21ib3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMud2FsbENvbWJvcy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgd2FsbHMgPSB0aGlzLndhbGxDb21ib3Nbal07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB3YWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCB3YWxsID0gd2FsbHNbaV07XG4gIFxuICAgICAgICAgIGlmICh3YWxsLmlzV2FsbCkge1xuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gY3Vyc29yUG9zO1xuICAgICAgICAgICAgY29uc3QgW2F4LCBheV0gPSB3YWxsLnBvaW50MTtcbiAgICAgICAgICAgIGNvbnN0IFtieCwgYnldID0gd2FsbC5wb2ludDI7XG4gIFxuICAgICAgICAgICAgbGV0IGxlbmd0aDEgPSB0aGlzLmdldERpc3RhbmNlKHgsIHksIGF4LCBheSk7XG4gICAgICAgICAgICBsZXQgbGVuZ3RoMiA9IHRoaXMuZ2V0RGlzdGFuY2UoeCwgeSwgYngsIGJ5KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGxlbmd0aDEgKyBsZW5ndGgyIDw9ICh3YWxsLmxlbmd0aCAqIHNjYWxlKS0zOSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldERpc3RhbmNlKGF4LCBheSwgYngsIGJ5KSB7XG4gICAgY29uc3QgeCA9IGF4IC0gYng7XG4gICAgY29uc3QgeSA9IGF5IC0gYnk7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICB9XG5cbiAgcG9wdWxhdGVXYWxscygpIHtcbiAgICBsZXQgY29tYm9zSWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jb21ib3MubGVuZ3RoKTtcbiAgICBsZXQgY29tYm8gPSB0aGlzLmNvbWJvc1tjb21ib3NJZHhdO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4LCBjb21ibyk7XG4gIH1cblxuICBhbmltYXRlKGN0eCwgc2NhbGUpIHtcbiAgICBpZiAodGhpcy53YWxsQ29tYm9zLmxlbmd0aCAhPT0gMCAmJiB0aGlzLndhbGxDb21ib3NbdGhpcy53YWxsQ29tYm9zLmxlbmd0aCAtIDFdLmxlbmd0aCAlIDcgPT09IDApIHtcbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndhbGxDb21ib3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHdhbGxzID0gdGhpcy53YWxsQ29tYm9zW2ldO1xuXG4gICAgICAgIGlmICh3YWxsc1swXS5sZW5ndGggPT09IDcwKSB7XG4gICAgICAgICAgdGhpcy53YWxsQ29tYm9zLnVuc2hpZnQoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcmV2Q29vcmQ7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3YWxscy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCB3YWxsID0gd2FsbHNbal07XG5cbiAgICAgICAgICBpZiAod2FsbC5pc1dhbGwgIT09ICdsaW5lJykge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlV2FsbEFuZ2xlID0gdGhpcy5hbmltYXRlV2FsbEFuZ2xlICsgNjA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSA+PSAzNjApIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSA9IHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAlIDM2MDtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGxldCB4MiwgeTIsIGF4LCBheSwgYngsIGJ5LCBuZXdMZW5ndGg7XG4gIFxuICAgICAgICAgIG5ld0xlbmd0aCA9IHdhbGwubGVuZ3RoIC0gNTtcbiAgXG4gICAgICAgICAgeDIgPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmltYXRlV2FsbEFuZ2xlIC8gMTgwKSAqIChuZXdMZW5ndGggKiBzY2FsZSk7XG4gICAgICAgICAgeTIgPSB0aGlzLnkgKyBNYXRoLnNpbihNYXRoLlBJICogdGhpcy5hbmltYXRlV2FsbEFuZ2xlIC8gMTgwKSAqIChuZXdMZW5ndGggKiBzY2FsZSk7XG4gIFxuICAgICAgICAgIC8vIHRhcGV6b2lkIHBvaW50IG9uIGZpcnN0IGxpbmUgXG4gICAgICAgICAgYnggPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmltYXRlV2FsbEFuZ2xlIC8gMTgwKSAqICgobmV3TGVuZ3RoICogc2NhbGUpIC0gREVGQVVMVFMuU0laRSk7XG4gICAgICAgICAgYnkgPSB0aGlzLnkgKyBNYXRoLnNpbihNYXRoLlBJICogdGhpcy5hbmltYXRlV2FsbEFuZ2xlIC8gMTgwKSAqICgobmV3TGVuZ3RoICogc2NhbGUpIC0gREVGQVVMVFMuU0laRSk7XG4gIFxuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHgubW92ZVRvKGJ4LCBieSk7XG4gICAgICAgICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICBcbiAgICAgICAgICBpZiAocHJldkNvb3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oLi4ucHJldkNvb3JkKTtcbiAgXG4gICAgICAgICAgICBheCA9IHByZXZDb29yZFswXSArIE1hdGguY29zKE1hdGguUEkgKiAodGhpcy5hbmltYXRlV2FsbEFuZ2xlICsgMTIwKSAvIDE4MCkgKiBERUZBVUxUUy5TSVpFO1xuICAgICAgICAgICAgYXkgPSBwcmV2Q29vcmRbMV0gKyBNYXRoLnNpbihNYXRoLlBJICogKHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSArIDEyMCkgLyAxODApICogREVGQVVMVFMuU0laRTtcbiAgXG4gICAgICAgICAgICBjdHgubGluZVRvKGF4LCBheSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKGJ4LCBieSk7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBpZiAod2FsbC5pc1dhbGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVswXTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMF07XG4gICAgICAgICAgfSBlbHNlIGlmICh3YWxsLmlzV2FsbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVsxXTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMV07XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgXG4gICAgICAgICAgcHJldkNvb3JkID0gW3gyLCB5Ml07XG4gIFxuICAgICAgICAgIHRoaXMud2FsbENvbWJvc1tpXVtqXSA9IHtcbiAgICAgICAgICAgIGxlbmd0aDogbmV3TGVuZ3RoLFxuICAgICAgICAgICAgaXNXYWxsOiB3YWxsLmlzV2FsbCxcbiAgICAgICAgICAgIGFuZ2xlOiB0aGlzLmFuaW1hdGVXYWxsQW5nbGUsXG4gICAgICAgICAgICBwb2ludDE6IFtheCwgYXldLFxuICAgICAgICAgICAgcG9pbnQyOiBbYngsIGJ5XSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2FsbHM7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==