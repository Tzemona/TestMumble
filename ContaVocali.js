
//livello1
function ContaVocali(stringa) {
    stringa = stringa.toLowerCase();
    var count = 0;

    for (i = 0; i < stringa.length; i++) {
        if (stringa[i] == "a") {
            count++;
        }
        if (stringa[i] == "e") {
            count++;
        }
        if (stringa[i] == "i") {
            count++;
        }
        if (stringa[i] == "o") {
            count++;
        }
        if (stringa[i] == "u") {
            count++;
        }
    }
    return count;
};

/*Livello 2
function ContaVocali(stringa) {
    stringa = stringa.toLowerCase();
    
    let count = {
        a:0,
        e:0,
        i:0,
        o:0,
        u:0
    }


    for (i = 0; i < stringa.length; i++) {
        if (stringa[i] == "a") {
            count.a++;
        }
        if (stringa[i] == "e") {
            count.e++;
        }
        if (stringa[i] == "i") {
            count.i++;
        }
        if (stringa[i] == "o") {
            count.o++;
        }
        if (stringa[i] == "u") {
            count.u++;
        }
    }
    console.log(count);
    return count;
};*/



//funzione di interfaccia per l'uso con il file esercizi.html
function run_contavocali(){
    let res; 

    res = ContaVocali(document.getElementById("testo").value);
    document.getElementById("risultato").innerHTML = "vocali="+res;
};


