const reverseString = function(inputString) {
    const stringArray = []
    for (let char of inputString) {
        stringArray.unshift(char);
    }
    
    return stringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
