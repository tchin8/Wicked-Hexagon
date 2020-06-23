# cursor.js

draw(ctx) {
  <!-- let cursorX = (this.canvas.width / 2) + ((this.radius + 5) * Math.cos(this.angle * Math.PI / 180))
  let cursorY = (this.canvas.height / 2) + ((this.radius + 5) * Math.sin(this.angle * Math.PI / 180));

  this.angle = this.angle + (this.dir * this.speed);
  if (this.angle < 0) {
    this.angle = 360 - this.angle;
  } else if (this.angle > 360) {
    this.angle =  this.angle % 360;
  } -->

  ctx.translate(cursorX, cursorY);
  ctx.rotate(this.angle * Math.PI / 180);
  ctx.translate(-cursorX, -cursorY);

  <!-- ctx.beginPath();
  ctx.moveTo(cursorX - this.size, cursorY - this.size);
  ctx.lineTo(cursorX + this.size, cursorY);
  ctx.lineTo(cursorX - this.size, cursorY + this.size);
  ctx.closePath();

  ctx.fillStyle = this.color;
  ctx.fill(); -->

  ctx.translate(cursorX, cursorY);
  ctx.rotate(-this.angle * Math.PI / 180);
  ctx.translate(-cursorX, -cursorY);
}

https://stackoverflow.com/questions/54915438/draw-a-line-with-specific-angle-in-a-html-canvas



# cursor

const DEFAULTS = {
  COLOR: "#08fb7b",
  DIR: 0,
  RADIUS: 60,
  SIZE: 5,
  SPEED: 5,
};

export default class Cursor {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.angle = 330;
    this.x = (canvas.width / 2) + (Math.cos(this.angle * Math.PI / 180) * DEFAULTS.RADIUS);
    this.y = (canvas.height / 2) + (Math.sin(this.angle * Math.PI / 180) * DEFAULTS.RADIUS);

    this.draw(this.ctx);
  }

  draw(ctx) {
    this.angle = this.angle + (DEFAULTS.DIR * DEFAULTS.SPEED);
    if (this.angle < 0) {
      this.angle = 360 - this.angle;
    } else if (this.angle > 360) {
      this.angle = this.angle % 360;
    }

    // rotates the cursor depending on where around the hexagon it is
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle * Math.PI / 180);
    ctx.translate(-this.x, -this.y);

    ctx.beginPath();
    ctx.moveTo(this.x - DEFAULTS.SIZE, this.y - DEFAULTS.SIZE);
    ctx.lineTo(this.x + DEFAULTS.SIZE, this.y);
    ctx.lineTo(this.x - DEFAULTS.SIZE, this.y + DEFAULTS.SIZE);

    ctx.fillStyle = DEFAULTS.COLOR;
    ctx.fill();
  }
}


