//Require imports: Mongoose for DB, Creds for mongoose
var mongoose = require('mongoose');

var MONGO_URI = process.env.MONGO_URI;

//Replace mongoose promise with Node
mongoose.Promise = global.Promise;

//Connect to MongoDB
mongoose.connect(MONGO_URI);

//Create a Schema
var nameSchema = new mongoose.Schema({
    FullName: String,
    House: String,
    Origin: String,
    Culture: String,
    Religion: Array,
    Kingdom: String,
    Allegiance: Array,
    Titles: Array,
    Parents: Array,
    Siblings: Array,
    Alive: Boolean,
    Birth: String,
    Death: String,
    Image: String,
    WikiPage: String
});

module.exports = mongoose.model('Name', nameSchema);
