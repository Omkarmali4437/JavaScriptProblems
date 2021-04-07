var digit = require("readline-sync");
var num = digit.question("Enter a number: ");

var limit=256;
var i=1;
var p=1;
var q=2;

while(i < num && p < limit){
    p=p*q;
    console.log(p);
    i++;
}
