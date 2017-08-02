//Require imports: Mongoose for DB, Creds for mongoose
var mongoose = require('mongoose');

var MONGO_URI = process.env.MONGO_URI;

//Replace mongoose promise with Node
mongoose.Promise = global.Promise;

//Connect to MongoDB
mongoose.connect(MONGO_URI);

//Create a Schema
var houseSchema = new mongoose.Schema({
    House: String,
    Type: String,
    Status: String,
    Sigil: String,
    Words: Array,
    CommonSaying: String,
    Allegiance: Array,
    Founder: String,
    DateOfFounding: Array,
    Age: String,
    Religion: String,
    Lord: Array,
    AncestralSeat: String,
    Regions: Array,
    Titles: Array,
    Vassals: Array,
    Image: String,
    WikiPage: String
});

module.exports = mongoose.model('House', houseSchema);
