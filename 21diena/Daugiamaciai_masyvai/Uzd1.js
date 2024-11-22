function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


console.log("------PIRMA UZDUOTIS------");
//Sugeneruokite masyvą iš 10 elementų, kurio elementai būtų 
//masyvai iš 5 elementų su reikšmėmis nuo 5 iki 25.

let masyvas = [];

for(let i = 0; i < 10; i++) {
    masyvas[i] = []
    for(let y = 0; y < 5; y++){
        masyvas[i][y] = random(5,25)
    }
}

console.table(masyvas)

console.log("------ANTRA UZDUOTIS------");
console.log("------a.------");
//Suskaičiuokite kiek masyve yra elementų didesnių už 10;

let didesni = 0;
for(let i = 0; i < masyvas.length; i++) {
    for(let y = 0; y < masyvas[i].length; y++) {
        if(masyvas[i][y] > 10) didesni++;
    }
}
console.log(`Didesnių už 10 masyve elementu yra ${didesni}`)

console.log("------b.------");
//Raskite didžiausio elemento reikšmę;

let max = masyvas[0][0];
for(let i = 0; i < masyvas.length; i++) {
    for(let y = 0; y < masyvas[i].length; y++) {
        if(masyvas[i][y] > max) max = masyvas[i][y];
    }
}
console.log(`Didžiausias masyvo elementas yra ${max}`)

console.log("------c.------");
//Suskaičiuokite kiekvieno antro lygio masyvų su vienodais 
//indeksais sumas 
//(t.y. suma reikšmių turinčių indeksą 0, 1 ir t.t.)

let masSuma = [];
let suma = 0;
let indexas = 0;
for(let i = 0; i < masyvas.length; i++) {
    for(let y = 0; y < masyvas[i].length; y++) {
        for(let x = 0; x < masyvas.length; x++) {
            suma += masyvas[x][y]
        }
        masSuma[y] = suma;
        suma = 0;
    }
}

console.table(masSuma)

console.log("------d.------");
//Visus antro lygio masyvus “pailginkite” iki 7 elementų

let pradzia = 0;

let stabdom = true
for(let i = 0; i < masyvas.length; i++) {
    for(let y = 0; y < masyvas[i].length; y++) {
        pradzia++;
        if(pradzia === masyvas[i].length){
            stabdom = false
            break;
        }
    }
    if(stabdom === false) break;
}

let pabaiga = pradzia +2;

for(let i = 0; i < masyvas.length; i++) {
    for(let y = pradzia; y < pabaiga; y++) {
        masyvas[i][y] = random(5,25)
    }
}

console.table(masyvas)

console.log("------e.------");
//Suskaičiuokite kiekvieno iš antro lygio masyvų elementų 
//sumą atskirai ir sumas panaudokite kaip reikšmes sukuriant 
//naują masyvą. T.y. pirma naujo masyvo reikšmė turi būti 
//lygi mažesnio masyvo, turinčio indeksą 0 dideliame masyve, 
//visų elementų sumai 

masSuma = [];
suma = 0;
indexas = 0;
for(let i = 0; i < masyvas.length; i++) {
    for(let y = 0; y < masyvas[i].length; y++) {
        suma += masyvas[i][y];
    }
    masSuma[i] = suma;
    suma = 0;
}

console.table(masSuma)