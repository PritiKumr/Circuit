var port = chrome.runtime.connect({name: "circuit"});

window.setInterval(function(){
	port.postMessage({time: getTimeCode(), type: "timeCode"});
}, 250);

port.onMessage.addListener(function(msg) {
  if (msg.command == "loop_player"){
    seekVideo(msg.start_time);
  } else if (msg.command == "start_capture") {
    attachTimeCodeListener()
  }
});

function seekVideo(timecode){
	player = document.getElementsByTagName('video')[0]
	player.currentTime = timecode
}

function getTimeCode(){
	return document.getElementsByTagName('video')[0].currentTime;
}

function captureTimeCodes(){

}


document.getElementsByClassName("ytp-progress-bar-container")[0].addEventListener("click", function(){
	
})

function saveTimeCode(){
  port.postMessage({time: getTimeCode(), type: "newTimeCode"})
}

function attachTimeCodeListener(){
  progressBar = document.getElementsByClassName("ytp-progress-bar-container")[0];
  progressBar.removeEventListener("click", saveTimeCode , false);
  progressBar.addEventListener("click", saveTimeCode);
}

