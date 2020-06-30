/* Object with methods to render each section's items to the DOM

Outline by David Larsen */ 

const domObject = {
    messageComponent(messageObject) { //???? would we have to pass in userobject?
        // `<div>@${userObject.username} : ${messageObject.message}</div>`
        
    },
    
    taskComponent(taskObject) {
        `<div>Task: ${taskObject.name}</div>
        <div>Complete by: ${taskObject.dueDate}</div>
        `

    },

    eventComponent(eventObject) {
        `<div>${eventObject.name}</div>
        <div>${eventObject.date}</div>
        <div>${eventObject.location}</div>`

    },

    articleComponent(articleObject) { //would we have to pass in userobject?
    // ------
        `<div>${articleObject.date}</div>
        ${articleObject.name}
        ${articleObject.synopsis}
        ${articleObject.url}
        `
        

    },

    friendComponent(friendObject) {

    }
}

export default domObject
