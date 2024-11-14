console.log("-----Dešimta užduotis-----");

// Metam monetą. Monetos kritimo rezultatą imituojam 
// random() funkcija, kur 0 yra herbas, o 1 - skaičius. 
// Monetos metimo rezultatus išvedame į ekraną atskiroje 
// eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. 
// Suprogramuokite tris skirtingus scenarijus kai monetos 
// metimą stabdome:
// a) Iškritus herbui;
// b) Tris kartus iškritus herbui;
// c) Tris kartus iš eilės iškritus herbui;

let moneta = 0;
let stringMoneta = ``;
let herbasCount = 0;
let stabdymasA = true;
let stabdymasB = true;
let stabdymasC = true;

console.log("-----a)-----");
// a)
while (stabdymasA) {
    moneta = random(0,1);
    
    if(moneta === 0) {
        stringMoneta += `H`
        stabdymasA = false
    } else {
        stringMoneta += `S`
    }
}

console.log(stringMoneta)
console.log("-----b)-----");
// b)

stringMoneta = ``;
while (stabdymasB) {
    moneta = random(0,1);
    
    if(moneta === 0) {
        stringMoneta += `H`
        herbasCount++;
    } else {
        stringMoneta += `S`
    }
    
    if(herbasCount==3){
        stabdymasB = false;
    }
}

console.log(stringMoneta)
console.log("-----c)-----");
//c)

let herbasCountC = 0;
stringMoneta = '';


while (stabdymasC) {
    moneta = random(0,1);
    
    if(moneta === 0) {
        stringMoneta += `H`
        herbasCountC++
        
    } else {
        stringMoneta += `S`
    }

    // if (
    //     stringMoneta[stringMoneta.length - 1] === `H` && 
    //     stringMoneta[stringMoneta.length - 2] === `H` && 
    //     stringMoneta[stringMoneta.length - 3] === `H`) 
    // {
    //     stabdymasC = false;
    // }

    if(herbasCountC >= 3) {    
        for (let i = 0; i < stringMoneta.length-2; i++) {
            if (stringMoneta[i] === `H` && stringMoneta[i+1] === `H` && stringMoneta[i+2] === `H`){
                stabdymasC=false;
            }
        }
    }
}

console.log(stringMoneta)
