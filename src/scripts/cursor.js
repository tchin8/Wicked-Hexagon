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
    this.x = (canvas.width / 2) + (DEFAULTS.RADIUS * Math.cos(this.angle * Math.PI / 180));
    this.y = (canvas.height / 2) + (DEFAULTS.RADIUS * Math.sin(this.angle * Math.PI / 180));

    this.draw(this.ctx);
  }

  draw(ctx) {
    this.angle = this.angle + (DEFAULTS.DIR * DEFAULTS.SPEED);
    if (this.angle < 0) {
      this.angle = 360 - this.angle;
    } else if (this.angle > 360) {
      this.angle =  this.angle % 360;
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