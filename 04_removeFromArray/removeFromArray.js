const removeFromArray = function(givenArray, ...argsToRemove) {
    let newArray = [];
    outer: for (let counter = 0; counter < givenArray.length; counter++) {
        for (const argument of argsToRemove) {
            console.log(argument);
            if (givenArray.at(counter) === argument){
                continue outer;
            }
        }
        newArray.push(givenArray.at(counter));
    }
    return newArray;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
