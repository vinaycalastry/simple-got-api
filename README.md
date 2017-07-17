# simple-got-api
GoT API to get names, places and things from the Game of Thrones universe

To get the API working, create a MongoDB db
Next, create a creds.js file in your project in the root folder.

module.exports.CREDS = {
    mongouri : "mongodb://<<mongouser>>:<<mongopwd>>@<<mongouri>>/gotapi",
    mongouser : "<<mongouser>>",
    mongopwd : "<<mongopwd>>"
 };
 ****************************************************************************************************************************************
 
 ****************************************************************************************************************************************
 
 Working:
 =======
 NAME: fetch all, fetch one
 
 WIP:
 ====
 NAME: add, delete, update
 PLACE: fetch all, fetch one, add, delete, update
 THING: fetch all, fetch one, add, delete, update
 
 To use API:
 ==========
 Use a REST client like ARC or Postman.
 
 Fetch All:
 http://localhost:5000/getname
 
 Fetch One:
 ----------
 http://localhost:5000/getname/Jon
 

 
