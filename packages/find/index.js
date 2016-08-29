/**
 * type checking
 *
 * @param {Object} object
 * @param {Function} callback
 */

function find(object, callback) {
    var result, keys, key, i;

    result = {};
    keys = Object.keys(object);
    i = keys.length;

    while (i--) {
        key = keys[i];
        if (callback(key, object[key])) {
            result[key] = object[key];
        }
    }
    
    return result;
}

module.exports = find;
