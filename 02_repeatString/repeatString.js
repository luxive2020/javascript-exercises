const repeatString = function(stringValue, num) {
    let result = '';
    if (Math.sign(num) === -1){
        result+= 'ERROR'
    }
    
    for( let i = 0; i<num; i++){
        result+= stringValue;
    }
    return result;
    };

// Do not edit below this line
module.exports = repeatString;
