//
// camelize test
//

var expect = require('expect.js');
var camelize = require('../../packages/camelize');

describe('Camelize Test', function () {
    it('should equal to _hello_world', function () {
        expect(camelize('_hello_world')).to.equal('HelloWorld');
    });
    it('should equal to _hello-world', function () {
        expect(camelize('_hello-world')).to.equal('HelloWorld');
    });
    it('should equal to -hello_world', function () {
        expect(camelize('-hello_world')).to.equal('HelloWorld');
    });
    it('should equal to -hello-world', function () {
        expect(camelize('-hello-world')).to.equal('HelloWorld');
    });
});
