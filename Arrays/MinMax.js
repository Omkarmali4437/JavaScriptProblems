var number;
var numbers=[];

function MinMax(numbers,count){
    let size=numbers.length;
    console.log(numbers);
    for(i=0;i<=size;i++){
        for(j=i+1;j<=size;j++){
            if(count == 0){
                secondLargest(numbers);
            }
            else{
                secondSmallest(numbers);
            }
        }
    }
    return numbers[size-2];
}

function secondLargest(numbers){
    if(numbers[i]>numbers[j]){
        temp=numbers[i];
        numbers[i]=numbers[j];
        numbers[j]=temp;
    }
}

function secondSmallest(numbers){
    if(numbers[i]<numbers[j]){
        temp=numbers[i];
        numbers[i]=numbers[j];
        numbers[j]=temp;
    }
}

for(i=0;i<10;i++){
    number=Math.floor(((Math.random()*(999-100))+1)+100);
    numbers.push(number);
}
let count=0;
console.log("Second largest number is: "+MinMax(numbers,count));
count=count+1;
console.log("Second Smallest number is: "+MinMax(numbers,count));