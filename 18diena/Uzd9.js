console.log("-----Devinta užduotis-----");

stringas1 = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
stringas1 = stringas1.toLowerCase();
 
stringas2 = stringas1[random(0,stringas1.length-1)] + 
            stringas1[random(0,stringas1.length-1)] + 
            stringas1[random(0,stringas1.length-1)];

console.log(stringas2)