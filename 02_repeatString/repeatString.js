const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    strBuilder = "";
    while (num > 0) {
        strBuilder += string;
        num--;
    }
    return strBuilder;
};

// Do not edit below this line
module.exports = repeatString;
