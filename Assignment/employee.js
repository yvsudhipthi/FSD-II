class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    display() {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
    }
}
let e1 = new Employee("Rahul", 50000, "IT");
e1.display();
export {};
