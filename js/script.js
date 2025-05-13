const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";
let card = document.querySelector(".row");

axios.get(apiUrl).then((resp) => {
  const posts = resp.data;
  console.log(posts);

  //funzione che scorre l'array di oggetti e che destruttura ogni singolo oggetto ritornado
  // titolo data e url dell'immagine
  let cardTemplate = "";
  posts.forEach((singlePost) => {
    console.log(singlePost);
    const { title, date, url } = singlePost;
    console.log(title, date, url);
    cardTemplate += `<div class="col">
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

    console.log(cardTemplate);
  });
  card.innerHTML = cardTemplate;
});
