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
        const completeTasks = tasksArray.filter(task => { return task.completed === true })
        const incompleteTasks = tasksArray.filter(task => { return task.completed === false })

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

    eventsList(eventsArray) {
        
        eventsArray.sort((event1, event2) => new Date(event2.date) - new Date(event1.date))
        //below resets the list
        document.querySelector(".eventsList").innerHTML = "";
        console.log(eventsArray) // Remove this line later
        eventsArray.forEach(event => {
            const eventHTML = domObject.eventComponent(event)
            document.querySelector(".eventsList").innerHTML += eventHTML
        })
    
        const eventsList = document.querySelector(".eventsList");
        eventsList.addEventListener("click", (event) => {
            if (event.target.id.startsWith("eventsDeleteButton--")) {
                console.log("delete button clicked");
                const eventsIdToDelete = event.target.id.split("--")[1];
                console.log("delete id", eventsIdToDelete);
                API.deleteEventsEntry(eventsIdToDelete)
                    .then(API.getEventsData)
                    .then(eventsLog => renderToDom.eventsList(eventsLog))
            
            }
        });
        const hiddenEventsForm = document.querySelector(".newEventContainer")
        const addEventsButton = document.querySelector(".eventsAddButton");
        const saveEventButton = document.querySelector(".submitEventButton");
        addEventsButton.addEventListener("click", (clickEvent) => {
            hiddenEventsForm.classList.toggle("hidden");
            saveEventButton.addEventListener("click", (clickEvent) => {
                hiddenEventsForm.classList.toggle("hidden");
            
                // Save new events

                document.querySelector("#submitEventButton").addEventListener("click", (event) => {
                    let eventInput = document.getElementById("eventInput").value
                    let eventsId = document.getElementById("eventsId").value
                    const eventsToSave = createEventObject(eventInput)

                    // Check if events is new or edited
                    if (eventsId === "") {

                        API.newEventsEntry(eventsToSave)
                            .then(() => API.getEventsData()
                                .then(eventsLog => {
                                    // Clear the events blank and refresh events list
                                    eventsInput = ""
                                    renderToDom.eventsList(eventsLog)
                                }))
                    }
                })
            });
        });

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

    friendsList() {
  
    }

}
export default renderToDom