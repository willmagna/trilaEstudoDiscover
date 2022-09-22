import axios from 'axios'

 //Isso aqui é uma promessa. Axios quando pega um objeto, devolve uma promessa pendente

 /**
  * da pra escrever assim:

axios
  .get('https://api.github.com/users/willmagna')
  .then(response => {
    const user = response.data

    return axios.get(user.repos_url)
  })
  .then(repos => console.log(repos.data))
  .catch( error => console.log(error));

  */

  // OU ASSIM


  axios
  .get('https://api.github.com/users/willmagna')
  .then(response => axios.get(response.data.repos_url))
  .then(repos => console.log(repos.data))
  .catch( error => console.log(error));

  //response -> data -> repos_url

/**
 * Unica coisa que muda é a sintaxe
 */