console.log("-----Septinta užduotis-----");


// balses Aa Ąa Ee Ęę Ėė Ii Įį Yy Oo Uu Ųų Ūū

// stringas1 = stringas1.replaceAll("a" , "" );
// stringas1 = stringas1.replaceAll("A" , "" );
// stringas1 = stringas1.replaceAll("E" , "" );
// stringas1 = stringas1.replaceAll("e" , "" );
// stringas1 = stringas1.replaceAll("I" , "" );
// stringas1 = stringas1.replaceAll("i" , "" );
stringas1 = stringas1.replaceAll(/[AaĄaEeĘęĖėIiĮįYyOoUuŲųŪū]/g, "")
console.log(stringas1)