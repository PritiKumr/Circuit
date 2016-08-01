window.onload = function(){
    document.getElementById("time_input_box").addEventListener("click", time_input_box);
    document.getElementById("pick-time").addEventListener("click", select_time_from_video);

    chrome.tabs.getSelected(null, function(tab) {
		});
}

function time_input_box(){
	console.log("jhb");
	$("#show_time_div").toggleClass("clicked");
}

function select_time_from_video(){
	alert("hi");
}



