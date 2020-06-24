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

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.angle = 330;
    this.rotateAngle = 0;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.draw(this.ctx);
  }

  _createClass(Cursor, [{
    key: "draw",
    value: function draw(ctx) {
      // debugger;
      // right, vel + 30?
      // rotates the cursor depending on where around the hexagon it is
      this.cursorX = this.canvas.width / 2 + Math.cos(this.angle * Math.PI / 180) * DEFAULTS.RADIUS;
      this.cursorY = this.canvas.height / 2 + Math.sin(this.angle * Math.PI / 180) * DEFAULTS.RADIUS;
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
    key: "animate",
    value: function animate(ctx) {
      this.draw(ctx);
    }
  }, {
    key: "pivotClockwise",
    value: function pivotClockwise(deltaTime, ctx) {
      this.angle += 60 / deltaTime;
      this.draw(ctx);
    }
  }, {
    key: "pivotCounterClockwise",
    value: function pivotCounterClockwise(deltaTime, ctx) {
      this.angle -= 60 / deltaTime;
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
    this.restart();
    this.sections = new _sections__WEBPACK_IMPORTED_MODULE_3__["default"](canvas);
    this.ctx.globalCompositeOperation = 'source-over';
    this.stopwatch = new _stopwatch__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
    this.hexagon = new _hexagon__WEBPACK_IMPORTED_MODULE_1__["default"](canvas);
    this.cursor = new _cursor__WEBPACK_IMPORTED_MODULE_2__["default"](canvas);
    this.cursorDir = '';
    this.music = new Audio('assets/sounds/Cusp.mp3');
  }

  _createClass(WickedHexagon, [{
    key: "play",
    value: function play() {
      var _this = this;

      var timestamp = new Date();
      this.lastTime = 0;
      this.startTime = new Date();
      setTimeout(function () {
        return _this.animate(timestamp);
      }, 300);
      this.walls = new _walls__WEBPACK_IMPORTED_MODULE_4__["default"](this.canvas); // comment back in later

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

      if (this.cursorDir === 'clockwise') {
        this.cursor.pivotClockwise(deltaTime, this.ctx);
      } else if (this.cursorDir === 'counterClockwise') {
        this.cursor.pivotCounterClockwise(deltaTime, this.ctx);
      }

      if (this.running = true) {
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
          console.log('space');
          that.running = true;
          that.play();
        }
      });
      document.addEventListener("keyup", function () {
        return that.cursorDir = '';
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
  COLORS: ["#08fb7b", 'rgba(0,0,0,0)'],
  // second color is transparent
  SIZE: 40,
  MAX: 1000 // corresponds w/ the sections' lengths

};

var Walls = /*#__PURE__*/function () {
  function Walls(canvas) {
    var _this = this;

    _classCallCheck(this, Walls);

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.angle = -60;
    this.animateWallAngle = -60;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.combos = [[true, true, true, true, true, false], [true, true, true, true, false, true], [true, true, true, false, true, true], [true, true, false, true, true, true], [true, false, true, true, true, true], [false, true, true, true, true, true], [true, false, true, false, true, false], [true, true, false, true, true, false] // 8 combos
    ];
    this.wallCombos = [];
    setInterval(function () {
      return _this.populateWalls();
    }, 2000);
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

        var x2 = void 0,
            y2 = void 0,
            ax = void 0,
            ay = void 0,
            bx = void 0,
            by = void 0; // center point

        x2 = this.x + Math.cos(Math.PI * this.angle / 180) * DEFAULTS.MAX;
        y2 = this.y + Math.sin(Math.PI * this.angle / 180) * DEFAULTS.MAX; // tapezoid point on first line 

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
          ctx.strokeStyle = DEFAULTS.COLORS[1];
          ctx.fillStyle = DEFAULTS.COLORS[1];
        } else if (combo[i]) {
          ctx.strokeStyle = DEFAULTS.COLORS[0];
          ctx.fillStyle = DEFAULTS.COLORS[0];
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
    key: "populateWalls",
    value: function populateWalls() {
      var combosIdx = Math.floor(Math.random() * 8);
      var combo = this.combos[combosIdx];
      console.log(combosIdx);
      console.log(combo);
      this.draw(this.ctx, combo);
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      if (this.wallCombos.length !== 0 && this.wallCombos[this.wallCombos.length - 1].length % 7 === 0) {
        for (var i = 0; i < this.wallCombos.length; i++) {
          var walls = this.wallCombos[i];

          if (walls[0].length === 80) {
            this.wallCombos.unshift();
            continue;
          }

          var prevCoord = void 0;

          for (var j = 0; j < walls.length; j++) {
            var wall = walls[j];

            if (wall.isWall !== 'line') {
              this.animateWallAngle = this.animateWallAngle + 60;
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
              ctx.strokeStyle = DEFAULTS.COLORS[0];
              ctx.fillStyle = DEFAULTS.COLORS[0];
            } else if (wall.isWall === false) {
              ctx.strokeStyle = DEFAULTS.COLORS[1];
              ctx.fillStyle = DEFAULTS.COLORS[1];
            }

            ctx.fill();
            ctx.stroke();
            prevCoord = [x2, y2];
            this.wallCombos[i][j] = {
              length: newLength,
              isWall: wall.isWall
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJXaWNrZWRIZXhhZ29uIiwiREVGQVVMVFMiLCJDT0xPUiIsIlJBRElVUyIsIlNJWkUiLCJDdXJzb3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiYW5nbGUiLCJyb3RhdGVBbmdsZSIsIngiLCJ5IiwiZHJhdyIsImN1cnNvclgiLCJNYXRoIiwiY29zIiwiUEkiLCJjdXJzb3JZIiwic2luIiwidHJhbnNsYXRlIiwicm90YXRlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiZmlsbFN0eWxlIiwiZmlsbCIsImRlbHRhVGltZSIsImRpbWVuc2lvbnMiLCJydW5uaW5nIiwicmVnaXN0ZXJFdmVudHMiLCJyZXN0YXJ0Iiwic2VjdGlvbnMiLCJTZWN0aW9ucyIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInN0b3B3YXRjaCIsIlN0b3B3YXRjaCIsImhleGFnb24iLCJIZXhhZ29uIiwiY3Vyc29yIiwiY3Vyc29yRGlyIiwibXVzaWMiLCJBdWRpbyIsInRpbWVzdGFtcCIsIkRhdGUiLCJsYXN0VGltZSIsInN0YXJ0VGltZSIsInNldFRpbWVvdXQiLCJhbmltYXRlIiwid2FsbHMiLCJXYWxscyIsInBsYXkiLCJwaXZvdENsb2Nrd2lzZSIsInBpdm90Q291bnRlckNsb2Nrd2lzZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJ0aGF0IiwiZXZlbnQiLCJrZXlDb2RlIiwiY29uc29sZSIsImxvZyIsIkNPTE9SUyIsImhleDEiLCJoZXgyIiwicHJldkNvb3JkIiwiaSIsIngyIiwieTIiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInRpbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwibnVtIiwiZmxvb3IiLCJ0b1N0cmluZyIsInNwbGl0Iiwibm93Iiwicm91bmQiLCJjb3VudERlY2ltYWxzIiwiTUFYIiwiYW5pbWF0ZVdhbGxBbmdsZSIsImNvbWJvcyIsIndhbGxDb21ib3MiLCJzZXRJbnRlcnZhbCIsInBvcHVsYXRlV2FsbHMiLCJjb21ibyIsImF4IiwiYXkiLCJieCIsImJ5Iiwid2FsbCIsImlzV2FsbCIsInB1c2giLCJjb21ib3NJZHgiLCJyYW5kb20iLCJ1bnNoaWZ0IiwiaiIsIm5ld0xlbmd0aCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNB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Q2dFLE1BQUo7QUFFQVAscUJBQVMsR0FBRyxDQUFDRSxFQUFELEVBQUtDLEVBQUwsQ0FBWjtBQUVBLGlCQUFLa0IsVUFBTCxDQUFnQnBCLENBQWhCLEVBQW1Ca0MsQ0FBbkIsSUFBd0I7QUFDdEIvQixvQkFBTSxFQUFFZ0MsU0FEYztBQUV0Qk4sb0JBQU0sRUFBRUQsSUFBSSxDQUFDQztBQUZTLGFBQXhCO0FBSUQ7QUFDRjtBQUNGO0FBQ0Y7Ozs7OztBQUdZNUMsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUMzS0EsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFdpY2tlZEhleGFnb24gZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuLy8gaW1wb3J0IFdpY2tlZEhleGFnb24gZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICBjYW52YXNFbC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIGNhbnZhc0VsLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgbmV3IFdpY2tlZEhleGFnb24oY2FudmFzRWwpO1xufSk7XG4iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1I6IFwiIzA4ZmI3YlwiLFxuICBSQURJVVM6IDYwLFxuICBTSVpFOiA1LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Vyc29yIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5nbGUgPSAzMzA7XG4gICAgdGhpcy5yb3RhdGVBbmdsZSA9IDA7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIC8vIGRlYnVnZ2VyO1xuICAgIC8vIHJpZ2h0LCB2ZWwgKyAzMD9cbiAgICAvLyByb3RhdGVzIHRoZSBjdXJzb3IgZGVwZW5kaW5nIG9uIHdoZXJlIGFyb3VuZCB0aGUgaGV4YWdvbiBpdCBpc1xuXG4gICAgdGhpcy5jdXJzb3JYID0gKHRoaXMuY2FudmFzLndpZHRoIC8gMikgKyAoTWF0aC5jb3ModGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApICogREVGQVVMVFMuUkFESVVTKTtcbiAgICB0aGlzLmN1cnNvclkgPSAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMikgKyAoTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApICogREVGQVVMVFMuUkFESVVTKTtcblxuICAgIGN0eC50cmFuc2xhdGUodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgIGN0eC5yb3RhdGUodGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGN0eC50cmFuc2xhdGUoLXRoaXMuY3Vyc29yWCwgLXRoaXMuY3Vyc29yWSk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLmN1cnNvclggLSBERUZBVUxUUy5TSVpFLCB0aGlzLmN1cnNvclkgLSBERUZBVUxUUy5TSVpFKTtcbiAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCArIERFRkFVTFRTLlNJWkUsIHRoaXMuY3Vyc29yWSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclggLSBERUZBVUxUUy5TSVpFLCB0aGlzLmN1cnNvclkgKyBERUZBVUxUUy5TSVpFKTtcbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1I7XG4gICAgY3R4LmZpbGwoKTtcblxuICAgIGN0eC50cmFuc2xhdGUodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgIGN0eC5yb3RhdGUoLXRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICBjdHgudHJhbnNsYXRlKC10aGlzLmN1cnNvclgsIC10aGlzLmN1cnNvclkpO1xuICB9XG5cbiAgYW5pbWF0ZShjdHgpIHtcbiAgICB0aGlzLmRyYXcoY3R4KTtcbiAgfVxuXG4gIHBpdm90Q2xvY2t3aXNlKGRlbHRhVGltZSwgY3R4KSB7XG4gICAgdGhpcy5hbmdsZSArPSAoNjAgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyhjdHgpXG4gIH1cblxuICBwaXZvdENvdW50ZXJDbG9ja3dpc2UoZGVsdGFUaW1lLCBjdHgpIHtcbiAgICB0aGlzLmFuZ2xlIC09ICg2MCAvIGRlbHRhVGltZSk7XG4gICAgdGhpcy5kcmF3KGN0eCk7XG4gIH1cbn0iLCJpbXBvcnQgU3RvcHdhdGNoIGZyb20gJy4vc3RvcHdhdGNoJztcbmltcG9ydCBIZXhhZ29uIGZyb20gJy4vaGV4YWdvbic7XG5pbXBvcnQgQ3Vyc29yIGZyb20gJy4vY3Vyc29yJztcbmltcG9ydCBTZWN0aW9ucyBmcm9tICcuL3NlY3Rpb25zJztcbmltcG9ydCBXYWxscyBmcm9tICcuL3dhbGxzJztcbi8vIGltcG9ydCB0aGUgb3RoZXIgc2NyaXB0c1xuXG5jbGFzcyBXaWNrZWRIZXhhZ29uIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG5cbiAgICB0aGlzLnNlY3Rpb25zID0gbmV3IFNlY3Rpb25zKGNhbnZhcyk7XG4gICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB0aGlzLnN0b3B3YXRjaCA9IG5ldyBTdG9wd2F0Y2goY2FudmFzKTtcbiAgICB0aGlzLmhleGFnb24gPSBuZXcgSGV4YWdvbihjYW52YXMpO1xuICAgIHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcihjYW52YXMpO1xuXG4gICAgdGhpcy5jdXJzb3JEaXIgPSAnJztcbiAgICB0aGlzLm11c2ljID0gbmV3IEF1ZGlvKCdhc3NldHMvc291bmRzL0N1c3AubXAzJyk7XG4gIH1cblxuICBwbGF5KCkge1xuICAgIGxldCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFuaW1hdGUodGltZXN0YW1wKSwgMzAwKTtcblxuICAgIHRoaXMud2FsbHMgPSBuZXcgV2FsbHModGhpcy5jYW52YXMpO1xuXG4gICAgLy8gY29tbWVudCBiYWNrIGluIGxhdGVyXG4gICAgdGhpcy5tdXNpYy5wbGF5KCk7XG4gIH1cbiAgXG4gIGFuaW1hdGUodGltZXN0YW1wKSB7XG4gICAgbGV0IGRlbHRhVGltZSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWU7XG5cbiAgICB0aGlzLmRlbHRhVGltZSA9IGRlbHRhVGltZTtcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuXG4gICAgdGhpcy5zdG9wd2F0Y2guYW5pbWF0ZSh0aGlzLnN0YXJ0VGltZSk7XG4gICAgdGhpcy5zZWN0aW9ucy5hbmltYXRlKGRlbHRhVGltZSk7XG4gICAgdGhpcy5oZXhhZ29uLmFuaW1hdGUoZGVsdGFUaW1lKTtcbiAgICB0aGlzLmN1cnNvci5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICB0aGlzLndhbGxzLmFuaW1hdGUodGhpcy5jdHgpO1xuXG4gICAgaWYgKHRoaXMuY3Vyc29yRGlyID09PSAnY2xvY2t3aXNlJykge1xuICAgICAgdGhpcy5jdXJzb3IucGl2b3RDbG9ja3dpc2UoZGVsdGFUaW1lLCB0aGlzLmN0eCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnNvckRpciA9PT0gJ2NvdW50ZXJDbG9ja3dpc2UnKSB7XG4gICAgICB0aGlzLmN1cnNvci5waXZvdENvdW50ZXJDbG9ja3dpc2UoZGVsdGFUaW1lLCB0aGlzLmN0eCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucnVubmluZyA9IHRydWUpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyB8fCBldmVudC5rZXlDb2RlID09PSA2NSkge1xuICAgICAgICBpZiAodGhhdC5ydW5uaW5nKSB7XG4gICAgICAgICAgdGhhdC5jdXJzb3JEaXIgPSAnY291bnRlckNsb2Nrd2lzZSc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgfHwgZXZlbnQua2V5Q29kZSA9PT0gNjgpIHtcbiAgICAgICAgaWYgKHRoYXQucnVubmluZykge1xuICAgICAgICAgIHRoYXQuY3Vyc29yRGlyID0gJ2Nsb2Nrd2lzZSc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NwYWNlJyk7XG4gICAgICAgIHRoYXQucnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoYXQucGxheSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+ICh0aGF0LmN1cnNvckRpciA9ICcnKSk7XG4gIH1cblxuICByZXN0YXJ0KCkge1xuXG4gIH1cblxuICBnYW1lT3ZlcigpIHtcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaWNrZWRIZXhhZ29uOyIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcIiMwMDAwMDBcIiwgXCIjMDhmYjdiXCJdLFxuICBTSVpFOiA1MCxcbn1cblxuY2xhc3MgSGV4YWdvbiB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy54LCAtdGhpcy55KTtcblxuICAgIGxldCBoZXgxID0gMDtcbiAgICBmb3IgKGhleDE7IGhleDEgPD0gNjsgaGV4MSsrKSB7XG4gICAgICBjdHgubGluZVRvKHRoaXMueCArIERFRkFVTFRTLlNJWkUgKiBNYXRoLmNvcyhoZXgxICogMiAqIE1hdGguUEkgLyA2KSwgdGhpcy55ICsgREVGQVVMVFMuU0laRSAqIE1hdGguc2luKGhleDEgKiAyICogTWF0aC5QSSAvIDYpKTtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzFdO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG5cbiAgICBsZXQgaGV4MiA9IDA7XG4gICAgZm9yIChoZXgyOyBoZXgyIDw9IDY7IGhleDIrKykge1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyA0NCAqIE1hdGguY29zKGhleDIgKiAyICogTWF0aC5QSSAvIDYpLCB0aGlzLnkgKyA0NCAqIE1hdGguc2luKGhleDIgKiAyICogTWF0aC5QSSAvIDYpKTtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzBdO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBhbmltYXRlKGRlbHRhVGltZSkge1xuICAgIHRoaXMuYW5nbGUgPSAoMjAgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGV4YWdvbjsiLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXCIjMDAwMDAwXCIsIFwiIzAyMjcxM1wiXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbnMge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmdsZSA9IC02MDtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIFxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGxldCBwcmV2Q29vcmQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA2OyBpKyspIHtcbiAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICsgNjA7XG4gICAgICB9XG5cbiAgICAgIGxldCB4MiwgeTIsIGxlbmd0aDtcblxuICAgICAgLy8gbGVuZ3RoID0gTWF0aC5mbG9vcihNYXRoLnNxcnQoMykgKiB0aGlzLnggKiAyKTtcbiAgICAgIGxlbmd0aCA9IDE1MDA7XG4gICAgICB4MiA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIGxlbmd0aDtcbiAgICAgIHkyID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogbGVuZ3RoO1xuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcbiAgICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICAgIGlmIChwcmV2Q29vcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdHgubGluZVRvKC4uLnByZXZDb29yZCk7XG4gICAgICB9XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbaSAlIDJdO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1tpICUgMl07XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBwcmV2Q29vcmQgPSBbeDIsIHkyXTtcbiAgICB9XG4gIH1cblxuICBhbmltYXRlKGRlbHRhVGltZSkge1xuICAgIC8vIHRoaXMuYW5nbGUgKz0gKDEgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH0gIFxufSIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcIiMwMDAwMDBcIiwgXCIjZmZmZmZmXCJdLFxufVxuXG5jbGFzcyBTdG9wd2F0Y2gge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy50aW1lID0gXCIwLjAwXCI7XG5cbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3Qgc3RvcHdhdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0b3B3YXRjaFwiKTtcbiAgICBzdG9wd2F0Y2hbMF0uaW5uZXJIVE1MID0gXCJcIjtcbiAgICBzdG9wd2F0Y2hbMF0uaW5uZXJIVE1MICs9IGAke3RoaXMudGltZX1gO1xuICB9XG5cbiAgY291bnREZWNpbWFscyhudW0pIHtcbiAgICBpZiAoTWF0aC5mbG9vcihudW0pICE9PSBudW0pIHtcbiAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoIHx8IDA7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgYW5pbWF0ZShzdGFydFRpbWUpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMudGltZSA9IE1hdGgucm91bmQoKChub3cgLSBzdGFydFRpbWUpIC8gMTAwMCkgKiAxMDApIC8gMTAwO1xuXG4gICAgaWYgKHRoaXMuY291bnREZWNpbWFscyh0aGlzLnRpbWUpID09PSAwKSB7XG4gICAgICB0aGlzLnRpbWUgPSBgJHt0aGlzLnRpbWV9LjAwYDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY291bnREZWNpbWFscyh0aGlzLnRpbWUpID09PSAxKSB7XG4gICAgICB0aGlzLnRpbWUgPSBgJHt0aGlzLnRpbWV9MGA7XG4gICAgfVxuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9wd2F0Y2g7IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1wiIzA4ZmI3YlwiLCAncmdiYSgwLDAsMCwwKSddLFxuICAvLyBzZWNvbmQgY29sb3IgaXMgdHJhbnNwYXJlbnRcbiAgU0laRTogNDAsXG4gIE1BWDogMTAwMCxcbiAgLy8gY29ycmVzcG9uZHMgdy8gdGhlIHNlY3Rpb25zJyBsZW5ndGhzXG59O1xuXG5jbGFzcyBXYWxscyB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmFuZ2xlID0gLTYwO1xuICAgIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSA9IC02MDtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuXG4gICAgdGhpcy5jb21ib3MgPSBbXG4gICAgICBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2VdLFxuICAgICAgW3RydWUsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlLCB0cnVlXSxcbiAgICAgIFt0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZV0sXG4gICAgICBbdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWUsIHRydWVdLFxuICAgICAgW3RydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlXSxcbiAgICAgIFtmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0sXG4gICAgICBbdHJ1ZSwgZmFsc2UsIHRydWUsIGZhbHNlLCB0cnVlLCBmYWxzZV0sXG4gICAgICBbdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWUsIGZhbHNlXSwgICAgIC8vIDggY29tYm9zXG4gICAgXVxuXG4gICAgdGhpcy53YWxsQ29tYm9zID0gW107XG4gICAgXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5wb3B1bGF0ZVdhbGxzKCksIDIwMDApO1xuICB9XG5cbiAgZHJhdyAoY3R4LCBjb21ibykge1xuICAgIGxldCBwcmV2Q29vcmQsIHdhbGxzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gLTE7IGkgPD0gNTsgaSsrKSB7XG4gICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyA2MDtcbiAgICAgIH1cblxuICAgICAgbGV0IHgyLCB5MiwgYXgsIGF5LCBieCwgYnk7XG4gICAgICAvLyBjZW50ZXIgcG9pbnRcbiAgICAgIHgyID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogREVGQVVMVFMuTUFYO1xuICAgICAgeTIgPSB0aGlzLnkgKyBNYXRoLnNpbihNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBERUZBVUxUUy5NQVg7XG5cbiAgICAgIC8vIHRhcGV6b2lkIHBvaW50IG9uIGZpcnN0IGxpbmUgXG4gICAgICBieCA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIChERUZBVUxUUy5NQVggLSBERUZBVUxUUy5TSVpFKTtcbiAgICAgIGJ5ID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogKERFRkFVTFRTLk1BWCAtIERFRkFVTFRTLlNJWkUpOyBcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyhieCwgYnkpO1xuICAgICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuXG4gICAgICBpZiAocHJldkNvb3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3R4LmxpbmVUbyguLi5wcmV2Q29vcmQpO1xuXG4gICAgICAgIGF4ID0gcHJldkNvb3JkWzBdICsgTWF0aC5jb3MoTWF0aC5QSSAqICh0aGlzLmFuZ2xlICsgMTIwKSAvIDE4MCkgKiBERUZBVUxUUy5TSVpFO1xuICAgICAgICBheSA9IHByZXZDb29yZFsxXSArIE1hdGguc2luKE1hdGguUEkgKiAodGhpcy5hbmdsZSArIDEyMCkgLyAxODApICogREVGQVVMVFMuU0laRTtcblxuICAgICAgICBjdHgubGluZVRvKGF4LCBheSk7XG4gICAgICAgIGN0eC5saW5lVG8oYngsIGJ5KTtcbiAgICAgIH1cblxuICAgICAgICBpZiAoaSA9PT0gLTEgfHwgY29tYm9baV0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzFdO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMV07XG4gICAgICAgIH0gZWxzZSBpZiAoY29tYm9baV0pIHtcbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMF07XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1swXTtcbiAgICAgICAgfVxuXG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBwcmV2Q29vcmQgPSBbeDIsIHkyXTtcblxuICAgICAgbGV0IHdhbGwgPSB7XG4gICAgICAgIGxlbmd0aDogMTAwMCxcbiAgICAgICAgaXNXYWxsOiAnJyxcbiAgICAgIH07XG5cbiAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICB3YWxsLmlzV2FsbCA9ICdsaW5lJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhbGwuaXNXYWxsID0gY29tYm9baV07XG4gICAgICB9XG5cbiAgICAgIHdhbGxzLnB1c2god2FsbCk7XG4gICAgfVxuXG4gICAgdGhpcy53YWxsQ29tYm9zLnB1c2god2FsbHMpO1xuICB9XG5cbiAgcG9wdWxhdGVXYWxscygpIHtcbiAgICBsZXQgY29tYm9zSWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgbGV0IGNvbWJvID0gdGhpcy5jb21ib3NbY29tYm9zSWR4XTtcbiAgICBjb25zb2xlLmxvZyhjb21ib3NJZHgpO1xuICAgIGNvbnNvbGUubG9nKGNvbWJvKTtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCwgY29tYm8pO1xuICB9XG5cbiAgYW5pbWF0ZShjdHgpIHtcbiAgICBpZiAodGhpcy53YWxsQ29tYm9zLmxlbmd0aCAhPT0gMCAmJiB0aGlzLndhbGxDb21ib3NbdGhpcy53YWxsQ29tYm9zLmxlbmd0aCAtIDFdLmxlbmd0aCAlIDcgPT09IDApIHtcbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndhbGxDb21ib3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHdhbGxzID0gdGhpcy53YWxsQ29tYm9zW2ldO1xuXG4gICAgICAgIGlmICh3YWxsc1swXS5sZW5ndGggPT09IDgwKSB7XG4gICAgICAgICAgdGhpcy53YWxsQ29tYm9zLnVuc2hpZnQoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcmV2Q29vcmQ7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3YWxscy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCB3YWxsID0gd2FsbHNbal07XG5cbiAgICAgICAgICBpZiAod2FsbC5pc1dhbGwgIT09ICdsaW5lJykge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlV2FsbEFuZ2xlID0gdGhpcy5hbmltYXRlV2FsbEFuZ2xlICsgNjA7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBsZXQgeDIsIHkyLCBheCwgYXksIGJ4LCBieSwgbmV3TGVuZ3RoO1xuICBcbiAgICAgICAgICBuZXdMZW5ndGggPSB3YWxsLmxlbmd0aCAtIDU7XG4gIFxuICAgICAgICAgIHgyID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAvIDE4MCkgKiBuZXdMZW5ndGg7XG4gICAgICAgICAgeTIgPSB0aGlzLnkgKyBNYXRoLnNpbihNYXRoLlBJICogdGhpcy5hbmltYXRlV2FsbEFuZ2xlIC8gMTgwKSAqIG5ld0xlbmd0aDtcbiAgXG4gICAgICAgICAgLy8gdGFwZXpvaWQgcG9pbnQgb24gZmlyc3QgbGluZSBcbiAgICAgICAgICBieCA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgLyAxODApICogKG5ld0xlbmd0aCAtIERFRkFVTFRTLlNJWkUpO1xuICAgICAgICAgIGJ5ID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAvIDE4MCkgKiAobmV3TGVuZ3RoIC0gREVGQVVMVFMuU0laRSk7XG4gIFxuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHgubW92ZVRvKGJ4LCBieSk7XG4gICAgICAgICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICBcbiAgICAgICAgICBpZiAocHJldkNvb3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oLi4ucHJldkNvb3JkKTtcbiAgXG4gICAgICAgICAgICBheCA9IHByZXZDb29yZFswXSArIE1hdGguY29zKE1hdGguUEkgKiAodGhpcy5hbmltYXRlV2FsbEFuZ2xlICsgMTIwKSAvIDE4MCkgKiBERUZBVUxUUy5TSVpFO1xuICAgICAgICAgICAgYXkgPSBwcmV2Q29vcmRbMV0gKyBNYXRoLnNpbihNYXRoLlBJICogKHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSArIDEyMCkgLyAxODApICogREVGQVVMVFMuU0laRTtcbiAgXG4gICAgICAgICAgICBjdHgubGluZVRvKGF4LCBheSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKGJ4LCBieSk7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBpZiAod2FsbC5pc1dhbGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1swXTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMF07XG4gICAgICAgICAgfSBlbHNlIGlmICh3YWxsLmlzV2FsbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1sxXTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMV07XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgXG4gICAgICAgICAgcHJldkNvb3JkID0gW3gyLCB5Ml07XG4gIFxuICAgICAgICAgIHRoaXMud2FsbENvbWJvc1tpXVtqXSA9IHtcbiAgICAgICAgICAgIGxlbmd0aDogbmV3TGVuZ3RoLFxuICAgICAgICAgICAgaXNXYWxsOiB3YWxsLmlzV2FsbCxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2FsbHM7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==