import API from './data.js'
import userRegistration from './registration/registration.js'
import renderToDom from "./render.js"

userRegistration.clickRegistrationLink();
userRegistration.registrationFormValidator();
userRegistration.registeredUserLogin();


renderToDom.messagesList()
renderToDom.tasksList()
renderToDom.eventsList()
