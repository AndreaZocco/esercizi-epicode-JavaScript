/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(numero1, numero2) {
    if (numero1 === numero2) {
        return 3 * (numero1 + numero2);
    } else {
        return numero1 + numero2;
    }
}

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(numeroIntero) {
    if (numeroIntero >= 20 && numeroIntero <= 100 || numeroIntero === 400)  {
    return true;
    } else return false;

}

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

let stringaEpicode="EPICODE"

function reverseString(stringa) {
let splittedString = stringa.split("");
let stringArray = splittedString.reverse();
let stringaFinale = stringArray.join();
//console.log(stringaFinale);
}

reverseString(stringaEpicode)

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(string) {
    return string.split(" ").map(parola => 
        parola.charAt(0).toUpperCase() + parola.slice(1)
    ).join(" ");
}

let frase = "ciao sono pippo";
let fraseTrasformata = upperFirst(frase);

//console.log(fraseTrasformata);


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
    let randomNumbers = [];
    for (var i = 0; i < n; i++) {
        randomNumbers.push(Math.floor(Math.random() * 11));
    }
    return randomNumbers;
}

let randomNumbers = giveMeRandom(10);
//console.log(randomNumbers);
