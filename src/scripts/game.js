import Stopwatch from './stopwatch';
import Hexagon from './hexagon';
import Cursor from './cursor';
import Sections from './sections';
// import the other scripts

class WickedHexagon {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.running = false;
    this.x = canvas.width;
    this.y = canvas.height;

    this.registerEvents();
    this.restart();

    this.sections = new Sections(canvas);
    this.ctx.globalCompositeOperation = 'source-over';
    this.stopwatch = new Stopwatch(canvas);
    this.hexagon = new Hexagon(canvas);
    this.cursor = new Cursor(canvas);

    this.music = new Audio('assets/sounds/Cusp.mp3');
  }

  play() {
    // this.running = true;
    
    // // what is this event?
    let timestamp = new Date()
    this.lastTime = 0;
    
    this.startTime = new Date();

    this.animate(timestamp);
    this.music.play();
  }
  
  animate(timestamp) {
    // // what are these even for?
    let deltaTime = timestamp - this.lastTime;
    this.lastTime = timestamp;

    // idk man
    // this.ctx.clearRect(0, 0, this.x, this.y);
    this.ctx.moveTo(this.x, this.y);
    this.stopwatch.animate(this.startTime);
    // this.cursor.draw(this.ctx);
    this.sections.animate(deltaTime);
    this.hexagon.animate(deltaTime);
    this.cursor.animate(deltaTime, this.ctx);

    // rotate sections
    // rotate hexagon

    // console.log('animating');
    if (this.running = true) {
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  pivotClockwise() {

  }

  pivotCounterClockwise() {

  }

  registerEvents() {
    let that = this;

    document.addEventListener("keydown", function(event) {
      if (event.keyCode === 37 || event.keyCode === 65) {
        console.log('left?');
        that.pivotClockwise();
      } else if (event.keyCode === 39 || event.keyCode === 68) {
        console.log('right?');
        that.pivotCounterClockwise();
      } else if (event.keyCode === 32) {
        console.log('space');
        that.running = true;
        that.play();
      }
    });
  }

  restart() {

  }

  gameOver() {
    this.running = false;
  }
}

export default WickedHexagon;