/*
Axios é uma HTTP client baseado em promessas para que
possamos tanto no Browser quanto no node.js.
No browser ja temos a fetch API por padrão, não precisamos
instalar nada que ela ja existe.API
Mas no node começa ficar confuso dependendo de como estamos usando
o HTTP ali.

Então com a axios podemos usar no browser e no node.js
*/

//no https://codesandbox.io/dashboard
import axios from "axios";
import nodeTest from "node:test"
axios.get('https://api.github.com/users/maykbrito')
  .then(res => {
    console.log(res.data);
  });