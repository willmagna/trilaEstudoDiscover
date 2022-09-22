// Funções aceitam qualquer tipo de dado como argumento
// O conceito de callback é: uma função que é passada para argumento para  
// uma outra função e depois de algum certo tempo ela será chamada de volta

function imprimirDado(dado){
    console.log('Outras tarefas') // 1º executa esse primeiro
    console.log(dado()) // 2º depois esse
}

/*imprimirDado(1)
imprimirDado('Texto')*/

// posso passar uma função como argumento para outra função
// Função anonima
imprimirDado(function () {
    console.log('eentrou na função') //3º ai chama esse
    return 'Olá Mundo'  //4º depois esse
})

//OU assim função não anonima
/*
imprimirDado(function dado() {
    return 'Olá Mundo'
})*/