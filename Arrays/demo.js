// array
// define []
// insertion order preserved, duplication allowed,mutable
//index can be used to get values in an array


var expenses=[10000,15000,20000,25000]

//             0      1    2     3

console.log(expenses[0]);

// iterate using index

for (let i=0;i<expenses.length;i++){

    console.log(expenses[i]);
}

// iterate using of


for(let exp of expenses){

    console.log(exp);
}


// update value at 0th index

expenses[0]=40000
console.log(expenses);


