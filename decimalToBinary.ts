let decimal: number = 10;
let binary: string = "";

while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
}

console.log(binary);