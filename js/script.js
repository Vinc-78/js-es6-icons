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
   
// reo l'HTML 

cardContainer.innerHTML +=

`<div class="col">
<div class="card shadow-sm">
  <div class="card-img-top">
    <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
  </div>
  <div class="card-body">
    <div class="card-title text-center">${name}</div>
  </div>
</div>
</div>`
    
}

