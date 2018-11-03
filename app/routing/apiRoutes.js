// should contain two routes
// 1. a GET route with the url "/api/friends"
// 2. a POST routes "/api/friends".

// var path = require('path');


// load the data from friends.js
var friendsArray= require("../data/friends.js");




console.log("Connecting to APIRoutes.js page");
// Routing

module.exports = function(app) {
    // API GET requests
    // this code shows how the app handles when a user visits the page. it will show a JSON of the data in the table on the page.
    
    
    // will work okay, server has to run in order for this to work
    app.get('/api/friends', function(req, res) {
        res.json(friendsArray);
        
    });

    app.post('/api/friends', function(req, res) {
        console.log("app.post to friends api attempted");
        // console.log(friendsArray);
        var totalDifference = 0;
        var user = req.body;
        var bestMatch = {
            "name": "",
            "photo": "",
            "scoresDifference": 999
    }


        for (i =0; i < friendsArray.length; i++){
            var thisFriend = friendsArray[i];
            totalDifference = 0;

            for (k = 0;  k < user.scores.length; k++){
                var thisDifference = Math.abs(user.scores[k] - thisFriend.scores[k]);  
                totalDifference = thisDifference + totalDifference;
            };

           if (bestMatch.scoresDifference > totalDifference){
               bestMatch.name = thisFriend.name;
               bestMatch.photo = thisFriend.photo;
               bestMatch.scoresDifference = totalDifference;
           };

        }
        


        friendsArray.push(req.body);
        res.json(bestMatch);
    });
}