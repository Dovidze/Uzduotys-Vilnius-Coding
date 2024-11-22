console.log("-----Septinta užduotis-----");
//Vienoje eilutėje atspausdinkite visus skaičius 
//nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. 
//Skaičius atskirkite kableliais. Po paskutinio skaičiaus 
//kablelio neturi būti.

stringas = ``;
galStringas = '';

for (let i = 1; i <= 3000; i++) {

    if (i % 77 == 0) {
        stringas += i + `,`;
    }
} 
console.log(stringas)

for (let i = 0; i < stringas.length-1; i++) {

    galStringas += stringas[i]
}

console.log(galStringas)