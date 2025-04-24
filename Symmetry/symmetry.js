
const symmetry = (...args) => {
    const diff = (arr1, arr2) => {
        const result = [];
        const set1 = new Set(arr1);
        const set2 = new Set(arr2)
        for (let val of set1) {
            if (!set2.has(val)) result.push(val)
        }
        for (let val of set2) {
            if (!set1.has(val)) result.push(val)
        }
        return result;
    }
    return args.reduce((accum, curr) => diff(accum, curr))
}
const result = symmetry([1, 2, 3, 4, 8, 9], [3, 4]);

const listItems = result.map(item => `<li>${item}</li>`).join("");
document.getElementById('root').innerHTML = `<ul>${listItems}</ul>`