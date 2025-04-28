/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = ''
    const romValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const romNums = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

    for (let i = 0; i < romValues.length; i++) {
        while (num >= romValues[i]) {
            roman += romNums[i]
            num -= romValues[i]
        }
    }

    return roman
};