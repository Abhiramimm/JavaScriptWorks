var str1="silent"
var str2="listen"


var sortedString1=str1.split("").sort().join("") 

var sortedString2=str2.split("").sort().join("")

console.log(sortedString1);

console.log(sortedString2);

console.log(sortedString1==sortedString2? "anagram" : "not anagram");

// string  have not sort method. so use split method to convert string to array. array have sort method
//then sort the array. join method is used to join array as string.