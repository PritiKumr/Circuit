console.log("Content Script");

var port = chrome.runtime.connect({name: "circuit"});
window.setInterval(function(){
	port.postMessage({time: getTimeCode(), type: "timeCode"});
}, 500)
port.onMessage.addListener(function(msg) {
  if (msg.response == "loop"){
    seekVideo();
  }
});


function seekVideo(){
	var start = 32.889197
	player = document.getElementsByTagName('video')[0]
	player.currentTime = start
}

function getTimeCode(){
	return document.getElementsByTagName('video')[0].currentTime;
}