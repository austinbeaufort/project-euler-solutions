h = require('home-on-the-range');

function sumPrimesBelowTwoMillion() {
    let primeArray = h.getPrimeArray(2, 2000000);
    let total = h.add(primeArray);
    return total;
}

console.log(sumPrimesBelowTwoMillion());