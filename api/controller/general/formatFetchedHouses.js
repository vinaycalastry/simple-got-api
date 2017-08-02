//Format the received Data from Mongo to actual Result

//Format Fetched houses
module.exports.formatHouses = function(houses){
    return new Promise(function(resolve, reject){
        var housesFormatted = [];
        
        if(houses.length==0){
            reject("No data received");
        }
        else{
            for (var house of houses){
                var newhouse = {
                    Id: house._id,
                    House: house.House,
                    Type: house.Type,
                    Status: house.Status,
                    Sigil: house.Sigil,
                    Words: house.Words,
                    CommonSaying: house.CommonSaying,
                    Allegiance: house.Allegiance,
                    Founder: house.Founder,
                    DateOfFounding: house.DateOfFounding,
                    Age: house.Age,
                    Religion: house.Religion,
                    Lord: house.Lord,
                    AncestralSeat: house.AncestralSeat,
                    Regions: house.Regions,
                    Titles: house.Titles,
                    Vassals: house.Vassals,
                    Image: house.Image,
                    WikiPage: house.WikiPage
                };
                housesFormatted.push(newhouse);
            }
            resolve(housesFormatted);
        }

    });
}

