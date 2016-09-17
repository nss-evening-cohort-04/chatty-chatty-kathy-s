var Chatty = (function(Chatty) {

  Chatty.remove = function (event) {
    //first, remove clicked element from the DOM
    var currentMessagesArray = Chatty.getMessagesArray();
    var clicked = event;
    container.removeChild(clicked.parentElement);

    //then, remove clicked object from the messagesArray
    var clickedID = clicked.parentElement.id;
    for(var i = 0; i < currentMessagesArray.length; i++) {
      if(currentMessagesArray[i].id == clickedID) {
        currentMessagesArray.splice(i, 1);
        console.log(currentMessagesArray);
        break;
      }
    }
    //if the messages container div is empty, disable the Clear All Messages button
    if (document.getElementById("container").innerHTML < 1) {
      document.getElementById("clearButton").disabled = true;
    }
  }

return Chatty;
})(Chatty || {});