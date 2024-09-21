const reverseString = function(sentance) {
    let revString = '';
    let numOfChar = sentance.length;
    for(i=numOfChar-1;i>=0;i--){
        revString+=sentance[i];
    }
    return revString;

};

// Do not edit below this line
module.exports = reverseString;
