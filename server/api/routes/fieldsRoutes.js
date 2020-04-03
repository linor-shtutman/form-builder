'use strict';

module.exports = function (app) {
  const fields = require('../controllers/fieldsController');

  app.route('/formFields/:formId')
    .get(fields.get_form_fields)
};