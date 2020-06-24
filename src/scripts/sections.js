const DEFAULTS = {
  COLORS: ["#000000", "#022713"],
}

export default class Sections {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.angle = -60;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    
    this.draw(this.ctx);
  }

  draw(ctx) {
    let prevCoord;

    for (let i = 0; i <= 6; i++) {
      if (i !== 0) {
        this.angle = this.angle + 60;
      }

      let x2, y2, length;

      // length = Math.floor(Math.sqrt(3) * this.x * 2);
      length = 500;
      x2 = this.x + Math.cos(Math.PI * this.angle / 180) * length;
      y2 = this.y + Math.sin(Math.PI * this.angle / 180) * length;

      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(x2, y2);
      if (prevCoord !== undefined) {
        ctx.lineTo(...prevCoord);
      }
      ctx.strokeStyle = DEFAULTS.COLORS[i % 2];
      ctx.fillStyle = DEFAULTS.COLORS[i % 2];
      ctx.fill();
      ctx.stroke();

      prevCoord = [x2, y2];
    }
  }

  animate(deltaTime) {
    // this.angle += (1 / deltaTime);
    this.draw(this.ctx);
  }  
}