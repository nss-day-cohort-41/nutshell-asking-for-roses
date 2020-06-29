import domObject from "./domobject.js"

/* Object which renders data to each section of the Dashboard

Object outline by David Larsen */

const renderToDom = {

    messagesList() {
        // **TEST DATA - delete later
        const messageArray = [{
            name: "test1",
            date: "2020-06-05"
        }, {
            name: "test2",
            date: "2020-05-04"
        }, {
            name: "test3",
            date: "2020-06-21"
        }]
        // **

        messageArray.sort((message1, message2) => new Date(message2.date) - new Date(message1.date))
        console.log(messageArray)
        messageArray.forEach(message => {
            const messageHTML = domObject.messageComponent(message)
            document.querySelector(".messagesList").innerHTML += messageHTML
        })
    },

    tasksList(tasksArray) {

    },

    eventsList(eventsArray) {

    },

    articlesList(articlesArray) {

    },

    friendsList(friendsArray) {

    }
}
export default renderToDom