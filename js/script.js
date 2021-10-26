//selezione la parte del DOM dove caricare le card

const cardContainer = document.querySelector(".card-container");

// realizzo un ciclo per stampare tutte le cards

for (let i = 0; i < iconsList.length; i++) {
    const oneCard = iconsList[i];



cardContainer.innerHTML +=

`<div class="col">
<div class="card shadow-sm">
  <div class="card-img-top">
    <i class="${oneCard.family} ${oneCard.prefix}${oneCard.name}" style="color: blue"></i>
  </div>
  <div class="card-body">
    <div class="card-title text-center">${oneCard.name}</div>
  </div>
</div>
</div>`
    
}