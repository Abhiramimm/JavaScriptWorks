var add=(num1,num2)=>num1+num2
// console.log(add(10,20));

var square=(num)=>num**2
// console.log(square(3));

var cube=(num)=>num**3
// console.log(cube(4));

var isEven=(num)=>num%2==0
// console.log(isEven(8));

var isOdd=(num)=>num%2!=0
// console.log(isOdd(3));

var isPositive=(num)=>num>0
// console.log(isPositive(10));

var smartSub=(num1,num2)=>num1>num2?num1-num2:num2-num1
console.log(smartSub(10,5));
console.log(smartSub(5,10));

// =====================================================

// arrow function in map

var arr=[10,11,12,13,14,15,16]

var sqaures=arr.map((num)=>num**2)
console.log(sqaures);

var cubes=arr.map(num=>num**3)
console.log(cubes);

var result=arr.map((num)=>num<12?num-1:num>12?num+1:num)
console.log(result);