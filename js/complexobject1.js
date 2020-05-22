// nested objects
var myStorage = {
    "car":{
        "inside":{
            "glove box" : "maps",
            "passenger seat" : "crumbs"
        }
    }
}

var glovecont = myStorage.car.inside["glove box"];
console.log(glovecont);