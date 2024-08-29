const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let fullString = "";
    for (let counter = 0; counter < num; counter++) {
        fullString += string;
    }
    return fullString;
};

// Do not edit below this line
module.exports = repeatString;
