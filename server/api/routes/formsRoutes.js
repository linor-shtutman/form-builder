'use strict';

module.exports = function (app) {
  const forms = require('../controllers/formsController');

  app.route('/forms')
    .get(forms.get_forms)
    .post(forms.create_form);
};