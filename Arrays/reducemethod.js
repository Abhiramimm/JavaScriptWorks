// reduce()
// contain 2 parameters

var arr=[10,11,12,13,14,15,16]

var total=arr.reduce((n1,n2)=>n1+n2)
console.log(total);

var maxNum=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(maxNum);

var minNum=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(minNum);

var product=arr.reduce((n1,n2)=>n1*n2)
console.log(product);