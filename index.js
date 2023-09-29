const containerWrapper = document.querySelector('.container-wrapper');
const container = document.querySelector('.container');
const gridSlider = document.querySelector('.grid-slider');
const sliderWidth = document.querySelector('.slider-width');
const sliderHeight = document.querySelector('.slider-height');
const clearBtn = document.querySelector('.clear-btn');

let currentGridWidth = 16;
let currentGridHeight = 16;

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';

    cell.addEventListener('mouseenter', () => {
      cell.style.background =
        '#' + parseInt(Math.random() * 0xffffff).toString(16);
    });
  }
}

clearBtn.addEventListener('click', () => {
  container.innerHTML = '';
  makeRows(currentGridWidth, currentGridHeight);
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
