const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        if (!oldest.yearOfDeath) {
            let today = new Date();
            oldest["yearOfDeath"] = today.getFullYear();
        }
        if (!current.yearOfDeath) {
            let today = new Date();
            current["yearOfDeath"] = today.getFullYear();
        }
        if (oldest.yearOfDeath - oldest.yearOfBirth > current.yearOfDeath - current.yearOfBirth) {
            return oldest;
        } else {
            return current;
        }
    }, arr[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
