const divColor0 = document.querySelector('#color-0');
const divColor1 = document.querySelector('#color-1');
const divColor2 = document.querySelector('#color-2');
const divColor3 = document.querySelector('#color-3');
const getPixel = document.querySelectorAll('.pixel');

divColor0.className = 'color selected';
divColor0.style.backgroundColor = 'black';
divColor1.style.backgroundColor = 'red';
divColor2.style.backgroundColor = 'blue';
divColor3.style.backgroundColor = 'pink';

function changeColorSelected(event) {
  const getSelected = document.querySelector('.selected');
  getSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function createColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function colorPixel(event) {
  const getSelected = document.querySelector('.selected');
  const replacementColor = getSelected.style.backgroundColor;

  // eslint-disable-next-line no-param-reassign
  event.target.style.backgroundColor = replacementColor;

  // Salvar o estado atual do quadro de pixels
  const currentPixelBoard = Array.from(getPixel).map((pixel) => pixel.style.backgroundColor);
  localStorage.setItem('pixelBoard', JSON.stringify(currentPixelBoard));
}

for (let index = 0; index < getPixel.length; index += 1) {
  getPixel[index].addEventListener('click', colorPixel);
}

function savedStorage(item) {
  localStorage.setItem('colorPalette', JSON.stringify(item));
}

function getStorage() {
  return JSON.parse(localStorage.getItem('colorPalette'));
}

function randomColor() {
  const localColor = document.querySelectorAll('.color');
  const arrayColor = [];
  for (let index = 1; index < localColor.length; index += 1) {
    const savedColor = createColor();
    localColor[index].style.backgroundColor = savedColor;
    arrayColor.push(savedColor);
  }
  savedStorage(arrayColor);
}

function clearBoard() {
  const allPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].style.backgroundColor = 'white';
  }
}

document.querySelector('#button-random-color').addEventListener('click', randomColor);
document.querySelector('#clear-board').addEventListener('click', clearBoard);
divColor0.addEventListener('click', changeColorSelected);
divColor1.addEventListener('click', changeColorSelected);
divColor2.addEventListener('click', changeColorSelected);
divColor3.addEventListener('click', changeColorSelected);

window.onload = () => {
  const colorGet = getStorage();
  if (colorGet) {
    const localColorDiv = document.querySelectorAll('.color');
    for (let index = 1; index < localColorDiv.length; index += 1) {
      localColorDiv[index].style.backgroundColor = colorGet[index - 1];
    }
  }

  // Recuperar o estado do quadro de pixels do localStorage
  const savedPixelBoard = JSON.parse(localStorage.getItem('pixelBoard'));
  if (savedPixelBoard) {
    const pixelArray = Array.from(getPixel);
    pixelArray.forEach((pixel, index) => {
      // eslint-disable-next-line no-param-reassign
      pixel.style.backgroundColor = savedPixelBoard[index];
    });
  }
};
