console.log("Background script running");


chrome.tabs.query({active: true}, function(tabs){
	chrome.tabs.executeScript(null, {file: "content.js"});
	chrome.tabs.executeScript({
    file: 'inject.js'
  });
});



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