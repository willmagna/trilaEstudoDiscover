const { inherits } = require('util')
const { EventEmitter } = require('events')
//const { EventEmitter } = require('events')

function Character(name){
    this.name = name
}

inherits(Character, EventEmitter) //herança

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado`))

console.log('Oh! E agora, quem poderáme defender?')

chapolin.emit('help')