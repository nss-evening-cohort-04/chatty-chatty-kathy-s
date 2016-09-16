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
      messageDiv = "<div>" +
                     "<button class='delete'>Delete</button>" +
                      messagesArray[i] +
                     "<span class='date'>" + new Date() + "</span>" +
                   "</div>";
      container.innerHTML += messageDiv;
    }
  },
  addMessage.userText = function() {
    var userMessage = document.getElementById("userInput").value;
    messagesArray.push(userMessage);
    addMessage.displayUserMessage();
  },
  addMessage.displayUserMessage = function(){
    messageDiv = "<div><button class='delete'>Delete</button>" +
                    messagesArray[messagesArray.length-1] +
                    "<span class='date'>" + new Date() + "</span>" +
                 "</div>";
    container.innerHTML += messageDiv;
  }


  return addMessage;
})(Chatty || {});