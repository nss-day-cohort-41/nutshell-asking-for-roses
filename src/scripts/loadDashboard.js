
const container2= document.querySelector("#registrationContainer")
const hiddenDashboard = document.querySelector("#dashboardContainer")
   hiddenDashboard.style.display = "none"
   
   // place in registation click events final else statement
   //registration completed and reseting DOM to display dashboard
   //STILL REQUIRED populate dashboard list elements with user data.
const userLoginSuccessful = document.querySelector(".login")
userLoginSuccessful.addEventListener("click", event => { 
   container2.style.display = "none"
    hiddenDashboard.style.display = "block"

  
})
   //place in main js ?
   //user requested to log out, reset DOM to registration page
   //STILL REQUIRED clear user session
const userLogOutRequest = document.querySelector(".logOutButton")
userLogOutRequest.addEventListener("click", event => { 
    hiddenDashboard.style.display = "none"
    container2.style.display = "block"

    
})