/* Create a new event object from user input
 to be saved to the database
 Module by Tasha Lane
 */

const createEventsObject = (event) => {
  return {
    userId: parseInt(sessionStorage.getItem("currentUser")),
    name: name,
    location: location,
    eventDate: eventDate,
    
  };
};

export default createEventsObject;


