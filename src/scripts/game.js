import Stopwatch from './stopwatch';
import Hexagon from './hexagon';
import Cursor from './cursor';
import Sections from './sections';
import Walls from './walls';
// import the other scripts

const COLORS = [
  // base, sections, cursor/walls   ~ // black to color // white to color
  ["#000000", "#022713", "#08fb7b"],    // black/green
  ["#000000", "#261501", "#ef8708"],    // black/orange
  ["#ffffff", "#f5dcf0", "#c31e9e"],    // white/pink
  ["#ffffff", "#e7e3f7", "#6b4aca"],    // white/purple
  ["#ffffff", "#dde8fc", "#2b6aea"],    // white/blue
]

class WickedHexagon {
  constructor(canvas) {
    this.canvas = canvas;
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

    this.cursorDir = '';

    this.music = new Audio('assets/sounds/Cusp.mp3');
    this.beginAudio = new Audio('assets/sounds/begin.mp3');
    this.gameOverAudio = new Audio('assets/sounds/game_over.mp3');
  }

  play() {
    this.running = true;
    let timestamp = new Date()
    this.lastTime = 0;
    this.startTime = new Date();

    setTimeout(() => this.animate(timestamp), 300);

    this.walls = new Walls(this.canvas);

    this.beginAudio.play();
    this.populateWalls = setInterval(() => this.walls.populateWalls(), 1000);
    this.music.play();
  }


  restart() {
    
  }
  
  animate(timestamp) {
    let deltaTime = timestamp - this.lastTime;

    this.deltaTime = deltaTime;
    this.lastTime = timestamp;

    this.stopwatch.animate(this.startTime);
    this.sections.animate(deltaTime);
    this.hexagon.animate(deltaTime);
    this.cursor.animate(this.ctx);
    this.walls.animate(this.ctx);

    if (this.gameOver() === true) {
      this.running = false;
      this.gameOverAudio.play();
      this.music.pause();
      this.stopwatch.stop();
      this.hexagon.stop();
      clearInterval(this.populateWalls);
    }

    if (this.cursorDir === 'clockwise') {
      this.cursor.pivotClockwise(deltaTime, this.ctx);
    } else if (this.cursorDir === 'counterClockwise') {
      this.cursor.pivotCounterClockwise(deltaTime, this.ctx);
    }

    if (this.running === true) {
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
        that.play();
      }
    });

    document.addEventListener("keyup", () => (that.cursorDir = ''));
  }

  gameOver() {
    return this.walls.collidesWith(this.cursor.tip());
  }

  drawPregame() {

  }

  drawPostgame() {

  }
}

export default WickedHexagon;