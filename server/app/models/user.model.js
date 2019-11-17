'use strict';

let mongoose = require('bluebird').promisifyAll(require('mongoose'));
let Schema = mongoose.Schema;

let User = new Schema({
    name : String,
    user_name : String,
    password : String
},
{
    timestamps : true
})
module.exports = mongoose.model('User', User);