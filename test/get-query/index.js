//
// map test
//

var expect = require('expect.js');
var getQuery = require('../../packages/get-query');

var search = 'hello=hello&world=world'; // or '?hello=hello&world=world' or '?????hello=hello&world=world'

describe('Get Query Test', function () {
    it('should get the query just, and the value should be null', function () {
        expect(getQuery('hello')).to.equal(null);
        expect(getQuery('hello', '')).to.equal(null);
        expect(getQuery('just', search)).to.equal(null);
        expect(getQuery('just', '?' + search)).to.equal(null);
        expect(getQuery('just', '??' + search)).to.equal(null);
    });

    it('should get the query hello, and the value should be hello', function () {
        expect(getQuery('hello', search)).to.equal('hello');
        expect(getQuery('hello', '?' + search)).to.equal('hello');
        expect(getQuery('hello', '??' + search)).to.equal('hello');
    });

    it('should get the query world, and the value should be world', function () {
        expect(getQuery('world', search)).to.equal('world');
        expect(getQuery('world', '?' + search)).to.equal('world');
        expect(getQuery('world', '??' + search)).to.equal('world');
    });
});
