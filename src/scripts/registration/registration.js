import API from '../data.js'
import createUserObject from './createUser.js'

const userRegistration = {
    //registered user login 
    registeredUserLogin() {

        const emailLogin = document.querySelector("#loginEmail")
        const passwordLogin = document.querySelector("#loginPassword")
        const signInButton = document.querySelector(".signInButton")
        const loginInputFields = document.getElementsByClassName("login")
        //
        const registrationContainer= document.querySelector("#registrationContainer")
        const hiddenDashboard = document.querySelector("#dashboardContainer")
        hiddenDashboard.style.display = "none"
        //loop through class names for inputs and not allowing sign-in button to be clicked until all fields are filled out
        for (let i = 0; i < loginInputFields.length; i++) {
            loginInputFields[i].addEventListener("input", event => {
                if (emailLogin.value.length !== 0 && passwordLogin.value.length !== 0) {
                    signInButton.disabled = false;
                } else if (emailLogin.value.length === 0 || passwordLogin.value.length === 0) {
                    signInButton.disabled = true;
                }
            })
        }
        //click event on registered user login button 
        signInButton.addEventListener("click", clickEvent => {
            //GET user database info, perform userObj.find() to find match for user email input 
            let findPassword;
            API.getUserLogin()
                .then(userObj => {
                    findPassword = userObj.find(user => {
                        return passwordLogin.value === user.password
                    })
                })
            //GET user database info, perform userObj.find() to match password input
            API.getUserLogin()
                .then(userObj => {
                    const findEmail = userObj.find(user => {
                        return emailLogin.value === user.email
                    })
                    //if mail and password both match, session storage enabled and should show main dashboard
                    if (findEmail && findPassword) {
                        sessionStorage.setItem("currentUser", findEmail.id)
                        this.clearLoginFields();
                        emailLogin.style.borderColor = ""
                        passwordLogin.style.borderColor = ""
                        console.log("stored user:", sessionStorage.getItem("currentUser"))
                        //***need to display main dashboard****
                        registrationContainer.style.display = "none"
                        hiddenDashboard.style.display = "block"
                        //if email not found, alert user
                    } else if (!findEmail) {
                        alert("Your email address does not match existing user");
                        emailLogin.style.borderColor = "#E34234";
                        this.clearLoginFields();
                        signInButton.disabled = true;
                    }
                    //else if password not found, alert user
                    else if (!findPassword) {
                        alert("Incorrect password");
                        passwordLogin.style.borderColor = "#E34234";
                        this.clearLoginFields();
                        signInButton.disabled = true;
                    }

             })
        })

    },

    clickRegistrationLink() {
        //make section class="registrationForm" initially hidden
        const hiddenRegistrationForm = document.querySelector(".registrationForm")
        hiddenRegistrationForm.style.visibility = "hidden";
        //target anchor tag
        const registrationLink = document.querySelector(".registerLink");
        //add click event listener to anchor tag and after clicked display registration form
        registrationLink.addEventListener("click", clickEvent => {
            hiddenRegistrationForm.style.visibility = "visible";
        })
    },

    //clearing login fields after attempt
    clearLoginFields() {
        document.querySelector("#loginEmail").value = ""
        document.querySelector("#loginPassword").value = ""
    },
    //clearing the password fields after failed attempt
    clearPasswordFields() {
        document.querySelector("#newPassword").value = "";
        document.querySelector("#confirmPassword").value = "";
    },
    //clearing registration form fields
    clearRegistrationFields() {
        document.querySelector("#newEmail").value = "";
        document.querySelector("#newUserName").value = "";
        document.querySelector("#newPassword").value = "";
        document.querySelector("#confirmPassword").value = "";
    },

    /* START OF NEW REGISTRATION FORM CODE */

    //new registration form
    registrationFormValidator() {
        const emailInput = document.querySelector("#newEmail");
        const userNameInput = document.querySelector("#newUserName");
        const passwordInput = document.querySelector("#newPassword");
        const confirmPasswordInput = document.querySelector("#confirmPassword")
        const registerButton = document.querySelector(".registerButton")
        const registerInput = document.getElementsByClassName("registration")
        //
        const registrationContainer= document.querySelector("#registrationContainer")
        const hiddenDashboard = document.querySelector("#dashboardContainer")
        hiddenDashboard.style.display = "none"
        //looping through class names to target every input field and allowing register button to be clicked only if all fields filled out
        for (let i = 0; i < registerInput.length; i++) {
            registerInput[i].addEventListener("input", event => {
                if (emailInput.value.length !== 0 && userNameInput.value.length !== 0 && passwordInput.value.length !== 0 && confirmPasswordInput.value.length !== 0) {
                    registerButton.disabled = false;
                    //else if user erases input from one field, it will disable button again until all fields have a value 
                } else if (passwordInput.value.length === 0 || confirmPasswordInput.value.length === 0 || emailInput.value.length === 0 || userNameInput.value.length === 0) {
                    registerButton.disabled = true;
                }
            })
        }
        //adding click event to register button
        registerButton.addEventListener("click", clickEvent => {
            let findRegisteredEmail;
        
            //if password input does not match confirm password input alert user
            if (passwordInput.value !== confirmPasswordInput.value) {
                alert("Passwords do not match. Try again.")
                passwordInput.style.borderColor = "#E34234"
                confirmPasswordInput.style.borderColor = "#E34234"
                this.clearPasswordFields();
                registerButton.disabled = true
                //checking to see if email has already been registered in database
            }
            API.getUserLogin()
                .then(userObj => {
                    findRegisteredEmail = userObj.find(user => {
                        return emailInput.value === user.email
                    })

                    if (findRegisteredEmail) {
                        alert("Email already exists")
                        emailInput.style.borderColor = "#E34234";
                        this.clearRegistrationFields();
                        registerButton.disabled = true;
                    }

                    //checking validity of email
                    else if (emailInput.checkValidity() === false) {
                        alert("Not a valid email address")
                        emailInput.style.borderColor= "#E34234"
                        document.querySelector("#newEmail").value = "";
                    //if everything is filled out correctly... display main page
                    } else {
                        //***need to display main dashboard**** (may not need the border color change)
                        passwordInput.style.borderColor = ""
                        confirmPasswordInput.style.borderColor = ""
                        //if everything is correct, use created user object and POST, then store that response into session storage
                        const userObjectGenerator = createUserObject(emailInput.value, userNameInput.value, passwordInput.value);
                        API.saveUserLogin(userObjectGenerator)
                            .then(() => API.getUserLogin()
                            ).then(userObj => {
                                const findNewEmail = userObj.find(user => {
                                    return emailInput.value === user.email
                                })
                                sessionStorage.setItem("currentUser", findNewEmail.id)
                                console.log("stored userId:", sessionStorage.getItem("currentUser"))
                                this.clearRegistrationFields();
                                registerButton.disabled = true;
                                registrationContainer.style.display = "none"
                                hiddenDashboard.style.display = "block"
                            })
                    }
                })
        })

    }

}


export default userRegistration

// const registrationContainer= document.querySelector("#registrationContainer")
// const hiddenDashboard = document.querySelector("#dashboardContainer")
//    hiddenDashboard.style.display = "none"
   
//    // place in registation click events final else statement
//    //registration completed and reseting DOM to display dashboard
//    //STILL REQUIRED populate dashboard list elements with user data.
// const userLoginSuccessful = document.querySelector(".registerButton")
// userLoginSuccessful.addEventListener("click", event => { 
//     registrationContainer.style.display = "none"
//     hiddenDashboard.style.display = "block"

  
// })