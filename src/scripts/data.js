
const API = {
    // do we need this?
    usersArray: [],
    
    //GET function that gets all the user information from database
    getUserLogin () {
        return fetch("http://localhost:8088/users")
            .then( (response) => {
                return response.json()
            })
            // .then( (usersInfoArray) => {
            //     return this.usersArray = usersInfoArray
            // }) 
    },
    getUsersArray () {
        return this.usersArray
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
    },



// Tasha Lane created API fetch calls


    getArticlesData: () => {
        return fetch("http://localhost:8088/articles")
            .then(articles => articles.json())
    },
    getEventsData: () => {
        return fetch("http://localhost:8088/events")
            .then(events => events.json())
    },

    getTasksData: () => {
        return fetch("http://localhost:8088/tasks")
            .then(tasks => tasks.json())
    },
    getFriendsData: () => {
        return fetch("http://localhost:8088/friends")
            .then(friends => friends.json())
    },

    getFriendsData: () => {
        return fetch("http://localhost:8088/messages")
            .then(messages => messages.json())
    }
}
export default API