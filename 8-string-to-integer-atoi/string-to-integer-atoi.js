/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let trimmedText = s.trim()
    if (!trimmedText.length) return 0

    let result = ''
    let sign = ''
    let index = 0
    let foundChar = false;

    const isNumber = (char) => /^[0-9]$/.test(char)

    while ((index < trimmedText.length) && !foundChar) {
        //keep sign for later
        if (index === 0 && (trimmedText[index] === '-' || trimmedText[index]==='+')) sign = trimmedText[index]
        //seperate number
        else if (isNumber(trimmedText[index])) result = result + trimmedText[index]
        else foundChar = !foundChar
        index++
    }
    if (!result.length) return 0

    //check if number is 32-bit
    const minPow = -Math.pow(2, 31)
    const maxPow = Math.pow(2, 31) - 1
    let parsedNumber = parseInt(sign + result)
    if (parsedNumber < minPow) return minPow
    if (parsedNumber > maxPow) return maxPow
    return parsedNumber
};