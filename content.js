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

function seekVideo(){
	var start = 32.889197
	player = document.getElementsByTagName('video')[0]
	player.currentTime = start
}

function getTimeCode(){
	return document.getElementsByTagName('video')[0].currentTime;
}

function saveTimeCode(){
  port.postMessage({time: getTimeCode(), type: "newTimeCode"})
}

function attachTimeCodeListener(){
  document.getElementsByClassName("ytp-progress-bar-container")[0].addEventListener("click", saveTimeCode)
}

