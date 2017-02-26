console.log("Background script running");


chrome.tabs.query({active: true}, function(tabs){
	chrome.tabs.executeScript(null, {file: "content.js"});
	chrome.tabs.executeScript({
    file: 'inject.js'
  });
});
<<<<<<< HEAD



chrome.runtime.onConnect.addListener(function(port) {
	var end_time = 62.889197
  console.assert(port.name == "circuit");
  port.onMessage.addListener(function(msg) {
  	console.log(msg.time);
    if(msg.time >= end_time){
    	port.postMessage({response: 'loop'});
    }
  });
});
=======
>>>>>>> 9852e2e8f0d1d24a901ea6b254b7bba960463707
