//Eventos

const h1 = document.querySelector('h1')

/*
Primeira forma:

h1.addEventListener('click', imprimir) //se chamar a funcao assim: imprimir()ja executará ela, por isso nao se usa parenteses
*/

//Segunda forma

h1.onclick = print

function imprimir(){
    console.log('print')
}