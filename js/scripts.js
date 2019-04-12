//Business logic

//movieTime - 9.00am, 10.30am, 12.30pm, 2.30pm, 5.00pm, 7.30pm, 10.30pm

"use strict";

// Constructor for movie
function Movie(movieTitle, movieYear, movieRating, movieTime, movieRelease) {
  this.title = movieTitle;
  this.year = movieYear;
  this.rating = movieRating;
  this.time = movieTime;
  this.release = movieRelease;
  this.show = true;
}

var movies = [
  new Movie("Capitan Marvel", 2019, "R", ["12.30pm", "7.30pm"], "new"),
  new Movie("Batman", 2017, "R", ["9.00am", "10.30pm"], "old"),
  new Movie("Howl's Moving Castle", 2004, "PG-13", ["12.30am", "5.00pm"], "old"),
  new Movie("Dumbo", 2019, "PG-13", ["10.30am", "2.30pm"], "new"),
  new Movie("Apollo 11", 2019, "R", ["2.30pm", "10.30pm"], "new"),
  new Movie("Shazam!", 2019, "PG-13", ["10.30am", "5.00pm"], "new"),
];

var filterMoviesByAge = function(age) {
  return movies.filter(function(movie) {
    if (age <= 13 && movie.rating == "PG-13") {
      return true
    } else if (age > 13) {
      return true
    }
  });
}

// Constructor for ticket
function Ticket(movieName, movieRelease, movieTime, ticketPrice, ticketDiscount) {
  this.name = movieName;
  this.release = movieRelease;
  this.time = movieTime;
  this.price = ticketPrice;
  this.discount = ticketDiscount;
}

Ticket.prototype.calculatePrice = function(userAge) {
  var price = this.price;
  if (this.release == "old") {
    price = price - (price * this.discount)
  }
  if (this.time == "9.00am" || this.time == "10.30am") {
    price = price - (price * 0.2)
  }
  if (userAge >= 55) {
    price = price - (price * 0.15)
  }
  return price
}

// var getTicketPrice = function(movie, price, discount) {
//   if (movie.release == "old") {
//     return price - (price * discount);
//   } else {
//     return price
//   };
// }

// User Interface Logic
var refreshTime = function() {
  $("#time").empty();
  var filteredMovie = $("select#movie").val();
  for (var i = 0; i < movies.length; i++) {
    if (movies[i].title == filteredMovie) {
      movies[i].time.forEach(function(t) {
        $("#time").append(
          "<option>" + t + "</option>")
      });
    }
  };
}

$(document).ready(function() {
  $("#age").change(function() {
    $("#movie").empty();
    var userAge = parseInt($("input#age").val());
    filterMoviesByAge(userAge).forEach(function(movie) {
      $("#movie").append(
        "<option>" + movie.title + "</option>")
    });
    refreshTime();
  });

  $("#movie").change(function() {
    refreshTime();
  });

  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var filteredMovie = $("select#movie").val();
    var filteredTime = $("select#time").val();
    var seniorDiscount = 0.3;
    var morningDiscount = 0.2;
    var basePrice = 40;
    var releaseDiscount = 0.1;

    movies.forEach(function(m) {
      if (m.title == filteredMovie) {
        var userTicket = new Ticket (filteredMovie, m.release, filteredTime, basePrice, releaseDiscount);
        var userAge = parseInt($("input#age").val());
        var newTicketPrice = userTicket.calculatePrice(userAge);
        $("#ticketPrice").text("You are going to see " + filteredMovie + " at " + filteredTime + " for " + "$" + newTicketPrice);
      }
    });
  });
});
