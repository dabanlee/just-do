//
// camelize test
//

var test = require('tape');
var camelize = require('../../packages/camelize');

test('determine the string was camelized', function (t) {
    var result1 = camelize('_hello_world');
    var result2 = camelize('_hello-world');
    var result3 = camelize('-hello_world');
    var result4 = camelize('-hello-world');

    t.plan(1);
    t.equal(result1, 'HelloWorld');

    t.plan(2);
    t.equal(result2, 'HelloWorld');

    t.plan(3);
    t.equal(result3, 'HelloWorld');

    t.plan(4);
    t.equal(result4, 'HelloWorld');

    t.end();
});
