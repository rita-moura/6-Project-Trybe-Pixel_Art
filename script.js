const localizacaoPaleta = document.querySelector("#color-palette");
function gerarPaletaDeCores() {
  for (let index = 1; index < 5; index += 1) {
    const criarPaletaDeCores = document.createElement('div');
    criarPaletaDeCores.id = 'cor' + index;
    criarPaletaDeCores.classList.add('color');
    localizacaoPaleta.appendChild(criarPaletaDeCores);
    console.log(criarPaletaDeCores);
  }
}
gerarPaletaDeCores();
