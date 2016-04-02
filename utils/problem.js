const path            = require('path');
const troubleshooting = require('./troubleshooting');
const diff            = require('./diff');

module.exports = (dirname) => {

  "use strict";

  const exports = {};

  exports.init = function (workshopper) {
    // Get lang code
    const lang = workshopper.i18n.lang();

    this.problem =
      { file: path.join(dirname, `${lang}.md`) };
    this.solution =
      { file: path.join(dirname, `solution`, `${lang}.md`) };
    this.solutionPath =
      path.resolve(dirname, `solution`, `solution.md`);
    this.troubleshooting =
      path.join(__dirname, '..', 'i18n', 'troubleshooting', `${lang}.md`)
  };

  exports.verify = function (args, done) {
    done(false);
  };

  exports.run = function (args, done) {
    done();
  };

  return exports;
};
