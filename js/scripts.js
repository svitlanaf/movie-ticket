

function Theater() {
  this.movies = [],
  this.currentId = 0
}

Theater.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Movie(moveTitle, movieTime, movieRating) {
  this.moveTitle = moveTitle,
  this.movieTime = movieTime,
  this.movieRating = movieRating
}

Theater.prototype.addMovie = function (movie) {
  movie.id = this.assignId();
  this.movies.push(movie);
}

var titles = ["Batman", "Capitan Marvel", "Black Mother", "Buddy"];
var time = ["Morning", "Afternoon", "Evening"];
var rating = ["PG-13", "R"];

// User Interface Logic ---------
var Theatre = new Theatre();



$(document).ready(function() {
  //call function for checking if customer can purchase ticket
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var ticketCost = 10;
    var seniorDiscount = 3;
    var morningDiscount = 3;

    var userAge = $("input#age").val();
    var userMovieChoice = $("#movie").val();
    var userTimeChoice = $("#time").val();

    if (userAge > 60) {
        cost -= seniorDiscount;
        console.log("hi");
      }

    if (userTimeChoice = "Morning") {
        cost -= morningDiscount;
        console.log("goodmorning");
      }

    $("#ticketPrice").text("You are going to see " +userMovieChoice+ " for " + cost);
  });
});
