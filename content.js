console.log("Content Script");

var getClassOf = Function.prototype.call.bind(Object.prototype.toString);
var player;
var time = document.getElementsByTagName('video')[0].currentTime;
chrome.runtime.onConnect.addListener(function(port){
	console.log(request)
	if (request.method && (request.method === "getDOM")) {
		port.postMessage({greeting:"hello"});
	}
});

function(start, end, current_time){
	if (current_time >= end){
		player = document.getElementsByTagName('video')[0]
		player.seekTo(start)
	}
}
