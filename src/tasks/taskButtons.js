import API from '../scripts/data.js'
import renderToDom from '../scripts/render.js'
import forms from '../scripts/forms/allForms.js'


const taskFunctions = {

     //getting entry information back based on taskid, then pass the current task name and due date to it??
    createEditedTask(taskEntryId) {
        const taskInput = document.querySelector(".taskInput")
        const dueDateInput = document.querySelector(".dueDateInput")
        fetch(`http://localhost:8088/tasks/${taskEntryId}`)
            .then(response => response.json())
            .then(task => {
                taskInput.value = task.name
                dueDateInput.value = task.dueDate
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
                    .then(API.getTasksData())
                    .then(renderToDom.tasksList(API.userTaskArray))
            }
            //edit task
            if (event.target.id.startsWith("tasksListCompletedCheckbox--")) {
                const taskToEdit = clickEvent.target.id.split("--")[1]
                const checked = event.target.value
                if (checked) {
                    const taskInput = document.querySelector(".taskInput")
                    const dueDateInput = document.querySelector(".dueDateInput")
                    this.createEditedTask(taskToEdit);
                    //FIXXXXX
                    API.updateTaskCompletion(taskToEdit,  this.createEditedObject(taskInput.value, dueDateInput.value))  
                }
                //popup form code below

            } 
            
             //add event listener to add task button to OPEN popup modal
             const addTaskButton = document.querySelector(".tasksAddButton")
             addTaskButton.addEventListener("click", clickEvent => {
             console.log('add task')
             const hiddenTaskFormContainer = document.querySelector(".newTaskContainer")
             hiddenTaskFormContainer.classList.toggle("hidden")
             const popUpContainer = document.querySelector('.popupForm')
             popUpContainer.classList.add('is-open')
            
            //  window.onload = () => {
             //target cancel button and CLOSE popup modal
             const cancelNewTask = document.querySelector("#cancelNewTask")
             cancelNewTask.addEventListener("click", clickEvent => {
              console.log("cancel button working")
              popUpContainer.classList.remove('is-open')
             
           
             })
           
            //save functionality on SUBMIT button on popup form and POST in databse and display
            const saveNewTaskButton = document.getElementById("submitNewTask")
            saveNewTaskButton.addEventListener("click", clickEvent => {
            const taskInput = document.querySelector(".taskInput")
            const dueDateInput = document.querySelector(".dueDateInput")
            const generateTaskFormData = createTaskFormObject(name, dueDate, completed)
            API.newTasksEntry(generateTaskFormData(taskInput.value, dueDateInput.value, completed))
            .then(API.fetchUsers("http://localhost:8088/tasks"))
            .then(renderToDom.tasksList(API.userTaskArray))
        })
    // }
         }) 
        

            })
       
    
},
      
    createEditedObject (name, dueDate, completed = true) {
        const taskObject = {
            name,
            dueDate,
            completed
        }
        return taskObject
    }
     
}

export default taskFunctions