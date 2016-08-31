/**
 * get url query
 *
 * @param {String} name
 * @param {String} search
 */

function getQuery(name, search) {
    if (!search) {
        return null;
    }
    while (search && search[0] === '?') {
        search = search.substr(1);
    }
    var queryRegExp = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'),
        queryString = search.match(queryRegExp);
    if(queryString != null) {
        return unescape(queryString[2]);
    }
    return null;
}

module.exports = getQuery;
