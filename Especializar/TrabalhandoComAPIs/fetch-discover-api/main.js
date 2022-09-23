const url = "http://localhost:5500/api"

function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser()  {
    fetch(`${url}/18`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}


function addUser(newUser){
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
    name: "William Magnabosco",
    avatar: "http://lorempixel.com.br/400/200",
    city: "Sinop"
}

addUser(newUser)

getUsers()
getUser()

/*

Isso (ARROW FUNCTION)

then(response => response.json())

é igual à isso (FUNÇÃO ANONIMA):

function(response){
    return response.json()
}

*/