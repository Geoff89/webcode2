var myArray = [];

for(var i = 0; i < 5; i++){
    myArray.push(i);

}

console.log(myArray);

//even array
var evenArray = [];
for(var i = 0; i < 10; i+=2){
    evenArray.push(i)
}
console.log(evenArray);

//odd array
var oddArray = [];
for( var i = 1; i < 10; i+=2){
    oddArray.push(i)
}
console.log(oddArray);

//reverse array
var revArray = [];
for(var i = 10; i > 0; i-=2){
    revArray.push(i)
}
console.log(revArray);