

var timeLimit = function (fn, t) {
    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject("Time Limit Exceeded"), t)
    );
    return Promise.race([timeoutPromise, fn]);
}

const fn =
    async (a, b) => { await new Promise(res => setTimeout(res, 120)); return a + b; }

timeLimit(fn(5, 10), 10).then((res) => console.log(res)).
    catch(e => console.log(e))

