var numGuess = prompt("Please guess a number between 1 and 10 (inclusive)");

// //if (numGuess.isInteger === "false"){
//   alert("Please try again and ente an integer this time");
//   numGuess = prompt("Please guesPlease guess a number between 1 and 10 (inclusive)");
// }
while (numGuess != 6){
  if (numGuess > 6){
    numGuess = prompt("Too high! Try a higher number.");
  }
  else if (numGuess < 6){
    numGuess = prompt("Too low! Try a lower number.");
  }
  else {
    alert("Great job! You guessed 6!");
  }
}


// this is only a start to solving this problem. It's not a complete solution
