//Import Transactions
var trGetNames = require('../transactions/getNames');

//ROUTES
module.exports = function(app){
    /* Test ROOT location */
    app.get('/', function(req,res){
        res.status(200).json({message: "Welcome to GoT reference API"});
    });

    /* NAMES routes for getname, addname, deletename and updatename go here */

    //GET all names
    app.get('/getname', function(req, res){
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
        var getAllNames = trGetNames.fetchAll(order, limit);
        getAllNames.then(function(data){
            res.json(data);
        }).catch(function(err){
            console.log(err);
            res.status(404).json({error:err});
        });      
    });

    //GET specific Name
    app.get('/getname/:name', function(req, res){
            var getName = trGetNames.fetchOne(req.params.name);
            getName.then(function(data){
                res.json(data);
            }).catch(function(err){
                console.log(err);
                res.status(404).json({error:err});
            });
        });

}        