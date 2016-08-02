console.log("Background script running");

function findMusicPlayer(player){
	ytplayer = player.getElementById("movie_player");
	alert(ytplayer);
}

chrome.tabs.query({active: true}, function(tabs){
	chrome.tabs.executeScript(null, {file: "content.js"});
	chrome.tabs.sendMessage(tabs[0].id, {method: 'getDOM'}, function(response){
		findMusicPlayer(response);
	});
});
