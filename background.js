console.log("Background script running");
chrome.tabs.getSelected(null,function(tab) {
	chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
	    console.log(response);
	  });
});
