
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
    if (guess < rand) {
      document.getElementById("feedback").innerHTML = "Too low!";
    } else if (guess > rand) {
        document.getElementById("feedback").innerHTML = "Too high";
    } else if (guess == rand) {
        document.getElementById("feedback").innerHTML = "You got it! Game over!"
    }
  document.getElementById("guessList").innerHTML += guess + "  ";
  document.getElementById("userGuess").value = "";
  count += 1;
  document.getElementById("count").innerHTML = count;
}

window.onload = function(){
    var form = document.getElementById("guessButton");
    form.addEventListener("click", guessingGame)
}
