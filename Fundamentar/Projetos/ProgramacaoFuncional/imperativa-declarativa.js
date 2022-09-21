// Função que eleva o número ao quadrado
// Imperativo: Faça da seguinte forma. Dar ordem.
/**
 * Código é pensado e gerado em sequencia.
 * o codigo é pensando como um passo-a-passo, como uma receita de bolo.
 * Uma coisa depende da outra
 * O estado de um dado é alterado constantemente causando mutações nas variávels
 * Orientação a Objetos é um tipo de paradigma imperativo
 * stateful function
 */
let number = 2

function square(){
    return number * number;
}

number = square()

// Declarativa: O que fazer e não como fazer. 
/**
 * O código é degrado para fazer algo, não importa como
 * O que fazer e não como fazer
 * Não há necessidade de um passo a passo no código
 * Programação funcional é um tipo de paradigma declarativo
 * stateless function
 */

const square = n => n*n;