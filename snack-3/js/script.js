// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e 
// in verde i numeri pari.

// avendo un array con dei numeri
const listNumber = [20, 40, 33, 28, 3, 56, 98, 45, 87, 39, 51, 44, 12, 17, 6, 9, 100, 103, 35, 63];

    // comparare se i numeri sono pari o dispari
for (let i = 0; i < listNumber.length; i++){
    const number = listNumber[i]; 
    console.log(number)


    if(number % 2 === 0){
        // prendere i numeri pari e spostarli nel div verde
        const greenDiv = document.querySelector('#green');
        greenDiv.style.color = 'green';
        greenDiv.innerHTML += number

        // prendere i numeri dispari e spostarli nel div rosso
    } else {
        const redDiv = document.querySelector('#red');
        redDiv.style.color = 'red';
        redDiv.innerHTML += number
    }
}






    



