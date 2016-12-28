function init() {
	//video player
	var videoPlayer = document.getElementById("video");

	//play button
	var playButton = document.getElementById("playbuttonImg");
	playButton.addEventListener('click', onPlaybuttonClick, false);

	function onPlaybuttonClick() {
		if (videoPlayer.paused == true) {
			videoPlayer.play();
			playbuttonImg.src = "images/myStop.png";
		} else {
			videoPlayer.pause();
			playbuttonImg.src="images/myPlay.png";
		}
	}
	
	//rewind button
	var rewindButton = document.getElementById("rewindbtnImg");
	rewindButton.addEventListener ('click', onRewindbuttonClick, false);
	
	function onRewindbuttonClick() { 
		if(videoPlayer.currentTime > 0) {
			videoPlayer.currentTime = videoPlayer.currentTime - 2;
		}
	}
	
	//fast forward button
	var forwardButton = document.getElementById("ffbuttonImg");
	forwardButton.addEventListener('click', onForwardButtonClick, false);
	
	function onForwardButtonClick(){
		videoPlayer.currentTime = videoPlayer.currentTime + 2;
	}
	
}
