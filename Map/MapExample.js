let map=new Map();

map.set('Name',"Omkar");
map.set('Lastname',"Mali");
console.log(map.size);

for([key,value] of map){
    console.log(key+' = '+value);
}
console.log("++++++++++");
for(key of map.keys()){
    console.log(key);
}
console.log("++++++++++");
for(value of map.values()){
    console.log(value);
}
console.log("++++++++++");
for([key,value] of map.entries()){
    console.log(key+' = '+value);
}
console.log("++++++++++Foreah");
map.forEach(function(value,key){
    console.log(key+" = "+value);
})