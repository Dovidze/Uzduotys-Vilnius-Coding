console.log("-----Septinta užduotis-----");

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let skaicius1 = random(0, 25);
let skaicius2 = random(0, 25);
let skaicius3 = random(0, 25);

console.log(`Skaičiai ${skaicius1} ${skaicius2} ${skaicius3}`)

if (skaicius1 > skaicius2 && skaicius1 < skaicius3 || skaicius1 > skaicius3 && skaicius1 < skaicius2) {
    console.log(`Vidurinis skaicius ${skaicius1}`)
} else if (skaicius2 > skaicius1 && skaicius2 < skaicius3 || skaicius2 > skaicius3 && skaicius2 < skaicius1) {
    console.log(`Vidurinis skaicius ${skaicius2}`)
} else {
    console.log(`Vidurinis skaicius ${skaicius3}`)
} 