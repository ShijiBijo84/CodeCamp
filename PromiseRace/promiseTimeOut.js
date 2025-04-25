

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
    //args passed through limited function
    return async function (...args) {
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject("Time Limit Exceeded"), t)
        );

        const functionPromise = fn(...args); // Run the async function

        // Wait for either the function to resolve or the timeout to reject
        return Promise.race([functionPromise, timeoutPromise]);
    }
};


const fn = async (a, b) => {
    await new Promise(res => setTimeout(res, 80));
    return a + b;
};

const limitedFn = timeLimit(fn, 100);

limitedFn(5, 10)
    .then((res) => console.log(res))
    .catch(e => console.log(e));