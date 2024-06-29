var students={

    name:"vipin",    // attribute or property: value
    course:"python",
    degree:"bca",
    total:450
}

console.log(students.name);

students.grade="A+"   // add attribute to object

console.log(students);

if ("total" in students){  // "in" used to check if the attribute is present in the object

    console.log("present");
}
else{
    console.log("not present");
}


// if points exist add 10 extra points with current point else add points as 15


if("points" in students){

    //update

    students.points+=10
}

else{

    //add

    students.points=15
}

console.log(students);
