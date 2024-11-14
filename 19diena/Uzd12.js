console.log("-----DVYLIKTA užduotis-----");

// Sumodeliuokite vinies kalimą. 
// Įkalimo gylį sumodeliuokite pasinaudodami random() funkcija. 
// Vinies ilgis 8.5cm (pilnai sulenda į lentą).
// a)   “Įkalkite” 5 vinis mažais smūgiais. 
//      Vienas smūgis vinį įkala 5-20 mm. 
//      Suskaičiuokite kiek reikia smūgių.

// b)   “Įkalkite” 5 vinis dideliais smūgiais. 
//      Vienas smūgis vinį įkala 20-30 mm, 
//      bet yra 50% tikimybė jog bus nepataikyta į vinį. 
//      (pasinaudokite random() funkcija)

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let viniuKiekis = 5;
let ilgis = 850;
let smugis = 0;
let smugisCount = 0;

console.log("-----a)-----");
// a)
for (let i = 1; i <= viniuKiekis; i++) {
    smugis = 0;
    smugisCount = 0;
    while (smugis <= ilgis) {
        smugisCount++;
        smugis += random(5,20);
    }
    console.log(`Vinį nr.${i} įkalti reikėjo ${smugisCount} smugių`)
}

console.log("-----b)-----");
// b)

let nepataikytaCount = 0;
let pataikytaNepataikyta = 0;

for (let i = 1; i <= viniuKiekis; i++) {
    smugis = 0;
    smugisCount = 0;
    nepataikytaCount = 0;
    while (smugis <= ilgis) {

        pataikytaNepataikyta = random(0,1)

        if (pataikytaNepataikyta === 1) {
            smugisCount++;
            smugis += random(20,30);
        } else {
            nepataikytaCount++;
        }
    }
    console.log(`Vinį nr.${i} įkalti reikėjo ${smugisCount + nepataikytaCount} smugių`)
    console.log(`Nepataikyta ${nepataikytaCount} smūgiai`)
}