
animals = ["cats","dogs","birds","fish"]

// load the animal buttons from the animal button array
function animalBtn(){

    $("#gifButton").empty()

    for(var i=0;i<animals.length;i++){

        var newButton = $("<button>");
        newButton.addClass("animalBtn");
        newButton.attr("id", "Btn-"+i);
        newButton.attr("data",animals[i])
        newButton.text(animals[i]);
        $("#gifButton").append(newButton);

    }
}



function animalGifs(){
    event.preventDefault();

    $("#animalGifs").html("");
    
    animal = $(this).attr("data")
    queryURL = "https://api.giphy.com/v1/gifs/search?q="+animal+"&api_key=8mDn00XQKeMIdoTpbO6X7xgjK2CZAVK0&limit=10"

    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)
        info = response.data
        console.log(info[1].rating)
        for(var i=0;i<info.length;i++){
            console.log(info[i])

            newGif = $("<div>");

            newUrl = $("<img>");
            newUrl.attr("src", info[i].images.fixed_height.url);

            newText = $("<p>")
            newText.text("Rated: "+info[i].rating)
            // newGif.attr("data-state","still")
            // newGif.attr("data-animate",)
            // newGif.attr("data-still",)
            // newGif.attr("id","gif-"+i)
            // newGif.text("gif"+i);

            $(newGif).append(newText)
            $(newGif).append(newUrl)
            $("#animalGifs").append(newGif);
        };
    
    });
}

// pause unpause animal gifs
$(".gif").on("click", function() {
    console.log($(this).attr())
    // // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    // var state = $(this).attr("data-state");
    // // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // // Then, set the image's data-state to animate
    // // Else set src to the data-still value
    // if (state === "still") {
    //   $(this).attr("src", $(this).attr("data-animate"));
    //   $(this).attr("data-state", "animate");
    // } else {
    //   $(this).attr("src", $(this).attr("data-still"));
    //   $(this).attr("data-state", "still");
    // }
});
  

// add an animal to animals[] 
$("#animalAdd").click(function(event) {
    event.preventDefault();

    temp = $("#animalNew").val()
    animals.push(temp)
    console.log(animals)

    animalBtn()

});

$(document).on("click", ".animalBtn", animalGifs);


animalBtn()

// code from the gif pause activity


