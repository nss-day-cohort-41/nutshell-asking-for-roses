const container2= document.querySelector(".container2")
const hiddenDashboard = document.querySelector(".container")
   hiddenDashboard.style.display = "none"
  //let loadAll= document.getElementById(".container")
   
const x = document.querySelector(".login")
x.addEventListener("click", event => { 
   // addAll= window.location.assign (".tasksList")

   container2.style.display = "none"
    //clearAll= document.querySelector(".container").innerHTML = loadAll.innerHTML
    hiddenDashboard.style.display = "block"

    //add click event listener to anchor tag and after clicked display registration form
    // registrationLink.addEventListener("click", clickEvent => {
    
})

   
const y = document.querySelector(".logOutButton")
y.addEventListener("click", event => { 
    hiddenDashboard.style.display = "none"
    container2.style.display = "block"

    
})