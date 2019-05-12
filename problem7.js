const h = require('home-on-the-range');

function findNthPrime(number) {
    let count = 0;
    let rangeArray = h.range(2, 50000000);
    for (let item of rangeArray) {
        let isPrime = true;
        for (i = 2; i <= Math.sqrt(item); i++){
            if(item % i === 0 && item != i){
               isPrime = false;
            }
         }
        if (isPrime === true) {
            count++;
            if (count === number) {
                return item;
            }
        }
    }
    return primeArray;
}

console.log(findNthPrime(10001));
