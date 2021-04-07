var startFrom=100;
var bet=1;
var Won=0;
var Lost=0;

while(startFrom > 0 && startFrom < 200){
    placebet=Math.floor(Math.random()*2);

    if(placebet == 0){
        startFrom++;
        console.log("Won");
        Won++;
    }
    else{
        startFrom--;
        console.log("Lost");
        Lost++;
    }
}
console.log("Number of times bet placed is: "+(Won+Lost));
console.log("Number of times the bet is won is : "+Won);
console.log("Number of times the bet is lost is :"+Lost);
console.log("Total Winning is: "+startFrom);