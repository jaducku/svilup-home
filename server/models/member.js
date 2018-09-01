const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    seq:Number,
    name:String,
    intro:String,
    section:String,
    imgUrl:String
});

module.exports = mongoose.model('Member',memberSchema);