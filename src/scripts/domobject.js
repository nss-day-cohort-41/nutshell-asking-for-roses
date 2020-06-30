/* Object with methods to render each section's items to the DOM

Outline by David Larsen */ 

const domObject = {
    messageComponent(messageObject) {
        
    },
   
    taskComponent(taskObject) {
        const taskHTMLRepresentation = `
        <section class="tasksList__Item">
                    <div class="tasksList__Item__Content">
                        <input type="checkbox" id="tasksListCompletedCheckbox">
                        <p class="tasksList__Item__DueDate">${taskObject.dueDate}</p>
                        <p class="tasksList__Item__Input">${taskObject.name}e</p>
                    </div>
                        
                    <div>
                        <button type="button" class="tasksDeleteButton--${taskObject.id}">Delete Task Button</button>
                    </div>
        </section>
        `
        return taskHTMLRepresentation
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
