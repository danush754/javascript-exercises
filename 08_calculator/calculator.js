const add = function(num1,num2) {

  let sum = num1 + num2

  return sum
	
};

const subtract = function(num1,num2) {
	
  let sum = num1 - num2

  return sum
};

const sum = function(value) {
  let len = value.length
  if(len > 0){
    let sum = 0
    for(let index = 0;index < len;index++){
      sum += value[index]
    }
    return sum
  }else{
    return 0
  }
	
};

const multiply = function(value) {
  let len = value.length
  if(len > 0){
    let sum = 1
    for(let index = 0;index < len;index++){
      sum *= value[index]
    }
    return sum
  }else{
    return 0
  }

};

const power = function(num1, num2) {

  let sum  = num1 ** num2
  return sum
	
};

const factorial = function(value) {
  if(value == 0 || value == 1){
    return 1
  }else{
    let sum = 1
    for(let index = value; index >=1; index--){
      sum *= index
    }
    return sum
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
