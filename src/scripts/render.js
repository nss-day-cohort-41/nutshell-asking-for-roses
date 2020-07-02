import API from "./data.js"
import domObject from "./domobject.js"

/* Object which renders data to each section of the Dashboard

Object outline and messagesList method by David Larsen */

const renderToDom = {

    // Render the list of messages in the chat window
    messagesList(messagesArray) {
        const messagesListDOM = document.querySelector(".messagesList")
        // Sort list of messages by date
        messagesArray.sort((message1, message2) => message2.timestamp - message1.timestamp)
        // Clear existing list then render current list
        messagesListDOM.innerHTML = ""
        messagesArray.forEach(message => {
            const messageHTML = domObject.messageComponent(message)
            messagesListDOM.innerHTML += messageHTML
        })

    },

    //Sisi (tasks)

    tasksList(tasksArray) {

        const incompleteTasks = tasksArray.filter(task => {
            return task.completed === false
        })
        console.log(incompleteTasks)
        const sortedTasks = incompleteTasks.sort((task1, task2) => new Date(task2.dueDate) - new Date(task1.dueDate))
        console.log(sortedTasks)
        document.querySelector(".tasksList").innerHTML = ""
        for (const task of sortedTasks) {
            const taskHTML = domObject.taskComponent(task)
            const taskElement = document.querySelector(".tasksList")
            taskElement.innerHTML += taskHTML
        }


    },
    // end Sisi (tasks)

    eventsList() {
        // **TEST DATA - delete later
        const eventsArray = [{
            "id": 1,
            "userId": 1,
            "name": "first event ever ",
            "location": "nextEvents section",
            "eventDate": "01/01/01"
          },
          {
            "id": 2,
            "userId": 2,
            "name": "2nd event to ever take place ",
            "location": "1st event in the events list",
            "eventDate": "02/02/02"
          }]
        // **

        eventsArray.sort((event1, event2) => new Date(event2.date) - new Date(event1.date))
        console.log(eventsArray) // Remove this line later
        eventsArray.forEach(event => {
            const eventHTML = domObject.eventComponent(event)
            // document.querySelector(".eventsList").innerHTML += eventHTML
        })
    },

    //ARTICLE LIST MAKER 
    //created by Brett Stoudt
    articlesList(articlesArray) {
            articlesArray.sort((article1, article2) => article2.timestamp - article1.timestamp)
            document.querySelector(".articlesList").innerHTML = ""
            articlesArray.forEach(article => {
                const articleHTML = domObject.articleComponent(article)
                document.querySelector(".articlesList").innerHTML += articleHTML
            })
    },

    // friendsList function by David Larsen
    friendsList(friendsArray) {

        const friendsListDOM = document.querySelector(".friendsList")
        // Clear the friends list
        friendsListDOM.innerHTML = ""
        friendsArray.forEach(friend => {
            const friendHTML = domObject.friendComponent(friend)
            friendsListDOM.innerHTML += friendHTML
        })
    }
}

export default renderToDom