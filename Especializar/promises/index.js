/**
 * Promise
 * 
 * A promessa de que algo irá acontecer.
 * Poderá dar certo ou errado, 
 * mas irá acontecer
 * 
 */

//const promessa = new Promise(() => {}) só assum é "pending"
/*
const promessa = new Promise((resolve, reject) => {
    return resolve();
})
console.log(promessa)
*/

let aceitar = true

console.log('pedir uber')

const promessa = new Promise((resolve, reject) => {
    if(aceitar){
        return resolve('pedido aceito!')
    }
    return reject('pedido negado!')
})

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('finalizada'));


console.log('aguardando');