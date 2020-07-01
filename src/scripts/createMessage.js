/* Create a new message object from user input
 to be saved to the database
 Module by David Larsen
 */

 const createMessageObject = (message) => {
     return {
        "userId": parseInt(sessionStorage.getItem("currentUser")),
        "message": message,
        "timestamp": Date.now()
     }
 }

 export default createMessageObject