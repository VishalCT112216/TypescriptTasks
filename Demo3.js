class Person {
    constructor() {
        this.name = "Scott";
        this.age = 25;
    }
    showDetails() {
        console.log("Person Name : " + this.name);
        console.log("Person Age : " + this.age);
    }
}
class Employee extends Person {
    constructor(empno) {
        super(); // invokes the super class constructor.
        this.empno = 546545;
        this.job = "Lead";
        this.empno = empno;
    }
    showDetails() {
        super.showDetails();
        // console.log("Employee Number : " + this.empno);       
        // console.log("Employee Name : " + this.name);       
        // console.log("Employee Age : " + this.age);       
        // console.log("Employee Job : " + this.job);
    }
}
let empObj = new Employee(465465);
empObj.showDetails();
