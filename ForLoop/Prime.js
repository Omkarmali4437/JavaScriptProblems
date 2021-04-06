var number;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`Enter a number`, value => {
    console.log(`Number is ${value}!`)
    number=parseInt(value);
    checkPrime(number);
    readline.close()
  })

function checkPrime(number){
    var flag=0;
    for(i=2;i<=number/2;i++){
        if(number%i==0){
            flag=1;
        }
    }
    if(flag == 1){
        console.log("It is not a prime number: "+number);
    }
    else{
        console.log("It is a prime number: "+number);
    }
}
