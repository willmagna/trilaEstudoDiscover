// setTimeOut rodar uma função depois de X milissegundos

const { timeout } = require("rxjs")

const timeOut = 3000
const finished = () => console.log('done!')

setTimeout(finished, timeOut)
console.log('mostrar')