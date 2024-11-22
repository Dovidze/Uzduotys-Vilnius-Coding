console.log("-----Ketvirta užduotis-----")
document.write(`<h3>-------KETVIRTA UŽDUOTIS-------</h3>`)
// Jums duotas stringas: “54 77 2 59 17 19 108”. 
// Paimkite jame esančius skaičius ir patikrinkite juos ar jie 
// yra pirminiai. T.y. ar natūralusis skaičius yra didesnis 
// nei 1 ir be liekanos dalinasi tik iš savęs ir iš vieneto. 

stringas = `54 77 2 59 17 19 108 7`;
let skaicius = 0;

pradziosIndex = 0;
let skaiciuCount = 0;
let pirminis = true;
for(let i = 0; i <= stringas.length; i++) {

    if (i === stringas.length || stringas[i] === ` `) {
        skaiciuCount++;
        let skaiciausString = stringas.substring(pradziosIndex, i).trim();
        skaicius = parseInt(skaiciausString)
        pirminis = true;
        for ( let y = 2; y < skaicius; y++){
            if (skaicius % y == 0) {
                pirminis = false;
                break;
            }
        }
        if(pirminis == true) {
            document.write(`<p>Skaičius ${skaicius} yra pirminis<p/>`)
        } else {
            document.write(`<p>Skaičius ${skaicius} nėra pirminis</p>`)
        }
        pradziosIndex = i + 1
    }

}