const sumAll = function(num1,num2) {

    let sum = 0;

    let startVal = num1
    let endVal = num2

    if(num1 > num2){
        startVal = num2
        endVal = num1
    }

    if(num1 >= 0 && num2 >= 0 && typeof(num1) == "number" && typeof(num2)
    == "number"){
        for(let index = startVal;index <= endVal;index ++){
            sum += index
        }
    
        return sum    
    }else{
        return "ERROR"
    }
    
    
};

// Do not edit below this line
module.exports = sumAll;
