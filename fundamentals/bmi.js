var weightInKg=56
var heighInCm=166

var heighInM=heighInCm/100

var bmi=Math.round((weightInKg/(heighInM**2)))

console.log(bmi);

if (bmi<19){
    console.log("underweight");
}
else if(bmi<=25){
    console.log("normal");
}
else if(bmi<=30){
    console.log("overweight");
}
else {
    console.log("obese");
}

