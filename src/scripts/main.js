const x = document.querySelector(".logOutButton")
x.addEventListener("click", event => { 
   // addAll= window.location.assign (".tasksList")
   loadAll= document.querySelector("#container2")
   const hiddenRegistrationForm = document.querySelector(".registrationForm")
   hiddenRegistrationForm.style.visibility = "hidden"
    clearAll= document.querySelector("#container").innerHTML = ""
    clearAll= document.querySelector("#container").innerHTML = loadAll.innerHTML
})