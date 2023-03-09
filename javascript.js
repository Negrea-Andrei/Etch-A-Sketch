const grid_container = document.querySelector('.painting-grid');

const size = document.querySelector('.grid-size');
const sizing = size.childNodes;

const color = document.querySelector('.color-grid');
const colors = color.childNodes;

const blocks = grid_container.childNodes;

let grid_color;
let mouseDown = false;

function paint(square) {
    if (mouseDown) {
        square.style.setProperty('background-color', grid_color);
    }
}

function startGrid(number) {
    grid_container.style.setProperty('--grid-row', number);
    for (i = 0; i < number * number; i++) {
        let block = document.createElement('div');
        grid_container.appendChild(block).className = "block";
        blocks.forEach(square => {
            square.addEventListener('mousedown', () => mouseDown = true);
            square.addEventListener('mouseup', () => mouseDown = false);
            square.addEventListener('mouseenter', () => paint(square));
            square.addEventListener('mouseleave', () => paint(square));
        });
    }
}

function createGrid(event) {
    grid_container.innerHTML = '';
    let number = event.target.classList[1];
    grid_container.style.setProperty('--grid-row', number);
    for (i = 0; i < number * number; i++) {
        let block = document.createElement('div');
        grid_container.appendChild(block).className = "block";
        blocks.forEach(square => {
            square.addEventListener('mousedown', () => mouseDown = true);
            square.addEventListener('mouseup', () => mouseDown = false);
            square.addEventListener('mouseenter', () => paint(square));
            square.addEventListener('mouseleave', () => paint(square));
        });
    }
}

function colorForTheGrid(event) {
    grid_color = event.target.classList[1];
}

startGrid(8);

sizing.forEach(button => button.addEventListener('click', createGrid));
colors.forEach(button => button.addEventListener('click', colorForTheGrid));

