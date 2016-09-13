var Chatty = (function(removeMessage) {

  removeMessage.remove = function (event) {
    var clicked = event;
    container.removeChild(clicked.parentElement);
  }

return removeMessage;
})(Chatty || {});