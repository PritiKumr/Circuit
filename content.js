<<<<<<< HEAD
console.log("Content Script");

var port = chrome.runtime.connect({name: "circuit"});
window.setInterval(function(){
	port.postMessage({time: getTimeCode(), type: "timeCode"});
}, 250)
port.onMessage.addListener(function(msg) {
  if (msg.response == "loop"){
    seekVideo();
  }
});


=======
var port = chrome.runtime.connect({name: "circuit"});

window.setInterval(function(){
	port.postMessage({time: getTimeCode(), type: "timeCode"});
}, 250);

port.onMessage.addListener(function(msg) {
  if (msg.command == "loop_player"){
    seekVideo();
  } else if (msg.command == "start_capture") {
    attachTimeCodeListener()
  }
});

>>>>>>> 9852e2e8f0d1d24a901ea6b254b7bba960463707
function seekVideo(){
	var start = 32.889197
	player = document.getElementsByTagName('video')[0]
	player.currentTime = start
}

function getTimeCode(){
	return document.getElementsByTagName('video')[0].currentTime;
}

<<<<<<< HEAD
function captureTimeCodes(){

}


document.getElementsByClassName("ytp-progress-bar-container")[0].addEventListener("click", function(){
	
})
=======
function saveTimeCode(){
  port.postMessage({time: getTimeCode(), type: "newTimeCode"})
}

function attachTimeCodeListener(){
  document.getElementsByClassName("ytp-progress-bar-container")[0].addEventListener("click", saveTimeCode)
}

>>>>>>> 9852e2e8f0d1d24a901ea6b254b7bba960463707
