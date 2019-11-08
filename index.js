const workshopper = require('workshopper-adventure');
const path = require('path');

HowToMarkdown = workshopper({
    appDir      : __dirname
  , languages   : ['en', 'zh-cn', 'it']
  , header      : require('workshopper-adventure/default/header')
  , footer      : [
      { file: path.join(__dirname, 'i18n', 'footer', '{lang}.md') }
  ]
});

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
