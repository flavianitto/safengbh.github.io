//tela-grafico-veiculo.html e tela-busca-veiculo.html
let acidente = document.getElementById('acidente');
let texto = document.getElementById('veiculo');
let regiao = document.getElementById('selregiao');
let categoria = document.getElementById('selcategoria');

//pesquisar como pegar o valor
if(regiao.value == 'capital') {
    acidente.innerHTML += `Capital`;
}
texto.innerHTML += `(motocicleta)`;

//alterar a imagem tbm de acordo com a região