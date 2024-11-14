console.log("-----Šešta užduotis-----");

stringas1 = `An American in Paris`;
let count = 0;

for (let i = 0; i < stringas1.length-1; i++) {
    if (stringas1[i] == "a" || stringas1[i] == "A") {
        count++;
    }
}

console.log(count);