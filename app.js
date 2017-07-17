//Require dependencies
//Express for web framework
var express = require('express');
var apiController = require('./controller/apiController');

//Initialize express
var app = express();
app.set('port', (process.env.PORT || 5000));

//Listen for server
app.listen(app.get('port'), function(){
    console.log("Running on: "+app.get('port')+" port");
});

//FireController
apiController(app);