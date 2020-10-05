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

  // get location of cursor tip
  // used in game script, check if tip collided w/ any walls
  tip(scale) {
    let x =
      this.canvas.width / 2 +
      Math.cos((this.angle * Math.PI) / 180) *
        (DEFAULTS.RADIUS * scale + DEFAULTS.SIZE);
    let y =
      this.canvas.height / 2 +
      Math.sin((this.angle * Math.PI) / 180) *
        (DEFAULTS.RADIUS * scale + DEFAULTS.SIZE);
    return [x, y];
  }

  draw(ctx, scale) {
    scale = scale || 1;

    this.cursorX =
      this.canvas.width / 2 +
      Math.cos((this.angle * Math.PI) / 180) * (DEFAULTS.RADIUS * scale);
    this.cursorY =
      this.canvas.height / 2 +
      Math.sin((this.angle * Math.PI) / 180) * (DEFAULTS.RADIUS * scale);

    ctx.translate(this.cursorX, this.cursorY);
    ctx.rotate((this.angle * Math.PI) / 180);
    ctx.translate(-this.cursorX, -this.cursorY);

    ctx.beginPath();
    ctx.moveTo(this.cursorX - DEFAULTS.SIZE, this.cursorY - DEFAULTS.SIZE);
    ctx.lineTo(this.cursorX + DEFAULTS.SIZE, this.cursorY);
    ctx.lineTo(this.cursorX - DEFAULTS.SIZE, this.cursorY + DEFAULTS.SIZE);
    ctx.fillStyle = DEFAULTS.COLORS[4];
    ctx.fill();

    ctx.translate(this.cursorX, this.cursorY);
    ctx.rotate((-this.angle * Math.PI) / 180);
    ctx.translate(-this.cursorX, -this.cursorY);
  }

  animate(ctx, scale) {
    this.draw(ctx, scale);
  }

  // invoked in game, depends on user's keydown - right, D
  pivotClockwise(deltaTime, ctx, scale) {
    this.angle += 150 / deltaTime;
    this.draw(ctx, scale);
  }

  // invoked in game, depends on user's keydown - left, A
  pivotCounterClockwise(deltaTime, ctx, scale) {
    this.angle -= 150 / deltaTime;
    this.draw(ctx, scale);
  }
}