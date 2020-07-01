import API from "./data.js"
import renderToDom from "./render.js"
import articlesListeners from "./articles.js"

/* File created/refactored by David Larsen
    Original "load dashboard" code by Brett Stoudt
*/

// Hide the login page, show the dashboard
const loadDashboard = () => {
    const registrationContainer = document.querySelector("#registrationContainer")
    const hiddenDashboard = document.querySelector("#dashboardContainer")
    registrationContainer.classList.toggle("hidden")
    hiddenDashboard.classList.toggle("hidden")
    
    // Load individual data components
    API.getMessagesData().then(messagesCollection => renderToDom.messagesList(messagesCollection))
    renderToDom.tasksList()
    renderToDom.eventsList()
    API.getArticlesData().then(articlesCollection => renderToDom.articlesList(articlesCollection))

    articlesListeners.articlesList()
}

export default loadDashboard