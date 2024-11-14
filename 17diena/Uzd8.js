console.log("-----Aštunta užduotis-----");

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

pirmas = random(0, 2);
antras = random(0, 2);
let trecias = random(0, 2);
let ketvirtas = random(0, 2);

let zeroCount = 0;
let oneCount = 0;
let twoCount = 0;

if (pirmas == 0) {
    zeroCount++;
} else if ( pirmas == 1) {
    oneCount++;
} else {
    twoCount++;
}
if (antras == 0) {
    zeroCount++;
} else if ( antras == 1) {
    oneCount++;
} else {
    twoCount++;
}
if (trecias == 0) {
    zeroCount++;
} else if ( trecias == 1) {
    oneCount++;
} else {
    twoCount++;
}
if (ketvirtas == 0) {
    zeroCount++;
} else if ( ketvirtas == 1) {
    oneCount++;
} else {
    twoCount++;
}

console.log(`Skaičiai ${pirmas} ${antras} ${ trecias} ${ ketvirtas}`)
console.log(`Nulių yra = ${zeroCount} Vienetų yra = ${oneCount} Dvejetų yra = ${twoCount}`)