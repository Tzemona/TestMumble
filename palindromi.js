
function palindromo(stringa){

    ////per soddisfare il livello 2 decommentare
    
    //stringa = stringa.toLowerCase();
    //stringa = stringa.replaceAll(" ","");

    ////livello 1
    
    let len = stringa.length;
    let inversa ='';

    //inverto la stringa
    for(i=0; i<len; i++){
        
        let x = stringa[len-1-i];
        inversa = inversa + x;
    }

    //console.log("lunghezza="+len);
    //console.log("originale="+stringa);
    //console.log("invertita="+inversa);

    //verifico se l'originale e l'inversa sono uguali,
    //in tal caso si tratta di palindromo
    if(stringa == inversa){
        console.log(true);
        return true;  
    }else{
        console.log(false);
        return false;
    };
};


// ho immaginato di collegarlo ad un button che restituisce a monitor l'esito
function run_palindromo(){
    let res; 

    res = palindromo(document.getElementById("testo").value);

    if(res == true){
        document.getElementById("risultato").innerHTML = "PALINDROMO!!";
    } else{
        document.getElementById("risultato").innerHTML = "NON E' PALINDROMO!!";   
    }
    
}

