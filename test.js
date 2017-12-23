var test = require('tap').test;
var httpMethods = require('./');

test('should have length more than 5 and should have put, get etc methods', function(t) {
  t.true(httpMethods.length > 5);
  ['get', 'put', 'post'].forEach(function(method) {
    t.true(httpMethods.indexOf(method) > -1);
  });

  t.end();

});
