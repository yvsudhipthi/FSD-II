let text: string = "programming";
let result: string = "";

for (let i = 0; i < text.length; i++) {

    let found = false;

    for (let j = 0; j < result.length; j++) {
        if (text[i] == result[j]) {
            found = true;
            break;
        }
    }

    if (!found) {
        result = result + text[i];
    }
}

console.log(result);

export {};