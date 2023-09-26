const container = document.querySelector('.container');

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';

    cell.addEventListener('mouseenter', () => {
      cell.style.background = 'red';
    });

    cell.addEventListener('mouseleave', () => {
      cell.style.background = 'blue';
    });
  }
}

makeRows(16, 16);
