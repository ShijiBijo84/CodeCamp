/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) return s;
    const rev = s.split("").reverse().join("")
    if (s === rev) return s
    let longest = ''
    for (let i = 0; i < s.length; i++) {
        findLongest(i, i)
        findLongest(i, i + 1)
    }
    function findLongest(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > longest.length) {
                longest = s.substring(left, right + 1)
            }
            left--;
            right++;
        }
    }
    return longest
};