const { Router } = require('express')
const express = require('express')
const app = express()

app.listen(3000)

app.use(express.json())


//localhost:3000?nome=William
//localhost:3000?nome=William&sobrenome=magnabosco

app.route('/').get( (req,res) => {
    res.send( req.query );
})

/*
SAIDA:
{"nome": "William"}
{"nome": "William", "sobrenome": "magnabosco"}
*/

//localhost:3000/about/user?nome=William
app.route('/about/user').get( (req,res) => {
    res.send( req.query );
})

//{"nome": "William"}