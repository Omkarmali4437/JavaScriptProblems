var number;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`Enter a number`, value => {
    console.log(`Number is ${value}!`)
    number=parseInt(value);
    checkHarmonic(number);
    readline.close()
  })

function checkHarmonic(number){
    var harmonic=0;
    for(i=1;i<=number;i++){
        harmonic+=1/i;
    }
    console.log(harmonic);
}
