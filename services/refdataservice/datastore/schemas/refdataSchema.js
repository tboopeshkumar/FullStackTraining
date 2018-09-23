const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports.refDataSchema = new Schema({
    id:{ type:Number, required : true},
    code:{ type : String, required : true},
    description : String
});

``