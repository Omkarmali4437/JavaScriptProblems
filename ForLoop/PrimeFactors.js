var number;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`Enter a number`, value => {
    console.log(`Number is ${value}!`)
    number=parseInt(value);
    findPrimeFactors(number);
    readline.close()
  })

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
                console.log(i);
            }
        }
    }
}