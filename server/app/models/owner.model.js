'use strict';

let mongoose = require('bluebird').promisifyAll(require('mongoose'));
let Schema = mongoose.Schema;

let Owner = new Schema({
    name : String,
    email : String,
    state : String,
    city : String,
    Employee : [
        {
            name : String,
            email : String
        }
    ]
},
{
    timestamps : true
})
module.exports = mongoose.model('Owner', Owner);