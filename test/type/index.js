//
// type test
//

var expect = require('expect.js');
var type = require('../../packages/type');

describe('Type Test', function () {
    describe('Undefined Test', function () {
        it('should equal to undefined', function () {
            expect(type()).to.equal('undefined');
        })
        it('should equal to undefined', function () {
            expect(type(undefined)).to.equal('undefined');
        });
    });

    describe('Null Test', function () {
        it('should equal to null', function () {
            expect(type(null)).to.equal('null');
        });
    });

    describe('String Test', function () {
        it('should equal to string', function () {
            expect(type('')).to.equal('string');
        })
        it('should equal to string', function () {
            expect(type('hello')).to.equal('string');
        });
    });

    describe('Number Test', function () {
        it('should equal to number', function () {
            expect(type(0)).to.equal('number');
        });
    });

    describe('Boolean Test', function () {
        it('should equal to boolean', function () {
            expect(type(true)).to.equal('boolean');
        })
        it('should equal to boolean', function () {
            expect(type(false)).to.equal('boolean');
        });
    });

    describe('Object Test', function () {
        it('should equal to object', function () {
            expect(type({})).to.equal('object');
        });
    });

    describe('Array Test', function () {
        it('should equal to array', function () {
            expect(type([])).to.equal('array');
        });
    });

    describe('Function Test', function () {
        var hello = function () {
            console.log('hello');
        }
        it('should equal to function', function () {
            expect(type(hello)).to.equal('function');
        });
    });

    describe('Regular Expression Test', function () {
        it('should equal to regexp', function () {
            expect(type(/\./)).to.equal('regexp');
        });
    });
});
