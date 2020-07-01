// created by Brett Stout
//Module creates single news article objects from user input in new article form 
//and saves to database.

const createArticleObject = (url, title, synopsis) => {
    return {
       "userId": parseInt(sessionStorage.getItem("currentUser")),
       "url": url,
       "title": title,
       "synopsis": synopsis,
       "timestamp": Date.now()
    }
}

export default createArticleObject