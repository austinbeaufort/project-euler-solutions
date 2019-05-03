



function findSmallestMultiple() {
    let divideArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let found = false;
    let answer = 2;
    while (found === false) {
        found = divideArray.every(item => {
            return answer % item === 0;
        });
        if (found === true) return answer;
        answer++;
    }
    return answer;
}

console.log(findSmallestMultiple());