const DEFAULTS = {
  COLOR: "#08fb7b",
  RADIUS: 60,
  SIZE: 5,
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