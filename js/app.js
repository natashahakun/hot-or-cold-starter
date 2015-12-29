
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$("#what").click(function(){
    	$(".overlay").fadeIn(500);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(500);
  	});

});

var rand = Math.round(Math.random() * 101);
var count = 0;

var guessingGame = function() {
  var guess = document.getElementById("userGuess").value;
  if (isNaN(guess) === true || guess < 1 || guess > 100) {
      document.getElementById("feedback").innerHTML = "Please enter a number between 1 and 100."
  } else if (guess <= (rand - 50) || guess >= (rand + 50)) {
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
  
  if (isNaN(guess) === false && guess >= 1 && guess <= 100) {
    document.getElementById("guessList").innerHTML += guess + " ";
    count += 1;
    document.getElementById("count").innerHTML = count;
  }
  document.getElementById("userGuess").value = "";

}

window.onload = function(){
    var form = document.getElementById("guessButton");
    form.addEventListener("click", guessingGame);
    var newGameClick = document.getElementById("new");
    newGameClick.addEventListener("click", newGame);
}

var newGame = function(){
  rand = Math.round(Math.random() * 101);
  count = 0;
  document.getElementById("feedback").innerHTML = "Make your guess!";
  document.getElementById("guessList").innerHTML = "";
  document.getElementById("count").innerHTML = "0";
}

