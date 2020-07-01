import API from "./data.js"
import domObject from "./domobject.js"
import createMessageObject from "./createMessage.js"

/* Object which renders data to each section of the Dashboard

Object outline and messagesList method by David Larsen */

const renderToDom = {

    // Render the list of messages in the chat window
    messagesList(messagesArray) {
        const messagesListDOM = document.querySelector(".messagesList")
        // Sort list of messages by date
        messagesArray.sort((message1, message2) => new Date(message2.timestamp) - new Date(message1.timestamp))
        // Clear existing list then render current list
        messagesListDOM.innerHTML = ""
        messagesArray.forEach(message => {
            const messageHTML = domObject.messageComponent(message)
            messagesListDOM.innerHTML += messageHTML
        })

        // Save new message

        document.querySelector(".messagesSubmitButton").addEventListener("click", event => {
            let messageField = document.getElementById("messagesUserInput").value
            let timestamp = document.getElementById("messageTimestamp").value
            let messageId = document.getElementById("messageId").value
            const messageToSave = createMessageObject(messageField, timestamp)

            // Check if message is new or edited
            if (messageId === "") {

                API.newMessagesEntry(messageToSave)
                .then(() => API.getMessagesData()
                .then(messagesCollection => {
                    // Clear the message blank and refresh messages list
                    messageField = ""
                    renderToDom.messagesList(messagesCollection)
                }))

            } else {
                // Edited entry
                API.editMessage(messageToSave, messageId)
                    .then(() => API.getMessagesData()
                        .then(messagesCollection => {
                            // Clear the message blank and refresh messages list
                            messageField = ""
                            timestamp = ""
                            messageId = ""
                            renderToDom.messagesList(messagesCollection)
                        }
                    )
                )
            }
                
        })

        // Edit existing message
        messagesListDOM.addEventListener("click", event => {
            if (event.target.id.startsWith("editMessage--")) {
                const entryIdToEdit = event.target.id.split("--")[1]
                fetch(`http://localhost:8088/messages/${entryIdToEdit}`)
                    .then(response => response.json())
                    .then(entry => {
                        document.getElementById("messagesUserInput").value = entry.message
                        document.getElementById("messageTimestamp").value = entry.timestamp
                        document.getElementById("messageId").value = entry.id
                    })
            }
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

    articlesList() {
        // **TEST DATA - delete later
        const articlesArray = [
            {
                "id": 1,
                "userId": 1,
                "url": "www.google.com",
                "title": "actionNews 1",
                "synopsis": "Ron Tucker did this",
                "dateOfNews": "01/01/01"
              },
              {
                "id": 2,
                "userId": 2,
                "url": "www.google.com",
                "title": "actionNews 2",
                "synopsis": "Ron Burgendy is legend",
                "dateOfNews": "02/02/02"
              },
              {
                "id": 3,
                "userId": 3,
                "url": "www.google.com",
                "title": "actionNews 3",
                "synopsis": "Billy Madison ran over a penguin!!",
                "dateOfNews": "03/03/03"
              }
            ]
        // **

        articlesArray.sort((article1, article2) => new Date(article2.date) - new Date(article1.date))
        console.log(articlesArray) // Remove this line later
        articlesArray.forEach(article => {
            const articleHTML = domObject.articleComponent(article)
            document.querySelector(".articlesList").innerHTML += articleHTML
        })
    },

    friendsList(friendsArray) {

    }
}

export default renderToDom