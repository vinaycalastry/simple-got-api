//Import Models for Names, GeneralFormmater
var nameModel = require('../../models/name');
var formatFetchedNames = require('../general/formatFetchedNames');

module.exports.fetchAll = function(order, limit, queryParameter, queryParameterValue){
        
    return new Promise(function(resolve, reject){
        var findQuery = {};
        if (queryParameter === "House"){
            findQuery.House = new RegExp(queryParameterValue, 'i');
        }
        else if (queryParameter === ""){
            findQuery = {};
        }
        else {
            reject("Invalid Query Parameter: "+ queryParameter);
        }

        nameModel.find(findQuery).limit(limit).sort({ FullName: order}).exec(function(err, data){
                                if (err) {
                                    reject(err);                                   
                                }
                                else{
                                       formatFetchedNames.formatNames(data)
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

//Fetch by Name or House
module.exports.fetchAllBySearch = function(name, value, queryParameter, queryParameterValue){
    return new Promise(function(resolve, reject){
        var findQuery = {};
        if (name === "FullName" && queryParameter === ""){
            findQuery.FullName = new RegExp(value, 'i');
        }
        else if (name === "FullName" && queryParameter === "House"){
            findQuery.FullName = new RegExp(value, 'i');
            findQuery.House = new RegExp(queryParameterValue, 'i');
        }      
        else {
            reject("Invalid Request Parameter: "+ name);
        }
        
            
        nameModel.find(findQuery).exec(function(err, data){
                                if (err) {
                                    reject(err);                                   
                                }
                                else{
                                        formatFetchedNames.formatNames(data)
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
        nameModel.findById(value).exec(function(err, data){
            
                                if (err) {
                                    reject(err);                                   
                                }
                                else{
                                        var list = [];
                                        list.push(data);
                                        formatFetchedNames.formatNames(list)
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