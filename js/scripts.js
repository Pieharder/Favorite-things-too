$(document).ready(function() {
  $("#favorites").submit(function(event) {
  
    var favorites = [$("input#favorite1").val(), $("input#favorite2").val(), $("input#favorite3").val()];
    
    console.log(favorites) 
    var newFavorites = []
    newFavorites.push(favorites[1])
    newFavorites.push(favorites[0])
    newFavorites.push(favorites[2])

    console.log(newFavorites)
    
    $("#result").prepend("<ul>" + "</ul>").append("<li>" + newFavorites[0] + "</li>" + "<li>" + newFavorites[1] + "</li>" + "<li>" + newFavorites[2] + "</li>");
    event.preventDefault();
  });
});