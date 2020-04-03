'use strict';

const mongoose = require('mongoose');
const Forms = mongoose.model('forms');
const Submissions = mongoose.model('submissions');
const Fields = mongoose.model('formFields');

exports.update_form_submissions = async (req, res) => {
    try {
        await Submissions.updateOne({ form_id: req.params.formId },
            { $push: { submissions: req.body.values } },
            { new: true }
        )

        await Forms.updateOne({ _id: req.params.formId },
            { $inc: { number_of_submissions: 1 } },
            { new: true }
        )

        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.get_form_submissions = async (req, res) => {
    try {
        const form = await Forms.findOne({ _id: req.params.formId });
        const formFields = await Fields.findOne({ form_id: req.params.formId });
        const formSubmissions = await Submissions.findOne({ form_id: req.params.formId });
        res.json({ name: form.name, fields: formFields.fields, submissions: formSubmissions.submissions });
    } catch (err) {
        res.status(500).send(err);
    }
};