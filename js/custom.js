/*jQuery for event card filters*/

/*Displaying festival cards depending on .class filter*/
$(document).ready(function () {
	
	$("#noord-button").on("click", function() {
		$('.oost').removeClass("showcards")
		$('.zuid').removeClass("showcards")
		$('.west').removeClass("showcards")
		$(".noord").addClass("showcards")
		$(".noord").slideDown("slow");
	});

	$("#oost-button").on("click", function() {
		$('.noord').removeClass("showcards")
		$('.zuid').removeClass("showcards")
		$('.west').removeClass("showcards")
		$(".oost").addClass("showcards")
		$(".oost").slideDown("slow");
	});

	$("#zuid-button").on("click", function() {
		$('.oost').removeClass("showcards")
		$('.noord').removeClass("showcards")
		$('.west').removeClass("showcards")
		$(".zuid").addClass("showcards")
		$(".zuid").slideDown("slow");
	});

	$("#west-button").on("click", function() {
		$('.oost').removeClass("showcards")
		$('.noord').removeClass("showcards")
		$('.zuid').removeClass("showcards")
		$(".west").addClass("showcards")
		$(".west").slideDown("slow");
	});
});