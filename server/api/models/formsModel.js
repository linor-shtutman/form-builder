'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number_of_submissions: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('forms', FormSchema);