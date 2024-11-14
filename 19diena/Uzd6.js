console.log("-----Šešta užduotis-----");
// Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300,
// atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek 
// tarp jų yra didesnių už 150.  
// Skaičiai didesni nei 275 turi būti atspausdinti
//  skliausteliuose” [ ] “.

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let stringas = ``;
let skaicius = 0;
let count = 0;

for(let i = 0; i < 300; i++) {
    skaicius = random(0,300);

    if (skaicius >= 275) {
        stringas +=`[${skaicius}] `; 
    } else {
        stringas +=skaicius + ` `;
    }

    if (skaicius >= 150) {
        count++;
    }

}

console.log(stringas)
console.log(`Skaičių didesnių už 150 yra = ${count}`)