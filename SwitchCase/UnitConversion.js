var number;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`Enter number between 0 to 9 `, value => {
    console.log(`Number is ${value}!`)
    number=parseInt(value);
    checkUnit(number);
    readline.close()
  })

function checkUnit(number){
    switch(number){
        case 1:
            console.log("Units");
            break;
        case 1e1:
            console.log("Tens");
            break;
        case 1e2:
            console.log("Hundreds");
            break;
        case 1e3:
            console.log("Thousands");
            break;
        case  1e4:
            console.log("Ten Thousands");
            break;
        default:
            console.log("Wrong Input");
            break;
    }
}
