const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')

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
        let positivo = calculo(evento.target.parentNode, evento.target.dataset.controle)
        atualizaEstatisticas(evento.target.dataset.pecas, evento.target.dataset.controle, positivo) //dataset para selecionar atraves do data attribute.
    })
})

function calculo(controle, operacao) {

    const peca = controle.querySelector('[data-contador]')

    if (operacao === '-') {
        if(peca.value > 0) {
            peca.value = parseInt(peca.value) - 1
        } else {
            return -1
        }
        
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}


function atualizaEstatisticas(peca, operacao, positivo) {
    // console.log(pecas[peca]) //Pesquisa dentro do objeto.

    estatisticas.forEach((elemento) => {
        // console.log(elemento.dataset.estatistica
        if(parseInt(positivo) !== -1){
            if (operacao === '-') {
                elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]     
            } else {
                elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
            }
        }  
    })
}

// Mudar a cor do rôbo
const cores = [
    {
        "img": "img/azul/robotron-azul.png",
        "cor": "azul"
    },
    {
        "img": "img/vermelho/robotron-vermelho.png",
        "cor": "vermelho"
    },
    {
        "img": "img/rosa/robotron-rosa.png",
        "cor": "rosa"
    },
    {
        "img": "img/amarelo/robotron-amarelo.png",
        "cor": "amarelo"
    },
    {
        "img": "img/preto/robotron-preto.png",
        "cor": "vermelho"
    },
    {
        "img": "img/branco/robotron-branco.png",
        "cor": "branco"
    }
]


const robo = document.querySelector('.robo')

robo.addEventListener('click', () => {
    idx = parseInt(robo.dataset.cor)
    if(idx === 5){
        robo.dataset.cor = "0"
        robo.src = cores[0]["img"]   
    } else {    
        robo.dataset.cor = (idx + 1).toString()
        robo.src = cores[idx + 1]["img"] 
    }     
})

