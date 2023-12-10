const reverseString = function(string) {
    reverseBuilder = "";
    for (const letter of string) {
        reverseBuilder = letter + reverseBuilder;
    }
    return reverseBuilder;
};

// Do not edit below this line
module.exports = reverseString;
