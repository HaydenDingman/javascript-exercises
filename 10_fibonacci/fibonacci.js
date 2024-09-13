const fibonacci = function(number) {
    if (+number === 0) return 0;
    if (+number < 0) return "OOPS";
    let lastNumber = 1;
    let currentNumber = 1;
    for (let i = 1; i < +number; i++) {
        let temp = lastNumber;
        lastNumber = currentNumber;
        currentNumber = temp + currentNumber;
    }
    return lastNumber;
};

// Do not edit below this line
module.exports = fibonacci;
