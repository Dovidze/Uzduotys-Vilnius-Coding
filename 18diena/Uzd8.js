console.log("-----Aštunta užduotis-----");

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


stringas1 = `Star Wars: Episode ${random(0,5)} ${random(1,9)} - A New Hope`

console.log(stringas1[stringas1.length-16], stringas1[stringas1.length-14])