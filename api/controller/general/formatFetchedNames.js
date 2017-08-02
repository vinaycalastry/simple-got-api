//Format the received Data from Mongo to actual Result

//Format Fetched Names
module.exports.formatNames = function(names){
    return new Promise(function(resolve, reject){
        var namesFormatted = [];
        
        if(names.length==0){
            reject("No data received");
        }
        else{
            for (var name of names){
                var newName = {
                    Id: name._id,
                    FullName: name.FullName,
                    House: name.House,
                    Origin: name.Origin,
                    Culture: name.Culture,
                    Religion: name.Religion,
                    Kingdom: name.Kingdom,
                    Allegiance: name.Allegiance,
                    Titles: name.Titles,
                    Parents: name.Parents,
                    Siblings: name.Siblings,
                    Alive: name.Alive,
                    Birth: name.Birth,
                    Death: name.Death,
                    Image: name.Image,
                    WikiPage: name.WikiPage
                };
                namesFormatted.push(newName);
            }
            resolve(namesFormatted);
        }

    });
}

