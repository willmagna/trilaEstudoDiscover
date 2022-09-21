const getFlagValue = require('./flags')

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)

//tem que executar isso no terminal:
//node greetings --name "William Lodea" --greeting "Tudo bem com vc?"