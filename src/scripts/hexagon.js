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

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);

    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle * Math.PI / 180);
    ctx.translate(-this.x, -this.y);

    let hex1 = 0;
    for (hex1; hex1 <= 6; hex1++) {
      ctx.lineTo(this.x + DEFAULTS.SIZE * Math.cos(hex1 * 2 * Math.PI / 6), this.y + DEFAULTS.SIZE * Math.sin(hex1 * 2 * Math.PI / 6));
    }

    ctx.fillStyle = DEFAULTS.COLORS[2][1];
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);

    let hex2 = 0;
    for (hex2; hex2 <= 6; hex2++) {
      ctx.lineTo(this.x + 44 * Math.cos(hex2 * 2 * Math.PI / 6), this.y + 44 * Math.sin(hex2 * 2 * Math.PI / 6));
    }

    ctx.fillStyle = DEFAULTS.COLORS[2][0];
    ctx.fill();
  }

  animate(deltaTime) {
    this.angle = (20 / deltaTime);
    this.draw(this.ctx);
  }

  stop() {
    this.angle = 0;
  }
}

export default Hexagon;