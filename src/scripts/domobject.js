/* Object with methods to render each section's items to the DOM

Outline by David Larsen */ 

const domObject = {
    messageComponent(messageObject) {
        return `<section class=messageList__item">
        <span class="List__Item__Input">
        <p><strong>${messageObject.userID.name}</strong> -- ${messageObject.message}
        `
    },
    
    taskComponent(taskObject) {

    },

    eventComponent(eventObject) {

    },

    articleComponent(articleObject) {

    },

    friendComponent(friendObject) {

    }
}

export default domObject
