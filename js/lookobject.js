
function phonelookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "chicago",
        "delta": "Denver",
        "echo": "Easy"
     }
     result = lookup[val]
     return result;
}


console.log(phonelookup("bravo"));


// test if object hasownproperty
function checkobj(checkprop){
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "chicago",
        "delta": "Denver",
        "echo": "Easy"
     }
    
    if(lookup.hasOwnProperty(checkprop)){
        return lookup[checkprop];
    }else{
        return "not found";
    }
}

console.log(checkobj("delta"));