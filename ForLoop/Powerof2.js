var number;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`Enter a number`, value => {
    console.log(`Number is ${value}!`)
    number=parseInt(value);
    checkPower(number);
    readline.close()
  })

function checkPower(number){
    var p=1;
    var q=2;
    for(i=1;i<=number;i++){
        p=p*q;
        console.log(p);
    }
}

