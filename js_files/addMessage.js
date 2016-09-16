var Chatty = (function(Chatty) {

  var messagesArray = [];
  var container = document.getElementById("container");
  var messageDiv;

  Chatty.getMessages = function(data) {
    for (var i = 0; i < 5; i++) {
      messagesArray.push(data.messages_list[i]);
    }
    Chatty.displayMessages();
  },
  Chatty.displayMessages = function() {
    for (var i = 0; i < messagesArray.length; i++) {
      messageDiv = "<div>" +
                     "<button class='delete'>Delete</button>" +
                      messagesArray[i].message +
                     "<span class='date'>" + new Date() + "</span>" +
                   "</div>";
      container.innerHTML += messageDiv;
      }
    Chatty.addEvents();
  },
  Chatty.getUserInput = function(event) {
    event.preventDefault();
    document.getElementById("clearButton").disabled = false;
    var assignedID = Math.floor(Math.random() * 1000) + 1;
    var userMessage = document.getElementById("userInput").value;
    document.getElementById("userInput").value = "";
    Chatty.setUserMessage(assignedID,userMessage);
  },
  Chatty.setUserMessage = function(assignedID,userMessage) {
    var messageObject = {
      "id": assignedID,
      "message": userMessage
    }
    messagesArray.push(messageObject);
    Chatty.displayUserMessage();
  },
  Chatty.displayUserMessage = function(){
    messageDiv = "<div><button class='delete'>Delete</button>" +
                    messagesArray[messagesArray.length-1].message +
                    "<span class='date'>" + new Date() + "</span>" +
                 "</div>";
    container.innerHTML += messageDiv;
  },
  Chatty.getMessagesArray = function() {
    return messagesArray;
  }


  return Chatty;
})(Chatty || {});