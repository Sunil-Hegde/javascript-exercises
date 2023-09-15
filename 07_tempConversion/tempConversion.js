const convertToCelsius = function(temp) {
  let finalTemp = (5/9)*(temp-32);
  return Math.round(10*finalTemp)/10;
};

const convertToFahrenheit = function(temp) {
  let finalTemp = 32 + temp*(9/5);
  return Math.round(10*finalTemp)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
