const palindromes = function (string) {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz1234567890";
    const cleanedString = string
                            .toLowerCase()
                            .split('')
                            .filter((char) => alphanumeric.includes(char))
                            .join('');

    let reversedString = cleanedString
                                    .split('')
                                    .reverse()
                                    .join('');
    if (cleanedString === reversedString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
