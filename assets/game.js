var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

// Setters
// Getters


var resetAndStart = function () {

	$(".crystals").empty();

	var images = [
		    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkQ8oX1yCK4gaHVB1n_-ZIteYFzjiTZiMeDOBMJPd2nhd8k_I9A', 
			'http://vignette3.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642', 
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsW9qA1q4ipXnKBeuWBhnJE_oLoX0bc22Ha6YodAafpFBEbAj', 
			'https://static.turbosquid.com/Preview/2014/07/08__10_08_09/Crystals0010.jpgc22b2831-ae7a-4cb6-b4ac-612aa7f35ad7Original.jpg'];
		
	randomResult = Math.floor(Math.random() * 90 ) + 30; 


	$("#result").html('Random Result: ' + randomResult);

	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 11) + 1;

		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

			});


		$(".crystals").append(crystal);

	}

	$("#previous").html("Total Score: " + previous);

}


resetAndStart();


// Event Delegation
$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;


	$("#previous").html("Total score: " + previous);

	console.log(previous);

	if(previous > randomResult){

		lost++;

		$("#lost").html("You lost: " + lost);

		previous = 0;

		resetAndStart();

	} 
	else if(previous === randomResult){

		win++;

		$("#win").html("You win: " + win);

		previous = 0;

		resetAndStart();

	}

});



