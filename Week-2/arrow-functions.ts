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

const marks: number = 82;

console.log(getStudentName("Pandu"));

const result1: string = calculateGradeTraditional(marks);
console.log(`Traditional Function Result: ${result1}`);

const result2: string = calculateGradeArrow(marks);
console.log(`Arrow Function Result: ${result2}`);