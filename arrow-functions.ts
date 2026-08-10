// Traditional Function
function calculateGradeTraditional(mark: number): string {
    if (mark >= 90) {
        return "A Grade";
    } else if (mark >= 75) {
        return "B Grade";
    } else if (mark >= 50) {
        return "C Grade";
    } else {
        return "Fail";
    }
}

// Arrow Function
const calculateGradeArrow = (mark: number): string => {
    if (mark >= 90) {
        return "A Grade";
    } else if (mark >= 75) {
        return "B Grade";
    } else if (mark >= 50) {
        return "C Grade";
    } else {
        return "Fail";
    }
};

// Shorthand Arrow Function
const getStudentName = (name: string): string => `Student: ${name}`;

const marks = 82;

console.log(getStudentName("pandu"));

const result1 = calculateGradeTraditional(marks);
console.log(`Traditional Function Result: ${result1}`);

const result2 = calculateGradeArrow(marks);
console.log(`Arrow Function Result: ${result2}`);