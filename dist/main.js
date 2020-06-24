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
      this.angle += 120 / deltaTime;
      this.draw(ctx);
    }
  }, {
    key: "pivotCounterClockwise",
    value: function pivotCounterClockwise(deltaTime, ctx) {
      this.angle -= 120 / deltaTime;
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
      this.walls = new _walls__WEBPACK_IMPORTED_MODULE_4__["default"](this.canvas); // // comment back in later
      // this.music.play();
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
    }, 1000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hleGFnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJXaWNrZWRIZXhhZ29uIiwiREVGQVVMVFMiLCJDT0xPUiIsIlJBRElVUyIsIlNJWkUiLCJDdXJzb3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiYW5nbGUiLCJyb3RhdGVBbmdsZSIsIngiLCJ5IiwiZHJhdyIsImN1cnNvclgiLCJNYXRoIiwiY29zIiwiUEkiLCJjdXJzb3JZIiwic2luIiwidHJhbnNsYXRlIiwicm90YXRlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiZmlsbFN0eWxlIiwiZmlsbCIsImRlbHRhVGltZSIsIkNPTE9SUyIsImRpbWVuc2lvbnMiLCJydW5uaW5nIiwicmVnaXN0ZXJFdmVudHMiLCJyZXN0YXJ0Iiwic2VjdGlvbnMiLCJTZWN0aW9ucyIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInN0b3B3YXRjaCIsIlN0b3B3YXRjaCIsImhleGFnb24iLCJIZXhhZ29uIiwiY3Vyc29yIiwiY3Vyc29yRGlyIiwibXVzaWMiLCJBdWRpbyIsInRpbWVzdGFtcCIsIkRhdGUiLCJsYXN0VGltZSIsInN0YXJ0VGltZSIsInNldFRpbWVvdXQiLCJhbmltYXRlIiwid2FsbHMiLCJXYWxscyIsInBpdm90Q2xvY2t3aXNlIiwicGl2b3RDb3VudGVyQ2xvY2t3aXNlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsInRoYXQiLCJldmVudCIsImtleUNvZGUiLCJjb25zb2xlIiwibG9nIiwicGxheSIsImhleDEiLCJoZXgyIiwicHJldkNvb3JkIiwiaSIsIngyIiwieTIiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInRpbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwibnVtIiwiZmxvb3IiLCJ0b1N0cmluZyIsInNwbGl0Iiwibm93Iiwicm91bmQiLCJjb3VudERlY2ltYWxzIiwiTUFYIiwiYW5pbWF0ZVdhbGxBbmdsZSIsImNvbWJvcyIsIndhbGxDb21ib3MiLCJzZXRJbnRlcnZhbCIsInBvcHVsYXRlV2FsbHMiLCJjb21ibyIsImF4IiwiYXkiLCJieCIsImJ5Iiwid2FsbCIsImlzV2FsbCIsInB1c2giLCJjb21ib3NJZHgiLCJyYW5kb20iLCJ1bnNoaWZ0IiwiaiIsIm5ld0xlbmd0aCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNB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QWdCLENBQWhCLENBQWhCO0FBQ0QsYUFIRCxNQUdPLElBQUlpRSxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsS0FBcEIsRUFBMkI7QUFDaEN2RixpQkFBRyxDQUFDK0QsV0FBSixHQUFrQnJFLFFBQVEsQ0FBQzJCLE1BQVQsQ0FBZ0IsQ0FBaEIsQ0FBbEI7QUFDQXJCLGlCQUFHLENBQUNrQixTQUFKLEdBQWdCeEIsUUFBUSxDQUFDMkIsTUFBVCxDQUFnQixDQUFoQixDQUFoQjtBQUNEOztBQUVEckIsZUFBRyxDQUFDbUIsSUFBSjtBQUNBbkIsZUFBRyxDQUFDZ0UsTUFBSjtBQUVBUCxxQkFBUyxHQUFHLENBQUNFLEVBQUQsRUFBS0MsRUFBTCxDQUFaO0FBRUEsaUJBQUtrQixVQUFMLENBQWdCcEIsQ0FBaEIsRUFBbUJrQyxDQUFuQixJQUF3QjtBQUN0Qi9CLG9CQUFNLEVBQUVnQyxTQURjO0FBRXRCTixvQkFBTSxFQUFFRCxJQUFJLENBQUNDO0FBRlMsYUFBeEI7QUFJRDtBQUNGO0FBQ0Y7QUFDRjs7Ozs7O0FBR1kzQyxvRUFBZixFOzs7Ozs7Ozs7OztBQzNLQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgV2lja2VkSGV4YWdvbiBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG4vLyBpbXBvcnQgV2lja2VkSGV4YWdvbiBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5cbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gIGNhbnZhc0VsLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgY2FudmFzRWwud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICBuZXcgV2lja2VkSGV4YWdvbihjYW52YXNFbCk7XG59KTtcbiIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUjogXCIjMDhmYjdiXCIsXG4gIFJBRElVUzogNjAsXG4gIFNJWkU6IDUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJzb3Ige1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmdsZSA9IDMzMDtcbiAgICB0aGlzLnJvdGF0ZUFuZ2xlID0gMDtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuXG4gICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgLy8gZGVidWdnZXI7XG4gICAgLy8gcmlnaHQsIHZlbCArIDMwP1xuICAgIC8vIHJvdGF0ZXMgdGhlIGN1cnNvciBkZXBlbmRpbmcgb24gd2hlcmUgYXJvdW5kIHRoZSBoZXhhZ29uIGl0IGlzXG5cbiAgICB0aGlzLmN1cnNvclggPSAodGhpcy5jYW52YXMud2lkdGggLyAyKSArIChNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiBERUZBVUxUUy5SQURJVVMpO1xuICAgIHRoaXMuY3Vyc29yWSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSArIChNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiBERUZBVUxUUy5SQURJVVMpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy5jdXJzb3JYLCAtdGhpcy5jdXJzb3JZKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMuY3Vyc29yWCAtIERFRkFVTFRTLlNJWkUsIHRoaXMuY3Vyc29yWSAtIERFRkFVTFRTLlNJWkUpO1xuICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYICsgREVGQVVMVFMuU0laRSwgdGhpcy5jdXJzb3JZKTtcbiAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCAtIERFRkFVTFRTLlNJWkUsIHRoaXMuY3Vyc29yWSArIERFRkFVTFRTLlNJWkUpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUjtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgY3R4LnJvdGF0ZSgtdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGN0eC50cmFuc2xhdGUoLXRoaXMuY3Vyc29yWCwgLXRoaXMuY3Vyc29yWSk7XG4gIH1cblxuICBhbmltYXRlKGN0eCkge1xuICAgIHRoaXMuZHJhdyhjdHgpO1xuICB9XG5cbiAgcGl2b3RDbG9ja3dpc2UoZGVsdGFUaW1lLCBjdHgpIHtcbiAgICB0aGlzLmFuZ2xlICs9ICgxMjAgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyhjdHgpXG4gIH1cblxuICBwaXZvdENvdW50ZXJDbG9ja3dpc2UoZGVsdGFUaW1lLCBjdHgpIHtcbiAgICB0aGlzLmFuZ2xlIC09ICgxMjAgLyBkZWx0YVRpbWUpO1xuICAgIHRoaXMuZHJhdyhjdHgpO1xuICB9XG59IiwiaW1wb3J0IFN0b3B3YXRjaCBmcm9tICcuL3N0b3B3YXRjaCc7XG5pbXBvcnQgSGV4YWdvbiBmcm9tICcuL2hleGFnb24nO1xuaW1wb3J0IEN1cnNvciBmcm9tICcuL2N1cnNvcic7XG5pbXBvcnQgU2VjdGlvbnMgZnJvbSAnLi9zZWN0aW9ucyc7XG5pbXBvcnQgV2FsbHMgZnJvbSAnLi93YWxscyc7XG4vLyBpbXBvcnQgdGhlIG90aGVyIHNjcmlwdHNcblxuY29uc3QgQ09MT1JTID0gW1xuICAvLyBiYXNlLCBzZWN0aW9ucywgY3Vyc29yL3dhbGxzICAgfiAvLyBibGFjayB0byBjb2xvciAvLyB3aGl0ZSB0byBjb2xvclxuICBbXCIjMDAwMDAwXCIsIFwiIzAyMjcxM1wiLCBcIiMwOGZiN2JcIl0sICAgIC8vIGJsYWNrL2dyZWVuXG4gIFtcIiMwMDAwMDBcIiwgXCIjMjYxNTAxXCIsIFwiI2VmODcwOFwiXSwgICAgLy8gYmxhY2svb3JhbmdlXG4gIFtcIiNmZmZmZmZcIiwgXCIjZjVkY2YwXCIsIFwiI2MzMWU5ZVwiXSwgICAgLy8gd2hpdGUvcGlua1xuICBbXCIjZmZmZmZmXCIsIFwiI2U3ZTNmN1wiLCBcIiM2YjRhY2FcIl0sICAgIC8vIHdoaXRlL3B1cnBsZVxuICBbXCIjZmZmZmZmXCIsIFwiI2RkZThmY1wiLCBcIiMyYjZhZWFcIl0sICAgIC8vIHdoaXRlL2JsdWVcbl1cblxuY2xhc3MgV2lja2VkSGV4YWdvbiB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aDtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICAgIHRoaXMucmVzdGFydCgpO1xuXG4gICAgdGhpcy5zZWN0aW9ucyA9IG5ldyBTZWN0aW9ucyhjYW52YXMpO1xuICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgdGhpcy5zdG9wd2F0Y2ggPSBuZXcgU3RvcHdhdGNoKGNhbnZhcyk7XG4gICAgdGhpcy5oZXhhZ29uID0gbmV3IEhleGFnb24oY2FudmFzKTtcbiAgICB0aGlzLmN1cnNvciA9IG5ldyBDdXJzb3IoY2FudmFzKTtcblxuICAgIHRoaXMuY3Vyc29yRGlyID0gJyc7XG4gICAgdGhpcy5tdXNpYyA9IG5ldyBBdWRpbygnYXNzZXRzL3NvdW5kcy9DdXNwLm1wMycpO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICBsZXQgdGltZXN0YW1wID0gbmV3IERhdGUoKVxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hbmltYXRlKHRpbWVzdGFtcCksIDMwMCk7XG5cbiAgICB0aGlzLndhbGxzID0gbmV3IFdhbGxzKHRoaXMuY2FudmFzKTtcblxuICAgIC8vIC8vIGNvbW1lbnQgYmFjayBpbiBsYXRlclxuICAgIC8vIHRoaXMubXVzaWMucGxheSgpO1xuICB9XG4gIFxuICBhbmltYXRlKHRpbWVzdGFtcCkge1xuICAgIGxldCBkZWx0YVRpbWUgPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lO1xuXG4gICAgdGhpcy5kZWx0YVRpbWUgPSBkZWx0YVRpbWU7XG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcblxuICAgIHRoaXMuc3RvcHdhdGNoLmFuaW1hdGUodGhpcy5zdGFydFRpbWUpO1xuICAgIHRoaXMuc2VjdGlvbnMuYW5pbWF0ZShkZWx0YVRpbWUpO1xuICAgIHRoaXMuaGV4YWdvbi5hbmltYXRlKGRlbHRhVGltZSk7XG4gICAgdGhpcy5jdXJzb3IuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgdGhpcy53YWxscy5hbmltYXRlKHRoaXMuY3R4KTtcblxuICAgIGlmICh0aGlzLmN1cnNvckRpciA9PT0gJ2Nsb2Nrd2lzZScpIHtcbiAgICAgIHRoaXMuY3Vyc29yLnBpdm90Q2xvY2t3aXNlKGRlbHRhVGltZSwgdGhpcy5jdHgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJzb3JEaXIgPT09ICdjb3VudGVyQ2xvY2t3aXNlJykge1xuICAgICAgdGhpcy5jdXJzb3IucGl2b3RDb3VudGVyQ2xvY2t3aXNlKGRlbHRhVGltZSwgdGhpcy5jdHgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJ1bm5pbmcgPSB0cnVlKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgfHwgZXZlbnQua2V5Q29kZSA9PT0gNjUpIHtcbiAgICAgICAgaWYgKHRoYXQucnVubmluZykge1xuICAgICAgICAgIHRoYXQuY3Vyc29yRGlyID0gJ2NvdW50ZXJDbG9ja3dpc2UnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5IHx8IGV2ZW50LmtleUNvZGUgPT09IDY4KSB7XG4gICAgICAgIGlmICh0aGF0LnJ1bm5pbmcpIHtcbiAgICAgICAgICB0aGF0LmN1cnNvckRpciA9ICdjbG9ja3dpc2UnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzcGFjZScpO1xuICAgICAgICB0aGF0LnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGF0LnBsYXkoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiAodGhhdC5jdXJzb3JEaXIgPSAnJykpO1xuICB9XG5cbiAgcmVzdGFydCgpIHtcblxuICB9XG5cbiAgZ2FtZU92ZXIoKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lja2VkSGV4YWdvbjsiLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXCIjMDAwMDAwXCIsIFwiIzA4ZmI3YlwiXSxcbiAgU0laRTogNTAsXG59XG5cbmNsYXNzIEhleGFnb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLmFuZ2xlID0gMDtcblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgIGN0eC5yb3RhdGUodGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG5cbiAgICBsZXQgaGV4MSA9IDA7XG4gICAgZm9yIChoZXgxOyBoZXgxIDw9IDY7IGhleDErKykge1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyBERUZBVUxUUy5TSVpFICogTWF0aC5jb3MoaGV4MSAqIDIgKiBNYXRoLlBJIC8gNiksIHRoaXMueSArIERFRkFVTFRTLlNJWkUgKiBNYXRoLnNpbihoZXgxICogMiAqIE1hdGguUEkgLyA2KSk7XG4gICAgfVxuXG4gICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1sxXTtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuXG4gICAgbGV0IGhleDIgPSAwO1xuICAgIGZvciAoaGV4MjsgaGV4MiA8PSA2OyBoZXgyKyspIHtcbiAgICAgIGN0eC5saW5lVG8odGhpcy54ICsgNDQgKiBNYXRoLmNvcyhoZXgyICogMiAqIE1hdGguUEkgLyA2KSwgdGhpcy55ICsgNDQgKiBNYXRoLnNpbihoZXgyICogMiAqIE1hdGguUEkgLyA2KSk7XG4gICAgfVxuXG4gICAgY3R4LmZpbGxTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1swXTtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgYW5pbWF0ZShkZWx0YVRpbWUpIHtcbiAgICB0aGlzLmFuZ2xlID0gKDIwIC8gZGVsdGFUaW1lKTtcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhleGFnb247IiwiY29uc3QgREVGQVVMVFMgPSB7XG4gIENPTE9SUzogW1wiIzAwMDAwMFwiLCBcIiMwMjI3MTNcIl0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb25zIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5nbGUgPSAtNjA7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICBcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBsZXQgcHJldkNvb3JkO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSArIDYwO1xuICAgICAgfVxuXG4gICAgICBsZXQgeDIsIHkyLCBsZW5ndGg7XG5cbiAgICAgIC8vIGxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5zcXJ0KDMpICogdGhpcy54ICogMik7XG4gICAgICBsZW5ndGggPSAxNTAwO1xuICAgICAgeDIgPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiBsZW5ndGg7XG4gICAgICB5MiA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIGxlbmd0aDtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG4gICAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gICAgICBpZiAocHJldkNvb3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3R4LmxpbmVUbyguLi5wcmV2Q29vcmQpO1xuICAgICAgfVxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTW2kgJSAyXTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbaSAlIDJdO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgcHJldkNvb3JkID0gW3gyLCB5Ml07XG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZShkZWx0YVRpbWUpIHtcbiAgICAvLyB0aGlzLmFuZ2xlICs9ICgxIC8gZGVsdGFUaW1lKTtcbiAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICB9ICBcbn0iLCJjb25zdCBERUZBVUxUUyA9IHtcbiAgQ09MT1JTOiBbXCIjMDAwMDAwXCIsIFwiI2ZmZmZmZlwiXSxcbn1cblxuY2xhc3MgU3RvcHdhdGNoIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMudGltZSA9IFwiMC4wMFwiO1xuXG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IHN0b3B3YXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdG9wd2F0Y2hcIik7XG4gICAgc3RvcHdhdGNoWzBdLmlubmVySFRNTCA9IFwiXCI7XG4gICAgc3RvcHdhdGNoWzBdLmlubmVySFRNTCArPSBgJHt0aGlzLnRpbWV9YDtcbiAgfVxuXG4gIGNvdW50RGVjaW1hbHMobnVtKSB7XG4gICAgaWYgKE1hdGguZmxvb3IobnVtKSAhPT0gbnVtKSB7XG4gICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aCB8fCAwO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGFuaW1hdGUoc3RhcnRUaW1lKSB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnRpbWUgPSBNYXRoLnJvdW5kKCgobm93IC0gc3RhcnRUaW1lKSAvIDEwMDApICogMTAwKSAvIDEwMDtcblxuICAgIGlmICh0aGlzLmNvdW50RGVjaW1hbHModGhpcy50aW1lKSA9PT0gMCkge1xuICAgICAgdGhpcy50aW1lID0gYCR7dGhpcy50aW1lfS4wMGA7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvdW50RGVjaW1hbHModGhpcy50aW1lKSA9PT0gMSkge1xuICAgICAgdGhpcy50aW1lID0gYCR7dGhpcy50aW1lfTBgO1xuICAgIH1cblxuICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcHdhdGNoOyIsImNvbnN0IERFRkFVTFRTID0ge1xuICBDT0xPUlM6IFtcIiMwOGZiN2JcIiwgJ3JnYmEoMCwwLDAsMCknXSxcbiAgLy8gc2Vjb25kIGNvbG9yIGlzIHRyYW5zcGFyZW50XG4gIFNJWkU6IDQwLFxuICBNQVg6IDEwMDAsXG4gIC8vIGNvcnJlc3BvbmRzIHcvIHRoZSBzZWN0aW9ucycgbGVuZ3Roc1xufTtcblxuY2xhc3MgV2FsbHMge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmdsZSA9IC02MDtcbiAgICB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgPSAtNjA7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcblxuICAgIHRoaXMuY29tYm9zID0gW1xuICAgICAgW3RydWUsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlXSxcbiAgICAgIFt0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZV0sXG4gICAgICBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWVdLFxuICAgICAgW3RydWUsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlXSxcbiAgICAgIFt0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0sXG4gICAgICBbZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIHRydWVdLFxuICAgICAgW3RydWUsIGZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2VdLFxuICAgICAgW3RydWUsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZV0sICAgICAvLyA4IGNvbWJvc1xuICAgIF1cblxuICAgIHRoaXMud2FsbENvbWJvcyA9IFtdO1xuICAgIFxuICAgIHNldEludGVydmFsKCgpID0+IHRoaXMucG9wdWxhdGVXYWxscygpLCAxMDAwKTtcbiAgfVxuXG4gIGRyYXcgKGN0eCwgY29tYm8pIHtcbiAgICBsZXQgcHJldkNvb3JkLCB3YWxscyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IC0xOyBpIDw9IDU7IGkrKykge1xuICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICsgNjA7XG4gICAgICB9XG5cbiAgICAgIGxldCB4MiwgeTIsIGF4LCBheSwgYngsIGJ5O1xuICAgICAgLy8gY2VudGVyIHBvaW50XG4gICAgICB4MiA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIERFRkFVTFRTLk1BWDtcbiAgICAgIHkyID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODApICogREVGQVVMVFMuTUFYO1xuXG4gICAgICAvLyB0YXBlem9pZCBwb2ludCBvbiBmaXJzdCBsaW5lIFxuICAgICAgYnggPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmdsZSAvIDE4MCkgKiAoREVGQVVMVFMuTUFYIC0gREVGQVVMVFMuU0laRSk7XG4gICAgICBieSA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwKSAqIChERUZBVUxUUy5NQVggLSBERUZBVUxUUy5TSVpFKTsgXG5cbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8oYngsIGJ5KTtcbiAgICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcblxuICAgICAgaWYgKHByZXZDb29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN0eC5saW5lVG8oLi4ucHJldkNvb3JkKTtcblxuICAgICAgICBheCA9IHByZXZDb29yZFswXSArIE1hdGguY29zKE1hdGguUEkgKiAodGhpcy5hbmdsZSArIDEyMCkgLyAxODApICogREVGQVVMVFMuU0laRTtcbiAgICAgICAgYXkgPSBwcmV2Q29vcmRbMV0gKyBNYXRoLnNpbihNYXRoLlBJICogKHRoaXMuYW5nbGUgKyAxMjApIC8gMTgwKSAqIERFRkFVTFRTLlNJWkU7XG5cbiAgICAgICAgY3R4LmxpbmVUbyhheCwgYXkpO1xuICAgICAgICBjdHgubGluZVRvKGJ4LCBieSk7XG4gICAgICB9XG5cbiAgICAgICAgaWYgKGkgPT09IC0xIHx8IGNvbWJvW2ldID09PSBmYWxzZSkge1xuICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IERFRkFVTFRTLkNPTE9SU1sxXTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzFdO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbWJvW2ldKSB7XG4gICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzBdO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMF07XG4gICAgICAgIH1cblxuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgcHJldkNvb3JkID0gW3gyLCB5Ml07XG5cbiAgICAgIGxldCB3YWxsID0ge1xuICAgICAgICBsZW5ndGg6IDEwMDAsXG4gICAgICAgIGlzV2FsbDogJycsXG4gICAgICB9O1xuXG4gICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgd2FsbC5pc1dhbGwgPSAnbGluZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YWxsLmlzV2FsbCA9IGNvbWJvW2ldO1xuICAgICAgfVxuXG4gICAgICB3YWxscy5wdXNoKHdhbGwpO1xuICAgIH1cblxuICAgIHRoaXMud2FsbENvbWJvcy5wdXNoKHdhbGxzKTtcbiAgfVxuXG4gIHBvcHVsYXRlV2FsbHMoKSB7XG4gICAgbGV0IGNvbWJvc0lkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpO1xuICAgIGxldCBjb21ibyA9IHRoaXMuY29tYm9zW2NvbWJvc0lkeF07XG4gICAgY29uc29sZS5sb2coY29tYm9zSWR4KTtcbiAgICBjb25zb2xlLmxvZyhjb21ibyk7XG5cbiAgICB0aGlzLmRyYXcodGhpcy5jdHgsIGNvbWJvKTtcbiAgfVxuXG4gIGFuaW1hdGUoY3R4KSB7XG4gICAgaWYgKHRoaXMud2FsbENvbWJvcy5sZW5ndGggIT09IDAgJiYgdGhpcy53YWxsQ29tYm9zW3RoaXMud2FsbENvbWJvcy5sZW5ndGggLSAxXS5sZW5ndGggJSA3ID09PSAwKSB7XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53YWxsQ29tYm9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB3YWxscyA9IHRoaXMud2FsbENvbWJvc1tpXTtcblxuICAgICAgICBpZiAod2FsbHNbMF0ubGVuZ3RoID09PSA4MCkge1xuICAgICAgICAgIHRoaXMud2FsbENvbWJvcy51bnNoaWZ0KCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJldkNvb3JkO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2FsbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgd2FsbCA9IHdhbGxzW2pdO1xuXG4gICAgICAgICAgaWYgKHdhbGwuaXNXYWxsICE9PSAnbGluZScpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSA9IHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSArIDYwO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgbGV0IHgyLCB5MiwgYXgsIGF5LCBieCwgYnksIG5ld0xlbmd0aDtcbiAgXG4gICAgICAgICAgbmV3TGVuZ3RoID0gd2FsbC5sZW5ndGggLSA1O1xuICBcbiAgICAgICAgICB4MiA9IHRoaXMueCArIE1hdGguY29zKE1hdGguUEkgKiB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgLyAxODApICogbmV3TGVuZ3RoO1xuICAgICAgICAgIHkyID0gdGhpcy55ICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSAvIDE4MCkgKiBuZXdMZW5ndGg7XG4gIFxuICAgICAgICAgIC8vIHRhcGV6b2lkIHBvaW50IG9uIGZpcnN0IGxpbmUgXG4gICAgICAgICAgYnggPSB0aGlzLnggKyBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5hbmltYXRlV2FsbEFuZ2xlIC8gMTgwKSAqIChuZXdMZW5ndGggLSBERUZBVUxUUy5TSVpFKTtcbiAgICAgICAgICBieSA9IHRoaXMueSArIE1hdGguc2luKE1hdGguUEkgKiB0aGlzLmFuaW1hdGVXYWxsQW5nbGUgLyAxODApICogKG5ld0xlbmd0aCAtIERFRkFVTFRTLlNJWkUpO1xuICBcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY3R4Lm1vdmVUbyhieCwgYnkpO1xuICAgICAgICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgXG4gICAgICAgICAgaWYgKHByZXZDb29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjdHgubGluZVRvKC4uLnByZXZDb29yZCk7XG4gIFxuICAgICAgICAgICAgYXggPSBwcmV2Q29vcmRbMF0gKyBNYXRoLmNvcyhNYXRoLlBJICogKHRoaXMuYW5pbWF0ZVdhbGxBbmdsZSArIDEyMCkgLyAxODApICogREVGQVVMVFMuU0laRTtcbiAgICAgICAgICAgIGF5ID0gcHJldkNvb3JkWzFdICsgTWF0aC5zaW4oTWF0aC5QSSAqICh0aGlzLmFuaW1hdGVXYWxsQW5nbGUgKyAxMjApIC8gMTgwKSAqIERFRkFVTFRTLlNJWkU7XG4gIFxuICAgICAgICAgICAgY3R4LmxpbmVUbyhheCwgYXkpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhieCwgYnkpO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgaWYgKHdhbGwuaXNXYWxsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMF07XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzBdO1xuICAgICAgICAgIH0gZWxzZSBpZiAod2FsbC5pc1dhbGwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUUy5DT0xPUlNbMV07XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gREVGQVVMVFMuQ09MT1JTWzFdO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gIFxuICAgICAgICAgIHByZXZDb29yZCA9IFt4MiwgeTJdO1xuICBcbiAgICAgICAgICB0aGlzLndhbGxDb21ib3NbaV1bal0gPSB7XG4gICAgICAgICAgICBsZW5ndGg6IG5ld0xlbmd0aCxcbiAgICAgICAgICAgIGlzV2FsbDogd2FsbC5pc1dhbGwsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxzOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=