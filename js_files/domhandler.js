document.querySelector("body").addEventListener("click", function(event) {
  console.log(event.target.classList[0]);

  // Handle the click event on any li
  if (event.target.classList[0] === "delete") {
    console.log("You clicked on a delete button");
    Chatty.remove(event.target);
  }

  // // Handle the click event on any DOM element with a certain class
  // if (event.target.className === "article-section") {
  //   console.log("You clicked on an `article-section` element");
  // }

  // // Inspect the `id` property of the event target
  // if (event.target.id === "page-title") {
  //   console.log("You clicked on the page-title element");
  // }
});