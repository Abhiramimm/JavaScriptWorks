// creating object using class
class Student{

    constructor(name,course,degree){

        this.name=name
        this.course=course
        this.degree=degree
    }

    printStudent(){

        console.log(this.name,this.course,this.degree);
    }
}


var obj1=new Student("vipin","python","bca");

// obj.setStudent("vipin","python","bca")

obj1.printStudent()