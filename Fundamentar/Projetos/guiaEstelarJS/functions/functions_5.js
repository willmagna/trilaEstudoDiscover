//callback function

function sayMyName(name){
    console.log('antes de executar a funcao callback')
    name()
    console.log('Depois de executar a callback')
}

//JS permite passa qualquer tipo de dado
/*sayMyName('William')
sayMyName(2)
sayMyName({name: 'William'})*/

//inclusive uma funcção que é um tipo de dado

sayMyName(
    () => {
      console.log('estou em uma callback')  
    }
)

console.log("OUUUU")

sayMyName(
    function name(){
      console.log('estou em uma callback')  
    }
)

console.log("mesma coisa")


/*CONCLUSÃO: VOCÊ PODE CRIAR FUNÇÕES EXTERNAS E ENVIA-LAS PARA DENTRO DE OUTRA FUNÇÃO*/