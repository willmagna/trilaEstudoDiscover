//Criando e adicionando elementos
//creatElement

const div = document.createElement('div')

div.innerText = "Olá DEVS."

//append prepend
const body = document.querySelector('body')

//body.append(div)

body.prepend(div)

//nesse caso ele vai adicionar antes ou depois do body, porque o body é a referencia, mas poderia ser o header, ou qq outra coisa.