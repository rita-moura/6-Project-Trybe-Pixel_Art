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

const colors = document.querySelectorAll('.color');

function alterColor() {
  for (let index = 1; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = createColor();
  }
  localStorage.setItem('colorPalette', createColor());
}
window.onload = alterColor();

/*function savedColor() {
  const savedColors = document.querySelector('#color-palette');
  return savedColors.innerHTML;
}

const searchColor = localStorage.getItem('colorPalette');
searchColor.innerHTML = savedColor();*/

const localButton = document.querySelector('#section-button');
localButton.appendChild(creatElement('button', 'Cores aleatórias', 'id', 'button-random-color'));
const buttonPalleteColor = document.querySelector('#button-random-color');
buttonPalleteColor.addEventListener('click', alterColor);

for (let index = 0; index < 25; index += 1) {
  const createGrade = addGradPixel.appendChild(creatElement('div', null, 'id', `pixel-${index}`));
  createGrade.classList.add('pixel');
}
