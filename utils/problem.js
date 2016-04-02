const path            = require('path');
const troubleshooting = require('./troubleshooting');
const diff            = require('./diff');

module.exports = (dirname, getArgs) => {

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
    // Get argumetns which will be passed into script
    if (typeof getArgs === 'function') {
      args = args.concat(getArgs());
    }

    done(false);
  };

  exports.run = function (args, done) {
    // Get argumetns which will be passed into script
    if (typeof getArgs === 'function') {
      args = args.concat(getArgs());
    }

    done();
  };

  return exports;
};
