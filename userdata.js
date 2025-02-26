const e = require('express');
const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/firstmongo`);

const userSecma= new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    age: Number
});

module.exports=mongoose.model('user',userSecma)