//busca-criminalidade
let buscar = document.getElementById('btnbuscarC');
let buscarM = document.getElementById('btnbuscarM');

let h = document.getElementById('conteudo__crimes');
let legenda = document.querySelector('p#conteudo__ocorrencias');

let sel = document.getElementById('selregiaoC');
let selC = document.getElementById('selcriminalidade');

let selM = document.getElementById('selregiaoM');
let crimM = document.getElementById('selcrimM')

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

//buscar modelos
function buscarModelo() {
  let regm = selM.options.selectedIndex;
  let crim = crimM.options.selectedIndex;
  alert('Buscando modelo da subprefeitura de ' + regioes[regm] + ' \nCrime selecionado: ' + crimes[crim]);
  if (regm == 0) {
    switch (crim) {
      case 0: //roubo
        window.open('./rouboMA.html', "_self");
        break;
      case 1: //estupro
        window.open('./estuproMA.html', "_self");
        break;
      case 2: //homicidio
        window.open('./homicidioMA.html', "_self");
        break;
      case 3: //acidente
        window.open('./acidenteMA.html', "_self");
        break;
    }
  }
  else {
    switch (crim) {
      case 0: //roubo
        window.open('./rouboMB.html', "_self");
        break;
      case 1: //estupro
        window.open('./estuproMB.html', "_self");
        break;
      case 2: //homicidio
        window.open('./homicidioMB.html', "_self");
        break;
      case 3: //acidente
        window.open('./acidenteMB.html', "_self");
        break;
    }    
  }
}