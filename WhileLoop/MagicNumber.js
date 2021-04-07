console.log("Think of a number between 1 to 100");

var min=1;
var max=100;
var num=0;
var flag=0;

while(flag == 0){
    num=Math.floor((min+max)/2);
    
    console.log("Is your number greater than: "+num);
    
    var digit = require("readline-sync");
    var con = digit.question("If greater then "+num+" enter 0 or if smaller then "+num+" enter 1 or if is equal than enter any other number:");
    con=parseInt(con);

    if(con == 0){
        min=num;
        max=max;
    }
    else if(con == 1){
        min=min;
        max=num;
    }
    else{
        flag++;
        console.log("Your chosen number is: "+num);
    }
}


