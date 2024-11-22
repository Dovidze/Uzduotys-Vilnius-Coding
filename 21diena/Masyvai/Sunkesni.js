console.log("------------------SUNKESNI------------------")

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log("------PIRMA UZDUOTIS------")
//Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), 
//kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

masyvas = [];
for(let i = 0; i < 30; i++) {
    masyvas[i]= random(5,25);
}
console.log(masyvas)

console.log("------ANTRA UZDUOTIS------")
//Naudodamiesi 1 uždavinio masyvu:

console.log("------a.------")
//Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

let did10 = 0; 
for(let i = 0; i < masyvas.length; i++) {
    if(masyvas[i] > 10) did10++;
}

console.log(`Masyve iš skaičių didesnių reikšmių už 10 yra ${did10}`)

console.log("------b.------")
// Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;

max = masyvas[0];
index = [];
indexas = 0;
for(let i = 1; i < masyvas.length; i++) {
    if(masyvas[i] > max) max = masyvas[i];
}
for(let i = 1; i < masyvas.length; i++) {
    if(masyvas[i] === max) {
        index[indexas] = i;
        indexas++
    }
}

console.log(`Didžiausias skaicius ${max} ir jo(ų) indexas yra ${index}`)

console.log("------c.------")
//Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

let suma = 0;
for(let i = 1; i < masyvas.length; i++) {
   if(i % 2 == 0) suma += masyvas[i];
}

console.log(suma)

console.log("------d.------")
//Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio 
//masyvo reikšmes minus tos reikšmės indeksas;

let masyvas2 = [];

for(let i = 0; i < masyvas.length; i++) {
    masyvas2[i] = masyvas[i] - i;
 }
 
console.log(masyvas2)

console.log("------e.------")
//Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, 
//kad bendras masyvas padidėtų iki indekso 39;

 let pradinis = masyvas2.length;
 let galutinis = masyvas2.length+9;

for (let i = pradinis; i < galutinis; i++) {
    masyvas2[i] = random(5, 25);
}
console.log(masyvas2)

console.log("------f.------")
//Iš masyvo elementų sukurkite du naujus masyvus. 
//Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių;

let porinisMasyvas = [];
let neporinisMasyvas = [];

let porinisIndexas = 0;
let neporinisIndexas = 0;
for(let i = 0; i < masyvas2.length; i++) {
    if(i % 2 ==0) {
        porinisMasyvas[porinisIndexas] = masyvas2[i];
        porinisIndexas++;
    } else {
        neporinisMasyvas[neporinisIndexas] = masyvas2[i];
        neporinisIndexas++;
    }
}
 console.log(`Porinis masyvas`)
 console.log(porinisMasyvas)
 console.log(`Neporinis masyvas`)
 console.log(neporinisMasyvas)

 console.log("------g.------")
 //Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;

 for(let i = 0; i < porinisMasyvas.length; i++) {
    if(porinisMasyvas[i] > 15) porinisMasyvas[i] = 0;
}

console.log(porinisMasyvas)

console.log("------h.------")
// Suraskite pirmą indeksą, kurio elemento reikšmė didesnė už 10;

let pirmasIndexas = 0;
for(let i = 0; i < masyvas.length; i++) {
    if(masyvas[i] > 10) {
        pirmasIndexas = i;
        break;
    }
}
console.log(masyvas)
console.log(pirmasIndexas)

console.log("------i.------")
//Sukurkite naują masyvą iš jo pašalinę visus elementus turinčius porinį indeksą;

let naujasMasyvas = [];
indexas = 0;
for(let i = 0; i < masyvas.length; i++) {

    if(i % 2 !== 0) {
        naujasMasyvas[indexas] = masyvas[i];
        indexas++;
    }
}

console.log(masyvas);
console.log(naujasMasyvas)