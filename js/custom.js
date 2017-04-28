/*jQuery for event card filters*/

/*Displaying festival cards depending on .class filter*/
$(document).ready(function () {
	
	$("#noord-button").on("click", function() {
		$(".eventresults").find(".zuid").fadeOut();
		$(".eventresults").find(".west").fadeOut();
		$(".eventresults").find(".oost").fadeOut();
		$(".eventresults").find(".noord").fadeToggle();
		});

	$("#oost-button").on("click", function() {
		$(".eventresults").find(".zuid").fadeOut();
		$(".eventresults").find(".noord").fadeOut();
		$(".eventresults").find(".west").fadeOut();
		$(".eventresults").find(".oost").fadeToggle();
	});

	$("#zuid-button").on("click", function() {
		$(".eventresults").find(".noord").fadeOut();
		$(".eventresults").find(".oost").fadeOut();
		$(".eventresults").find(".west").fadeOut();
		$(".eventresults").find(".zuid").fadeToggle();
	});

	$("#west-button").on("click", function() {
		$(".eventresults").find(".zuid").fadeOut();
		$(".eventresults").find(".noord").fadeOut();
		$(".eventresults").find(".oost").fadeOut();
		$(".eventresults").find(".west").fadeToggle();
	});
});	
