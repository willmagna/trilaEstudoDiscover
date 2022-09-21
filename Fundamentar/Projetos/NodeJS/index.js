//como se fosse o console.lg()
//process.stdout.write("Alguma coisa \n\n\n")

const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei hoje?",

]

const ask = ( index = 0) => {
    return process.stdout.write("\n" + questions[index] + " > ")
}

ask()

/*process.stdin.on("data", data => {
    process.stdout.write(data.toString().trim() + '\n')
    //process.exit()
})*/

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length)
    }else{
       // console.log(answers)
        process.exit()
    }
})


process.on('exist', () => {

    console.log(`
    Legal, William.

    O que você aprendeu hoje foi:
    ${answers[0]}

    O que te aborreceu e você poderia melhorar foi:
    ${answers[1]}

    O que te deixou felix hoje:
    ${answers[2]}

    VOce Ajudou ${answers[3]} pessoas hoje!

    Volte amanha para novas reflexoes.

    `)
})