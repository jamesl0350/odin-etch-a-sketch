const gridContainer = document.querySelector('.container');
const gridSize = 16

for (let i = 1; i < gridSize * gridSize; i++) { // 16 x 16 = 256 cells
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridItem.innerText = i;
  gridContainer.appendChild(gridItem);
}
