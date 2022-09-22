// Só funciona no browser
// para executar isso, colocar no https://codesandbox.io/dashboard
// No browser a FETCH API já é instalada por padrão

fetch('https://api.github.com/users/maykbrito')
.then ( response => response.json())
.then ( data => fetch(data.repos_url))
.then ( res => res.json())
.then ( d => console.log(d))
.catch( error => console.log(error));