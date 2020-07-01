import API from "./data.js"
import renderToDom from "./render.js"

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

    //Articles Delete Button Click Event Listener
    const articlesList = document.querySelector(".articlesList")
        articlesList.addEventListener("click", (event) => {
          if (event.target.id.startsWith("articlesDeleteButton--")) {
            console.log("delete button clicked");
            const articleIdToDelete = event.target.id.split("--")[1];
            console.log("delete id", articleIdToDelete);
            API.deleteArticleEntry(articleIdToDelete);
          }

        });
           //Articles Add Button Click Event Listener
    const articlesList = document.querySelector(".articlesList")
    articlesList.addEventListener("click", (event) => {
      if (event.target.id.startsWith("articlesDeleteButton--")) {
        console.log("delete button clicked");
        const articleIdToDelete = event.target.id.split("--")[1];
        console.log("delete id", articleIdToDelete);
        API.deleteArticleEntry(articleIdToDelete);
      }
    });
}

export default loadDashboard