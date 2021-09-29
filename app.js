const board = document.querySelector('.board');
const colors = ['red', 'green', 'yellow', 'pink', 'purple', 'blue', 'orange', 'whiteblue'];
const desksize = document.querySelector('#desksize');
const createBtn = document.querySelector('.create-button');
let squaresNumver = 0;
createBtn.addEventListener('click', getSquaresNumver);

function drawingField() {
  for (let i = 0; i < squaresNumver; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => {
    setColor(square)
  });
  square.addEventListener('mouseleave', () => {
    removeColor(square);
  })
  board.append(square);
  }
}
function getSquaresNumver() {
    board.innerHTML = '';
    squaresNumver = desksize.value;
    drawingField();
}
function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

//this code makes the squares disappear
/*
function removeColor(element) {
   element.style.background = '#1d1d1d';
   element.style.boxShadow = '0 0 2px #000';
}
*/

function getRandomColor() {
  const index =  Math.floor(Math.random() * colors.length);
  return colors[index];
}

alert('Try to paint all the pixels blue!')
