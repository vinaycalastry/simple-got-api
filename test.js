var nameModel = require('./models/name');

var heroes = [
    {
    FullName: "Jon Snow",
    House: "Stark",
    Kingdom: "The North",
    Titles: [
                "Lord Commander of the Night's Watch",
                "Lord Snow"
            ],
    Parents: [
                "Rhaegar Targaryen",
                "Lyanna Stark"
             ],
    Siblings: [
                 "Sansa Stark",
                 "Arya Stark",
                 "Robb Stark",
                 "Bran Stark",
                 "Rickon Stark"
              ],
    Alive: true,
    Birth: "281 AL",
    Death: "",
    Image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/15/09/jon-snow.jpg",
    WikiPage: "http://gameofthrones.wikia.com/wiki/Jon_Snow"
    },
    {
    FullName: "Arya Stark",
    House: "Stark",
    Kingdom: "The North",
    Titles: [
                "No One"
            ],
    Parents: [
                "Eddard Stark",
                "Catelyn Stark"
             ],
    Siblings: [
                "Jon Snow",
                "Sansa Stark",
                "Bran Stark",
                "Robb Stark",
                "Rickon Stark"
              ],
    Alive: true,
    Birth: "287 AL",
    Death: "",
    Image: "http://i.ndtvimg.com/i/2016-05/game-of-thrones_640x480_81464688743.jpg",
    WikiPage: "http://gameofthrones.wikia.com/wiki/Arya_Stark"
    }];


for (hero of heroes){
    var addHero = nameModel(hero).save(function(err, data){
    if (err) throw err;
});
console.log("Done");
}


/*

nameModel.findOne({}).exec(function(err, data){
    if (err) throw err;
    
    console.log(data);
});



*/