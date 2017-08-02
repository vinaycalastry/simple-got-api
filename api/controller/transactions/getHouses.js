var houseModel = require('../../models/house');
var formatFetchedHouses = require('../general/formatFetchedHouses');

//Fetch All Houses from Mongo
module.exports.fetchAll = function(order, limit){
        
    return new Promise(function(resolve, reject){
        var findQuery = {};
        

        houseModel.find(findQuery).limit(limit).sort({ House: order}).exec(function(err, data){
                                if (err) {
                                    reject(err);                                   
                                }
                                else{
                                       formatFetchedHouses.formatHouses(data)
                                        .then(function(returnedData){ 
                                            resolve(returnedData);
                                        })
                                        .catch(function(err){
                                            console.log(err);
                                            reject(err);
                                        });
                                }
        });
    });
}

//Fetch by HouseName
module.exports.fetchAllBySearch = function(name, value, queryParameter, queryParameterValue){
    return new Promise(function(resolve, reject){
        var findQuery = {};
        if (name === "House" && queryParameter === ""){
            findQuery.House = new RegExp(value, 'i');
        }
        else if (name === "House" && queryParameter === "Type"){
            findQuery.House = new RegExp(value, 'i');
            findQuery.Type = new RegExp(queryParameterValue, 'i');
        }      
        else {
            reject("Invalid Request Parameter: "+ name);
        }
        
            
        houseModel.find(findQuery).exec(function(err, data){
                                if (err) {
                                    reject(err);                                   
                                }
                                else{
                                        formatFetchedHouses.formatHouses(data)
                                        .then(function(returnedData){ 
                                            resolve(returnedData);
                                        })
                                        .catch(function(err){
                                            console.log(err);
                                            reject(err);
                                        });
                                }
        });
    });
}

//Fetch One using ID
module.exports.fetchById = function(value){
    return new Promise(function(resolve, reject){
        houseModel.findById(value).exec(function(err, data){
            
                                if (err) {
                                    reject(err);                                   
                                }
                                else{
                                        var list = [];
                                        list.push(data);
                                        formatFetchedHouses.formatHouses(list)
                                        .then(function(returnedData){ 
                                            resolve(returnedData[0]);
                                        })
                                        .catch(function(err){
                                            console.log(err);
                                            reject(err);
                                        });
                                }
        });
    });
}