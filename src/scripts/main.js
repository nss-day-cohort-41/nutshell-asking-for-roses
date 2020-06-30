import userRegistration from './registration/registration.js'
import renderToDom from "./render.js"
import forms from './forms/allForms.js';
import taskFunctions from '../tasks/taskButtons.js';

import loadDashboard from './dashboard.js';

const registrationContainer = document.querySelector("#registrationContainer")
const hiddenDashboard = document.querySelector("#dashboardContainer")

if (sessionStorage.getItem("currentUser")) {
    loadDashboard()
}

userRegistration.clickRegistrationLink();
userRegistration.registrationFormValidator();
userRegistration.registeredUserLogin();


renderToDom.messagesList()
//you are changing this for task rendering (change back to active if not working)
// renderToDom.tasksList()
renderToDom.eventsList()

// forms.renderingTaskForm();
// forms.renderingEventForm();
// forms.renderingArticleForm();

renderToDom.articlesList()




  

// Logout button
const userLogOutRequest = document.querySelector(".logOutButton")
userLogOutRequest.addEventListener("click", event => {
    registrationContainer.classList.toggle("hidden")
    hiddenDashboard.classList.toggle("hidden")
    sessionStorage.clear()
})

//invoke delete functionality for task buttons
taskFunctions.deleteTask();