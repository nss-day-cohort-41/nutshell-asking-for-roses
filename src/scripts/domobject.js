/* Object with methods to render each section's items to the DOM

Outline by David Larsen */ 

const domObject = {
    messageComponent(messageObject) {
        
    },
    
    taskComponent(taskObject) {
        const taskHTMLRepresentation = `
        <p class ="tasksList__Items__Input">${taskObject.name}</p>
        <p class="tasksList__Item__DueDate">${taskObject.dueDate}</p>
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
