var Chatty = (function(addMessage) {

  var messagesArray = [];
  var container = document.getElementById("container");
  var messageDiv;

  addMessage.getMessages = function(data) {
    for (var i = 0; i < 5; i++) {
      messagesArray.push(data.messages_list[i].message);
    }
    console.log(messagesArray);
    addMessage.displayMessages();
  },
  addMessage.displayMessages = function() {
    for (var i = 0; i < messagesArray.length; i++) {
      messageDiv = "<div>" + messagesArray[i] + "<button class='delete'>Delete</button>" + "</div>";
      container.innerHTML += messageDiv;
    }
  },
  addMessage.userText = function() {
    var userMessage = document.getElementById("userInput").value;
    messagesArray.push(userMessage);
    addMessage.dispalyUserMessage();
  },
  addMessage.dispalyUserMessage = function(){
    messageDiv = "<div>" + messagesArray[messagesArray.length-1] +  "<button class='delete'>Delete</button>" + "</div>";
    container.innerHTML += messageDiv;
  }


  return addMessage;
})(Chatty || {});