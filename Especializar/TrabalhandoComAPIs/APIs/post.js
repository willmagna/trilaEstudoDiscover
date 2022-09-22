const express = require('express')

const app = express()

app.listen('3000')

//MIDDLEWARE
//recebendo coisas do Insomnia
//json é um método que ta dentro do express
app.use(express.json())

//app.route('/').post( (req,res) => console.log(req.body))
app.route('/').post( (req, res) => res.send(req.body))