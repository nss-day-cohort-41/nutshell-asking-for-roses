import API from './data.js'
import userRegistration from './registration/registration.js'
userRegistration.clickRegistrationLink();
userRegistration.registrationFormValidator();
userRegistration.registeredUserLogin();
import renderToDom from "./render.js"

renderToDom.messagesList()
