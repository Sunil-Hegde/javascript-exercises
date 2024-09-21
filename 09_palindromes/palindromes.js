const palindromes = function (string) {
    let newString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    let x = newString.length-1;
    let i = 0;
    while(i<x){
        if (newString.charAt(i) === newString.charAt(x-i)){
            i++;
        } else {
            return false;
        }
        i++;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
