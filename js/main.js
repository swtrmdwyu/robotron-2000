const subtrair =  document.querySelector('#subtrair');
const somar =  document.querySelector('#somar');
const braco =  document.querySelector('#braco');

subtrair.addEventListener('click', ( ) => {
    braco.value = parseInt(braco.value) - 1;
})

somar.addEventListener('click', ( ) => {
    braco.value = parseInt(braco.value) + 1;
})