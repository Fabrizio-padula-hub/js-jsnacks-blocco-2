// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


// chiedere all'utente due parole in successione
    const userWordsfirst = prompt('Scrivi la tua prima parola');
    const userWordssecond = prompt('Scrivi la tua seconta parola');

// confrontare le due parole per vedere quella più lòunga e quella più corta
    // se una delle due parole è più corta stamparla per prima
    if(userWordsfirst.length < userWordssecond.length){
        alert(`La parola corta è ${userWordsfirst} la parola lunga è ${userWordssecond}`);
    }
