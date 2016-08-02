console.log("Content Script");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method && (request.method === "getDOM")) {
        var html = document.all[0];
        sendResponse({ "html": html.innerHTML });
    }
});