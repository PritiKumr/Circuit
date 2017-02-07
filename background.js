console.log("Background script running");


chrome.tabs.query({active: true}, function(tabs){
	chrome.tabs.executeScript(null, {file: "content.js"});
	chrome.tabs.executeScript({
    file: 'inject.js'
  });
});
