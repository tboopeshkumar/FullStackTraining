const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports.tradeSchema = new Schema({
  tradeDate :  {type: Date, default: Date.now },
  commodity : String,
  side: String,
  quantity : Number,
  price : Number,
  counterParty : String,
  location : String,
  tradeStatus : String,
  currency : String
  // comments: [{ body: String, date: Date }],
  // date: { type: Date, default: Date.now },
  // hidden: Boolean,
  // meta: {
  //   votes: Number,
  //   favs: Number
  // }
});