const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";

//axios è una libreria che serve per effettuare richieste in HTTP
//la prima parte fa la richiesta ad apiURL
//then viene eseguito soltanto se la richiesta ha successo
axios.get(apiUrl).then((resp) => {
  //assegnamo a post la risposta dell'API - .data contiene il corpo della nostra risposta
  // in questo caso l'array contenente gli oggetti e lo chiamiamo posts
  const posts = resp.data;
  // console.log(posts);
  postPrinter(posts);
});

function postPrinter(arr) {
  //prendo row element con il dom
  const rowElem = document.querySelector(".row");
  //creo la variabile vuota dove vado andrò concatenare postTemplate che ha ciclato
  //gli object dell'array e quindi crea l'html pronto
  let cardTemplate = "";
  // arr = posts in questo caso - scorriamo ogni oggetto dell'array posts
  //postTemplate destruttura l'oggetto e inserisce i parametri dove mi servono
  //siccome postTemplate ritorna HTML posso concatenare dentro cardTemplate per avere
  //il codice pronto
  arr.forEach((singlePost) => (cardTemplate += postTemplate(singlePost)));
  //printo tramite API del dom con innerHTML
  rowElem.innerHTML = cardTemplate;
}

// destrutturiamo ogni oggetto che viene passato dentro questa funzione
// ritorna un HTML con diversi parametri inseriti nel testo
function postTemplate(post) {
  const { title, date, url } = post;
  return `<div class="col">
            <div class="card">
              <div class="imgcontainer">
                <img class="pin" src="./img/pin.svg" />
                <img id="open" src="${url}" alt="${title}" />
              </div>
              <div class="text">
                <p>${date}</p>
                <h2>${title}</h2>
              </div>
            </div>
          </div>`;
}
