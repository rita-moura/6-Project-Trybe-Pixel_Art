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
creatSectionButton.appendChild(creatElement('section', '', 'id', 'button'));

const creatGradPixel = document.querySelector('body');
creatGradPixel.appendChild(creatElement('section', '', 'id', 'pixel-board'));
const addGradPixel = document.querySelector('#pixel-board');

for (let index = 0; index < 4; index += 1) {
  const createDiv = addDiv.appendChild(creatElement('div', null, 'id', `color-${index}`));
  createDiv.classList.add('color');
}

const divBlack = document.querySelectorAll('.color')[0];
divBlack.className = 'color selected';

function palleteColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  document.querySelectorAll('.color')[1].style.backgroundColor = `rgb(${green}, ${red}, ${blue})`;
  document.querySelectorAll('.color')[2].style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
  document.querySelectorAll('.color')[3].style.backgroundColor = `rgb(${blue}, ${green}, ${red})`;
  localStorage.setItem('colorPalette', `rgb(${green}, ${red}, ${blue})`);
}
window.onload = palleteColor;

const localButton = document.querySelector('#button');
const creatButton = localButton.appendChild(creatElement('button', 'Cores aleatórias', 'id', 'button-random-color'));
creatButton.style.border = '1px solid black';

creatButton.addEventListener('click', palleteColor);

for (let index = 0; index < 25; index += 1) {
  const createGrade = addGradPixel.appendChild(creatElement('div', null, 'id', `pixel-${index}`));
  createGrade.classList.add('pixel');
  createGrade.style.backgroundColor = 'white';
}
