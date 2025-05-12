const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";
let card = document.querySelector(".card");

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
    cardTemplate += `   <div class="imgcontainer">
                            <img src="${url}" alt="${title}" width="300" height="300" />
                            <img class="pin" src="./img/pin.svg" />
                        </div>
                        <div class="text">
                            <p>"${date}"</p>
                            <h3>"${title}"</h3>
                        </div>`;
    console.log(cardTemplate);
  });
  card.innerHTML = cardTemplate;
});
