//Articles List Delete & Save Event Listeners
export default {
    articlesListeners() { 
 
 //Articles Delete Button Click Event Listener
    articlesList = document.querySelector(".articlesList")

 articlesList.addEventListener("click", (event) => {

   if (event.target.id.startsWith("articlesDeleteButton--")) {
     console.log("delete button clicked");
     const articleIdToDelete = event.target.id.split("--")[1];
     console.log("delete id", articleIdToDelete);
     API.deleteArticleEntry(articleIdToDelete);
   }

 });
}
}
