/*Hiding the festival cards on default*/
$(document).ready(function () {

	$(".card").hide()

});

$(document).ready(function () {
	
	$("#noord-button").on("click", function() {
		$(".card").hide()
		$(".noord").show();
	});

	$("#oost-button").on("click", function() {
		$(".card").hide()
		$(".oost").show();
	});

	$("#zuid-button").on("click", function() {
		$(".card").hide()
		$(".zuid").show();
	});


	$("#west-button").on("click", function() {
		$(".card").hide()
		$(".west").show();
	});
});