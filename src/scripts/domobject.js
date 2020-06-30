/* Object with methods to render each section's items to the DOM

Outline by David Larsen */ 

const domObject = {
    messageComponent(messageObject) {
        
    },
    
    taskComponent(taskObject) {
        const taskHTMLRepresentation = `
        <div>Task: ${taskObject.name}</div>
        <div>Complete by: ${taskObject.dueDate}</div>
        `
        return taskHTMLRepresentation
    },

    eventComponent(eventObject) {
        

    },

    articleComponent(articleObject) { 

        

    },

    friendComponent(friendObject) {

    }
}

export default domObject
