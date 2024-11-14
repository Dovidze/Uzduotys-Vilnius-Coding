console.log("-----Venuolikta užduotis-----");
// Kazys ir Petras žaidžia šaškėm. Petras surenka taškų kiekį 
// nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. 
// Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir 
// “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite 
// funkcija random(). Žaidimą laimi tas, kas greičiau surenka 222 taškus.
// Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 
// arba daugiau taškų.


let petras = `Petras`;
let kazys = `Kazys`;

let petroTaskai = 0;
let kazioTaskai = 0;

let stabdomas = true;

while (stabdomas) {

    petroTaskai += random(10,20);
    kazioTaskai += random(5,25);

    if (petroTaskai >= 222){
        console.log(`Žaidima laimėjo ${petras} su ${petroTaskai} taškais`);
        console.log(`Žaidima pralaimėjo ${kazys} su ${kazioTaskai} taškais`);
        stabdomas = false;
    } else if (kazioTaskai >= 222) {
        console.log(`Žaidima laimėjo ${kazys} su ${kazioTaskai} taškais`);
        console.log(`Žaidima pralaimėjo ${petras} su ${petroTaskai} taškais`);
        stabdomas = false;
    } 
}
