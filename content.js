console.log("Content Script");

var getClassOf = Function.prototype.call.bind(Object.prototype.toString);
var time;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method && (request.method === "getDOM")) {
    		time = document.getElementsByTagName('video')[0].currentTime;
    		setInterval(function(){ 
        sendResponse({ "html": time });
    		 }, 3000);
    }
});


// a = document.getElementById("movie_player");
// time = a.getCurrentTime()