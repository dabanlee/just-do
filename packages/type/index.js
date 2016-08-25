/**
 * type checking
 *
 * @param {Any} any
 */

function type(any) {
    var class2type = {},
        type = class2type.toString.call(any),
        typeString = 'Boolean Number String Function Array Date RegExp Object Error Symbol';

    if (any == null) {
        return any + '';
    }

    typeString.split(' ').forEach(function (type) {
        class2type['[object ' + type + ']'] = type.toLowerCase();
    });

    return (
        typeof any === 'object' ||
        typeof any === 'function'
        ?
        class2type[type] || 'object'
        :
        typeof any
    );
}

module.exports = type;
