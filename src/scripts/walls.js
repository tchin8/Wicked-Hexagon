const DEFAULTS = {
  COLORS: ["#08fb7b", 'rgba(0,0,0,0)'],
  // second color is transparent
  SIZE: 40,
  MAX: 1000,
  // corresponds w/ the sections' lengths
};

class Walls {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.angle = -60;
    this.animateWallAngle = -60;
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

    this.wallCombos = [];
    
    setInterval(() => this.populateWalls(), 2000);
  }

  draw (ctx, combo) {
    let prevCoord, walls = [];

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

      let wall = {
        length: 1000,
        isWall: '',
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

  populateWalls() {
    let combosIdx = Math.floor(Math.random() * 8);
    let combo = this.combos[combosIdx];
    console.log(combosIdx);
    console.log(combo);

    this.draw(this.ctx, combo);
  }

  animate(ctx) {
    if (this.wallCombos.length !== 0 && this.wallCombos[this.wallCombos.length - 1].length % 7 === 0) {
      
      for (let i = 0; i < this.wallCombos.length; i++) {
        let walls = this.wallCombos[i];

        if (walls[0].length === 80) {
          this.wallCombos.unshift();
          continue;
        }

        let prevCoord;

        for (let j = 0; j < walls.length; j++) {
          let wall = walls[j];

          if (wall.isWall !== 'line') {
            this.animateWallAngle = this.animateWallAngle + 60;
          }
  
          let x2, y2, ax, ay, bx, by, newLength;
  
          newLength = wall.length - 5;
  
          x2 = this.x + Math.cos(Math.PI * this.animateWallAngle / 180) * newLength;
          y2 = this.y + Math.sin(Math.PI * this.animateWallAngle / 180) * newLength;
  
          // tapezoid point on first line 
          bx = this.x + Math.cos(Math.PI * this.animateWallAngle / 180) * (newLength - DEFAULTS.SIZE);
          by = this.y + Math.sin(Math.PI * this.animateWallAngle / 180) * (newLength - DEFAULTS.SIZE);
  
          ctx.beginPath();
          ctx.moveTo(bx, by);
          ctx.lineTo(x2, y2);
  
          if (prevCoord !== undefined) {
            ctx.lineTo(...prevCoord);
  
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
            isWall: wall.isWall,
          }
        }
      }
    }
  }
}

export default Walls;