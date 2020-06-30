/* Object with methods to render each section's items to the DOM

Outline by David Larsen */ 

const domObject = {
    // Message Component by David Larsen
    messageComponent(messageObject) {
        const editButtonHTML = ""
        
        if (messageObject.userId === sessionStorage.getItem("currentUser")) {
            editButtonHTML = `<button type="button" id="editMessage--${messageObject.id} class="dashboardButton">Edit</button>`
        } 
        
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
        const articleElement =
        `
            <section class="articlesList__Item">
                <div class="articlesList__Item__Content">
                    <p>News Title: ${articleObject.title}</p>
                    <p>Synopsis: ${articleObject.synopsis}</p>
                    <a href="${articleObject.url}">Full Story</a>
                    <p>Submitted: on:${articleObject.dateOfNews} </p>
                </div>
                <div>
                    <button type="button" class="articlesDeleteButton">Delete Article Button</button>
                </div>    
            </section>
        `
        return articleElement
    },

    friendComponent(friendObject) {

    }
}

export default domObject
