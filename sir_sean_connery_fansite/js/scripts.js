// JavaScript Document

$(document).ready(function() {
	initContent();
	
	$('#slider').nivoSlider();	

	/* http://fancyapps.com/fancybox/ */	
	$(".gallery_thumbnails a").fancybox({});	
});


function onClickHome(){
	window.location = "index.html";
}

function onClickBiography(){
	window.location = "biography.html";
}

function onClickfilmography(){
	window.location = "filmography.html";	
}
function onClickLinks(){
	window.location = "links.html";	
}
function initContent(){
	var audioElement = document.getElementById("audio");
	audioElement.load();
}
function copyDiv(sourceId, targetId){
	var source = document.getElementById(sourceId);	
	var target = document.getElementById(targetId);
	target.innerHTML = source.innerHTML;
}
function doPlaySound(){
	var playButton = document.getElementById("menu-playBtn");
	var audioElement = document.getElementById("audio");
	
	if(audioElement.paused){
		audioElement.play();
		soundPlaying = true;
		//playButton.src = "../images/volumeBtn.png";
		playButton.class = "playBtn";
	}else{
		audioElement.pause();
		soundPlaying = false;
		//playButton.src = "../images/muteBtn.png";
		playButton.class = "stopBtn";
	}
}