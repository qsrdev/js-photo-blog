const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";
let card = document.querySelector(".card");

axios.get(apiUrl).then((resp) => {
  const cardtemplate = "";
  const posts = resp.data;
  console.log(resp.data);

  posts.forEach((singlePost) => {
    const { title, date, url } = singlePost;
    console.log(title, date, url);
    card.innerHTML = `
    <img src="./img/pin.svg" />
                            <img src="${url}" alt="${title}" width="200" height="200">
                             <p>${date}</p>
                             <h3>${title}</h3>
                        
                    `;
  });
});
