//
// type test
//

var test = require('tape');
var type = require('../../packages/type');

test('determine the type of undefined', function (t) {
    var result = type();
    var resultTwo = type(undefined);

    t.plan(1);
    t.equal(result, 'undefined');

    t.plan(2);
    t.equal(resultTwo, 'undefined');

    t.end();
});

test('determine the type of null', function (t) {
    var result = type(null);

    t.plan(1);
    t.equal(result, 'null');

    t.end();
});

test('determine the type of string', function (t) {
    var result = type('');
    var resultTwo = type('hello');

    t.plan(1);
    t.equal(result, 'string');

    t.plan(2);
    t.equal(resultTwo, 'string');

    t.end();
});

test('determine the type of number', function (t) {
    var result = type(0);

    t.plan(1);
    t.equal(result, 'number');

    t.end();
});

test('determine the type of boolean', function (t) {
    var result = type(true);

    t.plan(1);
    t.equal(result, 'boolean');

    t.end();
});

test('determine the type of object', function (t) {
    var result = type({});

    t.plan(1);
    t.equal(result, 'object');

    t.end();
});

test('determine the type of array', function (t) {
    var result = type([]);

    t.plan(1);
    t.equal(result, 'array');

    t.end();
});

test('determine the type of function', function (t) {
    var hello = function () {
        console.log('hello');
    }
    var result = type(hello);

    t.plan(1);
    t.equal(result, 'function');

    t.end();
});

test('determine the type of regular expression', function (t) {
    var result = type(/\./);

    t.plan(1);
    t.equal(result, 'regexp');

    t.end();
});
