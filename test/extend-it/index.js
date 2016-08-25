//
// extend test
//

var test = require('tape');
var extend = require('../../packages/extend-it');

extend({});
extend({}, {});
extend({}, {}, {});
extend(true, {});
extend(true, {}, {});

test('extend object', function (t) {
    var source = {
        just: 'just',
    };

    t.plan(1);
    extend(source);
    t.deepEqual(source, {
        just: 'just',
    });

    t.plan(2);
    extend(source, {
        hello: 'hello',
    });
    t.deepEqual(source, {
        just: 'just',
        hello: 'hello',
    });

    t.plan(3);
    extend(source, {
        hello: 'hello',
    }, {
        world: 'world',
    });
    t.deepEqual(source, {
        just: 'just',
        hello: 'hello',
        world: 'world',
    });

    t.plan(4);
    source = {
        just: 'just',
    };
    extend(source, {
        hello: {
            world: 'world',
        }
    }, {
        hello: {
            hi: 'hi',
        },
    });
    t.deepEqual(source, {
        just: 'just',
        hello: {
            hi: 'hi',
        },
    });

    t.end()
});

test('deep extend object', function (t) {
    var source = {
        just: 'just',
    };

    t.plan(1);
    extend(true, source, {
        hello: 'hello',
    });
    t.deepEqual(source, {
        just: 'just',
        hello: 'hello',
    });

    t.plan(2);
    extend(true, source, {
        hello: {
            world: 'world',
        },
    });
    t.deepEqual(source, {
        just: 'just',
        hello: {
            world: 'world',
        },
    });

    t.plan(3);
    extend(true, source, {
        hello: {
            hi: 'hi',
        },
    });
    t.deepEqual(source, {
        just: 'just',
        hello: {
            world: 'world',
            hi: 'hi',
        },
    });

    t.end()
});
