/**
 * type checking
 *
 * @param {Object} object
 * @param {Function} callback
 */

function map(object, callback) {
    var result, keys, key, i;

    result = {};
    keys = Object.keys(object);
    i = keys.length;

    while (i--) {
        key = keys[i];
        result[key] = callback(key, object[key])
    }

    return result;
}

module.exports = map;
