/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var parenthesisArray = []
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(': {
                parenthesisArray.push(')')
                break
            }
            case '{': {
                parenthesisArray.push('}')
                break
            }
            case '[': {
                parenthesisArray.push(']')
                break
            }
            default: {
                if (parenthesisArray.pop() !== s[i])
                    return false
            }
        }
    }
    return parenthesisArray.length === 0
};