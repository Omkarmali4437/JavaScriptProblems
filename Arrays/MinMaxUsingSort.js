var number;
var numbers=[];
function secondLargestSmallest(numbers){
    let size=numbers.length;
    console.log(numbers);
    for(i=size-2;i>=0;i--){
        if(numbers[i] != numbers[size - 1]){
            console.log(numbers[i]);
            return numbers[i];
        }
    }
}

for(i=0;i<10;i++){
    number=Math.floor(((Math.random()*(999-100))+1)+100);
    numbers.push(number);
}
numbers.sort();
console.log("Second largest number is: "+secondLargestSmallest(numbers));
numbers.reverse();
console.log("Second Smallest number is: "+secondLargestSmallest(numbers));