
const API = {
    // Sisi User GET and POST calls
   
    //GET function that gets all the user information from database
    getUserLogin() {
        return fetch("http://localhost:8088/users")
            .then((response) => {
                return response.json()
            })
           
    },
    getUsersArray() {
        return this.usersArray
    },
    //POST function that saves object to the API
    saveUserLogin(userObj) {
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

    getMessagesData: () => {
        return fetch("http://localhost:8088/messages")
            .then(messages => messages.json())
    },

//Tasha Lane created POST methods for each resource
    newArticlesEntry: (articlesObject) => {
        return fetch("http://localhost:8808/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(articlesObject),
        });
    },

    newEventsEntry: (eventsObject) => {
        return fetch("http://localhost:8808/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(eventsObject),
        });
    },

    newTasksEntry: (tasksObject) => {
        return fetch("http://localhost:8808/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tasksObject),
        });
    },

    newFriendsEntry: (friendsObject) => {
        return fetch("http://localhost:8808/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(friendsObject),
        });
    },
    newMessagesEntry: (messagesObject) => {
        return fetch("http://localhost:8808/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(messagesObject),
        
        });
    }

}
export default API
