'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Field = new Schema({
    label: String,
    name: String,
    type: String,
})

const FieldSchema = new Schema({
    form_id: { type: Schema.Types.ObjectId, ref: 'forms' },
    fields: [Field]
})

module.exports = mongoose.model('formFields', FieldSchema);