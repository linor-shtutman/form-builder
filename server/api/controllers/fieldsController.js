'use strict';

const mongoose = require('mongoose');
const Fields = mongoose.model('formFields');
const Forms = mongoose.model('forms');

exports.get_form_fields = async (req, res) => {
  try {
    const form = await Forms.findOne({ _id: req.params.formId });
    const formFields = await Fields.findOne({ form_id: req.params.formId });
    res.json({ name: form.name, fields: formFields.fields });
  } catch (err) {
    res.status(500).send(err);
  }
};
