const express = require('express')

const app = express()

app.listen(3000)

app.use(express.json())


//localhost:3000/
app.route('/').get( (req, res) => {
    res.send("Oi")
})

//localhost:3000/valorQualquerParametro
app.route('/:variavel').get( (req, res) => {
    res.send(req.params.variavel)
})

//localhost:3000/identidade/parametroQualquer
app.route('/:identidade/:nome').get( (req, res) => {
    res.send(req.params.nome)
})