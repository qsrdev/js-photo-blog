const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";
const openModal = document.getElementById("open");
const modalContainer = document.getElementById("modal_container");
const closeModal = document.getElementById("close");
const modalImg = document.getElementById("modal-img");

//axios è una libreria che serve per effettuare richieste in HTTP
//la prima parte fa la richiesta ad apiURL
//then viene eseguito soltanto se la richiesta ha successo
axios.get(apiUrl).then((resp) => {
  //assegnamo a post la risposta dell'API - .data contiene il corpo della nostra risposta
  // in questo caso l'array contenente gli oggetti e lo chiamiamo posts
  const posts = resp.data;
  // console.log(posts);
  postPrinter(posts);

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    console.warn("sto ciclando");
    console.log(card);

    card.addEventListener("click", function () {
      let textModal = "";
      let curID = this.getAttribute("data-id");
      console.log(curID);

      let post = posts.find((object) => parseInt(curID) === object.id);
      console.log(post);

      modalImg.src = post.url;
      // modalContainer.innerHTML = textModal += modalTemaplate(post);
      // modalTemaplate(posts)
      modalContainer.classList.add("show");
      console.log("add show");
    });
  });
  console.log(closeModal);
});

// closeModal.addEventListener("click", () => {
//   modalContainer.classList.remove("show");
//   console.log("remove show");
// });

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
  const { title, date, url, id } = post;
  return `<div class="col">
  <div class="card" data-id="${id}">
  <div class="imgcontainer">
  <img class="pin" src="./img/pin.svg" />
  <img src="${url}" alt="${title}" />
  </div>
  <div class="text">
  <p>${date}</p>
  <h2>${title}</h2>
  </div>
  </div>
  </div>`;
}

function modalTemaplate(post) {
  const { title, url } = post;
  return `<div class="modal">
  <button id="close">Close</button>
  <img src="${url}" alt="${title}" />
  </div>`;
}

closeModal.addEventListener("click", () => {
  modalContainer.classList.remove("show");
  console.log("remove show");
});
