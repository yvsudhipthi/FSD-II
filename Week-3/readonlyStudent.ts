class Student {

    readonly studentId: number;
    name: string;

    constructor(id: number, name: string) {
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