const updateInventory = (curInv, newInv) => {
    //Create a map for existing inventory
    const newInventory = new Map();
    for (const [count, item] of curInv) {
        newInventory.set(item, count);
    }

    // Check for existing items and update, 
    // add new if not exists
    for (const [count, item] of newInv) {
        const existingCount = newInventory.get(item) || 0;
        newInventory.set(item, count + existingCount);
    }

    //Convert map as array as ouput expected as array
    //Sort alphabetically
    return [...newInventory.entries()].map(([item, count]) =>
        [count, item]).sort((a, b) => a[1].localeCompare(b[1]));

}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
//expected result:[[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]