var dice=new Map();
var i=0;
var one=0;
var two=0;
var three=0;
var four=0;
var five=0;
var six=0;

while(one < 10 && two < 10 && three < 10 && four < 10 && five < 10 &&  six < 10){
    var roll=Math.floor((Math.random()*6)+1);
    dice.set(i++,roll);
    switch(roll){
        case 1:
            one=one+1;
            break;
        case 2:
            two=two+1;
            break;
        case 3:
            three=three+1;
            break;
        case 4:
            four=four+1;
            break;
        case 5:
            five=five+1;
            break;
        case 6:
            six=six+1;
            break;
    }
}

console.log("The total number of times the die is rolled is : "+dice.size);

var apperance=new Map();

apperance.set(1,one);
apperance.set(2,two);
apperance.set(3,three);
apperance.set(4,four);
apperance.set(5,five);
apperance.set(6,six);

console.log("The number of times each value has occured is : ");
for([key,value] of apperance){
    console.log(key+' = '+value);
}

var biggest=apperance.get(1);
var smallest=apperance.get(1);

for(let j of apperance.values()){
    if(j > biggest){
        biggest=j;
    }
    if(j < smallest){
        smallest=j;
    }
}

console.log("The number that appeared maximum time is: ");
for(let k of apperance.keys()){
    if(apperance.get(k) == biggest){
        console.log(k);
    }
}

console.log("The number that appeared minimum time is: ");
for(let l of apperance.keys()){
    if(apperance.get(l) == smallest){
        console.log(l);
    }
}