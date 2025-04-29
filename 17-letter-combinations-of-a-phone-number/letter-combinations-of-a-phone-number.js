/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return []
    const digitsMap = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    }
    if (digits.length === 1) return digitsMap[digits].split('')
    let letterArray = []
    for (const digit of digits) {
        let letters = digitsMap[digit]
        letterArray.push(letters.split(''))
    }
    const result = letterArray.reduce((accum, arr, index) => {
        if (index === 0) return arr
        let r = []
        for (let i = 0; i < accum.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                r.push(accum[i] + arr[j])
            }
        }
        return r
    })
    return result
};