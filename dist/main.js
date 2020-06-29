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
      }, 400); // let rand = Math.floor(Math.random() * 10) + 1;

      this.rotationTimeout = setTimeout(function () {
        return _this.updateRotation();
      }, 10000); // this.rotationTimeout = setTimeout(() => {
      //   this.rotationInterval = setInterval(() => this.updateRotation(), rand * 500);
      // }, 10000)

      this.music.load();
      this.music.play();
    }
  }, {
    key: "updateRotation",
    value: function updateRotation() {
      var _this2 = this;

      if (this.rotationDir === 1) {
        this.rotationDir = -1;
      } else {
        this.rotationDir = 1;
      }

      var rand = Math.floor(Math.random() * 10) + 1;
      this.rotationInterval = setTimeout(function () {
        return _this2.updateRotation();
      }, rand * 500);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJXaWNrZWRIZXhhZ29uIiwiREVGQVVMVFMiLCJDT0xPUlMiLCJSQURJVVMiLCJTSVpFIiwiQ3Vyc29yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImFuZ2xlIiwicm90YXRlQW5nbGUiLCJ4IiwieSIsImRyYXciLCJzY2FsZSIsIk1hdGgiLCJjb3MiLCJQSSIsInNpbiIsImN1cnNvclgiLCJjdXJzb3JZIiwidHJhbnNsYXRlIiwicm90YXRlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiZmlsbFN0eWxlIiwiZmlsbCIsImRlbHRhVGltZSIsImRpbWVuc2lvbnMiLCJydW5uaW5nIiwic2NhbGVEaXIiLCJyb3RhdGlvbkRpciIsInJlZ2lzdGVyRXZlbnRzIiwic2VjdGlvbnMiLCJTZWN0aW9ucyIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInN0b3B3YXRjaCIsIlN0b3B3YXRjaCIsImhleGFnb24iLCJIZXhhZ29uIiwiY3Vyc29yIiwiY3Vyc29yRGlyIiwibXVzaWMiLCJBdWRpbyIsImJlZ2luQXVkaW8iLCJnYW1lT3ZlckF1ZGlvIiwiYmVmb3JlR2FtZSIsInRoYXQiLCJmIiwiRm9udEZhY2UiLCJsb2FkIiwidGhlbiIsInJlY3QiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImZvbnQiLCJmaWxsVGV4dCIsImRpdiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibGFzdFRpbWUiLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZSIsIndhbGxzIiwiV2FsbHMiLCJwbGF5IiwicG9wdWxhdGVXYWxscyIsInNldEludGVydmFsIiwic3RhcnRUaW1lIiwicm90YXRpb25UaW1lb3V0IiwidXBkYXRlUm90YXRpb24iLCJyYW5kIiwiZmxvb3IiLCJyYW5kb20iLCJyb3RhdGlvbkludGVydmFsIiwibnVtIiwidG9TdHJpbmciLCJzcGxpdCIsImxlbmd0aCIsImNsZWFyUmVjdCIsIm5vdyIsInRpbWUiLCJyb3VuZCIsImNvdW50RGVjaW1hbHMiLCJwaXZvdENsb2Nrd2lzZSIsInBpdm90Q291bnRlckNsb2Nrd2lzZSIsImdhbWVPdmVyIiwicGF1c2UiLCJzdG9wIiwiY2xlYXJJbnRlcnZhbCIsImNsZWFyVGltZW91dCIsImFmdGVyR2FtZSIsInVwZGF0ZVNjYWxlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsImV2ZW50Iiwia2V5Q29kZSIsImNvbGxpZGVzV2l0aCIsInRpcCIsImhleDEiLCJoZXgyIiwicHJldkNvb3JkIiwiaSIsIngyIiwieTIiLCJ1bmRlZmluZWQiLCJpbm5lckhUTUwiLCJNQVgiLCJhbmltYXRlV2FsbEFuZ2xlIiwiY29tYm9zIiwid2FsbENvbWJvcyIsImNvbWJvIiwiYXgiLCJheSIsImJ4IiwiYnkiLCJjbG9zZVBhdGgiLCJ3YWxsIiwiaXNXYWxsIiwicHVzaCIsImN1cnNvclBvcyIsImoiLCJwb2ludDEiLCJwb2ludDIiLCJsZW5ndGgxIiwiZ2V0RGlzdGFuY2UiLCJsZW5ndGgyIiwic3FydCIsImNvbWJvc0lkeCIsInVuc2hpZnQiLCJuZXdMZW5ndGgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7Q0FDQTs7QUFFQTtBQUlBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3hELE1BQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUFqQjtBQUNBRCxVQUFRLENBQUNFLE1BQVQsR0FBa0JDLE1BQU0sQ0FBQ0MsV0FBekI7QUFDQUosVUFBUSxDQUFDSyxLQUFULEdBQWlCRixNQUFNLENBQUNHLFVBQXhCO0FBRUEsTUFBSUMscURBQUosQ0FBa0JQLFFBQWxCO0FBQ0QsQ0FORCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLElBQU1RLFFBQVEsR0FBRztBQUNmQyxR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Q0FBQ0MsTUFBTCxLQUFnQixLQUFwQixFQUEyQjtBQUNoQ3BILGlCQUFHLENBQUMrQyxXQUFKLEdBQWtCckQsUUFBUSxDQUFDQyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQWxCO0FBQ0FLLGlCQUFHLENBQUNtQixTQUFKLEdBQWdCekIsUUFBUSxDQUFDQyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQWhCO0FBQ0Q7O0FBRURLLGVBQUcsQ0FBQ29CLElBQUo7QUFDQXBCLGVBQUcsQ0FBQ2dELE1BQUo7QUFFQW1ELHFCQUFTLEdBQUcsQ0FBQ0UsRUFBRCxFQUFLQyxFQUFMLENBQVo7QUFFQSxpQkFBS00sVUFBTCxDQUFnQlIsQ0FBaEIsRUFBbUJtQixDQUFuQixJQUF3QjtBQUN0QjNDLG9CQUFNLEVBQUVvRCxTQURjO0FBRXRCWixvQkFBTSxFQUFFRCxJQUFJLENBQUNDLE1BRlM7QUFHdEJsSCxtQkFBSyxFQUFFLEtBQUt3RyxnQkFIVTtBQUl0QmMsb0JBQU0sRUFBRSxDQUFDVixFQUFELEVBQUtDLEVBQUwsQ0FKYztBQUt0QlUsb0JBQU0sRUFBRSxDQUFDVCxFQUFELEVBQUtDLEVBQUw7QUFMYyxhQUF4QjtBQU9EO0FBQ0Y7QUFDRjtBQUNGOzs7Ozs7QUFHWW5ELG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDNU5BLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBXaWNrZWRIZXhhZ29uIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcbi8vIGltcG9ydCBXaWNrZWRIZXhhZ29uIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcblxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgY2FudmFzRWwuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICBjYW52YXNFbC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gIG5ldyBXaWNrZWRIZXhhZ29uKGNhbnZhc0VsKTtcbn0pO1xuIiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1xuICAgIFwiIzA4ZmI3YlwiLFxuICAgIFwiI2VmODcwOFwiLFxuICAgIFwiI2MzMWU5ZVwiLFxuICAgIFwiIzZiNGFjYVwiLFxuICAgIFwiIzJiNmFlYVwiLFxuICBdLFxuICBSQURJVVM6IDYwLFxuICBTSVpFOiA1LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Vyc29yIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5nbGUgPSAzMzA7XG4gICAgdGhpcy5yb3RhdGVBbmdsZSA9IDA7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICB0aXAoc2NhbGUpIHtcbiAgICBsZXQgeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpICsgKE1hdGguY29zKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSAqICgoREVGQVVMVFMuUkFESVVTICogc2NhbGUpICsgREVGQVVMVFMuU0laRSkpO1xuICAgIGxldCB5ID0gKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpICsgKE1hdGguc2luKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSAqICgoREVGQVVMVFMuUkFESVVTICogc2NhbGUpICsgREVGQVVMVFMuU0laRSkpO1xuICAgIHJldHVybiBbeCwgeV07XG4gIH1cblxuICBkcmF3KGN0eCwgc2NhbGUpIHtcbiAgICBzY2FsZSA9IHNjYWxlIHx8IDE7XG5cbiAgICB0aGlzLmN1cnNvclggPSAodGhpcy5jYW52YXMud2lkdGggLyAyKSArIChNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiAoREVGQVVMVFMuUkFESVVTICogc2NhbGUpKTtcbiAgICB0aGlzLmN1cnNvclkgPSAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMikgKyAoTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApICogKERFRkFVTFRTLlJBRElVUyAqIHNjYWxlKSk7XG5cbiAgICBjdHgudHJhbnNsYXRlKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICBjdHgudHJhbnNsYXRlKC10aGlzLmN1cnNvclgsIC10aGlzLmN1cnNvclkpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy5jdXJzb3JYIC0gREVGQVVMVFMuU0laRSwgdGhpcy5jdXJzb3JZIC0gREVGQVVMVFMuU0laRSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclggKyBERUZBVUxUUy5TSVpFLCB0aGlzLmN1cnNvclkpO1xuICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYIC0gREVGQVVMVFMuU0laRSwgdGhpcy5jdXJzb3JZICsgREVGQVVMVFMuU0laRSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXTtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgY3R4LnJvdGF0ZSgtdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGN0eC50cmFuc2xhdGUoLXRoaXMuY3Vyc29yWCwgLXRoaXMuY3Vyc29yWSk7XG4gIH1cblxuICBhbmltYXRlKGN0eCwgc2NhbGUpIHtcbiAgICB0aGlzLmRyYXcoY3R4LCBzY2FsZSk7XG4gIH1cblxuICBwaXZvdENsb2Nrd2lzZShkZWx0YVRpbWUsIGN0eCwgc2NhbGUpIHtcbiAgICB0aGlzLmFuZ2xlICs9ICgxNTAgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyhjdHgsIHNjYWxlKTtcbiAgfVxuXG4gIHBpdm90Q291bnRlckNsb2Nrd2lzZShkZWx0YVRpbWUsIGN0eCwgc2NhbGUpIHtcbiAgICB0aGlzLmFuZ2xlIC09ICgxNTAgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyhjdHgsIHNjYWxlKTtcbiAgfVxufSIsImltcG9ydCBTdG9wd2F0Y2ggZnJvbSAnLi9zdG9wd2F0Y2gnO1xuaW1wb3J0IEhleGFnb24gZnJvbSAnLi9oZXhhZ29uJztcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi9jdXJzb3InO1xuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vc2VjdGlvbnMnO1xuaW1wb3J0IFdhbGxzIGZyb20gJy4vd2FsbHMnO1xuLy8gaW1wb3J0IHRoZSBvdGhlciBzY3JpcHRzXG5cbmNvbnN0IENPTE9SUyA9IFtcbiAgLy8gYmFzZSwgc2VjdGlvbnMsIGN1cnNvci93YWxscyAgIH4gLy8gYmxhY2sgdG8gY29sb3IgLy8gd2hpdGUgdG8gY29sb3JcbiAgW1wiIzAwMDAwMFwiLCBcIiMwMjI3MTNcIiwgXCIjMDhmYjdiXCJdLCAgICAvLyBibGFjay9ncmVlblxuICBbXCIjMDAwMDAwXCIsIFwiIzI2MTUwMVwiLCBcIiNlZjg3MDhcIl0sICAgIC8vIGJsYWNrL29yYW5nZVxuICBbXCIjZmZmZmZmXCIsIFwiI2Y1ZGNmMFwiLCBcIiNjMzFlOWVcIl0sICAgIC8vIHdoaXRlL3BpbmtcbiAgW1wiI2ZmZmZmZlwiLCBcIiNlN2UzZjdcIiwgXCIjNmI0YWNhXCJdLCAgICAvLyB3aGl0ZS9wdXJwbGVcbiAgW1wiI2ZmZmZmZlwiLCBcIiNkZGU4ZmNcIiwgXCIjMmI2YWVhXCJdLCAgICAvLyB3aGl0ZS9ibHVlXG5dXG5cbmNsYXNzIFdpY2tlZEhleGFnb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGg7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodDtcbiAgICB0aGlzLnNjYWxlID0gMTtcbiAgICB0aGlzLnNjYWxlRGlyID0gXCJcIjtcbiAgICB0aGlzLnJvdGF0aW9uRGlyID0gMTtcblxuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcblxuICAgIHRoaXMuc2VjdGlvbnMgPSBuZXcgU2VjdGlvbnMoY2FudmFzKTtcbiAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIHRoaXMuc3RvcHdhdGNoID0gbmV3IFN0b3B3YXRjaChjYW52YXMpO1xuICAgIHRoaXMuaGV4YWdvbiA9IG5ldyBIZXhhZ29uKGNhbnZhcyk7XG4gICAgdGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKGNhbnZhcyk7XG5cbiAgICB0aGlzLmN1cnNvckRpciA9ICcnO1xuXG4gICAgdGhpcy5tdXNpYyA9IG5ldyBBdWRpbygnYXNzZXRzL3NvdW5kcy9DdXNwLm1wMycpO1xuICAgIHRoaXMuYmVnaW5BdWRpbyA9IG5ldyBBdWRpbygnYXNzZXRzL3NvdW5kcy9iZWdpbi5tcDMnKTtcbiAgICB0aGlzLmdhbWVPdmVyQXVkaW8gPSBuZXcgQXVkaW8oJ2Fzc2V0cy9zb3VuZHMvZ2FtZV9vdmVyLm1wMycpO1xuXG4gICAgdGhpcy5iZWZvcmVHYW1lKHRoaXMuY3R4KTtcbiAgfVxuXG4gIGJlZm9yZUdhbWUoY3R4KSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuXG4gICAgbGV0IGYgPSBuZXcgRm9udEZhY2UoJ1NxdWFkYSBPbmUnLCAndXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9zcXVhZGFvbmUvdjgvQkNhc3FaOFhzT3J4NG1jT2s2TXRhYWMyV1JKbkRnby53b2ZmMiknKTtcblxuICAgIGYubG9hZCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnJlY3QodGhhdC54LzIgLSAxMjAsIHRoYXQueS8yIC0gMjAwLCAyNDAsIDEyMCk7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNjMzFlOWVcIjtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguZm9udCA9IFwiMzBweCBTcXVhZGEgT25lXCI7XG4gICAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICBjdHguZmlsbFRleHQoXCJTUEFDRSBUTyBQTEFZXCIsIHRoYXQueCAvIDIgLSA4MCwgdGhhdC55IC8gMiAtIDE2MCk7XG4gICAgICBjdHguZmlsbFRleHQoXCJMRUZUL1JJR0hUIE9SIEEvRFwiLCB0aGF0LnggLyAyIC0gOTYsIHRoYXQueSAvIDIgLSAxMjApO1xuICAgICAgY3R4LmZpbGxUZXh0KFwiVE8gQVZPSUQgV0FMTFNcIiwgdGhhdC54IC8gMiAtIDg2LCB0aGF0LnkgLyAyIC0gOTApO1xuICAgIH0pO1xuICB9XG5cbiAgYWZ0ZXJHYW1lKCkge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnYW1lLW92ZXInKTtcbiAgICBkaXZbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH1cblxuICBwbGF5KCkge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnYW1lLW92ZXInKTtcbiAgICBkaXZbMF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cbiAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYW5pbWF0ZSh0aW1lc3RhbXApLCAzMDApO1xuXG5cbiAgICB0aGlzLndhbGxzID0gbmV3IFdhbGxzKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuYmVnaW5BdWRpby5wbGF5KCk7XG4gICAgdGhpcy5wb3B1bGF0ZVdhbGxzID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy53YWxscy5wb3B1bGF0ZVdhbGxzKCksIDgwMCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICB9LCA0MDApO1xuXG4gICAgLy8gbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuXG4gICAgdGhpcy5yb3RhdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlUm90YXRpb24oKSwgMTAwMDApXG4gICAgLy8gdGhpcy5yb3RhdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgIHRoaXMucm90YXRpb25JbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUm90YXRpb24oKSwgcmFuZCAqIDUwMCk7XG4gICAgLy8gfSwgMTAwMDApXG5cbiAgICB0aGlzLm11c2ljLmxvYWQoKTtcbiAgICB0aGlzLm11c2ljLnBsYXkoKTtcbiAgfVxuXG4gIHVwZGF0ZVJvdGF0aW9uKCkge1xuICAgIGlmICh0aGlzLnJvdGF0aW9uRGlyID09PSAxKSB7XG4gICAgICB0aGlzLnJvdGF0aW9uRGlyID0gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm90YXRpb25EaXIgPSAxO1xuICAgIH1cblxuICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICB0aGlzLnJvdGF0aW9uSW50ZXJ2YWwgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlUm90YXRpb24oKSwgcmFuZCAqIDUwMCk7XG4gIH1cblxuICB1cGRhdGVTY2FsZSgpIHtcbiAgICBpZiAodGhpcy5zY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNjYWxlRGlyID0gXCJpbmNyZWFzaW5nXCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNjYWxlID49IDEuNSkge1xuICAgICAgdGhpcy5zY2FsZURpciA9IFwiZGVjcmVhc2luZ1wiO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNjYWxlRGlyID09PSBcImluY3JlYXNpbmdcIikge1xuICAgICAgdGhpcy5zY2FsZSArPSAwLjA0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY2FsZURpciA9PT0gXCJkZWNyZWFzaW5nXCIpIHtcbiAgICAgIHRoaXMuc2NhbGUgLT0gMC4wNDtcbiAgICB9XG4gIH1cblxuICBjb3VudERlY2ltYWxzKG51bSkge1xuICAgIGlmIChNYXRoLmZsb29yKG51bSkgIT09IG51bSkge1xuICAgICAgcmV0dXJuIG51bS50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGggfHwgMDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBhbmltYXRlKHRpbWVzdGFtcCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICBsZXQgZGVsdGFUaW1lID0gdGltZXN0YW1wIC0gdGhpcy5sYXN0VGltZTtcblxuICAgIHRoaXMuZGVsdGFUaW1lID0gZGVsdGFUaW1lO1xuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lc3RhbXA7XG5cbiAgICBpZiAodGhpcy5zdGFydFRpbWUpIHtcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICB0aGlzLnRpbWUgPSBNYXRoLnJvdW5kKCgobm93IC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMCkgKiAxMDApIC8gMTAwO1xuICBcbiAgICAgIGlmICh0aGlzLmNvdW50RGVjaW1hbHModGhpcy50aW1lKSA9PT0gMCkge1xuICAgICAgICB0aGlzLnRpbWUgPSBgJHt0aGlzLnRpbWV9LjAwYDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jb3VudERlY2ltYWxzKHRoaXMudGltZSkgPT09IDEpIHtcbiAgICAgICAgdGhpcy50aW1lID0gYCR7dGhpcy50aW1lfTBgO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0b3B3YXRjaC5hbmltYXRlKHRoaXMudGltZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWN0aW9ucy5hbmltYXRlKGRlbHRhVGltZSk7XG4gICAgdGhpcy5oZXhhZ29uLmFuaW1hdGUoZGVsdGFUaW1lLCB0aGlzLnNjYWxlLCB0aGlzLnJvdGF0aW9uRGlyKTtcbiAgICB0aGlzLmN1cnNvci5hbmltYXRlKHRoaXMuY3R4LCB0aGlzLnNjYWxlKTtcbiAgICB0aGlzLndhbGxzLmFuaW1hdGUodGhpcy5jdHgsIHRoaXMuc2NhbGUpO1xuXG4gICAgXG4gICAgaWYgKHRoaXMuY3Vyc29yRGlyID09PSAnY2xvY2t3aXNlJykge1xuICAgICAgdGhpcy5jdXJzb3IucGl2b3RDbG9ja3dpc2UoZGVsdGFUaW1lLCB0aGlzLmN0eCwgdGhpcy5zY2FsZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnNvckRpciA9PT0gJ2NvdW50ZXJDbG9ja3dpc2UnKSB7XG4gICAgICB0aGlzLmN1cnNvci5waXZvdENvdW50ZXJDbG9ja3dpc2UoZGVsdGFUaW1lLCB0aGlzLmN0eCwgdGhpcy5zY2FsZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIoKSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmdhbWVPdmVyQXVkaW8ucGxheSgpO1xuICAgICAgdGhpcy5tdXNpYy5wYXVzZSgpO1xuICAgICAgdGhpcy5zdG9wd2F0Y2guc3RvcCgpO1xuICAgICAgdGhpcy5oZXhhZ29uLnN0b3AoKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wb3B1bGF0ZVdhbGxzKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yb3RhdGlvbkludGVydmFsKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJvdGF0aW9uVGltZW91dCk7XG4gICAgICB0aGlzLmFmdGVyR2FtZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRpbWUgJiYgdGhpcy50aW1lID4gNDEpIHtcbiAgICAgIHRoaXMudXBkYXRlU2NhbGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ydW5uaW5nID09PSB0cnVlKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgfHwgZXZlbnQua2V5Q29kZSA9PT0gNjUpIHtcbiAgICAgICAgaWYgKHRoYXQucnVubmluZykge1xuICAgICAgICAgIHRoYXQuY3Vyc29yRGlyID0gJ2NvdW50ZXJDbG9ja3dpc2UnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5IHx8IGV2ZW50LmtleUNvZGUgPT09IDY4KSB7XG4gICAgICAgIGlmICh0aGF0LnJ1bm5pbmcpIHtcbiAgICAgICAgICB0aGF0LmN1cnNvckRpciA9ICdjbG9ja3dpc2UnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgIHRoYXQucGxheSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+ICh0aGF0LmN1cnNvckRpciA9ICcnKSk7XG4gIH1cblxuICBnYW1lT3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy53YWxscy5jb2xsaWRlc1dpdGgodGhpcy5jdXJzb3IudGlwKHRoaXMuc2NhbGUpLCB0aGlzLnNjYWxlKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpY2tlZEhleGFnb247IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1xuICAgIFtcIiMwMDAwMDBcIiwgXCIjMDhmYjdiXCJdLFxuICAgIFtcIiMwMDAwMDBcIiwgXCIjZWY4NzA4XCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjYzMxZTllXCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjNmI0YWNhXCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjMmI2YWVhXCJdLFxuICBdLFxuICBTSVpFOiA1MCxcbn1cblxuXG5jbGFzcyBIZXhhZ29uIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAvIDI7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG5cbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgZHJhdyhjdHgsIHNjYWxlKSB7XG4gICAgc2NhbGUgPSBzY2FsZSB8fCAxO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgIGN0eC5yb3RhdGUodGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG5cbiAgICBsZXQgaGV4MSA9IDA7XG4gICAgZm9yIChoZXgxOyBoZXgxIDw9IDY7IGhleDErKykge1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyAoREVGQVVMVFMuU0laRSAqIHNjYWxlKSAqIE1hdGguY29zKGhleDEgKiAyICogTWF0aC5QSSAvIDYpLCB0aGlzLnkgKyAoREVGQVVMVFMuU0laRSAqIHNjYWxlKSAqIE1hdGguc2luKGhleDEgKiAyICogTWF0aC5QSSAvIDYpKTtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzFdO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG5cbiAgICBsZXQgaGV4MiA9IDA7XG4gICAgZm9yIChoZXgyOyBoZXgyIDw9IDY7IGhleDIrKykge1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyAoNDQgKiBzY2FsZSkgKiBNYXRoLmNvcyhoZXgyICogMiAqIE1hdGguUEkgLyA2KSwgdGhpcy55ICsgKDQ0ICogc2NhbGUpICogTWF0aC5zaW4oaGV4MiAqIDIgKiBNYXRoLlBJIC8gNikpO1xuICAgIH1cblxuICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMF07XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGFuaW1hdGUoZGVsdGFUaW1lLCBzY2FsZSwgcm90YXRpb25EaXIpIHtcbiAgICB0aGlzLmFuZ2xlID0gMjAgLyBkZWx0YVRpbWUgKiByb3RhdGlvbkRpcjtcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgsIHNjYWxlKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGV4YWdvbjsiLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXG4gICAgW1wiIzAwMDAwMFwiLCBcIiMwMjI3MTNcIl0sXG4gICAgW1wiIzAwMDAwMFwiLCBcIiMyNjE1MDFcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiNmNWRjZjBcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiNlN2UzZjdcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiNkZGU4ZmNcIl0sXG4gIF0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb25zIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5nbGUgPSAtNjA7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICBcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBsZXQgcHJldkNvb3JkO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSArIDYwO1xuICAgICAgfVxuXG4gICAgICBsZXQgeDIsIHkyLCBsZW5ndGg7XG5cbiAgICAgIC8vIGxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5zcXJ0KDMpICogdGhpcy54ICogMik7XG4gICAgICBsZW5ndGggPSAxNTAwO1xuICAgICAgeDIgPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBsZW5ndGg7XG4gICAgICB5MiA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIGxlbmd0aDtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG4gICAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gICAgICBpZiAocHJldkNvb3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3R4LmxpbmVUbyguLi5wcmV2Q29vcmQpO1xuICAgICAgfVxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdW2kgJSAyXTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1baSAlIDJdO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgcHJldkNvb3JkID0gW3gyLCB5Ml07XG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZShkZWx0YVRpbWUpIHtcbiAgICAvLyB0aGlzLmFuZ2xlICs9ICgxIC8gZGVsdGFUaW1lKTtcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9ICBcbn0iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXG4gICAgW1wiIzAwMDAwMFwiLCBcIiNmZmZmZmZcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiNlZjg3MDhcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiM2YjRhY2FcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiMyYjZhZWFcIl0sXG4gIF0sXG59XG5cbmNsYXNzIFN0b3B3YXRjaCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLnRpbWUgPSBcIjAuMDBcIjtcblxuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBzdG9wd2F0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RvcHdhdGNoXCIpO1xuICAgIHN0b3B3YXRjaFswXS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHN0b3B3YXRjaFswXS5pbm5lckhUTUwgKz0gYCR7dGhpcy50aW1lfWA7XG4gIH1cblxuICBhbmltYXRlKHRpbWUpIHtcbiAgICB0aGlzLnRpbWUgPSB0aW1lO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgbGV0IHRpbWUgPSB0aGlzLnRpbWU7XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9wd2F0Y2g7IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1xuICAgIFtcIiMwOGZiN2JcIiwgJ3JnYmEoMCwwLDAsMCknXSxcbiAgICBbXCIjZWY4NzA4XCIsICdyZ2JhKDAsMCwwLDApJ10sXG4gICAgW1wiI2MzMWU5ZVwiLCAncmdiYSgwLDAsMCwwKSddLFxuICAgIFtcIiM2YjRhY2FcIiwgJ3JnYmEoMCwwLDAsMCknXSxcbiAgICBbXCIjMmI2YWVhXCIsICdyZ2JhKDAsMCwwLDApJ10sXG4gIF0sXG4gIC8vIHNlY29uZCBjb2xvciBpcyB0cmFuc3BhcmVudFxuICBTSVpFOiA0MCxcbiAgTUFYOiAxMDAwLFxuICAvLyBjb3JyZXNwb25kcyB3LyB0aGUgc2VjdGlvbnMnIGxlbmd0aHNcbn07XG5cbmNsYXNzIFdhbGxzIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5nbGUgPSAtNjA7XG4gICAgdGhpcy5hbmltYXRlV2FsbEFuZ2xlID0gLTYwO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAvIDI7XG5cbiAgICB0aGlzLmNvbWJvcyA9IFtcbiAgICAgIFt0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZV0sXG4gICAgICBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWVdLFxuICAgICAgW3RydWUsIHRydWUsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlXSxcbiAgICAgIFt0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0sXG4gICAgICBbdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIHRydWVdLFxuICAgICAgW2ZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlXSxcbiAgICAgIFt0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIGZhbHNlXSxcbiAgICAgIFtmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIGZhbHNlLCB0cnVlXSxcbiAgICAgIFt0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2VdLFxuICAgIF1cblxuICAgIHRoaXMud2FsbENvbWJvcyA9IFtdO1xuICB9XG5cbiAgZHJhdyAoY3R4LCBjb21ibykge1xuICAgIGxldCBwcmV2Q29vcmQsIHdhbGxzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gLTE7IGkgPD0gNTsgaSsrKSB7XG4gICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyA2MDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYW5nbGUgPj0gMzYwKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICUgMzYwO1xuICAgICAgfVxuXG4gICAgICBsZXQgeDIsIHkyLCBheCwgYXksIGJ4LCBieTtcbiAgICAgIC8vIG91dHRlciB0cmFwZXpvaWQgY29ybmVyXG4gICAgICB4MiA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIERFRkFVTFRTLk1BWDtcbiAgICAgIHkyID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogREVGQVVMVFMuTUFYO1xuXG4gICAgICAvLyBpbm5lciB0YXBlem9pZCBwb2ludCBvbiBmaXJzdCBsaW5lIFxuICAgICAgYnggPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiAoREVGQVVMVFMuTUFYIC0gREVGQVVMVFMuU0laRSk7XG4gICAgICBieSA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIChERUZBVUxUUy5NQVggLSBERUZBVUxUUy5TSVpFKTsgXG5cbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8oYngsIGJ5KTtcbiAgICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcblxuICAgICAgaWYgKHByZXZDb29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN0eC5saW5lVG8oLi4ucHJldkNvb3JkKTtcblxuICAgICAgICBheCA9IHByZXZDb29yZFswXSArIE1hdGguY29zKE1hdGguUEkgKiAodGhpcy5hbmdsZSArIDEyMCkgLyAxODApICogREVGQVVMVFMuU0laRTtcbiAgICAgICAgYXkgPSBwcmV2Q29vcmRbMV0gKyBNYXRoLnNpbihNYXRoLlBJICogKHRoaXMuYW5nbGUgKyAxMjApIC8gMTgwKSAqIERFRkFVTFRTLlNJWkU7XG5cbiAgICAgICAgY3R4LmxpbmVUbyhheCwgYXkpO1xuICAgICAgICBjdHgubGluZVRvKGJ4LCBieSk7XG4gICAgICB9XG5cbiAgICAgICAgaWYgKGkgPT09IC0xIHx8IGNvbWJvW2ldID09PSBmYWxzZSkge1xuICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVsxXTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzFdO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbWJvW2ldKSB7XG4gICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzBdO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMF07XG4gICAgICAgIH1cblxuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgcHJldkNvb3JkID0gW3gyLCB5Ml07XG5cbiAgICAgIGxldCB3YWxsID0ge1xuICAgICAgICBsZW5ndGg6IDEwMDAsXG4gICAgICAgIGlzV2FsbDogJycsXG4gICAgICB9O1xuXG4gICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgd2FsbC5pc1dhbGwgPSAnbGluZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YWxsLmlzV2FsbCA9IGNvbWJvW2ldO1xuICAgICAgfVxuXG4gICAgICB3YWxscy5wdXNoKHdhbGwpO1xuICAgIH1cblxuICAgIHRoaXMud2FsbENvbWJvcy5wdXNoKHdhbGxzKTtcbiAgfVxuXG4gIGNvbGxpZGVzV2l0aChjdXJzb3JQb3MsIHNjYWxlKSB7XG4gICAgaWYgKHRoaXMud2FsbENvbWJvcy5sZW5ndGggIT09IDApIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy53YWxsQ29tYm9zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCB3YWxscyA9IHRoaXMud2FsbENvbWJvc1tqXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHdhbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHdhbGwgPSB3YWxsc1tpXTtcbiAgXG4gICAgICAgICAgaWYgKHdhbGwuaXNXYWxsKSB7XG4gICAgICAgICAgICBjb25zdCBbeCwgeV0gPSBjdXJzb3JQb3M7XG4gICAgICAgICAgICBjb25zdCBbYXgsIGF5XSA9IHdhbGwucG9pbnQxO1xuICAgICAgICAgICAgY29uc3QgW2J4LCBieV0gPSB3YWxsLnBvaW50MjtcbiAgXG4gICAgICAgICAgICBsZXQgbGVuZ3RoMSA9IHRoaXMuZ2V0RGlzdGFuY2UoeCwgeSwgYXgsIGF5KTtcbiAgICAgICAgICAgIGxldCBsZW5ndGgyID0gdGhpcy5nZXREaXN0YW5jZSh4LCB5LCBieCwgYnkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAobGVuZ3RoMSArIGxlbmd0aDIgPD0gKHdhbGwubGVuZ3RoICogc2NhbGUpLTM5KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGlzdGFuY2UoYXgsIGF5LCBieCwgYnkpIHtcbiAgICBjb25zdCB4ID0gYXggLSBieDtcbiAgICBjb25zdCB5ID0gYXkgLSBieTtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gIH1cblxuICBwb3B1bGF0ZVdhbGxzKCkge1xuICAgIGxldCBjb21ib3NJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNvbWJvcy5sZW5ndGgpO1xuICAgIGxldCBjb21ibyA9IHRoaXMuY29tYm9zW2NvbWJvc0lkeF07XG5cbiAgICB0aGlzLmRyYXcodGhpcy5jdHgsIGNvbWJvKTtcbiAgfVxuXG4gIGFuaW1hdGUoY3R4LCBzY2FsZSkge1xuICAgIGlmICh0aGlzLndhbGxDb21ib3MubGVuZ3RoICE9PSAwICYmIHRoaXMud2FsbENvbWJvc1t0aGlzLndhbGxDb21ib3MubGVuZ3RoIC0gMV0ubGVuZ3RoICUgNyA9PT0gMCkge1xuICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud2FsbENvbWJvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgd2FsbHMgPSB0aGlzLndhbGxDb21ib3NbaV07XG5cbiAgICAgICAgaWYgKHdhbGxzWzBdLmxlbmd0aCA9PT0gNzApIHtcbiAgICAgICAgICB0aGlzLndhbGxDb21ib3MudW5zaGlmdCgpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByZXZDb29yZDtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdhbGxzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IHdhbGwgPSB3YWxsc1tqXTtcblxuICAgICAgICAgIGlmICh3YWxsLmlzV2FsbCAhPT0gJ2xpbmUnKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgPSB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgKyA2MDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5hbmltYXRlV2FsbEFuZ2xlID49IDM2MCkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlV2FsbEFuZ2xlID0gdGhpcy5hbmltYXRlV2FsbEFuZ2xlICUgMzYwO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgbGV0IHgyLCB5MiwgYXgsIGF5LCBieCwgYnksIG5ld0xlbmd0aDtcbiAgXG4gICAgICAgICAgbmV3TGVuZ3RoID0gd2FsbC5sZW5ndGggLSA1O1xuICBcbiAgICAgICAgICB4MiA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgLyAxODApICogKG5ld0xlbmd0aCAqIHNjYWxlKTtcbiAgICAgICAgICB5MiA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgLyAxODApICogKG5ld0xlbmd0aCAqIHNjYWxlKTtcbiAgXG4gICAgICAgICAgLy8gdGFwZXpvaWQgcG9pbnQgb24gZmlyc3QgbGluZSBcbiAgICAgICAgICBieCA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgLyAxODApICogKChuZXdMZW5ndGggKiBzY2FsZSkgLSBERUZBVUxUUy5TSVpFKTtcbiAgICAgICAgICBieSA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgLyAxODApICogKChuZXdMZW5ndGggKiBzY2FsZSkgLSBERUZBVUxUUy5TSVpFKTtcbiAgXG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGN0eC5tb3ZlVG8oYngsIGJ5KTtcbiAgICAgICAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gIFxuICAgICAgICAgIGlmIChwcmV2Q29vcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY3R4LmxpbmVUbyguLi5wcmV2Q29vcmQpO1xuICBcbiAgICAgICAgICAgIGF4ID0gcHJldkNvb3JkWzBdICsgTWF0aC5jb3MoTWF0aC5QSSAqICh0aGlzLmFuaW1hdGVXYWxsQW5nbGUgKyAxMjApIC8gMTgwKSAqIERFRkFVTFRTLlNJWkU7XG4gICAgICAgICAgICBheSA9IHByZXZDb29yZFsxXSArIE1hdGguc2luKE1hdGguUEkgKiAodGhpcy5hbmltYXRlV2FsbEFuZ2xlICsgMTIwKSAvIDE4MCkgKiBERUZBVUxUUy5TSVpFO1xuICBcbiAgICAgICAgICAgIGN0eC5saW5lVG8oYXgsIGF5KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oYngsIGJ5KTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGlmICh3YWxsLmlzV2FsbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzBdO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVswXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdhbGwuaXNXYWxsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzFdO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVsxXTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICBcbiAgICAgICAgICBwcmV2Q29vcmQgPSBbeDIsIHkyXTtcbiAgXG4gICAgICAgICAgdGhpcy53YWxsQ29tYm9zW2ldW2pdID0ge1xuICAgICAgICAgICAgbGVuZ3RoOiBuZXdMZW5ndGgsXG4gICAgICAgICAgICBpc1dhbGw6IHdhbGwuaXNXYWxsLFxuICAgICAgICAgICAgYW5nbGU6IHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSxcbiAgICAgICAgICAgIHBvaW50MTogW2F4LCBheV0sXG4gICAgICAgICAgICBwb2ludDI6IFtieCwgYnldLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYWxsczsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9