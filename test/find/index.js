//
// find test
//

var expect = require('expect.js');
var find = require('../../packages/find');

let object = {
    hello: 'hello',
    onClick: 'onClick',
    onTouch: 'onTouch',
    just: null,
    a: 0,
    b: 5,
    c: 7,
    d: 6,
    e: 8,
};

describe('Find Test', function () {
    it('should find that key === hello', function () {
        expect(find(object, function (key, value) {
            return key === 'hello';
        })).to.eql({
            hello: 'hello',
        });
    });
    it('should find that typeof value === number', function () {
        expect(find(object, function (key, value) {
            return typeof value === 'number';
        })).to.eql({
            a: 0,
            b: 5,
            c: 7,
            d: 6,
            e: 8,
        });
    });
    it('should find that key start with on', function () {
        expect(find(object, function (key, value) {
            return key.slice(0, 2) === 'on';
        })).to.eql({
            onClick: 'onClick',
            onTouch: 'onTouch',
        });
    });
    it('should find that value > 0 && value < 8', function () {
        expect(find(object, function (key, value) {
            return value > 0 && value < 8;
        })).to.eql({
            b: 5,
            c: 7,
            d: 6,
        });
    });
});
