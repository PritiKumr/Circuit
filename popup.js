chrome.runtime.onConnect.addListener(function(port) {
  var end_time = 62.889197
  console.assert(port.name == "circuit");
  
  port.onMessage.addListener(function(msg) {
    if (msg.type == 'timeCode') {
      if(msg.time >= end_time){
        port.postMessage({command: 'loop_player'});
      }
    } else if (msg.type == 'newTimeCode') {
      console.log(msg);
    }
  });

});

var timecodes = []



function captureTimeCodes(){
  console.log('hello');
  port.postMessage({command: 'start_capture'});
}

document.getElementById('pick-time').onclick = captureTimeCodes;
