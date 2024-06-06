const reverseString = function(words) {
    // let reversedString = []

    // let lengthOfWords = words.length

    // for(let index = 0 ; index < lengthOfWords;index++){
    //     reverseString[index] = words[index]
    // }
 
    // let strReversedString =  reverseString.toString(reversedString.reverse())

    return words.split('').reverse().join('')

};

// Do not edit below this line
module.exports = reverseString;
