const removeFromArray = function() {
    inputArray = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < inputArray.length; j++) {
            if (inputArray[j] == arguments[i] && typeof(inputArray[j]) == typeof(arguments[i])) {
                inputArray[j] = "removed";
                break;
            }
        }
    }

    returnArray = [];
    for (const num of inputArray) {
        if (num != "removed") {
            returnArray.push(num);
        }
    }

    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
