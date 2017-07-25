var gotapiController = require('../controller/apiController.js');

module.exports = function(app){
    //The Welcome route
    app.route('/')
    .get(gotapiController.root);

    /*Routes for Names*/

    //Routes for all names
    app.route('/names')
    .get(gotapiController.getAllNames);

    //Routes for names based on Name
    app.route('/names/:Name')
    .get(gotapiController.getNamebyName);

    //Routes for names based on ID
    app.route('/names/id/:Id')
    .get(gotapiController.getNamebyId);

}