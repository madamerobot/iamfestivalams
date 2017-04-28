/*jQuery for event card filters*/

/*Displaying festival cards depending on .class filter*/
$(document).ready(function () {
	
	$("#noord-button").on("click", function() {
		$('.card').toggleClass("showcards")
		$(".noord").slideDown("slow")
	});

	$("#oost-button").on("click", function() {
		$('.card').toggleClass("showcards")
		$(".oost").slideDown("slow")

	});

	$("#zuid-button").on("click", function() {
		$('.card').toggleClass("showcards")
		$(".zuid").slideDown("slow")
	});

	$("#west-button").on("click", function() {
		$('.card').toggleClass("showcards")
		$(".west").slideDown("slow")
	});
});