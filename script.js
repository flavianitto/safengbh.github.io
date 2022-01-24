//busca-criminalidade
let buscar = document.getElementById('btnbuscarC');
let buscarM = document.getElementById('btnbuscarM');

let h = document.getElementById('conteudo__crimes');
let legenda = document.querySelector('p#conteudo__ocorrencias');

let sel = document.getElementById('selregiaoC');
let selC = document.getElementById('selcriminalidade');

let regioes = [];
regioes.push('Aricanduva');
regioes.push('Butantã');

let crimes = [];
crimes.push('Roubo');
crimes.push('Estupro');
crimes.push('Homicídio');
crimes.push('Acidente');

//buscar crimes
function buscarC() {
  let reg = sel.options.selectedIndex;
  let cri = selC.options.selectedIndex;
  alert('Buscando subprefeitura de ' + regioes[reg] + ' \nCrime selecionado: ' + crimes[cri]);
  if (reg == 0) {
    switch (cri) {
      case 0: //roubo
        window.open('./rouboA.html', "_self");
        break;
      case 1: //estupro
        window.open('./estuproA.html', "_self");
        break;
      case 2: //homicidio
        window.open('./homicidioA.html', "_self");
        break;
      case 3: //acidente
        window.open('./acidenteA.html', "_self");
        break;
    }
  }
  else {
    switch (cri) {
      case 0: //roubo
        window.open('./rouboB.html', "_self");
        break;
      case 1: //estupro
        window.open('./estuproB.html', "_self");
        break;
      case 2: //homicidio
        window.open('./homicidioB.html', "_self");
        break;
      case 3: //acidente
        window.open('./acidenteB.html', "_self");
        break;
    }    
  }
}
