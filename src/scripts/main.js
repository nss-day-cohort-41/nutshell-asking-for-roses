import API from './data.js'
import userRegistration from './registration/registration.js'
import renderToDom from "./render.js"
import forms from './forms/allForms.js';

//you added this for fetch calling tasks (delete if not working)
API.fetchUsers("http://localhost:8088/tasks").then(() => renderToDom.tasksList(API.userTaskArray))

userRegistration.clickRegistrationLink();
userRegistration.registrationFormValidator();
userRegistration.registeredUserLogin();


renderToDom.messagesList()
//you are changing this for task rendering (change back if not working)
// API.getTasksData()
renderToDom.eventsList()

// forms.renderingTaskForm();
// forms.renderingEventForm();
// forms.renderingArticleForm();



