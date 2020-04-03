'use strict';

const mongoose = require('mongoose');
const Form = mongoose.model('forms');
const Fields = mongoose.model('formFields');
const Submissions = mongoose.model('submissions');

exports.get_forms = async (req, res) => {
  try {
    const forms = await Form.find({});
    res.json({ forms });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.create_form = async (req, res) => {
  try {
    const newForm = await new Form({
      name: req.body.formName
    }).save()

    await new Fields({
      form_id: newForm._id,
      fields: req.body.fields
    }).save();

    await new Submissions({
      form_id: newForm._id
    }).save()

    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
};