import API from '../data.js'
import renderToDom from '../render.js'
import forms from '../forms/allForms.js'


const taskFunctions = {

    //getting entry information back based on taskid, then pass the current task name and due date to it??
    createEditedTask(taskEntryId) {
        fetch(`http://localhost:8088/tasks/${taskEntryId}`)
            .then(response => response.json())
           .then((task) => {
            const createEditedObject = (task) => {
                const taskEditedObject = {
                    "userId": task.userId,
                    "name": task.name,
                    "dueDate": task.dueDate,
                    "completed": true
                }
                console.log(taskEditedObject)
                return createEditedObject
        
            }
           })

    },
    //add event listeners to task DELETE button
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
                //edit    
            } 
        })

    },

    editTask() {
        const editTaskButton = document.querySelector(".tasksList")
        editTaskButton.addEventListener("click", clickEvent => {
        if (event.target.id.startsWith("tasksListCompletedCheckbox--")) {
                const taskToEdit = clickEvent.target.id.split("--")[1]
                const checked = event.target.checked
                console.log(checked.value)

                if (checked) {
                    const taskInput = document.querySelector(".taskInput")
                    console.log(taskInput.value)
                    const dueDateInput = document.querySelector(".dueDateInput")
                    this.createEditedTask();

                    API.updateTaskCompletion(taskToEdit, this.createEditedObject(taskInput.value, dueDateInput.value))
                }
                
           
            }
        })
    },
      // this is the edited to change complete to true in database object
   
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