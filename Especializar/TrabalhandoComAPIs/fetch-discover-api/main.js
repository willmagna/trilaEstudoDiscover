const url = "http://localhost:5500/api"

function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

getUsers()


/*

Isso (ARROW FUNCTION)

then(response => response.json())

é igual à isso (FUNÇÃO ANONIMA):

function(response){
    return response.json()
}

*/