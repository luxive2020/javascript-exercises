const reverseString = function(string) {
let myString = string;
let mySplitString = myString.split('');
let myReverseArray = mySplitString.reverse();
let myReverseString = myReverseArray.join('')
return myReverseString;
};

// Do not edit below this line
module.exports = reverseString;
