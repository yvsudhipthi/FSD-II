class Student {
    studentId;
    name;
    constructor(id, name) {
        this.studentId = id;
        this.name = name;
    }
    display() {
        console.log(this.studentId);
        console.log(this.name);
    }
}
let s = new Student(101, "Sudhipthi");
s.display();
export {};
