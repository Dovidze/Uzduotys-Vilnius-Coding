console.log("-----Trečia užduotis-----")

// Jums duotas stringas: “Žalgiris, Anadolu Efes, Barcelona BC”. 
// Pasinaudodami ciklų pagalba iš stringo ištraukite vieną 
// atsitiktinį komandos pavadinimą. 
// Rezultate kablelių ir tarpų neturi būti. 


function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

stringas = `Žalgiris, Anadolu Efes, Barcelona BC`;

let pradziosIndex = 0;
let komanduCount = 0;
let isrinktaKomanda = '';

for(let i = 0; i <= stringas.length; i++) {

    if (i === stringas.length || stringas[i] === `,`) {
        komanduCount++;

        pradziosIndex = i + 1
    }
}
console.log(komanduCount)

let randomIndex = random(1, komanduCount);

komanduCount = 0;
pradziosIndex = 0;

for(let i = 0; i <= stringas.length; i++) {

    if (i === stringas.length || stringas[i] === `,`) {
        komanduCount++;
        let komanda = stringas.substring(pradziosIndex, i).trim();

        // Isvedimas komandu
        if(i === stringas.length)
            document.write(`<p>${komanda}</p>`)
        else
            document.write(`<p>${komanda},&nbsp;</p>`)
        // Isvedimas isrinktos komandos
        if(komanduCount === randomIndex) {
            isrinktaKomanda = stringas.substring(pradziosIndex, i).trim();
        }
        pradziosIndex = i + 1
    }
}

document.write(`<p class="atsakymas"><strong>Isrinkta komanda:</strong> ${isrinktaKomanda}<p/>`)
