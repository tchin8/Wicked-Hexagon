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
    this.scale = 1;
    this.scaleDir = "";
    this.rotationDir = 1;

    this.registerEvents();

    this.sections = new Sections(canvas);
    this.ctx.globalCompositeOperation = 'source-over';
    this.stopwatch = new Stopwatch(canvas);
    this.hexagon = new Hexagon(canvas);
    this.cursor = new Cursor(canvas);

    this.cursorDir = '';

    this.music = new Audio('assets/sounds/Cusp.mp3');
    this.beginAudio = new Audio('assets/sounds/begin.mp3');
    this.gameOverAudio = new Audio('assets/sounds/game_over.mp3');

    this.beforeGame(this.ctx);
  }

  beforeGame(ctx) {
    let that = this;

    let f = new FontFace('Squada One', 'url(https://fonts.gstatic.com/s/squadaone/v8/BCasqZ8XsOrx4mcOk6Mtaac2WRJnDgo.woff2)');

    f.load().then(function () {
      ctx.beginPath();
      ctx.rect(that.x/2 - 120, that.y/2 - 200, 240, 120);
      ctx.strokeStyle = "#2b6aea";
      ctx.stroke();
      ctx.fill();
      ctx.font = "30px Squada One";
      ctx.fillStyle = "#ffffff";
      ctx.fillText("SPACE TO PLAY", that.x / 2 - 80, that.y / 2 - 160);
      ctx.fillText("LEFT/RIGHT OR A/D", that.x / 2 - 96, that.y / 2 - 120);
      ctx.fillText("TO AVOID WALLS", that.x / 2 - 86, that.y / 2 - 90);
    });
  }

  afterGame() {
    let div = document.getElementsByClassName('game-over');
    div[0].classList.remove('hidden');
  }

  play() {
    let div = document.getElementsByClassName('game-over');
    div[0].classList.add('hidden');

    this.running = true;
    let timestamp = new Date()
    this.lastTime = 0;

    setTimeout(() => this.animate(timestamp), 300);


    this.walls = new Walls(this.canvas);

    this.beginAudio.play();
    this.populateWalls = setInterval(() => this.walls.populateWalls(), 800);

    setTimeout(() => {
      this.startTime = new Date();
    }, 400);

    this.rotationTimeout = setTimeout(() => this.updateRotation(), 10000)

    this.music.load();
    this.music.play();
  }

  updateRotation() {
    if (this.rotationDir === 1) {
      this.rotationDir = -1;
    } else {
      this.rotationDir = 1;
    }

    let rand = Math.floor(Math.random() * 10) + 1;
    this.rotationInterval = setTimeout(() => this.updateRotation(), rand * 500);
  }

  updateScale() {
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

  countDecimals(num) {
    if (Math.floor(num) !== num) {
      return num.toString().split(".")[1].length || 0;
    }
    return 0;
  }

  animate(timestamp) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let deltaTime = timestamp - this.lastTime;

    this.deltaTime = deltaTime;
    this.lastTime = timestamp;

    if (this.startTime) {
      const now = new Date();
      this.time = Math.round(((now - this.startTime) / 1000) * 100) / 100;
  
      if (this.countDecimals(this.time) === 0) {
        this.time = `${this.time}.00`;
      } else if (this.countDecimals(this.time) === 1) {
        this.time = `${this.time}0`;
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

    if (this.time && this.time > 41.2) {
      this.updateScale();
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
        if (!that.running) {
          that.play();
        }
      }
    });

    document.addEventListener("keyup", () => (that.cursorDir = ''));
  }

  gameOver() {
    return this.walls.collidesWith(this.cursor.tip(this.scale), this.scale);
  }

}

export default WickedHexagon;