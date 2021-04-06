var number;
var number2;
var number3;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
readline.question(`Enter frist number `, value => {
    console.log(`First Number is ${value}!`)
    number=parseInt(value);
    readline.question(`Enter Second number`, value1 => {
        console.log(`Second Number is ${value1}!`)
        number2=parseInt(value1);
        readline.question(`Enter Third number`, value2 => {
            console.log(`Third Number is ${value2}!`)
            number3=parseInt(value2);
            calculation(number,number2,number3);
            readline.close()
        })
    })
})

function calculation(number,number2,number3){
    var eq1=number+number2*number3;
    console.log("Value of First Equation is: "+eq1);

    var eq2=number%number2+number3;
    console.log("Value of Seccond Equation is: "+eq2);

    var eq3=number3+number/number2;
    console.log("value of Third Equation is: "+eq3);

    var eq4=number*number2+number3;
    console.log("Value of Fourth Equation is: "+eq4);

    checkMax(eq1,eq2,eq3,eq4);
    checkMin(eq1,eq2,eq3,eq4);
}

function checkMax(eq1,eq2,eq3,eq4){
    if(eq1 > eq2 && eq1 > eq3 && eq1 > eq4){
        console.log("First Equation has maximum value");
    }else if(eq2 > eq1 &&  eq2  > eq3 && eq2 > eq4){
        console.log("Second Equation has maximum  value");
    }else if(eq3 > eq1 && eq3 > eq2 && eq3 > eq4){
        console.log("Third Equation has maximum value");
    }else{
        console.log("Fourth Equation has maximum value");
    }
}

function checkMin(eq1,eq2,eq3,eq4){
    if(eq1 < eq2 && eq1 < eq3 && eq1 < eq4){
        console.log("First Equation has minimum value");
    }else if(eq2 < eq1 && eq2 < eq3 && eq2 < eq4){
        console.log("Second Equation has minimum value");
    }else if(eq3 < eq1 && eq3 < eq2 && eq3 < eq4){
        console.log("Third Equation has minimum value");
    }else{
        console.log("Fourth Equation has minimum value");
    }
}
