// Dependecies
var express = require('express');
var bodyParser = require('body-parser');

// Express App initialization
var app = express();
var PORT = process.env.PORT || 3000;

// bodyParser set as middleware for Express App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('app/public'));

// Routes
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// Setting up server listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});