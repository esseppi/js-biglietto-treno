// DOMANDE
const priceXkilometer = 0.21
let nomeUtente = prompt("Come ti chiami?")
let nome = nomeUtente.charAt(0).toUpperCase() + nomeUtente.slice(1);
let age = parseFloat(prompt("Quanti anni hai?"))
let distance = parseFloat(prompt("Quanti chilometri dovrai percorrere?"))
let kilometers = (distance.toFixed(2))
console.log(age)

// VARIABILI DOM
let utente = document.getElementById("utente");
let distanza = document.getElementById("chilometri");
let sconto = document.getElementById("sconto");
let prezzo = document.getElementById("prezzo");


// STAMPA SU DOCUMENTO
utente.innerHTML = `Ciao ${nome}`
distanza.innerHTML = `Hai selezionato una distanza di ${kilometers} KM`


if (age < 18) {
    let wholeP = (distance * (priceXkilometer * (1))).toFixed(2)
    let price = (distance * (priceXkilometer * (1 - 0.2))).toFixed(2)
    let discount = (wholeP - price).toFixed(2)
    prezzo.innerHTML = `Il costo del tuo biglietto è di ${price}€`
    sconto.innerHTML = `Hai ricevuto uno sconto di ${discount}€`
} else if (age > 65)  {
    let wholeP = (distance * (priceXkilometer * (1))).toFixed(2)
    let price = (distance * (priceXkilometer * (1 - 0.4))).toFixed(2)
    let discount = (wholeP - price).toFixed(2)
    prezzo.innerHTML = `Il costo del tuo biglietto è di ${price}€`
    sconto.innerHTML = `Hai ricevuto uno sconto di ${discount}€`
} else {
    let wholeP = (distance * (priceXkilometer * (1))).toFixed(2)
    let price = (distance * (priceXkilometer * (1))).toFixed(2)
    prezzo.innerHTML = `Il costo del tuo biglietto è di ${price}€`
}


