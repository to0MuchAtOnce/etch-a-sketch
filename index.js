const containerWrapper = document.querySelector('.container-wrapper');
const container = document.querySelector('.container');
const gridSlider = document.querySelector('.grid-slider');
const sliderWidth = document.querySelector('.slider-width');
const sliderHeight = document.querySelector('.slider-height');
const clearBtn = document.querySelector('.clear-btn');
const eraserBtn = document.querySelector('.eraser-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const pickColor = document.getElementById('pickColor');

let currentGridWidth = 16;
let currentGridHeight = 16;

let isDrawing = false;
let isErasing = false;
let isRainbow = false;

function Rainbow(cell) {
  if (isRainbow && !isErasing) {
    cell.style.background =
      '#' + parseInt(Math.random() * 0xffffff).toString(16);
  }
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';

    cell.addEventListener('mouseenter', () => {
      if (!isDrawing) return;
      cell.style.background = '';
      if (isErasing) {
      } else if (isRainbow) {
        Rainbow(cell);
      } else {
        const selectedColor = pickColor.value;
        cell.style.background = selectedColor;
      }
    });
  }
}

container.addEventListener('mousedown', () => {
  isDrawing = 'true';
});

container.addEventListener('mouseup', () => {
  isDrawing = false;
});

clearBtn.addEventListener('click', () => {
  container.innerHTML = '';
  makeRows(currentGridWidth, currentGridHeight);
});

eraserBtn.addEventListener('click', () => {
  if ((isErasing = !isErasing)) {
    eraserBtn.classList.add('active');
  } else {
    eraserBtn.classList.remove('active');
  }
});

rainbowBtn.addEventListener('click', () => {
  if ((isRainbow = !isRainbow)) {
    isErasing = false;
    rainbowBtn.classList.add('active');
  } else {
    rainbowBtn.classList.remove('active');
  }
});

gridSlider.addEventListener('input', () => {
  const sliderVal = parseInt(gridSlider.value);
  sliderWidth.textContent = sliderVal;
  sliderHeight.textContent = sliderVal;
  container.innerHTML = '';
  makeRows(sliderVal, sliderVal);
  currentGridWidth = sliderVal;
  currentGridHeight = sliderVal;
});

makeRows(16, 16);
