const url = "http://localhost:5500/api"

function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser(id)  {
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}


function addUser(newUser){
    fetch(`${url}`, {
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


function updateUser(constUpdateUser, id){
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(constUpdateUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function deleteUser(id){
    fetch(`${url}/${id}`, {
        method: "DELETE",
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

const constUpdateUser = {
    name: "Olcir Magnabosco",
    avatar: "http://lorempixel.com.br/400/200",
    city: "Sinop"
}


addUser(newUser)
//updateUser(constUpdateUser, 5);
//deleteUser(4);
getUsers()
getUser(4);


/*

Isso (ARROW FUNCTION)

then(response => response.json())

é igual à isso (FUNÇÃO ANONIMA):

function(response){
    return response.json()
}

*/