// should contain two routes
// 1. a GET route with the url "/api/friends"
// 2. a POST routes "/api/friends".

var path = require('path');


// load the data from friends.js
var friendData = require("../data/friends.js");


// Routing

module.exports = function(app) {
    // API GET requests
    // this code shows how the app handles when a user visits the page. it will show a JSON of the data in the table on the page.
    
    
    // will work okay, server has to run in order for this to work
    app.get("")
}