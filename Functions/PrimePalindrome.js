function primeCheck(num){
    var flag=0;
    for(i=2;i<=num/2;i++){
        if(num%i==0){
            flag=1;
        }
    }
    if(flag == 1){
        console.log("It is not a prime number: "+num);
    }
    else{
        console.log("It is a prime number: "+num);
    }
}

function palindromeCheck(num){
    var rem, temp, final = 0;

	temp = num;
	while(num>0)
	{
		rem = num%10;
		num = parseInt(num/10);
		final = final*10+rem;
	}
	if(final==temp)
	{
		console.log("Number is Palindrome");
        return final;
	}
	else
	{
		console.log("Number is not palindrome");
        return final;
	}
}

var digit = require("readline-sync");
var num = digit.question("Enter a number: ");
num=parseInt(num);
primeCheck(num);
var palindrome=palindromeCheck(num);
primeCheck(palindrome);
