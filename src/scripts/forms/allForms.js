import API from '../data.js'
import renderToDom from '../render.js'

//creating form objects for tasks, events, and articles to render user input to DOM
const forms = {
     createTaskFormObject (name, dueDate, completed = false) {
        const taskFormObject = {
            name,
            dueDate,
            completed
        }
        return taskFormObject
    },
    
    createEventFormObject (name, date, location) {
        const eventFormObject = {
            name,
            date,
            location
        }
        return eventFormObject
    },
    
    createArticleFormObject (date, name, synopsis, url) {
        const articleFormObject= {
            date,
            name,
            synopsis,
            url
    }
    return articleFormObject
    },
    
   //not working fixxxx
   renderingTaskForm() {
    //target save new task button to save to database, retrieve, and display on DOM
    
        // const saveNewTaskButton = document.getElementById("submitNewTask")
        // saveNewTaskButton.addEventListener("click", clickEvent => {
        //     const taskInput = document.querySelector(".taskInput")
        //     const dueDateInput = document.querySelector(".dueDateInput")
        //     const generateTaskFormData = createTaskFormObject(name, dueDate)
        //     API.newTasksEntry(generateTaskFormData(taskInput.value, dueDateInput.value))
        //     .then(API.fetchUsers("http://localhost:8088/tasks"))
        //     .then(renderToDom.tasksList(API.userTaskArray))
        // })
    //   

    
},
    renderingEventForm() {
        const saveNewEventButton = document.querySelector(".submitNewEvent")
        saveNewEventButton.addEventListener("click", clickEvent => {
            const eventNameInput = document.querySelector(".eventName")
            const eventDateInput = document.querySelector(".eventDate")
            const eventLocationInput = document.querySelector(".eventLocation")
            const generateEventFormData = createEventFormObject(name, date, location)
            API.newEventsEntry(generateEventFormData(eventNameInput.value, eventDateInput.value, eventLocationInput.value))
            .then(() => API.getEventsData())
            .then(renderToDom.eventsList())
        })
        
        const cancelNewEvent = document.querySelector(".cancelNewEvent")
        cancelNewEvent.addEventListener("click", clickEvent => {
            //make new event popup window disappear
        })
        
    },

    renderingArticleForm() {
        const saveNewArticleButton = document.querySelector(".submitNewArticle")
        saveNewArticleButton.addEventListener("click", clickEvent => {
            const articleNameInput = document.querySelector(".articleName")
            const articleSynopsisInput = document.querySelector(".articleSynopsis")
            const articleURLInput = document.querySelector(".articleURL")
            const generateArticleFormData = createEventFormObject(date, name, synopsis, url)
            API.newArticlesEntry(generateArticleFormData(new Date(), articleNameInput.value, articleSynopsisInput.value, articleURLInput.value))
            .then(() => API.getArticlesData())
            .then(renderToDom.eventsList())
        })
        
        const cancelNewArticle = document.querySelector(".cancelNewArticle")
        cancelNewArticle.addEventListener("click", clickEvent => {
            //make new article popup window disappear
        })
    }

    
}

export default forms


