var factors=[];
var counter=0;

function findPrimeFactors(number){
    var isPrime;
    for(i=2;i<=number;i++){
        if(number%i == 0){
            isPrime=1;
            for(j=2;j<=i/2;j++){
                if(i%j == 0){
                    isPrime=0;
                    break;
                }
            }
            if(isPrime == 1){
                factors[counter++]=i;
            }
        }
    }
    return factors;
}

var digit = require("readline-sync");
var num = digit.question("enter the Single digit no: ");
console.log(findPrimeFactors(num));