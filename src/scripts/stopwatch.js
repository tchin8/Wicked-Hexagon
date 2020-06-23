const DEFAULTS = {
  COLORS: ["#000000", "#ffffff"],
}

export default class Stopwatch {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.time = "0.00";

    // only draw when starting the game/ space button
    this.draw(this.ctx);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.canvas.width - 260, 0);
    // x2 = (this.canvas.width - 260) + Math.cos(Math.PI * (60 / 180)) * 40;
    // y2 = Math.sin(Math.PI * (60 / 180)) * 40;
    ctx.lineTo(this.canvas.width - 240, 40);
    ctx.lineTo(this.canvas.width - 140, 40);
    ctx.lineTo(this.canvas.width - 130, 56);
    ctx.lineTo(this.canvas.width, 56);
    ctx.lineTo(this.canvas.width, 0);
    // ctx.strokeStyle = DEFAULTS.COLORS[0];
    ctx.fill();
    ctx.stroke();

    const timeWord = document.createElement("span");
    timeWord.classList.add("time-word");
    timeWord.innerHTML = "TIME";
    const body = document.getElementsByTagName("body");
    body[0].appendChild(timeWord);

    const stopwatch = document.createElement("span");
    stopwatch.classList.add("stopwatch");
    stopwatch.innerHTML = this.time;
    body[0].appendChild(stopwatch);
  }

  update(deltaTime) {
    // const secs 
  }
}