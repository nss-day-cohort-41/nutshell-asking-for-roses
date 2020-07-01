import API from "./data.js"
import renderToDom from "./render.js"
import forms from '../scripts/forms/allForms.js'
import taskFunctions from '../scripts/tasks/taskButtons.js';
import tasksButtonFunctionality from "./tasks/taskButtonEvents.js";

/* File created/refactored by David Larsen
    Original "load dashboard" code by Brett Stoudt
*/

// Hide the login page, show the dashboard
const loadDashboard = () => {
    const registrationContainer = document.querySelector("#registrationContainer")
    const hiddenDashboard = document.querySelector("#dashboardContainer")
    registrationContainer.classList.toggle("hidden")
    hiddenDashboard.classList.toggle("hidden")
    
   
    //invoking task functions
   
    
    
    // Load individual data components
    API.getMessagesData().then(messagesCollection => renderToDom.messagesList(messagesCollection))
    API.getTasksData().then((array) => {
    renderToDom.tasksList(array)})
    .then(() => {
        tasksButtonFunctionality()
        taskFunctions.taskEvents()
        taskFunctions.editTask()
    }
    )
    
    

    

    renderToDom.eventsList()
    renderToDom.articlesList()

    // Load individual delete functions
    //invoke add, delete, edit functionality for task buttons
    
    //Loading form components
    //  forms.renderingTaskForm();
    // forms.renderingEventForm();
    // forms.renderingArticleForm();
    

}

export default loadDashboard