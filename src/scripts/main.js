import API from './data.js'
import userRegistration from './registration/registration.js'
import renderToDom from "./render.js"

userRegistration.clickRegistrationLink();
userRegistration.registrationFormValidator();
userRegistration.registeredUserLogin();


renderToDom.messagesList()
renderToDom.tasksList()
renderToDom.eventsList()
renderToDom.articlesList()


   //user requested to log out, reset DOM to registration page
   //STILL REQUIRED clear user session from browser.
const registrationContainer= document.querySelector("#registrationContainer")
const hiddenDashboard = document.querySelector("#dashboardContainer")

const userLogOutRequest = document.querySelector(".logOutButton")
userLogOutRequest.addEventListener("click", event => { 
    hiddenDashboard.classList.toggle("hidden")
    registrationContainer.classList.toggle("hidden")

    
})
