import Stopwatch from './stopwatch';
import Hexagon from './hexagon';
import Cursor from './cursor';
import Sections from './sections';
// import the other scripts

export default class WickedHexagon {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.registerEvents();
    this.restart();

    this.sections = new Sections(canvas);
    this.ctx.globalCompositeOperation = 'source-over';
    this.stopwatch = new Stopwatch(canvas);
    this.hexagon = new Hexagon(canvas);
    this.cursor = new Cursor(canvas);
  }

  play() {
    this.running = true;
    this.animate();
  }

  pivotClockwise() {

  }

  pivotCounterClockwise() {

  }

  registerEvents() {
    this.leftHandler = this.pivotClockwise.bind(this);
    this.rightHandler = this.pivotCounterClockwise.bind(this);
    this.ctx.canvas.addEventListener("mousedown", function(event) {
      if (event.keyCode === 37 || event.keyCode === 65) {
        return this.leftHandler;
      } else if (event.keyCode === 39 || event.keyCode === 68) {
        return this.rightHandler;
      }
    });
  }

  restart() {

  }
}