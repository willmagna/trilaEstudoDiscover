const { EventEmitter } = require('events')
//const { EventEmitter } = require('stream')

const ev = new EventEmitter()

//console.log(ev)

/*
ev.on('saySomething', (message) =>{
    console.log('Eu ouvi vc: ', message)
})

//ev.emit('saySomething')
ev.emit('saySomething', "fadfad")
*/

ev.once('saySomething', (message) =>{
    console.log('Eu ouvi vc: ', message)
})

ev.emit('saySomething', "fadfad")
ev.emit('saySomething', "1231321")
