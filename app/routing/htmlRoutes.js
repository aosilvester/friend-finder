// Dependencies

var path = require("path");


// Routing

module.exports = function(app) {
    // code below handles when a user visits a page, and what html content to show to visitor

    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // below app.get is for if route does not match, will default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};