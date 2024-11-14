console.log("-----Dešimta (papildoma) užduotis-----");

stringas1 = `Don't Be a Menace to South Central While Drinking Your Juice in the Hood ?`;
let visiZodziai = ``;
let poVienaZodi = ``;
let paskutinisZodis = ``;
let zdzEile = 0;
let count1 = 0;
let count2 = 0;

let zdzcount = 0;

for (i = 0; i < stringas1.length-1; i++) {
    
    if (stringas1[i] == " ") {
        zdzEile++;

        // console.log(i)

        if(zdzEile != 1){ 
            count2 = i-count1-1;
        } else {
            count2 = i;
        }
        count1 = i;

        // console.log(count2)
        // Atrinkami zodziai pagal salyga (turintys 5 arba mažiau raidžių žodyje)
        if (count2 <= 5){
            zdzcount++;
            for(let y=count2; y>=1; y--) {
                visiZodziai += stringas1[i-y];
                poVienaZodi += stringas1[i-y];
            }
            console.log(`"${poVienaZodi}" turi ${count2} raidžių`);
            poVienaZodi = "";
            visiZodziai += " ";
        }   
    }
}

// paskutinis zodis stringe tikrinamas, ir jei atitinka, isvedamas
for (let x = count1; x < stringas1.length; x++){
    paskutinisZodis += stringas1[x];
}

//tikrinimo ar tai raide funckija
var isAlpha = function(ch){
    return /^[a-zA-Z]$/.test(ch);
}

if (paskutinisZodis.length <= 5 && isAlpha(paskutinisZodis[paskutinisZodis.length-1])) {
    zdzcount++
    console.log(`"${paskutinisZodis}" turi ${stringas1.length-1 - count1} raidžių`);
    console.log(visiZodziai, paskutinisZodis)
    console.log(`Rasta žodžių ${zdzcount}`)
} else {
    console.log(visiZodziai)
    console.log(`Rasta žodžių ${zdzcount}`)
    }



    console.log(isAlpha(paskutinisZodis[paskutinisZodis.length-1]))
    console.log(!isAlpha(paskutinisZodis[paskutinisZodis.length-1]))