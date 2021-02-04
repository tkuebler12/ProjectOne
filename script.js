$(document).ready(function () {

    // Recipe's Local Storage Information
    function saveRecipe (newRecipe){
        var recipeArr = JSON.parse(localStorage.getItem("recipeArray")) || [];
        recipeArr.push(newRecipe);
        localStorage.setItem("recipeArray", JSON.stringify(recipeArr));
    }

    // Run Recipe search on this click event
    $(".recipe-search-btn").on("click", function (event) {
        event.preventDefault();
        $(".popout-recipe").removeClass("hide")
        var searchedFood = $('.RecipeSearchInput').val().trim();
        recipeResponse(searchedFood);
        saveRecipe(searchedFood);
    });

    // Clear recipe when a new one is searched
    function clearRecipe() {
        $(".ingredientList").empty();
    };

    // Recipe Search API Call
    function recipeResponse(food) {
        // var api_id = "cdc2f678";
        // var app_key = "2ccb5f96df52396e065d26ba486dcc0a";
        var queryURL = "https://api.edamam.com/search?q=" + food + "&app_id=cdc2f678&app_key=2ccb5f96df52396e065d26ba486dcc0a";

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {

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

    // Food Database's Local Storage Information
    function saveFoodNutr (newFoodNutr){
        var nutritionArr = JSON.parse(localStorage.getItem("nutritionArray")) || [];
        nutritionArr.push(newFoodNutr);
        localStorage.setItem("nutritionArray", JSON.stringify(nutritionArr));
    }

    // Run Food Database search on this click event
    $(".nutrition-search-btn").on("click", function (event) {
        event.preventDefault();
        $(".popout-nutrition").removeClass("hide")
        var nutritionSearch = $('.nutrition-search-input').val();
        foodDatabaseResponse(nutritionSearch);
        saveFoodNutr(nutritionSearch);
    });

    // Clear food facts when a new one is searched
    function clearNutrition() {
        $("#newText").empty();
    };

    // Food Database API Call
    function foodDatabaseResponse(food) {
        // var api_id = "186ab126";
        // var app_key = "be84bbda46e01041f055652ea7ba013d";
        var queryURL = "https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=" + food + "&app_id=186ab126&app_key=be84bbda46e01041f055652ea7ba013d";
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {

            var carbP = $("<p>");
            var energyP = $("<p>");
            var fatP = $("<p>");
            var fiberP = $("<p>");
            var proteinP = $("<p>");
            var Carbs = response.parsed[0].food.nutrients.CHOCDF;
            var Energy = response.parsed[0].food.nutrients.ENERC_KCAL;
            var Fat = response.parsed[0].food.nutrients.FAT;
            var Fiber = response.parsed[0].food.nutrients.FIBTG;
            var Protein = response.parsed[0].food.nutrients.PROCNT;
            var nutFoodSearched = response.text;
    
                $(".nutrition-name").text(nutFoodSearched);
                $("#newText").append(carbP);
                $(carbP).text("Carbs: " + Carbs + " g");
                $("#newText").append(energyP);
                $(energyP).text("Energy: " + Energy + " kcal");
                $("#newText").append(fatP);
                $(fatP).text("Fat: " + Fat + " g");
                $("#newText").append(fiberP);
                $(fiberP).text("Fiber: " + Fiber + " g");
                $("#newText").append(proteinP);
                $(proteinP).text("Protein: " + Protein + " g");
        });
        clearNutrition();

    };
});