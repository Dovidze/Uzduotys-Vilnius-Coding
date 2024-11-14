console.log("-----Šešta užduotis-----");

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let ran1 = random(0, 4);
let ran2 = random(0, 4);

if (ran1 > ran2) {
    console.log(`${ran1} / ${ran2} = ${ran1 / ran2}`)
} else {
    console.log(`${ran2} / ${ran1} = ${ran2 / ran1}`)
}


