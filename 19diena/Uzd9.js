console.log("-----Devinta užduotis-----");
// Ankstesniame kvadrate nupieškite įstrižaines žaigždutę 
// pakeisdami kitu simboliu.

stringas = ``;

let pradzia = -1;
let pabaiga = 25;

for( let i = 0; i < 25; i++) {

    stringas = ``;
    pabaiga--;
    pradzia++;

    for( let y = 0; y < 25; y++) {
        
        if (pradzia === y) {
            stringas += `5`;
        } else if (pabaiga === y) {
            stringas += `5`;
        } else { 
            stringas += `*`;
        }

        
    }
    console.log(stringas)
    document.write(`<p>${stringas}</p>`)
}
