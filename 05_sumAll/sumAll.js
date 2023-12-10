const sumAll = function() {
    if ((typeof(arguments[0]) != "number") || (typeof(arguments[1]) != "number")) return "ERROR";
    if (arguments[0] < 0 || arguments[1] < 0) return "ERROR";
    if (arguments[0] < arguments[1]) {
        low = 0;
        high = 1;    
    } else {
        low = 1;
        high = 0;
    }
    let sum = 0;
    start = arguments[low];
    end = arguments[high];
    /*
    sum = (end*(end+1)/2) - ((start-1)*(start)/2);
    return sum; */
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

//4, 6
// 1 + 2 + 3 + 4 + 5 + 6 = 6*7/2

// Do not edit below this line
module.exports = sumAll;
