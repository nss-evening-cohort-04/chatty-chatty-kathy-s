document.querySelector("body").addEventListener("click", function(event) {
  if (event.target.classList[0] === "delete") {
    Chatty.remove(event.target);
  }
});

document.getElementById("userInput").addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      console.log("yo this is working when you push down enter");
      Chatty.userText();
    }
});

document.getElementById("clearButton").addEventListener("click", function(){
    document.getElementById("container").innerHTML = "";
});