var num=153

while(num!=0){ // 153 !=0 15!=0 1!=0 0!=0

    let digit=num%10  // 153%10=3 15%10=5 1%10=1

    console.log(digit); // 3 5 1

    num=Math.floor(num/10) // 1/10=0
        
}
