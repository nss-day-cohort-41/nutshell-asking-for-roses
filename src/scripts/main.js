import API from './data.js'
import userRegistration from './registration/registration.js'
import renderToDom from "./render.js"

userRegistration.clickRegistrationLink();
userRegistration.registrationFormValidator();
userRegistration.registeredUserLogin();


renderToDom.tasksList()
renderToDom.eventsList()
renderToDom.articlesList()


const registrationContainer= document.querySelector("#registrationContainer")
const hiddenDashboard = document.querySelector("#dashboardContainer")
     hiddenDashboard.style.display = "none"
    API.getMessagesData().then(messagesCollection => renderToDom.messagesList(messagesCollection))

//place in main js
   //user requested to log out, reset DOM to registration page
   //STILL REQUIRED clear user session from browser.
const userLogOutRequest = document.querySelector(".logOutButton")
userLogOutRequest.addEventListener("click", event => { 
    hiddenDashboard.style.display = "none"
    registrationContainer.style.display = "block"

    
})
