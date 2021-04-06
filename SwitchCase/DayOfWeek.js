var day;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`Enter day between 1 to 7 `, value => {
    console.log(`Day is ${value}!`)
    day=parseInt(value);
    checkDay(day);
    readline.close()
  })

function checkDay(day){
    switch(day){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thrusday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Wrong Input");
            break;
    }
}