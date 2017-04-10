chrome.runtime.onConnect.addListener(function(port) {
  port.postMessage({command: "request_timecodes"});
  port.onMessage.addListener(function(msg) {
    if (msg.command == 'displayTimecodes') {
      document.getElementById("start_time").value = msg.startTime;
      document.getElementById("end_time").value   = msg.endTime;  
    };
  });
});