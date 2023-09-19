const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        calculo(evento.target.parentNode, evento.target.textContent)
    })
})

function calculo(controle, operacao) {

    const peca = controle.querySelector('.controle-contador')

    if (operacao === '-') {
        braco.value = parseInt(braco.value) - 1;
    } else {
        braco.value = parseInt(braco.value) + 1;
    }
}