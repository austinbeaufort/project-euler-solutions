function findLargestPalindrome() {
    let palindromeArray = findAllPalindromes();
    let largestPalindrome = Math.max(...palindromeArray);
    return largestPalindrome;
}

function findAllPalindromes() {
    let array = findLargeNumbers();
    let palindromeArray = [];
    for (let item of array) {
        let numArray = String(item).split('');
        let numToCheck = Math.floor(numArray.length / 2);
        checkIfPalindrome(numArray, numToCheck, palindromeArray, item);
    }
    return palindromeArray;
}

// --- HELPER FUNCTION FOR FINDALLPALINDROMES()
function checkIfPalindrome(numArray, numToCheck, palindromeArray, item) {
    for (let i = 0; i <= numToCheck; i++) {
        if (numArray[i] == numArray[numArray.length - i - 1]) {
            if (i == numToCheck) {
                palindromeArray.push(item);
            }
            continue;
        }
        break;
    }
}
// -------------------------------------------------- END HELPER FUNCTION

function findLargeNumbers() {
    let array = [];

    for(let i = 100; i <= 999; i++) {
        for(let j = i; j <= 999; j++) {
            array.push(i * j);
        }
    }
    return array;
}

console.log(findLargestPalindrome());