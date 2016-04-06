const workshopper = require('workshopper-adventure');

HowToMarkdown = workshopper({
    appDir      : __dirname
  , languages   : ['en']
  , header      : require('workshopper-adventure/default/header')
  , footer      : require('workshopper-adventure/default/footer')
});

HowToMarkdown.addAll([
  "HELLO WORLD",
  "EMPHASIS",
  "LISTS"
]);

module.exports = HowToMarkdown;
