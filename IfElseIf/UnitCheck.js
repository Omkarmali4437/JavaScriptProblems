var number;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`Enter a number `, value => {
    console.log(`Number is ${value}!`)
    number=value;
    checkValue(number);
    readline.close()
  })

function checkValue(number){
    if(number > 0 && number < 10){
        console.log("Units");
    }else if(number >= 10 && number < 99){
        console.log("Tens");
    }else if(number >= 100 && number < 999){
        console.log("Hundreds");
    }else if(number >= 1000 && number < 9999){
        console.log("Thusands");
    }else if(number >= 10000 && number < 99999){
        console.log("Ten Thousands");
    }else{
        console.log("Wrong Input");
    }
}
