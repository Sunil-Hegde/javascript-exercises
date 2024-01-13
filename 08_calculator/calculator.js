const add = function(a , b) {
	return a+b;
};

const subtract = function(a , b) {
	return a-b;
};

const sum = function(array) {
	var sum = 0;
  for(let i =0; i<array.length; i++){
    sum+=array[i];
  }
  return sum;
};

const multiply = function(array) {
  var product = 1;
  for(let i =0; i<array.length; i++){
    product*=array[i];
  }
  return product;
};

const power = function(a , b) {
	var powerProd = 1;
  if (b === 0){
    return powerProd;
  } else {
    for(var i = 0; i < b; i++){
      powerProd*= a;
    }
    return powerProd;
  }
};

const factorial = function(number) {
  var fact = 1;
  if (number === 0 || number === 1){
    return fact;
  } else {
    fact = number * factorial(number-1);
    return fact;
  }
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
