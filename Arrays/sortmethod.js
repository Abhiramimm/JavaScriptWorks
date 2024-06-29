// sort()

arr=[20,100,10,11,12,13,14,15,9,8]

arr.sort()
// console.log(arr);

// sort array in ascending order
arr.sort((o1,o2)=>o1-o2)
//arr.sort((o1,o2)=>o1<o2?-1:1)
console.log(arr);

// sort array in descending order
arr.sort((o1,o2)=>o2-o1)
// arr.sort((o1,o2)=>o1>o2?-1:1)
console.log(arr);

// sort array using length of words
var arr=["program","project","profile","profession","django","python"]
arr.sort()// sort alphabetically
arr.sort((w1,w2)=>w2.length-w1.length)  // descending order
console.log(arr);


lst=[87,1,9,3]
// largest number