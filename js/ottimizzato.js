//selezione la parte del DOM dove caricare le card

const cardContainer = document.querySelector(".card-container");

//creo un oggetto per associare al tipo di icona il colore

const coloriIcone = {
  animal: 'blue',
  vegetable: 'orange',
  user: 'purple'

}

console.log(iconsList);


//uso map per creare il nuovo elenco di icone, aggiungendo anche la chiave colore e il relativo valore

const nuovaIconList = iconsList.map(icon => {


  let colore = coloriIcone[icon.type];

  /* coloriIcone[icon.type]

  for (const key in coloriIcone) {

    let valoreColore = coloriIcone[key]

    if (icon.type === key) {

      colore = valoreColore;

    }
  } */
  const { name, prefix, type, family } = icon
  return { name, prefix, type, family, colore }
});

console.log("il nuovo array con MAP è ", nuovaIconList)

/*************************************************** */
//selezione la parte del DOM dove avviene la selezione

const selezione = document.getElementById("filter_select");

//aggiungo l'evento

selezione.addEventListener("change", function () {

  let tipoSelezionato = selezione.value;

  let argomento = "";

  switch (tipoSelezionato) {
    case "0":
      argomento = "tutte"
      break;
    case "1":
      argomento = "animal"
      break;
    case "2":
      argomento = "vegetable"
      break;
    case "3":
      argomento = "user"
      break;
  }

  console.log(argomento);

  if (argomento === "tutte") {

    const iconeFiltratoAll = nuovaIconList;

    console.log(iconeFiltratoAll)

    stampaLista(iconeFiltratoAll)

  } else {

    const iconeFiltrato = nuovaIconList.filter(icona => { return icona.type === argomento })

    console.log(iconeFiltrato)

    stampaLista(iconeFiltrato)

  }

});

// funzione esterna per realizzare l'HTML

function stampaLista(lista) {

  cardContainer.innerHTML = " "

  for (let i = 0; i < lista.length; i++) {

    const oneCard = lista[i];

    const { name, prefix, family, type } = oneCard;

    const color = coloriIcone[type];

    // creo l'HTML 

    stampaCard(name, prefix, family, color);

  }

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




