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
	}
	else
	{
		console.log("Number is not palindrome");
	}
}

var digit = require("readline-sync");
var num = digit.question("Enter a number: ");
num=parseInt(num);
palindromeCheck(num);

num = digit.question("Enter another number: ");
num=parseInt(num);
palindromeCheck(num);
