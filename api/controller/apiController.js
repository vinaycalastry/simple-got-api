//Import Transactions
var trGetNames = require('./transactions/getNames');

/* ROUTES */

//Main route for testing
module.exports.root = function(req, res){
    res.status(200)
    .json({message: "Welcome to GoT reference API for Names, Places and Things in the Game of Thrones universe"});
}

/* Routes for Names - getone, getall, post etc */
//GET NAMES functions
//getAllNames
module.exports.getAllNames = function(req, res){
        var order,limit;
        //set limit to 100 if none set
        if(req.query.limit){
            limit = parseInt(req.query.limit);
        }else{
            limit = 100;
        }
        //set order to Asc if not set, else use the request
        if(req.query.order === "asc" || !req.query.order){
            order = 1 ;
        }
        else{
            order = -1;
        }        
        //Call Transaction - getNames -> FetchAll
        var getNames = trGetNames.fetchAll(order, limit);
        getNames.then(function(data){
            res.json(data);
        }).catch(function(err){
            console.log(err);
            res.status(404).json({error:err});
        });      
}

//getNamebyName
module.exports.getNamebyName = function(req, res){
    var getName = trGetNames.fetchAllBySearch('FullName', req.params.Name);
    getName.then(function(data){
                res.json(data);
            }).catch(function(err){
                console.log(err);
                res.status(404).json({error:err});
            });
}



//getNamebyId
module.exports.getNamebyId = function(req, res){
    var getName = trGetNames.fetchById(req.params.Id);
    getName.then(function(data){
                res.json(data);
            }).catch(function(err){
                console.log(err);
                res.status(404).json({error:err});
            });
}