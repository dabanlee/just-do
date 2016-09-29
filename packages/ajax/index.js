/**
 * ajax request.
 *
 * @param {Object} option
 */

function ajax(option) {
    var xhr = new XMLHttpRequest(),
        type = option.type.toUpperCase() || 'GET',
        url = option.url || '',
        data = option.data,
        success = option.success || function success() {},
        error = option.error || function error() {},
        params;

    params = (function (data) {
        var params = '', prop;
        for (prop in data) {
            if (data.hasOwnProperty(prop)) {
                params += prop + '=' + data[prop] + '&';
            }
        }
        params = params.slice(0, params.length - 1);
        return params;
    })(data);

    if (!url) console.error('url must be specified.');

    if (type === 'GET') url += url.indexOf('?') === -1 ? '?' + params : '&' + params;

    xhr.open(type, url);

    if (type === 'POST') xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.send(params ? params : null);

    xhr.onload = function () {
        if (xhr.status === 200) {
            success(JSON.parse(xhr.response));
        } else {
            error(JSON.parse(xhr.response));
        }
    };
}

module.exports = ajax;
