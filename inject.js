var result = removeQuestions(); // undefined, the function does not return anything
window.onload = result;
function removeQuestions(){
	var player = new YT.Player('player', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
  console.log(player);
	}


var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady() {
  console.log("hey Im ready");
  //do whatever you want here. Like, player.playVideo();

}

function onPlayerStateChange() {
  console.log("my state changed");
}