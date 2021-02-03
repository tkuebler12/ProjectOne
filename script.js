$(document).ready(function () {



    // Run Recipe search on this click event
    $(".RecipeSearchBtn").on("click", function(){
        recipeResponse();

    });
    
    function recipeResponse(){

    // Recipe Search
    // var api_id = "cdc2f678";
    // var app_key = "2ccb5f96df52396e065d26ba486dcc0a";
    var searchedFood = $('.RecipeSearchInput').val().trim();
    var queryURL = "https://api.edamam.com/search?q=" + searchedFood + "&app_id=cdc2f678&app_key=2ccb5f96df52396e065d26ba486dcc0a";
    
    localStorage.clear();
    localStorage.setItem("food", searchedFood);

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log("----------------------------------------")
        console.log("Recipe", response);
        console.log("----------------------------------------")

        var ingredientListObj = response.hits[0].recipe.ingredients;

        for (var i = 0; i < ingredientListObj.length; i++) {
            var recipeName = response.q;
            var ingredient = ingredientListObj[i].text;
            $(".recipe-name").text(recipeName);
            $(".ingredientList").prepend("<li>" + ingredient + "<li>");
            $(".expandBtn").text("Expand for " + searchedFood + " Ingredients");
        };

    });

    };


    // Nutrition Search
    /*var nutritionSearch = "dragon%20fruit";
    var api_id = "186ab126";
    var app_key = "be84bbda46e01041f055652ea7ba013d";
    var queryURL = "https://api.edamam.com/api/nutrition-data?ingr=" + nutritionSearch + "&app_id=186ab126&app_key=be84bbda46e01041f055652ea7ba013d";
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log("Nutrition API");
        console.log(response);
    })*/


    // Food Database
    var foodDatabase = "olive%20oil";
    var api_id = "186ab126";
    var app_key = "be84bbda46e01041f055652ea7ba013d";
    var queryURL = "https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=" + foodDatabase + "&app_id=186ab126&app_key=be84bbda46e01041f055652ea7ba013d";
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log("----------------------------------------")
        console.log("Food Database", response);
        console.log("----------------------------------------")
    })

});
