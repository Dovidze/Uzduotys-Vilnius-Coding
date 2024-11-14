console.log("-----Dešimta užduotis-----");

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let kiekis = random(5, 3000);
let galKaina;

if ( kiekis >= 1000 && kiekis < 2000) {
    galKaina = kiekis - kiekis / 100 * 3;
    console.log(`Žvakių kiekis = ${kiekis}`)
    console.log(`Suteikiama nuolaida 3%`)
    console.log(`Galutinė kainą = ${galKaina}`)
} else if ( kiekis >= 2000) {
    galKaina = kiekis - kiekis / 100 * 4;
    console.log(`Žvakių kiekis = ${kiekis}`)
    console.log(`Suteikiama nuolaida 4%`)
    console.log(`Galutinė kainą = ${galKaina}`)
} else {
    galKaina = kiekis;
    console.log(`Žvakių kiekis = ${kiekis}`)
    console.log(`Nesuteikiama nuolaida`)
    console.log(`Galutinė kainą = ${galKaina}`)
}
