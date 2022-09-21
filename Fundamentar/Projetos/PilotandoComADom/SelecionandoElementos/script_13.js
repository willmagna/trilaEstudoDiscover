//Adicionando elementos

const div = document.createElement('div')
div.innerText = "Olá DEVS!"

//insertBefore
/*
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)
*/
//Não existe insertAfter, então aqui vai um cambalaxo

const body = document.querySelector('body')
const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling)



