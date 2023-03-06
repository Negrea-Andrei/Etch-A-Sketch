const grid_container = document.querySelector('.painting-grid');
const size = document.querySelector('.grid-size');
const sizing = size.childNodes;

function startGrid(number) {
    grid_container.style.setProperty('--grid-row', number);
    for(i = 0; i < number * number; i++) {
        let block = document.createElement('div');
        grid_container.appendChild(block).className="block";
    }
}
    

function createGrid(event) {
    grid_container.innerHTML= '';
    let number = event.target.classList[1];
    grid_container.style.setProperty('--grid-row', number);
    for(i = 0; i < number * number; i++) {
        let block = document.createElement('div');
        grid_container.appendChild(block).className="block";
    }
}

startGrid(8);
 
sizing.forEach(button => button.addEventListener('click', createGrid));