const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//schema for student details
const users_schema =new Schema({}, { strict: false });

module.exports =  mongoose.model('users', users_schema);