stringas = '54 77 2 59 17 19 108'
document.write(stringas);
document.write('<br>')
ilgis = stringas.length;
skaicius = "";
let max = 0;
let min = 0;
y=0
for (i = 0; i < ilgis; i++) {
    if (stringas[i] !== ' ') {
        skaicius += stringas[i];
    }
    if (stringas[i] === ' ' || i === ilgis - 1) {
        if (parseInt(skaicius) > max) { 
            max = parseInt(skaicius) 
        }
        if (y===0) {
            min = parseInt(skaicius);
            y++;
        }
        if       
        (parseInt(skaicius) < min) { 
            min = parseInt(skaicius) 
        }
        skaicius = "";
    }
}
document.write(`Mažiausias sekos skaičius : ${min}.`)
document.write('<br>')
document.write(`Didžiausias sekos skaičius : ${max}.`)