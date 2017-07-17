//Import Models for Names, GeneralFormmater
var nameModel = require('../models/name');
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


module.exports.fetchOne = function(name){
    return new Promise(function(resolve, reject){
        nameModel.find({FullName: new RegExp(name, 'i')}).exec(function(err, data){
                                if (err) {
                                    reject(err);                                   
                                }
                                else{
                                       formatFetchedData.formatNames(data)
                                        .then(function(returnedData){ 
                                            resolve(returnedData);
                                        })
                                        .catch(function(err){
                                            reject(err);
                                        });
                                }
        });
    });
}