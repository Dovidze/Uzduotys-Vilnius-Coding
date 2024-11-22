console.log("-----SEPTINTA užduotis-----");

let i = 0;
let y = 0;
let rezultatas = ""
let centras = 10
while (i < 11) {
    while (y < 21) {
        spalva1 = random(0, 255);
        spalva2 = random(0, 255);
        spalva3 = random(0, 255);
        if (y <= centras + i && y >= centras - i) {
            rezultatas += `<span style="color: rgb(${spalva1}, ${spalva2}, ${spalva3})">* </span>`;
        }
        else { rezultatas += ' '; }
        y++;
    }
    i++;
    y = 0
    console.log(rezultatas);
    document.write(`<p>${rezultatas}</p>`);
    rezultatas = ""
}
i = 0;
y = 0;
rezultatas = ""
centras = 10
while (i < 10) {
    while (y < 21) {
        spalva1 = random(0, 255);
        spalva2 = random(0, 255);
        spalva3 = random(0, 255);
        if (y > i && y < (21 - i - 1)) {
            rezultatas += `<span style="color: rgb(${spalva1}, ${spalva2}, ${spalva3})">* </span>`;
        }
        else { rezultatas += ''; }
        y++;
    }
    i++;
    y = 0
    console.log(rezultatas);
    document.write(`<p>${rezultatas}</p>`);
    rezultatas = ""
}