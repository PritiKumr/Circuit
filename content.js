console.log("Content Script");

var getClassOf = Function.prototype.call.bind(Object.prototype.toString);

function getDom(){
  a = document.getElementById("movie_player");
  console.log(a.getCurrentTime());
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method && (request.method === "getDOM")) {
        sendResponse({ "html": "hi" });
    }
});

  