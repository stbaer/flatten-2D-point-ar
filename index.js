/**
 * @param {Array} ar
 * @returns {Array}
 */
module.exports = function (ar) {

    var i = -1;
    var n = ar.length;
    var ret = [];

    while (++i < n) {
        ret.push(ar[i][0], ar[i][1]);
    }
    return ret;

};