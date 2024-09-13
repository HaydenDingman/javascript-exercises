const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	return array.reduce((acc, current) => acc + current, 0);
};

const multiply = function(array) {
  return array.reduce((acc, current) => acc * current);
};

const power = function(a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
      result *= a;
  };
  return result;
}

const factorial = function(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
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
