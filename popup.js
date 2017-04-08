chrome.runtime.onConnect.addListener(function(port) {  

  function startTime() {
    timeCodes[0];
  }

  function endTime() {
    timeCodes[1];
  }

  function captureTimeCodes(){
    port.postMessage({command: 'start_capture'});
  }

  document.getElementById('pick-time').onclick = captureTimeCodes;
});