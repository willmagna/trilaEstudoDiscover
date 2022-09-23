const url = "http://localhost:5500/api"


function getUsers(){
    axios.get(`${url}`)
    .then(response => {
        //console.log(response.data)
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}


function addNewUser(newUser){
    axios.post(`${url}`, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}


function getUser(id){
    axios.get(`${url}/${id}`)
    //tipo isso a linha acima: http://localhost:5500/api/2
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.userID
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}


function updateUser(id, constUpdateUser){
    axios.put(`${url}/${id}`, constUpdateUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}


function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}


const newUser = {
    name: "William",
    avatar: "http://lorempixel.com.br/400/200",
    city: "Sinop"
}

const constUpdateUser = {
    name: "Olcir magnabosco",
    avatar: "http://lorempixel.com.br/400/200",
    city: "Sorrico"
}


//updateUser(3, constUpdateUser);
//addNewUser(newUser);
//deleteUser(4);
getUsers();
getUser(1);
