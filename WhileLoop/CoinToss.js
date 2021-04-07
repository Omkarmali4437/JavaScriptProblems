var Heads=0;
var Tails=0;
var limit=11;

while(Heads != limit || Tails != limit){
    var toss=Math.floor(Math.random()*2);

    if(toss == 0){
        console.log("Heads");
        Heads=Heads+1;
    }
    else{
        console.log("Tails");
        Tails=Tails+1;
    }
}