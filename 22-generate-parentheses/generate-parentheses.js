/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result=[]
    const repeat=(current, open, close)=>{
        if(current.length===2*n){
            result.push(current);
            return;
        }
        if(open<n){
            repeat(current+'(', open+1, close)
        }
        if(close<open){ 
            repeat(current+')', open, close+1)
        }

    }
    repeat('',0,0)
    return result
};