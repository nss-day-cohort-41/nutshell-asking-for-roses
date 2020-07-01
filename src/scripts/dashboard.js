import API from "./data.js"
import renderToDom from "./render.js"
import forms from './forms/allForms.js';
import taskFunctions from '../tasks/taskButtons.js';

/* File created/refactored by David Larsen
    Original "load dashboard" code by Brett Stoudt
*/

// Hide the login page, show the dashboard
const loadDashboard = () => {
    const registrationContainer = document.querySelector("#registrationContainer")
    const hiddenDashboard = document.querySelector("#dashboardContainer")
    registrationContainer.classList.toggle("hidden")
    hiddenDashboard.classList.toggle("hidden")
    
    // Load individual delete functions
    //invoke add, delete, edit functionality for task buttons
    taskFunctions.taskEvents();
    
    
    // Load individual data components
    API.getMessagesData().then(messagesCollection => renderToDom.messagesList(messagesCollection))
    API.fetchUsers("http://localhost:8088/tasks").then(() => renderToDom.tasksList(API.userTaskArray))
    renderToDom.eventsList()
    renderToDom.articlesList()

     
     //Loading form components
    //  forms.renderingTaskForm();
    // forms.renderingEventForm();
    // forms.renderingArticleForm();
    

}

export default loadDashboard