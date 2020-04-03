'use strict';

module.exports = function (app) {
  const submissions = require('../controllers/submissionsController');

  app.route('/submissions/:formId')
    .get(submissions.get_form_submissions)
    .put(submissions.update_form_submissions);
};