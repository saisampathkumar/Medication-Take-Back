const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//schema for student details
const events_schema =new Schema({}, { strict: false });

module.exports =  mongoose.model('events', events_schema);