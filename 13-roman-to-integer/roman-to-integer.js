/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let result = 0
    const romMap = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]])
    let prevValue = 0
    for (let i = s.length - 1; i >= 0; i--) {
        let val = romMap.get(s[i])
        let sign = val < prevValue ? -1 : 1
        result += val * sign
        prevValue = val
    }
    return result
};