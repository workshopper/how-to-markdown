const fs = require('fs');
const path = require('path');
const remark = require('remark');
const html = require('remark-html');
const express = require('express');
const chokidar = require('chokidar');
const open = require('openurl').open;

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
    const filename = args[0];

    const processor = remark().use(html);
    const watcher = chokidar.watch(filename);
    const server = express();

    let result = '';

    watcher.on('add', (path) => {
      console.log(`${path} has been added.`);
      result = processor.process(fs.readFileSync(filename, 'utf8'))
    });

    watcher.on('change', (path) => {
      console.log(`${path} has been changed.`);
      result = processor.process(fs.readFileSync(filename, 'utf8'))
    });

    watcher.on('unlink', (path) => {
      console.warn(`${path} has been unlinked.`);
      done();
    });

    watcher.on('error', (path) => {
      console.error(`${path} has been errored.`);
      done();
    });

    server.get('*', (req, res) => {
      res.send(result);
    });

    server.listen(3000, () => {
      console.log(`
        File is served on http://localhost:3000/
        Hit Ctrl+C to exit.
      `);
      open('http://localhost:3000/');
    });
  };

  return exports;
};
