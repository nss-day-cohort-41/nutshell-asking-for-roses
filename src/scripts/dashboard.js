import API from "./data.js"
import renderToDom from "./render.js"
import taskFunctions from '../scripts/tasks/taskButtons.js';
import tasksButtonFunctionality from "./tasks/taskButtonEvents.js";
import createArticleObject from "./createArticle.js"
import createMessageObject from "./createMessage.js"

/* File created/refactored by David Larsen
    Original "load dashboard" code by Brett Stoudt
*/

// Hide the login page, show the dashboard
const loadDashboard = () => {
    const registrationContainer = document.querySelector("#registrationContainer")
    const hiddenDashboard = document.querySelector("#dashboardContainer")
    registrationContainer.classList.toggle("hidden")
    hiddenDashboard.classList.toggle("hidden")
    
    // Queue current user ID
    const currentUserID = parseInt(sessionStorage.getItem("currentUser"))
    // Load individual data components
    API.getFriendsData(currentUserID)
    .then((friendsList) => renderToDom.friendsList(friendsList))
    .then(() => {
        document.querySelector(".friendsList").addEventListener("click", event => {
            if (event.target.id.startsWith("deleteFriend--")) {
                const friendIdToDelete = event.target.id.split("--")[1]
                API.deleteFriendEntry(friendIdToDelete)
                    .then(() => API.getFriendsData(currentUserID)
                    .then(friendsList => renderToDom.friendsList(friendsList)
                    )
                )
            }
        })
    })

    API.getMessagesData().then(messagesCollection => renderToDom.messagesList(messagesCollection))
    .then(() => {
        // Save new message

        document.querySelector(".messagesSubmitButton").addEventListener("click", event => {
            let messageField = document.getElementById("messagesUserInput")
            let messageId = document.getElementById("messageId")
            const messageToSave = createMessageObject(messageField.value)

            // Check if message is new or edited
            if (messageId.value === "") {

                API.newMessagesEntry(messageToSave)
                    .then(() => API.getMessagesData()
                        .then(messagesCollection => {
                            // Clear the message blank and refresh messages list
                            messageField.value = ""
                            renderToDom.messagesList(messagesCollection)
                        }))

            } else {
                // Edited entry
                API.editMessage(messageToSave, messageId.value)
                    .then(() => API.getMessagesData()
                        .then(messagesCollection => {
                            // Clear the message blank and refresh messages list
                            messageField.value = ""
                            messageId.value = ""
                            renderToDom.messagesList(messagesCollection)
                        })
                    )
            }

        })

        // Edit existing message
        document.querySelector(".messagesList").addEventListener("click", event => {
            if (event.target.id.startsWith("editMessage--")) {
                const entryIdToEdit = event.target.id.split("--")[1]
                fetch(`http://localhost:8088/messages/${entryIdToEdit}`)
                    .then(response => response.json())
                    .then(entry => {
                        document.getElementById("messagesUserInput").value = entry.message
                        document.getElementById("messageId").value = entry.id
                    })
            }
        })
    })

    API.getTasksData().then((array) => {
      renderToDom.tasksList(array)})
      .then(() => {
          tasksButtonFunctionality()
          taskFunctions.taskEvents()
          taskFunctions.editTask()
      })
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
    //Article Add Button to load user input form
    //Created by Brett Stoudt
    const articlesListAddButton = document.querySelector("#articlesAddButton")
    const hiddenArticlesForm = document.querySelector(".newArticleContainer")
    articlesListAddButton.addEventListener("click", (event) => {
      hiddenArticlesForm.classList.toggle("hidden");
      hiddenArticlesForm.classList.add('is-open')
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
    //Article Form Submit Button 
    //Created by Brett Stoudt
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
          //....and return the render object 
          API.newArticlesEntry(articleEntrySubmit).then(() => {
            return API.getArticlesData()
          })
          .then((allArticleObjectsFromAPI) => {
            clearInputs()
            hiddenArticlesForm.classList.toggle("hidden");
            hiddenArticlesForm.classList.remove('is-open');
            return renderToDom.articlesList(allArticleObjectsFromAPI)
          })   
          
        }
       
    } 
  
  })  
  //Article Form Cancel Button
  const cancelNewArticle = document.querySelector("#cancelNewArticle")
  cancelNewArticle.addEventListener("click", clickEvent => {
    const hiddenArticlesForm = document.querySelector(".newArticleContainer")
    hiddenArticlesForm.classList.toggle("hidden");
    hiddenArticlesForm.classList.remove('is-open');
    })
  
  
}

export default loadDashboard