// clearTimeOut cancelar um timeout

const { timeout } = require("rxjs")

const timeOut = 3000
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut)

clearTimeout(timer)