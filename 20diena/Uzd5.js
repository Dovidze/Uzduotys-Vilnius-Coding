console.log("-----Penkta užduotis-----");
document.write(`<h3>-------PENKTA UŽDUOTIS-------</h3>`)
// Jūs gavote užšifruotą žinutę: 
// “gjrgkjxvbsigdvifpjqyzlzxsxzjnvgojlziaofdfnufymsjqsxxyknqcchmpepoljekhydgmfvhwipvopllndyuddcgxnleutsmprxqlcnxxthdhtpnutqocvtuanouumbkmlxexzmc”
// Surasti tai kas joje yra paslėpta jums padės varlė. 
// Ji tupi ežero krante, o kiekviena raidė yra akmuo. 
// Varlytė vienu šuoliu geba peršokti septynis akmenis. 
// Su kiekvienu šuoliu priartėsite prie tikslo.
// Ką sako žinutė?


stringas = `gjrgkjxvbsigdvifpjqyzlzxsxzjnvgojlziaofdfnufymsjqsxxyknqcchmpepoljekhydgmfvhwipvopllndyuddcgxnleutsmprxqlcnxxthdhtpnutqocvtuanouumbkmlxexzmc`;
let atsakymas = ``;
for (let i = 0; i < stringas.length-1; i += 7) {

    if(i != 0) {
        atsakymas += stringas[i]
    }

}
console.log(atsakymas)
document.write(`<p>Užkoduotas žodis yra: <strong>${atsakymas}</strong></p>`)