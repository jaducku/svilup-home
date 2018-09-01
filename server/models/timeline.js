const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timelineSchema = new Schema({
    seq:Number,
    title:String,
    subtitle:String,
    content:String,
    cDate:String
});

module.exports = mongoose.model('Timeline',timelineSchema);