// require express and path
var express = require("express");
var path = require("path");

// app variable tells ndoe that we are creating an express server
var app = express();

// setting initial port to use later in our listener
var PORT = process.env.PORT || 8080;

// setting up Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// Router Section

// the router section is basically the mapping logic to show the program how to route the files.

// what all do i need to requre? answer: js files

require("./data/friends.js");
require("./routing/apiRoutes.js");
require("./routing/htmlRoutes.js");



// Listener

// shows a console log that states that the server is started

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});