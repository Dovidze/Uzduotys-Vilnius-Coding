console.log("-----Devinta užduotis-----");

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

pirmas = random(-10, 10);
antras = random(-10, 10);
trecias = random(-10, 10);

if ( pirmas < 0 ) {
    pirmas = "[" + pirmas + "]";
} else if ( pirmas > 0 ) {
    pirmas = "{" + pirmas + "}";
} else {
    pirmas = "(" + pirmas + ")";
}

if ( antras < 0 ) {
    antras = "[" + antras + "]";
} else if ( antras > 0 ) {
    antras = "{" + antras + "}";
} else {
    antras = "(" + antras + ")";
}

if ( trecias < 0 ) {
    trecias = "[" + trecias + "]";
} else if ( trecias > 0 ) {
    trecias = "{" + trecias + "}";
} else {
    trecias = "(" + trecias + ")";
}

console.log(`Skaičiai ${pirmas} ${antras} ${trecias}`);