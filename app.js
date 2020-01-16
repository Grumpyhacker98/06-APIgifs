
animals = ["cats","dogs","birds","fish"]

// load the animal buttons from the animal button array
function animalBtn(){

    $("#gifButton").empty()

    for(var i=0;i<animals.length;i++){

        var newButton = $("<button>");
        newButton.addClass("gifclass");
        newButton.attr("id", "gif-"+i);
        newButton.text(animals[i]);
        $("#gifButton").append(newButton);

    }
}


// generate 10 new animal gifs
$(".animal").on("click", function() {
// grab 10 animal gifs from the website
// give them indivigual identity classes when being created
// print
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

    });

});

// 06/16ish has good code for this
// pause unpause animal gifs
$("-----").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
});
  

// add an animal to animals[] 
$("#animalAdd").click(function(event) {
    event.preventDefault();

    temp = $("#animalNew").val()
    animals.push(temp)
    console.log(animals)

    animalBtn()

});



animalBtn()

// code from the gif pause activity


