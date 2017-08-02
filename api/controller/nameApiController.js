//Import Transactions
var trGetNames = require('./transactions/getNames');
var API_QUERY_LIMIT = parseInt(process.env.API_QUERY_LIMIT);

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
            limit = API_QUERY_LIMIT || 100;
        }
        //set order to Asc if not set, else use the request
        if(req.query.order === "asc" || !req.query.order){
            order = 1 ;
        }
        else{
            order = -1;
        }        
        //Call Transaction - getNames -> FetchAll
        var getNames = trGetNames.fetchAll(order, limit, "House", req.query.House);
        getNames.then(function(data){
            res.json(data);
        }).catch(function(err){
            console.log(err);
            res.status(404).json({error:err});
        });      
}

//getNamebyName
module.exports.getNamebyName = function(req, res){
    if(req.params.Name && req.query.House){
        var param = "FullName";
        var paramValue = req.params.Name;
        var queryParam = "House";
        var queryParamValue = req.query.House;
    }
    else if(!req.params.Name && req.query.House){
        var param = "";
        var paramValue = "";
        var queryParam = "House";
        var queryParamValue = req.query.House;
    }
    else if (req.params.Name && !req.query.House){
        var param = "FullName";
        var paramValue = req.params.Name;
        var queryParam = "";
        var queryParamValue = "";
    }
    else{
        res.status(400).json({error:"Invalid Request"});
    }
    
    var getName = trGetNames.fetchAllBySearch(param, paramValue, queryParam, queryParamValue);
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