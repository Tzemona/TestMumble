//lista di prova
let elencostringhe = [
    "stringa_corta",
    "str",
    "stringa luuuuuuuuuuuuuuuunga"
];

//console log di prova
console.log(cornice(elencostringhe));


function cornice(lista) {

    //trovo la più lunga tra le stringhe

    let lmax = 0;

    for (i = 0; i < lista.length; i++) {
        if (lista[i].length > lmax) {
            lmax = lista[i].length;
        }
    }

    //preparo prima e ultima riga di asterischi
    var border = "";
    for (i = 0; i < lmax + 4; i++) {
        border += "*";
    }

    //stampo la prima riga di asterischi
    console.log(border);

    //stampo gli elementi della lista
    for (i = 0; i < lista.length; i++) {

        let row = "";
        let nspazi = lmax - lista[i].length;

        row = lista[i];
        row = row + " ".repeat(nspazi);
        console.log("* " + row + " *");
    }

    //stampo l'ultima riga di asterischi
    console.log(border);
}



