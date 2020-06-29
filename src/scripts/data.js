// Tasha Lane created API fetch calls

const API = {
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