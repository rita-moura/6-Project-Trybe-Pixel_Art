const divColor0 = document.querySelector('#color-0');
const divColor1 = document.querySelector('#color-1');
const divColor2 = document.querySelector('#color-2');
const divColor3 = document.querySelector('#color-3');
const sectionPixelBoard = document.querySelector('#pixel-board');
const inputPixelBoard = document.querySelector('#board-size');

divColor0.className = 'color selected';
divColor0.style.backgroundColor = 'black';
divColor1.style.backgroundColor = 'red';
divColor2.style.backgroundColor = 'blue';
divColor3.style.backgroundColor = 'pink';

function createElement(element, text, attribute, value) {
  const newElement = document.createElement(element);
  newElement.innerText = text;
  newElement.setAttribute(attribute, value);
  return newElement;
}

for (let index = 0; index < 25; index += 1) {
  sectionPixelBoard.appendChild(createElement('div', '', 'class', 'pixel'));
}

const getPixel = document.querySelectorAll('.pixel');

function changeColorSelected(event) {
  const getSelected = document.querySelector('.selected');
  getSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

// function inputMin() {
//   const inputValue = inputPixelBoard.value;
//   if (inputValue < 5) {
//     for (let index = 0; index < 25; index += 1) {
//       sectionPixelBoard.appendChild(createElement('div', '', 'class', 'pixel'));
//     }
//   }
// }

// function inputMax() {
//   const inputValue = inputPixelBoard.value;
//   if (inputValue > 50) {
//     for (let index = 0; index < 25; index += 1) {
//       sectionPixelBoard.appendChild(createElement('div', '', 'class', 'pixel'));
//     }
//   }
// }

function verifyInput() {
  const inputValue = inputPixelBoard.value;
  if (inputValue === '') {
    alert('Board inválido!');
  }
}

function changePixelBoard() {
  sectionPixelBoard.innerHTML = '';
  verifyInput();
  const inputValue = inputPixelBoard.value;

  const pixelSize = 40;
  sectionPixelBoard.style.width = `${pixelSize * inputValue}px`;
  sectionPixelBoard.style.height = `${pixelSize * inputValue}px`;
  for (let row = 0; row < inputValue; row += 1) {
    for (let col = 0; col < inputValue; col += 1) {
      const pixel = sectionPixelBoard.appendChild(createElement('div', '', 'class', 'pixel'));
      pixel.style.backgroundColor = 'white';
      pixel.style.width = `${pixelSize}px`;
      pixel.style.height = `${pixelSize}px`;
      sectionPixelBoard.appendChild(pixel);
    }
  }
}

function createColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function colorPixel({ target }) {
  const getSelected = document.querySelector('.selected');

  // eslint-disable-next-line no-param-reassign
  target.style.backgroundColor = getSelected.style.backgroundColor;

  const currentPixelBoard = Array.from(getPixel).map((pixel) => pixel.style.backgroundColor);
  localStorage.setItem('pixelBoard', JSON.stringify(currentPixelBoard));
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

for (let index = 0; index < getPixel.length; index += 1) {
  getPixel[index].addEventListener('click', colorPixel);
}

document.querySelector('#button-random-color').addEventListener('click', randomColor);
document.querySelector('#clear-board').addEventListener('click', clearBoard);
document.querySelector('#generate-board').addEventListener('click', changePixelBoard);
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

  const savedPixelBoard = JSON.parse(localStorage.getItem('pixelBoard'));
  if (savedPixelBoard) {
    const pixelArray = Array.from(getPixel);
    pixelArray.forEach((pixel, index) => {
      // eslint-disable-next-line no-param-reassign
      pixel.style.backgroundColor = savedPixelBoard[index];
    });
  }
};
