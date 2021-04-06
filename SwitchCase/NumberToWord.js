var number;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`Enter number between 0 to 9 `, value => {
    console.log(`Number is ${value}!`)
    number=parseInt(value);
    Conversion(number);
    readline.close()
  })

function Conversion(number){
    switch(number){
        case 0:
            console.log("Zero");
            break;
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        case 3:
            console.log("Three");
            break;
        case 4:
            console.log("Four");
            break;
        case 5:
            console.log("Five");
            break;
        case 6:
            console.log("Six");
            break;
        case 7:
            console.log("Seven");
            break;
        case 8:
            console.log("Eight");
            break;
        case 9:
            console.log("Nine");
            break;
        default:
            console.log("Wrong Input");
            break;
    }
}