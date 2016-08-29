//
// map test
//

var expect = require('expect.js');
var map = require('../../packages/map-it');

let object = {
    a: 0,
    b: 5,
    c: 7,
    d: 6,
    e: 8,
};

describe('Map Test', function () {
    it('should map object correctly', function () {
        expect(map(object, function (key, value) {
            return value * value;
        })).to.eql({
            a: 0,
            b: 25,
            c: 49,
            d: 36,
            e: 64,
        });
    });
});
