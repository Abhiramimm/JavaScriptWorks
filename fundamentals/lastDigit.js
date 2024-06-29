var num1=167
var num2=872

var num1LastDigit=num1%10

var num2LastDigit=num2%10

console.log(num1LastDigit);

console.log(num2LastDigit);

if (num1LastDigit>num2LastDigit){

    console.log(num1);

}
else{
    console.log(num2);
}

// ==========================================
// 2nd method

if(num1 %10 >num2%10){
    
    console.log(num1);
}
else{
    console.log(num2);
}

// =============================================
// 3rd method 

console.log(num1%10 >num2%10 ? num1 : num2);