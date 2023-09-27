const containerWrapper = document.querySelector('.container-wrapper');
const container = document.querySelector('.container');
const btn = document.createElement('button');
const resetBtn = document.createElement('button');

resetBtn.classList.add('resetBtn');
resetBtn.style.width = '80px';
resetBtn.style.height = '40px';
resetBtn.style.marginBottom = '20px';
resetBtn.style.border = 'none';
resetBtn.style.borderRadius = '8px';
resetBtn.style.background = '#6dcb96';
resetBtn.style.cursor = 'pointer';
resetBtn.textContent = 'Reset';

containerWrapper.appendChild(resetBtn);
containerWrapper.insertBefore(resetBtn, containerWrapper.firstChild);

btn.classList.add('btn');
btn.style.width = '80px';
btn.style.height = '40px';
btn.style.marginBottom = '20px';
btn.style.border = 'none';
btn.style.borderRadius = '8px';
btn.style.background = '#e9de87';
btn.style.cursor = 'pointer';
btn.textContent = 'New Grid';

containerWrapper.appendChild(btn);
containerWrapper.insertBefore(btn, containerWrapper.firstChild);

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

    // cell.addEventListener('mouseleave', () => {
    //   cell.style.background = '#2b2f37';
    // });
  }
}

makeRows(16, 16);
