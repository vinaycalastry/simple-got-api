//Require imports: Mongoose for DB, Creds for mongoose
var mongoose = require('mongoose');
var creds = require('../creds');

//Replace mongoose promise with Node
mongoose.Promise = global.Promise;

//Connect to MongoDB
mongoose.connect(creds.CREDS.mongouri);

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






