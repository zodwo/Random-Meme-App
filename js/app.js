const GenerateMemeEL = document.querySelector(".header");
const memeTitle = document.querySelector(".content");
const cardWrapperEL = document.querySelector(".card-wrapper");

const getFetch = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDataList(data.url, data.title, data.author);
    });
};

//Create element
const MemeCreatorEL = document.createElement("div");
const imgs = document.createElement("img");

function updateDataList(img, title, author) {
  cardWrapperEL.appendChild(imgs);
  cardWrapperEL.appendChild(MemeCreatorEL);
  MemeCreatorEL.classList.add("creator");
  imgs.src = img;
  imgs.alt = title;
  memeTitle.textContent = title;
  MemeCreatorEL.textContent = "meme by: " + author;
}

GenerateMemeEL.addEventListener("click", () => {
  getFetch();
});

getFetch();
