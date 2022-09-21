/**
 * Métodos fundamentais
 * enqueue(): adicionar um elemento ao final da fila
 * dequeue(): remover o primeiro elemento a entrar na fila
 * 
 * size(): para amostrar o tamanho da fila
 * front(): para pegar o primeiro elemento da fila
 * 
 */

// Passo1: Modelando

class Queue{
    constructor(){
        this.data = []
    }

    enqueue(item){
        this.data.push(item)
        console.log(`${item} chegou na fila!`)
    }

    dequeue(){
        const item = this.data.shift() //tira o primeiro a entrar nessa fila
        console.log(`${item} saiu da fila!`)
    }
}

// Passo2: Utilizando
const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('Joao')
fila.enqueue('Ariel')
fila.dequeue()
fila.dequeue()
fila.dequeue()