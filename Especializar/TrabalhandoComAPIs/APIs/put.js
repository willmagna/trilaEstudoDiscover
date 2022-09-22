const express = require('express')

const app = express()

app.listen('3000')

//middleware
app.use(express.json())

let author = "William"

app.route('/').get( (req,res) => res.send(author));

app.route('/').put( (req, res) => {
    author = req.body.author  //req.body.author -> mostra apenas o nome do autor e nao a estrutura JSON
    res.send(author)
})

