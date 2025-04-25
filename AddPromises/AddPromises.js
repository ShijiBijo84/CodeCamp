
var addTwoPromises = async (promise1, promise2) => {
    const [val1, val2] = await Promise.all([promise1, promise2]);
    return val1 + val2;
}

const promise1 = new Promise(resolve => setTimeout(() => resolve(10), 100))
const promise2 = new Promise(resolve => setTimeout(() => resolve(20), 200));

addTwoPromises(promise1, promise2).then(res => console.log(res))