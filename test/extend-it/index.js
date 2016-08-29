//
// extend test
//

var expect = require('expect.js');
var extend = require('../../packages/extend-it');

var source = {
    just: 'just',
};

describe('Extend Test', function () {
    describe('Shallow Extend Test', function () {
        it('should shallow extend object', function () {
            source = {
                just: 'just',
            };
            expect(extend(source)).to.eql({
                just: 'just',
            });
        });
        it('should shallow extend object', function () {
            source = {
                just: 'just',
            };
            expect(extend(source, {
                hello: 'hello',
            })).to.eql({
                just: 'just',
                hello: 'hello',
            });
        });
        it('should shallow extend object', function () {
            source = {
                just: 'just',
            };
            expect(extend(source, {
                hello: 'hello',
            }, {
                world: 'world',
            })).to.eql({
                just: 'just',
                hello: 'hello',
                world: 'world',
            });
        });
        it('should shallow extend object', function () {
            source = {
                just: 'just',
            };
            expect(extend(source, {
                hello: {
                    world: 'world',
                }
            }, {
                hello: {
                    hi: 'hi',
                },
            })).to.eql({
                just: 'just',
                hello: {
                    hi: 'hi',
                },
            });
        })
    });
    describe('Deep Extend Test', function () {
        it('should deep extend object', function () {
            source = {
                just: 'just',
            };
            expect(extend(true, source, {
                hello: 'hello',
            })).to.eql({
                just: 'just',
                hello: 'hello',
            });
        });
        it('should deep extend object', function () {
            source = {
                just: 'just',
            };
            expect(extend(true, source, {
                hello: {
                    world: 'world',
                },
            })).to.eql({
                just: 'just',
                hello: {
                    world: 'world',
                },
            });
        });
        it('should deep extend object', function () {
            expect(extend(true, source, {
                hello: {
                    hi: 'hi',
                },
            })).to.eql({
                just: 'just',
                hello: {
                    world: 'world',
                    hi: 'hi',
                },
            });
        })
    });
});
