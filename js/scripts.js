

// function Theater() {
//   this.movies = [],
//   this.currentId = 0
// }
//
// Theater.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;

var movie = {
  title: "Batman",
  time: ["Morning"],
  new: true,
  rating: "PG-13"
};




// function() {
//   if (age > 60) {
//     cost -= seniorDiscount;
//   }
// };


$(document).ready(function() {
  //call function for checking if customer can purchase ticket
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var cost = 10;
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
