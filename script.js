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
const addGradPixel = document.querySelector('#pixel-board');

for (let index = 0; index < 4; index += 1) {
  const createDiv = addDiv.appendChild(creatElement('div', null, 'id', `color-${index}`));
  createDiv.classList.add('color');
}

const divBlack = document.querySelectorAll('.color')[0];
divBlack.className = 'color selected';

function createColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

const localColor = document.querySelectorAll('.color');

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
    localDivPixel[index].style.backgroundColor = 'white';
  }
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
