const express = require('express')
const app = express()


app.set("view engine", "ejs")

app.get("/", function(req, res){

        const subtitle = "Uma linguagem de modelagem para criação de pagina HTML"
        res.render("pages/index", {

        qualities: getItems(),
        subtitle: subtitle
        
    });
})

app.get("/sobre", function(req, res){
    res.render("pages/about");
})

app.listen(8080)
console.log("Rodando")

//===========================

function getItems(){
    let items = [
        {
            title: "D",
            message: "Desenvolver Aplicação/servidor de forma fácil",
        },
        {
            title:"E",
            message:"EJS usa JS para renderizar HTML",
        },
        {
            title:"M",
            message:"Mensagem com M",
        },
        {
            title:"A",
            message:"Mensagem com A",
        }
    ]

    return items
}