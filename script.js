const gridContainer = document.querySelector('.container');
const valuePicker = document.querySelector('#value-picker')

window.onload = function () {
  initialGrid(16)
}

function initialGrid(newGridSize) {
  gridContainer.innerHTML = ''; // Clear the existing grid
  gridContainer.style.display = 'flex';
  gridContainer.style.flexWrap = 'wrap';
  gridContainer.style.width = '960px';
  gridContainer.style.height = '960px';

  let cellSize = Math.floor(960 / newGridSize);

  for (let i = 1; i <= newGridSize * newGridSize; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.innerText = i;


    gridItem.style.width = `${cellSize}px`;
    gridItem.style.height = `${cellSize}px`;
    gridItem.style.boxSizing= 'border-box';

    gridItem.addEventListener('mouseover', () => {
      gridItem.classList.add('grid-hover');
    });

    gridContainer.appendChild(gridItem);
  }
}

function gridFromUser() {
  const limit = 100;
  let newGridSize = parseInt(prompt('How big of a grid do you want? Size cannot exceed 100'), 10);

  if (isNaN(newGridSize) || newGridSize <= 0) {
    alert('Please enter a valid number greater than 0.')
    return gridAmount();
  }

  if (newGridSize > limit) {
    alert("Value cannot exceed 100.");
    return gridAmount();
  }
  initialGrid(newGridSize);
}

// document.querySelector('input').addEventListener('keypress', (event) => {
//
//   if (event.key === 'Enter'){
//     apiRequest();
//   }
