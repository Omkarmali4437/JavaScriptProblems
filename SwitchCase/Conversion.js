var number;
var choice;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`Enter 1 to convert Feet to inch , 2 Feet to meter , 3 Inch to feet , 4 Meter to feet `, value => {
    console.log(`Choice is ${value}!`)
    choice=parseInt(value);
    readline.question(`Enter number for conversion `, value => {
        console.log(`Number is ${value}!`)
        number=parseInt(value);
        unitConversion(choice,number);
        readline.close()
    })
  })

var meterconversion=3
var inchconversion=12
  

function unitConversion(choice,number){
    var con;
    switch(choice){
        case 1:
            con=number*inchconversion;
            console.log("Feet to inch conversion is: "+con);
            break;
        case 2:
            con=number/meterconversion;
            console.log("Feet to meter conversion is: "+con);
            break;
        case 3:
            con=number/inchconversion;
            console.log("Inch to feet conversion is: "+con);
            break;
        case 4:
            con=number*meterconversion;
            console.log("Meter to feet conversion is: "+con);
            break;
        default:
            console.log("Wrong Input");
            break;
    }
}
