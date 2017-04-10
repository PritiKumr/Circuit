var port = chrome.runtime.connect({name: "circuit"});
var startTime, endTime;

window.setInterval(function(){
  if(getTimeCode() < (convertToSec(startTime) || 0) || getTimeCode() >= (convertToSec(endTime) || Infinity)){
    seekVideo(convertToSec(startTime) || 0);
  }
}, 250);

port.onMessage.addListener(function(msg) {
  if (msg.command == "setup_looping"){
    startTime = msg.startTime; 
    endTime   = msg.endTime;
  } else if (msg.command == "reset_looping"){
    startTime = null;
    endTime = null; 
    sendTimecodesToPopup();
  } else if (msg.command == "request_timecodes") {
    sendTimecodesToPopup();
  }
});

function seekVideo(timecode){
	player = document.getElementsByTagName('video')[0]
	player.currentTime = timecode
}

function getTimeCode(){
	return document.getElementsByTagName('video')[0].currentTime;
}

function sendTimecodesToPopup () {
  port.postMessage({
    command: "displayTimecodes",
    startTime: startTime,
    endTime: endTime
  });
}

function convertToSec (time) {
  if (time == null)
    return null;
  var a = time.split(':'); // split it at the colons
  var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
  return seconds;
}