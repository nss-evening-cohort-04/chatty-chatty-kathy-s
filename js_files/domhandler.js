document.querySelector("body").addEventListener("click", function(event) {
  if (event.target.classList[0] === "delete") {
    Chatty.remove(event.target);
  }
});