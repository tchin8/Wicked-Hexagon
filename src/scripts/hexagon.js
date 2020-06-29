const DEFAULTS = {
  COLORS: [
    ["#000000", "#08fb7b"],
    ["#000000", "#ef8708"],
    ["#ffffff", "#c31e9e"],
    ["#ffffff", "#6b4aca"],
    ["#ffffff", "#2b6aea"],
  ],
  SIZE: 50,
}


class Hexagon {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.angle = 0;

    this.draw(this.ctx);
  }

  draw(ctx, scale) {
    scale = scale || 1;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);

    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle * Math.PI / 180);
    ctx.translate(-this.x, -this.y);

    let hex1 = 0;
    for (hex1; hex1 <= 6; hex1++) {
      ctx.lineTo(this.x + (DEFAULTS.SIZE * scale) * Math.cos(hex1 * 2 * Math.PI / 6), this.y + (DEFAULTS.SIZE * scale) * Math.sin(hex1 * 2 * Math.PI / 6));
    }

    ctx.fillStyle = DEFAULTS.COLORS[4][1];
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);

    let hex2 = 0;
    for (hex2; hex2 <= 6; hex2++) {
      ctx.lineTo(this.x + (44 * scale) * Math.cos(hex2 * 2 * Math.PI / 6), this.y + (44 * scale) * Math.sin(hex2 * 2 * Math.PI / 6));
    }

    ctx.fillStyle = DEFAULTS.COLORS[4][0];
    ctx.fill();
  }

  animate(deltaTime, scale, rotationDir) {
    this.angle = 20 / deltaTime * rotationDir;
    this.draw(this.ctx, scale);
  }

  stop() {
    this.angle = 0;
  }
}

export default Hexagon;