let num: number = 17;
let isPrime: boolean = true;

if (num <= 1) {
    isPrime = false;
}

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(num + " is Prime");
} else {
    console.log(num + " is Not Prime");
}