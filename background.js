console.log("Background script running");


chrome.tabs.query({active: true}, function(tabs){
	chrome.tabs.executeScript(null, {file: "content.js"});
	chrome.tabs.executeScript({
    file: 'inject.js'
  });
});


chrome.runtime.onConnect.addListener(function(port) {
	var timeCodes = [];
  var currentTimecodeIndex = 0;

  console.assert(port.name == "circuit");
  port.onMessage.addListener(function(msg) {
    if (msg.type == 'timeCode') {
      if(msg.time >= endTime()){
        port.postMessage({command: 'loop_player', start_time: startTime()});
      }
    } else if (msg.type == 'newTimeCode') {
      saveTimecode(msg.time);
    }
  });

  function displayTimeCodes(){
    document.getElementById("start_time").value = startTime();
    document.getElementById("end_time").value = endTime();
  }

  function startTime() {
    return timeCodes[0];
  }

  function endTime() {
    return timeCodes[1];
  }

  function saveTimecode(timeCode) {
    console.log(currentTimecodeIndex);
    console.log(timeCodes);
    timeCodes[currentTimecodeIndex] = timeCode;
    timeCodes.sort(function (a, b) {
      return a - b;
    })
    currentTimecodeIndex = 1 - currentTimecodeIndex;
    displayTimeCodes();
  }

});