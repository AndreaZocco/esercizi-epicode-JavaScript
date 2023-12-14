//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numero1 = 10
let numero2 = 20
let numeroMaggiore;

if (numero1 > numero2) {
numeroMaggiore = numero1
}
else{
  numeroMaggiore = numero2
}
console.log("Il numero maggiore è: " + numeroMaggiore);

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num = 1;

if (num < 5) {
  console.log('Tiny');
} else if (num < 10) {
  console.log('Small');
} else if (num < 15) {
  console.log('Medium');
} else if (num < 20) {
  console.log('Large');
} else {
  console.log('Huge')
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let i = 0; i <= 10; i++ ) {
    if (i === 3 || i === 8) {
      continue;
    }
    console.log(i);
}


/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare se il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (i = 0; i <= 15; i++ ){
  if (i %2 === 0) {
    console.log(i+ " è pari");
  } else
  console.log(i+ " è dispari")
}