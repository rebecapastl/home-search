const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HomeSchema = new Schema({
    citu:{type:String, required:true}
});

const Home = mongoose.model("Home", HomeSchema);

module.exports = Home;