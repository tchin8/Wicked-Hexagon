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
  } // get location of cursor tip
  // used in game script, check if tip collided w/ any walls


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
      ctx.fillStyle = DEFAULTS.COLORS[4];
      ctx.fill();
      ctx.translate(this.cursorX, this.cursorY);
      ctx.rotate(-this.angle * Math.PI / 180);
      ctx.translate(-this.cursorX, -this.cursorY);
    }
  }, {
    key: "animate",
    value: function animate(ctx, scale) {
      this.draw(ctx, scale);
    } // invoked in game, depends on user's keydown - right, D

  }, {
    key: "pivotClockwise",
    value: function pivotClockwise(deltaTime, ctx, scale) {
      this.angle += 150 / deltaTime;
      this.draw(ctx, scale);
    } // invoked in game, depends on user's keydown - left, A

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
// keep for now, to implement color gradients 

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
        ctx.strokeStyle = "#2b6aea";
        ctx.stroke();
        ctx.fill();
        ctx.font = "30px Squada One";
        ctx.fillStyle = "#ffffff";
        ctx.fillText("SPACE TO PLAY", that.x / 2 - 80, that.y / 2 - 160);
        ctx.fillText("LEFT/RIGHT OR A/D", that.x / 2 - 96, that.y / 2 - 120);
        ctx.fillText("TO AVOID WALLS", that.x / 2 - 86, that.y / 2 - 90);
      });
    } // show game over text box

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
      this.rotationTimeout = setTimeout(function () {
        return _this.updateRotation();
      }, 10000);
      this.music.load();
      this.music.play();
    } // changes rotation direction

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
    } // invoked in animate, updates scale of walls and hexagon
    // for the pulse effect at 40+ secs

  }, {
    key: "updateScale",
    value: function updateScale() {
      if (this.scale <= 1) {
        this.scaleDir = "increasing";
      } else if (this.scale >= 1.3) {
        this.scaleDir = "decreasing";
      }

      if (this.scaleDir === "increasing") {
        this.scale += 0.025;
      } else if (this.scaleDir === "decreasing") {
        this.scale -= 0.025;
      }
    }
  }, {
    key: "countDecimals",
    value: function countDecimals(num) {
      if (Math.floor(num) !== num) {
        return num.toString().split(".")[1].length || 0;
      }

      return 0;
    } // provides the scale, rotationDir and time to other scripts

  }, {
    key: "animate",
    value: function animate(timestamp) {
      // clears canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      var deltaTime = timestamp - this.lastTime;
      this.deltaTime = deltaTime;
      this.lastTime = timestamp; // sets startTime and keeps track of time elapsed

      this.setTime(); // invoke animate fx within other scripts to begin game

      this.sections.animate(deltaTime);
      this.hexagon.animate(deltaTime, this.scale, this.rotationDir);
      this.cursor.animate(this.ctx, this.scale);
      this.walls.animate(this.ctx, this.scale); // sets cursor dir

      this.setDir(deltaTime); // conditional that ends game if cursor collides w/ a wall

      this.gameOver(); // add pulsating effect when the beat drops :) 

      if (this.time && this.time > 41.2) {
        this.updateScale();
      }

      if (this.running === true) {
        requestAnimationFrame(this.animate.bind(this));
      }
    } // invoked in animate

  }, {
    key: "setDir",
    value: function setDir(deltaTime) {
      if (this.cursorDir === "clockwise") {
        this.cursor.pivotClockwise(deltaTime, this.ctx, this.scale);
      } else if (this.cursorDir === "counterClockwise") {
        this.cursor.pivotCounterClockwise(deltaTime, this.ctx, this.scale);
      }
    } // invoked in animate

  }, {
    key: "setTime",
    value: function setTime() {
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
          if (!that.running) {
            that.play();
          }
        }
      });
      document.addEventListener("keyup", function () {
        return that.cursorDir = '';
      });
    } // invoked in animate

  }, {
    key: "gameOver",
    value: function gameOver() {
      if (this.walls.collidesWith(this.cursor.tip(this.scale), this.scale)) {
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

      ;
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

      ctx.fillStyle = DEFAULTS.COLORS[4][1];
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      var hex2 = 0;

      for (hex2; hex2 <= 6; hex2++) {
        ctx.lineTo(this.x + 44 * scale * Math.cos(hex2 * 2 * Math.PI / 6), this.y + 44 * scale * Math.sin(hex2 * 2 * Math.PI / 6));
      }

      ctx.fillStyle = DEFAULTS.COLORS[4][0];
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

        ctx.strokeStyle = DEFAULTS.COLORS[4][i % 2];
        ctx.fillStyle = DEFAULTS.COLORS[4][i % 2];
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
            by = void 0; // outer trapezoid corner

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
          ctx.strokeStyle = DEFAULTS.COLORS[4][1];
          ctx.fillStyle = DEFAULTS.COLORS[4][1];
        } else if (combo[i]) {
          ctx.strokeStyle = DEFAULTS.COLORS[4][0];
          ctx.fillStyle = DEFAULTS.COLORS[4][0];
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
              ctx.strokeStyle = DEFAULTS.COLORS[4][0];
              ctx.fillStyle = DEFAULTS.COLORS[4][0];
            } else if (wall.isWall === false) {
              ctx.strokeStyle = DEFAULTS.COLORS[4][1];
              ctx.fillStyle = DEFAULTS.COLORS[4][1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJXaWNrZWRIZXhhZ29uIiwiREVGQVVMVFMiLCJDT0xPUlMiLCJSQURJVVMiLCJTSVpFIiwiQ3Vyc29yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImFuZ2xlIiwicm90YXRlQW5nbGUiLCJ4IiwieSIsImRyYXciLCJzY2FsZSIsIk1hdGgiLCJjb3MiLCJQSSIsInNpbiIsImN1cnNvclgiLCJjdXJzb3JZIiwidHJhbnNsYXRlIiwicm90YXRlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiZmlsbFN0eWxlIiwiZmlsbCIsImRlbHRhVGltZSIsImRpbWVuc2lvbnMiLCJydW5uaW5nIiwic2NhbGVEaXIiLCJyb3RhdGlvbkRpciIsInJlZ2lzdGVyRXZlbnRzIiwic2VjdGlvbnMiLCJTZWN0aW9ucyIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInN0b3B3YXRjaCIsIlN0b3B3YXRjaCIsImhleGFnb24iLCJIZXhhZ29uIiwiY3Vyc29yIiwiY3Vyc29yRGlyIiwibXVzaWMiLCJBdWRpbyIsImJlZ2luQXVkaW8iLCJnYW1lT3ZlckF1ZGlvIiwiYmVmb3JlR2FtZSIsInRoYXQiLCJmIiwiRm9udEZhY2UiLCJsb2FkIiwidGhlbiIsInJlY3QiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImZvbnQiLCJmaWxsVGV4dCIsImRpdiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibGFzdFRpbWUiLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZSIsIndhbGxzIiwiV2FsbHMiLCJwbGF5IiwicG9wdWxhdGVXYWxscyIsInNldEludGVydmFsIiwic3RhcnRUaW1lIiwicm90YXRpb25UaW1lb3V0IiwidXBkYXRlUm90YXRpb24iLCJyYW5kIiwiZmxvb3IiLCJyYW5kb20iLCJyb3RhdGlvbkludGVydmFsIiwibnVtIiwidG9TdHJpbmciLCJzcGxpdCIsImxlbmd0aCIsImNsZWFyUmVjdCIsInNldFRpbWUiLCJzZXREaXIiLCJnYW1lT3ZlciIsInRpbWUiLCJ1cGRhdGVTY2FsZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJwaXZvdENsb2Nrd2lzZSIsInBpdm90Q291bnRlckNsb2Nrd2lzZSIsIm5vdyIsInJvdW5kIiwiY291bnREZWNpbWFscyIsImV2ZW50Iiwia2V5Q29kZSIsImNvbGxpZGVzV2l0aCIsInRpcCIsInBhdXNlIiwic3RvcCIsImNsZWFySW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJhZnRlckdhbWUiLCJoZXgxIiwiaGV4MiIsInByZXZDb29yZCIsImkiLCJ4MiIsInkyIiwidW5kZWZpbmVkIiwiaW5uZXJIVE1MIiwiTUFYIiwiYW5pbWF0ZVdhbGxBbmdsZSIsImNvbWJvcyIsIndhbGxDb21ib3MiLCJjb21ibyIsImF4IiwiYXkiLCJieCIsImJ5IiwiY2xvc2VQYXRoIiwid2FsbCIsImlzV2FsbCIsInB1c2giLCJjdXJzb3JQb3MiLCJqIiwicG9pbnQxIiwicG9pbnQyIiwibGVuZ3RoMSIsImdldERpc3RhbmNlIiwibGVuZ3RoMiIsInNxcnQiLCJjb21ib3NJZHgiLCJ1bnNoaWZ0IiwibmV3TGVuZ3RoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7O0FBRUE7QUFJQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN4RCxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csb0JBQVQsQ0FBOEIsUUFBOUIsRUFBd0MsQ0FBeEMsQ0FBakI7QUFDQUQsVUFBUSxDQUFDRSxNQUFULEdBQWtCQyxNQUFNLENBQUNDLFdBQXpCO0FBQ0FKLFVBQVEsQ0FBQ0ssS0FBVCxHQUFpQkYsTUFBTSxDQUFDRyxVQUF4QjtBQUVBLE1BQUlDLHFEQUFKLENBQWtCUCxRQUFsQjtBQUNELENBTkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSxJQUFN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aGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFdpY2tlZEhleGFnb24gZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuLy8gaW1wb3J0IFdpY2tlZEhleGFnb24gZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICBjYW52YXNFbC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIGNhbnZhc0VsLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgbmV3IFdpY2tlZEhleGFnb24oY2FudmFzRWwpO1xufSk7XG4iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXG4gICAgXCIjMDhmYjdiXCIsXG4gICAgXCIjZWY4NzA4XCIsXG4gICAgXCIjYzMxZTllXCIsXG4gICAgXCIjNmI0YWNhXCIsXG4gICAgXCIjMmI2YWVhXCIsXG4gIF0sXG4gIFJBRElVUzogNjAsXG4gIFNJWkU6IDUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJzb3Ige1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmdsZSA9IDMzMDtcbiAgICB0aGlzLnJvdGF0ZUFuZ2xlID0gMDtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIC8vIGdldCBsb2NhdGlvbiBvZiBjdXJzb3IgdGlwXG4gIC8vIHVzZWQgaW4gZ2FtZSBzY3JpcHQsIGNoZWNrIGlmIHRpcCBjb2xsaWRlZCB3LyBhbnkgd2FsbHNcbiAgdGlwKHNjYWxlKSB7XG4gICAgbGV0IHggPVxuICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyICtcbiAgICAgIE1hdGguY29zKCh0aGlzLmFuZ2xlICogTWF0aC5QSSkgLyAxODApICpcbiAgICAgICAgKERFRkFVTFRTLlJBRElVUyAqIHNjYWxlICsgREVGQVVMVFMuU0laRSk7XG4gICAgbGV0IHkgPVxuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArXG4gICAgICBNYXRoLnNpbigodGhpcy5hbmdsZSAqIE1hdGguUEkpIC8gMTgwKSAqXG4gICAgICAgIChERUZBVUxUUy5SQURJVVMgKiBzY2FsZSArIERFRkFVTFRTLlNJWkUpO1xuICAgIHJldHVybiBbeCwgeV07XG4gIH1cblxuICBkcmF3KGN0eCwgc2NhbGUpIHtcbiAgICBzY2FsZSA9IHNjYWxlIHx8IDE7XG5cbiAgICB0aGlzLmN1cnNvclggPVxuICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyICtcbiAgICAgIE1hdGguY29zKCh0aGlzLmFuZ2xlICogTWF0aC5QSSkgLyAxODApICogKERFRkFVTFRTLlJBRElVUyAqIHNjYWxlKTtcbiAgICB0aGlzLmN1cnNvclkgPVxuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArXG4gICAgICBNYXRoLnNpbigodGhpcy5hbmdsZSAqIE1hdGguUEkpIC8gMTgwKSAqIChERUZBVUxUUy5SQURJVVMgKiBzY2FsZSk7XG5cbiAgICBjdHgudHJhbnNsYXRlKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICBjdHgucm90YXRlKCh0aGlzLmFuZ2xlICogTWF0aC5QSSkgLyAxODApO1xuICAgIGN0eC50cmFuc2xhdGUoLXRoaXMuY3Vyc29yWCwgLXRoaXMuY3Vyc29yWSk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLmN1cnNvclggLSBERUZBVUxUUy5TSVpFLCB0aGlzLmN1cnNvclkgLSBERUZBVUxUUy5TSVpFKTtcbiAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCArIERFRkFVTFRTLlNJWkUsIHRoaXMuY3Vyc29yWSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclggLSBERUZBVUxUUy5TSVpFLCB0aGlzLmN1cnNvclkgKyBERUZBVUxUUy5TSVpFKTtcbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzRdO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjdHgudHJhbnNsYXRlKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICBjdHgucm90YXRlKCgtdGhpcy5hbmdsZSAqIE1hdGguUEkpIC8gMTgwKTtcbiAgICBjdHgudHJhbnNsYXRlKC10aGlzLmN1cnNvclgsIC10aGlzLmN1cnNvclkpO1xuICB9XG5cbiAgYW5pbWF0ZShjdHgsIHNjYWxlKSB7XG4gICAgdGhpcy5kcmF3KGN0eCwgc2NhbGUpO1xuICB9XG5cbiAgLy8gaW52b2tlZCBpbiBnYW1lLCBkZXBlbmRzIG9uIHVzZXIncyBrZXlkb3duIC0gcmlnaHQsIERcbiAgcGl2b3RDbG9ja3dpc2UoZGVsdGFUaW1lLCBjdHgsIHNjYWxlKSB7XG4gICAgdGhpcy5hbmdsZSArPSAxNTAgLyBkZWx0YVRpbWU7XG4gICAgdGhpcy5kcmF3KGN0eCwgc2NhbGUpO1xuICB9XG5cbiAgLy8gaW52b2tlZCBpbiBnYW1lLCBkZXBlbmRzIG9uIHVzZXIncyBrZXlkb3duIC0gbGVmdCwgQVxuICBwaXZvdENvdW50ZXJDbG9ja3dpc2UoZGVsdGFUaW1lLCBjdHgsIHNjYWxlKSB7XG4gICAgdGhpcy5hbmdsZSAtPSAxNTAgLyBkZWx0YVRpbWU7XG4gICAgdGhpcy5kcmF3KGN0eCwgc2NhbGUpO1xuICB9XG59IiwiaW1wb3J0IFN0b3B3YXRjaCBmcm9tICcuL3N0b3B3YXRjaCc7XG5pbXBvcnQgSGV4YWdvbiBmcm9tICcuL2hleGFnb24nO1xuaW1wb3J0IEN1cnNvciBmcm9tICcuL2N1cnNvcic7XG5pbXBvcnQgU2VjdGlvbnMgZnJvbSAnLi9zZWN0aW9ucyc7XG5pbXBvcnQgV2FsbHMgZnJvbSAnLi93YWxscyc7XG4vLyBpbXBvcnQgdGhlIG90aGVyIHNjcmlwdHNcblxuXG4vLyBrZWVwIGZvciBub3csIHRvIGltcGxlbWVudCBjb2xvciBncmFkaWVudHMgXG5jb25zdCBDT0xPUlMgPSBbXG4gIC8vIGJhc2UsIHNlY3Rpb25zLCBjdXJzb3Ivd2FsbHMgICB+IC8vIGJsYWNrIHRvIGNvbG9yIC8vIHdoaXRlIHRvIGNvbG9yXG4gIFtcIiMwMDAwMDBcIiwgXCIjMDIyNzEzXCIsIFwiIzA4ZmI3YlwiXSwgICAgLy8gYmxhY2svZ3JlZW5cbiAgW1wiIzAwMDAwMFwiLCBcIiMyNjE1MDFcIiwgXCIjZWY4NzA4XCJdLCAgICAvLyBibGFjay9vcmFuZ2VcbiAgW1wiI2ZmZmZmZlwiLCBcIiNmNWRjZjBcIiwgXCIjYzMxZTllXCJdLCAgICAvLyB3aGl0ZS9waW5rXG4gIFtcIiNmZmZmZmZcIiwgXCIjZTdlM2Y3XCIsIFwiIzZiNGFjYVwiXSwgICAgLy8gd2hpdGUvcHVycGxlXG4gIFtcIiNmZmZmZmZcIiwgXCIjZGRlOGZjXCIsIFwiIzJiNmFlYVwiXSwgICAgLy8gd2hpdGUvYmx1ZVxuXVxuXG5jbGFzcyBXaWNrZWRIZXhhZ29uIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgdGhpcy5zY2FsZURpciA9IFwiXCI7XG4gICAgdGhpcy5yb3RhdGlvbkRpciA9IDE7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG5cbiAgICB0aGlzLnNlY3Rpb25zID0gbmV3IFNlY3Rpb25zKGNhbnZhcyk7XG4gICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB0aGlzLnN0b3B3YXRjaCA9IG5ldyBTdG9wd2F0Y2goY2FudmFzKTtcbiAgICB0aGlzLmhleGFnb24gPSBuZXcgSGV4YWdvbihjYW52YXMpO1xuICAgIHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcihjYW52YXMpO1xuXG4gICAgdGhpcy5jdXJzb3JEaXIgPSAnJztcblxuICAgIHRoaXMubXVzaWMgPSBuZXcgQXVkaW8oJ2Fzc2V0cy9zb3VuZHMvQ3VzcC5tcDMnKTtcbiAgICB0aGlzLmJlZ2luQXVkaW8gPSBuZXcgQXVkaW8oJ2Fzc2V0cy9zb3VuZHMvYmVnaW4ubXAzJyk7XG4gICAgdGhpcy5nYW1lT3ZlckF1ZGlvID0gbmV3IEF1ZGlvKCdhc3NldHMvc291bmRzL2dhbWVfb3Zlci5tcDMnKTtcblxuICAgIHRoaXMuYmVmb3JlR2FtZSh0aGlzLmN0eCk7XG4gIH1cblxuICBiZWZvcmVHYW1lKGN0eCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcblxuICAgIGxldCBmID0gbmV3IEZvbnRGYWNlKCdTcXVhZGEgT25lJywgJ3VybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvc3F1YWRhb25lL3Y4L0JDYXNxWjhYc09yeDRtY09rNk10YWFjMldSSm5EZ28ud29mZjIpJyk7XG5cbiAgICBmLmxvYWQoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5yZWN0KHRoYXQueC8yIC0gMTIwLCB0aGF0LnkvMiAtIDIwMCwgMjQwLCAxMjApO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMmI2YWVhXCI7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LmZvbnQgPSBcIjMwcHggU3F1YWRhIE9uZVwiO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgY3R4LmZpbGxUZXh0KFwiU1BBQ0UgVE8gUExBWVwiLCB0aGF0LnggLyAyIC0gODAsIHRoYXQueSAvIDIgLSAxNjApO1xuICAgICAgY3R4LmZpbGxUZXh0KFwiTEVGVC9SSUdIVCBPUiBBL0RcIiwgdGhhdC54IC8gMiAtIDk2LCB0aGF0LnkgLyAyIC0gMTIwKTtcbiAgICAgIGN0eC5maWxsVGV4dChcIlRPIEFWT0lEIFdBTExTXCIsIHRoYXQueCAvIDIgLSA4NiwgdGhhdC55IC8gMiAtIDkwKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHNob3cgZ2FtZSBvdmVyIHRleHQgYm94XG4gIGFmdGVyR2FtZSgpIHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2FtZS1vdmVyJyk7XG4gICAgZGl2WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2FtZS1vdmVyJyk7XG4gICAgZGl2WzBdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICBsZXQgdGltZXN0YW1wID0gbmV3IERhdGUoKVxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFuaW1hdGUodGltZXN0YW1wKSwgMzAwKTtcblxuICAgIHRoaXMud2FsbHMgPSBuZXcgV2FsbHModGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5iZWdpbkF1ZGlvLnBsYXkoKTtcbiAgICB0aGlzLnBvcHVsYXRlV2FsbHMgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLndhbGxzLnBvcHVsYXRlV2FsbHMoKSwgODAwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIH0sIDQwMCk7XG5cbiAgICB0aGlzLnJvdGF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVSb3RhdGlvbigpLCAxMDAwMClcblxuICAgIHRoaXMubXVzaWMubG9hZCgpO1xuICAgIHRoaXMubXVzaWMucGxheSgpO1xuICB9XG5cbiAgLy8gY2hhbmdlcyByb3RhdGlvbiBkaXJlY3Rpb25cbiAgdXBkYXRlUm90YXRpb24oKSB7XG4gICAgaWYgKHRoaXMucm90YXRpb25EaXIgPT09IDEpIHtcbiAgICAgIHRoaXMucm90YXRpb25EaXIgPSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3RhdGlvbkRpciA9IDE7XG4gICAgfVxuXG4gICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgIHRoaXMucm90YXRpb25JbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVSb3RhdGlvbigpLCByYW5kICogNTAwKTtcbiAgfVxuXG4gIC8vIGludm9rZWQgaW4gYW5pbWF0ZSwgdXBkYXRlcyBzY2FsZSBvZiB3YWxscyBhbmQgaGV4YWdvblxuICAvLyBmb3IgdGhlIHB1bHNlIGVmZmVjdCBhdCA0MCsgc2Vjc1xuICB1cGRhdGVTY2FsZSgpIHtcbiAgICBpZiAodGhpcy5zY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNjYWxlRGlyID0gXCJpbmNyZWFzaW5nXCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNjYWxlID49IDEuMykge1xuICAgICAgdGhpcy5zY2FsZURpciA9IFwiZGVjcmVhc2luZ1wiO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNjYWxlRGlyID09PSBcImluY3JlYXNpbmdcIikge1xuICAgICAgdGhpcy5zY2FsZSArPSAwLjAyNTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NhbGVEaXIgPT09IFwiZGVjcmVhc2luZ1wiKSB7XG4gICAgICB0aGlzLnNjYWxlIC09IDAuMDI1O1xuICAgIH1cbiAgfVxuXG4gIGNvdW50RGVjaW1hbHMobnVtKSB7XG4gICAgaWYgKE1hdGguZmxvb3IobnVtKSAhPT0gbnVtKSB7XG4gICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aCB8fCAwO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIC8vIHByb3ZpZGVzIHRoZSBzY2FsZSwgcm90YXRpb25EaXIgYW5kIHRpbWUgdG8gb3RoZXIgc2NyaXB0c1xuICBhbmltYXRlKHRpbWVzdGFtcCkge1xuICAgIC8vIGNsZWFycyBjYW52YXNcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgbGV0IGRlbHRhVGltZSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWU7XG5cbiAgICB0aGlzLmRlbHRhVGltZSA9IGRlbHRhVGltZTtcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuXG4gICAgLy8gc2V0cyBzdGFydFRpbWUgYW5kIGtlZXBzIHRyYWNrIG9mIHRpbWUgZWxhcHNlZFxuICAgIHRoaXMuc2V0VGltZSgpO1xuXG4gICAgLy8gaW52b2tlIGFuaW1hdGUgZnggd2l0aGluIG90aGVyIHNjcmlwdHMgdG8gYmVnaW4gZ2FtZVxuICAgIHRoaXMuc2VjdGlvbnMuYW5pbWF0ZShkZWx0YVRpbWUpO1xuICAgIHRoaXMuaGV4YWdvbi5hbmltYXRlKGRlbHRhVGltZSwgdGhpcy5zY2FsZSwgdGhpcy5yb3RhdGlvbkRpcik7XG4gICAgdGhpcy5jdXJzb3IuYW5pbWF0ZSh0aGlzLmN0eCwgdGhpcy5zY2FsZSk7XG4gICAgdGhpcy53YWxscy5hbmltYXRlKHRoaXMuY3R4LCB0aGlzLnNjYWxlKTtcblxuICAgIC8vIHNldHMgY3Vyc29yIGRpclxuICAgIHRoaXMuc2V0RGlyKGRlbHRhVGltZSk7XG5cbiAgICAvLyBjb25kaXRpb25hbCB0aGF0IGVuZHMgZ2FtZSBpZiBjdXJzb3IgY29sbGlkZXMgdy8gYSB3YWxsXG4gICAgdGhpcy5nYW1lT3ZlcigpO1xuXG4gICAgLy8gYWRkIHB1bHNhdGluZyBlZmZlY3Qgd2hlbiB0aGUgYmVhdCBkcm9wcyA6KSBcbiAgICBpZiAodGhpcy50aW1lICYmIHRoaXMudGltZSA+IDQxLjIpIHtcbiAgICAgIHRoaXMudXBkYXRlU2NhbGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ydW5uaW5nID09PSB0cnVlKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGludm9rZWQgaW4gYW5pbWF0ZVxuICBzZXREaXIoZGVsdGFUaW1lKSB7XG4gICAgaWYgKHRoaXMuY3Vyc29yRGlyID09PSBcImNsb2Nrd2lzZVwiKSB7XG4gICAgICB0aGlzLmN1cnNvci5waXZvdENsb2Nrd2lzZShkZWx0YVRpbWUsIHRoaXMuY3R4LCB0aGlzLnNjYWxlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3Vyc29yRGlyID09PSBcImNvdW50ZXJDbG9ja3dpc2VcIikge1xuICAgICAgdGhpcy5jdXJzb3IucGl2b3RDb3VudGVyQ2xvY2t3aXNlKGRlbHRhVGltZSwgdGhpcy5jdHgsIHRoaXMuc2NhbGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGludm9rZWQgaW4gYW5pbWF0ZVxuICBzZXRUaW1lKCkge1xuICAgIGlmICh0aGlzLnN0YXJ0VGltZSkge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHRoaXMudGltZSA9IE1hdGgucm91bmQoKChub3cgLSB0aGlzLnN0YXJ0VGltZSkgLyAxMDAwKSAqIDEwMCkgLyAxMDA7XG5cbiAgICAgIGlmICh0aGlzLmNvdW50RGVjaW1hbHModGhpcy50aW1lKSA9PT0gMCkge1xuICAgICAgICB0aGlzLnRpbWUgPSBgJHt0aGlzLnRpbWV9LjAwYDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jb3VudERlY2ltYWxzKHRoaXMudGltZSkgPT09IDEpIHtcbiAgICAgICAgdGhpcy50aW1lID0gYCR7dGhpcy50aW1lfTBgO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0b3B3YXRjaC5hbmltYXRlKHRoaXMudGltZSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyB8fCBldmVudC5rZXlDb2RlID09PSA2NSkge1xuICAgICAgICBpZiAodGhhdC5ydW5uaW5nKSB7XG4gICAgICAgICAgdGhhdC5jdXJzb3JEaXIgPSAnY291bnRlckNsb2Nrd2lzZSc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgfHwgZXZlbnQua2V5Q29kZSA9PT0gNjgpIHtcbiAgICAgICAgaWYgKHRoYXQucnVubmluZykge1xuICAgICAgICAgIHRoYXQuY3Vyc29yRGlyID0gJ2Nsb2Nrd2lzZSc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgaWYgKCF0aGF0LnJ1bm5pbmcpIHtcbiAgICAgICAgICB0aGF0LnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+ICh0aGF0LmN1cnNvckRpciA9ICcnKSk7XG4gIH1cblxuICAvLyBpbnZva2VkIGluIGFuaW1hdGVcbiAgZ2FtZU92ZXIoKSB7XG4gICAgaWYgKHRoaXMud2FsbHMuY29sbGlkZXNXaXRoKHRoaXMuY3Vyc29yLnRpcCh0aGlzLnNjYWxlKSwgdGhpcy5zY2FsZSkpIHtcbiAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5nYW1lT3ZlckF1ZGlvLnBsYXkoKTtcbiAgICAgIHRoaXMubXVzaWMucGF1c2UoKTtcbiAgICAgIHRoaXMuc3RvcHdhdGNoLnN0b3AoKTtcbiAgICAgIHRoaXMuaGV4YWdvbi5zdG9wKCk7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMucG9wdWxhdGVXYWxscyk7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMucm90YXRpb25JbnRlcnZhbCk7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5yb3RhdGlvblRpbWVvdXQpO1xuICAgICAgdGhpcy5hZnRlckdhbWUoKTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpY2tlZEhleGFnb247IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1xuICAgIFtcIiMwMDAwMDBcIiwgXCIjMDhmYjdiXCJdLFxuICAgIFtcIiMwMDAwMDBcIiwgXCIjZWY4NzA4XCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjYzMxZTllXCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjNmI0YWNhXCJdLFxuICAgIFtcIiNmZmZmZmZcIiwgXCIjMmI2YWVhXCJdLFxuICBdLFxuICBTSVpFOiA1MCxcbn1cblxuXG5jbGFzcyBIZXhhZ29uIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAvIDI7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG5cbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgZHJhdyhjdHgsIHNjYWxlKSB7XG4gICAgc2NhbGUgPSBzY2FsZSB8fCAxO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgIGN0eC5yb3RhdGUodGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG5cbiAgICBsZXQgaGV4MSA9IDA7XG4gICAgZm9yIChoZXgxOyBoZXgxIDw9IDY7IGhleDErKykge1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyAoREVGQVVMVFMuU0laRSAqIHNjYWxlKSAqIE1hdGguY29zKGhleDEgKiAyICogTWF0aC5QSSAvIDYpLCB0aGlzLnkgKyAoREVGQVVMVFMuU0laRSAqIHNjYWxlKSAqIE1hdGguc2luKGhleDEgKiAyICogTWF0aC5QSSAvIDYpKTtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzRdWzFdO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG5cbiAgICBsZXQgaGV4MiA9IDA7XG4gICAgZm9yIChoZXgyOyBoZXgyIDw9IDY7IGhleDIrKykge1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyAoNDQgKiBzY2FsZSkgKiBNYXRoLmNvcyhoZXgyICogMiAqIE1hdGguUEkgLyA2KSwgdGhpcy55ICsgKDQ0ICogc2NhbGUpICogTWF0aC5zaW4oaGV4MiAqIDIgKiBNYXRoLlBJIC8gNikpO1xuICAgIH1cblxuICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbNF1bMF07XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGFuaW1hdGUoZGVsdGFUaW1lLCBzY2FsZSwgcm90YXRpb25EaXIpIHtcbiAgICB0aGlzLmFuZ2xlID0gMjAgLyBkZWx0YVRpbWUgKiByb3RhdGlvbkRpcjtcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgsIHNjYWxlKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGV4YWdvbjsiLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXG4gICAgW1wiIzAwMDAwMFwiLCBcIiMwMjI3MTNcIl0sXG4gICAgW1wiIzAwMDAwMFwiLCBcIiMyNjE1MDFcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiNmNWRjZjBcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiNlN2UzZjdcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiNkZGU4ZmNcIl0sXG4gIF0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb25zIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5nbGUgPSAtNjA7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICBcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBsZXQgcHJldkNvb3JkO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSArIDYwO1xuICAgICAgfVxuXG4gICAgICBsZXQgeDIsIHkyLCBsZW5ndGg7XG5cbiAgICAgIC8vIGxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5zcXJ0KDMpICogdGhpcy54ICogMik7XG4gICAgICBsZW5ndGggPSAxNTAwO1xuICAgICAgeDIgPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBsZW5ndGg7XG4gICAgICB5MiA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIGxlbmd0aDtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG4gICAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gICAgICBpZiAocHJldkNvb3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3R4LmxpbmVUbyguLi5wcmV2Q29vcmQpO1xuICAgICAgfVxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzRdW2kgJSAyXTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbNF1baSAlIDJdO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgcHJldkNvb3JkID0gW3gyLCB5Ml07XG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZShkZWx0YVRpbWUpIHtcbiAgICAvLyB0aGlzLmFuZ2xlICs9ICgxIC8gZGVsdGFUaW1lKTtcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9ICBcbn0iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXG4gICAgW1wiIzAwMDAwMFwiLCBcIiNmZmZmZmZcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiNlZjg3MDhcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiM2YjRhY2FcIl0sXG4gICAgW1wiI2ZmZmZmZlwiLCBcIiMyYjZhZWFcIl0sXG4gIF0sXG59XG5cbmNsYXNzIFN0b3B3YXRjaCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLnRpbWUgPSBcIjAuMDBcIjtcblxuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBzdG9wd2F0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RvcHdhdGNoXCIpO1xuICAgIHN0b3B3YXRjaFswXS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHN0b3B3YXRjaFswXS5pbm5lckhUTUwgKz0gYCR7dGhpcy50aW1lfWA7XG4gIH1cblxuICBhbmltYXRlKHRpbWUpIHtcbiAgICB0aGlzLnRpbWUgPSB0aW1lO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgbGV0IHRpbWUgPSB0aGlzLnRpbWU7XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9wd2F0Y2g7IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1xuICAgIFtcIiMwOGZiN2JcIiwgJ3JnYmEoMCwwLDAsMCknXSxcbiAgICBbXCIjZWY4NzA4XCIsICdyZ2JhKDAsMCwwLDApJ10sXG4gICAgW1wiI2MzMWU5ZVwiLCAncmdiYSgwLDAsMCwwKSddLFxuICAgIFtcIiM2YjRhY2FcIiwgJ3JnYmEoMCwwLDAsMCknXSxcbiAgICBbXCIjMmI2YWVhXCIsICdyZ2JhKDAsMCwwLDApJ10sXG4gIF0sXG4gIC8vIHNlY29uZCBjb2xvciBpcyB0cmFuc3BhcmVudFxuICBTSVpFOiA0MCxcbiAgTUFYOiAxMDAwLFxuICAvLyBjb3JyZXNwb25kcyB3LyB0aGUgc2VjdGlvbnMnIGxlbmd0aHNcbn07XG5cbmNsYXNzIFdhbGxzIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5nbGUgPSAtNjA7XG4gICAgdGhpcy5hbmltYXRlV2FsbEFuZ2xlID0gLTYwO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAvIDI7XG5cbiAgICB0aGlzLmNvbWJvcyA9IFtcbiAgICAgIFt0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZV0sXG4gICAgICBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWVdLFxuICAgICAgW3RydWUsIHRydWUsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlXSxcbiAgICAgIFt0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0sXG4gICAgICBbdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIHRydWVdLFxuICAgICAgW2ZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlXSxcbiAgICAgIFt0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIGZhbHNlXSxcbiAgICAgIFtmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIGZhbHNlLCB0cnVlXSxcbiAgICAgIFt0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2VdLFxuICAgIF1cblxuICAgIHRoaXMud2FsbENvbWJvcyA9IFtdO1xuICB9XG5cbiAgZHJhdyAoY3R4LCBjb21ibykge1xuICAgIGxldCBwcmV2Q29vcmQsIHdhbGxzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gLTE7IGkgPD0gNTsgaSsrKSB7XG4gICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyA2MDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYW5nbGUgPj0gMzYwKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICUgMzYwO1xuICAgICAgfVxuXG4gICAgICBsZXQgeDIsIHkyLCBheCwgYXksIGJ4LCBieTtcbiAgICAgIC8vIG91dGVyIHRyYXBlem9pZCBjb3JuZXJcbiAgICAgIHgyID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogREVGQVVMVFMuTUFYO1xuICAgICAgeTIgPSB0aGlzLnkgKyBNYXRoLnNpbihNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBERUZBVUxUUy5NQVg7XG5cbiAgICAgIC8vIGlubmVyIHRhcGV6b2lkIHBvaW50IG9uIGZpcnN0IGxpbmUgXG4gICAgICBieCA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIChERUZBVUxUUy5NQVggLSBERUZBVUxUUy5TSVpFKTtcbiAgICAgIGJ5ID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogKERFRkFVTFRTLk1BWCAtIERFRkFVTFRTLlNJWkUpOyBcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyhieCwgYnkpO1xuICAgICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuXG4gICAgICBpZiAocHJldkNvb3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3R4LmxpbmVUbyguLi5wcmV2Q29vcmQpO1xuXG4gICAgICAgIGF4ID0gcHJldkNvb3JkWzBdICsgTWF0aC5jb3MoTWF0aC5QSSAqICh0aGlzLmFuZ2xlICsgMTIwKSAvIDE4MCkgKiBERUZBVUxUUy5TSVpFO1xuICAgICAgICBheSA9IHByZXZDb29yZFsxXSArIE1hdGguc2luKE1hdGguUEkgKiAodGhpcy5hbmdsZSArIDEyMCkgLyAxODApICogREVGQVVMVFMuU0laRTtcblxuICAgICAgICBjdHgubGluZVRvKGF4LCBheSk7XG4gICAgICAgIGN0eC5saW5lVG8oYngsIGJ5KTtcbiAgICAgIH1cblxuICAgICAgICBpZiAoaSA9PT0gLTEgfHwgY29tYm9baV0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzRdWzFdO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbNF1bMV07XG4gICAgICAgIH0gZWxzZSBpZiAoY29tYm9baV0pIHtcbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbNF1bMF07XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1s0XVswXTtcbiAgICAgICAgfVxuXG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBwcmV2Q29vcmQgPSBbeDIsIHkyXTtcblxuICAgICAgbGV0IHdhbGwgPSB7XG4gICAgICAgIGxlbmd0aDogMTAwMCxcbiAgICAgICAgaXNXYWxsOiAnJyxcbiAgICAgIH07XG5cbiAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICB3YWxsLmlzV2FsbCA9ICdsaW5lJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhbGwuaXNXYWxsID0gY29tYm9baV07XG4gICAgICB9XG5cbiAgICAgIHdhbGxzLnB1c2god2FsbCk7XG4gICAgfVxuXG4gICAgdGhpcy53YWxsQ29tYm9zLnB1c2god2FsbHMpO1xuICB9XG5cbiAgY29sbGlkZXNXaXRoKGN1cnNvclBvcywgc2NhbGUpIHtcbiAgICBpZiAodGhpcy53YWxsQ29tYm9zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLndhbGxDb21ib3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IHdhbGxzID0gdGhpcy53YWxsQ29tYm9zW2pdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgd2FsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgd2FsbCA9IHdhbGxzW2ldO1xuICBcbiAgICAgICAgICBpZiAod2FsbC5pc1dhbGwpIHtcbiAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IGN1cnNvclBvcztcbiAgICAgICAgICAgIGNvbnN0IFtheCwgYXldID0gd2FsbC5wb2ludDE7XG4gICAgICAgICAgICBjb25zdCBbYngsIGJ5XSA9IHdhbGwucG9pbnQyO1xuICBcbiAgICAgICAgICAgIGxldCBsZW5ndGgxID0gdGhpcy5nZXREaXN0YW5jZSh4LCB5LCBheCwgYXkpO1xuICAgICAgICAgICAgbGV0IGxlbmd0aDIgPSB0aGlzLmdldERpc3RhbmNlKHgsIHksIGJ4LCBieSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChsZW5ndGgxICsgbGVuZ3RoMiA8PSAod2FsbC5sZW5ndGggKiBzY2FsZSktMzkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXREaXN0YW5jZShheCwgYXksIGJ4LCBieSkge1xuICAgIGNvbnN0IHggPSBheCAtIGJ4O1xuICAgIGNvbnN0IHkgPSBheSAtIGJ5O1xuXG4gICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgfVxuXG4gIHBvcHVsYXRlV2FsbHMoKSB7XG4gICAgbGV0IGNvbWJvc0lkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29tYm9zLmxlbmd0aCk7XG4gICAgbGV0IGNvbWJvID0gdGhpcy5jb21ib3NbY29tYm9zSWR4XTtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCwgY29tYm8pO1xuICB9XG5cbiAgYW5pbWF0ZShjdHgsIHNjYWxlKSB7XG4gICAgaWYgKHRoaXMud2FsbENvbWJvcy5sZW5ndGggIT09IDAgJiYgdGhpcy53YWxsQ29tYm9zW3RoaXMud2FsbENvbWJvcy5sZW5ndGggLSAxXS5sZW5ndGggJSA3ID09PSAwKSB7XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53YWxsQ29tYm9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB3YWxscyA9IHRoaXMud2FsbENvbWJvc1tpXTtcblxuICAgICAgICBpZiAod2FsbHNbMF0ubGVuZ3RoID09PSA3MCkge1xuICAgICAgICAgIHRoaXMud2FsbENvbWJvcy51bnNoaWZ0KCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJldkNvb3JkO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2FsbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgd2FsbCA9IHdhbGxzW2pdO1xuXG4gICAgICAgICAgaWYgKHdhbGwuaXNXYWxsICE9PSAnbGluZScpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSA9IHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSArIDYwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmFuaW1hdGVXYWxsQW5nbGUgPj0gMzYwKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgPSB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgJSAzNjA7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBsZXQgeDIsIHkyLCBheCwgYXksIGJ4LCBieSwgbmV3TGVuZ3RoO1xuICBcbiAgICAgICAgICBuZXdMZW5ndGggPSB3YWxsLmxlbmd0aCAtIDU7XG4gIFxuICAgICAgICAgIHgyID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAvIDE4MCkgKiAobmV3TGVuZ3RoICogc2NhbGUpO1xuICAgICAgICAgIHkyID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAvIDE4MCkgKiAobmV3TGVuZ3RoICogc2NhbGUpO1xuICBcbiAgICAgICAgICAvLyB0YXBlem9pZCBwb2ludCBvbiBmaXJzdCBsaW5lIFxuICAgICAgICAgIGJ4ID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAvIDE4MCkgKiAoKG5ld0xlbmd0aCAqIHNjYWxlKSAtIERFRkFVTFRTLlNJWkUpO1xuICAgICAgICAgIGJ5ID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAvIDE4MCkgKiAoKG5ld0xlbmd0aCAqIHNjYWxlKSAtIERFRkFVTFRTLlNJWkUpO1xuICBcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY3R4Lm1vdmVUbyhieCwgYnkpO1xuICAgICAgICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgXG4gICAgICAgICAgaWYgKHByZXZDb29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjdHgubGluZVRvKC4uLnByZXZDb29yZCk7XG4gIFxuICAgICAgICAgICAgYXggPSBwcmV2Q29vcmRbMF0gKyBNYXRoLmNvcyhNYXRoLlBJICogKHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSArIDEyMCkgLyAxODApICogREVGQVVMVFMuU0laRTtcbiAgICAgICAgICAgIGF5ID0gcHJldkNvb3JkWzFdICsgTWF0aC5zaW4oTWF0aC5QSSAqICh0aGlzLmFuaW1hdGVXYWxsQW5nbGUgKyAxMjApIC8gMTgwKSAqIERFRkFVTFRTLlNJWkU7XG4gIFxuICAgICAgICAgICAgY3R4LmxpbmVUbyhheCwgYXkpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhieCwgYnkpO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgaWYgKHdhbGwuaXNXYWxsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbNF1bMF07XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzRdWzBdO1xuICAgICAgICAgIH0gZWxzZSBpZiAod2FsbC5pc1dhbGwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbNF1bMV07XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzRdWzFdO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gIFxuICAgICAgICAgIHByZXZDb29yZCA9IFt4MiwgeTJdO1xuICBcbiAgICAgICAgICB0aGlzLndhbGxDb21ib3NbaV1bal0gPSB7XG4gICAgICAgICAgICBsZW5ndGg6IG5ld0xlbmd0aCxcbiAgICAgICAgICAgIGlzV2FsbDogd2FsbC5pc1dhbGwsXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5hbmltYXRlV2FsbEFuZ2xlLFxuICAgICAgICAgICAgcG9pbnQxOiBbYXgsIGF5XSxcbiAgICAgICAgICAgIHBvaW50MjogW2J4LCBieV0sXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxzOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=