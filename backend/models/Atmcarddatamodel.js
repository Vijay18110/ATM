const mongoose = require('mongoose');
const schema = mongoose.Schema({
    cardtype: String,
    bankname: String,
    number: Number,
    pin: Number,
    banktype: String,
    expiry: String,
    name: String,
    cardnumber: String,
    bankcard: String,
    amount: String,

})
const atmmodel = new mongoose.model("atmmodel", schema);
module.exports = atmmodel;