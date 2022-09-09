function creatElement(element, text, attribute, value) {
  const newElement = document.createElement(element);
  newElement.innerText = text;
  newElement.setAttribute(attribute, value);
  return newElement;
}
creatElement();

const creatH1 = document.querySelector('body');
creatH1.appendChild(creatElement('h1', 'Paleta de Cores', 'id', 'title'));

const creatSection = document.querySelector('body');
creatSection.appendChild(creatElement('section', '', 'id', 'color-palette'));
const addDiv = document.getElementById('color-palette');

const creatSectionButton = document.querySelector('body');
creatSectionButton.appendChild(creatElement('section', '', 'id', 'section-button'));

const creatGradPixel = document.querySelector('body');
creatGradPixel.appendChild(creatElement('section', '', 'id', 'pixel-board'));

for (let index = 0; index < 4; index += 1) {
  const createDiv = addDiv.appendChild(creatElement('div', null, 'id', `color-${index}`));
  createDiv.classList.add('color');
}

const divBlack = document.querySelectorAll('.color')[0];
divBlack.className = 'color selected';
divBlack.style.backgroundColor = 'black';

const addGradPixel = document.querySelector('#pixel-board');
const localColor = document.querySelectorAll('.color');
const divColor0 = document.querySelector('#color-0');
const divColor1 = document.querySelector('#color-1');
divColor1.style.backgroundColor = 'red';
const divColor2 = document.querySelector('#color-2');
divColor2.style.backgroundColor = 'blue';
const divColor3 = document.querySelector('#color-3');
divColor3.style.backgroundColor = 'pink';

function createColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function savedStorage(item) {
  localStorage.setItem('colorPalette', JSON.stringify(item));
}

function getStorage() {
  return JSON.parse(localStorage.getItem('colorPalette'));
}

function alterColor() {
  const arrayColor = [];
  for (let index = 1; index < localColor.length; index += 1) {
    const savedColor = createColor();
    localColor[index].style.backgroundColor = savedColor;
    arrayColor.push(savedColor);
  }
  savedStorage(arrayColor);
}

const localButton = document.querySelector('#section-button');
localButton.appendChild(creatElement('button', 'Cores aleatórias', 'id', 'button-random-color'));
const buttonPalleteColor = document.querySelector('#button-random-color');
buttonPalleteColor.addEventListener('click', alterColor);

for (let index = 0; index < 25; index += 1) {
  const createGrade = addGradPixel.appendChild(creatElement('div', null, 'id', `pixel-${index}`));
  createGrade.classList.add('pixel');
}

function clearPixel() {
  const localDivPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < 25; index += 1) {
    localDivPixel[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

function changeColorSelected(event) {
  const getSelected = document.querySelector('.selected');
  getSelected.classList.remove('selected');
  event.target.classList.add('selected');
}
divColor0.addEventListener('click', changeColorSelected);
divColor1.addEventListener('click', changeColorSelected);
divColor2.addEventListener('click', changeColorSelected);
divColor3.addEventListener('click', changeColorSelected);

const getPixel = document.querySelectorAll('.pixel');
function colorPixel(event) {
  const getSelected = document.querySelector('.selected');
  event.target.style.backgroundColor = getSelected.style.backgroundColor;
}

for (let index = 0; index < getPixel.length; index += 1) {
  getPixel[index].addEventListener('click', colorPixel);
}

const localButtonClear = document.querySelector('#section-button');
localButtonClear.appendChild(creatElement('button', 'Limpar', 'id', 'clear-board'));
const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', clearPixel);

window.onload = function funcina() {
  const colorGet = getStorage();
  if (colorGet) {
    const localColorDiv = document.querySelectorAll('.color');
    for (let index = 1; index < localColorDiv.length; index += 1) {
      localColorDiv[index].style.backgroundColor = colorGet[index - 1];
    }
  }
};
