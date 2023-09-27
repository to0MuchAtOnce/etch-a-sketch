const containerWrapper = document.querySelector('.container-wrapper');
const container = document.querySelector('.container');
const newGrid = document.createElement('button');

newGrid.classList.add('newGrid');
newGrid.style.marginBottom = '20px';
newGrid.style.border = 'none';
newGrid.style.borderRadius = '8px';
newGrid.style.background = '#e9de87';
newGrid.style.cursor = 'pointer';
newGrid.textContent = 'New Grid';

containerWrapper.appendChild(newGrid);
containerWrapper.insertBefore(newGrid, containerWrapper.firstChild);

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

newGrid.addEventListener('click', () => {
  let isValidInput = false;
  let num;

  while (!isValidInput) {
    const userInput = prompt('Enter the number of squares per side:');
    if (userInput === null) {
      // User cancelled input
      break;
    }

    num = parseInt(userInput);
    if (!isNaN(num)) {
      isValidInput = true;
    } else {
      alert('Invalid input. Please enter a valid number.');
    }
  }

  if (isValidInput && num <= 100) {
    container.innerHTML = '';
    makeRows(num, num);
  } else if (num > 100) {
    alert('Please input a number of 100 or smaller');
  }
});

makeRows(16, 16);
