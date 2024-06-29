var items={pottatto:45,tomatto:50,ginger:250,garlic:300,onion:35}


var nestedArray=Object.entries(items)   // Object.entries => convert object into nested array
                                       //  array of array
console.log(nestedArray);

var costly=nestedArray.reduce((p1,p2)=>p1[1] > p2[1] ? p1 : p2)

console.log(costly);

var lowestItem=nestedArray.reduce((p1,p2)=> p1[1]<p2[1] ? p1 :p2)
console.log(lowestItem);