let number = 600851475143;

function findLargestPrimeFactor() {
    let primeArray = getPrimeFactors(number);
    let largestPrime = Math.max(...primeArray);
    return largestPrime;
}

function getPrimeFactors(number) {
    let primeArray = [];
    let i = 2;
    while(i < 1000000) {
        if (number % i === 0) {
            primeArray.push(i);
            number /= i;
            i = 2;
        }
        else {
            i++;
        }
    }
    return primeArray;
}

console.log(findLargestPrimeFactor());

console.log(getPrimeFactors(145));