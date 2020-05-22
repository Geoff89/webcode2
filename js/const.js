//freeze object

function frezeObj(){
    "use strict";
    const MATH_CONST = {
        pi : 3.14
    };

    Object.freeze(MATH_CONST)

    try{
        MATH_CONST.pi = 99;
    }catch(ex){
        console.log(ex)
    }
    return MATH_CONST;
}
const pi = frezeObj();
console.log(pi);