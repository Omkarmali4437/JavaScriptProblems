var month, day;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question(`Enter the Month `, value => {
    console.log(`The Month is ${value}`)
    month=value;
    readline.question(`Enter the Day `, values => {
        console.log(`The Day is ${values}`)
        day=values;
        checkDate(month, day)
        readline.close();
    })
})
function checkDate(month, day) {
    if ((month >= 3) && (month <= 6)) {
        var maxdaysinmonth = 30 + (month % 2);
        if ((day > 20) && (day <= maxdaysinmonth)) {
            console.log("True : " +day +"-"+ month )
        }else {
            console.log("False : " +day +"-"+ month )
        }
    }
    else {
        console.log("False : " +day +"-"+ month )
    }
}