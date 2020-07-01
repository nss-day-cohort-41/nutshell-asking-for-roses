import domObject from "./domobject.js"
import API from "./data.js"

/* Object which renders data to each section of the Dashboard

Object outline and messagesList method by David Larsen */

const renderToDom = {

    // Render the list of messages in the chat window
    messagesList(messagesArray) {

        // Sort list of messages by date and render each message to the DOM
        messagesArray.sort((message1, message2) => new Date(message2.date) - new Date(message1.date))
        // Clear existing list
        document.querySelector(".messagesList").innerHTML = ""
        messagesArray.forEach(message => {
            const messageHTML = domObject.messageComponent(message)
            document.querySelector(".messagesList").innerHTML += messageHTML
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

    //ARTICLE LIST MAKER created by Brett Stoudt
    //Ask David to explain sort...
    articlesList(articlesArray) {
            articlesArray.sort((article1, article2) => new Date(article2.date) - new Date(article1.date))
            document.querySelector(".articlesList").innerHTML = ""
            articlesArray.forEach(article => {
                const articleHTML = domObject.articleComponent(article)
                document.querySelector(".articlesList").innerHTML += articleHTML
            })
    },
    articlesListDeleteButton = document.querySelector(".articlesList")

    articlesListDeleteButton.addEventListener("click", (event) => {
   
      if (event.target.id.startsWith("articlesDeleteButton--")) {
        console.log("delete button clicked");
        const articleIdToDelete = event.target.id.split("--")[1];
        console.log("delete id", articleIdToDelete);
        API.deleteArticleEntry(articleIdToDelete);
      }
   
    }),

    friendsList(friendsArray) {

    }
}

export default renderToDom