var number;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`Enter a number`, value => {
    console.log(`Number is ${value}!`)
    number=parseInt(value);
    findFactorial(number);
    readline.close()
  })

function findFactorial(number){
    var fact=1;
    for(i=2;i<=number;i++){
        fact=fact*i;
    }
    console.log("Factorial of "+number+" is: "+fact);
}
