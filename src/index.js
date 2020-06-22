import WickedHexagon from './scripts/game';
// import WickedHexagon from './scripts/game';

import './styles/index.scss';



document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.height = window.innerHeight;
  canvasEl.width = window.innerWidth;

  new WickedHexagon(canvasEl);
});
