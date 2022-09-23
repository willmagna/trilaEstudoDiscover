const express = require('express')

const app = express()

app.listen('3000')

//app.route('/').get( (req,res) => res.send("olá") ) 


/**
 * app.route('/').get( (req,res) => {
    console.log(req.body)
    //req.body é o corpo da requisição mas nao funciona no método GET
    } ) 

    O body só tem nos métodos: POST, PUT E PATCH
*/

//middleware
app.use(express.json())

/*

JSON passado no BODY com POST 


{
	"nome": "William",
	"sobrenome": "Lodea Magnabosco",
	"livros_favoritos" : [
		"livro1",
		"livro2",
		"livro3"
	]
}

*/


app.route('/').post( (req,res) => {
    const {nome, sobrenome, livros_favoritos} = req.body //desmenbramento
    //res.send(req.body)
    //res.send(req.body.nome)
    res.send(`Nome: ${nome}; Sobrenome: ${sobrenome}. Livros Favoritos: ${livros_favoritos}`)
} ) 