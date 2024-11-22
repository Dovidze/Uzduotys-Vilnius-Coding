console.log("------------------LEGVENSNI------------------")
console.log("------PIRMA UZDUOTIS------")
//1Užduotis. Sukurkite masyvą iš dešimties augalų pavadinimų.
masyvas = [
    "Auksinė Aguona", "Laukų Žiedas", "Rytmečio Aguona", "Svaja", 
    "Aguonėlės Šokis", "Raudonoji Liepsna", "Švelni Aguona", 
    "Žiedų Pasaka", "Vasaros Stebuklas", "Gelė"
]
console.log(masyvas)

console.log("------ANTRA UZDUOTIS------")
//2Užduotis. Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
for (let i = 0; i < masyvas.length; i++){
    console.log(masyvas[i])
}

console.log("------TREČIA UZDUOTIS------")
// Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant 
//nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).

for (let i = masyvas.length-1; i >= 0; i--){
    console.log(masyvas[i])
}

console.log("------KETVIRTA UZDUOTIS------")
//Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių 
//trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai. 

let trump5 = 0;
let ilg7 = 0;

for (let i = 0; i < masyvas.length; i++){
    // console.log(masyvas[i].length)
    if(masyvas[i].length <= 5) {
        trump5++;
    } else if(masyvas[i].length >= 7) {
        ilg7++;
    }
}
console.log(`Iš masyvo gėlių pavadinimų trumpesnių už 5 simbolius yra ${trump5}`)
console.log(`Iš masyvo gėlių pavadinimų ilgesnių už 7 simbolius yra ${ilg7}`)

console.log("------PENKTA UZDUOTIS------")
//Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių 
//ilgesnių nei 5 simboliai bet trumpesnių  nei 10 simboliai.

let ilg5maz10 = 0;

for (let i = 0; i < masyvas.length; i++){
    if(masyvas[i].length >= 5 && masyvas[i].length <= 12) {
        ilg5maz10++;
    }
}

console.log(`Iš masyvo gėlių pavadinimų didesniu už 5 ir mažesnių už 12 simboliu yra ${ilg5maz10}`)