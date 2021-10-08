const board = document.querySelector('#board');
const colors = ['#F75C03', '#d90368', '#04A777', '#FFFA67', '#3E00FF']
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);
    square.addEventListener('mouseover', () => 
        setColor(square)
    );
    square.addEventListener('mouseleave', () => 
        removeColor(square)
    );
}



function setColor(element) {
    let color = selectRandomColor();
    element.style.backgroundColor = color;
}

function selectRandomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
}