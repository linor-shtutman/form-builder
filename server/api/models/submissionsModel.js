'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubmissionsSchema = new Schema({
    form_id: { type: Schema.Types.ObjectId, ref: 'forms' },
    submissions: []
})

module.exports = mongoose.model('submissions', SubmissionsSchema);
