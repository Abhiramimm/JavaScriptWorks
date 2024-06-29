var arr=["program","project","profile","profession","django","python"]

// convert all object to uppercase

var upperCaseStrings=arr.map(w=>w.toUpperCase())
console.log(upperCaseStrings);

// print length of each string object in the array

var stringLengths=arr.map(w=>w.length)
console.log(stringLengths);

// return words starting with "pro"

var proWords=arr.filter(w=>w.startsWith("pro"))
console.log(proWords);

// longest word

var longestWord=arr.reduce((w1,w2)=>w1.length>w2.length?w1:w2)
console.log(longestWord);

//shortest word

var shortestWord=arr.reduce((w1,w2)=>w1.length<w2.length?w1:w2)
console.log(shortestWord);


