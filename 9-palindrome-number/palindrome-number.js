/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    const rev = str.split('').reverse().join("")
    return (str === rev)
};