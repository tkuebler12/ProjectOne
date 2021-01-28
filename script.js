<<<<<<< HEAD
var queryURL = "https://api.edmunds.com/api/editorial/v3/makes/{honda}/models/{accord}/years/{2020}/expertcontent?api_key={e62194363dmsh3cc1238e4b3eee1p1b8ab4jsn101d84f87af9}"

ajax({
    URL: queryURL,
    method: GET,
})
.then(function(response){
    console.log(response);

});
=======
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
>>>>>>> bf723d860f06b1ab115928b898c82f062315ea37
