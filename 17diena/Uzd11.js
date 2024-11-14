console.log("-----Dešimta užduotis-----");

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

pirmas = random(0, 100);
antras = random(0, 100);
trecias = random(0, 100);

let vidurkis = (pirmas + antras + trecias) / 3;
let atmVidurkis = 0;
kiekis = 0;

if (pirmas >= 10 && pirmas <= 90 ) {
    atmVidurkis += pirmas;
    kiekis++; 
}

if (antras >= 10 && antras <= 90 ) {
    atmVidurkis += antras;
    kiekis++; 
}

if (trecias >= 10 && trecias <= 90 ) {
    atmVidurkis += trecias;
    kiekis++; 
}

atmVidurkis = atmVidurkis / kiekis;

console.log(`Skaičiai = ${pirmas} ${antras} ${trecias}`)
console.log(`Aritmetinis vidurkis = ${Math.round(vidurkis)}`)
console.log(`Aritmetinis vidurkis atmetus skaičius = ${Math.round(atmVidurkis)}`)