/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    function findMatch(i, j) {
        if (j === p.length) return i === s.length

        const first = (i < s.length && (s[i] === p[j] || p[j] === '.'))
        if (j + 1 < p.length && p[j + 1] === '*') {

            return findMatch(i, j + 2) || (first && findMatch(i + 1, j))
        } else {
            return first && findMatch(i + 1, j + 1)
        }

        return match
    }

    return findMatch(0, 0)
};