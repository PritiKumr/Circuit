window.onload = function(){
    document.getElementById("show_time_div").style.visibility = "hidden";
    document.getElementById("time_input_box").addEventListener("click", time_input_box);
    chrome.tabs.getSelected(null, function(tab) {
		  if tab.url

	});
}

function time_input_box(){
	document.getElementById("show_time_div").style.visibility = "visible";
}



