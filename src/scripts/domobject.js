/* Object with methods to render each section's items to the DOM

Main object by David Larsen */ 

const domObject = {
    // Message Component by David Larsen
    messageComponent(messageObject) {
        let editButtonHTML = ""
        
        // Apply edit button HTML only to the current user's messages
        if (messageObject.userId === parseInt(sessionStorage.getItem("currentUser"))) {
            editButtonHTML = `<button type="button" id="editMessage--${messageObject.id}" class="dashboardButton">Edit</button>`
        } 
        
        // HTML to be rendered to the DOM
        return `<section class=messageList__item">
        <span class="List__Item__Input">
        <p><strong><a class ="messagesList__Item__User" href="#friendsRequestAlert">${messageObject.user.username}</a></strong>--${messageObject.message}</p>
        </span>
        <span class="messageButton">
        ${editButtonHTML}
        </span>
        </section>`
    },
    
    taskComponent(taskObject) {

    },

    eventComponent(eventObject) {

    },

    articleComponent(articleObject) {
        // let notCurrentUser = ""

        // if (articleObject.userId != parseInt(sessionStorage.getItem("currentUser"))) {
        //     notCurrentUser = 
        // } 
        const articleElement =
        `
            <section class="articlesList__Item">
                <div class="articlesList__Item__Content">
                    <p><strong>News Title:</strong>  ${articleObject.title}</p>
                    <p><strong>Synopsis:</strong>  ${articleObject.synopsis}</p>
                    <a><strong>Link:</strong>  </a><a href="http://${articleObject.url}" target="_blank">Full Story!</a>
                </div>
                <div>
                    <button type="button" id="articlesDeleteButton--${articleObject.id}">Delete Article Button</button>
                </div>    
            </section>
        `
        return articleElement

        
    },

    friendComponent(friendObject) {

    }
}

export default domObject
