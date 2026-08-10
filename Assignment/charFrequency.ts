let text: string = "banana";

for (let i = 0; i < text.length; i++) {

    let count = 0;
    let checked = false;

    for (let k = 0; k < i; k++) {
        if (text[i] == text[k]) {
            checked = true;
            break;
        }
    }

    if (!checked) {
        for (let j = 0; j < text.length; j++) {
            if (text[i] == text[j]) {
                count++;
            }
        }

        console.log(text[i] + " = " + count);
    }
}