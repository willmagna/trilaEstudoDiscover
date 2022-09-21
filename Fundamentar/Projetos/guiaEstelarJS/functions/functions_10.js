//É uma forma de capturar erros sem que toda a aplicação pare
//throw

function sayMyName(name = ''){

   if(name === ''){
        throw 'Nome é obrigatorio'
        //throw new Error("Nome é obeigatório")
    }

}


//try... catch

try{
    sayMyName("William")
}catch(e){
    console.log(e)
}

console.log('após o try catch')