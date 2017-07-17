# simple-got-api
GoT API to get names, places and things from the Game of Thrones universe

To get the API working, create a MongoDB db
Next, create a creds.js file in your project in the root folder.

module.exports.CREDS = {
    mongouri : "mongodb://<<mongouser>>:<<mongopwd>>@<<mongouri>>/gotapi",
    mongouser : "<<mongouser>>",
    mongopwd : "<<mongopwd>>"
 };
