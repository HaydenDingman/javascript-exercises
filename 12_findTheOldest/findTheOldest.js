const findTheOldest = function(array) {
    return array
            .sort((a, b) => {
                return (getAge(a.yearOfBirth, a.yearOfDeath)) - (getAge(b.yearOfBirth, b.yearOfDeath))
            })
            .pop()
    
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
