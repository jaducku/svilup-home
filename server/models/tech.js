const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const techSchema = new Schema({
    seq:Number,
    name:String,
    url:String,
    foundation:String,
    imgUrl:String,
    type:String,
    desc:String
});

module.exports = mongoose.model('Tech',techSchema);