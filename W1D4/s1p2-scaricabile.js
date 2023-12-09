
/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 1) Stringhe: Le stringhe possono essere definite come semplici parole o frasi in lingua parlata;
 Esse potrebbero contenere dei nomi di persone, luoghi o cose, oppure frasi complete o addirittura numeri seppur racchiusi tra virgolette (ad es. "1234")

 2) Numeri: Questi sono semplicemente i numeri che usiamo per contare, come 1, 2, 3, o anche numeri più grandi come 100 o 1000
 In JavaScript, possiamo fare operazioni matematiche con questi numeri come sommare, sottrarre, moltiplicare e dividere
 
 3) Booleani: Questo tipo di dato ha solo due valori: true o false ("vero" o "falso")
 È come rispondere a una domanda con un si o un no 
 Per esempio, se chiediamo "Ti chiami Andrea?" la nostra risposta potrà essere solo "vero" o "falso"

 4) Null: è un valore che viene assegnato ad una variabile e rappresenta l'assenza intenzionale di un valore
 È come avere una scatola vuota; apri la scatola e non trovi niente dentro, è come dire esplicitamente "qui non c'è nulla"

 5) Undefined: Questo è simile a "null" ma un po' diverso
 È come avere una scatola su cui non è scritto nulla; non sappiamo se c'è qualcosa dentro o è vuota, perché non è stato ancora deciso
 È come se il linguaggio mettesse un segnaposto per dire "questa variabile esiste, ma non sappiamo ancora cosa contiene"

 6) Array: Un array è come una collezione di cose messa in fila, un contenitore per elementi:
 Potremmo avere una fila di numeri, una fila di parole o una fila di qualsiasi altra cosa
 In JavaScript, usiamo gli array per tenere in ordine le cose

 */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* 
Un oggetto è una collezione di proprietà, dove ogni proprietà ha un nome e un valore associato
Questi valori possono essere numeri, stringhe, booleani, array o perfino altri oggetti
Gli oggetti potrebbero essere visti come zaini o scatole che possono contenere molte cose, è anche un modo per raggruppare molte informazioni diverse in un unico posto
 */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12;
let numero2 = 20;

let somma = numero1 + numero2;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Andrea";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let x = 12;
let risultato = 4 - x;
console.log(risultato);

/* ESERCIZIO 6.1
 Crea un oggetto di Javascript che ti rappresenti (come proprietà usa nome, cognome e hobby)
 */

 let mieiDati = {
 nome: "Andrea",
 cognome: "Zocco",
 età: 31,
 hobbies: "Videogames, musica, libri"
 };


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";

console.log(name1 !== name2);
console.log(name1.toLowerCase == name2.toLowerCase);