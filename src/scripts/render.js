import domObject from "./domobject.js"

/* Object which renders data to each section of the Dashboard

Object outline and messagesList method by David Larsen */

const renderToDom = {

    // Render the list of messages in the chat window
    messagesList() {
        // **TEST DATA - delete later
        const messagesArray = [{
            name: "test1",
            date: "2020-06-05"
        }, {
            name: "test2",
            date: "2020-05-04"
        }, {
            name: "test3",
            date: "2020-06-21"
        }]
        // **

        // Sort list of messages by date and render each message to the DOM
        messagesArray.sort((message1, message2) => new Date(message2.date) - new Date(message1.date))
        console.log(messagesArray) // Remove this line later
        messagesArray.forEach(message => {
            const messageHTML = domObject.messageComponent(message)
            // document.querySelector(".messagesList").innerHTML += messageHTML
        })
    },

    tasksList() {
        // **TEST DATA - delete later
        const tasksArray = [{
            name: "test1",
            dueDate: "2020-06-05",
            completed: false
        }, {
            name: "test2",
            dueDate: "2020-05-04",
            completed: true
        }, {
            name: "test3",
            dueDate: "2020-06-21",
            completed: false
        }]
        // **

        // Separate and sort with completed items at the top of the list, then sorted in order by due date
        const completeTasks = tasksArray.filter(task => {return task.completed === true})
        const incompleteTasks = tasksArray.filter(task => {return task.completed === false})

        completeTasks.sort((task1, task2) => new Date(task2.dueDate) - new Date(task1.dueDate))
        incompleteTasks.sort((task1, task2) => new Date(task2.dueDate) - new Date(task1.dueDate))

        console.log(completeTasks) // Remove this line later
        console.log(incompleteTasks) // Remove this line later
        completeTasks.forEach(task => {
            const taskHTML = domObject.taskComponent(task)
            // document.querySelector(".tasksList").innerHTML += taskHTML
        })
        incompleteTasks.forEach(task => {
            const taskHTML = domObject.taskComponent(task)
            // document.querySelector(".tasksList").innerHTML += taskHTML
        })


    },

    eventsList() {
        // **TEST DATA - delete later
        const eventsArray = [{
            name: "test1",
            date: "2020-06-05"
        }, {
            name: "test2",
            date: "2020-05-04"
        }, {
            name: "test3",
            date: "2020-06-21"
        }]
        // **

        eventsArray.sort((event1, event2) => new Date(event2.date) - new Date(event1.date))
        console.log(eventsArray) // Remove this line later
        eventsArray.forEach(event => {
            const eventHTML = domObject.eventComponent(event)
            // document.querySelector(".eventsList").innerHTML += eventHTML
        })
    },

    articlesList(articlesArray) {
        // **TEST DATA - delete later
        const articlesArray = [{
            name: "test1",
            date: "2020-06-05"
        }, {
            name: "test2",
            date: "2020-05-04"
        }, {
            name: "test3",
            date: "2020-06-21"
        }]
        // **

        articlesArray.sort((article1, article2) => new Date(article2.date) - new Date(article1.date))
        console.log(articlesArray) // Remove this line later
        articlesArray.forEach(article => {
            const articleHTML = domObject.articleComponent(article)
            // document.querySelector(".articlesList").innerHTML += articleHTML
        })
    },

    friendsList(friendsArray) {

    }
}

export default renderToDom