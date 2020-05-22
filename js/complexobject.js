// array containing objects
var myMusic = [
    {
        "artist":"Billy joel", 
         "title":"Piano man",
         "release years": 1973,
         "format":["cd","8t","lp"],
         "gold": true    

    },
    {
        "artist":"Beau caus", 
        "title":"Cereal man",
        "release years": 2003,
        "format":["youtube","instagram","lp"],
        "gold": true    
    }
]

// var second tree
var secondtree = myMusic[1].format[0];
console.log(secondtree);