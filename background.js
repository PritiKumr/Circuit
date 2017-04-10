console.log("Background script running");


chrome.tabs.query({active: true}, function(tabs){
	chrome.tabs.executeScript(null, {file: "content.js"});
	chrome.tabs.executeScript({
    file: 'inject.js'
  });
});

chrome.runtime.onConnect.addListener(function(port) {
  document.getElementById('setup').addEventListener('click', function () {
    port.postMessage({
      command: 'setup_looping',
      startTime: document.getElementById("start_time").value,
      endTime: document.getElementById("end_time").value
    });
  });

  document.getElementById('reset').addEventListener('click', function () {
    port.postMessage({command: 'reset_looping'});
  });
});