var degF=0;
var degC=0;

function tempConversion(choice){
    switch(choice){
        case 1:
            var digit = require("readline-sync");
            var degC = digit.question("Enter a number to convert to Fahrenheit.The number should be between 0C and 100C: ");
            degC=parseInt(degC);
            degF=(degC*9/5)+32;
            return degF;
        case  2:
            var digit = require("readline-sync");
            var degF = digit.question("Enter a number to convert to Celsius. The number should be between 32F and 212F: ");
            degF=parseInt(degF);
            degC=(degF-32)*5/9;
            return degC;
    }
}

var digit = require("readline-sync");
var choice = digit.question("Enter 0 to convert Celsius to Fahrenheit or 1 to Fahrenheit to Celsius : ");
choice=parseInt(choice);
var temperature=tempConversion(choice);
console.log("Temperature after conversion is: "+temperature);