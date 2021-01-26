var queryURL = "https://api.edmunds.com/api/editorial/v3/makes/{honda}/models/{accord}/years/{2020}/expertcontent?api_key={e62194363dmsh3cc1238e4b3eee1p1b8ab4jsn101d84f87af9}"

ajax({
    URL: queryURL,
    method: GET,
})
.then(function(response){
    console.log(response);

});