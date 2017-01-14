console.log("Background script running");

function findMusicPlayer(player){
	alert("hello" ,player);
}

chrome.tabs.query({active: true}, function(tabs){
	chrome.tabs.executeScript(null, {file: "content.js"});
	chrome.tabs.executeScript({
    file: 'inject.js'
  });

  // setInterval(function(){
		chrome.tabs.sendMessage(tabs[0].id, {method: 'getDOM'}, function(response){
			findMusicPlayer(response);
		});
	// }, 5000);
});
