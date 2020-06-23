const DEFAULTS = {
  COLORS: ["#000000", "#ffffff"],
}

export default class Stopwatch {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.time = "0.00";

    this.draw();
  }

  draw() {

    const container = document.createElement("div");
    container.classList.add('container');
    const body = document.getElementsByTagName("body");
    body[0].appendChild(container);

    const innerContainer = document.createElement("div");
    innerContainer.classList.add('inner-container');
    container.appendChild(innerContainer);

    const timeWord = document.createElement("span");
    timeWord.classList.add("time-word");
    timeWord.innerHTML = "TIME";
    container.appendChild(timeWord);

    const stopwatch = document.createElement("span");
    stopwatch.classList.add("stopwatch");
    stopwatch.innerHTML = `${this.time}`;
    innerContainer.appendChild(stopwatch);
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
}