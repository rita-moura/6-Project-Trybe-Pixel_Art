function creatElement(element, text, attribute, value) {
  const newElement = document.createElement(element);
  newElement.innerText = text;
  newElement.setAttribute(attribute, value);
  return newElement;
}

function creatPalleteColors() {
  const addPallete = document.querySelector('#color-palette');
  for (let index = 1; index < 5; index += 1) {
    const creatPallete = addPallete.appendChild(creatElement('div', '', 'id', `color${index}`));
    creatPallete.classList.add('color');
  }
}
creatPalleteColors();
