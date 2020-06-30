/* Object with methods to render each section's items to the DOM

Outline by David Larsen */ 

const domObject = {
    messageComponent(messageObject) {
        
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
                    <button type="button" class="articlesDeleteButton--${articleObject.id}">Delete Article Button</button>
                </div>    
            </section>
        `
        return articleElement
    },

    friendComponent(friendObject) {

    }
}

export default domObject
