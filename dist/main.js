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
    key: "play",
    value: function play() {
      var _this = this;

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
      setTimeout(function () {
        setInterval(function () {
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

      if (this.gameOver() === true) {
        this.running = false;
        this.gameOverAudio.play();
        this.music.pause();
        this.stopwatch.stop();
        this.hexagon.stop();
        clearInterval(this.populateWalls);
      }

      if (this.cursorDir === 'clockwise') {
        this.cursor.pivotClockwise(deltaTime, this.ctx, this.scale);
      } else if (this.cursorDir === 'counterClockwise') {
        this.cursor.pivotCounterClockwise(deltaTime, this.ctx, this.scale);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJXaWNrZWRIZXhhZ29uIiwiREVGQVVMVFMiLCJDT0xPUlMiLCJSQURJVVMiLCJTSVpFIiwiQ3Vyc29yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImFuZ2xlIiwicm90YXRlQW5nbGUiLCJ4IiwieSIsImRyYXciLCJzY2FsZSIsIk1hdGgiLCJjb3MiLCJQSSIsInNpbiIsImN1cnNvclgiLCJjdXJzb3JZIiwidHJhbnNsYXRlIiwicm90YXRlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiZmlsbFN0eWxlIiwiZmlsbCIsImRlbHRhVGltZSIsImRpbWVuc2lvbnMiLCJydW5uaW5nIiwic2NhbGVEaXIiLCJyb3RhdGlvbkRpciIsInJlZ2lzdGVyRXZlbnRzIiwic2VjdGlvbnMiLCJTZWN0aW9ucyIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInN0b3B3YXRjaCIsIlN0b3B3YXRjaCIsImhleGFnb24iLCJIZXhhZ29uIiwiY3Vyc29yIiwiY3Vyc29yRGlyIiwibXVzaWMiLCJBdWRpbyIsImJlZ2luQXVkaW8iLCJnYW1lT3ZlckF1ZGlvIiwiYmVmb3JlR2FtZSIsInRoYXQiLCJmIiwiRm9udEZhY2UiLCJsb2FkIiwidGhlbiIsInJlY3QiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImZvbnQiLCJmaWxsVGV4dCIsInRpbWVzdGFtcCIsIkRhdGUiLCJsYXN0VGltZSIsInNldFRpbWVvdXQiLCJhbmltYXRlIiwid2FsbHMiLCJXYWxscyIsInBsYXkiLCJwb3B1bGF0ZVdhbGxzIiwic2V0SW50ZXJ2YWwiLCJzdGFydFRpbWUiLCJyYW5kIiwiZmxvb3IiLCJyYW5kb20iLCJ1cGRhdGVSb3RhdGlvbiIsIm51bSIsInRvU3RyaW5nIiwic3BsaXQiLCJsZW5ndGgiLCJjbGVhclJlY3QiLCJub3ciLCJ0aW1lIiwicm91bmQiLCJjb3VudERlY2ltYWxzIiwiZ2FtZU92ZXIiLCJwYXVzZSIsInN0b3AiLCJjbGVhckludGVydmFsIiwicGl2b3RDbG9ja3dpc2UiLCJwaXZvdENvdW50ZXJDbG9ja3dpc2UiLCJ1cGRhdGVTY2FsZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJldmVudCIsImtleUNvZGUiLCJjb2xsaWRlc1dpdGgiLCJ0aXAiLCJoZXgxIiwiaGV4MiIsInByZXZDb29yZCIsImkiLCJ4MiIsInkyIiwidW5kZWZpbmVkIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVySFRNTCIsIk1BWCIsImFuaW1hdGVXYWxsQW5nbGUiLCJjb21ib3MiLCJ3YWxsQ29tYm9zIiwiY29tYm8iLCJheCIsImF5IiwiYngiLCJieSIsImNsb3NlUGF0aCIsIndhbGwiLCJpc1dhbGwiLCJwdXNoIiwiY3Vyc29yUG9zIiwiaiIsInBvaW50MSIsInBvaW50MiIsImxlbmd0aDEiLCJnZXREaXN0YW5jZSIsImxlbmd0aDIiLCJzcXJ0IiwiY29tYm9zSWR4IiwidW5zaGlmdCIsIm5ld0xlbmd0aCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7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QUNGOzs7Ozs7QUFHWWhELG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDNU5BLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBXaWNrZWRIZXhhZ29uIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcbi8vIGltcG9ydCBXaWNrZWRIZXhhZ29uIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcblxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgY2FudmFzRWwuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICBjYW52YXNFbC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gIG5ldyBXaWNrZWRIZXhhZ29uKGNhbnZhc0VsKTtcbn0pO1xuIiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1xuICAgIFwiIzA4ZmI3YlwiLFxuICAgIFwiI2VmODcwOFwiLFxuICAgIFwiI2MzMWU5ZVwiLFxuICAgIFwiIzZiNGFjYVwiLFxuICAgIFwiIzJiNmFlYVwiLFxuICBdLFxuICBSQURJVVM6IDYwLFxuICBTSVpFOiA1LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Vyc29yIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5nbGUgPSAzMzA7XG4gICAgdGhpcy5yb3RhdGVBbmdsZSA9IDA7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICB0aXAoc2NhbGUpIHtcbiAgICBsZXQgeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpICsgKE1hdGguY29zKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSAqICgoREVGQVVMVFMuUkFESVVTICogc2NhbGUpICsgREVGQVVMVFMuU0laRSkpO1xuICAgIGxldCB5ID0gKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpICsgKE1hdGguc2luKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSAqICgoREVGQVVMVFMuUkFESVVTICogc2NhbGUpICsgREVGQVVMVFMuU0laRSkpO1xuICAgIHJldHVybiBbeCwgeV07XG4gIH1cblxuICBkcmF3KGN0eCwgc2NhbGUpIHtcbiAgICBzY2FsZSA9IHNjYWxlIHx8IDE7XG5cbiAgICB0aGlzLmN1cnNvclggPSAodGhpcy5jYW52YXMud2lkdGggLyAyKSArIChNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiAoREVGQVVMVFMuUkFESVVTICogc2NhbGUpKTtcbiAgICB0aGlzLmN1cnNvclkgPSAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMikgKyAoTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApICogKERFRkFVTFRTLlJBRElVUyAqIHNjYWxlKSk7XG5cbiAgICBjdHgudHJhbnNsYXRlKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICBjdHgudHJhbnNsYXRlKC10aGlzLmN1cnNvclgsIC10aGlzLmN1cnNvclkpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy5jdXJzb3JYIC0gREVGQVVMVFMuU0laRSwgdGhpcy5jdXJzb3JZIC0gREVGQVVMVFMuU0laRSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclggKyBERUZBVUxUUy5TSVpFLCB0aGlzLmN1cnNvclkpO1xuICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYIC0gREVGQVVMVFMuU0laRSwgdGhpcy5jdXJzb3JZICsgREVGQVVMVFMuU0laRSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXTtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgY3R4LnJvdGF0ZSgtdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGN0eC50cmFuc2xhdGUoLXRoaXMuY3Vyc29yWCwgLXRoaXMuY3Vyc29yWSk7XG4gIH1cblxuICBhbmltYXRlKGN0eCwgc2NhbGUpIHtcbiAgICB0aGlzLmRyYXcoY3R4LCBzY2FsZSk7XG4gIH1cblxuICBwaXZvdENsb2Nrd2lzZShkZWx0YVRpbWUsIGN0eCwgc2NhbGUpIHtcbiAgICB0aGlzLmFuZ2xlICs9ICgxNTAgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyhjdHgsIHNjYWxlKTtcbiAgfVxuXG4gIHBpdm90Q291bnRlckNsb2Nrd2lzZShkZWx0YVRpbWUsIGN0eCwgc2NhbGUpIHtcbiAgICB0aGlzLmFuZ2xlIC09ICgxNTAgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyhjdHgsIHNjYWxlKTtcbiAgfVxufSIsImltcG9ydCBTdG9wd2F0Y2ggZnJvbSAnLi9zdG9wd2F0Y2gnO1xuaW1wb3J0IEhleGFnb24gZnJvbSAnLi9oZXhhZ29uJztcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi9jdXJzb3InO1xuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vc2VjdGlvbnMnO1xuaW1wb3J0IFdhbGxzIGZyb20gJy4vd2FsbHMnO1xuLy8gaW1wb3J0IHRoZSBvdGhlciBzY3JpcHRzXG5cbmNvbnN0IENPTE9SUyA9IFtcbiAgLy8gYmFzZSwgc2VjdGlvbnMsIGN1cnNvci93YWxscyAgIH4gLy8gYmxhY2sgdG8gY29sb3IgLy8gd2hpdGUgdG8gY29sb3JcbiAgW1wiIzAwMDAwMFwiLCBcIiMwMjI3MTNcIiwgXCIjMDhmYjdiXCJdLCAgICAvLyBibGFjay9ncmVlblxuICBbXCIjMDAwMDAwXCIsIFwiIzI2MTUwMVwiLCBcIiNlZjg3MDhcIl0sICAgIC8vIGJsYWNrL29yYW5nZVxuICBbXCIjZmZmZmZmXCIsIFwiI2Y1ZGNmMFwiLCBcIiNjMzFlOWVcIl0sICAgIC8vIHdoaXRlL3BpbmtcbiAgW1wiI2ZmZmZmZlwiLCBcIiNlN2UzZjdcIiwgXCIjNmI0YWNhXCJdLCAgICAvLyB3aGl0ZS9wdXJwbGVcbiAgW1wiI2ZmZmZmZlwiLCBcIiNkZGU4ZmNcIiwgXCIjMmI2YWVhXCJdLCAgICAvLyB3aGl0ZS9ibHVlXG5dXG5cbmNsYXNzIFdpY2tlZEhleGFnb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGg7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodDtcbiAgICB0aGlzLnNjYWxlID0gMTtcbiAgICB0aGlzLnNjYWxlRGlyID0gXCJcIjtcbiAgICB0aGlzLnJvdGF0aW9uRGlyID0gMTtcblxuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcblxuICAgIHRoaXMuc2VjdGlvbnMgPSBuZXcgU2VjdGlvbnMoY2FudmFzKTtcbiAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIHRoaXMuc3RvcHdhdGNoID0gbmV3IFN0b3B3YXRjaChjYW52YXMpO1xuICAgIHRoaXMuaGV4YWdvbiA9IG5ldyBIZXhhZ29uKGNhbnZhcyk7XG4gICAgdGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKGNhbnZhcyk7XG5cbiAgICB0aGlzLmN1cnNvckRpciA9ICcnO1xuXG4gICAgdGhpcy5tdXNpYyA9IG5ldyBBdWRpbygnYXNzZXRzL3NvdW5kcy9DdXNwLm1wMycpO1xuICAgIHRoaXMuYmVnaW5BdWRpbyA9IG5ldyBBdWRpbygnYXNzZXRzL3NvdW5kcy9iZWdpbi5tcDMnKTtcbiAgICB0aGlzLmdhbWVPdmVyQXVkaW8gPSBuZXcgQXVkaW8oJ2Fzc2V0cy9zb3VuZHMvZ2FtZV9vdmVyLm1wMycpO1xuXG4gICAgdGhpcy5iZWZvcmVHYW1lKHRoaXMuY3R4KTtcbiAgfVxuXG4gIGJlZm9yZUdhbWUoY3R4KSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuXG4gICAgbGV0IGYgPSBuZXcgRm9udEZhY2UoJ1NxdWFkYSBPbmUnLCAndXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9zcXVhZGFvbmUvdjgvQkNhc3FaOFhzT3J4NG1jT2s2TXRhYWMyV1JKbkRnby53b2ZmMiknKTtcblxuICAgIGYubG9hZCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnJlY3QodGhhdC54LzIgLSAxMjAsIHRoYXQueS8yIC0gMjAwLCAyNDAsIDEyMCk7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNjMzFlOWVcIjtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguZm9udCA9IFwiMzBweCBTcXVhZGEgT25lXCI7XG4gICAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICBjdHguZmlsbFRleHQoXCJTUEFDRSBUTyBQTEFZXCIsIHRoYXQueCAvIDIgLSA4MCwgdGhhdC55IC8gMiAtIDE2MCk7XG4gICAgICBjdHguZmlsbFRleHQoXCJMRUZUL1JJR0hUIE9SIEEvRFwiLCB0aGF0LnggLyAyIC0gOTYsIHRoYXQueSAvIDIgLSAxMjApO1xuICAgICAgY3R4LmZpbGxUZXh0KFwiVE8gQVZPSUQgV0FMTFNcIiwgdGhhdC54IC8gMiAtIDg2LCB0aGF0LnkgLyAyIC0gOTApO1xuICAgIH0pO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYW5pbWF0ZSh0aW1lc3RhbXApLCAzMDApO1xuXG4gICAgdGhpcy53YWxscyA9IG5ldyBXYWxscyh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmJlZ2luQXVkaW8ucGxheSgpO1xuICAgIHRoaXMucG9wdWxhdGVXYWxscyA9IHNldEludGVydmFsKCgpID0+IHRoaXMud2FsbHMucG9wdWxhdGVXYWxscygpLCA4MDApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgfSwgNDAwKTtcblxuICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGVSb3RhdGlvbigpLCByYW5kICogNTAwKTtcbiAgICB9LCAxMDAwMClcblxuICAgIHRoaXMubXVzaWMubG9hZCgpO1xuICAgIHRoaXMubXVzaWMucGxheSgpO1xuICB9XG5cbiAgdXBkYXRlUm90YXRpb24oKSB7XG4gICAgaWYgKHRoaXMucm90YXRpb25EaXIgPT09IDEpIHtcbiAgICAgIHRoaXMucm90YXRpb25EaXIgPSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3RhdGlvbkRpciA9IDE7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU2NhbGUoKSB7XG4gICAgaWYgKHRoaXMuc2NhbGUgPD0gMSkge1xuICAgICAgdGhpcy5zY2FsZURpciA9IFwiaW5jcmVhc2luZ1wiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY2FsZSA+PSAxLjUpIHtcbiAgICAgIHRoaXMuc2NhbGVEaXIgPSBcImRlY3JlYXNpbmdcIjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY2FsZURpciA9PT0gXCJpbmNyZWFzaW5nXCIpIHtcbiAgICAgIHRoaXMuc2NhbGUgKz0gMC4wNDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NhbGVEaXIgPT09IFwiZGVjcmVhc2luZ1wiKSB7XG4gICAgICB0aGlzLnNjYWxlIC09IDAuMDQ7XG4gICAgfVxuICB9XG5cbiAgY291bnREZWNpbWFscyhudW0pIHtcbiAgICBpZiAoTWF0aC5mbG9vcihudW0pICE9PSBudW0pIHtcbiAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoIHx8IDA7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgYW5pbWF0ZSh0aW1lc3RhbXApIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgbGV0IGRlbHRhVGltZSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWU7XG5cbiAgICB0aGlzLmRlbHRhVGltZSA9IGRlbHRhVGltZTtcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuXG4gICAgaWYgKHRoaXMuc3RhcnRUaW1lKSB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgdGhpcy50aW1lID0gTWF0aC5yb3VuZCgoKG5vdyAtIHRoaXMuc3RhcnRUaW1lKSAvIDEwMDApICogMTAwKSAvIDEwMDtcbiAgXG4gICAgICBpZiAodGhpcy5jb3VudERlY2ltYWxzKHRoaXMudGltZSkgPT09IDApIHtcbiAgICAgICAgdGhpcy50aW1lID0gYCR7dGhpcy50aW1lfS4wMGA7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY291bnREZWNpbWFscyh0aGlzLnRpbWUpID09PSAxKSB7XG4gICAgICAgIHRoaXMudGltZSA9IGAke3RoaXMudGltZX0wYDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdG9wd2F0Y2guYW5pbWF0ZSh0aGlzLnRpbWUpO1xuICAgIH1cblxuICAgIHRoaXMuc2VjdGlvbnMuYW5pbWF0ZShkZWx0YVRpbWUpO1xuICAgIHRoaXMuaGV4YWdvbi5hbmltYXRlKGRlbHRhVGltZSwgdGhpcy5zY2FsZSwgdGhpcy5yb3RhdGlvbkRpcik7XG4gICAgdGhpcy5jdXJzb3IuYW5pbWF0ZSh0aGlzLmN0eCwgdGhpcy5zY2FsZSk7XG4gICAgdGhpcy53YWxscy5hbmltYXRlKHRoaXMuY3R4LCB0aGlzLnNjYWxlKTtcblxuICAgIGlmICh0aGlzLmdhbWVPdmVyKCkgPT09IHRydWUpIHtcbiAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5nYW1lT3ZlckF1ZGlvLnBsYXkoKTtcbiAgICAgIHRoaXMubXVzaWMucGF1c2UoKTtcbiAgICAgIHRoaXMuc3RvcHdhdGNoLnN0b3AoKTtcbiAgICAgIHRoaXMuaGV4YWdvbi5zdG9wKCk7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMucG9wdWxhdGVXYWxscyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3Vyc29yRGlyID09PSAnY2xvY2t3aXNlJykge1xuICAgICAgdGhpcy5jdXJzb3IucGl2b3RDbG9ja3dpc2UoZGVsdGFUaW1lLCB0aGlzLmN0eCwgdGhpcy5zY2FsZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnNvckRpciA9PT0gJ2NvdW50ZXJDbG9ja3dpc2UnKSB7XG4gICAgICB0aGlzLmN1cnNvci5waXZvdENvdW50ZXJDbG9ja3dpc2UoZGVsdGFUaW1lLCB0aGlzLmN0eCwgdGhpcy5zY2FsZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGltZSAmJiB0aGlzLnRpbWUgPiA0MSkge1xuICAgICAgdGhpcy51cGRhdGVTY2FsZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJ1bm5pbmcgPT09IHRydWUpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyB8fCBldmVudC5rZXlDb2RlID09PSA2NSkge1xuICAgICAgICBpZiAodGhhdC5ydW5uaW5nKSB7XG4gICAgICAgICAgdGhhdC5jdXJzb3JEaXIgPSAnY291bnRlckNsb2Nrd2lzZSc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgfHwgZXZlbnQua2V5Q29kZSA9PT0gNjgpIHtcbiAgICAgICAgaWYgKHRoYXQucnVubmluZykge1xuICAgICAgICAgIHRoYXQuY3Vyc29yRGlyID0gJ2Nsb2Nrd2lzZSc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgdGhhdC5wbGF5KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4gKHRoYXQuY3Vyc29yRGlyID0gJycpKTtcbiAgfVxuXG4gIGdhbWVPdmVyKCkge1xuICAgIHJldHVybiB0aGlzLndhbGxzLmNvbGxpZGVzV2l0aCh0aGlzLmN1cnNvci50aXAodGhpcy5zY2FsZSksIHRoaXMuc2NhbGUpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lja2VkSGV4YWdvbjsiLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXG4gICAgW1wiIzAwMDAwMFwiLCBcIiMwOGZiN2JcIl0sXG4gICAgW1wiIzAwMDAwMFwiLCBcIiNlZjg3MDhcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiNjMzFlOWVcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiM2YjRhY2FcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiMyYjZhZWFcIl0sXG4gIF0sXG4gIFNJWkU6IDUwLFxufVxuXG5cbmNsYXNzIEhleGFnb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLmFuZ2xlID0gMDtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCwgc2NhbGUpIHtcbiAgICBzY2FsZSA9IHNjYWxlIHx8IDE7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy54LCAtdGhpcy55KTtcblxuICAgIGxldCBoZXgxID0gMDtcbiAgICBmb3IgKGhleDE7IGhleDEgPD0gNjsgaGV4MSsrKSB7XG4gICAgICBjdHgubGluZVRvKHRoaXMueCArIChERUZBVUxUUy5TSVpFICogc2NhbGUpICogTWF0aC5jb3MoaGV4MSAqIDIgKiBNYXRoLlBJIC8gNiksIHRoaXMueSArIChERUZBVUxUUy5TSVpFICogc2NhbGUpICogTWF0aC5zaW4oaGV4MSAqIDIgKiBNYXRoLlBJIC8gNikpO1xuICAgIH1cblxuICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMV07XG4gICAgY3R4LmZpbGwoKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGxldCBoZXgyID0gMDtcbiAgICBmb3IgKGhleDI7IGhleDIgPD0gNjsgaGV4MisrKSB7XG4gICAgICBjdHgubGluZVRvKHRoaXMueCArICg0NCAqIHNjYWxlKSAqIE1hdGguY29zKGhleDIgKiAyICogTWF0aC5QSSAvIDYpLCB0aGlzLnkgKyAoNDQgKiBzY2FsZSkgKiBNYXRoLnNpbihoZXgyICogMiAqIE1hdGguUEkgLyA2KSk7XG4gICAgfVxuXG4gICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVswXTtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgYW5pbWF0ZShkZWx0YVRpbWUsIHNjYWxlLCByb3RhdGlvbkRpcikge1xuICAgIHRoaXMuYW5nbGUgPSAyMCAvIGRlbHRhVGltZSAqIHJvdGF0aW9uRGlyO1xuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCwgc2NhbGUpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLmFuZ2xlID0gMDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZXhhZ29uOyIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcbiAgICBbXCIjMDAwMDAwXCIsIFwiIzAyMjcxM1wiXSxcbiAgICBbXCIjMDAwMDAwXCIsIFwiIzI2MTUwMVwiXSxcbiAgICBbXCIjZmZmZmZmXCIsIFwiI2Y1ZGNmMFwiXSxcbiAgICBbXCIjZmZmZmZmXCIsIFwiI2U3ZTNmN1wiXSxcbiAgICBbXCIjZmZmZmZmXCIsIFwiI2RkZThmY1wiXSxcbiAgXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbnMge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmdsZSA9IC02MDtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIFxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGxldCBwcmV2Q29vcmQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA2OyBpKyspIHtcbiAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICsgNjA7XG4gICAgICB9XG5cbiAgICAgIGxldCB4MiwgeTIsIGxlbmd0aDtcblxuICAgICAgLy8gbGVuZ3RoID0gTWF0aC5mbG9vcihNYXRoLnNxcnQoMykgKiB0aGlzLnggKiAyKTtcbiAgICAgIGxlbmd0aCA9IDE1MDA7XG4gICAgICB4MiA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIGxlbmd0aDtcbiAgICAgIHkyID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogbGVuZ3RoO1xuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcbiAgICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICAgIGlmIChwcmV2Q29vcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdHgubGluZVRvKC4uLnByZXZDb29yZCk7XG4gICAgICB9XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1baSAlIDJdO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVtpICUgMl07XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBwcmV2Q29vcmQgPSBbeDIsIHkyXTtcbiAgICB9XG4gIH1cblxuICBhbmltYXRlKGRlbHRhVGltZSkge1xuICAgIC8vIHRoaXMuYW5nbGUgKz0gKDEgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH0gIFxufSIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcbiAgICBbXCIjMDAwMDAwXCIsIFwiI2ZmZmZmZlwiXSxcbiAgICBbXCIjZmZmZmZmXCIsIFwiI2VmODcwOFwiXSxcbiAgICBbXCIjZmZmZmZmXCIsIFwiIzZiNGFjYVwiXSxcbiAgICBbXCIjZmZmZmZmXCIsIFwiIzJiNmFlYVwiXSxcbiAgXSxcbn1cblxuY2xhc3MgU3RvcHdhdGNoIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMudGltZSA9IFwiMC4wMFwiO1xuXG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IHN0b3B3YXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdG9wd2F0Y2hcIik7XG4gICAgc3RvcHdhdGNoWzBdLmlubmVySFRNTCA9IFwiXCI7XG4gICAgc3RvcHdhdGNoWzBdLmlubmVySFRNTCArPSBgJHt0aGlzLnRpbWV9YDtcbiAgfVxuXG4gIGFuaW1hdGUodGltZSkge1xuICAgIHRoaXMudGltZSA9IHRpbWU7XG5cbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBsZXQgdGltZSA9IHRoaXMudGltZTtcbiAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3B3YXRjaDsiLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXG4gICAgW1wiIzA4ZmI3YlwiLCAncmdiYSgwLDAsMCwwKSddLFxuICAgIFtcIiNlZjg3MDhcIiwgJ3JnYmEoMCwwLDAsMCknXSxcbiAgICBbXCIjYzMxZTllXCIsICdyZ2JhKDAsMCwwLDApJ10sXG4gICAgW1wiIzZiNGFjYVwiLCAncmdiYSgwLDAsMCwwKSddLFxuICAgIFtcIiMyYjZhZWFcIiwgJ3JnYmEoMCwwLDAsMCknXSxcbiAgXSxcbiAgLy8gc2Vjb25kIGNvbG9yIGlzIHRyYW5zcGFyZW50XG4gIFNJWkU6IDQwLFxuICBNQVg6IDEwMDAsXG4gIC8vIGNvcnJlc3BvbmRzIHcvIHRoZSBzZWN0aW9ucycgbGVuZ3Roc1xufTtcblxuY2xhc3MgV2FsbHMge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmdsZSA9IC02MDtcbiAgICB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgPSAtNjA7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcblxuICAgIHRoaXMuY29tYm9zID0gW1xuICAgICAgW3RydWUsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlXSxcbiAgICAgIFt0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZV0sXG4gICAgICBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWVdLFxuICAgICAgW3RydWUsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlXSxcbiAgICAgIFt0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0sXG4gICAgICBbZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIHRydWVdLFxuICAgICAgW3RydWUsIGZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2VdLFxuICAgICAgW2ZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWVdLFxuICAgICAgW3RydWUsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZV0sXG4gICAgXVxuXG4gICAgdGhpcy53YWxsQ29tYm9zID0gW107XG4gIH1cblxuICBkcmF3IChjdHgsIGNvbWJvKSB7XG4gICAgbGV0IHByZXZDb29yZCwgd2FsbHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAtMTsgaSA8PSA1OyBpKyspIHtcbiAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSArIDYwO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5hbmdsZSA+PSAzNjApIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgJSAzNjA7XG4gICAgICB9XG5cbiAgICAgIGxldCB4MiwgeTIsIGF4LCBheSwgYngsIGJ5O1xuICAgICAgLy8gb3V0dGVyIHRyYXBlem9pZCBjb3JuZXJcbiAgICAgIHgyID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogREVGQVVMVFMuTUFYO1xuICAgICAgeTIgPSB0aGlzLnkgKyBNYXRoLnNpbihNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBERUZBVUxUUy5NQVg7XG5cbiAgICAgIC8vIGlubmVyIHRhcGV6b2lkIHBvaW50IG9uIGZpcnN0IGxpbmUgXG4gICAgICBieCA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIChERUZBVUxUUy5NQVggLSBERUZBVUxUUy5TSVpFKTtcbiAgICAgIGJ5ID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogKERFRkFVTFRTLk1BWCAtIERFRkFVTFRTLlNJWkUpOyBcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyhieCwgYnkpO1xuICAgICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuXG4gICAgICBpZiAocHJldkNvb3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3R4LmxpbmVUbyguLi5wcmV2Q29vcmQpO1xuXG4gICAgICAgIGF4ID0gcHJldkNvb3JkWzBdICsgTWF0aC5jb3MoTWF0aC5QSSAqICh0aGlzLmFuZ2xlICsgMTIwKSAvIDE4MCkgKiBERUZBVUxUUy5TSVpFO1xuICAgICAgICBheSA9IHByZXZDb29yZFsxXSArIE1hdGguc2luKE1hdGguUEkgKiAodGhpcy5hbmdsZSArIDEyMCkgLyAxODApICogREVGQVVMVFMuU0laRTtcblxuICAgICAgICBjdHgubGluZVRvKGF4LCBheSk7XG4gICAgICAgIGN0eC5saW5lVG8oYngsIGJ5KTtcbiAgICAgIH1cblxuICAgICAgICBpZiAoaSA9PT0gLTEgfHwgY29tYm9baV0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzFdO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMV07XG4gICAgICAgIH0gZWxzZSBpZiAoY29tYm9baV0pIHtcbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMF07XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1syXVswXTtcbiAgICAgICAgfVxuXG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBwcmV2Q29vcmQgPSBbeDIsIHkyXTtcblxuICAgICAgbGV0IHdhbGwgPSB7XG4gICAgICAgIGxlbmd0aDogMTAwMCxcbiAgICAgICAgaXNXYWxsOiAnJyxcbiAgICAgIH07XG5cbiAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICB3YWxsLmlzV2FsbCA9ICdsaW5lJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhbGwuaXNXYWxsID0gY29tYm9baV07XG4gICAgICB9XG5cbiAgICAgIHdhbGxzLnB1c2god2FsbCk7XG4gICAgfVxuXG4gICAgdGhpcy53YWxsQ29tYm9zLnB1c2god2FsbHMpO1xuICB9XG5cbiAgY29sbGlkZXNXaXRoKGN1cnNvclBvcywgc2NhbGUpIHtcbiAgICBpZiAodGhpcy53YWxsQ29tYm9zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLndhbGxDb21ib3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IHdhbGxzID0gdGhpcy53YWxsQ29tYm9zW2pdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgd2FsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgd2FsbCA9IHdhbGxzW2ldO1xuICBcbiAgICAgICAgICBpZiAod2FsbC5pc1dhbGwpIHtcbiAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IGN1cnNvclBvcztcbiAgICAgICAgICAgIGNvbnN0IFtheCwgYXldID0gd2FsbC5wb2ludDE7XG4gICAgICAgICAgICBjb25zdCBbYngsIGJ5XSA9IHdhbGwucG9pbnQyO1xuICBcbiAgICAgICAgICAgIGxldCBsZW5ndGgxID0gdGhpcy5nZXREaXN0YW5jZSh4LCB5LCBheCwgYXkpO1xuICAgICAgICAgICAgbGV0IGxlbmd0aDIgPSB0aGlzLmdldERpc3RhbmNlKHgsIHksIGJ4LCBieSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChsZW5ndGgxICsgbGVuZ3RoMiA8PSAod2FsbC5sZW5ndGggKiBzY2FsZSktMzkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXREaXN0YW5jZShheCwgYXksIGJ4LCBieSkge1xuICAgIGNvbnN0IHggPSBheCAtIGJ4O1xuICAgIGNvbnN0IHkgPSBheSAtIGJ5O1xuXG4gICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgfVxuXG4gIHBvcHVsYXRlV2FsbHMoKSB7XG4gICAgbGV0IGNvbWJvc0lkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29tYm9zLmxlbmd0aCk7XG4gICAgbGV0IGNvbWJvID0gdGhpcy5jb21ib3NbY29tYm9zSWR4XTtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCwgY29tYm8pO1xuICB9XG5cbiAgYW5pbWF0ZShjdHgsIHNjYWxlKSB7XG4gICAgaWYgKHRoaXMud2FsbENvbWJvcy5sZW5ndGggIT09IDAgJiYgdGhpcy53YWxsQ29tYm9zW3RoaXMud2FsbENvbWJvcy5sZW5ndGggLSAxXS5sZW5ndGggJSA3ID09PSAwKSB7XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53YWxsQ29tYm9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB3YWxscyA9IHRoaXMud2FsbENvbWJvc1tpXTtcblxuICAgICAgICBpZiAod2FsbHNbMF0ubGVuZ3RoID09PSA3MCkge1xuICAgICAgICAgIHRoaXMud2FsbENvbWJvcy51bnNoaWZ0KCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJldkNvb3JkO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2FsbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgd2FsbCA9IHdhbGxzW2pdO1xuXG4gICAgICAgICAgaWYgKHdhbGwuaXNXYWxsICE9PSAnbGluZScpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSA9IHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSArIDYwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmFuaW1hdGVXYWxsQW5nbGUgPj0gMzYwKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgPSB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgJSAzNjA7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBsZXQgeDIsIHkyLCBheCwgYXksIGJ4LCBieSwgbmV3TGVuZ3RoO1xuICBcbiAgICAgICAgICBuZXdMZW5ndGggPSB3YWxsLmxlbmd0aCAtIDU7XG4gIFxuICAgICAgICAgIHgyID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAvIDE4MCkgKiAobmV3TGVuZ3RoICogc2NhbGUpO1xuICAgICAgICAgIHkyID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAvIDE4MCkgKiAobmV3TGVuZ3RoICogc2NhbGUpO1xuICBcbiAgICAgICAgICAvLyB0YXBlem9pZCBwb2ludCBvbiBmaXJzdCBsaW5lIFxuICAgICAgICAgIGJ4ID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAvIDE4MCkgKiAoKG5ld0xlbmd0aCAqIHNjYWxlKSAtIERFRkFVTFRTLlNJWkUpO1xuICAgICAgICAgIGJ5ID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAvIDE4MCkgKiAoKG5ld0xlbmd0aCAqIHNjYWxlKSAtIERFRkFVTFRTLlNJWkUpO1xuICBcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY3R4Lm1vdmVUbyhieCwgYnkpO1xuICAgICAgICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgXG4gICAgICAgICAgaWYgKHByZXZDb29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjdHgubGluZVRvKC4uLnByZXZDb29yZCk7XG4gIFxuICAgICAgICAgICAgYXggPSBwcmV2Q29vcmRbMF0gKyBNYXRoLmNvcyhNYXRoLlBJICogKHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSArIDEyMCkgLyAxODApICogREVGQVVMVFMuU0laRTtcbiAgICAgICAgICAgIGF5ID0gcHJldkNvb3JkWzFdICsgTWF0aC5zaW4oTWF0aC5QSSAqICh0aGlzLmFuaW1hdGVXYWxsQW5nbGUgKyAxMjApIC8gMTgwKSAqIERFRkFVTFRTLlNJWkU7XG4gIFxuICAgICAgICAgICAgY3R4LmxpbmVUbyhheCwgYXkpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhieCwgYnkpO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgaWYgKHdhbGwuaXNXYWxsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMF07XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzBdO1xuICAgICAgICAgIH0gZWxzZSBpZiAod2FsbC5pc1dhbGwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMl1bMV07XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzJdWzFdO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gIFxuICAgICAgICAgIHByZXZDb29yZCA9IFt4MiwgeTJdO1xuICBcbiAgICAgICAgICB0aGlzLndhbGxDb21ib3NbaV1bal0gPSB7XG4gICAgICAgICAgICBsZW5ndGg6IG5ld0xlbmd0aCxcbiAgICAgICAgICAgIGlzV2FsbDogd2FsbC5pc1dhbGwsXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5hbmltYXRlV2FsbEFuZ2xlLFxuICAgICAgICAgICAgcG9pbnQxOiBbYXgsIGF5XSxcbiAgICAgICAgICAgIHBvaW50MjogW2J4LCBieV0sXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxzOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=