/* Create a new message object from user input
 to be saved to the database
 Module by David Larsen
 */

 const createMessageObject = (message, timestamp) => {
     if (timestamp === "") {
         timestamp = Date.now()
     }
     return {
        "userId": parseInt(sessionStorage.getItem("currentUser")),
        "message": message,
        "timestamp": timestamp
     }
 }

 export default createMessageObject