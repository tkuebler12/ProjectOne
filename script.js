$(document).ready(function () {

    // Run Recipe search on this click event
    $(".recipe-search-btn").on("click", function(event){
        event.preventDefault();
        $(".popout-recipe").removeClass("hide")
        var searchedFood = $('.RecipeSearchInput').val().trim();
        recipeResponse(searchedFood);
    });

    function clearRecipe(){
        $(".ingredientList").empty();
    };

    clearRecipeSearch();


    function recipeResponse(food){

    // Recipe Search
    // var api_id = "cdc2f678";
    // var app_key = "2ccb5f96df52396e065d26ba486dcc0a";
    var queryURL = "https://api.edamam.com/search?q=" + food + "&app_id=cdc2f678&app_key=2ccb5f96df52396e065d26ba486dcc0a";
      
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){

        var ingredientListObj = response.hits[0].recipe.ingredients;

        for (var i = 0; i < ingredientListObj.length; i++) {
            var recipeName = response.q;
            var ingredient = ingredientListObj[i].text;
            $(".recipe-name").text(recipeName);
            $(".collapsible-recipe-header").text(recipeName);
            $(".ingredientList").prepend("<li>" + ingredient + "<li>");
            $(".expandBtn").text("Expand for " + food + " Ingredients");
        };

    });

    clearRecipe();

    };

    // Food Database
    var foodDatabase = "olive%20oil";
    // var api_id = "186ab126";
    // var app_key = "be84bbda46e01041f055652ea7ba013d";
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