import API from "./data.js"
import renderToDom from "./render.js"
import createArticleObject from "./createArticle.js"

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


    
    //Articles Delete Button
    //created by Brett Stoudt
    const articlesListDeleteButton = document.querySelector(".articlesList")


    articlesListDeleteButton.addEventListener("click", (event) => {
   
      if (event.target.id.startsWith("articlesDeleteButton--")) {
        console.log("delete button clicked");
        const articleIdToDelete = event.target.id.split("--")[1];
        console.log("delete id", articleIdToDelete);
        API.deleteArticleEntry(articleIdToDelete)
        .then(API.getArticlesData)
        .then((response) => renderToDom.articlesList(response))      
      } 
      
      
    })
    const articlesListAddButton = document.querySelector("#articlesAddButton")
    const hiddenArticlesForm = document.querySelector(".newArticleContainer")
    articlesListAddButton.addEventListener("click", (event) => {
      hiddenArticlesForm.classList.toggle("hidden");
      console.log("add articles button clicked");
      })
      
    
    


    //when invoked, this function resets the article inputs by referencing the ID and reseting the value, 
    //currently used in article form popup inside the article submit Button and article cancel Button event listeners.
  const clearInputs = () => {
    document.querySelector("#newArticleTitle").value = "";
    document.querySelector("#newArticleURL").value = "";
    document.querySelector("#newArticleSynopsis").value = "";
  }
  //Event Listener for Articles Save & Cancel Button on New Article Form
  //Created by Brett Stoudt
  const NewArticleSave = document.querySelector("#submitNewArticle")
  
  NewArticleSave.addEventListener("click", (event) => {
    
    const articleURL = document.getElementById("newArticleURL").value
    const articleTitle = document.getElementById("newArticleTitle").value
    const articleSynopsis = document.getElementById("newArticleSynopsis").value
    //Article Submit Button 
    if (event.target.id = document.querySelector("#submitNewArticle")) {
      console.log("save button clicked");

      // verify all fields have something entered
      if ((articleURL === "") ||
        //console.log(articleURL)
        (articleTitle === "") ||
        //console.log(articleTitle)
        (articleSynopsis === ""))
        //console.log(articleSynopsis)
        { 
          alert ("you forgot something")
          // if all fields have something entered we create a new article entry and POST it to the database
        } 
      else {
          // variable that is equal to the response of a function invoked with paramaters that are set to the value of the html input boxes
            const articleEntrySubmit = createArticleObject(articleURL, articleTitle, articleSynopsis)
          //pass the new variable through the save "POST request"
          //.then return with a get request, which now includes the object submitted in the post request
          //.then take that response, clear the input fields, 
          //....and return the render object using the showJournalEntries method that is invoked with the getJournalEntries Response
          API.newArticlesEntry(articleEntrySubmit).then(() => {
            return API.getArticlesData()
          })
          .then((allArticleObjectsFromAPI) => {
            clearInputs()
            return renderToDom.articlesList(allArticleObjectsFromAPI)
          })   
        } 
    } 
    // //Cancel and Close Article Submit Popup instead of saving it
    // if (event.target.id = document.querySelector(".articlesCancelButton")) {
    //   //clearinputs()
    //   //step out of popup.. "display: none?" ...classList hidden?
    // }
  
  })

}

export default loadDashboard