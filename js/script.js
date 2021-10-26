//selezione la parte del DOM dove caricare le card

const cardContainer = document.querySelector(".card-container");

//creo un oggetto per associare al tipo di icona il colore
//lo posiziono prima del for per poter essere letto dal ciclo for

const coloriIcone= {
    animal:'blue',
    vegetable:'orange',
    user:'purple'

}




// realizzo un ciclo per stampare tutte le cards

for (let i = 0; i < iconsList.length; i++) {
    const oneCard = iconsList[i];

    //utilizzo il distracturing per lavorare con le proprietà 
    //degli oggetti dell'array
    const {name, prefix, family, type}=oneCard;

    const color = coloriIcone[type];

    // const color = coloriIcone[oneCard.type];
    // const color = coloriIcone[iconlist[i].type];
   
// creo l'HTML 

stampaCard(name,prefix,family,color);

    
}



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

        const {type, name, prefix,family} =iconsList[i]; //passo i singoli elementi di iconList

        const color = coloriIcone[type]; //passo il colore ( avrei potuto dichiarare entrambi in globale )

         if(!gruppoIcone[type]) {
             gruppoIcone[type]= [];  //se quel tipo/proprietà non c'è lo creo
         }

         gruppoIcone[type].push({
             name,
             prefix,
             family,
             color
         }); 
         
    }

    console.log(gruppoIcone);
}

const gruppoPerCategoria = raggruppoIcone(iconsList);

//raggruppoIcone(iconsList); //chiamo la funzione per il console log





function stampaUnaCategoria(lista) {

    // realizzo un ciclo per stampare tutte le cards
    
    for (let i = 0; i < lista.length; i++) {
        const oneCard = lista[i];
    
        //utilizzo il distracturing per lavorare con le proprietà 
        //degli oggetti dell'array
        const {name, prefix, family, type}=oneCard;
    
        const color = coloriIcone[type];
    
        // const color = coloriIcone[oneCard.type];
        // const color = coloriIcone[iconlist[i].type];
       
    // creo l'HTML 
    
    stampaCard(name,prefix,family,color);
    
        
    }
    
    }