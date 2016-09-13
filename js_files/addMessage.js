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
  addMessage.deleteMessage = function() {

  }

  return addMessage;
})(Chatty || {});