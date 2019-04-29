// Problem 2

let firstNum = 1;
let secondNum = 1;
let total = 0;


function sumEvenFibArray() {
    let evenFibArray = createEvenFibArray();
    return evenFibArray.reduce((a, b) => a + b);
}



function createEvenFibArray() {
    let fibArray = createFibArray();
    let evenFibArray = fibArray.filter(item => {
        return item % 2 === 0;
    });
    return evenFibArray;
}

function createFibArray() {
    let fibArray = [];
    fibArray.push(firstNum);
    while(true) {
        total = firstNum + secondNum;
        if (total < 4000000) {
            fibArray.push(total);
            firstNum = secondNum;
            secondNum = total;
        }
        else {
            break;
        }
    }
    return fibArray;
}

console.log(sumEvenFibArray());
