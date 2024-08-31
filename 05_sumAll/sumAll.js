const sumAll = function (firstNumber, secondNumber) {
    let sum = 0;
    if (firstNumber > 0 && secondNumber > 0 && Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
        if (firstNumber > secondNumber) {
            let swapValue = firstNumber;
            firstNumber = secondNumber;
            secondNumber = swapValue;
        }
        for (let i = firstNumber; i <= secondNumber; i++) {
            sum += i;
        }
    } else {
        return "ERROR";
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
