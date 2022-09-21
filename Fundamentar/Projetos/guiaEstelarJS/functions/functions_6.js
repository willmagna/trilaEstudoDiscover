/*

  FUNÇÃO CONSTRUTORA

  Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword


*/


function Person(name){
  this.name = name
  this.walk = function () {
    return "Andando..."
  }
}

const william = new Person('Lodea magnabosco')
const Myak = new Person('Mayk')

console.log(william)
console.log(Myak)

console.log(william.name)
console.log(Myak.name)

console.log(william.walk)
console.log(Myak.walk)

console.log(william.walk())
console.log(Myak.walk())