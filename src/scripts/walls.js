const DEFAULTS = {
  COLORS: ["#08fb7b", 'rgba(0,0,0,0)'],
  // second color is transparent
  SIZE: 40,
  MAX: 500,
  // corresponds w/ the sections' lengths
};

class Walls {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.angle = -60;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;

    this.combos = [
      [true, true, true, true, true, false],
      [true, true, true, true, false, true],
      [true, true, true, false, true, true],
      [true, true, false, true, true, true],
      [true, false, true, true, true, true],
      [false, true, true, true, true, true],
      [true, false, true, false, true, false],
      [true, true, false, true, true, false],     // 8 combos
    ]

    this.walls = [];

    setInterval(() => this.populateWalls(this.startTime), 2000);
    // setInterval(() => this.animate(), 100);
  }

  draw (ctx, combo) {
    let prevCoord;

    for (let i = -1; i <= 5; i++) {
      if (i !== -1) {
        this.angle = this.angle + 60;
      }

      let x2, y2, ax, ay, bx, by;
      // center point
      x2 = this.x + Math.cos(Math.PI * this.angle / 180) * DEFAULTS.MAX;
      y2 = this.y + Math.sin(Math.PI * this.angle / 180) * DEFAULTS.MAX;

      // tapezoid point on first line 
      bx = this.x + Math.cos(Math.PI * this.angle / 180) * (DEFAULTS.MAX - DEFAULTS.SIZE);
      by = this.y + Math.sin(Math.PI * this.angle / 180) * (DEFAULTS.MAX - DEFAULTS.SIZE);      
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(x2, y2);
      if (prevCoord !== undefined) {
        ctx.lineTo(...prevCoord);

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

      let wall = {
        length: 500,
        isWall: '',
      };

      if (i === -1) {
        wall.isWall = 'line';
      } else {
        wall.isWall = combo[i];
      }

      this.walls.push(wall);
    }
  }

  populateWalls() {
    let combosIdx = Math.floor(Math.random() * 9);
    let combo = this.combos[combosIdx];

    this.draw(this.ctx, combo)
  }

  animate() {
    if (this.walls.length !== 0) {
      for (let i = 0; i < this.walls.length; i++) {
        let wall = this.walls[i];

        
      }
    }
  }
}

export default Walls;