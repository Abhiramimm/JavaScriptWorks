var number=1634

var sum=0

var number_count=String(number).length

var org=number

while(number!=0){
    
    let digit=number%10

    let cube=digit**number_count

    sum=sum+cube

    number=Math.floor(number/10)
}

console.log(sum);

console.log( sum==org ? "amstrong" : "not amstrong");