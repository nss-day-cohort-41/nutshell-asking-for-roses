const { default: API } = require("../scripts/data")

const deleteTaskFunction = () => {
    //add event listeners to task DELETE button
    const deleteTaskButton = document.querySelector(".tasksList__Item")
deleteTaskButton.addEventListener("click", clickEvent => {
        if (event.target.id.startsWith("tasksDeleteButton--")) {
            //from button's id attribute, get id value by doing .split() on string to turn into array([1] will be index of your id number)
            const taskToDelete = clickEvent.target.id.split("--")[1]
            //invoke delete method from API module passing in task entry id
            API.deleteTaskEntry(taskToDelete)
            //get all entries again, render them to DOM
            API.fetchUsers("http://localhost:8088/tasks").then(() => renderToDom.tasksList(API.userTaskArray))

        }
    })
}

export default deleteTaskFunction