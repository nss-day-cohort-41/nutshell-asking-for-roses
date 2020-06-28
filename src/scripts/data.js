const API = {
    //do we need this?
    usersArray: [],
    
    //GET function that gets all the user information from database
    getUserLogin () {
        return fetch("http://localhost:8088/users")
            .then(response => {return response.json()})
            .then(usersInfoArray => this.usersArray = usersInfoArray)
    },
    //POST function that saves object to the API
    saveUserLogin (userObj) {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
    }
}

export default API