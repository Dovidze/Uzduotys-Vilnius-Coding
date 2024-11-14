console.log("-----Aštunta užduotis-----");

// Nupieškite kvadratą iš “*”, kurio kraštines sudaro 25 
// “*” simboliai.

stringas = ``;

for( let i = 0; i < 25; i++) {
    stringas = ``;
    for( let y = 0; y < 25; y++) {
        stringas += `*`
    }
    document.write(`<p>${stringas}</p>`)
    console.log(stringas)
}