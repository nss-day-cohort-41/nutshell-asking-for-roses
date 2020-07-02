import API from '../data.js'
import renderToDom from '../render.js'

//Sisi- task events
const taskFunctions = {

    taskEvents() {

        //delete task 
        const deleteTaskButton = document.querySelector(".tasksList")
        deleteTaskButton.addEventListener("click", clickEvent => {
            if (event.target.id.startsWith("tasksDeleteButton--")) {
                console.log("delete event button works")
                //from button's id attribute, get id value by doing .split() on string to turn into array([1] will be index of your id number)
                const taskToDelete = clickEvent.target.id.split("--")[1]
                //invoke delete method from API module passing in task entry id
                API.deleteTaskEntry(taskToDelete)
                    //get all entries again, render them to DOM
                    .then(() => API.getTasksData())
                    .then((array) => renderToDom.tasksList(array))
                  
            } 
        })

    },

    //edit task (working)
    editTask() {
        const editTaskButton = document.querySelector(".tasksList")
        editTaskButton.addEventListener("click", clickEvent => {
        if (event.target.id.startsWith("tasksListCompletedCheckbox--")) {
            console.log("edit button working")
                const taskToEdit = clickEvent.target.id.split("--")[1]
                const checked = event.target.checked
                if (checked ===  true) {
                    fetch(`http://localhost:8088/tasks/${taskToEdit}`)
                            .then(response => response.json())
                            .then(task=> {
                                 
                                const taskEditedObject = {
                                        "userId": task.userId,
                                        "name": task.name,
                                        "dueDate": task.dueDate,
                                        "completed": true
                                    } 
                                API.updateTaskCompletion(taskToEdit, taskEditedObject)
                                document.querySelector(".tasksList__Item").innerHTML = ""
                            })
                            
                        }
                   
                    }
                })
            },
                

    //this is task form object that will be POSTED and displayed on DOM
    createTaskFormObject (name, dueDate, completed = false) {
        const taskFormObject = {
            userId: parseInt(sessionStorage.getItem("currentUser")),
            name,
            dueDate,
            completed
        }
        return taskFormObject
    }
    
}
     



export default taskFunctions