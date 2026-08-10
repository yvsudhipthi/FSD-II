var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        console.log(a + b);
    }
    MathOperations.add = add;
    function subtract(a, b) {
        console.log(a - b);
    }
    MathOperations.subtract = subtract;
    function multiply(a, b) {
        console.log(a * b);
    }
    MathOperations.multiply = multiply;
    function divide(a, b) {
        console.log(a / b);
    }
    MathOperations.divide = divide;
})(MathOperations || (MathOperations = {}));
MathOperations.add(10, 5);
MathOperations.subtract(10, 5);
MathOperations.multiply(10, 5);
MathOperations.divide(10, 5);
export {};
