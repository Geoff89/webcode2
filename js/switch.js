// using switch instead of multiple if else if stateements

function switchstuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        case "d":
            answer = "stuff";
            break;
       }
       return answer;
}

console.log(switchstuff("d"));