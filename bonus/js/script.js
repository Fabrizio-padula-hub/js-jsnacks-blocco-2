// Chiedi un numero di 4 cifre all’utente e 
// calcola la somma di tutte le cifre che compongono il numero.



// chiedere all'utente un numero di 4 cifre
const askUser = prompt('Scrivi un numero di 4 cifre');


// vedere i numeri
let sum = 0;
for (let i = 0; i < askUser.length; i++) {
    const numberUser = parseInt(askUser[i]);
    console.log(numberUser)
    
    

    // calcolare la somma di tutte le cifre che compongono il numero
    sum += numberUser;
    

}
alert(`la somma dei tuoi numeri è ${sum}`);


