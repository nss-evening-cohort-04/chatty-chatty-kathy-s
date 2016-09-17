var Chatty = (function() {

  return {
    parseJSON: function(callback, callback2) {
      var request = new XMLHttpRequest();
      request.addEventListener("load", function() {
        var data = JSON.parse(this.responseText);
        Chatty.getMessages(data);
      })
      request.open("GET","messages.json");
      request.send();
    },
    addEvents: function() {
      document.querySelector("body").addEventListener("click", function(event) {
      if (event.target.classList[0] === "delete") {
        Chatty.remove(event.target);
      }
    });

      document.getElementById("userInput").addEventListener("keydown", function(event) {
          if (event.keyCode == 13) {
            Chatty.getUserInput(event);
          }
      });

      document.getElementById("clearButton").addEventListener("click", function(){
          document.getElementById("container").innerHTML = "";
          document.getElementById("clearButton").disabled = true;
      });

      document.getElementById("large").addEventListener("change", function(){
          if (document.getElementById("large").checked === true) {
              document.getElementById("container").classList.add("largeText");
          } else if (document.getElementById("large").checked === false) {
                document.getElementById("container").classList.remove("largeText");
          }
      });

      document.getElementById("dark").addEventListener("change", function(){
          if (document.getElementById("dark").checked === true) {
              document.querySelector("body").classList.add("darkTheme");
          } else if (document.getElementById("dark").checked === false) {
                document.querySelector("body").classList.remove("darkTheme");
          }
      });
    }
  }
})();