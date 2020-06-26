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

  animate(time) {
    this.time = time;

    this.draw(this.ctx);
  }

  stop() {
    let time = this.time;
    this.time = time;
  }
}

export default Stopwatch;