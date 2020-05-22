var myClothe = 'Tshirt'; //global scope

function myFunc(){
    var myClothe = 'Trouser'; //local scope takes precedence
    return myClothe;
}

myFunc()
console.log(myClothe);


function callfunc(num){
    return num + 10;
}
console.log(callfunc(9));



