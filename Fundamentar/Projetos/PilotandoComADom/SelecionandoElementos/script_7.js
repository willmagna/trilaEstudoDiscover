//Manipulando elementos
//Atributos


const header = document.querySelector('header')

console.log(header.getAttribute('id'))

header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

    //console.log(headerID)

console.log(headerID.getAttribute('id'))

header.removeAttribute('id')
//header.removeAttribute('class')

console.log(header.getAttribute('id'))

header.setAttribute('class', 'bg header')