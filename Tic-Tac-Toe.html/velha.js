
var jogador = null;
var jogadorSelecionado = document.getElementById(elementId: 'jogador-selecionado';
var quadrados = document.getElementsByClassName( classNames)

mudarJogador(valor: 'X');

function escolherQuadrado(id){

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = "#000";

    if (jogador === 'X') {
        jogador = "0";
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);

}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;

}

function checaVencedor(){
    var quadrado1 = document.getElementById( elementId: 1);
    var quadrado2 = document.getElementById( elementId: 2);
    var quadrado3 = document.getElementById( elementId: 3);
    var quadrado4 = document.getElementById( elementId: 4);
    var quadrado5 = document.getElementById( elementId: 5);
    var quadrado6 = document.getElementById( elementId: 6);
    var quadrado7 = document.getElementById( elementId: 7);
    var quadrado8 = document.getElementById( elementId: 8);
    var quadrado9 = document.getElementById( elementId: 9);
}

function checaSequencia( quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML === quadrado2.innerHTML === quadrado3.innerHTML)

}

