function createElement(element, text, attribute, value) {
  const newElement = document.createElement(element);
  newElement.innerText = text;
  newElement.setAttribute(attribute, value);
  return newElement;
}

const body = document.querySelector('body');

body.appendChild(createElement('section', '', 'id', 'color-palette'));
body.appendChild(createElement('button', 'Cores aleatórias', 'id', 'button-random-color'));
body.appendChild(createElement('section', '', 'id', 'pixel-board'));

for (let index = 0; index < 4; index += 1) {
  const section = document.querySelector('#color-palette');
  const createDiv = section.appendChild(createElement('div', '', 'id', `color-${index}`));
  createDiv.classList.add('color');
}

const divColor0 = document.querySelector('#color-0');
const divColor1 = document.querySelector('#color-1');
const divColor2 = document.querySelector('#color-2');
const divColor3 = document.querySelector('#color-3');

divColor0.className = 'color selected';
divColor0.style.backgroundColor = 'black';
divColor1.style.backgroundColor = 'red';
divColor2.style.backgroundColor = 'blue';
divColor3.style.backgroundColor = 'pink';

for (let index = 0; index < 25; index += 1) {
  const addGradPixel = document.querySelector('#pixel-board');
  const createGrade = addGradPixel.appendChild(createElement('div', '', 'id', `pixel-${index}`));
  createGrade.classList.add('pixel');
}

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
  // eslint-disable-next-line no-param-reassign
  event.target.style.backgroundColor = getSelected.style.backgroundColor;
}

const getPixel = document.querySelectorAll('.pixel');
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

document.getElementById('button-random-color').addEventListener('click', randomColor);
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
};
