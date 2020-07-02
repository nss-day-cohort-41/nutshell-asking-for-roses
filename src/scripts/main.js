import userRegistration from './registration/registration.js'
import loadDashboard from './dashboard.js';


const registrationContainer = document.querySelector("#registrationContainer")
const hiddenDashboard = document.querySelector("#dashboardContainer")

if (sessionStorage.getItem("currentUser")) {
    loadDashboard()
   
}

 //invoke all user registration functionality
userRegistration.clickRegistrationLink();
userRegistration.registrationFormValidator();
userRegistration.registeredUserLogin();

// Logout button
const userLogOutRequest = document.querySelector(".logOutButton")
userLogOutRequest.addEventListener("click", event => {
    registrationContainer.classList.toggle("hidden")
    hiddenDashboard.classList.toggle("hidden")
    sessionStorage.clear()
})

