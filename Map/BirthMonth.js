var months=[];
var January=[];
var February=[];
var March=[];
var April=[];
var May=[];
var June=[];
var July=[];
var August=[];
var September=[];
var October=[];
var November=[];
var December=[];
var count=0;

for(i=0;i<=50;i++){
    var value=Math.floor((Math.random()*12)+1);
    months[i]=value;
}

for(values in months){
    if(months[values] == 1){
        January[count++]="Person"+values;
    }
    else if(months[values] == 2){
        February[count++]="Person"+values;
    }
    else if(months[values] == 3){
        March[count++]="Person"+values;
    }
    else if(months[values] == 4){
        April[count++]="Person"+values;
    }
    else if(months[values] == 5){
        May[count++]="Person"+values;
    }
    else if(months[values] == 6){
        June[count++]="Person"+values;
    }
    else if(months[values] == 7){
        July[count++]="Person"+values;
    }
    else if(months[values] == 8){
        August[count++]="Person"+values;
    }
    else if(months[values] == 9){
        September[count++]="Person"+values;
    }
    else if(months[values] == 10){
        October[count++]="Person"+values;
    }
    else if(months[values] == 11){
        November[count++]="Person"+values;
    }
    else if(months[values] == 12){
        December[count++]="Person"+values;
    }
}

var filteredJanuary = January.filter(function (el) {
    return el != null;
});

var filteredFebruary = February.filter(function(e2){
    return e2 != null;
});

var filteredMarch = March.filter(function(e3){
    return e3 != null;
});

var filteredApril = April.filter(function(e4){
    return e4 != null;
});

var filteredMay = May.filter(function(e5){
    return e5 != null;
});

var filteredJune = June.filter(function(e6){
    return e6 != null;
});

var filteredJuly = July.filter(function(e7){
    return e7 != null;
});

var filteredAugust = August.filter(function(e8){
    return e8 != null;
});

var filteredSeptember = September.filter(function(e9){
    return e9 != null;
});

var filteredOctober = October.filter(function(e10){
    return e10 != null;
});

var filteredNovember = November.filter(function(e11){
    return e11 != null;
});

var filteredDecember = December.filter(function(e12){
    return e12 != null;
});



function birthMonthCalculation(){
    var birthMonth=new Map();

    birthMonth.set("01.January",filteredJanuary);   
    birthMonth.set("02.February",filteredFebruary);
    birthMonth.set("03.March",filteredMarch);
    birthMonth.set("04.April",filteredApril);
    birthMonth.set("05.May",filteredMay);
    birthMonth.set("06.June",filteredJune);
    birthMonth.set("07.July",filteredJuly);
    birthMonth.set("08.August",filteredAugust);
    birthMonth.set("09.September",filteredSeptember);
    birthMonth.set("10.October",filteredOctober);
    birthMonth.set("11.November",filteredNovember);
    birthMonth.set("12.December",filteredDecember);

    console.log("The Index Number of individuals having birthdays in the same month are : ");

    for(let keys of  birthMonth.keys()){
        console.log(keys +" : "+birthMonth.get(keys));
    }
}

birthMonthCalculation();