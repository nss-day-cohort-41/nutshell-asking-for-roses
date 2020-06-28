import API from '../data.js'
import createUserObject from './createUser.js'

const userRegistration = {
    //registered user login 
    registeredUserLogin () {
        const emailLogin = document.querySelector("#loginEmail")
        const passwordLogin = document.querySelector("#loginPassword")
        const signInButton = document.querySelector(".signInButton")
        const loginInputFields = document.getElementsByClassName("login")
        //loop through class names for inputs and not allowing sign-in button to be clicked until all fields are filled out
        for (let i = 0; i < loginInputFields.length; i++) {
            loginInputFields[i].addEventListener("input", event => {
                if (emailLogin.value.length !== 0 && passwordLogin.value.length !== 0) {
                    signInButton.disabled = false;
                }
            })
        }
        //click event on registered user login button to find matching email in user database and saving that in session storage 
        signInButton.addEventListener("click", clickEvent => {
            API.getUserLogin().then((response) => {
                response.find((userObj) => {
                    if (emailLogin.value === userObj.email) {
                        sessionStorage.setItem("registeredUser", userObj.email)
                        this.clearLoginFields();
                        console.log("stored email:" , sessionStorage.getItem("registeredUser"))
                        //***need to display main dashboard****
                    } //***still need to give alert if email or password does not match (below?)***

                
                })
                
            })
            //Need to check if user in database already?? NOT WORKING
            // API.getUserLogin().then((response) => {
            //     response.find((userObj) => {
            //         if(!userObj.email.includes(emailLogin.value)) {
            //             alert("Email entered does not match registered user")
            //         }
            //     })
            // })
            
            })


    },

    //adding click event on new registration hyperlink then displaying our hidden registration form
    clickRegistrationLink () {
        //make section class="registrationForm" initially hidden
        const hiddenRegistrationForm = document.querySelector(".registrationForm")
        hiddenRegistrationForm.style.visibility = "hidden"
        //target anchor tag
        const registrationLink = document.querySelector(".registerLink");
        //add click event listener to anchor tag and after clicked display registration form
        registrationLink.addEventListener("click", clickEvent => {
        hiddenRegistrationForm.style.visibility = "visible"
        })
    },

    //clearing login fields after attempt
    clearLoginFields() {
        document.querySelector("#loginEmail").value = ""
        document.querySelector("#loginPassword").value = ""
    },
    //clearing the password fields after failed attempt
    clearPasswordFields () {
        document.querySelector("#newPassword").value = "";
        document.querySelector("#confirmPassword").value = "";  
    },
    //clearing registration form fields
    clearRegistrationFields () {
        document.querySelector("#newEmail").value = "";
        document.querySelector("#newUserName").value = "";
        document.querySelector("#newPassword").value = "";
        document.querySelector("#confirmPassword").value = "";
    },

    //new registration form
    registrationFormValidator () {
        const emailInput = document.querySelector("#newEmail");
        const userNameInput = document.querySelector("#newUserName");
        const passwordInput = document.querySelector("#newPassword");
        const confirmPasswordInput = document.querySelector("#confirmPassword")
        const registerButton = document.querySelector(".registerButton")
        const registerInput = document.getElementsByClassName("registration")
        //looping through class names to target every input field and allowing register button to be clicked only if all fields filled out
        for (let i = 0; i < registerInput.length; i++) {
            registerInput[i].addEventListener("input", event => {
                if (emailInput.value.length !== 0 && userNameInput.value.length !== 0 && passwordInput.value.length !== 0 && confirmPasswordInput.value.length !== 0) {
                    registerButton.disabled = false;
                } else if (passwordInput.value.length === 0 && confirmPasswordInput.value.length === 0) {
                    registerButton.disabled = true;
                }
            })
        }
        //adding click event to register button
        registerButton.addEventListener("click", clickEvent => {
            //if password input does not match confirm password input alert user
            if (passwordInput.value !== confirmPasswordInput.value) {
                alert("Passwords do not match. Try again.")
                passwordInput.style.borderColor = "#E34234"
                confirmPasswordInput.style.borderColor = "#E34234"
                this.clearPasswordFields();
                registerButton.disabled = true
                //browser has built in email validator what does reg expression in html5 check for?
                //will alert user if email not valid ie no @ symbol
            } else if (emailInput.checkValidity() === false) {
                alert("Not a valid email address")
                emailInput.style.backgroundColor = "#E34234"
                document.querySelector("#newEmail").value = "";

                //if everything is correct, use created user object and POST, then store that response into session storage
            } else {
                //***need to display main dashboard****
                passwordInput.style.borderColor = ""
                confirmPasswordInput.style.borderColor = ""
               
                const userObjectGenerator = createUserObject(emailInput.value, userNameInput.value, passwordInput.value);
                API.saveUserLogin(userObjectGenerator)
                .then( () => {
                    return API.getUserLogin()
                }).then(response => {
                    response.find(userObj => {
                        if (emailInput.value === userObj.email) {
                        sessionStorage.setItem("newUser", userObj.id)
                        console.log("stored userId:", sessionStorage.getItem("newUser"))
                        
                        }
                        
                    })
                })
                this.clearRegistrationFields(); 
                registerButton.disabled = true;
                
            }

        })
        
    },   
       
}

// sessionStorage.setItem("newUser", JSON.stringify(userObj))
//                     console.log(sessionStorage.getItem("newUser"))
// // Save data to sessionStorage
// sessionStorage.setItem('key', 'value');

// // Get saved data from sessionStorage
// let data = sessionStorage.getItem('key');

// // Remove saved data from sessionStorage
// sessionStorage.removeItem('key');

// // Remove all saved data from sessionStorage
// sessionStorage.clear();

export default userRegistration