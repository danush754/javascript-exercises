const repeatString = function(stringVal,repeatNumber) {

    if(repeatNumber < 0){
        return "ERROR"
    }else{
        let outputString = ""
    for (let index = 0; index < repeatNumber; index++) {
        outputString += stringVal
    }

    return outputString
    }

};

// Do not edit below this line
module.exports = repeatString;
