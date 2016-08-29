/**
 * get url query
 *
 * @param {String} name
 */

function getQuery(name) {
    var queryRegExp = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'),
        queryString = location.search.substr(1).match(queryRegExp);
    if(queryString != null) {
        return unescape(queryString[2]);
    }
    return null;
}

module.exports = getQuery;
