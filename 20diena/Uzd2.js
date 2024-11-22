console.log(`-------ANTRA UŽDUOTIS-------`)
document.write(`<h3>-------ANTRA UŽDUOTIS-------</h3>`)
// Aprašykite ciklą kuris 
// naršyklėje atspausdintų skaičių didėjimo modelį iki dešimties. 

let stringas = ``;
for( let i = 1; i <= 10; i++) {

    if (i === 10)
        stringas += i;
    else 
        stringas += i + " ";
    document.write(`<p>${stringas}</p>`)
}

