console.log("-----Ketvirta užduotis-----")
//Atspausdinkite kas antrą skaičių nuo 10 iki 50 
//(lyginius skaičius). 
//Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite.

for( let i = 10; i <= 50; i+=2) {

    if(i % 10 != 0) {
        console.log(i)
    }
}