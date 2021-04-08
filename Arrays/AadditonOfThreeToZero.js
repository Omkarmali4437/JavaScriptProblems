var numbers=[];
function findTriplets(numbers) {
    let found = false;
    for (let i = 0; i < numbers.length - 2; i++) {
        for (let j = i + 1; j < numbers.length - 1; j++) {
            for (let k = j + 1; k < numbers.length; k++) {
                if (numbers[i] + numbers[j] + numbers[k] === 0)
                {
                    console.log(numbers[i]);
                    console.log(" ");
                    console.log(numbers[j]);
                    console.log(" ");
                    console.log(numbers[k]);
                    console.log("===========")
                    found = true;
                }
            }
        }
        if(found === false) {
            console.log("Does not exist");
        }
    }
}
for(i=0;i<5;i++){
    var digit = require("readline-sync");
    var num = parseInt(digit.question("Enter 5 integer numbers between -10 and 10 :  "));
    numbers.push(num);
}
console.log(numbers);
findTriplets(numbers);