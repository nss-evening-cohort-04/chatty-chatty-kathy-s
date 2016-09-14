var Chatty = (function(removeMessage) {

  removeMessage.remove = function (event) {
    var clicked = event;
    container.removeChild(clicked.parentElement);
    if (document.getElementById("container").innerHTML < 1) {
      document.getElementById("clearButton").disabled = true;
    }
  }

return removeMessage;
})(Chatty || {});