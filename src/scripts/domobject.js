/* Object with methods to render each section's items to the DOM

Outline by David Larsen */ 

const domObject = {
    messageComponent(messageObject) { //????
        `<div>@${user.username} : ${messageObject.message}</div>`
        
    },
    
    taskComponent(taskObject) {
        `<div>Task: ${taskObject.task}</div>
        <div>Complete by: ${taskObject.dueDate}</div>
        `

    },

    eventComponent(eventObject) {
        `<div>${eventObject.name}</div>
        <div>${eventObject.date}</div>
        <div>${evenObject.location}</div>`

    },

    articleComponent(articleObject) {
        `<div>${articleObject}</div>
        <div></div>`

    },

    friendComponent(friendObject) {

    }
}

export default domObject
const parkPreviewHTMLRep = `
             
            <div class="Preview__Displayed">${parkPreviewObject.name}</div>
        
    `
    return parkPreviewHTMLRep