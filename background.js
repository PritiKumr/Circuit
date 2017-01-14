console.log("Background script running");

function findMusicPlayer(player){
	console.log("hellp" ,player);
}

chrome.tabs.query({active: true}, function(tabs){
	chrome.tabs.executeScript(null, {file: "content.js"});
	chrome.tabs.executeScript({
    file: 'inject.js'
  });
	chrome.tabs.sendMessage(tabs[0].id, {method: 'getDOM'}, function(response){
		findMusicPlayer(response);
	});
});
