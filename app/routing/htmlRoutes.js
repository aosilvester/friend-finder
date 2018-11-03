// Dependencies

var path = require("path");

console.log("connecting to htmlroutes.js page")
// Routing

module.exports = function(app) {
    // code below handles when a user visits a page, and what html content to show to visitor

    app.get("/", function(req, res) {
        console.log("going to home page");

        res.sendFile(path.join(__dirname, "../public/home.html"));

    });

    app.get("/survey", function(req, res){
        console.log("going to survey page");

        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // below app.get is for if route does not match, will default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });
};