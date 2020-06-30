/* Object with methods to render each section's items to the DOM

Outline by David Larsen */ 

const domObject = {
    // Message Component by David Larsen
    messageComponent(messageObject) {
        let editButtonHTML = ""
        
        // Apply edit button HTML only to the current user's messages
        if (messageObject.userId === parseInt(sessionStorage.getItem("currentUser"))) {
            editButtonHTML = `<button type="button" id="editMessage--${messageObject.id} class="dashboardButton">Edit</button>`
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
        const eventElement = `
            <section class="eventsList__Item">
                <div class="eventsList__Item__Content">
                    <p>Events Name: ${eventObject.name}</p>
                    <p>Location: ${eventObject.location}</p>
                    <p>Date: on:${eventObject.eventDate} </p>
                </div>
                <div>
                <button type="button" id="eventsDeleteButton--${eventObject.id}">Delete Event Button</button>
                    
                </div>    
            </section>
        `;
        return eventElement;
        
        
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
