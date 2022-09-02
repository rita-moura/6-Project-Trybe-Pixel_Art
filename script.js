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
const addDiv = document.querySelector('section');

for (let index = 0; index < 4; index += 1) {
  const createDiv = addDiv.appendChild(creatElement('div', null, 'id', `color-${index}`));
  createDiv.classList.add('color');
}

function buttonColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  document.querySelectorAll('.color')[1].style.backgroundColor = `rgb(${green}, ${red}, ${blue})`;
  document.querySelectorAll('.color')[2].style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
  document.querySelectorAll('.color')[3].style.backgroundColor = `rgb(${blue}, ${green}, ${red})`;
}
window.onload = buttonColor;

const localButton = document.querySelector('body');
const creatButton = localButton.appendChild(creatElement('button', 'Cores aleatórias', 'id', 'button-random-color'));
creatButton.style.border = '1px solid black';

creatButton.addEventListener('click', buttonColor);
