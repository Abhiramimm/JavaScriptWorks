var loanAmount=500000
var tenure=20
var interestRate=8

var n=20*12
var r=interestRate/12
var i=r/100

var emi=loanAmount*i*((1+i)**n)/((1+i)**n - 1)
console.log("monthly emi = ", emi);
