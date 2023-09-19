const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');

// PECAS
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        calculo(evento.target.parentNode, evento.target.dataset.controle);
        atualizaEstatisticas(evento.target.dataset.pecas); //dataset para selecionar atraves do data attribute.
    })
})

function calculo(controle, operacao) {

    const peca = controle.querySelector('[data-contador]')

    if (operacao === '-') {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca) {
    // console.log(pecas[peca]) //Pesquisa dentro do objeto.

    estatisticas.forEach((elemento) => {
        // console.log(elemento.dataset.estatistica)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}