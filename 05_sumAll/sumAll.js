const sumAll = function(numA,numB) {
    let sumAll=0;
    if(numA<0 || numB<0 || typeof numA !== 'number' || typeof numB !== 'number'){
        return "ERROR"
    }else if(numA<=numB){
        for(let i =numA;i<=numB;i++){
            sumAll+=i;
        }
    }else{
        for(let i =numB;i<=numA;i++){
            sumAll+=i;
        }
    }
    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
