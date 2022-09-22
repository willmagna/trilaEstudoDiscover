/**
 * Async/Awai
 * Maniera de escrever promises
 * Syntactic Sugar
 * É uma mandeira mais elegante de se fazer as "Promessas"
*/


//EXECUTAR ESSE CÓDIGO NO https://codesandbox.io/dashboard

const promessas = new Promise ( function( resolve, reject){

    //return resolve('ok')
    return reject('error');

})

async function start(){

    try{
        const result = await promessa
        console.log(result)
    } catch (e){
        console.log(e)
    } finally {
        console.log('rodar sempre')
    }


}

start();

