
const container2= document.querySelector(".container2")
const hiddenDashboard = document.querySelector(".container")
   hiddenDashboard.style.display = "none"
  //let loadAll= document.getElementById(".container")
   
const userLoginSuccessful = document.querySelector(".login")
userLoginSuccessful.addEventListener("click", event => { 
   // addAll= window.location.assign (".tasksList")

   container2.style.display = "none"
    //clearAll= document.querySelector(".container").innerHTML = loadAll.innerHTML
    hiddenDashboard.style.display = "block"

    //add click event listener to anchor tag and after clicked display registration form
    // registrationLink.addEventListener("click", clickEvent => {
    
})

   
const userLogOutRequest = document.querySelector(".logOutButton")
userLogOutRequest.addEventListener("click", event => { 
    hiddenDashboard.style.display = "none"
    container2.style.display = "block"

    
})