/*camel while naming variable*/
var myStr="i am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr)

var myStr1='i am a "double quoted" string inside "double quotes"';
console.log(myStr1)

/*using dclimiters*/
var myStr2 = "Firstline\n\t\\Secondline\nThirdline";
console.log(myStr2)

/*concetenating strings*/
var outstring = "I come first" + "I come second";
console.log(outstring)

/*concatenating with variable*/
var ourName = "GEoffrey";
var ourFirts = "Sagini";
var joined = ourName + ourFirts;
console.log(joined)

/*Finding length of a string*/
var firstName='Ada';
firstNameLength = firstName.length;
console.log(firstNameLength)

/*slicing*/
var lastName='Mogambi';
firstlastname=lastName[0]
console.log(firstlastname)

/*slicing*/
var sliced = lastName[lastName.length - 2]
console.log(sliced)



