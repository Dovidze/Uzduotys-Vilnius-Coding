console.log("-----Penkta užduotis-----");
//Sukurkite ciklą kuris suktųsi nuo 0 iki 20. 
//Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;

let kartai = 0;

for(let i = 0; i <= 20; i++) {
    
    if(i % 2 == 0) {
        kartai++;
        console.log(i);

    }
}

console.log(kartai);


