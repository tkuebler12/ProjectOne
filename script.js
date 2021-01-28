$(document).ready(function () {
​
    // Food Database API
​
    var ingr = ""
    // var APP_ID = "cdc2f678"
    // var APP_KEY = "2ccb5f96df52396e065d26ba486dcc0a -"
    var queryURL = 'https://api.edamam.com/search?app_id=cdc2f678&app_key=2ccb5f96df52396e065d26ba486dcc0a&q=pizza';
​
    $.ajax({
        URL: queryURL,
        method: "GET",
    })
    .then(function (response) {
        console.log(response);
​
    });
​
});
