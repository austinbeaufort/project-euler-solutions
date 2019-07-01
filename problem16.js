const h = require('home-on-the-range');

let largeNumber = String(BigInt(2**1000));

function addDigitsOfLargeNumber(largeNumber) {
    let numArray = largeNumber.split('');
    let answer = h.add(numArray);
    console.log(answer);
}

addDigitsOfLargeNumber(largeNumber);