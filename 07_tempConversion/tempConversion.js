const convertToCelsius = function(degreesF) {
  let degreesC = (degreesF - 32) / (9 / 5);
  return degreesC = Math.round(degreesC * 10) / 10;
  
};

const convertToFahrenheit = function(degreesC) {
  let degreesF = (degreesC * (9 / 5)) + 32;
  return degreesF = Math.round(degreesF * 10) / 10; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
