console.log("-----ŠEŠTA (papildoma) užduotis-----");

// Sugeneruokite stringą, kurį sudarytų 50 atsitiktinių skaičių 
// nuo 1 iki 200, atskirtų tarpais. Skaičiai turi būti unikalūs. 
// Masyvo naudoti negalima.

stringas = ``;
skaicius = 0;
skaiciuCount = 0;

while (skaiciuCount < 50) {

    skaicius = random(1, 200);
    if(!stringas.split(` `).includes(skaicius.toString())){
        skaiciuCount++;
        stringas += skaicius + ` `;
    }
    //console.log(stringas)

}
document.write(`<p>Skaičiai</p><br>`)
document.write(`<p>${stringas.trim()}</p><br>`)
document.write(`<p>Išvesta ${skaiciuCount} unikalių skaičių</p>`)


// antras variantas, be masyvo
stringas = '';
skaicius = '';
skaiciusCount = 0;
skaicius1 = 0;
let kartotinis = false;

while (skaiciusCount < 10) {
    skaicius1 = random(1, 10)
    kartotinis = false;
    let ilgis = stringas.length;
    for (let i = 0; i < ilgis; i++) {
        if (stringas[i] !== " ") {
           skaicius += stringas[i];
        }else if (stringas[i] === ' ' || i === ilgis - 1){
            if(skaicius1.toString() === skaicius) {
               kartotinis = true;
            } else {
                skaicius = "";
            }
        }
    }
    if(!kartotinis) {
        stringas += skaicius1 + ' ';
        skaiciusCount++
    }

}
console.log(stringas)