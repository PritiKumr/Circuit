console.log("jsdhfjh");
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log("hi");
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
   	else
   		sendResponse({});
  });