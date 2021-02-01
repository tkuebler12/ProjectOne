$(document).ready(function () {
// <<<<<<< HEAD
// <<<<<<< HEAD
    ​
   
    ​
    });
    
// =======
​
    // Food Database API
​
    var ingr = ""
    // var APP_ID = "cdc2f678"
    // var APP_KEY = "2ccb5f96df52396e065d26ba486dcc0a -"
    var queryURL = 'https://api.edamam.com/search?app_id=cdc2f678&app_key=2ccb5f96df52396e065d26ba486dcc0a&q=pizza';
​
// =======


    // Recipe Search
    var searchedFood = "pizza";
    var api_id = "cdc2f678";
    var app_key = "2ccb5f96df52396e065d26ba486dcc0a";
    var queryURL = "https://api.edamam.com/search?q=" + searchedFood + "&app_id=cdc2f678&app_key=2ccb5f96df52396e065d26ba486dcc0a";
// >>>>>>> 9d50e98d46d0c2458679c09427741a64af67799d
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log("Recipe Search");
        console.log("Searched Text", response.q)
        console.log(response);
    })


    // Nutrition Search
    var nutritionSearch = "dragon%20fruit";
    var api_id = "186ab126";
    var app_key = "be84bbda46e01041f055652ea7ba013d";
    var queryURL = "https://api.edamam.com/api/nutrition-data?ingr=" + nutritionSearch + "&app_id=186ab126&app_key=be84bbda46e01041f055652ea7ba013d";
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log("Nutrition API");
        console.log(response);
    })


    // Food Database
    var foodDatabase = "olive%20oil";
    var api_id = "186ab126";
    var app_key = "be84bbda46e01041f055652ea7ba013d";
    var queryURL = "https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=" + foodDatabase + "&app_id=186ab126&app_key=be84bbda46e01041f055652ea7ba013d";
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log("Food Database");
    
        console.log("Search Text", response.text);
        var name = response.text;
        console.log("----------------------------------------")
        console.log(name);
        console.log("Nutritents", response.parsed[0].food.nutrients);
        console.log("Measurements", response.hints);
        console.log("Main 'Response'", response);
        console.log("----------------------------------------")
    })

});
// >>>>>>> cab7e69aac971f8ac2ea8621f78e2d2e9e99790d
