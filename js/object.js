// object is like dictionary in python
var ourDog = {
    "name": "camper",
    "legs": 4,
    "tails number": 1,
    "friends": ["everything"]
}

console.log(ourDog);


var tail = ourDog.tails;
console.log(tail);

var legs = ourDog["tails number"];
console.log(legs);


var testObj = {
    "an entree" : "hamburger",
    "my side" : "veggies",
    "the drink" : "water"
};

var myside = testObj["my side"];
console.log(myside);

//adding an item
testObj["the water"] = "vook";

delete testObj["my side"];

console.log(testObj);