// USING MY "HOME ON THE RANGE" LIBRARY!
const h = require('home-on-the-range');

let squareList = h.range(1, 100);

function differenceOfSquareSums(sumSquares, squareSums) {
    return squareSums() - sumSquares();
}


function sumOfSquares() {
    let squaredList = squareList.map(item => item * item);
    let total = squaredList.reduce((a, b) => a + b);
    return total;
}

function squareOfSums() {
    let total = squareList.reduce((a, b) => a + b);
    return total * total;
}


console.log(differenceOfSquareSums(sumOfSquares, squareOfSums));
