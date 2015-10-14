
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

var rand = Math.round(Math.random() * 101);
var count = 0;

var guessingGame = function() {
  var guess = document.getElementById("userGuess").value;
    if (guess <= (rand - 50) || guess >= (rand + 50)) {
      document.getElementById("feedback").innerHTML = "Ice cold!";
    } else if ((guess >= (rand - 49) && guess <= (rand - 30)) || (guess <= (rand + 49) && guess >= (rand + 30))) {
        document.getElementById("feedback").innerHTML = "Cold";
     } else if ((guess >= (rand - 29) && guess <= (rand - 20)) || (guess <= (rand + 29) && guess >= (rand + 20))) {
        document.getElementById("feedback").innerHTML = "Warm";
     } else if ((guess >= (rand - 19) && guess <= (rand - 10)) || (guess <= (rand + 19) && guess >= (rand + 10))) {
        document.getElementById("feedback").innerHTML = "Hot!";
     } else if ((guess >= (rand - 9) && guess <= (rand - 1)) || (guess <= (rand + 9) && guess >= (rand + 1))) {
        document.getElementById("feedback").innerHTML = "Very hot!";
    } else if (guess == rand) {
        document.getElementById("feedback").innerHTML = "You got it! Game over!"
    }
  document.getElementById("guessList").innerHTML += guess + " ";
  document.getElementById("userGuess").value = "";
  count += 1;
  document.getElementById("count").innerHTML = count;
}

window.onload = function(){
    var form = document.getElementById("guessButton");
    form.addEventListener("click", guessingGame)
}
