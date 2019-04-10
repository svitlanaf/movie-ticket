//Business logic

//time - 9.00am, 10.30am, 12.30pm, 2.30pm, 5.00pm, 7.30pm, 10.30pm

"use strict";

function Movie(movieTitle, movieYear, movieRating, movieTime) {
  this.title = movieTitle;
  this.year = movieYear;
  this.rating = movieRating;
  this.time = movieTime;
  this.show = true;
}

var movies = [
  new Movie("Capitan Marvel", 2019, "R", ["12.30pm", "7.30pm"]),
  new Movie("Batman", 2017, "R", ["9.00am", "10.30pm"]),
  new Movie("Howl's Moving Castle", 2004, "PG-13", ["12.30am", "5.00pm"]),
  new Movie("Dumbo", 2019, "PG-13", ["10.30am", "2.30pm"]),
  new Movie("Apollo 11", 2019, "R", ["2.30pm", "10.30pm"]),
  new Movie("Shazam!", 2019, "PG-13", ["10.30am", "5.00pm"]),
]
console.log(movies)

var filterMoviesByAge = function(age) {
  return movies.filter(function(movie) {
    if (age <= 13 && movie.rating == "PG-13") {
      return true
    } else if (age > 13) {
      return true
    }
  })
}
// console.log (filterMoviesByAge (4))


// User Interface Logic ---------


$(document).ready(function() {
  $("#age").change(function(){
    $("#movie").empty()
    var userAge = parseInt($("input#age").val());
    filterMoviesByAge(userAge).forEach(function(movie){
      $("#movie").append(
        "<option>" + movie.title + "</option>")
    })
  });
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var ticketCost = 10;
    var seniorDiscount = 3;
    var morningDiscount = 3;

    var userAge = $("input#age").val();
    var userMovieChoice = $("#movie").val();
    var userTimeChoice = $("#time").val();

    $("#ticketPrice").text("You are going to see " + userMovieChoice + " for " + cost);
  });
});
