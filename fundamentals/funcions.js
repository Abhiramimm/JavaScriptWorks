function add(num1,num2){

    return num1+num2
}

console.log(add(100,200));

function cube(num){

    return num**3
}

console.log(cube(3));


function maxTwo(num1,num2){

    return num1>num2 ? num1:num2
}

console.log(maxTwo(200,500));


console.log(smartSub(5,10));  // **hoisting**
function smartSub(num1,num2){

    return num1>num2 ? num1-num2 : num2-num1
}

