var games = ["skip-bo", "hammertime", "soccer"];

for (var index = 0; index < games.length; index++){
	var game = games[index];

  console.log("My game is named " + game);
}

//this each method does the same thing as the for loop above

$.each(games, function(index, game){
  console.log("My game is named " + game);
});

// for each element in array games, run a function iterating 'index' (which by default starts at 0)

//game is equivalent to games[index]

//the two parameters of the function are MANDATORY, but they can be named ANYTHING
