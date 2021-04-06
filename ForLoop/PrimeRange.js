var start;
var end;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`Enter a start number`, value => {
    console.log(`Start Number is ${value}!`)
    start=parseInt(value);
    readline.question(`Enter a end number`, values => {
        console.log(`End Number is ${values}!`)
        end=parseInt(values);
    displayPrimeRange(start,end);
    readline.close()
    })
  })

function displayPrimeRange(start,end){
    for(i=start;i<=end;i++){
        var count=0;
        for(j=1;j<=i;j++){
            if(i%j == 0){
                count=count+1;
            }
        }
        if(count == 2){
            console.log(i);
        }
    }
}