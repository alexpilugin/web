// JavaScript Document

var defaultWidth = $("#banner-container").width(); 
	var $container = $('#banner-container');
	var ratio = 0.205;
	
$( document ).ready(function() {
	$("#item-big" ).animate({ left: '62%' }, 3500 );
	$("#item-2").animate({ left: '8%' }, 2500 );
	$("#item-3" ).animate({ left: '28%' }, 4500 );
	$("#item-4" ).animate({ left: '0.05%' }, 3000 );
	$("#item-5" ).animate({ left: '43%' }, 2500 );
	$("#item-6" ).animate({ left: '37%' }, 4000 );
	$("#item-7" ).animate({ left: '15%' }, 2500 );
	$("#item-8" ).animate({ left: '25%' }, 2500 );
	$("#item-9" ).animate({ left: '53%' }, 3500 );
	
	var newHeight = defaultWidth * ratio;
	$container.height(newHeight);

});
	
$(window).resize(function() {
	var currentWidth = $("#banner-container").width();		
	/* var ratio = currentWidth / defaultWidth; */		
	var newHeight = currentWidth * ratio;
	$container.height(newHeight);
});