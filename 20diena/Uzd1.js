
console.log(`-------PIRMA UŽDUOTIS-------`)

//Naršyklėje atspausdinkite visus nelyginius skaičius nuo 7 iki 31.

for( let i = 7; i <= 31; i++ ) {

    if (i % 2 != 0) 
        document.write(`<p>${i}&nbsp;</p>`);
}