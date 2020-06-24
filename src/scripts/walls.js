const DEFAULTS = {
  COLORS: [
    ["#08fb7b", 'rgba(0,0,0,0)'],
    ["#ef8708", 'rgba(0,0,0,0)'],
    ["#c31e9e", 'rgba(0,0,0,0)'],
    ["#6b4aca", 'rgba(0,0,0,0)'],
    ["#2b6aea", 'rgba(0,0,0,0)'],
  ],
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
      [false, true, false, true, false, true],
      [true, true, false, true, true, false],
    ]

    this.wallCombos = [];
  }

  draw (ctx, combo) {
    let prevCoord, walls = [];

    for (let i = -1; i <= 5; i++) {
      if (i !== -1) {
        this.angle = this.angle + 60;
      }

      if (this.angle >= 360) {
        this.angle = this.angle % 360;
      }

      let x2, y2, ax, ay, bx, by;
      // outter trapezoid corner
      x2 = this.x + Math.cos(Math.PI * this.angle / 180) * DEFAULTS.MAX;
      y2 = this.y + Math.sin(Math.PI * this.angle / 180) * DEFAULTS.MAX;

      // inner tapezoid point on first line 
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
          debugger;
          ctx.strokeStyle = DEFAULTS.COLORS[2][1];
          ctx.fillStyle = DEFAULTS.COLORS[2][1];
        } else if (combo[i]) {
          ctx.strokeStyle = DEFAULTS.COLORS[2][0];
          ctx.fillStyle = DEFAULTS.COLORS[2][0];
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

  collidesWith(cursorPos) {
    if (this.wallCombos.length !== 0) {
      for (let j = 0; j < this.wallCombos.length; j++) {
        let walls = this.wallCombos[j];

        for (let i = 1; i < walls.length; i++) {
          let wall = walls[i];
  
          if (wall.isWall) {
            const [x, y] = cursorPos;
            const [ax, ay] = wall.point1;
            const [bx, by] = wall.point2;
  
            let length1 = this.getDistance(x, y, ax, ay);
            let length2 = this.getDistance(x, y, bx, by);
            
            if (length1 + length2 <= wall.length - 39) {
              return true;
            }
          }
        }
      }

      return false;
    }
  }

  getDistance(ax, ay, bx, by) {
    const x = ax - bx;
    const y = ay - by;

    return Math.sqrt(x * x + y * y);
  }

  populateWalls() {
    let combosIdx = Math.floor(Math.random() * this.combos.length);
    let combo = this.combos[combosIdx];

    this.draw(this.ctx, combo);
  }

  animate(ctx) {
    if (this.wallCombos.length !== 0 && this.wallCombos[this.wallCombos.length - 1].length % 7 === 0) {
      
      for (let i = 0; i < this.wallCombos.length; i++) {
        let walls = this.wallCombos[i];

        if (walls[0].length === 70) {
          this.wallCombos.unshift();
          continue;
        }

        let prevCoord;

        for (let j = 0; j < walls.length; j++) {
          let wall = walls[j];

          if (wall.isWall !== 'line') {
            this.animateWallAngle = this.animateWallAngle + 60;
          }

          if (this.animateWallAngle >= 360) {
            this.animateWallAngle = this.animateWallAngle % 360;
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
            ctx.strokeStyle = DEFAULTS.COLORS[2][0];
            ctx.fillStyle = DEFAULTS.COLORS[2][0];
          } else if (wall.isWall === false) {
            ctx.strokeStyle = DEFAULTS.COLORS[2][1];
            ctx.fillStyle = DEFAULTS.COLORS[2][1];
          }
  
          ctx.fill();
          ctx.stroke();
  
          prevCoord = [x2, y2];
  
          this.wallCombos[i][j] = {
            length: newLength,
            isWall: wall.isWall,
            angle: this.animateWallAngle,
            point1: [ax, ay],
            point2: [bx, by],
          }
        }
      }
    }
  }
}

export default Walls;