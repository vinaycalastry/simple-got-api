//Import Models for Names, GeneralFormmater
var nameModel = require('../../models/name');
var formatFetchedData = require('../general/formatFetchedData');

module.exports.fetchAll = function(order, limit){
    return new Promise(function(resolve, reject){
                nameModel.find({}).limit(limit).sort({ FullName: order}).exec(function(err, data){
                                if (err) {
                                    reject(err);                                   
                                }
                                else{
                                       formatFetchedData.formatNames(data)
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
module.exports.fetchAllBySearch = function(name, value){
    return new Promise(function(resolve, reject){
        var findQuery = {};
        if (name === "FullName"){
            findQuery.FullName = new RegExp(value, 'i');
        }
        else {
            reject("Invalid Request Parameter: "+name);
        }
        
            
        nameModel.find(findQuery).exec(function(err, data){
                                if (err) {
                                    reject(err);                                   
                                }
                                else{
                                        formatFetchedData.formatNames(data)
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

//Fetch using Mongo ID
module.exports.fetchById = function(value){
    return new Promise(function(resolve, reject){
        console.log(value);
        nameModel.findById(value).exec(function(err, data){
            
                                if (err) {
                                    reject(err);                                   
                                }
                                else{
                                        var list = [];
                                        list.push(data);
                                        formatFetchedData.formatNames(list)
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