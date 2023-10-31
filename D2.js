/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*let num1 = 5
let num2 = 3
let vincitore = "è maggiore!"
let uguaglianza = "i due numeri sono uguali!"
if  (num1 > num2){
  console.log(`${num1} ${vincitore}`)}
else if(num2 > num1 ){
console.log(`${num2} ${vincitore}`)}
else{
  (num1 == num2)
  console.log(uguaglianza)
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/*let datoFornito = parseInt(prompt("Inserisci qui il tuo numero"))
const numero = 5
let disuguaglianza = "not equal"
let ugualeA5 = " is equal"
if (datoFornito != numero){
  console.log(`${datoFornito} ${disuguaglianza}`)
}else{
  (datoFornito === numero)
  console.log(ugualeA5)
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/*let datoFornito1 = parseInt(prompt("Inserisci un numero intero e verifica se è divisibile per 5"))
let risultato1 = "è divisibile per 5"
let risultato2 = "non è divisibile per 5"
const cinque = 5
if(datoFornito1 % cinque ===0){
  console.log(risultato1)
}else{
  console.log(risultato2)
}



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*let valore1 = parseInt(prompt("Primo valore"))
let valore2 = parseInt(prompt("Secondo valore"))
const otto = 8
let risultato3 = "è uguale a"
let risultato4 = "la  loro sottrazione da come risultato"
let risultato5 = "la loro somma da come risultato"
let risultato6 = "Nessuno dei valori è uguale a 8 e nemmeno la loro somma o sottrazione"
if(valore1 === otto){
  console.log(`${valore1} ${risultato3} ${otto}`)
}else if(valore2 === otto){
  console.log(`${valore2} ${risultato3} ${otto}`)
}
else if (valore1 + valore2 ===otto){
  console.log(`${risultato5} ${otto}`)
}else if (valore1 - valore2 ===otto || valore2 - valore1 ===otto){
  console.log(`${risultato4} ${otto}`)
}else{console.log(`${risultato6}`)}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*let totalShoppingCart = parseInt(30)
const costoSpedizione = parseInt(10)
let totale = "il tuo totate ammonta a"
if(totalShoppingCart >=50){
  console.log(`${totalShoppingCart}`)
}else if (totalShoppingCart < 50){
  console.log(totalShoppingCart+costoSpedizione)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/*let totalShoppingCart = parseInt(60)
const costoSpedizione = parseInt(10)
totalShoppingCart = (totalShoppingCart*0.8)
let totale = "il tuo totate ammonta a"
if(totalShoppingCart >=50){
  console.log(`${totalShoppingCart}`)
}else if (totalShoppingCart < 50){
  console.log(totalShoppingCart+costoSpedizione)
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*let varA = 4
let varB = 2
let varC = 3
if (varA <= varB && varC){
  console.log(`${varA}`)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/*let valore = 3
console.log(typeof(valore))


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/*let numeroX = parseInt(prompt("vedi se è divisibile per 2"))
let pari = "è pari"
let dispari = "è dispari"
if (numeroX %2 ===0){
  console.log(`${numeroX} ${pari}`)
}else{console.log(dispari)}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  
  /*let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  city: 'Toronto',
  skills: ['javascript', 'html', 'css'],
}



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
/*console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log(me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/*let arr = []
arr.push(1)
arr.push(2)
arr.push(3)
arr.push(4)
arr.push(5)
arr.push(6)
arr.push(7)
arr.push(8)
arr.push(9)
arr.push(10)
/*console.log(arr)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/*arr.splice(9, 1 , 100)
/*console.log(arr)
