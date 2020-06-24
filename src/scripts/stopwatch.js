const DEFAULTS = {
  COLORS: [
    ["#000000", "#ffffff"],
    ["#ffffff", "#ef8708"],
    ["#ffffff", "#6b4aca"],
    ["#ffffff", "#2b6aea"],
  ],
}

class Stopwatch {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.time = "0.00";

    this.draw();
  }

  draw() {
    const stopwatch = document.getElementsByClassName("stopwatch");
    stopwatch[0].innerHTML = "";
    stopwatch[0].innerHTML += `${this.time}`;
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

    this.draw(this.ctx);
  }

  stop() {
    let time = this.time;
    this.time = time;
  }
}

export default Stopwatch;