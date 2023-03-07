const grid_container = document.querySelector('.painting-grid');

const size = document.querySelector('.grid-size');
const sizing = size.childNodes;

const color = document.querySelector('.color-grid');
const colors = color.childNodes;

let grid_color;

function startGrid(number) {
    grid_container.style.setProperty('--grid-row', number);
    for (i = 0; i < number * number; i++) {
        let block = document.createElement('div');
        grid_container.appendChild(block).className = "block";
    }
}


function createGrid(event) {
    grid_container.innerHTML = '';
    let number = event.target.classList[1];
    grid_container.style.setProperty('--grid-row', number);
    for (i = 0; i < number * number; i++) {
        let block = document.createElement('div');
        grid_container.appendChild(block).className = "block";
        blocks.forEach(square => square.addEventListener('click', () => paint(square)));
    }
}

function colorForTheGrid(event) {
    grid_color = event.target.classList[1];
}

const blocks = grid_container.childNodes;

function paint(square) {    
    square.style.setProperty('background-color', grid_color);
}

startGrid(8);

sizing.forEach(button => button.addEventListener('click', createGrid));
blocks.forEach(square => square.addEventListener('click', () => paint(square)));
colors.forEach(button => button.addEventListener('click', colorForTheGrid));


