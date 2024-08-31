const leapYears = function(year) {
    if (year % 4 === 0 && (year % 400 === 0 || year % 100 != 0)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

// years % 4 = 0
// years % 400 = 0
// years % 100 != 0