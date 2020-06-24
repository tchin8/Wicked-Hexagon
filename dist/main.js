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
    this.walls = new _walls__WEBPACK_IMPORTED_MODULE_4__["default"](canvas);
    this.cursorDir = '';
    this.music = new Audio('assets/sounds/Cusp.mp3');
  }

  _createClass(WickedHexagon, [{
    key: "play",
    value: function play() {
      var _this = this;

      // this.running = true;
      var timestamp = new Date();
      this.lastTime = 0;
      this.startTime = new Date();
      setTimeout(function () {
        return _this.animate(timestamp);
      }, 300); // // comment back in later
      // this.music.play();
    }
  }, {
    key: "animate",
    value: function animate(timestamp) {
      var _this2 = this;

      var deltaTime = timestamp - this.lastTime;
      this.deltaTime = deltaTime;
      this.lastTime = timestamp;
      this.stopwatch.animate(this.startTime);
      this.sections.animate(deltaTime);
      this.hexagon.animate(deltaTime);
      this.cursor.animate(this.ctx);
      this.walls.animate();
      setTimeout(function () {
        return _this2.walls.populateWalls();
      }, 1000);

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

        length = 500;
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
  MAX: 500 // corresponds w/ the sections' lengths

};

var Walls = /*#__PURE__*/function () {
  function Walls(canvas) {
    var _this = this;

    _classCallCheck(this, Walls);

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.angle = -60;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.combos = [[true, true, true, true, true, false], [true, true, true, true, false, true], [true, true, true, false, true, true], [true, true, false, true, true, true], [true, false, true, true, true, true], [false, true, true, true, true, true], [true, false, true, false, true, false], [true, true, false, true, true, false] // 8 combos
    ];
    this.walls = [];
    setInterval(function () {
      return _this.populateWalls(_this.startTime);
    }, 2000); // setInterval(() => this.animate(), 100);
  }

  _createClass(Walls, [{
    key: "draw",
    value: function draw(ctx, combo) {
      var prevCoord;

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

        if (combo !== undefined) {
          if (i === -1 || combo[i] === false) {
            ctx.strokeStyle = DEFAULTS.COLORS[1];
            ctx.fillStyle = DEFAULTS.COLORS[1];
          } else if (combo[i]) {
            ctx.strokeStyle = DEFAULTS.COLORS[0];
            ctx.fillStyle = DEFAULTS.COLORS[0];
          }
        }

        ctx.fill();
        ctx.stroke();
        prevCoord = [x2 + DEFAULTS.SIZE, y2 + DEFAULTS.SIZE];
        ctx.fill();
        ctx.stroke();
        prevCoord = [x2, y2];
        var wall = {
          length: 500,
          isWall: ''
        };

        if (i === -1) {
          wall.isWall = 'line';
        } else {
          wall.isWall = combo[i];
        }

        this.walls.push(wall);
      }
    }
  }, {
    key: "populateWalls",
    value: function populateWalls() {
      var combosIdx = Math.floor(Math.random() * 9);
      var combo = this.combos[combosIdx];
      this.draw(this.ctx, combo);
    }
  }, {
    key: "animate",
    value: function animate() {
      if (this.walls.length !== 0) {
        for (var i = 0; i < this.walls.length; i++) {
          var wall = this.walls[i];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJXaWNrZWRIZXhhZ29uIiwiREVGQVVMVFMiLCJDT0xPUiIsIlJBRElVUyIsIlNJWkUiLCJDdXJzb3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiYW5nbGUiLCJyb3RhdGVBbmdsZSIsIngiLCJ5IiwiZHJhdyIsImN1cnNvclgiLCJNYXRoIiwiY29zIiwiUEkiLCJjdXJzb3JZIiwic2luIiwidHJhbnNsYXRlIiwicm90YXRlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiZmlsbFN0eWxlIiwiZmlsbCIsImRlbHRhVGltZSIsImRpbWVuc2lvbnMiLCJydW5uaW5nIiwicmVnaXN0ZXJFdmVudHMiLCJyZXN0YXJ0Iiwic2VjdGlvbnMiLCJTZWN0aW9ucyIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInN0b3B3YXRjaCIsIlN0b3B3YXRjaCIsImhleGFnb24iLCJIZXhhZ29uIiwiY3Vyc29yIiwid2FsbHMiLCJXYWxscyIsImN1cnNvckRpciIsIm11c2ljIiwiQXVkaW8iLCJ0aW1lc3RhbXAiLCJEYXRlIiwibGFzdFRpbWUiLCJzdGFydFRpbWUiLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZSIsInBvcHVsYXRlV2FsbHMiLCJwaXZvdENsb2Nrd2lzZSIsInBpdm90Q291bnRlckNsb2Nrd2lzZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJ0aGF0IiwiZXZlbnQiLCJrZXlDb2RlIiwiY29uc29sZSIsImxvZyIsInBsYXkiLCJDT0xPUlMiLCJoZXgxIiwiaGV4MiIsInByZXZDb29yZCIsImkiLCJ4MiIsInkyIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJ0aW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVySFRNTCIsIm51bSIsImZsb29yIiwidG9TdHJpbmciLCJzcGxpdCIsIm5vdyIsInJvdW5kIiwiY291bnREZWNpbWFscyIsIk1BWCIsImNvbWJvcyIsInNldEludGVydmFsIiwiY29tYm8iLCJheCIsImF5IiwiYngiLCJieSIsIndhbGwiLCJpc1dhbGwiLCJwdXNoIiwiY29tYm9zSWR4IiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7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QixLQUFMLENBQVdxRCxJQUFYLENBQWdCRixJQUFoQjtBQUNEO0FBQ0Y7OztvQ0FFZTtBQUNkLFVBQUlHLFNBQVMsR0FBRy9FLElBQUksQ0FBQzhELEtBQUwsQ0FBVzlELElBQUksQ0FBQ2dGLE1BQUwsS0FBZ0IsQ0FBM0IsQ0FBaEI7QUFDQSxVQUFJVCxLQUFLLEdBQUcsS0FBS0YsTUFBTCxDQUFZVSxTQUFaLENBQVo7QUFFQSxXQUFLakYsSUFBTCxDQUFVLEtBQUtOLEdBQWYsRUFBb0IrRSxLQUFwQjtBQUNEOzs7OEJBRVM7QUFDUixVQUFJLEtBQUs5QyxLQUFMLENBQVc2QixNQUFYLEtBQXNCLENBQTFCLEVBQTZCO0FBQzNCLGFBQUssSUFBSUgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMUIsS0FBTCxDQUFXNkIsTUFBL0IsRUFBdUNILENBQUMsRUFBeEMsRUFBNEM7QUFDMUMsY0FBSXlCLElBQUksR0FBRyxLQUFLbkQsS0FBTCxDQUFXMEIsQ0FBWCxDQUFYO0FBQ0Q7QUFDRjtBQUNGOzs7Ozs7QUFHWXpCLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDakhBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBXaWNrZWRIZXhhZ29uIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcbi8vIGltcG9ydCBXaWNrZWRIZXhhZ29uIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcblxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgY2FudmFzRWwuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICBjYW52YXNFbC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gIG5ldyBXaWNrZWRIZXhhZ29uKGNhbnZhc0VsKTtcbn0pO1xuIiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SOiBcIiMwOGZiN2JcIixcbiAgUkFESVVTOiA2MCxcbiAgU0laRTogNSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmFuZ2xlID0gMzMwO1xuICAgIHRoaXMucm90YXRlQW5nbGUgPSAwO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAvIDI7XG5cbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICAvLyByaWdodCwgdmVsICsgMzA/XG4gICAgLy8gcm90YXRlcyB0aGUgY3Vyc29yIGRlcGVuZGluZyBvbiB3aGVyZSBhcm91bmQgdGhlIGhleGFnb24gaXQgaXNcblxuICAgIHRoaXMuY3Vyc29yWCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpICsgKE1hdGguY29zKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSAqIERFRkFVTFRTLlJBRElVUyk7XG4gICAgdGhpcy5jdXJzb3JZID0gKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpICsgKE1hdGguc2luKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSAqIERFRkFVTFRTLlJBRElVUyk7XG5cbiAgICBjdHgudHJhbnNsYXRlKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICBjdHgudHJhbnNsYXRlKC10aGlzLmN1cnNvclgsIC10aGlzLmN1cnNvclkpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy5jdXJzb3JYIC0gREVGQVVMVFMuU0laRSwgdGhpcy5jdXJzb3JZIC0gREVGQVVMVFMuU0laRSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclggKyBERUZBVUxUUy5TSVpFLCB0aGlzLmN1cnNvclkpO1xuICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYIC0gREVGQVVMVFMuU0laRSwgdGhpcy5jdXJzb3JZICsgREVGQVVMVFMuU0laRSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjdHgudHJhbnNsYXRlKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICBjdHgucm90YXRlKC10aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy5jdXJzb3JYLCAtdGhpcy5jdXJzb3JZKTtcbiAgfVxuXG4gIGFuaW1hdGUoY3R4KSB7XG4gICAgdGhpcy5kcmF3KGN0eCk7XG4gIH1cblxuICBwaXZvdENsb2Nrd2lzZShkZWx0YVRpbWUsIGN0eCkge1xuICAgIHRoaXMuYW5nbGUgKz0gKDYwIC8gZGVsdGFUaW1lKTtcbiAgICB0aGlzLmRyYXcoY3R4KVxuICB9XG5cbiAgcGl2b3RDb3VudGVyQ2xvY2t3aXNlKGRlbHRhVGltZSwgY3R4KSB7XG4gICAgdGhpcy5hbmdsZSAtPSAoNjAgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyhjdHgpO1xuICB9XG59IiwiaW1wb3J0IFN0b3B3YXRjaCBmcm9tICcuL3N0b3B3YXRjaCc7XG5pbXBvcnQgSGV4YWdvbiBmcm9tICcuL2hleGFnb24nO1xuaW1wb3J0IEN1cnNvciBmcm9tICcuL2N1cnNvcic7XG5pbXBvcnQgU2VjdGlvbnMgZnJvbSAnLi9zZWN0aW9ucyc7XG5pbXBvcnQgV2FsbHMgZnJvbSAnLi93YWxscyc7XG4vLyBpbXBvcnQgdGhlIG90aGVyIHNjcmlwdHNcblxuY2xhc3MgV2lja2VkSGV4YWdvbiB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aDtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICAgIHRoaXMucmVzdGFydCgpO1xuXG4gICAgdGhpcy5zZWN0aW9ucyA9IG5ldyBTZWN0aW9ucyhjYW52YXMpO1xuICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgdGhpcy5zdG9wd2F0Y2ggPSBuZXcgU3RvcHdhdGNoKGNhbnZhcyk7XG4gICAgdGhpcy5oZXhhZ29uID0gbmV3IEhleGFnb24oY2FudmFzKTtcbiAgICB0aGlzLmN1cnNvciA9IG5ldyBDdXJzb3IoY2FudmFzKTtcblxuICAgIHRoaXMud2FsbHMgPSBuZXcgV2FsbHMoY2FudmFzKTtcblxuICAgIHRoaXMuY3Vyc29yRGlyID0gJyc7XG4gICAgdGhpcy5tdXNpYyA9IG5ldyBBdWRpbygnYXNzZXRzL3NvdW5kcy9DdXNwLm1wMycpO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICAvLyB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIFxuICAgIGxldCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFuaW1hdGUodGltZXN0YW1wKSwgMzAwKTtcblxuICAgIC8vIC8vIGNvbW1lbnQgYmFjayBpbiBsYXRlclxuICAgIC8vIHRoaXMubXVzaWMucGxheSgpO1xuICB9XG4gIFxuICBhbmltYXRlKHRpbWVzdGFtcCkge1xuICAgIGxldCBkZWx0YVRpbWUgPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lO1xuXG4gICAgdGhpcy5kZWx0YVRpbWUgPSBkZWx0YVRpbWU7XG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcblxuICAgIHRoaXMuc3RvcHdhdGNoLmFuaW1hdGUodGhpcy5zdGFydFRpbWUpO1xuICAgIHRoaXMuc2VjdGlvbnMuYW5pbWF0ZShkZWx0YVRpbWUpO1xuICAgIHRoaXMuaGV4YWdvbi5hbmltYXRlKGRlbHRhVGltZSk7XG4gICAgdGhpcy5jdXJzb3IuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgdGhpcy53YWxscy5hbmltYXRlKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMud2FsbHMucG9wdWxhdGVXYWxscygpLCAxMDAwKTtcblxuICAgIGlmICh0aGlzLmN1cnNvckRpciA9PT0gJ2Nsb2Nrd2lzZScpIHtcbiAgICAgIHRoaXMuY3Vyc29yLnBpdm90Q2xvY2t3aXNlKGRlbHRhVGltZSwgdGhpcy5jdHgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJzb3JEaXIgPT09ICdjb3VudGVyQ2xvY2t3aXNlJykge1xuICAgICAgdGhpcy5jdXJzb3IucGl2b3RDb3VudGVyQ2xvY2t3aXNlKGRlbHRhVGltZSwgdGhpcy5jdHgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJ1bm5pbmcgPSB0cnVlKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgfHwgZXZlbnQua2V5Q29kZSA9PT0gNjUpIHtcbiAgICAgICAgaWYgKHRoYXQucnVubmluZykge1xuICAgICAgICAgIHRoYXQuY3Vyc29yRGlyID0gJ2NvdW50ZXJDbG9ja3dpc2UnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5IHx8IGV2ZW50LmtleUNvZGUgPT09IDY4KSB7XG4gICAgICAgIGlmICh0aGF0LnJ1bm5pbmcpIHtcbiAgICAgICAgICB0aGF0LmN1cnNvckRpciA9ICdjbG9ja3dpc2UnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzcGFjZScpO1xuICAgICAgICB0aGF0LnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGF0LnBsYXkoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiAodGhhdC5jdXJzb3JEaXIgPSAnJykpO1xuICB9XG5cbiAgcmVzdGFydCgpIHtcblxuICB9XG5cbiAgZ2FtZU92ZXIoKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lja2VkSGV4YWdvbjsiLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXCIjMDAwMDAwXCIsIFwiIzA4ZmI3YlwiXSxcbiAgU0laRTogNTAsXG59XG5cbmNsYXNzIEhleGFnb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLmFuZ2xlID0gMDtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgIGN0eC5yb3RhdGUodGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG5cbiAgICBsZXQgaGV4MSA9IDA7XG4gICAgZm9yIChoZXgxOyBoZXgxIDw9IDY7IGhleDErKykge1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyBERUZBVUxUUy5TSVpFICogTWF0aC5jb3MoaGV4MSAqIDIgKiBNYXRoLlBJIC8gNiksIHRoaXMueSArIERFRkFVTFRTLlNJWkUgKiBNYXRoLnNpbihoZXgxICogMiAqIE1hdGguUEkgLyA2KSk7XG4gICAgfVxuXG4gICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1sxXTtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuXG4gICAgbGV0IGhleDIgPSAwO1xuICAgIGZvciAoaGV4MjsgaGV4MiA8PSA2OyBoZXgyKyspIHtcbiAgICAgIGN0eC5saW5lVG8odGhpcy54ICsgNDQgKiBNYXRoLmNvcyhoZXgyICogMiAqIE1hdGguUEkgLyA2KSwgdGhpcy55ICsgNDQgKiBNYXRoLnNpbihoZXgyICogMiAqIE1hdGguUEkgLyA2KSk7XG4gICAgfVxuXG4gICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1swXTtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgYW5pbWF0ZShkZWx0YVRpbWUpIHtcbiAgICB0aGlzLmFuZ2xlID0gKDIwIC8gZGVsdGFUaW1lKTtcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhleGFnb247IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1wiIzAwMDAwMFwiLCBcIiMwMjI3MTNcIl0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb25zIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5nbGUgPSAtNjA7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICBcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBsZXQgcHJldkNvb3JkO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSArIDYwO1xuICAgICAgfVxuXG4gICAgICBsZXQgeDIsIHkyLCBsZW5ndGg7XG5cbiAgICAgIC8vIGxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5zcXJ0KDMpICogdGhpcy54ICogMik7XG4gICAgICBsZW5ndGggPSA1MDA7XG4gICAgICB4MiA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIGxlbmd0aDtcbiAgICAgIHkyID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogbGVuZ3RoO1xuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcbiAgICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICAgIGlmIChwcmV2Q29vcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdHgubGluZVRvKC4uLnByZXZDb29yZCk7XG4gICAgICB9XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbaSAlIDJdO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1tpICUgMl07XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBwcmV2Q29vcmQgPSBbeDIsIHkyXTtcbiAgICB9XG4gIH1cblxuICBhbmltYXRlKGRlbHRhVGltZSkge1xuICAgIC8vIHRoaXMuYW5nbGUgKz0gKDEgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH0gIFxufSIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcIiMwMDAwMDBcIiwgXCIjZmZmZmZmXCJdLFxufVxuXG5jbGFzcyBTdG9wd2F0Y2gge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy50aW1lID0gXCIwLjAwXCI7XG5cbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3Qgc3RvcHdhdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0b3B3YXRjaFwiKTtcbiAgICBzdG9wd2F0Y2hbMF0uaW5uZXJIVE1MID0gXCJcIjtcbiAgICBzdG9wd2F0Y2hbMF0uaW5uZXJIVE1MICs9IGAke3RoaXMudGltZX1gO1xuICB9XG5cbiAgY291bnREZWNpbWFscyhudW0pIHtcbiAgICBpZiAoTWF0aC5mbG9vcihudW0pICE9PSBudW0pIHtcbiAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoIHx8IDA7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgYW5pbWF0ZShzdGFydFRpbWUpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMudGltZSA9IE1hdGgucm91bmQoKChub3cgLSBzdGFydFRpbWUpIC8gMTAwMCkgKiAxMDApIC8gMTAwO1xuXG4gICAgaWYgKHRoaXMuY291bnREZWNpbWFscyh0aGlzLnRpbWUpID09PSAwKSB7XG4gICAgICB0aGlzLnRpbWUgPSBgJHt0aGlzLnRpbWV9LjAwYDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY291bnREZWNpbWFscyh0aGlzLnRpbWUpID09PSAxKSB7XG4gICAgICB0aGlzLnRpbWUgPSBgJHt0aGlzLnRpbWV9MGA7XG4gICAgfVxuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9wd2F0Y2g7IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1wiIzA4ZmI3YlwiLCAncmdiYSgwLDAsMCwwKSddLFxuICAvLyBzZWNvbmQgY29sb3IgaXMgdHJhbnNwYXJlbnRcbiAgU0laRTogNDAsXG4gIE1BWDogNTAwLFxuICAvLyBjb3JyZXNwb25kcyB3LyB0aGUgc2VjdGlvbnMnIGxlbmd0aHNcbn07XG5cbmNsYXNzIFdhbGxzIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5nbGUgPSAtNjA7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcblxuICAgIHRoaXMuY29tYm9zID0gW1xuICAgICAgW3RydWUsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlXSxcbiAgICAgIFt0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZV0sXG4gICAgICBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWVdLFxuICAgICAgW3RydWUsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlXSxcbiAgICAgIFt0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0sXG4gICAgICBbZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIHRydWVdLFxuICAgICAgW3RydWUsIGZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2VdLFxuICAgICAgW3RydWUsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZV0sICAgICAvLyA4IGNvbWJvc1xuICAgIF1cblxuICAgIHRoaXMud2FsbHMgPSBbXTtcblxuICAgIHNldEludGVydmFsKCgpID0+IHRoaXMucG9wdWxhdGVXYWxscyh0aGlzLnN0YXJ0VGltZSksIDIwMDApO1xuICAgIC8vIHNldEludGVydmFsKCgpID0+IHRoaXMuYW5pbWF0ZSgpLCAxMDApO1xuICB9XG5cbiAgZHJhdyAoY3R4LCBjb21ibykge1xuICAgIGxldCBwcmV2Q29vcmQ7XG5cbiAgICBmb3IgKGxldCBpID0gLTE7IGkgPD0gNTsgaSsrKSB7XG4gICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyA2MDtcbiAgICAgIH1cblxuICAgICAgbGV0IHgyLCB5MiwgYXgsIGF5LCBieCwgYnk7XG4gICAgICAvLyBjZW50ZXIgcG9pbnRcbiAgICAgIHgyID0gdGhpcy54ICsgTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogREVGQVVMVFMuTUFYO1xuICAgICAgeTIgPSB0aGlzLnkgKyBNYXRoLnNpbihNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBERUZBVUxUUy5NQVg7XG5cbiAgICAgIC8vIHRhcGV6b2lkIHBvaW50IG9uIGZpcnN0IGxpbmUgXG4gICAgICBieCA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIChERUZBVUxUUy5NQVggLSBERUZBVUxUUy5TSVpFKTtcbiAgICAgIGJ5ID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogKERFRkFVTFRTLk1BWCAtIERFRkFVTFRTLlNJWkUpOyAgICAgIFxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyhieCwgYnkpO1xuICAgICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgICAgaWYgKHByZXZDb29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN0eC5saW5lVG8oLi4ucHJldkNvb3JkKTtcblxuICAgICAgICBheCA9IHByZXZDb29yZFswXSArIE1hdGguY29zKE1hdGguUEkgKiAodGhpcy5hbmdsZSArIDEyMCkgLyAxODApICogREVGQVVMVFMuU0laRTtcbiAgICAgICAgYXkgPSBwcmV2Q29vcmRbMV0gKyBNYXRoLnNpbihNYXRoLlBJICogKHRoaXMuYW5nbGUgKyAxMjApIC8gMTgwKSAqIERFRkFVTFRTLlNJWkU7XG5cbiAgICAgICAgY3R4LmxpbmVUbyhheCwgYXkpO1xuXG4gICAgICAgIGN0eC5saW5lVG8oYngsIGJ5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbWJvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGkgPT09IC0xIHx8IGNvbWJvW2ldID09PSBmYWxzZSkge1xuICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1sxXTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzFdO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbWJvW2ldKSB7XG4gICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzBdO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIHByZXZDb29yZCA9IFt4MiArIERFRkFVTFRTLlNJWkUsIHkyICsgREVGQVVMVFMuU0laRV07XG4gICAgXG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBwcmV2Q29vcmQgPSBbeDIsIHkyXTtcblxuICAgICAgbGV0IHdhbGwgPSB7XG4gICAgICAgIGxlbmd0aDogNTAwLFxuICAgICAgICBpc1dhbGw6ICcnLFxuICAgICAgfTtcblxuICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgIHdhbGwuaXNXYWxsID0gJ2xpbmUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FsbC5pc1dhbGwgPSBjb21ib1tpXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy53YWxscy5wdXNoKHdhbGwpO1xuICAgIH1cbiAgfVxuXG4gIHBvcHVsYXRlV2FsbHMoKSB7XG4gICAgbGV0IGNvbWJvc0lkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgIGxldCBjb21ibyA9IHRoaXMuY29tYm9zW2NvbWJvc0lkeF07XG5cbiAgICB0aGlzLmRyYXcodGhpcy5jdHgsIGNvbWJvKVxuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICBpZiAodGhpcy53YWxscy5sZW5ndGggIT09IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53YWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgd2FsbCA9IHRoaXMud2FsbHNbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxzOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=