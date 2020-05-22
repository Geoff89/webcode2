//let is scope based unlike var which is global

function checkscope(){
    "use strict";

    //let i = "function scope";
    if(true){
        let i = "block scope";
        console.log("Block scope is:", i);
    }
    console.log("Function scope is:", i);
    return i;
}

checkscope();