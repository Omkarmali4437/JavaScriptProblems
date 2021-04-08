var numbers=[];
var repeatednumbers=[];
var counter=0;
var number;

function findRepeatedNumbers(numbers){
    for(let j=numbers[0];j<numbers.length;j++){
        number=j;
        if(number < 10){
            continue;
        }
        else{
            var rem, temp, final = 0;
	        temp = number;
	        while(number>0)
	        {
	    	    rem = number%10;
		        number = parseInt(number/10);
		        final = final*10+rem;
	        }
            if(final==temp){
                repeatednumbers[counter++]=temp;
            }
        }
    }
    return repeatednumbers;
}

for(i=1;i<=100;i++){
    numbers.push(i);
}
console.log(findRepeatedNumbers(numbers));