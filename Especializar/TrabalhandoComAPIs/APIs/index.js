/**
 * O framework express é um conjutno de códigos/arquivos
 * que vamos baixar para dentro do nosso projeto node.js
 * e poderemos utilizar esses recursos que o express baixará para dentro
 * do projeto pra auxiliar no momento de criar alguma aplicação.
 * 
 * Express é um framework pra aplicativo web que fornece recursos robustos
 * pra gente utilizar.
 * 
 */

//  CRIANDO UM SERVER, NO LOCALHOST, NESSA CASO NA PORTA 3000


//quando colocar na URL: localhost:3000
//O navegador começa a ler essas linhas abaixo

const express = require('express'); // esse express é um framework que esta dentro do package e modules JavaScript

const app = express();

app.listen('3000') //Ouvindo uma porta, nessa caso 3000, pra poder rodar no navegador. Isso é um server.

//pra executar preciso rodar no terminal: node index.js
// posso rodar tbm: node . (quando dentro do arquivo package.json -> "main": "index.js" estiver com o mesmo nome)

//route -> o browser procura uma rota (/) significa a pasta raiz do site, por exemplo.
//.get -> GET. 
//(req, res) -> req = requisição que o browser ta "requerendo"
//res = response -> a resposta que enviaremos para o browser.

app.route('/').get((req, res)=> res.send("Hello"))
app.route('/sobre').get( (req, res) => res.send("Hello sobre"))

