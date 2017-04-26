/*jQuery for event card filters*/

/*Hiding the festival cards on default*/
$(document).ready(function () {

	$(".card").toggle()

});

/*Displaying festival cards depending on .class filter*/
$(document).ready(function () {
	
	$("#noord-button").on("click", function() {
		$(".card").hide()
		$(".noord").slideDown("slow")

		/*$("#card1").slideDown("slow")
		$("#card5").slideDown("slow")
		$("#card8").slideDown("slow")*/
	});

	$("#oost-button").on("click", function() {
		$(".card").hide()
		$(".oost").slideDown("slow")

		/*$("#card2").slideDown("slow")
		$("#card4").slideDown("slow")
		$("#card9").slideDown("slow")*/
	});

	$("#zuid-button").on("click", function() {
		$(".card").hide()
		$(".zuid").slideDown("slow")

		/*$("#card3").slideDown("slow")
		$("#card6").slideDown("slow")
		$("#card7").slideDown("slow")*/
	});

	$("#west-button").on("click", function() {
		$(".card").hide()
		$(".west").slideDown("slow")

		/*$("#card4").slideDown("slow")
		$("#card5").slideDown("slow")
		$("#card9").slideDown("slow")*/
	});
});