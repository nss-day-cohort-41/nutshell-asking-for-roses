import API from '../scripts/data.js'
import renderToDom from '../scripts/render.js'
import forms from '../scripts/forms/allForms.js'

const taskFunctions = {
     //add event listeners to task DELETE button
     taskEvents () {
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

            if(event.target.id.startsWith("tasksListCompletedCheckbox--")) {
                const tasktoEdit = clickEvent.target.id.split("--") [1]
                const checked = event.target.value
                if (checked) {
                    const taskInput = document.querySelector(".taskInput")
                    const dueDateInput = document.querySelector(".dueDateInput")
                    this.createEditedTask();
                    //FIXXXXX
                    API.updateTaskCompletion(tasktoEdit, forms.createTaskFormObject(taskInput.value, dueDateInput.value))
                }
                    
            } 
            const addTaskButton = document.querySelector(".tasksAddButton")
            addTaskButton.addEventListener("click", clickEvent => {
            console.log("add task button working")
            const hiddenTaskFormContainer = document.querySelector(".newTaskContainer")
            hiddenTaskFormContainer.classList.toggle("hidden")
        })
            
        })    
    },       
           
    //    openNewTaskForm () {
        
    // },

    createEditedTask (taskEntryId) {
        fetch(`http://localhost:8088/tasks/${taskEntryId}`)
        .then(response => response.json())
        .then(task => {
            task.completed = true
        })

    }

}

export default taskFunctions