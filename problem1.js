// My Project Euler Coding Solutions //

// Problem 1.

function addMultiples(num) {
    let arrayToAdd = findMultiples(num);
    let total = arrayToAdd.reduce((a, b) => a + b);
    return total;
}

function findMultiples() {
    let multiplesArray = [];
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            multiplesArray.push(i);
        }
    }
    return multiplesArray;
}

console.log(addMultiples(1000));