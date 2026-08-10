"use strict";
let decimal = 10;
let binary = "";
while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
}
console.log(binary);
