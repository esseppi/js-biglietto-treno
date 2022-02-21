// DOMANDE
const priceXkilometer = 0.21
let nome = prompt("Come ti chiami?")
let age = parseFloat(prompt("Quanti anni hai?"))
let distance = parseFloat(prompt("Quanti chilometri dovrai percorrere?"))
console.log(age)

// VARIABILI DOM
let utente = document.getElementById("utente");
let distanza = document.getElementById("chilometri");
let sconto = document.getElementById("sconto");
let prezzo = document.getElementById("prezzo");


// STAMPA SU DOCUMENTO
utente.innerHTML = `Ciao ${nome}`
distanza.innerHTML = `Hai selezionato una distanza di ${distance} KM`


if (age < 18) {
    let wholeP = Math.round(distance * (priceXkilometer * (1)))
    let price = Math.round(distance * (priceXkilometer * (1 - 0.2)))
    prezzo.innerHTML = `Il costo del tuo biglietto è di ${price}€`
    sconto.innerHTML = `Hai ricevuto uno sconto di ${wholeP - price}€`
} else if (age > 65)  {
    let wholeP = Math.round(distance * (priceXkilometer * (1)))
    let price = Math.round(distance * (priceXkilometer * (1 - 0.4)))
    prezzo.innerHTML = `Il costo del tuo biglietto è di ${price}€`
    sconto.innerHTML = `Hai ricevuto uno sconto di ${wholeP - price}€`
} else {
    let wholeP = Math.round(distance * (priceXkilometer * (1)))
    let price = Math.round(distance * (priceXkilometer * (1)))
    prezzo.innerHTML = `Il costo del tuo biglietto è di ${price}€`
}


