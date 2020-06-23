const DEFAULTS = {
  COLORS: ["#000000", "#ffffff"],
}

export default class Stopwatch {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.time = "0.00";

    // only draw when starting the game/ space button
    this.drawBackground(this.ctx);
    this.drawBackground = this.drawBackground.bind(this);
  }

  drawBackground(ctx) {
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
    // ctx.fillStyle = DEFAULTS.COLORS[0];
    // this.ctx.fillStyle = "#08fb7b";
    ctx.fill();
    ctx.stroke();

    const timeWord = document.createElement("span");
    timeWord.classList.add("time-word");
    timeWord.innerHTML = "TIME";
    const body = document.getElementsByTagName("body");
    body[0].appendChild(timeWord);

    if (this.time === '0.00') {
      const stopwatch = document.createElement("span");
      stopwatch.classList.add("stopwatch");
      stopwatch.innerHTML = `${this.time}`;
      body[0].appendChild(stopwatch);
    }
  }

  draw(ctx) {
    // ctx.globalCompositeOperation = 'source-over';
    this.drawBackground(ctx);

    const timeWord = document.createElement("span");
    timeWord.classList.add("time-word");
    timeWord.innerHTML = "TIME";
    const body = document.getElementsByTagName("body");
    body[0].appendChild(timeWord);

    const stopwatch = document.createElement("span");
    stopwatch.classList.add("stopwatch");
    stopwatch.innerHTML = `${this.time}`;
    body[0].appendChild(stopwatch);
  }

  countDecimals(num) {
    if (Math.floor(num) !== num) {
      return num.toString().split(".")[1].length || 0;
    }
    return 0;
  }

  animate(startTime) {
    const now = new Date();
    this.time = Math.round(((now - startTime) / 1000) * 100) / 100;

    if (this.countDecimals(this.time) === 0) {
      this.time = `${this.time}.00`;
    } else if (this.countDecimals(this.time) === 1) {
      this.time = `${this.time}0`;
    }

    // console.log(this.countDecimals(this.time));

    // slower one
    // this.time = Math.floor((now - startTime) / 1000);

    this.draw(this.ctx);

    // this.drawBackground(this.ctx);

    // this.ctx.fillStyle = "#08fb7b";

    // this.ctx.fill();
    // console.log(this.ctx);
    
    // this.ctx.clearRect(this.canvas.width - 130, 10, 120, 100);
    // this.drawBackground(this.ctx);
  }
}