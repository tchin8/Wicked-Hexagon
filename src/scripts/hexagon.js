export default class Hexagon {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;

    this.ctx = canvas.getContext("2d");

    this.draw(this.ctx);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);

    let side = 0;
    for (side; side <= 6; side++) {
      ctx.lineTo(this.x + 50 * Math.cos(side * 2 * Math.PI / 6), this.y + 50 * Math.sin(side * 2 * Math.PI / 6));
    }

    ctx.fillStyle = "#02ff8d";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);

    let side2 = 0;
    for (side2; side2 <= 6; side2++) {
      ctx.lineTo(this.x + 44 * Math.cos(side2 * 2 * Math.PI / 6), this.y + 44 * Math.sin(side2 * 2 * Math.PI / 6));
    }

    ctx.fillStyle = "#000000";
    ctx.fill();
  }

  rotate() {
    
  }
}