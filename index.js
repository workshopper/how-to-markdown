const workshopper = require('workshopper-adventure');
const path = require('path');

HowToMarkdown.addAll(require('./menu.json').map(function (problem) {
  return {
    name: problem,
    fn: function () {
      var p = problem.toLowerCase().replace(/\s/g, '-');
      var dir = require('path').join(__dirname, 'problems', p);
      return require(dir);
    }
  }
}))

module.exports = HowToMarkdown;
