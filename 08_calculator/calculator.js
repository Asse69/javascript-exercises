const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((initial, current) => current + initial, 0);
};

const multiply = function(arr) {
  return arr.reduce((init, current) => current*init, 1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	let prod = 1;
  while (a >= 1) {
    prod *= a--;
  }
  return prod;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
