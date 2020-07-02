import API from "./data.js"
import renderToDom from "./render.js"
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

    renderToDom.tasksList()
    renderToDom.eventsList()
    renderToDom.articlesList()

}

export default loadDashboard