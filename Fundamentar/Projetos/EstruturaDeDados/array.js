const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

// a indexação (index) começa pelo número 0
//console.log(pilotos)
//console.log(pilotos[0])
//console.log(pilotos[3])


//acessar o tamanho do array
//console.log(pilotos.length)

// Iterável
// for of
/*
for (let piloto of pilotos){
    console.log(piloto);
}


for (let piloto in pilotos){
    console.log(piloto);
}

*/

//adicionar elementos
pilotos.push('Alonso')
//console.log(pilotos)

// econtrar um elemento
//const senna = pilotos.find(piloto => piloto === 'Senna') //nao tão eficiente
//console.log(senna)

// deletar um elemento

pilotos.splice(1, 1)
console.log(pilotos)