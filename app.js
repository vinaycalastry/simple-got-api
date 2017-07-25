//Require dependencies

//Load env variables
var dotenv = require('dotenv').config();

//Express for web framework
var express = require('express');
var routes = require('./api/routes/routes');
var compression = require('compression');


//Initialize express
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(compression());

//Listen for server
app.listen(app.get('port'), function(){
    console.log("Running on: "+app.get('port')+" port");
});

//FireController
routes(app);