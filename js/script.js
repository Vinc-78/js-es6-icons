//selezione la parte del DOM dove caricare le card

const cardContainer = document.querySelector(".card-container");

//creo un oggetto per associare al tipo di icona il colore
//lo posiziono prima del for per poter essere letto dal ciclo for

const coloriIcone = {
    animal: 'blue',
    vegetable: 'orange',
    user: 'purple'

}

/* commento il ciclo for per creare successivamente una funzione 
che stampi le singole categorie 

// realizzo un ciclo per stampare tutte le cards

for (let i = 0; i < iconsList.length; i++) {
    const oneCard = iconsList[i];

    //utilizzo il distracturing per lavorare con le proprietà 
    //degli oggetti dell'array

    const {name, prefix, family, type}=oneCard;

    const color = coloriIcone[type];
   
    // creo l'HTML 

     stampaCard(name,prefix,family,color);  
}

*/

// funzione esterna per realizzare l'HTML

function stampaCard(arg1, arg2, arg3, arg4) {

    cardContainer.innerHTML +=

        `<div class="col">
<div class="card shadow-sm">
  <div class="card-img-top">
    <i class="${arg3} ${arg2}${arg1}" style="color: ${arg4}"></i>
  </div>
  <div class="card-body">
    <div class="card-title text-center">${arg1}</div>
  </div>
</div>
</div>`

}


// ho bisogno ora di una funzione che raggruppi le icone 
//per tipo, family prefix e colore

function raggruppoIcone(iconsList) {

    //parto da un oggetto vuoto che avrà al sui interno
    //tanti array quanti i tipi di icone, ognuno pieno dell'elenco di icone

    const gruppoIcone = {}; // per ora è vuoto

    for (let i = 0; i < iconsList.length; i++) {

        const { type, name, prefix, family } = iconsList[i]; //passo i singoli elementi di iconList

        const color = coloriIcone[type]; //passo il colore ( avrei potuto dichiarare entrambi in globale )

        if (!gruppoIcone[type]) {
            gruppoIcone[type] = [];  //se quel tipo/proprietà non c'è lo creo
        }

        gruppoIcone[type].push({
            name,
            prefix,
            family,
            color
        });
        // ho così creato un nuovo oggetto diviso per type e che ha all'interno color
    }

    return gruppoIcone;
}


const gruppoPerCategoria = raggruppoIcone(iconsList);

//raggruppoIcone(iconsList); //chiamo la funzione per il console log

console.log(gruppoPerCategoria);



// creo una funzione che fa la stampa per una sola categoria 
//data una lista ossia quello che fa il for al rigo 20 per tutte le icone

function stampaUnaCategoria(lista) {

    // realizzo un ciclo per stampare tutte le cards

    for (let i = 0; i < lista.length; i++) {
        const oneCard = lista[i];

        //utilizzo il distracturing per lavorare con le proprietà 
        //degli oggetti dell'array
        const { name, prefix, family, color } = oneCard;

        // ho modificato il ciclo for in quanto in lista passo quello 
        //che ottengo da gruppoPerCategoria, è quindi una lista di oggetti
        //al cui interno color è presente 


        stampaCard(name, prefix, family, color);
    }
}

console.log(gruppoPerCategoria.user)

// /*provo se funziona stampando solo "user"-> */ 
//stampaUnaCategoria(gruppoPerCategoria.user);


//creo una funzione che indipendentemente dalla categoria o dalle categorie 
//fornite le stampa tutte

function stampaTutti(...tutteleCategorie) {

    cardContainer.innerHTML = "";

    for (let i = 0; i < tutteleCategorie.length; i++) {
        const unaCategoria = tutteleCategorie[i];

        stampaUnaCategoria(gruppoPerCategoria[unaCategoria], unaCategoria)

    }
}

//provo stampando tutte e tre le categorie ->
//stampaTutti("animal","user","vegetable")


//funzione che recupera la lista delle chiavi dell'oggetto gruppoIcone

function getCategoriaNome(gruppoIcone) {

    const listaNomi = [];
    for (const Key in gruppoIcone) {
        listaNomi.push( Key);
    }

    console.log(listaNomi);

    return listaNomi;

}

const gruppoNomiLista = getCategoriaNome(gruppoPerCategoria);

console.log(gruppoNomiLista);



//selezione la parte del DOM dove è presente la selezione delle categorie

const selettore = document.getElementById("filter_select");


//funzione che permette di aggiungere le opzioni di scelta

function passaLeOpzioni(listaOpzioni) {

    for (let i = 0; i < listaOpzioni.length; i++) {
      const nomeGruppo = listaOpzioni[i];
  
      selettore.innerHTML += `<option value='${nomeGruppo}'>${nomeGruppo}</option>`;
    }
  }


  // Array delle icone raggruppate
const gruppodelleIcone = raggruppoIcone(iconsList);

// Lista dei gruppi sotto forma di array di stringhe
const listaDeiGruppi = getCategoriaNome(gruppodelleIcone)

// genera le options della select
passaLeOpzioni(listaDeiGruppi);


// Stampa tutti i gruppi disponibili
stampaTutti(...listaDeiGruppi)


selettore.addEventListener("change", function (e) {
    
    const value = this.value; // valore scelto
  
    console.log(value);
  
    if (value === "") {

      // stampa tutte le categorie 
      stampaTutti(...listaDeiGruppi);
    } else {

      // Stampa solo la categoria scelta
      stampaTutti(value);
    }
  });

