// Declare your variable here -- defined
var myGlobal = 10;

function fun1(){
    //assign 5 to oopsGlobal here
    oopsGlobal = 5;
}

//only change code above this line
function fun2() {
    var output = "";
    if(typeof myGlobal != "undefined"){
        output += "myGlobal:" + myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
        output += "oopsGlobal:" + oopsGlobal;
    }
    console.log(output)
}

fun1();
fun2(2);