var http = require('http');
var lowercase = require('lower-case');

module.exports = http.METHODS.map(function(method) {
  return lowercase(method);
});
