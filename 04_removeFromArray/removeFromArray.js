const removeFromArray = function(arr,...removeVal) {

    for(let val of removeVal){
        while(arr.includes(val)){
            let indexOfRemoveVal  = arr.indexOf(val)
            arr.splice(indexOfRemoveVal,1)
        }
    }

    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
