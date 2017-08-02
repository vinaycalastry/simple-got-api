//Import Transactions
var trGetHouses = require('./transactions/getHouses');
var API_QUERY_LIMIT = parseInt(process.env.API_QUERY_LIMIT);

/* ROUTES */
/* Routes for Names - getone, getall, post etc */
//GET NAMES functions
//getAllNames
module.exports.getAllHouses = function(req, res){
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
        //Call Transaction - getHouses -> FetchAll
        var getHouses = trGetHouses.fetchAll(order, limit);
        getHouses.then(function(data){
            res.json(data);
        }).catch(function(err){
            console.log(err);
            res.status(404).json({error:err});
        });      
}

//getHousebyName
module.exports.getHousebyName = function(req, res){
    if(req.params.House && req.query.Type){
        var param = "House";
        var paramValue = req.params.House;
        var queryParam = "Type";
        var queryParamValue = req.query.Type;
    }
    else if(!req.params.House && req.query.Type){
        var param = "";
        var paramValue = "";
        var queryParam = "Type";
        var queryParamValue = req.query.Type;
    }
    else if (req.params.House && !req.query.Type){
        var param = "House";
        var paramValue = req.params.House;
        var queryParam = "";
        var queryParamValue = "";
    }
    else{
        res.status(400).json({error:"Invalid Request"});
    }
    
    var getHouse = trGetHouses.fetchAllBySearch(param, paramValue, queryParam, queryParamValue);
    getHouse.then(function(data){
                res.json(data);
            }).catch(function(err){
                console.log(err);
                res.status(404).json({error:err});
            });
}



//getHousebyId
module.exports.getHousebyId = function(req, res){
    var getHouse = trGetHouses.fetchById(req.params.Id);
    getHouse.then(function(data){
                res.json(data);
            }).catch(function(err){
                console.log(err);
                res.status(404).json({error:err});
            });
}