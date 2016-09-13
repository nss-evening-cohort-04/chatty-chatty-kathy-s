var Chatty = (function() {

  function parseJSON() {
    var data = JSON.parse(this.responseText);
    Chatty.getMessages(data);
  }


  var request = new XMLHttpRequest();
  request.addEventListener("load",parseJSON);
  request.open("GET","messages.json");
  request.send();
})();