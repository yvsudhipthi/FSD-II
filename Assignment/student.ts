class Student {

    name: string;
    rollNo: number;

    constructor(name: string, rollNo: number) {
        this.name = name;
        this.rollNo = rollNo;
    }

    display() {
        console.log("Name : " + this.name);
        console.log("Roll No : " + this.rollNo);
    }
}

let s1 = new Student("Sudhipthi", 101);

s1.display();

export {};