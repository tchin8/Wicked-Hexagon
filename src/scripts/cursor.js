const DEFAULTS = {
  COLORS: [
    "#08fb7b",
    "#ef8708",
    "#c31e9e",
    "#6b4aca",
    "#2b6aea",
  ],
  RADIUS: 60,
  SIZE: 5,
};

export default class Cursor {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.angle = 330;
    this.rotateAngle = 0;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;

    this.draw(this.ctx);
  }

  tip() {
    let x = (this.canvas.width / 2) + (Math.cos(this.angle * Math.PI / 180) * (DEFAULTS.RADIUS + DEFAULTS.SIZE));
    let y = (this.canvas.height / 2) + (Math.sin(this.angle * Math.PI / 180) * (DEFAULTS.RADIUS + DEFAULTS.SIZE));
    return [x, y];
  }

  draw(ctx) {
    this.cursorX = (this.canvas.width / 2) + (Math.cos(this.angle * Math.PI / 180) * DEFAULTS.RADIUS);
    this.cursorY = (this.canvas.height / 2) + (Math.sin(this.angle * Math.PI / 180) * DEFAULTS.RADIUS);

    ctx.translate(this.cursorX, this.cursorY);
    ctx.rotate(this.angle * Math.PI / 180);
    ctx.translate(-this.cursorX, -this.cursorY);

    ctx.beginPath();
    ctx.moveTo(this.cursorX - DEFAULTS.SIZE, this.cursorY - DEFAULTS.SIZE);
    ctx.lineTo(this.cursorX + DEFAULTS.SIZE, this.cursorY);
    ctx.lineTo(this.cursorX - DEFAULTS.SIZE, this.cursorY + DEFAULTS.SIZE);
    ctx.fillStyle = DEFAULTS.COLORS[2];
    ctx.fill();

    ctx.translate(this.cursorX, this.cursorY);
    ctx.rotate(-this.angle * Math.PI / 180);
    ctx.translate(-this.cursorX, -this.cursorY);
  }

  animate(ctx) {
    this.draw(ctx);
  }

  pivotClockwise(deltaTime, ctx) {
    this.angle += (150 / deltaTime);
    this.draw(ctx)
  }

  pivotCounterClockwise(deltaTime, ctx) {
    this.angle -= (150 / deltaTime);
    this.draw(ctx);
  }
}