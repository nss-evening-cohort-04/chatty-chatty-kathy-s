var Chatty = (function() {

  function getMessages() {
    var data = JSON.parse(this.responseText);
    Chatty.getMessages(data);
  }


  var request = new XMLHttpRequest();
  request.addEventListener("load",getMessages);
  request.open("GET","messages.json");
  request.send();
})();