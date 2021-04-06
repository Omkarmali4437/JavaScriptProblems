var day;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`Enter day between 1 to 7 `, value => {
    console.log(`Day is ${value}!`)
    day=value;
    checkDay(day);
    readline.close()
  })

function checkDay(day)
{
    if(day == 1){
        console.log("Monday");
    }else if(day ==  2){
        console.log("Tuesday");
    }else if(day == 3){
        console.log("Wednesday");
    }else if(day == 4){
        console.log("Thrusday");
    }else if(day == 5){
        console.log("Friday");
    }else if(day == 6){
        console.log("Saturday");
    }else if(day == 7){
        console.log("Sunday");
    }else{
        console.log("Wrong Input");
    }
}
