// L'utente inserisce un numero nel prompt, se è pari stampa il numero,
// se è dispari stampa il numero successivo

// chiedere all'utente il numero
const numberUser = parseInt(prompt('Scrivi un numero'));

// verificare il numero dell'utente se è pari o dispari
// se è pari stampare il numero
// se è dispari 
// stampare il numero successivo
if (numberUser % 2 ===  0) {
    alert(`Il tuo numero ${numberUser} è pari`);
} else if (numberUser % 2 !==  0) {
    alert(`Il numero che hai scritto non è pari, stampo il successivo ${numberUser + 1}`);
}


    
    