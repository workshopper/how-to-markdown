require('colors');
const diff = require('diff');

module.exports = function (attempt, solution) {
  // Compare solution and attempt results
  const parts = diff.diffWords(attempt, solution);
  // return diff
  return parts.map( part =>
    part.added   ? part.value['red'] :
    part.removed ? part.value['green'] : part.value
  ).join('');
}
