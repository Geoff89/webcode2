//using multiple switch to return the same value

function sequential(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;

        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;

        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
       }
       return answer;
}

//change the value to test
console.log(sequential(3));