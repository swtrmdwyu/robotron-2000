const controle = document.querySelectorAll('[data-controle]');

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        calculo(evento.target.parentNode, evento.target.dataset.controle)
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