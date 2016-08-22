// Business Logic
function Place(location, landmark, season, notes, tags) {
  this.placeLocation = location;
  this.placeLandmark = landmark;
  this.placeSeason = season;
  this.placeNotes = notes;
  this.placeTags = tags;
}

Place.prototype.notesTags = function() {
  return this.placeNotes + " Tags: " + this.placeTags;
}

// user interface logic

$(document).ready(function(){
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmarks").val();
    var inputtedSeason = $("input#new-season").val();
    var inputtedNotes = $("input#new-notes").val();
    var inputtedTags = $("input#new-tags").val();

    var newPlace = new Place(inputtedLocation, inputtedLandmark, inputtedSeason, inputtedNotes, inputtedTags);

  $("ul#places").append("<li><span class = 'place'>" + inputtedLocation + "</span></li>");

  $(".place").last().click(function () {
    $("#show-location").show();
    $("#show-location h2").text(newPlace.placeLocation);
    $(".location").text(newPlace.placeLocation);
    $(".landmark").text(newPlace.placeLandmark);
    $(".season").text(newPlace.placeSeason);
    $(".notes-tags").text(newPlace.notesTags());
  });


  $("input#new-location").val("");
  $("input#new-landmarks").val("");
  $("input#new-season").val("");
  $("input#new-notes").val("");
  $("input#new-tags").val("");
  });

});
