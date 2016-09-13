var Chatty = (function(removeMessage) {

  removeMessage.remove = function (event) {
    var clicked = event;
    console.log(clicked);
    container.removeChild(clicked.parentElement);
  }

return removeMessage;
})(Chatty || {});