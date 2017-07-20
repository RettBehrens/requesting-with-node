var movie = require("./movie");
var threeFavoriteMovies = ["saving private ryan", "the mask", "gone with the wind"];
threeFavoriteMovies.forEach(function(film){
  // your code here
  var removeSpaces = film.split(" ");
  var addPlus = removeSpaces.join("+");
  console.log(addPlus);
  movie(addPlus);
});

// 