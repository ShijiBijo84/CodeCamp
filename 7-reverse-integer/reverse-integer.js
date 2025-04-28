/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const minPow = -Math.pow(2, 31)
    const maxPow = Math.pow(2, 31) - 1
    if (x > maxPow || x < minPow) return 0
    const sign = Math.sign(x)
    const intString = Math.abs(x).toString()
    let rev = intString.split('').reverse().join("")
    const reversedNum = rev * sign
    if (reversedNum < minPow || reversedNum > maxPow) {
        return 0;
    }
    return reversedNum
};