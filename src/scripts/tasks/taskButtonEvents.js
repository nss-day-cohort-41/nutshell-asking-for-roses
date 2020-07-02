import taskFunctions from "./taskButtons.js"
import API from '../data.js'
import renderToDom from '../render.js'

//Sisi-task section functionality

const tasksButtonFunctionality = () => {
    //add event listener to add task button to OPEN popup modal (working)
    const addTaskButton = document.querySelector(".tasksAddButton")
    addTaskButton.addEventListener("click", clickEvent => {
        console.log('add task')
        const hiddenTaskFormContainer = document.querySelector(".newTaskContainer")
        hiddenTaskFormContainer.classList.toggle("hidden")
        const popUpContainer = document.querySelector('.popupForm')
        popUpContainer.classList.add('is-open')

        //target cancel button and CLOSE popup modal (working)
        const cancelNewTask = document.querySelector("#cancelNewTask")
        cancelNewTask.addEventListener("click", clickEvent => {
            console.log("cancel button working")
            popUpContainer.classList.remove('is-open')

        })
    })

    //save functionality on SUBMIT button on popup form and POST in databse and display (working)
    const saveNewTaskButton = document.getElementById("submitNewTask")
    saveNewTaskButton.addEventListener("click", clickEvent => {
        const taskInput = document.querySelector(".taskInput")
        const dueDateInput = document.querySelector(".dueDateInput")

        const newTaskObject = taskFunctions.createTaskFormObject(taskInput.value, dueDateInput.value)
        API.newTasksEntry(newTaskObject)
            .then(() => API.getTasksData())
            .then((array) => renderToDom.tasksList(array))
        document.querySelector(".tasksList").innerHTML = ""
        taskInput.value = ""
        dueDateInput.value = ""
        const popUpContainer = document.querySelector('.popupForm')
        popUpContainer.classList.remove('is-open')

    })


}

export default tasksButtonFunctionality
 