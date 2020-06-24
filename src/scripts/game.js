import Stopwatch from './stopwatch';
import Hexagon from './hexagon';
import Cursor from './cursor';
import Sections from './sections';
import Walls from './walls';
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

    this.walls = new Walls(canvas);

    this.cursorDir = '';
    this.music = new Audio('assets/sounds/Cusp.mp3');
  }

  play() {
    // this.running = true;
    
    let timestamp = new Date()
    this.lastTime = 0;
    this.startTime = new Date();

    setTimeout(() => this.animate(timestamp), 300);

    // // comment back in later
    // this.music.play();
  }
  
  animate(timestamp) {
    let deltaTime = timestamp - this.lastTime;

    this.deltaTime = deltaTime;
    this.lastTime = timestamp;

    this.stopwatch.animate(this.startTime);
    this.sections.animate(deltaTime);
    this.hexagon.animate(deltaTime);
    this.cursor.animate(this.ctx);
    this.walls.animate();

    setTimeout(() => this.walls.populateWalls(), 1000);

    if (this.cursorDir === 'clockwise') {
      this.cursor.pivotClockwise(deltaTime, this.ctx);
    } else if (this.cursorDir === 'counterClockwise') {
      this.cursor.pivotCounterClockwise(deltaTime, this.ctx);
    }

    if (this.running = true) {
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  registerEvents() {
    let that = this;

    document.addEventListener("keydown", function(event) {
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

    document.addEventListener("keyup", () => (that.cursorDir = ''));
  }

  restart() {

  }

  gameOver() {
    this.running = false;
  }
}

export default WickedHexagon;