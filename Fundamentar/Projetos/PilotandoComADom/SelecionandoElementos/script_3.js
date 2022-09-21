//querySelector()
//só pega o primeiro que ele achar na página
/*
const element = document.querySelector('meta')
console.log(element)
*/

//querySelectorAll()
/*const elements = document.querySelectorAll('#one')
console.log(elements)*/

const elements = document.querySelectorAll('#one')
elements.forEach(el => console.log(el))


/**
 * Qual usar?
 * getElementById (element)
 * getElementByClassName (HTML COLLECTION)
 * getElementByTagName (HTML COLLECTION)
 * querySelector (element)
 * querySelectorAll (Nodelist)
 */
