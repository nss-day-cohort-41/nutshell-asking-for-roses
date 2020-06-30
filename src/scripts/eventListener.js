//Tasha Lane created functions for edit and delete

import API from "../data.js";

//This starts actual code for editing resources
editArticlesList: () => {
  articlesList.addEventListener("click", (event) => {
    if (event.target.id.startsWith("editArticles--")) {
      console.log("edit button clicked");
      const articleIdToEdit = event.target.id.split("--")[1];
      console.log("edit id", articleIdToEdit);
      API.updateForm(articleIdToEdit);
    }
  });
};
editEventsList: () => {
  eventsList.addEventListener("click", (event) => {
    if (event.target.id.startsWith("editEvents--")) {
      console.log("edit button clicked");
      const eventsIdToEdit = event.target.id.split("--")[1];
      console.log("edit id", eventsIdToEdit);
      API.updateForm(eventsIdToEdit);
    }
  });
};
editTasksList: () => {
  tasksList.addEventListener("click", (event) => {
    if (event.target.id.startsWith("editTasks--")) {
      console.log("edit button clicked");
      const tasksIdToEdit = event.target.id.split("--")[1];
      console.log("edit id", tasksIdToEdit);
      API.updateForm(tasksIdToEdit);
    }
  });
};
editFriendsList: () => {
  friendsList.addEventListener("click", (event) => {
    if (event.target.id.startsWith("editFriends--")) {
      console.log("edit button clicked");
      const friendsIdToEdit = event.target.id.split("--")[1];
      console.log("edit id", friendsIdToEdit);
      API.updateForm(friendsIdToEdit);
    }
  });
};
editMessagesList: () => {
  messagesList.addEventListener("click", (event) => {
    if (event.target.id.startsWith("editMessages--")) {
      console.log("edit button clicked");
      const messagesIdToEdit = event.target.id.split("--")[1];
      console.log("edit id", messagesIdToEdit);
      API.updateForm(messagesIdToEdit);
    }
  });
};

///Delete Button for each of the resources

deleteArticlesList: () => {
  articlesList.addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteArticle--")) {
      articleToDelete = event.target.id.split("--")[1];
      console.log("article to delete", articleToDelete);
      API.deleteArticle(articleToDelete)
        .then(api.rosesData)
        .then(allArticles.articleToDom);
    }
  });
};

deleteEventsList: () => {
  eventsList.addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteArticle--")) {
      eventsToDelete = event.target.id.split("--")[1];
      console.log("article to delete", eventsToDelete);
      API.deleteEventsList(eventsToDelete)
        .then(api.rosesData)
        .then(allEvents.eventsToDom);
    }
  });
};

deleteTasksList: () => {
  tasksList.addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteTasks--")) {
      tasksToDelete = event.target.id.split("--")[1];
      console.log("task to delete", tasksToDelete);
      API.deleteTasksList(tasksToDelete)
        .then(api.rosesData)
        .then(allTasks.tasksToDom);
    }
  });
};
deleteFriendsList: () => {
  friendsList.addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteFriends--")) {
      friendsToDelete = event.target.id.split("--")[1];
      console.log("friend to delete", friendsToDelete);
      API.deleteFriendsList(friendsToDelete)
        .then(api.rosesData)
        .then(allFriends.friendsToDom);
    }
  });
};

deleteMessagesList: () => {
  messagesList.addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteMessages--")) {
      messagesToDelete = event.target.id.split("--")[1];
      console.log("friend to delete", messagesToDelete);
      API.deleteMessagesList(messagesToDelete)
        .then(api.rosesData)
        .then(allMessages.messagesToDom);
    }
  });
};
