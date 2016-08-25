/**
 * transform strings to camel case
 *
 * @param {String} string
 */

function camelize(string) {
    if (typeof string !== 'string') {
        console.warn('you can only camelize a string.');
        return;
    }
    return string.replace(/[_.-](\w|$)/g, function (match, $) {
        return $.toUpperCase();
    });
}

module.exports = camelize;
