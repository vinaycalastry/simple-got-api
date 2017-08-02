var gotNameApiController = require('../controller/nameApiController.js');
var gotHouseApiController = require('../controller/houseApiController.js');


module.exports = function(app){
    //The Welcome route
    app.route('/')
    .get(gotNameApiController.root);

    /*Routes for Names*/

    //Route for all names
    app.route('/names')
    .get(gotNameApiController.getAllNames);

    //Route for names based on Name
    app.route('/names/:Name')
    .get(gotNameApiController.getNamebyName);

    //Route for names based on ID
    app.route('/names/id/:Id')
    .get(gotNameApiController.getNamebyId);

    /*Routes for Houses*/

    //Route for all houses
    app.route('/houses')
    .get(gotHouseApiController.getAllHouses);

    //Route for House based on HouseName
    app.route('/houses/:House')
    .get(gotHouseApiController.getHousebyName);

    //Route for names based on ID
    app.route('/houses/id/:Id')
    .get(gotHouseApiController.getHousebyId);

}