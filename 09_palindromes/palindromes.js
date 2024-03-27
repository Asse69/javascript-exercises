const palindromes = function (string) {
    //self-made implementation using filter, lowercase and no reverse.
    let first = Array.from(string.toLowerCase());
    let arr = first.filter((val, index, array) => ((array[index].toString().charCodeAt(0) >= 97 && array[index].toString().charCodeAt(0) <= 122) || (array[index].toString().charCodeAt(0) <= 57 && array[index].toString().charCodeAt(0) >= 48)));


    //if even fx length 10, -1 / 2 gives last index to check. If odd, fx 11, -1 / 2 gives 5 last index to check.
    for (let i = 0; i <= (arr.length-1)/2; i++) {
        if (arr[i] != arr[arr.length-1-i]) {
            return false;
        }
    }
    return true;

    
};

// Do not edit below this line
module.exports = palindromes;
