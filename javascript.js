const grid_container = document.querySelector('.painting-grid');
const size = document.querySelectorAll('.grid-size')

function createGrid(rows) {
    grid_container.style.setProperty('--grid-row', rows);
    for(i = 0; i < rows * rows; i++) {
        let block = document.createElement('div');
        grid_container.appendChild(block).className="block";
    }
}

createGrid(32);