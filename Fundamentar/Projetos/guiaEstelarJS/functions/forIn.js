// for...in
// Cria um loop em cima de um objeto pegando as propriedades do objeto

let person = {
    name: 'Will', 
    age: 30, 
    weight: 88.6

}

/*for (let property in person){
    console.log(property)
}*/

/*for (let property in person){
    console.log(person['name'])
}*/

/*for (let property in person){
    console.log(person.name)
}*/

for (let property in person){
    console.log(property)
    console.log(person[property])
}

